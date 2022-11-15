import { Sequelize, Op } from "sequelize";
require("dotenv").config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:3000/${DB_NAME}`,{
    host: "localhost",
    dialect: "postgres"
});

const basename = path.basename(__filename);

const modelDefiners: Object[] = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file:string) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file:string) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model:Object) => model(sequelize));

//Los importamos
const { Product, Rating, Size, user, Bought, Product_Size, Brand, Category, Product_Bought } =
  sequelize.models;

export default sequelize;