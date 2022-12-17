const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let datas = [];
    while(line = await readline()){
        let tokens = line.split(' ');
        let tempArr = [];
        for(let i = 0; i < tokens.length; i++) {
            tempArr.push(parseInt(tokens[i]));
        }
        datas.push(tempArr);
    }
    // console.log(datas);
    let n = datas[0][0];
    let likes = datas[1];
    let likeMap = new Map();
    for(let i = 0; i < likes.length; i++) {
        if(likeMap.has(likes[i])) {
            let t = likeMap.get(likes[i]);
            t.push(i);
            likeMap.set(likes[i], t);
        }
        else {
            let temp = [i];
            likeMap.set(likes[i], temp);
        }
    }
    let q = datas[2][0];
    for(let i = 3; i < 3 + q; i++) {
        let left = datas[i][0] - 1;
        let right = datas[i][1] - 1;
        let k = datas[i][2];
        let count = 0;
        if(likeMap.has(k)) {
            let likeArr = likeMap.get(k);
            for(let j = 0; j < likeArr.length; j++) {
                if(likeArr[j] >= left && likeArr[j] <= right) count++;
            }
            console.log(count);
        }
        else console.log(count);
    }
}()
