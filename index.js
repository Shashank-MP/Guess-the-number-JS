// let n=parseInt(prompt('Enter the value of n: '))
// let i=1;j=0
// let a1=[]
// while(i<=n)
//   {
//     a1[j]=i
//     i++
//     j++
//   }
// console.log(a1)
// let a2=a1.reduce((a11,a12)=>{
//   return a11*a12
// })
// console.log(a2)

let Magic_Number = parseInt(Math.random()*100)
console.log(Magic_Number)
let chance=100

while(chance!=0){
  let UNum=parseInt(prompt('Enter your number: '))
if(UNum==Magic_Number)
{
  if(chance==100){
  console.log('You guessed it in the first chance!')
  console.log('The Magic Number is ',Magic_Number)
  }
  else{
    console.log('Your answer is correct \n You guessed it in the '+((100-chance)+1)+ ' try')
  }
  
}
else if(UNum>Magic_Number){
  chance--
  console.log('Entered number is greater than Magic Number')

}
else if(UNum<Magic_Number){
  chance--
  console.log('Entered number is lesser than Magic Number')
}
}