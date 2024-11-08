# Configuration

This guide will walk you through the process of configuring MERNMail. The configuration is managed through environment variables, which are defined in a `.env` file. An example `.env.example` file is provided in the repository to help you get started.

## Creating the `.env` File

1. **Copy the `.env.example` File**:
   First, copy the `.env.example` file to create a new `.env` file in the root directory of your project:

   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` File**:
   Open the `.env` file in your preferred text editor and update the values as needed.

## Configuration Options

### General Settings

- **PORT**: The port on which the MERNMail server listens.
- **ATTACHMENTS_PATH**: The absolute path to the directory that contains attachments. If not set, the "attachments" directory in the script root will be used.

### Database Configuration

- **MONGODB_CONNSTRING**: The MongoDB connection string.

### Encryption Settings

- **ENCRYPTION_SECRETKEY**: A 256-bit secret key for password encryption. You can generate this key using the command `openssl rand -base64 32`.
- **ENCRYPTION_IV**: A 128-bit IV for password encryption. You can generate this IV using the command `openssl rand -base64 16`.

### JWT Configuration

- **JWT_SECRET**: The secret key for JWT (JSON Web Token) authentication. You can generate this key using the command `openssl rand -base64 32`.
- **JWT_SECURECOOKIE**: Set this to `1` if users access the webmail from HTTPS.

### Email Receiving Configuration

- **EMAIL_RECV_PROTOCOL**: The email receiving protocol. This can be `pop3` or `imap`.
- **EMAIL_RECV_HOST**: The host for receiving emails.
- **EMAIL_RECV_PORT**: The port for receiving emails.
- **EMAIL_RECV_TLS**: Set this to `1` to enable TLS for receiving emails.
- **EMAIL_RECV_ALLOWBADCERTIFICATES**: Set this to `1` to allow bad TLS certificates for receiving emails.
- **EMAIL_RECV_DISCARDDOMAIN**: Set this to `1` to log into email server without the email domain in the username.

### Email Sending Configuration

- **EMAIL_SEND_PROTOCOL**: The email sending protocol. This can be `smtp`.
- **EMAIL_SEND_HOST**: The host for sending emails.
- **EMAIL_SEND_PORT**: The port for sending emails.
- **EMAIL_SEND_TLS**: Set this to `1` to enable TLS for sending emails. If using STARTTLS, set this to `0`.
- **EMAIL_SEND_ALLOWBADCERTIFICATES**: Set this to `1` to allow bad TLS certificates for sending emails.
- **EMAIL_SEND_DISCARDDOMAIN**: Set this to `1` to log into email server without the email domain in the username.

## Example Configuration

Here is an example of what your `.env` file might look like:

```shell
PORT=3000
ATTACHMENTS_PATH=/path/to/attachments
MONGODB_CONNSTRING=mongodb://localhost:27017/mernmail
ENCRYPTION_SECRETKEY=your_256_bit_secret_key
ENCRYPTION_IV=your_128_bit_iv
JWT_SECRET=your_jwt_secret
JWT_SECURECOOKIE=1
EMAIL_RECV_PROTOCOL=imap
EMAIL_RECV_HOST=imap.example.com
EMAIL_RECV_PORT=993
EMAIL_RECV_TLS=1
EMAIL_RECV_ALLOWBADCERTIFICATES=0
EMAIL_RECV_DISCARDDOMAIN=0
EMAIL_SEND_PROTOCOL=smtp
EMAIL_SEND_HOST=smtp.example.com
EMAIL_SEND_PORT=587
EMAIL_SEND_TLS=0
EMAIL_SEND_ALLOWBADCERTIFICATES=0
EMAIL_SEND_DISCARDDOMAIN=0
```

## Next Steps

After configuring the `.env` file, you can start the MERNMail server by following the instructions in the [Getting started](/docs/getting-started) section.