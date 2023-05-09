export const NAVIGATION_LINKS = [
  {
    path: "/",
    title: "Профиль",
    imgSrc: await import("@/assets/img/profile.png"),
    permissions: ["General", "Teacher", "Child"],
  },
  {
    path: "/mychilds",
    title: "Мои дети",
    imgSrc: await import("@/assets/img/motherandchild.png"),
    permissions: ["General"],
  },
  {
    path: "/balance",
    title: "Пополнение",
    imgSrc: await import("@/assets/img/wallet.png"),
    permissions: ["General"],
  },
  {
    path: "/work",
    title: "Работа",
    imgSrc: await import("@/assets/img/work.png"),
    permissions: ["Teacher"],
  },
  {
    path: "/chat",
    title: "Чат",
    imgSrc: await import("@/assets/img/chat.png"),
    permissions: ["Child", "Teacher"],
  },
  {
    path: "/history",
    title: "История",
    imgSrc: await import("@/assets/img/time.png"),
    permissions: ["Child", "Teacher"],
  },
  {
    path: "/support",
    title: "Поддержка",
    imgSrc: await import("@/assets/img/support.png"),
    permissions: ["General", "Child", "Teacher"],
  },
  {
    path: "/role",
    title: "Выдача ролей",
    imgSrc: await import("@/assets/img/support.png"),
    permissions: ["Admin"],
  },
  {
    path: "/settings",
    title: "Настройки",
    imgSrc: await import("@/assets/img/settings.png"),
    permissions: ["Admin"],
  },
  {
    path: "/teacher",
    title: "Стать учителем",
    imgSrc: await import("@/assets/img/teacher.png"),
    permissions: ["General"],
  },
];
