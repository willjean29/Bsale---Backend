import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import connection from "./database/connection";
import routes from "./routes";
import { notFound, errorHandler } from "./middlewares";
import env from "./config";
class Server {
  private app;
  private host;
  private port;
  constructor() {
    this.app = express();
    this.port = env.PORT;
    this.host = env.HOST;

    // database
    this.dbConnection();
    // Middlewares
    this.middlewares();
    // Routes App
    this.routes();
  }

  async dbConnection() {
    try {
      await connection.authenticate();

      console.log("Database Online");
    } catch (error: any) {
      throw new Error(error);
      process.exit(1);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("/api", routes);
    this.app.use(notFound);
    this.app.use(errorHandler);
  }

  listen() {
    this.app.listen(this.port as number, this.host, () => {
      console.log("Server on port : ", this.port);
    });
  }
}

export default Server;
