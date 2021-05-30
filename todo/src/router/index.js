import { createWebHistory, createRouter } from "vue-router";
import About from '@/components/About'
import Terms from '@/components/Terms'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import ToDoItem from '@/components/ToDoItem'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/todo/:id",
    name: "todo",
    component: ToDoItem,
    props : true,
    children: [
        {
          path: 'profile',
          component: About,
          alias : ['dashboard']
        },
        {
          path: 'posts',
          component: Terms,
        },
      ],
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFound,
  },
 // { path: '/user-:afterUser(.*)', component: UserGeneric },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;