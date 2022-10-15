// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

pizzas=["Crispy","malai boti","garlic chicken"]

for (i=0; i<pizzas.length; i++){
    console.log(pizzas[i])
}

console.log("Modified loop")


for (i=0; i<pizzas.length; i++){
    if(pizzas[i]=="Crispy"){
        console.log("I like Crispy chiecken with extra mayonise")
    }else if(pizzas[i]=="malai boti"){
        console.log("I love malai boti pizza with ginger.")
    }else if(pizzas[i]=="garlic chicken"){
    console.log("i have fond of eating garlic chicken pizza, but no one maked this.")
    }
}