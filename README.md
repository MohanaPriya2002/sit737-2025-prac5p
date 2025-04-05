# Introduction
- This task is a simple application crafted with Docker and Docker-Compose files for easy set-up and developments.

# Installation
## Pre-Requisitest
- Install Node.js, Docker desktop on your system.

## Steps to Install
- Clone the Repository
  ```bash
  git clone git@github.com:MohanaPriya2002/sit737-2025-prac5p.git
  ```
- Navigate to the project folder
  ```bash
  cd project-folder-name
  ```
- Install dependencies
  ```
  npm install
  ```
- Install Express
  ```bash
  npm install express
  ```
## Run the App
**Docker Commands**
- We will run the application using Docker Compose
  ```bash
  docker-compose up --build
  ```
- Once the application is build and running like check the logs and push the image to Docker
  ```bash
  docker ps
  ```
  ```bash
  docker tag sit737-2025-prac5p-app:latest lakshmimohanapriyam232/sit737-2025-prac5p-app:latest
  ```
  ```bash
  docker push lakshmimohanapriyam232/sit737-2025-prac5p-app:latest
  ```

- Here we also run the app using Docker networks, by ruuning two networks by bridging them.
   ```bash
  docker run -d --name test --network=bridge sit737-2025-prac5p-app
  ```
  ```bash
  docker run -d --name test2 --network=bridge sit737-2025-prac5p-app
  ```
  - Inspect the second container
   ```bash
  docker inspect test2
  ```
  - Find the IP address and ping it to test container
   ```bash
  docker exec -it test /bin/bash
  ```
  - If your ip command is not working-- install the following inside the command of test
  ```
  apt update && apt install -y iproute2 iputils-ping curl
  ```
  - Then
  ```bash
  ip ip-address of test2
  ```
  ```bash
  ping ip-address of test2
  ```
