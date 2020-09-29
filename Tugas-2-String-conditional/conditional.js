var nama = "budi";//tinggal masukkan nama
var peran = "werewolf";//tinggal masukkan peran


if (nama == "" && peran == "") {
	console.log("Nama harus diisi")
}else if (nama && peran=="") {
	console.log("Halo " + nama +" , Pilih Peran untuk memainkan game")
}else if (nama && peran=="Prenyihir"){
	console.log("Selamat datang di Dunia Werewolf, " + nama)
	console.log("Halo " +peran+" "+ nama +", kamu dapat melihat siapa yang mejadi wirewolf")
}else if (nama && peran=="guard") {
	console.log("Selamat datang di Dunia Werewolf, " + nama)
	console.log("Halo " +peran+" "+ nama +", kamu melindungi temanmu dari Werewolf")
}else if (nama && peran == "werewolf") {
	console.log("Selamat datang di Dunia Werewolf, " + nama)
	console.log("Halo " +peran+" "+ nama +", kamu kamu akan memakan mangsa setiap malam")
}else{
	console.log("masukkan ulang")
}

var hari = 22;
var bulan = 3;
var tahun = 2009;

switch(bulan){
	case 1: {console.log(hari+" januari "+ tahun); break;}
	case 2: {console.log(hari+" febuari "+ tahun); break;}
	case 3: {console.log(hari+" maret "+ tahun); break;}
	case 4: {console.log(hari+" april "+ tahun); break;}
	case 5: {console.log(hari+" mei "+ tahun); break;}
	case 6: {console.log(hari+" juni "+ tahun); break;}
	case 7: {console.log(hari+" juli "+ tahun); break;}
	case 8: {console.log(hari+" agustus "+ tahun); break;}
	case 9: {console.log(hari+" september "+ tahun); break;}
	case 10: {console.log(hari+" oktober "+ tahun); break;}
	case 11: {console.log(hari+" november "+ tahun); break;}
	case 12: {console.log(hari+" desember "+ tahun); break;}
	default:{console.log("Tidak terjadi apa-apa")}
}