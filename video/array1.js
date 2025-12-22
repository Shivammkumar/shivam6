/*const vals =[1,2,3,4,5,6,7,8,9,10];
sum = vals.reduce ((previous, current, idx,arr)=>{
    console.log(`The value of previous is:${previous}and current
        is ${current}and thebindex number is ${idx}and the length
        of the array is :${vals.length}`);
        return previous+current;
} ,100);
console.log(`the final sum is :${sum}`);
*/
/*nums=[3,5,6,5,6,46,7,8,5,6,7,5];
let res =nums.every((num)=>num <100);
console.log(res);
res= nums.every((num)=>num<10);
console.log(res);*/
nums= [3,5,6,4,5,6,46,7,8,5,6,7,5];
res =nums.some ((num)=>num >40);
console.log(res);
res=nums.some((num)=>num>100);
console.log(res);
/*nums=[3,5,6,4,5,6,46,7,8,5,6,7,5];
let foundValue=nums.find((num)=>num>10);
console.log(foundvalue);
foundValue=nums.find((num)=>num>50);
console.log(foundValue);*/