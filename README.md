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
- Verify user can type in the search bar
- Search for a movie
- Verify search results contain the searched movie

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

## Test Report

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## Notes

IMDb may occasionally display human verification or CAPTCHA challenges. These are anti-bot protections and may prevent automated tests from accessing the IMDb homepage.

For local learning and debugging, tests can be executed in headed mode and human verification can be completed manually before continuing the test.

## Repository

GitHub:

https://github.com/MSK100/IMDB