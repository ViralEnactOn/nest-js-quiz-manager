export const config = {
  appSecret: process.env.APP_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USERNAME,
  dbPass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};

console.log({ process: process.env.DATABASE_USER });
