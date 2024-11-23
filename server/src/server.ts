import express, { Request, Response, Express } from "express";
import morgan from "morgan";
import "dotenv/config";
import route from "./routes/route";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started already on Port ${PORT} `);
});
