import { STYLE_CSS } from "./style.js";
import { TEMPLATE_HTML } from "./template.js";
import { MAX_LINES, THEMES, DEFAULT_THEME } from "./constants.js";

class SocialPost extends HTMLElement {
  static get observedAttributes() {
    return [
      "display-name",
      "username",
      "timestamp",
      "avatar",
      "content",
      "theme",
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>${STYLE_CSS}</style>
      ${TEMPLATE_HTML}
    `;

    this._elements = {
      avatar: this.shadowRoot.querySelector(".avatar"),
      displayName: this.shadowRoot.querySelector(".display-name"),
      username: this.shadowRoot.querySelector(".username"),
      timestamp: this.shadowRoot.querySelector(".timestamp"),
      content: this.shadowRoot.querySelector(".content"),
      toggleBtn: this.shadowRoot.querySelector(".toggle-button"),
      likeBtn: this.shadowRoot.querySelector(".like-button"),
      likeCount: this.shadowRoot.querySelector(".like-count"),
    };

    this._likeCount = 0;
    this._expanded = false;

    this._elements.toggleBtn?.addEventListener("click", () =>
      this.toggleContent()
    );
    this._elements.likeBtn?.addEventListener("click", () => this.toggleLike());
  }

  connectedCallback() {
    this.updateAll();
    this.applyTheme(this.theme || DEFAULT_THEME);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) this.updateAll();
  } // Update all elements ONLY when attributes change

  updateAll() {
    this._elements.avatar.src = this.avatar || "";
    this._elements.displayName.textContent = this.displayName || "";
    this._elements.username.textContent = this.username || "";
    this._elements.timestamp.textContent = this.timestamp || "";
    this._elements.content.textContent = this.content || "";

    requestAnimationFrame(() => {
      const content = this._elements.content;
      const toggleBtn = this._elements.toggleBtn;

      const lineHeight = parseFloat(getComputedStyle(content).lineHeight);
      const scrollHeight = content.scrollHeight;
      const lines = scrollHeight / lineHeight;

      if (lines <= MAX_LINES) {
        toggleBtn.style.visibility = "hidden";
      } else {
        toggleBtn.style.visibility = "visible";
      }
    });
  }

  applyTheme(themeName) {
    const theme = THEMES[themeName] || THEMES[DEFAULT_THEME];
    for (const key in theme) {
      this.style.setProperty(key, theme[key]);
    }
  }

  toggleContent() {
    this._expanded = !this._expanded;
    const content = this._elements.content;

    content.classList.toggle("expanded", this._expanded);
    this._elements.toggleBtn.textContent = this._expanded
      ? "See less"
      : "See more";
  }

  toggleLike() {
    this._likeCount++;
    this._elements.likeCount.textContent = this._likeCount;
    this._elements.likeBtn.style.transform = "scale(1.3)";
    setTimeout(
      () => (this._elements.likeBtn.style.transform = "scale(1)"),
      150
    );
  }

  get displayName() {
    return this.getAttribute("display-name");
  }
  set displayName(val) {
    this.setAttribute("display-name", val);
  }

  get username() {
    return this.getAttribute("username");
  }
  set username(val) {
    this.setAttribute("username", val);
  }

  get timestamp() {
    return this.getAttribute("timestamp");
  }
  set timestamp(val) {
    this.setAttribute("timestamp", val);
  }

  get avatar() {
    return this.getAttribute("avatar");
  }
  set avatar(val) {
    this.setAttribute("avatar", val);
  }

  get content() {
    return this.getAttribute("content");
  }
  set content(val) {
    this.setAttribute("content", val);
  }

  get theme() {
    return this.getAttribute("theme");
  }
  set theme(val) {
    this.setAttribute("theme", val);
    this.applyTheme(val);
  }
}

customElements.define("social-post", SocialPost);
