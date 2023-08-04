/// <reference types="Cypress"/> 

describe ('LoginUser', () => {
    
    beforeEach(() =>{
        cy
            .visit('/')
    })

    it('Create user', () =>{

        cy
            .get('div .flex-1')
            .then(newacount => {
                cy  
                    .wrap(newacount)
                    .contains('a', 'Sign up')
                    .click()
            })
        
        cy
            .get('.min-h-screen > .bg-white')
            .should('contain', 'Join us Now')
        
        cy
            .get('#username')
            .click()
            .type(Cypress.env('usernameSignUp'))
        
        cy
            .get('#email')
            .click()
            .type(Cypress.env('emailSignUp'))

        cy
            .get('#password')
            .click()
            .type(Cypress.env('passwordSignUp'))

        cy
            .get('div .mt-10')
            .find('button')
            .should('contain', 'Sign Up')
            .click()
        
        cy  
            .wait(2000)
            .get('[type="email"]')
            .click()
            .type(Cypress.env('emailSignUp'))
    
        cy
            .get('[type="password"]')
            .click()
            .type(Cypress.env('passwordSignUp')) 
        
        cy
            .get('form')
            .submit()
        
        cy 
            .wait(2000)
    
        cy
            .get('nav')
            .find('button')
            .should('contain', 'Logout')
    })

})