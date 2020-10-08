// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

//books.forEach(element =>readBooks(10000,element,function(check){}))

// readBooks(10000,books[0],function(check){
// 	readBooks(check,books[1],function(check){
// 		readBooks(check,books[2],function(check){})
// 	})
// })
var i = 0;
function book(time, daftarbuku){
	if (daftarbuku[i] != undefined) {
		readBooks(time,daftarbuku[i],function(sisaTime){
			i++
			book(sisaTime,books)
		})
	}
}
book(10000,books)