const Challenge = require("../models/challenge")

exports.createChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.create({
            title: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            createdBy: req.user.id
        })

        res.status(201).json(challenge)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find()

        res.status(200).json(challenges)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!challenge) {
            return res.status(404).json({
                message: "Challenge not found"
            })
        }

        res.status(200).json(challenge)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndDelete(req.params.id)

        if (!challenge) {
            return res.status(404).json({
                message: "Challenge not found"
            })
        }

        res.status(200).json({
            message: "Challenge Deleted"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}