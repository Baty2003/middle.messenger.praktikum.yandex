import "./style.scss";
import * as Components from "./components/index.ts";
import * as Pages from "./pages";
import Handlebars from "handlebars/runtime";

const pages: PagesNavigateStorageType = {
  login: { page: Pages.LoginPage },
  register: { page: Pages.RegisterPage },
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
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
  const target = e.target as HTMLButtonElement;
  const page = target?.getAttribute("page");
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
