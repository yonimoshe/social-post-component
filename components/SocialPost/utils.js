/**
 * Applies a given theme's CSS custom properties to a target element.
 *
 * Can be used to apply theming outside the component itself — for example,
 * to style external containers or global app sections.
 *
 * @param {HTMLElement} host - The target element to apply styles to.
 * @param {Object} themeVars - A mapping of CSS variable names to values.
 */
export function applyThemeToHost(host, themeVars = {}) {
  Object.entries(themeVars).forEach(([key, value]) => {
    host.style.setProperty(key, value);
  });
}
