//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


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