import app from "./index.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 4040;
const isLocal = process.env.NODE_ENV === "Develop";

app.listen(port, () => {
  connectDB();
  isLocal
    ? console.info(`Develop server runnning on http://localhost:${port}`)
    : console.info(`Prod server running on http://localhost:${port}`);
});
