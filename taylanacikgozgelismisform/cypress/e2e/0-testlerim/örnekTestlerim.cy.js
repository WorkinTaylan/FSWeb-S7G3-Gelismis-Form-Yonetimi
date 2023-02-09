

//5 input değeri var mı?
//1 input değeri checkbox mı?
//


describe('Sign-in Form', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    

        it('Is website working?', function() {
    
            expect(true).to.equal(true);
        })

        it('Are there 5 input elements?', () => {
        
        cy.get('input').should('have.length', 5)    
    })

        it('Submit button disabled & has a value called Gönder', () => {
        
        
        cy.get('button[type=submit]').should('be.disabled') 
        cy.get('button[type=submit]').should('have.value', 'Gönder')  
    })

    it('Did you check your checkbox and ticked?', () => {
        cy.get('[type="checkbox"]').check()
        cy.get('input[type=checkbox]').should('have.length', 1)
        // retry until our radio is checked
        cy.get(':checkbox').should('be.checked')
      
    })
    
    it('typing', () => {
    cy.get('input[name=isim').type('Hello World', {delay:100})
    cy.get('input[name=email').type('Hello World')//içeriye tek harf ekleyebiliyorum
    })



})

/*cy.get('[data-cy="completed"]').should(
        'have.css',
        'color',
        
      )*/

/*cy.get('.formDiv') (ANLAŞILMADI SORABİLİRSİN)
    .find('div')
    // the search is limited to the tree at #comparison element
    // so it finds div.feature only
    .should('have.length', 1)
    .and('have.class', 'forming')*/

    //cy.get('h3').contains('Giriş yapabilmek için bilgileri eksiksiz doldurunuz...') 