# Coding Quiz

This repository contains a quiz application built with React, Node, and Vite. The application allows users to take a quiz, displaying questions retrieved from an API. We use Cypress extensively for both component and end-to-end (E2E) testing to ensure quality and reliability.

## Repository Structure

```
Develop/
├── client/                   # React client application
│   ├── index.html            # HTML entry point for the client
│   ├── src/
│   │   ├── App.tsx           # Application root
│   │   ├── components/
│   │   │   └── Quiz.tsx      # Quiz component
│   │   └── main.tsx          # Client entry point (rendering App)
│   └── vite.config.ts        # Vite config for development/build
├── server/                   # API server for the application
│   └── ...                   # Server code, seeds, etc.
└── cypress/                  # Cypress tests
    ├── component/            # Component tests (e.g., Quiz.cy.jsx)
    ├── e2e/                  # End-to-end tests (e.g., quiz.cy.jsx)
    ├── fixtures/             # Test fixtures (e.g., questions.json)
    └── support/              # Cypress support files (component.js, e2e.js, component-index.html)
```

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/coding-quiz.git
   cd coding-quiz/Develop
   ```

2. **Install dependencies:**

   Run the install script to set up both the server and client:

   ```bash
   npm run install
   ```

## Running the Application

- **Development Mode:**  
  This starts the Node server and the Vite development server concurrently.

  ```bash
  npm run start:dev
  ```

  The application will be available at [http://localhost:3001](http://localhost:3001).

- **Production Build:**  
  Generate a production build of the client and run the server:

  ```bash
  npm run start
  ```

## Using Cypress for Testing

This project uses Cypress for both component testing and end-to-end (E2E) testing.

### Running Tests

- **Component Tests:**  
  To run tests that validate individual React components:

  ```bash
  npm run test:component
  ```

  This command runs the component tests headlessly.

- **End-to-End (E2E) Tests:**  
  Before running E2E tests, ensure your application server is running on [http://localhost:3001](http://localhost:3001).

  ```bash
  npm run test:e2e
  ```

- **All Tests:**  
  To run both component and E2E tests sequentially:

  ```bash
  npm run test
  ```

- **Interactive Mode:**  
  If you prefer to use the Cypress Test Runner interface to debug tests interactively:

  ```bash
  npm run cypress:open
  ```

### Cypress Configuration

- The Cypress folder includes:
  - **component tests:** Located in `cypress/component/` (e.g., `Quiz.cy.jsx`).
  - **E2E tests:** Located in `cypress/e2e/` (e.g., `quiz.cy.jsx`).
  - **Fixtures:** Test data in `cypress/fixtures/` (e.g., `questions.json`).
  - **Support files:** Custom commands and configuration in `cypress/support/`.

- The `cypress/tsconfig.json` and `cypress.config.ts` files configure which files Cypress uses for tests.

- The component support file (`cypress/support/component.js`) registers the custom `cy.mount()` command from `cypress/react18`, making component testing easier.

- The E2E support file (`cypress/support/e2e.js`) provides global configurations like auto-accepting JavaScript alerts and suppressing common noise in the Cypress logs.

## Contributing

Feel free to open issues or pull requests. Contributions to improve this application or its test setup are welcome!

## License

This project is licensed under the ISC License.
