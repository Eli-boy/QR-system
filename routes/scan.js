import express from "express"
import sql from "../db.js"

const router = express.Router()

router.get("/", async(req,res)=>{

const id = req.query.id

const result = await sql`
SELECT * FROM qr_codes WHERE id=${id}
`

if(result.length===0){

res.send("Invalid QR Code")

}else if(!result[0].registered){

res.send(`
<h1>Register your item</h1>
<a href="https://wa.me/${process.env.BOT_NUMBER}?text=REGISTER_${id}">
Register via WhatsApp
</a>
`)

}else{

res.send(`
<h1>Item Found</h1>
<a href="https://wa.me/${process.env.BOT_NUMBER}?text=FOUND_${id}">
Contact owner via WhatsApp
</a>
`)

}

})

export default router