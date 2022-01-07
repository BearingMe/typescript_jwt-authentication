import express from "express";

function verifyToken(
  req: any,
  res: express.Response,
  next: express.NextFunction
) {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ error: "No token provided" });
  }

  if (typeof token !== "undefined") {
    req.token = token;

    next();
  }
}

export default verifyToken;
