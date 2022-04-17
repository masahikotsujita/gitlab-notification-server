const http = require('http');
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3001;

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀Server running on port ${PORT}`))
app.post("/hook", (req, res) => {
    console.log(req.body) // ここでリクエストに対してアクションを呼び出します
    res.status(200).end() // 応答は重要です
})