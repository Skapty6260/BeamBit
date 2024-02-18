import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import moment from "moment";
import chalk from "chalk";

const { connect, connection } = mongoose;

export class mongodb {
  constructor(connectURI = process.env.MONGOURI) {
    this.connectURI = connectURI;
  }

  //	Connect to mongodb server
  async Connect() {
    await connect(this.connectURI).catch((err) => {
      console.log(chalk.redBright("Error!\n"), err);
    });
  }
}

connection.once("connected", () => {
  console.log(
    chalk.green("[🍀 | MongoDB ]:"),
    "Connected succesfully!",
    chalk.gray(`(${moment().format("HH:mm:ss:ms")})`)
  );
});
connection.once("disconnected", () => {
  console.error(
    chalk.green("[ 🍀 | MongoDB ]:"),
    chalk.red("Connection lost!"),
    chalk.grey("(disconnected)"),
    chalk.grey(`(${moment().format("HH:mm:ss:ms")})`)
  );
});
