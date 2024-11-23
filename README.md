For first time to run the project, you need to run the following command to create the database schema.

```shell
npx prisama init
npx prisma migrate dev --name init
npx prisma generate
```
If you ever change the prisma schema, you need to run the following command to update the database schema.
```shell
npx prisma migrate dev
```