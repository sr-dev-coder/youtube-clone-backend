import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//Allow frontend cors origin
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Allow request Json
app.use(express.json({ limit: "16kb" }))

//Allow param reading
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

app.use(cookieParser())
export default app;