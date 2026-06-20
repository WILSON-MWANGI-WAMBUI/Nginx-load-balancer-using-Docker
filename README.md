*npm install*
*docker build -t myapp:1.0 .* image is biult ... check on docker
*docker images | grep myapp*
*docker run -p 3000:3000 myapp:1.0 . , docker stop * , refresh ,
*docker compose up --build -d*-- *starts all the 3 app instances*
*docker ps* , we see all 3 containers are running same the app
*docker logs 'container id'*
// installing and configuring nginx, as a load balancer and as a proxy that secures access and configuration before tyhe request reaches the backend server//
    1. install nginx locally *mac os, brew install nginx*
    2. check version *nginx -v*
    3. do configuration as a proxy and as a web server to change the behaviour.
    4. location of nginx-- *whereis nginx*, then *nginx -v* shows more information about configuration including where config file is located *copy path*

*cat /path/nginx.config* -- printsout the content , then open file on vs code
crtl+shift+p  type "shell" --choose install code in path-- open config file for nginx 
