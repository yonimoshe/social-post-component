export function setupThemeToggle(postSelector, buttonSelector) {
  const post = document.querySelector(postSelector);
  const button = document.querySelector(buttonSelector);

  if (!post || !button) return;

  button.addEventListener("click", () => {
    const newTheme = post.theme === "dark" ? "light" : "dark";
    post.theme = newTheme;
  });
}
