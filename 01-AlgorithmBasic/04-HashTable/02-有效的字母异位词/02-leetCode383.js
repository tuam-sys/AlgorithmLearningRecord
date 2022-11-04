/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    // my solution  时间复杂度: O(n)，空间复杂度: O(1)
    // let map = new Map();
    // for(let e of ransomNote) {
    //     map.set(e, (map.get(e) || 0) + 1);
    // }
    // for(let e of magazine) {
    //     if(map.get(e)) {
    //         map.set(e, map.get(e) - 1);
    //     }
    //     if(map.get(e) === 0) {
    //         map.delete(e);
    //     }
    // }
    // let ret = map.size === 0 ? true : false;
    // return ret;

    // Carl的解法 用数组做哈希表 与我的想法一致，只是实现方式不同
    const strArr = new Array(26).fill(0);
    const base = 'a'.charCodeAt();
    for(let c of magazine) {
        strArr[c.charCodeAt() - base]++;
    }
    for(let c of ransomNote) {
        let index = c.charCodeAt() - base;
        if(!strArr[index]) return false;
        strArr[index]--;
    }
    return true;
};
let ransomNote = "aa";
let magazine = "aab";
console.log(canConstruct(ransomNote, magazine));