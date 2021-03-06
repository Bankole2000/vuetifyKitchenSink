import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Youtube from "../components/Layouts/Youtube.vue";
import GoogleKeep from "../components/Layouts/GoogleKeep.vue";
import MainApp from "../components/Layouts/MainApp.vue";
import GoogleContacts from "../components/Layouts/GoogleContacts.vue";
import LoginForm from "../components/Layouts/LoginForm.vue";
import Elements from "../views/Elements.vue";
import DoubleSideBar from "../components/Layouts/DoubleSideBar.vue";
import SimpleApp from "../components/Layouts/SimpleApp.vue";
import Alerts from "../components/Elements/Alerts/All.vue";
import AppBars from "../components/Elements/AppBars/All.vue";
import ArrayMethods from "../components/JSCode/Arrays/All.vue";
import Autocomplete from "../components/Elements/Autocomplete/All.vue";
import Avatars from "../components/Elements/Avatars/All.vue";
import Badges from "../components/Elements/Badges/All.vue";
import Banners from "../components/Elements/Banners/All.vue";
import BottomNav from "../components/Elements/BottomNav/All.vue";
import BottomSheets from "../components/Elements/BottomSheets/All.vue";
import BreadCrumbs from "../components/Elements/BreadCrumbs/All.vue";
import Buttons from "../components/Elements/Buttons/All.vue";
import Calendars from "../components/Elements/Calendars/All.vue";
import Carousels from "../components/Elements/Carousels/All.vue";
import Cards from "../components/Elements/Cards/All.vue";
import Chips from "../components/Elements/Chips/All.vue";
import Circular from "../components/Elements/CircularProgress/All.vue";
import ColorPickers from "../components/Elements/ColorPickers/All.vue";
import Combobox from "../components/Elements/Combobox/All.vue";
import DatePickers from "../components/Elements/DatePickers/All.vue";
import Dialogs from "../components/Elements/Dialogs/All.vue";
import Dividers from "../components/Elements/Dividers/All.vue";
import DynamicForms from "../components/CodeSnips/DynamicForms/All.vue";
import ExpansionPanels from "../components/Elements/ExpansionPanels/All.vue";
import FAB from "../components/Elements/FabButtons/All.vue";
import FileInputs from "../components/Elements/FileInputs/All.vue";
import Footers from "../components/Elements/Footer/All.vue";
import Forms from "../components/Elements/Forms/All.vue";
import Grids from "../components/Elements/Grids/All.vue";
import Hover from "../components/Elements/Hover/All.vue";
import Inputs from "../components/Elements/Inputs/All.vue";
import VirtualScrollers from "../components/Elements/VirtualScrollers/All.vue";
import VuexNotes from "../components/Vue/Vuex/All.vue";
import Treeview from "../components/Elements/Treeview/All.vue";
import ToolTips from "../components/Elements/Tooltips/All.vue";
import Toolbars from "../components/Elements/Toolbars/All.vue";
import Timepickers from "../components/Elements/TimePickers/All.vue";
import Timelines from "../components/Elements/Timelines/All.vue";
import TextFields from "../components/Elements/TextFields/All.vue";
import TextAreas from "../components/Elements/TextAreas/All.vue";
import Tabs from "../components/Elements/Tabs/All.vue";
import Tables from "../components/Elements/TablesDataIterators/All.vue";
import DataTables from "../components/Elements/TablesDataTables/All.vue";
import SystemBars from "../components/Elements/SystemBars/All.vue";
import Subheaders from "../components/Elements/Subheaders/All.vue";
import Steppers from "../components/Elements/Steppers/All.vue";
import Sparklines from "../components/Elements/Sparklines/All.vue";
import Snackbars from "../components/Elements/Snackbars/All.vue";
import Sliders from "../components/Elements/Sliders/All.vue";
import SkeletonLoaders from "../components/Elements/SkeletonLoaders/All.vue";
import Sheets from "../components/Elements/Sheets/All.vue";
import Selects from "../components/Elements/Selects/All.vue";
import SelectionControls from "../components/Elements/SelectionControls/All.vue";
import Ratings from "../components/Elements/Ratings/All.vue";
import Pagination from "../components/Elements/Paginations/All.vue";
import Parallax from "../components/Elements/Parallax/All.vue";
import Overlays from "../components/Elements/Overlays/All.vue";
import OverflowButtons from "../components/Elements/OverflowButtons/All.vue";
import NavDrawers from "../components/Elements/NavDrawers/All.vue";
import Menus from "../components/Elements/Menus/All.vue";
import Lists from "../components/Elements/Lists/All.vue";
import Linear from "../components/Elements/LinearProgress/All.vue";
import LifeCycleHooks from "../components/Vue/LifeCycleHooks/All.vue";
import Colors from "../components/Styles/Colors.vue";
import BorderRadius from "../components/Styles/BorderRadius/All.vue";
import Content from "../components/Styles/Content/All.vue";
import Elevation from "../components/Styles/Elevation/All.vue";
import Flex from "../components/Styles/Flex/All.vue";
import Spacing from "../components/Styles/Spacing/All.vue";
import Typography from "../components/Styles/TextAndTypography/All.vue";
import Transitions from "../components/Styles/MotionAndTransitions/All.vue";
import GroupWindows from "../components/Elements/GroupWindows/All.vue";
import GroupSlides from "../components/Elements/GroupSlides/All.vue";
import GroupListItems from "../components/Elements/GroupListItems/All.vue";
import GroupItems from "../components/Elements/GroupItems/All.vue";
import GroupChips from "../components/Elements/GroupChip/All.vue";
import GroupButtons from "../components/Elements/GroupButtons/All.vue";
import Images from "../components/Elements/Images/All.vue";
import Icons from "../components/Elements/Icons/All.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Alerts,
    meta: {
      title: "VJS Docs",
      metaTags: [
        {
          name: "description",
          content: "Vuetify JS Component Library"
        },
        {
          property: "og:description",
          content: "The home page of our example app."
        }
      ]
    }
  },
  {
    path: "/directives",
    name: "Directives",
    component: Home
  },
  {
    path: "/testarea",
    name: "Test Area",
    component: Colors
  },

  {
    path: "/programmaticScrolling",
    name: "Scrolling",
    component: Home
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: Home
  },
  {
    path: "/layouts/contacts",
    name: "Contacts",
    component: GoogleContacts
  },
  {
    path: "/layouts/keep",
    name: "GoogleKeep",
    component: GoogleKeep
  },
  {
    path: "/layouts/login",
    name: "Login",
    component: LoginForm
  },
  {
    path: "/layouts/simple",
    name: "Simple",
    component: SimpleApp
  },
  {
    path: "/layouts/youtube",
    name: "Youtube",
    component: Youtube
  },
  {
    path: "/layouts/sidebars",
    name: "Sidebars",
    component: DoubleSideBar
  },
  {
    path: "/layouts/layoutplayground",
    name: "Layouts Playground",
    component: MainApp
  },
  {
    path: "/elements/alerts",
    name: "Alerts",
    component: Alerts
  },
  {
    path: "/elements/appbars",
    name: "AppBars",
    component: AppBars
  },
  {
    path: "/javascript/arrays",
    name: "Array Methods",
    component: ArrayMethods
  },
  {
    path: "/elements/autocomplete",
    name: "Autocomplete",
    component: Autocomplete
  },
  {
    path: "/elements/avatars",
    name: "Avatars",
    component: Avatars
  },
  {
    path: "/elements/badges",
    name: "Badges",
    component: Badges
  },
  {
    path: "/elements/banners",
    name: "Banners",
    component: Banners
  },
  {
    path: "/elements/bottomnavs",
    name: "BottomNav",
    component: BottomNav
  },
  {
    path: "/elements/bottomsheets",
    name: "BottomSheets",
    component: BottomSheets
  },
  {
    path: "/styles/borderradius",
    name: "Border Radius",
    component: BorderRadius
  },
  {
    path: "/elements/breadcrumbs",
    name: "BreadCrumbs",
    component: BreadCrumbs
  },
  {
    path: "/elements/buttons",
    name: "Buttons",
    component: Buttons
  },
  {
    path: "/elements/calendars",
    name: "Calendars",
    component: Calendars
  },
  {
    path: "/elements/cards",
    name: "Cards",
    component: Cards
  },
  {
    path: "/elements/carousels",
    name: "Carousels",
    component: Carousels
  },
  {
    path: "/elements/chips",
    name: "Chips",
    component: Chips
  },
  {
    path: "/elements/circularprogress",
    name: "CircularProgress",
    component: Circular
  },
  {
    path: "/elements/colorpickers",
    name: "ColorPickers",
    component: ColorPickers
  },
  {
    path: "/styles/colors",
    name: "Colors",
    component: Colors
  },
  {
    path: "/styles/content",
    name: "Content",
    component: Content
  },
  {
    path: "/elements/combobox",
    name: "Combobox",
    component: Combobox
  },
  {
    path: "/elements/datepickers",
    name: "DatePickers",
    component: DatePickers
  },
  {
    path: "/elements/dialogs",
    name: "Dialogs",
    component: Dialogs
  },
  {
    path: "/elements/dividers",
    name: "Dividers",
    component: Dividers
  },
  {
    path: "/custom/dynamicforms",
    name: "Dynamic Forms",
    component: DynamicForms
  },
  {
    path: "/styles/elevation",
    name: "Elevation",
    component: Elevation
  },
  {
    path: "/elements/expansionpanels",
    name: "ExpansionPanels",
    component: ExpansionPanels
  },
  {
    path: "/elements/fabbuttons",
    name: "FAB",
    component: FAB
  },
  {
    path: "/elements/fileinputs",
    name: "File Inputs",
    component: FileInputs
  },
  {
    path: "/styles/flex",
    name: "Flex",
    component: Flex
  },
  {
    path: "/elements/footers",
    name: "Footers",
    component: Footers
  },
  {
    path: "/elements/forms",
    name: "Forms",
    component: Forms
  },
  {
    path: "/elements/grids",
    name: "Grids",
    component: Grids
  },
  {
    path: "/groups/buttons",
    name: "Group Buttons",
    component: GroupButtons
  },
  {
    path: "/groups/chips",
    name: "Group Chips",
    component: GroupChips
  },
  {
    path: "/groups/items",
    name: "Group Items",
    component: GroupItems
  },
  {
    path: "/groups/listitems",
    name: "Group Lists",
    component: GroupListItems
  },
  {
    path: "/groups/slides",
    name: "Group Slides",
    component: GroupSlides
  },
  {
    path: "/groups/windows",
    name: "Group Windows",
    component: GroupWindows
  },
  {
    path: "/elements/hover",
    name: "Hover",
    component: Hover
  },
  {
    path: "/elements/icons",
    name: "Icons",
    component: Icons
  },
  {
    path: "/elements/images",
    name: "Images",
    component: Images
  },
  {
    path: "/elements/inputs",
    name: "Inputs",
    component: Inputs
  },
  {
    path: "/elements/lazy",
    name: "Lazy",
    component: Home
  },
  {
    path: "/vue/lifecyclehooks",
    name: "Life Cycle Hooks",
    component: LifeCycleHooks
  },
  {
    path: "/vue/vuex",
    name: "Vuex",
    component: VuexNotes
  },
  {
    path: "/elements/linearprogress",
    name: "LinearProgress",
    component: Linear
  },
  {
    path: "/elements/lists",
    name: "Lists",
    component: Lists
  },
  {
    path: "/elements/menus",
    name: "Menus",
    component: Menus
  },
  {
    path: "/elements/navdrawers",
    name: "NavDrawers",
    component: NavDrawers
  },
  {
    path: "/elements/overflowbuttons",
    name: "OverflowButtons",
    component: OverflowButtons
  },
  {
    path: "/elements/overlays",
    name: "Overlays",
    component: Overlays
  },
  {
    path: "/elements/pagination",
    name: "Paginations",
    component: Pagination
  },
  {
    path: "/elements/parallax",
    name: "Parallax",
    component: Parallax
  },
  {
    path: "/elements/ratings",
    name: "Ratings",
    component: Ratings
  },
  {
    path: "/elements/selectioncontrols",
    name: "SelectionControls",
    component: SelectionControls
  },
  {
    path: "/elements/selects",
    name: "Selects",
    component: Selects
  },
  {
    path: "/elements/sheets",
    name: "Sheets",
    component: Sheets
  },
  {
    path: "/elements/skeletonloaders",
    name: "SkeletonLoaders",
    component: SkeletonLoaders
  },
  {
    path: "/elements/sliders",
    name: "Sliders",
    component: Sliders
  },
  {
    path: "/elements/snackbars",
    name: "Snackbars",
    component: Snackbars
  },
  {
    path: "/styles/spacing",
    name: "Spacing",
    component: Spacing
  },
  {
    path: "/elements/sparklines",
    name: "Sparklines",
    component: Sparklines
  },
  {
    path: "/elements/steppers",
    name: "Steppers",
    component: Steppers
  },
  {
    path: "/elements/subheaders",
    name: "Subheaders",
    component: Subheaders
  },
  {
    path: "/elements/systembars",
    name: "SystemBars",
    component: SystemBars
  },
  {
    path: "/elements/tables",
    name: "Tables",
    component: Tables
  },
  {
    path: "/elements/datatables",
    name: "Datatables",
    component: DataTables
  },
  {
    path: "/elements/tabs",
    name: "Tabs",
    component: Tabs
  },
  {
    path: "/elements/textareas",
    name: "TextAreas",
    component: TextAreas
  },
  {
    path: "/elements/textfields",
    name: "Textfields",
    component: TextFields
  },
  {
    path: "/elements/timelines",
    name: "Timelines",
    component: Timelines
  },
  {
    path: "/elements/timepickers",
    name: "Timepickers",
    component: Timepickers
  },
  {
    path: "/elements/toolbars",
    name: "Toolbars",
    component: Toolbars
  },
  {
    path: "/elements/tooltips",
    name: "Tooltips",
    component: ToolTips
  },
  {
    path: "/elements/treeview",
    name: "Treeview",
    component: Treeview
  },
  {
    path: "/styles/typography",
    name: "Typography",
    component: Typography
  },
  {
    path: "/styles/transitions",
    name: "Transitions",
    component: Transitions
  },
  {
    path: "/elements/virtualscrollers",
    name: "Virtual Scrollers",
    component: VirtualScrollers
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube
  },
  {
    path: "/simple",
    name: "Simple",
    component: SimpleApp
  },
  {
    path: "/double",
    name: "Double",
    component: DoubleSideBar
  },
  {
    path: "/main",
    name: "MainApp",
    component: MainApp
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: GoogleContacts
  },
  {
    path: "/keep",
    name: "Keep",
    component: GoogleKeep
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm
  },
  {
    path: "/elements",
    name: "Elements",
    component: Elements
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
