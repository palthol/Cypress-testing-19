import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {
  it('should render the start quiz button', () => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions')
    cy.mount(<Quiz />)
    cy.contains('button', 'Start Quiz').should('be.visible')
  })
})