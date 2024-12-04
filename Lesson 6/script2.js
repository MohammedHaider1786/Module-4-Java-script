function validate(){
    ("txtname").value;
    const pwd=document.getElementById("txtpwd").value;
    const age=document.getElementById("txtage").value;
    const msgbox=document.getElementById("msg");
    var messages="";


    if (user==""){
        message="please enter your user name!";
        msgbox.style.color="red";
    }
    else if (pwd==""){
        message="please enter your password!";
        msgbox.style.color="red";
    }
    if (age==""){
        message="please enter your age !";
        msgbox.style.color="red";
    }
}