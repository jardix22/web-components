import { newE2EPage } from '@stencil/core/testing';

describe('we-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<we-profile></we-profile>');

    const element = await page.find('we-profile');
    expect(element).toHaveClass('hydrated');
  });
});
