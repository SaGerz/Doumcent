// Membuat Object 

// Object Literal 
var mhs = {
	nama : "Samuel Genaro",
	umur : 19,
	ips : [3.00, 2.90, 2.95, 3.25],
	alamat : {
		jalan : "Jl. abc no 21",
		kota : "Jakarta",
		provinsi : "DKI Jakarta"
	}
};


// Function declarration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa("Samuel", "0020201", "samuelgenaro01@gmail.com", "Teknik Informatika");


// Constructor ---> Memiliki tipe ayang agak mirip dengan functiion declaration namun yang menbedakan adalah metod yang di-
// miliki oleh constuctor adalah this dan cara pemanggillan yang sedikit beda dibandingkan function declaration
function Mahasiswa(nama, nrp, jurusan, email){
	this.nama = nama;
	this.nrp = nrp;
	this.jurusan = jurusan;
	this.email = email;
};

var mhs4 = new Mahasiswa("Genaro", "00210020", "Teknik Informatika", "genarosamuel24@gmail.com");