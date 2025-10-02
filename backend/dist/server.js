import app from "./app.js";
import { setenv } from "./app/config/env.js";
let server;
const bootstrap = () => {
    server = app.listen(setenv.PORT, () => {
        console.log(`Example app listening on port ${setenv.PORT}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map