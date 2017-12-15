#!/bin/bash
docker build -t dgkanatsios/azuregamechatserver:0.1 .
docker push dgkanatsios/azuregamechatserver:0.1
docker run -p 3000:3000 --name azuregamechatserver dgkanatsios/azuregamechatserver:0.1