/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // my solution  时间复杂度: O(n)，空间复杂度: O(1)
    // let map = new Map();
    // for(let e of s) {
    //     map.set(e, (map.get(e) || 0) + 1);
    // }
    // for(let e of t) {
    //     if(!(map.get(e))) return false;
    //     map.set(e, map.get(e) - 1);
    //     if(map.get(e) === 0) {
    //         map.delete(e);
    //     }
    // }
    // let ret = map.size === 0 ? true : false;
    // return ret;

    // Carl的解法  时间复杂度: O(n)，空间复杂度: O(1)
    if(s.length !== t.length) return false;
    let record = new Array(26).fill(0);
    let base = "a".charCodeAt();
    for(let e of s) {
        record[e.charCodeAt() - base]++;
    }
    for(let e of t) {
        if(!record[e.charCodeAt() - base]) return false;
        record[e.charCodeAt() - base]--;
    }
    return true;
};
let s = "anagram";
let t = "nagaram";
// let s = "rat";
// let t = "car";
console.log(isAnagram(s, t));