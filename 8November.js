let a=document.getElementById("inputName").value;
let b=document.getElementById("inputPassword").value;

if(a && b){
    let users=JSON.parse(localStorage.getItem("users"))|| [];
console.log(users);

    users.push({username:a,password:b})

    localStorage.setItem("users",JSON.stringify(users))
    alert("data added successfully")
}else{
    alert("enter both username and password")
}

function login(){
let a=document.getElementById("inputNamelogin").value;
let b=document.getElementById("inputPasswordlogin").value;

let users=JSON.parse(localStorage.getItem("users"))||[];
const exitsedUser=users.some(x=>x.username === a&& x.password===b)

if(exitsedUser){
alert("logged in successfully")
}else{
alert("no credrentilas in storage ,,,sorry you cant login")
}
}