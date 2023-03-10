console.log("Hello World")
let input=document.querySelector('input');
let btn=document.querySelector('button');
let randomvalue=Math.floor(Math.random()*10)+1;
   let guess = 1;
btn.addEventListener('click',()=>{
    let inputValue = input.value;
    if (inputValue == randomvalue) {
      alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
    } else if (inputValue> randomvalue) {
      /* if guessed number is greater than actual number*/
      guess++;
      alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
    console.log(inputValue)
})
