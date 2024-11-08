# Deploy with PM2 + NGINX

PM2 is a process manager for Node.JS applications with a built-in load balancer. NGINX is a popular web server and reverse proxy software. This tutorial will guide you on how to deploy MERNMail application with PM2 and NGINX on GNU/Linux systems.

## 1. Clone the Repository

First, change your working directory to your home directory, and clone the MERNMail repository:

```bash
cd ~
git clone https://git.svrjs.org/mernmail/mernmail.git
cd mernmail
```

## 2. Install Dependencies and Build the Application

Navigate to the project directory, install the necessary dependencies, and build the MERNMail application:

```bash
npm install
npm run build
```

## 3. Configuration

Copy the `.env.example` file to a `.env` file in the root directory of the project. The configuration options can be found in the [Configuration](/docs/configuration) page.

## 4. Install and Set Up PM2

Install and set up PM2:

```bash
npm install -g pm2
pm2 start npm --name "MERNMail" --start
pm2 startup
```

After running the `pm2 startup` command, run the command shown in the output to the terminal to start the PM2 daemon when the OS boots up.

## 5. Install and Set Up NGINX

Install NGINX using `sudo apt install nginx` on Debian-based systems, `sudo pacman -S nginx` on Arch-based systems, or `sudo dnf install nginx` on Red Hat-based systems.

After installing NGINX, open your preferred text editor, and save these contents to the `/etc/nginx/sites-available/mernmail` file (replace `/home/user` with path to your home directory; also check the port the MERNMail application listens to; this configuration causes NGINX to only listen to port 80):

```nginx
server {
    listen 80;
    server_name _;

    add_header x-content-type-options "nosniff";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'sha256-VA8O2hAdooB288EpSTrGLl7z3QikbWU9wwoebO/QaYk=' 'sha256-+5XkZFazzJo8n0iOP4ti/cLCMUudTf//Mzkb7xNPXIc=' 'sha256-MS6/3FCg4WjP9gwgaBGwLpRCY6fZBgwmhVCdrPrNf3E=' 'sha256-tQjf8gvb2ROOMapIxFvFAYBeUJ0v1HCbOcSmDNXGtDo='; style-src 'self' 'unsafe-inline'; frame-src 'self' data:";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Permissions-Policy "geolocation=(), camera=(), microphone=(), fullscreen=*";
    add_header Feature-Policy "geolocation 'none', camera 'none', microphone 'none', fullscreen *";

    location /api/ {
        proxy_pass http://localhost:3000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        root /home/user/mernmail/frontend/dist;
        try_files $uri $uri/ =404;
    }
}
```

After creating the NGINX configuration file, run these commands to enable the new NGINX configuration:
```bash
sudo rm /etc/nginx/sites-enabled/*
sudo ln -s /etc/nginx/sites-available/mernmail /etc/nginx/sites-enabled/mernmail
```

## 6. Restart NGINX

Restart NGINX using either `sudo systemctl restart nginx` or `sudo /etc/init.d/nginx restart` command.