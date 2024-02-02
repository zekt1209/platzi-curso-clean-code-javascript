class UserAuth {
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {
        return true;
    }
}

class UserSettings extends UserAuth {
    constructor(user, settings) {
        super(user);
        this.settings = settings;
    }

    changeSettings(settings) {
        if (this.verifyCredentials()) {
            console.log(`Hola ${this.user}, Realizando cambio de settings! :), cambio realizado: ${this.settings}`);
        } else {
            console.log(`Hola ${this.user}, Necesitas autenticarte para cambiar tus settings!, cambio rechazado: ${this.settings}`);
        }
    }
}

const newAccess = new UserSettings('Vic', 'Dark Mode');
 newAccess.changeSettings();

