// ***********************************************************
// This support file is processed and loaded automatically
// before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

// Auto accept confirms and alerts
Cypress.on('window:confirm', () => true);
Cypress.on('window:alert', () => true);

// Prevent Cypress from failing tests when application throws uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from failing the test
  console.log('Uncaught exception: ', err);
  return false;
});