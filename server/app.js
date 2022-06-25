const path = require("path")
const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
module.exports = app

app.use(
  cors({
    origin: "*",
    // origin: "http://localhost:19006",
  })
)

// logging middleware
app.use(morgan("dev"))

// body parsing middleware
app.use(express.json())


// app.get("/", (req, res) => res.send(404))

// auth and api routes
app.use("/auth", require("./auth"))
app.use("/api", require("./api"))

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "..", "public/index.html"))
// )

// static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")))

// any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error("Not found")
//     err.status = 404
//     next(err)
//   } else {
//     next()
//   }
// })

// sends index.html
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public/index.html"))
// })

// error handling endware
// app.use((err, req, res, next) => {
//   console.error(err)
//   console.error(err.stack)
//   res.status(err.status || 500).send(err.message || "Internal server error.")
// })
