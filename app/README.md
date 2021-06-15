<img src="public/WirHelfen_Logo_Schwarz.png" alt="logo" width="100"/>

# Wirhelfen EU Frontend

## Getting Started
Important: If you haven't please configure the backend first by following the README.md in the ~./api folder.

First create a .env file with the neccecary information. Configure your backend (eg.: http://localhost:1337 for strapi backend) and you authenticated user . If you want to utilize the nextauth athentication providers add your secrets here too.

We recommend using Sendgrid's free tier as email server

**Example .env**
```
BACKEND_URL=http://localhost:1337
BACKEND_USER=...
BACKEND_PASSWORD=...
GITHUB_ID=...
GITHUB_SECRET=..
EMAIL_SERVER_USER=...
EMAIL_SERVER_PASSWORD=...
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=25 
EMAIL_SERVER_PORT_SECURE=465
EMAIL_FROM=...
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=sqlite://localhost/:memory
```

**Install dependencies**
```
$ npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### **Theming:**
This application uses tailwind.css for styling



### **Add Authentication Providers:**

To add oauth providers edit the nextauth.js at: 
```
├── app
|   └── pages
|       └── api
|           └── auth
|               └── [...nextauth].js
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
