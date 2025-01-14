/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderJoiningGroup, TableOfContentsMenu } from '@rocket/engine';
import { html } from 'lit';
import { LayoutMain } from './LayoutMain.js';

export class LayoutBlogPost extends LayoutMain {
  renderContent() {
    return html`
      <rocket-content-area>
        <rocket-main>
          <main class="markdown-body">
            ${renderJoiningGroup('content', this.options, this.data)}
          </main>
          <aside slot="toc">
            ${this.options.pageTree.renderMenu(
              new TableOfContentsMenu(),
              this.data.sourceRelativeFilePath,
            )}

            <launch-blog-details .data=${this.getCurrentPageData()}></launch-blog-details>
          </aside>
        </rocket-main>
      </rocket-content-area>
    `;
  }
}
