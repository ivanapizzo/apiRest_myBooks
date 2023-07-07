class User {

    constructor(id_user, name, first_last_name, email, password, photo){

        this.id_user = id_user;
        this.name = name;
        this.first_last_name = first_last_name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }
}

module.exports = User;

