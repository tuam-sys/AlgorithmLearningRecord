/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // Carl的解法1  思路：贪心  时间复杂度：O(n)  空间复杂度：O(1)
    // let res = 0;
    // let minPrice = prices[0];  // 记录最低价格
    // for(let i = 1; i < prices.length; i++) {
    //     // 情况二：相当于买入
    //     if(prices[i] < minPrice) minPrice = prices[i];
    //     // 情况三：保持原有状态（因为此时买则不便宜，卖则亏本）
    //     if(prices[i] >= minPrice && prices[i] <= minPrice + fee) continue;
    //     // 计算利润，可能有多次计算利润，最后一次计算利润才是真正意义的卖出
    //     if(prices[i] > minPrice + fee) {
    //         res += prices[i] - minPrice - fee;
    //         minPrice = prices[i] - fee;  // 情况一，这一步很关键
    //     }
    // }
    // return res;

    // Carl的解法2  思路：动态规划  时间复杂度：O(n)  空间复杂度：O(n)
    // dp[i][1]第i天不持有股票的最多现金
    // dp[i][0]第i天持有股票所剩的最多现金
    // let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
    // dp[0][0] = 0 - prices[0];  // 持股票
    // dp[0][1] = 0;
    // for(let i = 1; i < prices.length; i++) {
    //     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    //     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] -fee);
    // }
    // return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);

    // Carl的解法3  思路：动态规划-对空间进行优化  时间复杂度：O(n)  空间复杂度：O(1)
    // 滚动数组
    // have表示当天持有股票的最大收益
    // notHave表示当天不持有股票的最大收益
    // 把手续费算在买入价格中
    let have = -prices[0] - fee;  // 第0天持有股票的最大收益
    let nothave = 0;  // 第0天不持有股票的最大收益
    for(let i = 1; i < prices.length; i++) {
        // 第i天持有股票的最大收益由两种情况组成
        // 1、第i-1天就已经持有股票，第i天什么也没做
        // 2、第i-1天不持有股票，第i天刚买入
        have = Math.max(have, nothave - prices[i] - fee);
        // 第i天不持有股票的最大收益由两种情况组成
        // 1、第i-1天就已经不持有股票，第i天什么也没做
        // 2、第i-1天持有股票，第i天刚卖出
        nothave = Math.max(nothave, have + prices[i]);
    }
    // 最后手中不持有股票，收益才能最大化
    return nothave;
};

// 1.1 MVVM的基本原理
// (1) MVVM是Model-View-ViewModel 缩写，也就是把MVC 中的Controller 演变成ViewModel 。Model
// 层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层
// 并⾃动将数据渲染到⻚⾯中，视图变化的时候会通知viewModel层更新数据。
// (2) 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和
// ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会
// 立即反应到View 上。
// (3) ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完
// 全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状
// 态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
// 1.2 MVVM实现逻辑导致的优缺点
// 优点
// 	(1) 分离视图（View）和模型（ Model ） , 降低代码耦合，提⾼视图或者逻辑的重⽤性: ⽐如视图（View）可以独⽴于 Model变化和修改，⼀个 ViewModel 可以绑定不同的 "View" 上，当 View 变化的时候 Model 可以不变，当 Model 变化 的时候View 也可以不变。你可以把⼀些视图逻辑放在⼀个 ViewModel ⾥⾯，让很多 view 重⽤这段视图逻辑。
// 	(2) 提⾼可测试性: ViewModel 的存在可以帮助开发者更好地编写测试代码。
// 	(3) ⾃动更新 dom: 利⽤双向绑定 , 数据更新后视图⾃动更新 , 让开发者从繁琐的⼿动 dom 中解放。
// 缺点
// 	(1) 调试困难: 因为使⽤双向绑定的模式，当你看到界⾯异常了，有可能是你 View 的代码有 Bug ，也可能是 Model 的代码有问题。数据绑定使得⼀个位置的Bug 被快速传递到别的位置，要定位原始出问题的地⽅就变得不那么容易 了。另外，数据绑定的声明是指令式地写在View 的模版当中的，这些内容是没办法去打断点 debug 的。
// 	(2) 内存开销大：⼀个⼤的模块中 model 也会很⼤，虽然使⽤⽅便，也很容易保证数据的⼀致性，但是⻓期持有，不释放内存就会使得内存开销越来越大。
// 	(3) 维护成本高：对于⼤型的图形应⽤程序，视图状态较多， ViewModel 的构建和维护的成本都会⽐较⾼。

// // 2.调研分析localstorage和vuex，完成以下逻辑：
// // （1）用户登录校验
// // 可使用现成用户登录接口：
// export function login(username, password) {
//          return {'code': 0, 'message': '登录成功', 'data': {'token': &quot;abcdefg&quot;}}
// }
// // 通过实现一个vuex组件，实现token的存储和获取
// export new Vuex.Store({
//     state : {
//             //初始化，待填写
//             user: {
//                 token: ''
//             }
//     },
//     mutations : {
//             //token存储，待填写
//             setUserToken(state, token) {
//                 state.user.token = token
//                 window.localStorage.setItem('token', state.user.token)
//             }
//     },
//     actions : {
//             //执行登录，待填写
//             login({commit, state}) {
//                 Vue.http.get('/login').then((res) => {
//                     commit('setUserToken', res.data.token)
//                     if(res.data.token === 'abcdefg') {
//                         console.log('登录成功')
//                     }
//                 },(err) => {
//                     console.log(err)
//                 })
//             }
//     },
//     getattrs : {
//             //获取token，待填写
//             getUserToken: state => {
//                 if(!state.user.token) {
//                     state.user.token = window.localStorage.getItem('token')
//                 }
//                 return state.user.token
//             }
//     }
// })

// // （2）用户路由校验
// // 根据以下逻辑实现全局前置路由守卫
// // （a）用户未登录，则跳转登录页面；
// // （b）如果已登录，根据用户路由权限数据，判定当前页面该用户是否可以进入，可以进入则进入下一页面；不能进入则提示权限不足。
// // 获取token和路由参考以下vuex结构
// store/getters.js
// const getters = {
//     token: state => state.user.token,//'abcdefg'
//     routers: state => state.permission.routers//['/login','/main','/index']
// }
// // 请根据上述条件实现以下代码：
// router.beforeEach((to, from, next) => {
//     if (store.getters.token) {
//               if (to.path === 'login') {
//                       next({'path': '/'})
//               }
//               //待实现
//               else {
//                 alert('您的权限不足，无法进入！')
//               }
//       }
//       //待实现
//       else {
//         next({'path': '/login'})
//       }
// })