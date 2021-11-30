import { newSpecPage } from '@stencil/core/testing';
import { WeProfile } from '../we-profile';

describe('we-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeProfile],
      html: `<we-profile></we-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <we-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </we-profile>
    `);
  });
});
