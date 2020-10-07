const express = require("express")
const app = express()
const arrDciModules = require("./data")

app.get("/", (req, res) => {
    res.send(`<h1>DCI modules as...</h1> 
        <p><a href="/html">HTML</a></p>
        <p><a href="/text">Text</a></p>
        <p><a href="/json">JSON</a></p>
    `)
})

app.get("/json", (req, res) => {
    res.send(arrDciModules)
})

app.get("/text", (req, res) => {
    res.send(arrDciModules.join(","))
})

app.get("/html", (req, res) => {
    let modulesHtml = arrDciModules.map(module => {
        return "<li>" + (module == "Data Server" ? `<b>${module}</b>` : module) + "</li>"
    })
    res.send(`<ul>${modulesHtml.join("")}</ul>`)
})


let port = 5000
app.listen(port, () => { 
    console.log("Server started on port: " + port)
})

