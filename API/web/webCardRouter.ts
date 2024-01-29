import express from "express";
const router = express.Router();

import { addWebCard, getAllWebCards, UpdateWebCardDetails, deleteWebCardById } from "./webCardControl";

router
    .post("/add-web-card", addWebCard)
    .get("/get-web-cards", getAllWebCards)
    .put("/update-web-card", UpdateWebCardDetails)
    .delete("/delete-web-card", deleteWebCardById)

export default router;
