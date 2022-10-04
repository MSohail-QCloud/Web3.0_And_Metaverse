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
