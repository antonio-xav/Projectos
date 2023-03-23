
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout2.vue'),
    children: [
      { path: 'acessorios', name: 'acessorios', component: () => import('pages/AcessoriosPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
