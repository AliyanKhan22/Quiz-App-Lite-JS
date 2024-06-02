document.getElementById("btn").addEventListener("keydown" , (e)=>{
    if(e.keyCode == 13){
    alert("Welcome To Quiz App!")
    var q1= prompt("Which is Your Favourate Language, Html , CSS , Javascript");
    if(q1 == "Html"){
    var q11 = prompt("What is HTML ?")
    if(q11 == "Hyper Text Markup Language."){
        alert("Correct Answer")
        }
        else{
            alert("Wrong Answer")
            }
     }    

if(q1 == "CSS"){
 var q11 = prompt("What is CSS ?")
 if(q11 == "Cascading Style Sheet."){
 alert("Correct Answer")
 }
 else{
    alert("Wrong Answer")
    }
}

if(q1 == "Javascript"){
var q11 = prompt("What is Javascript ?")
if(q11 == "JavaScript is the Programming Language for the Web."){
alert("Correct Answer")
}
else{
alert("Wrong Answer")
}
}
}
})