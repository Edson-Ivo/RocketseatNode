import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json);

app.use(routes);

// servidor
app.listen(3333, () => console.log("servidor rodando na porta 3333"));

