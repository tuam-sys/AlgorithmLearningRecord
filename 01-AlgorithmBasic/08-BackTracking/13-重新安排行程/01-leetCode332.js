/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    // my solution   通过率：18/80  [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]未通过
    // function backtracking(tickets, cur) {
    //     if(!cur) return ;
    //     else res.push(cur);
    //     let temp;
    //     let index;
    //     for(let i = 0; i < tickets.length; i++) {
    //         if(tickets[i][0] === cur && !used[i]) {
    //             if(!temp) {
    //                 temp = tickets[i][1];
    //                 index = i;
    //             }
    //             else {
    //                 if(temp > tickets[i][1]) {
    //                     temp = tickets[i][1];
    //                     index = i;
    //                 }
    //             }
    //         }
    //     }
    //     used[index] = true;
    //     backtracking(tickets, temp);
    // }

    // let res = [];
    // let path = [];
    // let used = new Array(tickets.length).fill(false);
    // backtracking(tickets, "JFK");
    // return res;


    // // my solution   超时
    // function backtracking(tickets, cur) {
    //     // console.log(path);
    //     if(path.length === tickets.length + 1) {
    //         if(!res.length) res = Array.from(path);
    //         else {
    //             let i = 0;
    //             for(; i < path.length; i++) {
    //                 // console.log(res[i] + '     ' + path[i]);
    //                 if(res[i] !== path[i]) break;
    //             }
    //             if(res[i] > path[i]) {
    //                 // console.log('iii');
    //                 res = Array.from(path);
    //             }
    //         }
    //         // console.log('hhh');
    //         // console.log(res);
    //         return ;
    //     }
        
    //     for(let i = 0; i < tickets.length; i++) {
    //         if(used[i] || tickets[i][0] !== cur) continue;
    //         used[i] = true;
    //         path.push(tickets[i][1]);
    //         backtracking(tickets, tickets[i][1]);
    //         path.pop();
    //         used[i] = false;
    //     }
    // }

    // let res = [];
    // let path = ["JFK"];
    // let used = new Array(tickets.length).fill(false);
    // backtracking(tickets, "JFK");
    // return res;


    // Carl的解法  思路：使用map记录每个出发机场的可到达机场集合，通过对可到达机场集合按字典排序，保证找到的第一个行程就是字典序最小的
    function backtracking() {
        if(res.length === tickets.length + 1) return true;
        if(!map[res[res.length - 1]] || !map[res[res.length - 1]].length) return false;
        for(let i = 0; i < map[res[res.length - 1]].length; i++) {
            let city = map[res[res.length - 1]][i];
            // 删除已走过航线，防止死循环
            map[res[res.length - 1]].splice(i, 1);
            res.push(city);
            if(backtracking()) return true;
            res.pop();
            map[res[res.length - 1]].splice(i, 0, city);
        }
    }
    
    let res = ['JFK'];
    let map = {};
    for(let ticket of tickets) {
        let [from, to] = ticket;
        if(!map[from]) map[from] = [];
        map[from].push(to);
    }
    // 对到达城市列表排序
    for(let city in map) {
        map[city].sort();
    }
    backtracking();
    return res;
};

// let s = ["JFK","ATL","JFK","SFO","ATL","SFO"];
// s.sort();
// console.log(s);
// let tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];
// let tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
let tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]];
console.log(findItinerary(tickets));
let str = '...Q';
console.log(str.includes('Q'));