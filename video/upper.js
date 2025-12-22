const nums =[1,2,3,4,5,6,7,8,9];
function oddEven(num){
    if(num%2==0){
        return "false";
    }else{
       return"true"; 
    }
}
const newNums =num.map((num)=>{
    return oddEven(num)
})
console.log(newNums)