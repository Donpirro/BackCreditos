const fs = require("fs");
const csv = require("csv-parser");

/**
 * Lee y analiza un archivo CSV, retornando los datos como un arreglo de objetos.
 * @param {string} filePath - Ruta del archivo CSV.
 * @returns {Promise<Array<Object>>} - Promesa que resuelve con los datos del CSV.
 */
const parseCSV = filePath => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath).pipe(csv()).on("data", data => results.push(data)).on("end", () => resolve(results)).on("error", error => reject(error));
  });
};
module.exports = parseCSV;