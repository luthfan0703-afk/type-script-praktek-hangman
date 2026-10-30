//NO.1

interface buku {
  judul: string;
  penulis: string;
  tahunTerbit: number;
}

type KategoriBuku = "fiksi" | "non-fiksi";

type Kategori = buku & {
  kategori: KategoriBuku;
};

const bukufavorit: Kategori = {
  judul: "bumi",
  penulis: "Tere Liye",
  tahunTerbit: 2014,
  kategori: "fiksi",
};

console.log(bukufavorit);

// NO.2

interface kendaraan {
  merk: string;
  roda: number;
}

interface mobil extends kendaraan {
  pintu: number;
  isEletrik: boolean;
}

const myMobil: mobil = {
  merk: "honda",
  roda: 4,
  pintu: 2,
  isEletrik: false,
};

console.log(myMobil);

//NO.3

type alamat = {
  jalan: string;
  kota: string;
};

type kontak = {
  email: string;
  telepon: string;
};

type ProfilLengkap = alamat & kontak;

const profilLengkap: ProfilLengkap = {
  jalan: "soekarno hatta",
  kota: "jakarta",
  email: "fulan123@gmail.com",
  telepon: "08973376322",
};

console.log(profilLengkap);
