import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "onebitflix_development",
  username: "postgres",
  password: "lelis123",
  define: {
    underscored: true,
  },
});
