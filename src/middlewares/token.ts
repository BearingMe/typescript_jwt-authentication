import express from "express";

function verifyToken(
  req: any,
  res: express.Response,
  next: express.NextFunction
) {
  const auth: string | undefined = req.headers.authorization;

  if (!auth) {
    return res.status(401).send({ error: "No token provided" });
  }

  if (typeof auth !== "undefined") {
    const token: string = auth.split(" ")[1];
    req.token = token;

    next();
  }
}

export default verifyToken;
