class pantalla {

    login = {
        usuario :':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        contraseña: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
        btn_login:'#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button',
    
    }
    PIM = {
        Pim :':nth-child(2) > .oxd-main-menu-item > .oxd-text',
        Add :'.orangehrm-header-container > .oxd-button',
        first_name:'.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
        last_name:':nth-child(3) > :nth-child(2) > .oxd-input',
        Add_pim:'.oxd-button--secondary',
    }

}

export default new pantalla();