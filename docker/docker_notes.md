# Notes on Docker

For installation, check the website.

## Practical commands
```bash

# list containers:
$ docker ps -a

# list images:
$ docker images

# build an image (-t means tag)
$ docker build -t my_image .  

# rename an image
$ docker tag 7d9495d03763 maryatdocker/docker-whale:latest

# login into docker hub
$ docker login --username=uname --email=user.user@usermail.com

# push your image to the hub
$ docker push uname/docker-whale

# remove an image locally
$ docker rmi -f uname/docker-whale

# pull and run
$ docker run uname/docker-whale

# some cool run arguments
# -d    detach: run the container in the background
# -P    leave an open port


```
