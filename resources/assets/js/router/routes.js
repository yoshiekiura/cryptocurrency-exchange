const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Setting = () => import('~/pages/settings/setting').then(m => m.default || m)
const Profile = () => import('~/pages/settings/profile').then(m => m.default || m)
const Password = () => import('~/pages/settings/password').then(m => m.default || m)
const Balance = () => import('~/pages/wallets/balance').then(m => m.default || m)
const Market = () => import('~/pages/markets/market').then(m => m.default || m)
const Order = () => import('~/pages/orders/orders').then(m => m.default || m)
const Trading = () => import('~/pages/markets/main').then(m => m.default || m)




export default [
  // { path: '/', name: 'welcome', component: Welcome },
  { path: '/', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },

  { path: '/settings', name: 'settings',  component: Setting,
    children: [
        { path: 'profile', name: 'settings.profile', component: Profile },
        { path: 'password', name: 'settings.password', component: Password }
    ]
  },
  { path: '/wallets', name: 'wallets', component: Balance },
  { path: '/markets', name: 'markets', component: Market },
  { path: '/orders', name: 'orders', component: Order },
  { path: '/trading', name: 'trading', component: Trading },
  { path: '*', component: NotFound }
]
