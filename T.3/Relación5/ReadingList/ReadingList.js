class BookList {
    constructor(books=[]){
        this.books=books;
        this.#countReadBooks();
        this.#setCurrentBook;
        this.#setLastBook;
        this.#setNextBook;
    }

    assignCurrentBook(myBook){
        this.books.forEach(book => {
            if(book.title==myBook.title){
                this.currentBook=myBook;
                this.#setNextBook(this.#findUnreadBook());
                return 1;
            }
        });
        this.addBook(myBook);
        this.currentBook=myBook;
        this.#setNextBook(this.#findUnreadBook());
        
    }

    #setNextBook(book=0){
        this.nextBook=book;
    }
    getNextBook(){
        return this.nextBook;
    }
    #setCurrentBook(book=0){
        this.currentBook=book;
    }
    getCurrentBook(){
        return this.currentBook;
    }
    #setLastBook(book=0){
        this.lastBook=book;
    }
    getLastBook(){
        return this.lastBook;
    }

    #countReadBooks(){
        this.nReadBooks=0;
        this.nNotReadBooks=0;
        this.books.forEach(book => {
            if(book.read){
                this.nReadBooks++;
            }else{                
                this.nNotReadBooks++;
            }
        });
    }

    addBook(book){
        this.books.push(book);
        if(book.read){
            this.nReadBooks++;
        }else{
            this.nNotReadBooks++;
        }
    }

    finishCurrentBook(){
        if(this.currentBook){
            this.currentBook.setRead(true)
            this.currentBook.setReadDate(Date.now());
            this.#setLastBook(this.currentBook);
        }
        this.#setCurrentBook(this.nextBook);
        this.#setNextBook(this.#findUnreadBook());
    }
    #findUnreadBook(){
        this.books.forEach(book => {
            if(!book.read){
                return book;
            }
        });
        return 0;
    }

    isBookInList(myBook){
        this.books.forEach(book => {
            if(myBook==book){
                return true;
            }
        });
        return false;
    }

    showList(){        
        document.write("<table border=2>");
        this.books.forEach(book => {
            document.write("<tr>");            
            document.write("<td>",book.title,"</td>");
            document.write("<td>",book.genre,"</td>");
            document.write("<td>",book.autor,"</td>");
            document.write("<td>",book.read,"</td>");
            document.write("<td>",book.readDate,"</td>");
            document.write("</tr>");
        });
        document.write("</table>");
    }

}

class Book {
    constructor(title, genre, author, read=false,readDate=0) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate=readDate;
    }

    setReadDate(date){
        this.readDate=date;
    }
    setRead(read){
        this.read=read;
    }

    getTitle(){
        return this.title;
    }

}


let myList= new BookList();

let myBook= new Book("El quijote","Novela","Cervantes");
myList.addBook(myBook);
myList.showList();
document.write("<br>");

myList.addBook(new Book("Libro 2","Sci Fic","Lovecraft"));
myList.addBook(new Book("El gato negro","Terror","Poe"));
myList.addBook(new Book("Libro 4","Misterio","Dazai"));
myList.showList();
document.write("<br>");

myList.assignCurrentBook(new Book("Libro 4","Misterio","Dazai"));
document.write("Current book: ", myList.getCurrentBook().getTitle(),"<br>");
myList.showList();
document.write("<br>");
myList.isBookInList(new Book("Libro 4","Misterio","Dazai"));

myList.assignCurrentBook(myBook);
document.write("Current book: ", myList.getCurrentBook().getTitle(),"<br>");
myList.showList();
document.write("<br>");


myList.finishCurrentBook();
document.write(myList.getLastBook().getTitle());
document.write("<br>");
document.write(myList.getCurrentBook().getTitle());
document.write("<br>");
document.write(myList.getNextBook().getTitle());
document.write("<br>");

