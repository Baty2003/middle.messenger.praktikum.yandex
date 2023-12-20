import "./style.scss";
import * as Components from "./components";
import * as Pages from "./pages";
import Handlebars, { Template } from "handlebars/runtime";
import { range } from "./utils/range";

const pages: PagesNavigateStorageType = {
  login: { page: Pages.LoginPage },
  register: { page: Pages.RegisterPage },
  messaging: { page: Pages.MessagingPage },
  profile: { page: Pages.Profile, context: { edit: false } },
  profileEdit: { page: Pages.Profile, context: { edit: true } },
  profilePasswordEdit: { page: Pages.Profile, context: { edit: true, passwordEdit: true } },
  errorPage404: { page: Pages.ErrorPage, context: { code: 404, descripition: "Не туда попали, страница покинула нас" } },
  errorPage500: { page: Pages.ErrorPage, context: { code: 500, descripition: "Ошибка сервера, такое случается, работаем" } },
};

Handlebars.registerHelper("datas", () => {
  const res = range(15).map(() => ({
    avatar: "/src/assets/defaultAvatar.png",
    sender: "Отправитель",
    message: "Это такой текст который просто существует, не вини его",
    time: "15:15",
    unread: "5",
  }));
  console.log(res);
  return res;
});

Handlebars.registerHelper(
  "isTextMessage",
  (value: "file" | "text") => value === "text"
);
Handlebars.registerHelper("isNotTrue", (value: boolean) => !value);

Handlebars.registerHelper("messagesData", () => [
  {
    date: "1 января",
    messages: [
      {
        type: "text",
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        readed: false,
        own: false,
        time: "00:01",
      },
      {
        type: "file",
        src: "/src/assets/camera.jpg",
        readed: false,
        own: false,
        time: "00:02",
      },
      {
        type: "text",
        text: "Это что такое, скажи мне?",
        readed: true,
        own: true,
        time: "00:10",
      },
      {
        type: "text",
        text: "Лучше скинь что нибудь про футбол",
        readed: false,
        own: true,
        time: "00:11",
      },
    ],
  },
]);

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template<any>);
});

const navigate = (namePage: keyof typeof pages) => {
  const { page, context } = pages[namePage];
  const container = document.getElementById("app");
  if (container) {
    container.innerHTML = page(context);
  }
};

document.addEventListener("DOMContentLoaded", () => navigate("login"));
document.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  const page = target?.getAttribute("page") as PagesEnum;
  if (page) {
    navigate(page);
    e.stopImmediatePropagation();
  }
});
