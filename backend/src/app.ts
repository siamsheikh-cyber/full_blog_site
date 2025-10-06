import express, { type Application } from "express";
import router from "./app/router/index.js";
import GlobalErrorHandeler from "./app/middleware/globalErrorHandeler.js";
import cors from "cors";

const app: Application = express()


// Middleware;
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api/v1', router);


app.use(GlobalErrorHandeler);


export default app;
