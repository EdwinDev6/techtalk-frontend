/// <reference types="Cypress"/> 

//Only admin Account

describe('Posts Funtionalities ', () => {

  beforeEach(() => {
    cy  
      .visit('/')
  })
 
  it('Should be able to create a new post', () => {

    cy  
      .SignIn(
        Cypress.env('usernameLogin'),
        Cypress.env('passwordLogin')
      )

    cy
        .get('[href="/new"]')
        .click()
    
    cy
        .get('header')
        .find('h3')
        .should('contain', 'New Post')
      
    cy  
        .get('[name="title"]')
        .type('Se esta realizando una prueba automatizada')
    
    cy
        .get('textarea.px-3')
        .type('Should be true')
    
    cy
        .get('input[type="file"]')
        .attachFile('ImgTest.jpg')
      
    cy
        .get('form')
        .submit()
    
    cy
        .wait(3000)
        .get('.flex-wrap > :nth-child(1)')
        .contains('h2', 'Se esta realizando una prueba automatizada')
  })

  it('Should be able to edit a post ', () => {

    cy  
      .SignIn(
        Cypress.env('usernameLogin'),
        Cypress.env('passwordLogin')
      )
    cy
      .get('.flex-wrap > :nth-child(1)')
      .contains('h2', 'Se esta realizando una prueba automatizada')
 
    cy
        .get('.flex-wrap > :nth-child(1)')
        .then(myPost => {
          cy
            .wrap(myPost)
            .contains('button', 'Edit')
            .click()
        })
    
    cy
        .get('[name="title"]')
        .clear()
        .type('This posts was edit')

    cy  
        .get('textarea.px-3')
        .clear()
        .type('Should be done')
    
    cy
        .get('form')
        .submit()

    cy
        .reload()
    
    cy
        .get('div .grid')
        .first()
        .contains('h2', 'This posts was edit')
  })

  it('Should be able to delete a post', () => {
  
  
    cy  
      .SignIn(
        Cypress.env('usernameLogin'),
        Cypress.env('passwordLogin')
    )

    cy
        .get('.flex-wrap > :nth-child(1)')
        .contains('h2', 'This posts was edit')
    
    cy 
        .get('.flex-wrap > :nth-child(1)')
        .then(postToEdit =>{
          cy
            .wrap(postToEdit)
            .contains('button', 'Delete')
            .click()
        })

    cy
        .get('div[role="status"]')
        .find('button')
        .contains('Delete')
        .click()
    
    cy
        .reload()
    
    cy
        .get('div .grid')
        .first()
        .should('not.contain', 'This posts was edit')

  })
})