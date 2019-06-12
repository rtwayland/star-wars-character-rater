describe('Search Functionality', () => {
  beforeEach(() => {
    cy.server()
      .route('**/api/people/**', 'fixture:characters')
      .visit('/');
  });

  it('Search input filters out results', () => {
    const vaderName = 'Darth Vader';
    const chewieName = 'Chewbacca';
    const hanName = 'Han Solo';
    const lukeName = 'Luke Skywalker';
    cy.get('input').type('h');
    cy.getByText(vaderName).should('exist');
    cy.getByText(chewieName).should('exist');
    cy.getByText(hanName).should('exist');
    cy.queryByText(lukeName, {timeout: 300}).should('not.exist');
    cy.get('input').type('a');
    cy.getByText(hanName).should('exist');
    cy.queryByText(vaderName, {timeout: 300}).should('not.exist');
    cy.queryByText(chewieName, {timeout: 300}).should('not.exist');
  });
});
