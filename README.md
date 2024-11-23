For first time to run the project, you need to run the following command to create the database schema.

```shell
npx prisama init
npx prisma migrate dev --name init
npx prisma generate
```
If you ever change the prisma schema, you need to run the following command to update the database schema.
```shell
npx prisma migrate dev
npx prisma generate
```

At the end of this project you can run the following command to access frontend/backend at same time.
This is achieved using concurrently package.
```shell
npm run dev // on the client folder
```