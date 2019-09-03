var QRCode = require('qrcode')

const qrCreate = function(table){
  QRCode.toDataURL(`https://localhost:3000/${table}`, function (err, url) {
    console.log(url)
  })
}

qrCreate(1);