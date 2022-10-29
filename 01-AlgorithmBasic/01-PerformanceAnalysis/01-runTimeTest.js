function f1On(n) {
    let k = 0;
    for(let i = 0; i < n; i++) {
        k++;
    }
}

function f2On2(n) {
    let k = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            k++;
        }
    }
}

function f3Onlogn(n) {
    let k = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 1; j < n; j *= 2) {  // 注意这里j=1
            k++;
        }
    }
}

let startTime = (new Date()).getTime();
let n = 50000000;
// f1On(n);
// n = 500000000, runTime = 373
// n = 5000000000, runTime = 5564
// n = 1500000000, runTime = 1111    ****
// n = 1250000000, runTime = 930
// n = 1350000000, runTime = 1002
// n = 1300000000, runTime = 965     ****
// f2On2(n);
// n = 40000, runTime = 1192
// n = 30000, runTime = 670
// n = 38000, runTime = 1074
// n = 37000, runTime = 1020   ****
// n = 36000, runTime = 965    ****
f3Onlogn(n);
// n = 130000000, runTime = 3894
// n = 40000000, runTime = 819
// n = 45000000, runTime = 926
// n = 50000000, runTime = 1023
let endTime = (new Date()).getTime();
let runTime = endTime - startTime;
console.log(`n = ${n}, runTime = ${runTime}`);