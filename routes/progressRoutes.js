const express = require("express")

const router = express.Router()

const protect = require("../middleware/authMiddleware")

const {
    addProgress,
    getProgress
} = require("../controllers/progressController")

router.post("/", protect, addProgress)

router.get("/", protect, getProgress)

module.exports = router