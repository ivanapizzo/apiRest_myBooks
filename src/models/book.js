class Book {

    constructor(id_user, id_book, title, type, author, price, photo) {

        this.id_user = id_user;
        this.id_book = id_book;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        
    }
}

module.exports = Book;