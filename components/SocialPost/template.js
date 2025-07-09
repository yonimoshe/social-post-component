export const TEMPLATE_HTML = `
  <div class="post-container">
    <img class="avatar" alt="User avatar" />
    <div class="post-body">
      <div class="post-header">
        <div class="user-info">
          <span class="display-name"></span>
          <div class="meta">
            <span class="username"></span>
            <span class="separator">•</span>
            <span class="timestamp"></span>
          </div>
        </div>
        <div class="like-info">
          <span class="like-count">0</span>
          <button class="like-button" aria-label="Like post">❤️</button>
        </div>
      </div>
      <p class="content"></p>
      <slot></slot>
      <button class="toggle-button">See more</button>
    </div>
  </div>
`;
