const express = require("express"),
      app = express(),
      multer = require("multer"),
      upload = multer(),
      path = require("path"),
      port = (process.env.PORT || 3000)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.single("myFile"), (req, res) => {
    if (req.file) {
        res.json({ size: req.file.size });
    } else {
        res.json({ error: "File not found" })
    }
});




app.listen(port, () => console.log("Sever is listening on port " + port));