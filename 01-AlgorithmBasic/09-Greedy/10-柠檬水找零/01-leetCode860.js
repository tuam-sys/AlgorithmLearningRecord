/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    // my solution  思路：贪心
    // let fives = [];
    // let tens = [];
    // let twentys = [];
    // for(let i = 0; i < bills.length; i++) {
    //     if(bills[i] === 5) fives.push(5);
    //     else if(bills[i] === 10) {
    //         if(fives.pop() === 5) tens.push(10);
    //         else return false;
    //     }
    //     else {
    //         if(tens.pop() === 10 && fives.pop() === 5) twentys.push(20);
    //         else if(fives.length >= 3) {
    //             fives.length -= 3;
    //             twentys.push(20);
    //         }
    //         else return false;
    //     }
    // }
    // return true;

    // Carl的解法  思路：贪心
    let fiveCount = 0;
    let tenCount = 0;
    for(let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        // 情况一：账单是5，直接收下。
        if(bill === 5) fiveCount++;
        // 情况二：账单是10，消耗一个5，增加一个10
        else if(bill === 10) {
            if(fiveCount > 0) {
                fiveCount--;
                tenCount++;
            }
            else return false;
        }
        // 情况三：账单是20，优先消耗一个10和一个5，如果不够，再消耗三个5
        else {
            // // 优先消耗10美元，因为5美元的找零用处更大，能多留着就多留着
            if(fiveCount > 0 && tenCount > 0) {
                fiveCount--;
                tenCount--;
            }
            else if(fiveCount >= 3) fiveCount -= 3;
            else return false;
        }
    }
    return true;
};