const {pool} = require("../database");
const Book = require("../models/book");

let books = [

    new Book(40040, 1200007, "Dejar ir", "Autoayuda", "Dr. David Hawkins", 19.99, "https://imagessl4.casadellibro.com/a/l/t7/14/9788494248214.jpg"),
    new Book(30310, 4170002, "Los 5 niveles de apego", "Autoayuda", "Miguel Ruiz Jr", 14.99, "https://imagessl7.casadellibro.com/a/l/t7/77/9788479538477.jpg"),
    new Book(41000, 4000441, "Titanes", "Liderazgo", "Tim Ferriss", 23.99, "https://images.cdn2.buscalibre.com/fit-in/360x360/39/85/3985f893d89905b8495825bbfac2239b.jpg"),
    new Book(41009, 1000222, "Encantado de conocerme", "Autoayuda", "Borja Vilaseca", 12.99, "https://imagessl6.casadellibro.com/a/l/t7/26/9788466361026.jpg"),
    new Book(77007, 1340098, "El libro tibetano de los muertos", "Espiritualidad, religión", "Padma Sambhava", 16.00, "https://imagessl9.casadellibro.com/a/l/t7/19/9788472453319.jpg"),
    new Book(77008, 120008, "El alquimista", "Novela", "Paulo Cohelo", 9.99, "https://imagessl5.casadellibro.com/a/l/t7/55/9788408144755.jpg"),

];

// obtener todos los libros

async function getAllBooks (req, res) {

    let sql = `SELECT * FROM book`

    const {book} = req.body
    const params = book

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


// obtener todos los libros de un determinado id_user

async function getBooks (req, res) {

    let sql = `SELECT * FROM book WHERE id_user = ?;`

    const {id_user, book} = req.body
    const params = [id_user, book]

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

// obtiene los datos del libro cuyo id_user y id_book correspondan a este

async function getBooksById (req, res) {

    let sql = `SELECT * book WHERE id_user = ? AND id_book =?;`

    const {id_user, id_book} = req.body
    const params = [id_user, id_book]

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


// añade libro 

async function postBooks (req, res) {

    let sql = `INSERT INTO book (title, type, author, price, photo) VALUES (?,?,?,?,?);`

    const {title, type, author, price, photo} = req.body
    const params = [title, type, author, price, photo] 

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

// actualizar dato o datos de libro

async function putBooks (req, res) {

    let sql = `UPDATE book SET title = COALESCE(?, title), type = COALESCE(?, type), author = COALESCE (?, author), price = COALESCE (?, price), photo = COALESCE (?, photo) WHERE id_book = ? AND id_user = ?;`
    
    const {id_book, id_user, title, type, author, price, photo} = req.body;
    const params = [
                    title? title: null, 
                    type? type: null, 
                    author? author: null,
                    price? price: null, 
                    photo? photo:null,
                    id_book? id_book: null,
                    id_user? id_user: null, 
                    ]

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


//eliminar un libro

async function deleteBooks (req, res) {

    let sql = `DELETE FROM book WHERE id_book = ?;`

    const {id_book} = req.body
    const params = id_book

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


module.exports = {getAllBooks, getBooks, getBooksById, postBooks, putBooks, deleteBooks}