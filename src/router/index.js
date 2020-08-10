import Vue from "vue";
import VueRouter from "vue-router";
import GMap from "../components/home/GMap.vue";
import SignUp from "../components/auth/SignUp.vue";
import Login from "../components/auth/Login.vue";
import ViewProfile from "../components/profile/ViewProfile.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "GMap",
    component: GMap,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/profile/:id",
    name: "ViewProfile",
    component: ViewProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      // User is signed in. Proceed to route
      next();
    } else {
      // No user is signed in. Redirect to login
      next({
        name: "Login"
      });
    }
  } else {
    // if route is not guarded by auth, proceed
    next();
  }
});

export default router;
