import 'cypress-file-upload' ; 

Cypress.Commands.add('SignIn', (username, password) => {
    cy  
        .get('[type="email"]')
        .click()
        .type(username)

    cy
        .get('[type="password"]')
        .click()
        .type(password)
    
    cy
        .get('form')
        .submit()
    
    cy
        .get('nav')
        .find('button')
        .should('contain', 'Logout')
})