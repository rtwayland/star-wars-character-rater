describe('Home Page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/api/people/**', 'fixture:characters');
    cy.visit('/');
  });

  it('Leader is displayed when voting or downvoting characters', () => {
    const lukeId = 1;
    const vaderId = 4;
    const defaultName = 'Leader Name';
    const lukeName = 'Luke Skywalker';
    const vaderName = 'Darth Vader';
    const leaderNameId = 'leader-name-display';
    cy.getByTestId(leaderNameId).should('have.text', defaultName);
    cy.getByTestId(`button-up-${lukeId}`).click();
    cy.getByTestId(leaderNameId).should('have.text', lukeName);
    cy.getByTestId(`button-up-${vaderId}`).click();
    cy.getByTestId(`button-up-${vaderId}`).click();
    cy.getByTestId(leaderNameId).should('have.text', vaderName);
    cy.getByTestId(`button-down-${vaderId}`).click();
    cy.getByTestId(leaderNameId).should('have.text', lukeName);
  });

  it('Characters can be deleted', () => {
    const lukeId = 1;
    const lukeName = 'Luke Skywalker';
    cy.getByText(lukeName).should('exist');
    cy.getByTestId(`button-delete-${lukeId}`).click();
    cy.queryByText(lukeName, {timeout: 300}).should('not.exist');
  });
});
