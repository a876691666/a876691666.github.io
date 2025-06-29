---
title: 在国内云服务器上安装 Docker CE 的完整指南
date: 2023-08-01
description: 在国内云服务器上安装Docker CE时经常遇到网络问题，本文提供了使用国内镜像源的完整解决方案。
image: /blogs-img/blog2.jpg
alt: 在国内云服务器安装Docker CE指南
ogImage: /blogs-img/blog2.jpg
tags: ['docker', 'linux', 'centos', '运维']
published: true
---

### 背景

在国内的云服务器，无法直接安装 `docker-ce`。

官方 `yum` 源安装巨慢或者完全访问不到。

### 安装

#### 首先安装工具。

```bash
sudo yum install -y yum-utils
```

#### 然后增加docker-ce的官方 `yum` 源 `repo`。

```bash
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

如果官方repo都访问不了，就从国内下载repo

阿里云:

```bash
yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

清华大学:

```bash
yum-config-manager \
    --add-repo \
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
```

repo文件会被下载到 `/etc/yum.repos.d/docker-ce.repo`。

#### 替换更改 `repo` 文件中的地址。

这里使用的是清华大学源

```bash
sed -i 's+https://download.docker.com+https://mirrors.tuna.tsinghua.edu.cn/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

#### 更改地址后直接yum安装即可

```bash
yum install docker-ce
```
