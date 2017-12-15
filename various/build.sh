#!/bin/bash
docker build -t dgkanatsios/azuregamechat:0.1 .
docker push dgkanatsios/azuregamechat:0.1
docker run -p 3000:3000 --name azuregamechat dgkanatsios/azuregamechat:0.1