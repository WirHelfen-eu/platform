<img src="../app/public/WirHelfen_Logo_Schwarz.png" alt="logo" width="100"/>

# Wirhelfen.eu Platform 2.0 Backend

## Getting Started
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
