// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
// . The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times,
//   using a different number of arguments each time.

arr_items=["mayonise","Salad","ketchup"]
list_items=[]
function make_sandwitch(item){
    list_items.push(item)
}

for (x in arr_items){
    make_sandwitch(arr_items[x])
}
console.log(list_items)