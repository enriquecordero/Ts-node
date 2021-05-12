
import {Request, Response} from 'express';
import BookModel,{Book} from '../models/Books'

class BookController { 
    
    public async indexBook (req:Request,res:Response):Promise<void> {
        const books:Book[] = await BookModel.find().lean()
        res.render('books/index', 
        {
            title:"Index  Book App",
            books        
        })
        
    }
    
    public renderBook (req:Request,res:Response):void {
        res.render('books/add', 
        {title:"Add a Book"})
        
    }

    public async saveBook (req:Request,res:Response) :Promise<void>{
        const {title,author,isbn} = req.body
        const book:Book = new BookModel({title,author,isbn});
        await book.save();
        res.redirect('/books')
        
        // console.log(req.body);
        // res.send('Recibido');
        
    }
}

export const bookController = new BookController();
