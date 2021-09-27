// P1. 구구단 출력

let times_tables = function() {

    for(let i=1; i<10; i++) {
        for(let j=1; j<10; j++) {
            console.log(i + " x " + j + " = " + i*j);
        }
        j=1;
    }
}

times_tables();