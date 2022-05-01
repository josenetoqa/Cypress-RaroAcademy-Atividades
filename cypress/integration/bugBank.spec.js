describe('Testar aplicação do BugBank', () => {
    beforeEach(() => {
        cy.visit("https://bugbank.netlify.app/")
        cy.get('.ihdmxA').click()
    })
    it('Criar uma cadastro com saldo', () => {
        //duvida sobre como achar um seletor melhor e quando tenho poucos e uma boa pratica utilizar eq?
       cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
       cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
       cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
       cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
       cy.get('label[id="toggleAddBalance"]').click({ force: true})
       cy.get('.CMabB').click({force:true})
       cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible')
       cy.get('#btnCloseModal').click({ force: true})
    
})
    it.only('Criar uma cadastro sem saldo', () => {
      cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
      cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
      cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
      cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
      cy.get('.CMabB').click({force:true})
      cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible').should('include.text', 'foi criada com sucesso')
      cy.get('#btnCloseModal').click({ force: true})

})
    it('Clicar e verificar se aconteceu um erro', () => {
      cy.get('.CMabB').click({force:true})
      cy.wait(1000)
      cy.get(':nth-child(2) > .input__warging').should('be.text','É campo obrigatório')

})
    it('Realizar um cadastro sem nome deve apresentar a mensagem Nome não pode ser vazio', () => {
      cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
      cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
      cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
      cy.get('.CMabB').click({force:true})
      //cy.get(':nth-child(2) > .input__warging').should('be.text','Nome não pode ser vazio')
      cy.get('.styles__Text-sc-8zteav-4').should('include.text','Nome não pode ser vazio.')
})
    it('Realizar um cadastro sem email deve apresentar a mensagem Email não pode ser vazio', () => {
      cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
      cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
      cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
      cy.get('.CMabB').click({force:true})
      //na especificação fala de uma maneira e o texto apresentado foi outro
      cy.get('.kOeYBn > .input__warging').should('be.text','É campo obrigatório')

})
      it('Realizar um cadastro sem senha deve apresentar a mensagem Senha não pode ser vazio', () => {
        cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
        cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
        //cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
        cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
        cy.get('.CMabB').click({force:true})
        cy.get(':nth-child(2) > .input__warging').should('be.text','Senha não pode ser vazio')
})
      it('Realizar um cadastro sem confirmação de senha deve apresentar a mensagem Confirmar senha não pode ser vazio', () => {
          cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
          cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
          cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
          //cy.get('input[placeholder="Informe a confirmação da senha"]').type('123',{force:true}).should('have.value','123')
          cy.get('.CMabB').click({force:true})
          cy.get(':nth-child(2) > .input__warging').should('be.text','Confirmar senha não pode ser vazio')
})
        it('Criar uma cadastro com as senhas diferentes ', () => {
            cy.get('input[placeholder="Informe seu e-mail"]').eq(1).type('jose@neto.com',{force:true}).should('have.value','jose@neto.com')
            cy.get('[name="name"]').type('jose neto',{force:true}).should('have.value','jose neto')
            cy.get('input[placeholder="Informe sua senha"]').eq(1).type('123',{force:true}).should('have.value','123')
            cy.get('input[placeholder="Informe a confirmação da senha"]').type('1234',{force:true}).should('have.value','1234')
            cy.get('.CMabB').click({force:true})
            cy.get('.styles__ContainerContent-sc-8zteav-1').should('include.text','As senhas não são iguais.')
            cy.get('#btnCloseModal').click({ force: true})
      
})
})