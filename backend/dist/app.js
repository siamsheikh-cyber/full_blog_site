import express, {} from "express";
import router from "./app/router/index.js";
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1', router);
export default app;
//# sourceMappingURL=app.js.map