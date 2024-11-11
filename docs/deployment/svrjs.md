# Deploy with SVR.JS

SVR.JS is web server software running on Node.JS. This tutorial will guide you on how to deploy MERNMail application with SVR.JS web server.

Follow these steps to install and set up MERNMail with SVR.JS on GNU/Linux systems:

## 1. Install SVR.JS

First, install SVR.JS:

```bash
curl -fsSL https://downloads.svrjs.org/installer/svr.js.installer.linux.20240509.sh > /tmp/installer.sh && sudo bash /tmp/installer.sh
```

You can also copy the installation command from the [SVR.JS website](https://svrjs.org)

## 2. Configure SVR.JS

Open the `/etc/svrjs-config.json` file in your preferred text editor, and alter the configuration like this (`wwwroot` webroot property in the SVR.JS configuration serves as MERNMail application root):

```json
{
  "customHeaders": {
    "x-content-type-options": "nosniff",
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'sha256-VA8O2hAdooB288EpSTrGLl7z3QikbWU9wwoebO/QaYk=' 'sha256-+5XkZFazzJo8n0iOP4ti/cLCMUudTf//Mzkb7xNPXIc=' 'sha256-MS6/3FCg4WjP9gwgaBGwLpRCY6fZBgwmhVCdrPrNf3E=' 'sha256-tQjf8gvb2ROOMapIxFvFAYBeUJ0v1HCbOcSmDNXGtDo='; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; frame-src 'self' data:",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), camera=(), microphone=(), fullscreen=*",
    "Feature-Policy": "geolocation 'none', camera 'none', microphone 'none', fullscreen *"
  },
  "nonStandardCodes": [
    {
      "scode": 403,
      "regex": "/^\\/\\.env(?:\\.local|\\.production)?(?:$|[#?])/"
    },
    {
      "scode": 403,
      "regex": "/^\\/\\.git/"
    }
  ],
  "wwwroot": "/var/lib/mernmail",
  ... other configuration options
}
```

## 3. Set up MERNMail

Run these commands to set up MERNMail:

```bash
cd /var/lib
git clone https://git.svrjs.org/mernmail/mernmail.git
chown -hR svrjs:svrjs /var/lib/mernmail
cd mernmail
sudo runuser svrjs -s /bin/bash -c 'cd /var/lib/mernmail && npm install && npm run build'
```

## 4. Configure MERNMail

Copy the `.env.example` file to a `.env` file in the MERNMail root directory (like `/var/lib/mernmail`). The configuration options can be found in the [Configuration](/docs/configuration) page.

For additional security, you can set the permissions for the `.env` file using this command:
```bash
sudo chmod 600 /var/lib/mernmail/.env
```

## 5. Install MERNMail integration mod

Run these commands to install the MERNMail integration mod for SVR.JS (replace `/usr/lib/svrjs` with SVR.JS installation directory):

```bash
cd ~
git clone https://git.svrjs.org/mernmail/mernmail-svrjs-mod.git
cd mernmail-svrjs-mod
npm install
npm run build
cp dist/mod.js /usr/lib/svrjs/mods/mernmail.js
```

## 6. Restart SVR.JS

Restart SVR.JS using either `sudo systemctl restart svrjs` or `sudo /etc/init.d/svrjs restart` command.

## Updating MERNMail

To update the MERNMail webmail application, run this command:

```bash
sudo runuser svrjs -s /bin/bash -c 'cd /var/lib/mernmail && git pull && npm install && npm run build'
```

After updating MERNMail, restart SVR.JS using either `sudo systemctl restart svrjs` or `sudo /etc/init.d/svrjs restart` command.