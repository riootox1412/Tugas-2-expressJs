const express = require('express');
const app = express();

// Method GET
app.get('/biodata', (req, res) => {
  const nama = req.query.nama;
  const tempatLahir = req.query.tempat;
  const tanggalLahir = req.query.tanggal;
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    alamat: alamat,
  });
});

// Method POST
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.post('/biodata', (req, res) => {
  const nama = req.body.nama;
  const tempatLahir = req.body.tempat;
  const tanggalLahir = req.body.tanggal;
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    'tempat-lahir': tempatLahir,
    'tanggal-lahir': tanggalLahir,
    alamat: alamat,
  });
});

let server = app.listen(8080, () => {
  console.log(`Server running port ${port}...`);
});
