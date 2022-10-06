// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

arr_magicians=["talha","anwaar","asad"]

function show_magicians(arr){
    for(const x of arr){
        console.log(x)
    }
}
function make_great(arr){
    for (i=0; i<arr.length; i++){
        arr_magicians[i]="Greate "+arr[i]
    }
}

show_magicians(arr_magicians)
make_great(arr_magicians)
show_magicians(arr_magicians)