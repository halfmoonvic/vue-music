import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Recommend from 'components/recommend/Recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'
import Disc from 'components/disc/disc'

Vue.use(Router)

// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   redirect: '/recommend'
//     // },
//     {
//       path: '/recommend',
//       name: 'recommend',
//       component: Recommend
//     },{
//         path: '/singer',
//         component: Singer
//     },{
//         path: '/rank',
//         component: Rank
//     },{
//         path: '/search',
//         component: Search
//     }
//   ]
// });

const routes = [
    // {
    //   path: '/',
    //   redirect: '/recommend'
    // },
    {
      path: '/recommend',
      // name: 'recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },{
        path: '/singer',
        component: Singer,
        children: [{
            path: ':id',
            component: SingerDetail
        }]
    },{
        path: '/rank',
        component: Rank
    },{
        path: '/search',
        component: Search
    }
  ];

const router = new Router({
    routes
})

router.push('recommend');

// export default new Router({routes})
export default router;
