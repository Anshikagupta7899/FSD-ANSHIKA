const getData = async()=>{
    try{
    const response = await fetch ("https://fakestoreapi.com/Products");
    const res = await response.json()
    //console.log(response.json());
    console.log(res);
    }
    catch(error){
        console.log("unable to fetch data")
    }

}
getData();

const Mypromise = new Promise((resolve , reject)=>{
let marks = 80 ;
if(marks > 33){ 
    resolve ("pass");
}
else{
    reject("fail");
}
})
const f1 = async ()=>{
    const msg = await Mypromise
    console.log(msg);
}
Mypromise.then((msg)=>console.log(msg))
         .catch((error)=>console.log("some error occurred"))
//console.log(Mypromise);


