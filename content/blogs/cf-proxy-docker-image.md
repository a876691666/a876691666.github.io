---
title: 使用 Cloudflare Workers 搭建 Docker 镜像代理
date: 2023-08-01
description: 通过 Cloudflare Workers 搭建自己的 Docker 镜像中转节点，解决国内 Docker 加速源不可用的问题
image: /blogs-img/blog4.jpg
alt: 使用 Cloudflare Workers 搭建 Docker 镜像代理
ogImage: /blogs-img/blog4.jpg
tags: ['docker', 'cloudflare', 'proxy', 'workers']
published: true
---

### 背景

目前国内 docker 加速源逐渐用不了了。就想着自己搭一个镜像中转的节点。

这里使用 [`hammal`](https://singee.atlassian.net/wiki/spaces/MAIN/pages/5079084/Cloudflare+Workers+Docker) 的方案，通过 `Cloudflare Workers` 搭建。

[hammal官方教程](https://singee.atlassian.net/wiki/spaces/MAIN/pages/5079084/Cloudflare+Workers+Docker)

### 前提

- 网络环境能正常访问`cloudflare`。
- 有自己的域名。

### 安装方法

这里截取官方教程的部分。

---

#### Fork & Clone

首先 fork 仓库 [`GitHub - ImSingee/hammal: docker-registry proxy run in cloudflare workers`](https://github.com/ImSingee/hammal) ，并克隆到本地

> 可以的话顺便给个 Star😂

使用 pnpm install 安装依赖。没有的话使用 npm 安装 pnpm。

```bash
npm install -g pnpm
```

其实这里不确定npm和pnpm对项目包安装有什么影响，能用pnpm尽量用pnpm。

#### 创建 Workers 项目

进入 `Cloudflare Dashboard` -> `Workers 和 Pages` -> `概述` 创建一个新的 Workers 项目，给他一个命名（例如 hammal）

在代码中复制 wrangler.toml.sample 文件, 改名 wrangler.toml 并修改其 name 和 account_id

name: 创建的 Worders 项目名
account_id: 可以通过 npx wrangler whoami 获得，也可以在 Workers 概述页面右侧的账户ID处复制。

#### 创建 cache 缓存 kv

在克隆好的项目目录下执行 npx wrangler kv:namespace create hammal_cache 来创建缓存 kv，记录下来输出的 id，填写到 wrangler.toml 文件中

#### 部署

在克隆好的项目目录下执行 pnpm run deploy 来部署项目

#### 域名

有域名则需要把域名的 `名称服务器(name server)` 改到 cloudflare 上，可以在 `网站` -> `添加的域名` -> `DNS` -> `记录` 页面下获取。

设置后一般等待24小时即可在 cloudflare 上控制域名解析。

可以解析后前往 `Workers 和 Pages` -> `用来获取docker的Workder` -> `设置` -> `触发器` -> `自定义域` -> `添加自定义域`。直接输入完整访问域名即可。例如`mirror.docker.xxx.com`。

#### 本地Docker设置

使用自定义的域名设置 `deamon.json`。通常在 /etc/docker/daemon.json 。

```bash
sudo tee /etc/docker/daemon.json <<EOF
{
  "registry-mirrors": [
    "https://mirror.docker.xxx.com"
  ]
}
EOF
```
