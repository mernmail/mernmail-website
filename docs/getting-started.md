# Getting started

Welcome to MERNMail! This guide will help you set up and run MERNMail on your local machine. MERNMail is an open-source webmail application built using the MERN stack (MongoDB, Express, React, Node.JS).

## Prerequisites

Before you begin, ensure you have the following software and tools installed on your machine:

- **Node.JS**: Make sure you have Node.JS installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager (npm) comes with Node.JS. Ensure it is installed and up to date.
- **MongoDB**: Install MongoDB from [mongodb.com](https://www.mongodb.com/).
- **Git**: Install Git from [git-scm.com](https://git-scm.com/).

## Installation

Follow these steps to install and set up MERNMail:

### 1. Clone the Repository

First, clone the MERNMail repository:

```bash
git clone https://git.svrjs.org/mernmail/mernmail.git
cd mernmail
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 3. Configuration

Copy the `.env.example` file to a `.env` file in the root directory of the project. The configuration options can be found in the "TODO" page.

### 4. Running the Application

Start the MERNMail server:

```bash
npm start
```

### 5. Accessing the Application

Open your web browser and navigate to `http://localhost:3000` to access the MERNMail application.

## Next Steps

Now that you have MERNMail up and running, you can explore the following sections of the documentation:

- [**Configuration**](/docs/configuration): Learn how to configure MERNMail.
- [**Usage**](/docs/usage): Understand how to use MERNMail for sending and receiving emails.
- [**Deployment**](/docs/deployment): Learn how to deploy the MERNMail webmail application.