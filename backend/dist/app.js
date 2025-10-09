import express, {} from "express";
import router from "./app/router/index.js";
import GlobalErrorHandeler from "./app/middleware/globalErrorHandeler.js";
import cors from "cors";
import cookieparser from "cookie-parser";
const app = express();
// Middleware;
app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1', router);
app.use(GlobalErrorHandeler);
export default app;
//# sourceMappingURL=app.js.map