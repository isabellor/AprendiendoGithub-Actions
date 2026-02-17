describe('Prueba de Hola Mundo', () => {
  beforeEach(() => {
    cy.visit('/')}); 
  it('Debería mostrar el mensaje "Hola Mundo"', () => {
    cy.contains('h1', 'Hola Mundo').should('be.visible'); // Verifica que el encabezado h1 contenga "Hola Mundo"; 
  })
  it('Debería mostrar el mensaje "Proyecto para Githib Cloud"', () => {
    cy.contains('p', 'Proyecto para Githib Cloud').should('be.visible');
})
}); 