const {Router} = require('express');
const router = Router();
const bookCtrl = require ('../controller/book.controller')

router.get("/allBooks", bookCtrl.getAllBooks);
router.get("/book", bookCtrl.getBooks);
router.get("/books", bookCtrl.getBooksById);
router.post("/books", bookCtrl.postBooks);
router.put("/books", bookCtrl.putBooks);
router.delete("/books", bookCtrl.deleteBooks)


module.exports = router;