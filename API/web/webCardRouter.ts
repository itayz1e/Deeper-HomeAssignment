import express from "express";
const router = express.Router();

import { addWebCard, getAllWebCards } from "./webCardControl";

router
    .post("/add-web-card", addWebCard)
    .get("/get-web-cards", getAllWebCards)

export default router;
