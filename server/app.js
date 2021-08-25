const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const fixtures = require("./data/fixtures")

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get("/cake", (request, response) => {
  response.json(fixtures.cake)
})

app.listen(port, () => {
  console.log("listening here ", port)
})
