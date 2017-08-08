/*console.log('hi there');

var num = 12;

// console.log(num);
for (i=1; i<=10; i++) {
    console.log(i);
}
//for (declaration of initial state, continuation, incrementation)

let counter = 0;
while (counter <10) {
    counter++;
    console.log(counter);
}

//if you know the length of things you are going through, for loop is perfect. While loops are best for something that depends on the code
*/

var year = 0;
    while(year<=2017){
        year++;
        if(year%4===0 && !year%100===0){
            console.log('leap year');
        }
        else if(year%400){
            console.log('leap year');
        }
        else(){
            console.log('not leap year')
        }
       
    }

//first pass - hoisting pass, puts variables at top
//second pass, executes

//issues of scoping - not visible from where trying to call

