// https://docs.cypress.io/api/introduction/api.html
const template = {subject: "skills-vue Submission", email: "leqer375@gmail.com", body: "Hey there!"}

describe('"Contact us" form test', () => {
  it('1. Fills the form with corresponding content', () => {
    cy.visit('/contact-us');
    cy.get('input[id="form-email"]').type(template.email)
    cy.get('textarea[id="form-body"]').type(template.body)
  });
  it('2. Submits the form to send request', () => {
    cy.get('input[type="submit"]').click()
    cy.get('body').find('div[id="success"]') || cy.get('body').find('div[id="error"]')
  });  
});
