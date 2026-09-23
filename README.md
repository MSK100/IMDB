# IMDB Playwright Automation

A simple Playwright automation project for testing IMDb search functionality using TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Google Chrome

## Test Scenarios

The project currently covers:

- Verify IMDb search bar is visible
- Verify a user can type in the search bar
- Search for a movie
- Verify search results contain the searched movie

## Approach to the Assignment

I approached the assignment by focusing on a small but meaningful user journey: searching for a movie on IMDb.

The goal was to keep the tests simple, readable, and representative of a real user interaction while demonstrating core Playwright concepts such as navigation, locators, input handling, assertions, and URL validation.

I also preferred user-facing locators such as `getByPlaceholder()` and text-based assertions instead of relying heavily on brittle CSS or XPath selectors.

## What I Chose to Test, and Why

I chose the IMDb search functionality because it is one of the most important and frequently used features of the website.

The tests validate:

- The search field is available to the user
- A user can enter a movie title
- A search can be submitted successfully
- The user is navigated to the expected search results page
- The expected movie appears in the results

These scenarios provide good coverage of the basic search workflow without overcomplicating the initial automation suite.

## File Structure

The project uses Playwright's standard structure:

```text
IMDB/
├── tests/
│   └── imdb-search.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

### Why This Structure?

The test cases are kept inside the `tests` directory because this follows Playwright's default convention and keeps automation code separate from project configuration.

`playwright.config.ts` contains browser and test execution configuration, while `imdb-search.spec.ts` contains the actual test scenarios.

For the current scope, keeping the project simple avoids unnecessary abstraction.

## Alternative Approaches

There are several other ways the project could have been implemented.

For example:

- A Page Object Model could be introduced to separate page locators and actions from the test cases.
- Test data such as movie titles could be stored in separate JSON or fixture files.
- Tests could be parameterized to validate multiple movie searches.
- API-level validation could be combined with UI testing.
- Fixtures could be used for common setup and reusable test state.
- Separate configuration could be created for Chromium, Firefox, WebKit, and Google Chrome.

For a larger test suite, I would prefer introducing a Page Object Model and reusable fixtures to improve maintainability.

## Future Improvements

The test suite could be expanded to cover:

- Search suggestions and autocomplete
- Searching for actors, TV shows, and other IMDb content
- Empty search input
- Invalid or random search terms
- Special characters in search
- Keyboard navigation through search suggestions
- Selecting a result from autocomplete
- Verifying movie details after opening a result
- Cross-browser testing
- Mobile viewport testing
- Accessibility checks
- Screenshots and trace collection on failure
- CI/CD execution through GitHub Actions
- Data-driven and parameterized tests
- API and UI integration testing

A Page Object Model could also be introduced as the number of test scenarios grows.

## Technical Challenges

One technical challenge encountered during the assignment was IMDb's human-verification mechanism.

IMDb may detect automated browser traffic and display a CAPTCHA or human verification page. When this happens, the expected search field is not available, causing Playwright locators to wait until the test timeout is reached.

Another issue was running multiple tests in parallel. Playwright initially executed the tests using multiple workers, which created multiple isolated browser contexts. Human verification completed in one browser context did not apply to the others.

For debugging, the tests were therefore run in headed mode with a single worker:

```bash
npx playwright test tests/imdb-search.spec.ts --project=chrome --headed --workers=1
```

Playwright's debugging tools were also useful:

```bash
npx playwright test --debug
```

and:

```bash
npx playwright test --ui
```

For a production automation suite, I would avoid designing tests that depend on manually completing CAPTCHA challenges. Instead, I would use an approved testing environment where anti-bot protection is disabled or mock the relevant dependencies.

## Project Setup

Clone the repository:

```bash
git clone https://github.com/MSK100/IMDB.git
```

Navigate to the project:

```bash
cd IMDB
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests using Google Chrome:

```bash
npx playwright test --project=chrome --headed
```

Run only the IMDb search test file:

```bash
npx playwright test tests/imdb-search.spec.ts --project=chrome --headed
```

Run with a single worker:

```bash
npx playwright test tests/imdb-search.spec.ts --project=chrome --headed --workers=1
```

## Debug Tests

Run Playwright in debug mode:

```bash
npx playwright test --debug
```

Run Playwright UI mode:

```bash
npx playwright test --ui
```

## Test Report

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## Notes

IMDb may occasionally display human verification or CAPTCHA challenges. These are anti-bot protections and can prevent automated tests from reaching the expected page state.

For a real-world automation framework, CAPTCHA would normally be disabled or bypassed through an approved non-production testing environment rather than automated directly.

## Repository

https://github.com/MSK100/IMDB
