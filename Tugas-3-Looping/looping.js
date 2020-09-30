var angka = 2;
console.log("looping pertama \n")
while(angka <=20){
	if (angka % 2 == 0) {
		console.log(angka + " - I love coding");

	}else{;
	}angka++;
}
console.log("\nlooping kedua\n")
while(angka >=2){
	if (angka % 2 == 0) {
		console.log(angka + " - i will become a mobile developer");

	}else{;
	}angka--;
}
console.log("\nOutput\n")
for(var angka = 1;angka <=20;angka++){
	if (angka % 2 == 1) {
		if ((angka / 3) % 2 ==1){
		console.log(angka +" - I Love Coding")
		}else{
			console.log(angka +" - Santai")
		}
	}else if (angka % 2 == 0) {
		console.log(angka +" - Berkualitas")
	}
}
console.log("\nOutput\n")
var pagar = "";
for(var i = 0;i < 4;i++){
	for(var j = 0;j < 8;j++){
		pagar +="#"
	}
	pagar +="\n"
}
console.log(pagar)
console.log("\nOutput\n")
var pagar = "";
for(var i = 0;i < 8;i++){
	for(var j = 0;j < i;j++){
		pagar +="#"
	}
	pagar +="\n"
}
console.log(pagar)

for(var i = 1;i<=8;i++){
	if(i % 2 == 1){
		console.log(" # # # #")
	}else{
		console.log("# # # #")
	}
}