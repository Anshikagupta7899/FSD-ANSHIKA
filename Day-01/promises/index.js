const Mypromise = new Promise((resolve , reject)=>{
let marks = 80 ;
if(marks > 33){ 
    resolve ("pass");
}
else{
    reject("fail");
}
})
Mypromise.then((msg)=>console.log(msg))
         .catch((error)=>console.log("some error occurred"))
//console.log(Mypromise);
