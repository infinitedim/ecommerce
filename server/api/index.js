import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("ok");
});

export default app;
