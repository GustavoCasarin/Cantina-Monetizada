import express from "express"
import {clients} from "./src/client/routes.js"

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get("/", function (req, res) {
  res.send("Olá Mundo!");
});

app.use("/client", clients)

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
