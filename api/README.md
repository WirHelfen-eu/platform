<img src="../app/public/WirHelfen_Logo_Schwarz.png" alt="logo" width="100"/>

# Wirhelfen.eu Platform 2.0 Backend

## Getting Started
### **Configure**
- Go to https://github.com/settings/developers (You need to be signed in on Github)
- Click "New OAuth APP"
- Enter `http://localhost:3000` as "Authorization callback URL" and "Homepage URL" and enter a name of you choice as "Application Name"
- Click "Register Application"
- Copy "Client ID" to the Variable `GITHUB_ID` in your `.env` File inside the `app` Directory (if not already done copy the `.env.example` into a new `.env`)
- Click "Generate a new client secret"
- Copy the generated Client Secret to the `GITHUB_SECRET` Variable in the same file

### **Install dependencies:**
```
cd api && npm install
```

### **Run:**
```
strapi develop
```

### **Create Admin User:**
Visit localhost:1337 and follow the steps to create an admin user

### **Configure**
- Create a user for the frontend that authenticates against the backend and add it tou tour .env in /app:
- Change permissions for Content Types if needed so that authenticated users can access all content types. (http://localhost:1337/admin/settings/users-permissions/roles/1)

For everything else please refer to the Developer Documentation https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html
