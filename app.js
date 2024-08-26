import express from "express";
import { db_connection } from "./connection.js"
import urlRouter from "./routes/url.js"
import bodyParser from "body-parser";


const app = express();

const PORT = 8001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/url", urlRouter);

db_connection();

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});

