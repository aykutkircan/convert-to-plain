const {convertToPlain} = require("./index");

const htmlContent = "<div>Merhaba <strong>Dünya</strong></div>";

let htmlToPlain = convertToPlain(htmlContent);

console.log("Girdi: ", htmlContent + "\n"+"Sonuç: ", htmlToPlain);