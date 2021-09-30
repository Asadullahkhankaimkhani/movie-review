import app from "./server";
import mongodb from "mongodb";
import dotenv from "dotenv";

const main = () => {
  dotenv.config();

  const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI);

  const port = process.env.PORT || 8000;

  try {
    await client.connect(() => {
      console.log("### DATABASE CONNECTED ###");
    });

    app.listen(port, () => {
      console.log("Server is running on Port", port);
    });
  } catch (e) {
    console.log(e);
    process.exit();
  }
};

main().catch(console.error);
