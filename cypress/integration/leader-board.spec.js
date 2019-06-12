describe('Leader Board Page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/api/people/**', 'fixture:characters');
    cy.visit('/');
  });

  it('Leader is present in leader board', () => {
    const lukeId = 1;
    const lukeName = 'Luke Skywalker';
    cy.getByTestId(`button-up-${lukeId}`).click();
    cy.getByText('Leader Board').click();
    cy.getByTestId(`character-card-${lukeId}`).should('contain', lukeName);
  });
});
