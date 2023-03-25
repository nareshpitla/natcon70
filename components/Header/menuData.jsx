const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 11,
    title: "Brochure",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Committee",
    newTab: false,
    submenu: [
      {
        id: 13,
        title: "Adivisory Committee",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Organising Committee",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 43,
    title: "CME",
    newTab: false,
    submenu: [
      {
        id: 13,
        title: "CME",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "CME Program",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 53,
    title: "Workshop",
    newTab: false,
    submenu: [
      {
        id: 13,
        title: "Workshop",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Workshop Details",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
