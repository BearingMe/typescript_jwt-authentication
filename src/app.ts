import express from "express";

const app: express.Application = express();
const port: any = process.env.PORT ?? 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
