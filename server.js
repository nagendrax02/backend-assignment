const readline = require('readline'); // importing exporting readline   from node 
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let arr = ['guru','kedarnath','pirates','ninjas'];
readline1.question('Press 1, 2 or 3', function(n){
    if(n ==1){
        arr.forEach(element => {
            console.log(element);
        });
    }
    if(n==2){
        readline1.question('add book', function(book){
            arr.push(book);
            console.log('book added successfully');
            arr.forEach(element => {
                console.log(element)
            });
        })
    }
    if(n==3){

        readline1.close();
    }
     
})
readline1.on('close',function(){
    console.log('by bye')
})