var frndissick=false;
var MyPro= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!frndissick){
            resolve("got Cake");
        }
        else{
            reject("dont get cake")
        }
    },2000)
});

MyPro.then((data)=>console.log(data)).catch((data)=>console.log(data)).finally(()=>console.log("Parrryyyy hori haiii"));
