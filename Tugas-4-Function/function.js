function teriak() {
  console.log("Halo Sanbers");
}
 
teriak(); 

function kalikan(num1,num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

function introduce(name,age,address,hobby) {
  return "Nama saya " + name + " , umr saya " + age + " alamat saya " + address + " dan saya punya hobby yaitu " + hobby; 
}

var name = "Riswandha Adhitia";
var age = 21;
var address = "desa tapan, kec. kedungwaru, kab. Tulungagung"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)