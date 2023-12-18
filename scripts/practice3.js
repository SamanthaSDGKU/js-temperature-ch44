// if statements
// let yourName="Samantha";

// if(confirm("Are you "+ yourName + "?")){
// 	console.log("Hello " + yourName);
// }else{
// 	console.log("Then what is your name?");
// }

// console.log(1==1);//true
// console.log(5==8);//false

// console.log("1" == 1); // true
// console.log("1" === "1"); //true

// let num1 = 1;
// let num2 = 2;

// if(num1 < num2){
// 	console.log("num1 is smaller than num2");
// }else{
//     console.log("num2 is smaller than num1");
// }

function login(){
    //create the DB variables for password and email
    let userDB = "sjimenez@sdgku.edu";
    let passDB="Test1234";

    //get the values from the user (prompt)
    let user = document.getElementById("txtUserName").value;
    let password = document.getElementById("txtPassword").value;
    console.log(user,password);
    // compare the DB values and the user's values 
    if(user===userDB && password===passDB){
        // display welcome message
        document.getElementById("notifications").innerHTML=`
        Welcome to the system ${user}
        `;
    }else{
        
        // display invalid credentials
        document.getElementById("notifications").innerHTML=`
        Invalid credentials!
        `;
    }
}


function register(){
    let student = document.getElementById("txtStudent").value;

    document.getElementById("studentsList").innerHTML+=`<li>
        ${student}</li>
        `;
}
