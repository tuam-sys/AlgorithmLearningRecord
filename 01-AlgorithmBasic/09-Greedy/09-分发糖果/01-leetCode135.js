/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    // my solution
    // let candyArr = new Array(ratings.length).fill(1);
    // for(let i = 1; i < ratings.length; i++) {
    //     if(ratings[i] > ratings[i - 1] && candyArr[i] <= candyArr[i - 1]) candyArr[i] = candyArr[i - 1] + 1;
    //     else if(ratings[i] < ratings[i - 1] && candyArr[i] >= candyArr[i - 1]) {
    //         candyArr[i - 1] = candyArr[i] + 1;
    //         for(let j = 2; i - j >= 0; j++) {
    //             if(ratings[i - j] > ratings[i - j + 1] && candyArr[i - j] <= candyArr[i - j + 1]) {
    //                 candyArr[i - j] = candyArr[i - j + 1] + 1;
    //             }
    //             else break;
    //         }
    //     }
    // }
    // console.log(candyArr);
    // return candyArr.reduce((a, b) => a + b);

    // Carl的解法  思路：贪心
    let candys = new Array(ratings.length).fill(1);
    for(let i = 1; i < ratings.length; i++) {  // // 从前向后
        if(ratings[i] > ratings[i - 1]) candys[i] = candys[i - 1] + 1;
    }
    for(let i = ratings.length - 2; i >= 0; i--) {  // 从后向前
        if(ratings[i] > ratings[i + 1]) candys[i] = Math.max(candys[i + 1] + 1, candys[i]);
    }
    return candys.reduce((a, b) => a + b);  // 统计结果
};

let ratings = [1,3,2,2,1];
// let ratings = [1,2,87,87,87,2,1];
console.log(candy(ratings));