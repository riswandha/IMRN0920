//No 1

//No 2
const data = [
  ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93]
]
var output = [];
function viewScores(data, subject) {
  
  if(subject = "quiz-1"){
    for(var i = 1;i<=data.length;i++){
      output[i]=data[0][0]+" : "+data[i][0]+" subject: quis-1"+" Points "+data[i][1]
      console.log(output[i])
    }
  }else if(subject = "quiz-2"){
    for(var i = 1;i<=data.length;i++){
      output[i]=data[0][0]+" : "+data[i][0]+" subject: quis-1"+" Points "+data[i][2]
      console.log(output[i])
    }
  }else if(subject = "quiz-3"){
    for(var i = 1;i<=data.length;i++){
      output[i]=data[0][0]+" : "+data[i][0]+" subject: quis-1"+" Points "+data[i][3]
      console.log(output[i])
    }
  }
}

// TEST CASE
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")

//No 3
function recapScores(data){
  var rata = 0;
  var jml = 0;
  var hasil = [];
  var tanda = [
  	["predikat : Honour"],
  	["predikat : Graduate"],
  	["predikat : participant"]
  ];
  // let predikat1 = "predikat : Honour";
  // let predikat2 = "predikat : Graduate";
  // let predikat3 = "predikat : participant";
  
  for(var i = 0;i<data.length;i++){
    jml = data[i][1]+data[i][2]
    if(jml>90){
      rata = jml/2;
      hasil[i] = "Email : "+data[i][0]+"\nrata : "+rata+"\n"+tanda[0];
      
    }else if(jml>80){
      rata = jml/2;
      hasil[i] = "Email : "+data[i][0]+"\nrata : "+rata+"\n"+tanda[1];
    }else if(jml>70){
      rata = jml/2;
      hasil[i] = "Email : "+data[i][0]+"\nrata : "+rata+"\n"+tanda[2];
    }
  }
  for(var x = 0;x<3;x++){

    console.log(hasil[x])
  }
}
const data = [
  ["abduh@mail.com", 90, 71],
  ["khairun@mail.com", 80,61],
  ["bondra@mail.com", 90,91],
  ["regi@mail.com", 60,100,]
]

recapScores(data);