import express, { Request, Response, Express } from "express";
import morgan from "morgan";
import "dotenv/config";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.json({
    hello: "world!!",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started already on Port ${PORT} `);
});
