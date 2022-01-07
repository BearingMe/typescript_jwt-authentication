import express from "express";
import jwt from "jsonwebtoken";

import verifyToken from "./middlewares/token";

const app: express.Application = express();
const port: any = process.env.PORT ?? 3000;

app.get("/api", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

app.post("/api/secret", verifyToken, (req: any, res: express.Response) => {
  const authData = jwt.verify(req.token, "secretkey");

  res.json({
    message: "Hello World",
    authData,
  });
});

app.post("/api/login", (req: express.Request, res: express.Response) => {
  // mock user
  const user = {
    username: "admin",
    password: "admin",
  };

  const token = jwt.sign({ user }, "secretkey");

  res.json({ token });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
