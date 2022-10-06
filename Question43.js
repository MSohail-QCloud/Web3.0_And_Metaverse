// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() with each array 
//  to show that you have one array of the original names and one array with the Great added to
//   each magician’s name.

arr_magicians=["talha","anwaar","asad"]
great_magicians=[]
function show_magicians(arr){
    for(const x of arr){
        console.log(x)
    }
}
function make_great(arr){
    for (i=0; i<arr.length; i++){
        great_magicians[i]="Greate "+arr[i]
    }
}

show_magicians(arr_magicians)
make_great(arr_magicians)
show_magicians(arr_magicians)
show_magicians(great_magicians)