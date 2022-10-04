//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//function for title case
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");


var fname="Muhammad Sohail"

console.log(fname.toLowerCase())
console.log(fname.toUpperCase())
console.log(titleCase(fname))
