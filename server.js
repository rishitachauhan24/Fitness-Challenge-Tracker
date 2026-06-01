const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")

const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorMiddleware")

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/auth", require("./routes/authRoutes"))

app.use("/api/challenges", require("./routes/challengeRoutes"))

app.use("/api/progress", require("./routes/progressRoutes"))

app.get("/", (req, res) => {
    res.send("Fitness Tracker API Running")
})

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})