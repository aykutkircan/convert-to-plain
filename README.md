> Convert html to plain text

## Install
```
$ npm install convert-to-plain
```

## Usage
```javascript
const {convertToPlain} = require("convert-to-plain");

const htmlContent = "<div>Merhaba <strong>Dünya</strong></div>";

let htmlToPlain = convertToPlain(htmlContent);

console.log("Girdi: ", htmlContent + "\n"+"Sonuç: ", htmlToPlain);
//=> Girdi: <div>Merhaba <strong>Dünya</strong></div>
//=> Sonuç: Merhaba Dünya

```