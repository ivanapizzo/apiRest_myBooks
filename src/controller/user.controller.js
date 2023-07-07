const {pool} = require("../database");


// registrar un usuario nuevo

async function postRegister (req, res) {

    console.log(req.body)
        let sql = `INSERT INTO user (name, first_last_name, email, password, photo) VALUES (?,?,?,?,?);` 

        const {name, first_last_name, email, password, photo} = req.body
        const params = [name, first_last_name, email, password, photo]

        console.log(sql)

        try 
        {
        let [result] = await pool.query(sql, params);
        res.send(result);

        }
        catch(err) {
        console.log(err)
    }

}


// inicia sesión un usuario

async function postLogin (req, res) {

                let sql = `SELECT id_user, name, first_last_name, email, photo FROM user WHERE email = ? AND password = ?; `

                if(req.body.email && req.body.password){
                    sql = `SELECT id_user, name, first_last_name, 
                    email, photo FROM user WHERE email = "${req.body.email}" AND password = "${req.body.password}"`
                }

                console.log(sql); 
        try {

                let [result] = await pool.query(sql);
                res.send(result);

            }
        catch(err){
            res.send(err);
        }
}

// actualiza la información del usuario en la BBDD

async function putUser (req, res) {

    let sql = `UPDATE user SET name = COALESCE(?, name), first_last_name = COALESCE(?, first_last_name), email = COALESCE(?, email), photo = COALESCE(?, photo) WHERE id_user = ?;`

    const {id_user, name, first_last_name, email, password, photo} = req.body;
    const params = [
                    name ? name: null, 
                    first_last_name ? first_last_name: null, 
                    email? email: null, 
                    photo? photo: null,
                    id_user? id_user: null,
                    ];

    console.log(sql);

    try {

        let [result] = await pool.query(sql, params);
        res.send(result);

    }
    catch(err){
    res.send(err);
    }
}






module.exports = {postRegister, postLogin, putUser}