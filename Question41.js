// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

arr_magicians=["talha","anwaar","asad"]

function show_magicians(arr){
    for(const x of arr){
        console.log(x)
    }
}

show_magicians(arr_magicians)