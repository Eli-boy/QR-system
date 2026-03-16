import dotenv from "dotenv"
import express from "express"
import scanRoute from "./routes/scan.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use("/scan",scanRoute)

app.listen(3000,()=>{
 console.log("FindMe server running")
})