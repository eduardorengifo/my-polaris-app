import { test, expect } from '@playwright/test';

test('should the Custom Css section when fire a click in Edit button', async ({
  page,
}) => {
  await page.goto('/');
  const customCss = page.getByText('Custom Css');

  await expect(page).toHaveURL('/');
  await expect(customCss).toBeHidden();

  await page.getByRole('button', { name: 'Edit' }).click();

  await expect(customCss).toBeVisible();
});
