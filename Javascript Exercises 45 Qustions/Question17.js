//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

guestlist=["Ali","Atif","Asif"]

for (i=0; i<guestlist.length; i++){
    console.log("Hello "+guestlist[i]+",")
    console.log("It is honourable for me, if you come tomorrow for dinner at my house. ")
    console.log("thanks in advance.")
}

//after Ali is not coming, i need to change for ali
guestlist[0]="Aqib"

for (i=0; i<guestlist.length; i++){
    console.log("Hello "+guestlist[i]+",")
    console.log("It is honourable for me, if you come tomorrow for dinner at my house. ")
    console.log("thanks in advance.")
}

console.log("I want to add my child's birthday ceremoney, so i welcome to me all new and old friends")

abc=guestlist.unshift("Amir")

abc=guestlist.splice(guestlist.length/2, 0, "Ashar")
guestlist.push("Amjad")
//console.log(guestlist)
for (i=0; i<guestlist.length; i++){
    console.log("Hello "+guestlist[i]+",")
    console.log("It is honourable for me, if you come tomorrow for dinner at my house. ")
    console.log("thanks in advance.")
}

//17. 

console.log("i would like to invite only two peoples, due to late meat arrival")

//console.log(guestlist)
arr_size=guestlist.length
for (i=2; i <arr_size;i++){
    person=guestlist.pop()
    console.log("Hello "+person+",")
    console.log("Sorry, i wouldnot be able to invite you. ")
    console.log("sorry for Inconvience.")
}

// invite remaining two persons
for (i=0; i<guestlist.length; i++){
    console.log("Hello "+guestlist[i]+",")
    console.log("It is honourable for me, if you come tomorrow for dinner at my house. ")
    console.log("thanks in advance.")
}

//drop all persons
arr_size=guestlist.length
for (i=0; i<arr_size; i++){
    guestlist.shift()
}

console.log(guestlist)
