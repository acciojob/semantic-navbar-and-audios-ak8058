//your code here
cy.wait(1000); // Wait for 1 second (adjust time as needed)
cy.get('audio').should('have.length', 3);
