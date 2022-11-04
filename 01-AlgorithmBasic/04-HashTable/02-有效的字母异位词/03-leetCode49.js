/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    // my solution
    // let retArr = [];
    // let mapArr = [];
    // for(let item of strs) {
    //     let map = new Map();
    //     for(let e of item) {
    //         map.set(e, (map.get(e) || 0) + 1);
    //     }
    //     let i = 0;
    //     for(; i < mapArr.length; i++) {
    //         if(map.size !== mapArr[i].size) continue;
    //         let j = 0;
    //         for(let e of item) {
    //             if(map.get(e) && mapArr[i].get(e) && map.get(e) === mapArr[i].get(e)) {
    //                 j++;
    //                 continue;
    //             }
    //             else {
    //                 break;
    //             }
    //         }
    //         // console.log(j);
    //         if(j === item.length) {
    //             retArr[i].push(item);
    //             break;
    //         }
    //     }
    //     if(i === mapArr.length) {
    //         let arr = [item];
    //         retArr.push(arr);
    //         mapArr.push(map);
    //     }
    //     // console.log(mapArr);
    // }
    // return retArr;

    //两个字符串互为字母异位词，当且仅当两个字符串包含的字母相同。同一组字母异位词中的字符串具备相同点，可以使用相同点作为一组字母异位词的标志，使用哈希表存储每一组字母异位词，哈希表的键为一组字母异位词的标志，哈希表的值为一组字母异位词列表。
    //遍历每个字符串，对于每个字符串，得到该字符串所在的一组字母异位词的标志，将当前字符串加入该组字母异位词的列表中。遍历全部字符串之后，哈希表中的每个键值对即为一组字母异位词。
    //以下的两种方法分别使用排序和计数作为哈希表的键。

    // 官方解法-排序  时间复杂度：O(nklogk) 空间复杂度：O(nk) 其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度
    // const map = new Map();
    // for(let str of strs) {
    //     let array = Array.from(str);
    //     array.sort();
    //     let key = array.toString();
    //     let list = map.get(key) ? map.get(key) : new Array();
    //     list.push(str);
    //     map.set(key, list);
    // }
    // return Array.from(map.values());

    // 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的，故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。
    // 由于字符串只包含小写字母，因此对于每个字符串，可以使用长度为 2626 的数组记录每个字母出现的次数。需要注意的是，在使用数组作为哈希表的键时，不同语言的支持程度不同，因此不同语言的实现方式也不同。

    // 官方解法-计数  时间复杂度：O(n(k+∣Σ∣)) 空间复杂度：O(n(k+∣Σ∣)) 其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度, Σ 是字符集
    const map = new Object();
    for(let str of strs) {
        const count = new Array(26).fill(0);
        for(let s of str) {
            count[s.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : map[count] = [str];
    }
    return Object.values(map);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let strs = ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"];
// let strs = ["a"];
console.log(groupAnagrams(strs));