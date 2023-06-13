import express from "express";
import handlemongoDB from "./database/connection.js";
import routes from "./routes/Book.js";
import {} from "dotenv/config.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";
import cros from "cors";

const app = express();
app.use(cros());
app.use(express.json());
app.use("/api/v1", routes);
app.use(notFound);
app.use(errorHandler);

const connectDB = async () => {
  try {
    handlemongoDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDB();
