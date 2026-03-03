const express = require("express");
const app = express();

app.use(express.json());

let messages = [];

app.post("/send", (req, res) => {
    const { user, text } = req.body;

    messages.push({
        user,
        text,
        time: Date.now()
    });

    res.json({ status: "ok" });
});

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
