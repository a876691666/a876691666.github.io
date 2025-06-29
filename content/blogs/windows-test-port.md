---
title: Windows 端口连接测试方法
date: 2023-08-01
description: 在Windows系统中使用PowerShell的Test-NetConnection命令来测试网络端口连接的方法。
image: /blogs-img/blog5.jpg
alt: Windows 端口连接测试方法
ogImage: /blogs-img/blog5.jpg
tags: ['windows', 'powershell', 'networking']
published: true
---

打开PowerShell

```bash
Test-NetConnection -ComputerName google.com -Port 443
```
