/****
 * home内容模块的route配置
****/

import PageOne from '@/pages/page-one'
import PageTwo from '@/pages/page-two'


const routes = [
  {
    key: 'page-one',
    path: '/home/page-one',
    component: PageOne,
  },
  {
    key: 'page-two',
    path: '/home/page-two',
    component: PageTwo,
  },
]

export default routes