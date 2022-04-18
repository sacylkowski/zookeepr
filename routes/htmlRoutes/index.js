const path = require("path");
const router = require("express").Router();


// this get request responds with an HTML page to display in the browser
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// just /animals for the endpoint because it should serve an HTML page versus using /api/ for JSON data
// Express isn't opinionated about how routes should be named, it's a system developers must create
router.get("/animals", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
    res.sendFile(path.join(__dirname, "../..//public/zookeepers.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;