---
title: 在ECS上安装和部署MinIO S3存储服务
date: 2023-08-01
description: 详细介绍如何在CentOS Stream 9系统上安装和配置MinIO服务，替代AWS S3存储方案
image: /blogs-img/blog3.jpg
alt: 在ECS上安装和部署MinIO S3存储服务
ogImage: /blogs-img/blog3.jpg
tags: ['minio', 'ecs', 'centos', 's3', '存储']
published: true
---

### 背景

尝试裸机部署minio，来代替AWS S3服务。

### 安装

#### 下载二进制运行程序

这里使用的是 amd64 centos-stream-9 操作系统

```bash
# MinIO Server
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio

# MinIO Client
wget https://dl.min.io/client/mc/release/linux-amd64/mc
chmod +x mc
```

#### 创建service文件

##### server

```bash
vim /usr/lib/systemd/system/minio.server.service
```

粘贴内容：

```ini
[Unit]
Description=S3存储

[Service]
WorkingDirectory=/data/minio
Type=simple
User=root
Group=root
ExecStart=/data/minio/minio server /data/minio/data --console-address ":9001"
Restart=always
RestartSec=10
SyslogIdentifier=minio-server
Environment=MINIO_ROOT_USER=admin
Environment=MINIO_ROOT_PASSWORD=RanDoMPAsSWoRD
```

##### client

```bash
vim /usr/lib/systemd/system/minio.client.service
```

```
[Unit]
Description=S3存储 客户端

[Service]
WorkingDirectory=/data/minio
Type=simple
User=root
Group=root
ExecStart=mc alias set myminio/ //127.0.0.1 admin RanDoMPAsSWoRD
Restart=always
RestartSec=10
SyslogIdentifier=minio-client
```

### 运行

```bash
systemctl daemon-reload

systemctl start minio.server.service
systemctl enable minio.server.service

systemctl start minio.client.service
systemctl enable minio.client.service
```
