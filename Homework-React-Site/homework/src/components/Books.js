import React from 'react';
import books from '../mocks/books';
import BooksFilter from "./BooksFilter";
import BooksList from "./BooksList";

const Books =(props)=> {
   return (
    <section id="books">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Books</h2>
          <hr className="star-primary" />
        </div>
      </div>
     
       <BooksFilter 
      selectFilter={props.selectFilter} 
      selectedFilter={props.selectedFilter}
      />
          <BooksList 
          books={props.books}
           />
    </div>
  </section>
  )
        }
      


export default Books;