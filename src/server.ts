import express from "express";
import { adminJs, adminJsRouter } from "./adminJs";
import { database } from "./database";

const app = express();

app.use(express.static(`public`));

app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log("DB connection successfull");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});
