  
describe('Login specs', () => {
    it('visit the login page', () => {
      cy.visit('/');
    });
  
    it('should name input has the focus when it clicks on it', () => {
      // Arrange
  
      // Act
      cy.visit('/');
      cy.get('input[name="username"]').click();
  
      // Assert
      cy.get('input[name="username"]').should('have.focus');
    });

    it('should show an alert with a message when type invalid credentials', () => {
        // Arrange
        const user = 'chloe@gmail.com';
        const password = 'asdfg';
    
        // Act
        cy.visit('/');
        cy.findByLabelText('Usuario').as('userInput');
        cy.findByLabelText('Contraseña').as('passwordInput');
    
        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Iniciar sesión' }).click();
    
        // Assert
        cy.get('@userInput').should('have.value', user);
        cy.get('@passwordInput').should('have.value', password);
        cy.findByRole('alert');
      });

      it('should navigate to menu url when type valid credentials', () => {
        // Arrange
        const user = 'chloe@gmail.com';
        const password = 'asdf';
    
        // Act
        cy.visit('/');
        cy.findByLabelText('Usuario').as('userInput');
        cy.findByLabelText('Contraseña').as('passwordInput');
    
        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Iniciar sesión' }).click();
    
        // Assert
        cy.url().should('eq', 'http://localhost:8585/#/menu');
      });
  });