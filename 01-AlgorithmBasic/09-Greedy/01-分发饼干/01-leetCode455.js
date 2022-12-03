/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(1)
    // my solution   思路：小饼干先喂饱小胃口
    // let res = 0;
    // g.sort((a, b) => a - b);
    // s.sort((a, b) => a - b);
    // for(let i = 0, j = 0; i < g.length && j < s.length;) {
    //     if(s[j] >= g[i]) {
    //         i++;
    //         j++;
    //         res++;
    //     }
    //     else j++;
    // }
    // return res;

    // Carl的解法   思路：用大饼干优先满足胃口大的
    let res = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    for(let i = g.length - 1, j = s.length - 1; i >= 0 && j >= 0;) {
        if(s[j] >= g[i]) {
            i--;
            j--;
            res++;
        }
        else i--;
    }
    return res;
};