import { Router } from "express";
export const auth = new Router();
// TODO implement JWT

auth.all("*", async (req, res, next) => {
  if ("/status" == req.path) next();
  // else check valid token
  next();
});
