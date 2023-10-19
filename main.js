const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan panjang sisi persegi: ", function(sisi) {
  const panjangSisi = parseFloat(sisi);
  if (!isNaN(panjangSisi)) {
    const luas = panjangSisi * panjangSisi;
    console.log("Luas Persegi: " + luas);
  } else {
    console.log("Masukan tidak valid. Pastikan Anda memasukkan angka.");
  }
  rl.close();
});
