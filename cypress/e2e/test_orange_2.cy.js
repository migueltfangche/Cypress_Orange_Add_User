
/// <reference types = "cypress" />
import pantalla from "./selectores/pantalla";

describe('Login y creación de usuario', () => {
  var midata;

  beforeEach(() => {
    
    cy.fixture('fixture').then((data) => {
        midata = data;
    });
});

    
    it('passes', () => {
      
      cy.visit('/web/index.php/auth/login')
      
      midata.forEach((data) => { 
      cy.get(pantalla.login.usuario).clear('A');
      cy.get(pantalla.login.usuario).type('Admin');
      cy.get(pantalla.login.contraseña).clear('a');
      cy.get(pantalla.login.contraseña).type('admin123');
      cy.miclick(pantalla.login.btn_login);
      cy.wait(2000)
      cy.miclick(pantalla.PIM.Pim);
      cy.miclick(pantalla.PIM.Add);
      cy.get(pantalla.PIM.first_name).clear('J');
      cy.escribir(pantalla.PIM.first_name, data.first_name);
      cy.get(pantalla.PIM.last_name).clear('D');
      cy.escribir(pantalla.PIM.last_name, data.last_name);
      cy.miclick(pantalla.PIM.Add_pim);
      cy.wait(2000)
      cy.miclick(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input');
      cy.miclick(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input');
      cy.miclick('.oxd-userdropdown-name');
      cy.miclick(':nth-child(4) > .oxd-userdropdown-link');
      
    

  })
  })
})