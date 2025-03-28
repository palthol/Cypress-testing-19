// filepath: c:\1-gen\Coding\[02] Challenges\module 19\Develop\cypress\e2e\quiz.cy.jsx
describe('Quiz Application', () => {
  it('should load the quiz application', () => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    
    cy.visit('/');
    cy.contains('button', 'Start Quiz').should('be.visible').click();
    
    cy.wait('@getQuestions');
    cy.get('.card', { timeout: 10000 }).should('be.visible');
  });
});