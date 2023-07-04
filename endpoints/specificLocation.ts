import express, { Request, Response, Router } from "express";
import { db } from "../database/database";

const router = Router();

router.use(express.json());
router.get('/locations/:id', (req, res) => {
  const { id } = req.params;

  db.all("SELECT * FROM locations WHERE id = ?", [id], (err: Error, row: any[]) => {
    if (err) {
      res.status(500).json({ error: err.message })
    } else {
      res.json(row)
    }   
  })
})

module.exports = router;
