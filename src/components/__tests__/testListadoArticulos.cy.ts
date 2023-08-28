describe('Posts Component Test', () => {
  it('renders the component and checks loading state', () => {
    cy.visit('/')

    cy.get('.text-gray-900').should('contain', 'Posts')

    cy.get('.text-center p').should('contain', 'Cargando artículos...')
    cy.get('.loading-spinner').should('exist')

    cy.get('.text-center p').should('not.exist')

    cy.get('.articulo-item').should('have.length.greaterThan', 0)
  })

  it('filtrado', () => {
    cy.visit('/')

    cy.get('input[placeholder="Buscar artículo"]').type('qui est')
    cy.get('input[placeholder="Buscar artículo"]').should('have.value', 'qui est')

    cy.get('.articulo-item').should('have.length.greaterThan', 0)

    cy.get('.paginacion-controls').should('exist')

    cy.get('.next-page-button').click()
  })
})
