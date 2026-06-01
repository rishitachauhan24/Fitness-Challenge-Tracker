const Progress = require("../models/Progress")

exports.addProgress = async (req, res) => {
    try {
        const progress = await Progress.create({
            user: req.user.id,
            challenge: req.body.challenge,
            progress: req.body.progress
        })

        res.status(201).json(progress)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getProgress = async (req, res) => {
    try {
        const progress = await Progress.find()
            .populate("user", "name email")
            .populate("challenge", "title")

        res.status(200).json(progress)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}