import { Router } from "express";
import { obtenerRepresentantes, registrarRepresentante } from "../controllers/representante.controller.js";

export const RouterRepresentante = Router()

RouterRepresentante.get("/", obtenerRepresentantes)
RouterRepresentante.post("/register", registrarRepresentante)