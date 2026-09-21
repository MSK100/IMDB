import {test, expect} from '@playwright/test';

// Describe the test suite for IMDB search functionality
test.describe('IMDB Search', () => {


    // Navigate to the IMDB website before each test
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.imdb.com/');

         // Complete the human verification manually if IMDb shows it.
        await page.pause();
    });

    // Test if the search bar is visible
    test('search bar should be visible', async ({page}) => {
        const searchBar = page.getByPlaceholder(/Search IMDb/i);
        await expect(searchBar).toBeVisible();
    });

    // Test if the user can type in the search bar
    test('user should be able to type in the search bar', async ({page}) => {
        const searchBar = page.getByPlaceholder(/Search IMDb/i);
        await searchBar.fill('Inception');
        await expect(searchBar).toHaveValue('Inception');
    });

    // Test if the user can submit the search
    test('search for a movie', async ({page}) => {
        const searchBar = page.getByPlaceholder(/Search IMDb/i);
        await searchBar.fill('Inception');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL(/find/);
    });


    // Test if the search results contain the searched movie
    test('search results should contain searched movie', async ({ page }) => {
        const searchBox = page.getByPlaceholder(/Search IMDb/i);

        await searchBox.fill('The Dark Knight');
        await searchBox.press('Enter');

        await expect(
        page.getByText('The Dark Knight', { exact: true }).first()
        ).toBeVisible();
  });
});