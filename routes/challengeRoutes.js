const express = require("express")

const router = express.Router()

const protect = require("../middleware/authMiddleware")

const {
    createChallenge,
    getChallenges,
    updateChallenge,
    deleteChallenge
} = require("../controllers/challengeController")

router.post("/", protect, createChallenge)

router.get("/", getChallenges)

router.put("/:id", protect, updateChallenge)

router.delete("/:id", protect, deleteChallenge)

module.exports = router