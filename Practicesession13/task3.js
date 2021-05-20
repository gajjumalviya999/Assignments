function randomuser() {
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var age=document.getElementById("age");
    var pn=document.getElementById("pn");
    fetch("https://randomuser.me/api")
        .then((res)=>res.json())
            .then((value=>{
                    //console.log(value)
                    var user = value.results[0];
                    name.innerHTML = user.name.title + user.name.first+ user.name.last;
                    age.innerHTML = user.dob.age;
                    email.innerHTML = user.email;
                    pn.innerHTML = user.phone;
                 })).catch((error)=>{
                     console.error(error);
                 })
}
