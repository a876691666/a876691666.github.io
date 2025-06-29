---
title: 如何为npm设置本地代理加速包下载
date: 2023-08-01
description: 介绍如何通过设置本地代理来加速npm、yarn、pnpm的包下载速度，适用于不喜欢使用源地址加速的开发者。
image: /blogs-img/blog1.jpg
alt: 如何为npm设置本地代理加速包下载
ogImage: /blogs-img/blog1.jpg
tags: ['npm', 'proxy', '代理', 'yarn', 'pnpm']
published: true
---

本地挂代理访问流畅，但是拉包巨慢。

适用于不喜欢源地址加速的人。

```bash
npm config set proxy //localhost:7890
#------------------注意http拼写----------------#
npm config set https-proxy //localhost:7890
```

设置后 `npm`, `yarn`, `pnpm`都会走本地代理。

停止代理的话要取消掉配置设置，否则无法拉包。

```bash
npm config delete proxy
npm config delete https-proxy
```
