import express from "express"
import { login } from "./auth.js"

const router = express.Router()

router.post("/login",login)
  
  


// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

export const clients = router