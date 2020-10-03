// No 1
console.log("NO 1")
function range(a,b) {
	var x = 0;
	var hasil = [];
  if (a<b) {
  	for(a;a<=b;a++){
  		hasil[x] = a;
  		x++;
  	}
  }else if ( b<a) {
  	for(a;a>=b;a--){
  		hasil[x]= a;
  		x++;
  	}
  }else{
  	hasil[x] = -1;
  }return hasil;
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// No 2
console.log("NO 2")
function rangeWithStep(startNum,finishNum,step){
	var number = [];
	if (startNum<=finishNum) {
		for(var i = startNum; i < finishNum;i += step){
			number.push(i);
		}
	}else if(startNum>=finishNum){
		for(var i = startNum; i > finishNum;i -= step){
			number.push(i);
		}
	}else{
		number.push(i);
	}return number;
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("NO 3")

function sum(startNum,finishNum,step){
	var rangeArr = [];
	var distance;

	if (!step) {
		distance=1;
	}else{
		distance = step;
	}
	if (startNum > finishNum) {
		var currentNum = startNum;
		for(var i = 0; currentNum >= finishNum;i++){
			rangeArr.push(currentNum)
			currentNum -= distance
		}
	}else if (startNum < finishNum) {
		var currentNum = startNum;
		for(var i = 0; currentNum <= finishNum;i++){
			rangeArr.push(currentNum)
			currentNum += distance
		}
	}else if (!startNum && !finishNum && !step) {
		return 0;
	}else if(startNum){
		return startNum
	}
	var total = 0;
	for (var i = 0; i < rangeArr.length; i++){
		total = total+rangeArr[i]
	}
	return total;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("NO 4")
var input = [
				["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
	for(var i = 0;i< input.length;i++){
		for(var j = 0; j < input[i].length; j++){
			var value=  input[i][j]
			var text = ""
			switch(j){
				case 0: 
					text = "Nomor ID: " + value
					 break;
				case 1: 
					text = "Nama Lengkap: " + value 
					break;
				case 2: 
					value2 = input[3]
					text = "TTL : " + value + " " +value2 
					break;
				case 3: 
					break;
				case 4: 
					text = "Hobi: " + value
					break;
			}
			if (j !== 3) {
				console.log(text)
			}
		}
	}
}
console.log(dataHandling(input))

console.log("No 5")
function balikKata(string){
	let hasil = "";
	for(let i = string.length -1;i>=0;i--){
		hasil += string[i];
	}return hasil;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 
// for(var e = 0;e<4;e++){
// 	console.log("NomorID :"+input[e][0])
// 	console.log("Nama Lengkap :"+input[e][1])
// 	console.log("TTL : "+input[e][2]+" "+input[e][3])
// 	console.log("Hobi : "+input[e][4]+"\n")
// }

console.log("No 6")
var masuk1;
function dataHandling2(){
	var masuk = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
	masuk.splice(1,2,"Roman Alamsyah sarawi","provinsi Bandar Lampung")
	masuk.splice(4,1,"pria","SMA Internasional metro")
	masuk1 = masuk;
	return masuk
}
console.log(dataHandling2())
var tahun = masuk1[3]
	
	var bulan = tahun.split("/")
	
	
	sasi1 = bulan[1];
	var sasi;
	if (sasi1 = "05") {
		sasi = "Mei"
	}
	console.log(sasi)
	bulan.sort(function (value1, value2) { return value1 - value2 } ) ; 
	console.log(bulan)
	var gabung = bulan.join("-")
	console.log(gabung)
	var irisan = masuk1[1].slice(0,15)
	console.log(irisan)
