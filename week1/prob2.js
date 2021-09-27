// P2. 피보나치 수

let fibo = function(n) {

    if(n == 0)
        return 0;
    else if(n == 1)
        return 1;
    else
        return fibo(n-2) + fibo(n-1);

}

for(let i=0; i<13; i++) {

    console.log(fibo(i));
}