// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

users=["admin","supervisors","operators","line man","helpers","managers"]

for (i =0; i<users.length;i++){
    if( users[i]=="admin"){
        console.log("Hello Admin, Welcome to Data Center.")
    }else{
        console.log("Welcome to Portal")
    }
}