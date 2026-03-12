//generator function to print infinite odd numbers with a 1-second interval,
let i = 1;
const timer = setInterval(() => {
    console.log(i);
    i += 2;

    if(i>50){clearInterval(timer)}
},1000);


