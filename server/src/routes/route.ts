import express from "express";
import { getAllUsers } from "../controllers/controllers";

const route = express.Router();

route.get("/users", getAllUsers);

export default route;
