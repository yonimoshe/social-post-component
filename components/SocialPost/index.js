import "./SocialPost.js";
import { applyThemeToHost } from "./utils.js";
import { THEMES } from "./constants.js";

let currentTheme = "light";

document.addEventListener("DOMContentLoaded", () => {
  applyThemeToHost(document.documentElement, THEMES[currentTheme]);

  const button = document.querySelector(".theme-toggle");
  button?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyThemeToHost(document.documentElement, THEMES[currentTheme]);
  });
});
