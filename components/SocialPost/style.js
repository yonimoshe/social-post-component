import { MAX_LINES } from "./constants.js";

export const STYLE_CSS = `
  :host {
    display: block;
    max-width: 400px;
    min-width: 290px;
    font-family: 'Inter', sans-serif;

    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 20px;

    --font-size-caption: 12px;
    --font-size-body: 14px;
    --font-size-content: 16px;

    --font-weight-normal: 400;
    --font-weight-bold: 500;

    --avatar-size: 40px;

    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: var(--spacing-md);
    box-sizing: border-box;
  }

  .post-container {
    display: flex;
    gap: var(--spacing-md);
  }

  .avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .post-body {
    flex: 1;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-sm);
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-bold);
  }

  .separator {
    color: var(--caption-color);
    font-size: var(--font-size-caption);
  }

  .meta {
    display: flex;
    line-height: 1.5;
    gap: var(--spacing-xs);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    color: var(--caption-color);
  }

  .like-info {
    display: flex;
    align-items: unset;
    gap: var(--spacing-xs);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    color: var(--caption-color);
  }
  
  .like-button {
    padding: 0;
    line-height: 1.5;
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--font-size-content);
    transition: transform 0.2s ease;
  }

  .like-button:active {
    transform: scale(1.2);
  }

.content {
  font-size: var(--font-size-content);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
  margin-bottom: var(--spacing-sm);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${MAX_LINES};
  -webkit-box-orient: vertical;
  min-height: calc(1.5em * ${MAX_LINES});
  max-height: calc(1.5em * ${MAX_LINES});
}

.content.expanded {
  display: block;
  -webkit-line-clamp: unset;
  -webkit-box-orient: vertical;
  min-height: unset;
  max-height: unset;
  min-height: calc(1.5em * ${MAX_LINES}); 
}

  .toggle-button {
    line-height: 1.5;
    background: none;
    border: none;
    color: var(--caption-color);
    font-size: var(--font-size-body);
    cursor: pointer;
    padding: 0;
  }
`;
