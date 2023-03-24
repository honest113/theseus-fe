const dashboardsItem = [
  {
    link: "/dashboards/analytical",
    section: "analytical",
    text: "Analytical",
  },
  {
    link: "/dashboards/demographical",
    section: "demographical",
    text: "Demographical",
  },
  {
    link: "/dashboards/modern",
    section: "modern",
    text: "Modern",
  },
];

const home = [
  {
    link: "/",
    section: "home",
    icon: <i class="bx bx-home-alt"></i>,
    text: "Dashboards",
    childNav: dashboardsItem,
  },
];

const app = [
  {
    link: "/apps/notes",
    section: "notes",
    icon: <i class="bx bx-notepad"></i>,
    text: "Notes",
    childNav: [],
  },
  {
    link: "/apps/chat",
    section: "chat",
    icon: <i class="bx bx-message-rounded-dots"></i>,
    text: "Chat",
    childNav: [],
  },
  {
    link: "/apps/contacts",
    section: "contacts",
    icon: <i class="bx bx-user"></i>,
    text: "Contacts",
    childNav: [],
  },
];

const sidebarNav = [
  { tab: home, text: "Home" },
  { tab: app, text: "App" },
];

export default sidebarNav;
