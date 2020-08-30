import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Youtube from '../views/Youtube.vue';
import GoogleKeep from '../views/GoogleKeep.vue';
import MainApp from '../views/MainApp.vue';
import GoogleContacts from '../views/GoogleContacts.vue';
import LoginForm from '../views/LoginForm.vue';
import Elements from '../views/Elements.vue';
import DoubleSideBar from '../views/DoubleSideBar.vue';
import SimpleApp from '../views/SimpleApp.vue';
import Alerts from '../components/Elements/Alerts/All.vue';
import AppBars from '../components/Elements/AppBars/All.vue';
import Autocomplete from '../components/Elements/Autocomplete/All.vue';
import Avatars from '../components/Elements/Avatars/All.vue';
import Badges from '../components/Elements/Badges/All.vue';
import Banners from '../components/Elements/Banners/All.vue';
import BottomNav from '../components/Elements/BottomNav/All.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/directives',
    name: 'Directives',
    component: Home
  },
  {
    path: '/border',
    name: 'Border',
    component: Home
  },
  {
    path: '/content',
    name: 'Content',
    component: Home
  },
  {
    path: '/elevation',
    name: 'Elevation',
    component: Home
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Home
  },
  {
    path: '/float',
    name: 'Float',
    component: Home
  },
  {
    path: '/motion',
    name: 'Motion',
    component: Home
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: Home
  },
  {
    path: '/text',
    name: 'Text',
    component: Home
  },
  {
    path: '/programmaticScrolling',
    name: 'Scrolling',
    component: Home
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Home
  },
  {
    path: '/layouts/contacts',
    name: 'Contacts',
    component: Home
  },
  {
    path: '/layouts/keep',
    name: 'GoogleKeep',
    component: Home
  },
  {
    path: '/layouts/login',
    name: 'Login',
    component: Home
  },
  {
    path: '/layouts/simple',
    name: 'Simple',
    component: Home
  },
  {
    path: '/layouts/youtube',
    name: 'Youtube',
    component: Home
  },
  {
    path: '/layouts/sidebars',
    name: 'Sidebars',
    component: Home
  },
  {
    path: '/sandboxes',
    name: 'Sandbox',
    component: Home
  },
  {
    path: '/elements/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/elements/appbars',
    name: 'AppBars',
    component: AppBars
  },
  {
    path: '/elements/autocomplete',
    name: 'Autocomplete',
    component: Autocomplete
  },
  {
    path: '/elements/avatars',
    name: 'Avatars',
    component: Avatars
  },
  {
    path: '/elements/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/elements/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/elements/bottomnavs',
    name: 'BottomNav',
    component: BottomNav
  },
  {
    path: '/elements/bottomSheets',
    name: 'BottomSheets',
    component: Home
  },
  {
    path: '/elements/breadcrumbs',
    name: 'BreadCrumbs',
    component: Home
  },
  {
    path: '/elements/buttons',
    name: 'Buttons',
    component: Home
  },
  {
    path: '/elements/calendars',
    name: 'Calendars',
    component: Home
  },
  {
    path: '/elements/cards',
    name: 'Cards',
    component: Home
  },
  {
    path: '/elements/carousels',
    name: 'Carousels',
    component: Home
  },
  {
    path: '/elements/chips',
    name: 'Chips',
    component: Home
  },
  {
    path: '/elements/circularprogress',
    name: 'CircularProgress',
    component: Home
  },
  {
    path: '/elements/colorpickers',
    name: 'ColorPickers',
    component: Home
  },
  {
    path: '/elements/combobox',
    name: 'Combobox',
    component: Home
  },
  {
    path: '/elements/datepickers',
    name: 'DatePickers',
    component: Home
  },
  {
    path: '/elements/dialogs',
    name: 'Dialogs',
    component: Home
  },
  {
    path: '/elements/dividers',
    name: 'Dividers',
    component: Home
  },
  {
    path: '/elements/expansionPanels',
    name: 'ExpansionPanels',
    component: Home
  },
  {
    path: '/elements/fabButtons',
    name: 'FAB',
    component: Home
  },
  {
    path: '/elements/fileInputs',
    name: 'FileInputs',
    component: Home
  },
  {
    path: '/elements/footer',
    name: 'Footer',
    component: Home
  },
  {
    path: '/elements/forms',
    name: 'Forms',
    component: Home
  },
  {
    path: '/elements/grids',
    name: 'Grids',
    component: Home
  },
  {
    path: '/elements/groupButtons',
    name: 'GroupButtons',
    component: Home
  },
  {
    path: '/elements/groupChips',
    name: 'GroupChips',
    component: Home
  },
  {
    path: '/elements/groupItems',
    name: 'GroupItems',
    component: Home
  },
  {
    path: '/elements/groupListItems',
    name: 'GroupListItems',
    component: Home
  },
  {
    path: '/elements/groupSlides',
    name: 'GroupSlides',
    component: Home
  },
  {
    path: '/elements/groupWindows',
    name: 'GroupWindows',
    component: Home
  },
  {
    path: '/elements/hover',
    name: 'Hover',
    component: Home
  },
  {
    path: '/elements/icons',
    name: 'Icons',
    component: Home
  },
  {
    path: '/elements/images',
    name: 'Images',
    component: Home
  },
  {
    path: '/elements/inputs',
    name: 'Inputs',
    component: Home
  },
  {
    path: '/elements/lazy',
    name: 'Lazy',
    component: Home
  },
  {
    path: '/elements/linearProgress',
    name: 'LinearProgress',
    component: Home
  },
  {
    path: '/elements/lists',
    name: 'Lists',
    component: Home
  },
  {
    path: '/elements/menus',
    name: 'Menus',
    component: Home
  },
  {
    path: '/elements/navDrawers',
    name: 'NavDrawers',
    component: Home
  },
  {
    path: '/elements/overflowButtons',
    name: 'OverflowButtons',
    component: Home
  },
  {
    path: '/elements/overlays',
    name: 'Overlays',
    component: Home
  },
  {
    path: '/elements/paginations',
    name: 'Paginations',
    component: Home
  },
  {
    path: '/elements/parallax',
    name: 'Parallax',
    component: Home
  },
  {
    path: '/elements/ratings',
    name: 'Ratings',
    component: Home
  },
  {
    path: '/elements/selectionControls',
    name: 'SelectionControls',
    component: Home
  },
  {
    path: '/elements/selects',
    name: 'Selects',
    component: Home
  },
  {
    path: '/elements/sheets',
    name: 'Sheets',
    component: Home
  },
  {
    path: '/elements/skeletonLoaders',
    name: 'SkeletonLoaders',
    component: Home
  },
  {
    path: '/elements/sliders',
    name: 'Sliders',
    component: Home
  },
  {
    path: '/elements/snackbars',
    name: 'Snackbars',
    component: Home
  },
  {
    path: '/elements/sparklines',
    name: 'Sparklines',
    component: Home
  },
  {
    path: '/elements/steppers',
    name: 'Steppers',
    component: Home
  },
  {
    path: '/elements/subheaders',
    name: 'Subheaders',
    component: Home
  },
  {
    path: '/elements/systembars',
    name: 'SystemBars',
    component: Home
  },
  {
    path: '/elements/tables',
    name: 'Tables',
    component: Home
  },
  {
    path: '/elements/tabs',
    name: 'Tabs',
    component: Home
  },
  {
    path: '/elements/textAreas',
    name: 'TextAreas',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
  {
    path: '/simple',
    name: 'Simple',
    component: SimpleApp
  },
  {
    path: '/double',
    name: 'Double',
    component: DoubleSideBar
  },
  {
    path: '/main',
    name: 'MainApp',
    component: MainApp
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: GoogleContacts
  },
  {
    path: '/keep',
    name: 'Keep',
    component: GoogleKeep
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/elements',
    name: 'Elements',
    component: Elements
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
