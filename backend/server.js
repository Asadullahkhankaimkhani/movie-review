import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/movies", movies);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on Port 8000");
});

export default app;
