import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

//Importing Routes
import IndexRoute from './routes'
import BookRoute from "./routes/books"

// Initializations
const app =  express();
import './database';

// Settings
app.set('port' , process.env.PORT ||4000);
app.set('views',path.join(__dirname,"views"));
//como funciona la plantilla
app.engine('.hbs',hbs({
    extname:".hbs",
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    helpers:require('./lib/helpers'),
    defaultLayout:'main'
}));
app.set('view engine','.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/',IndexRoute)
app.use('/books',BookRoute)

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Starting server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
})