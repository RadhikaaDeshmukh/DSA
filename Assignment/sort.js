
// require readline
const readline = require("readline")

// use this to add input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [2, 11, 4, 52, 1, 0]

function menu() {

    console.log("******************************* Main menu *******************************");
    console.log("\n 1.Bubble Sort \n 2.Selection sort \n 3.Insertion sort \n 4.Quick Sort");


    // show this into the output
    rl.question("Select your sort type : ", (answer) => {

        switch (answer) {
            case "1": { return bubble(arr); }
                break;
            case "2": { return selection(arr); }
                break
            case "3": { console.log("Comming soon !"); }
                break;
            case "4": { console.log("Comming soon !"); }
                break
            default: { console.log("Invalid sort type !"); }
        }

        rl.close() // close the readline
    })
}

menu()



function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp;

                sort(j+1,j)
            }
        }
    }
    console.log("Your bubble sort is",arr);
    menu()
}



function selection(arr){
    for(let i = 0; i < arr.length; i++) {

        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
            //  let tmp = arr[i]; 
            //  arr[i] = arr[min];
            //  arr[min] = tmp;     

             sort(min,i)
        }
        console.log(arr);
    }
    console.log("Your selection sort is",arr)
    menu()
}


function sort(value,index){
    let tmp = arr[index]; 
    arr[index] = arr[value];
    arr[value] = tmp;  
    
}