# Deploy with PM2 + Ferron

PM2 is a process manager for Node.JS applications with a built-in load balancer. Ferron is a fast, memory-safe web server written in Rust, that can be also used as a reverse proxy. This tutorial will guide you on how to deploy MERNMail application with PM2 and Ferron on GNU/Linux systems.

## 1. Clone the Repository

First, change your working directory to your home directory, and clone the MERNMail repository:

```bash
cd ~
git clone https://github.com/mernmail/mernmail.git
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

After running the `pm2 startup` command, run the command shown in the terminal to start the PM2 daemon when the OS boots up.

## 5. Install and Set Up Ferron

Install Ferron using the command below:

```bash
sudo bash -c "$(curl -fsSL https://downloads.ferronweb.org/install.sh)"
```

After installing Ferron, open your preferred text editor, and save these contents to the `/etc/ferron.yaml` file (replace `/home/user` with path to your home directory; also check the port the MERNMail application listens to; this configuration causes Ferron to only listen to port 80):

```yaml
global:
  loadModules:
    - rproxy

hosts:
  - domain: '*'
    customHeaders:
      x-content-type-options: nosniff
      Content-Security-Policy: >-
        default-src 'self'; script-src 'self'
        'sha256-VA8O2hAdooB288EpSTrGLl7z3QikbWU9wwoebO/QaYk='
        'sha256-+5XkZFazzJo8n0iOP4ti/cLCMUudTf//Mzkb7xNPXIc='
        'sha256-MS6/3FCg4WjP9gwgaBGwLpRCY6fZBgwmhVCdrPrNf3E='
        'sha256-tQjf8gvb2ROOMapIxFvFAYBeUJ0v1HCbOcSmDNXGtDo='; style-src 'self'
        'unsafe-inline'; img-src 'self' data: *; frame-src 'self' data:
      Referrer-Policy: strict-origin-when-cross-origin
      Permissions-Policy: 'geolocation=(), camera=(), microphone=(), fullscreen=*'
      Feature-Policy: 'geolocation ''none'', camera ''none'', microphone ''none'', fullscreen *'
    locations:
      - path: /api
        proxyTo: 'http://localhost:3000'
        # If there was "http://localhost:3000/api" value in "proxyTo" property and no URL rewriting,
        # then the API requests would be proxied to MERNMail with URL that begins with "http://localhost:3000/api/api/"
      - path: /
        wwwroot: /home/user/mernmail/frontend/dist
```

## 6. Restart Ferron

Restart Ferron using either `sudo systemctl restart ferron` or `sudo /etc/init.d/ferron restart` command.

## Updating MERNMail

To update the MERNMail webmail application, run these commands:

```bash
cd ~/mernmail
git pull
npm install
npm run build
```

After updating MERNMail, restart MERNMail using the `pm2 restart "MERNMail"` command.