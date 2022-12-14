require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const router = express.Router();


app.use(express.json());

app.get("/api/", async (req, res) => {
    res.json({ status: "API server is running and ready to serv" });
});


const blokkRouter = require("./routes/blokk.route")
app.use("/api/blokk", blokkRouter);

const vevoRouter = require("./routes/vevo.route");
app.use("/api/vevo", vevoRouter);


app.listen(port, () => console.log(`API server listening on ${port}`));
