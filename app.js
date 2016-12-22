const express = require("express"),
      app = express(),
      multer = require("multer"),
      path = require("path"),
      port = (process.env.PORT || 3000)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});




app.listen(port, () => console.log("Sever is listening on port " + port))