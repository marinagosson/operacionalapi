import { Router } from "express";
import { Dispositivo } from "../models";

export const dispositivo = new Router();

dispositivo.post("/", (req, res) => { res.send({}) });

dispositivo.get("/:id", (req, res) => { res.send("TOO - implement!") });
dispositivo.put("/:id", (req, res) => { res.send("TOO - implement!") });
dispositivo.delete("/:id", (req, res) => { res.send("TOO - implement!") });
