import React, { useState } from 'react';
import './Home.css';


const Home = ({ books, cart, setCart }) => {
  const booksPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const addCart = (book) => {
    setCart([...cart, book]);
  };

  const removeCart = (book) => {
    setCart(cart.filter((c) => c.year !== book.year));
  };

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='clearfix'>
      <center><div className="input "><div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div></div>
      </center>

      {
            books 
              .filter((val) => {
                if(searchTerm === ""){
                  return null;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val,index) => {
                return(
                
                  <div key={index} className="books new">
                  <div className="container">
                  <img src={`${process.env.PUBLIC_URL}/${val.imageLink}`} alt="" />
                  </div>
                  <span className='dd'><strong>Title:</strong> {val.title}</span>
                  <span><strong>Author:</strong> {val.author}</span><br />
                  <span><strong>Price:</strong>{val.pages}</span>
                  {cart.includes(val) ? (
                    <button onClick={() => removeCart(val)}>-</button>
                  ) : (
                    <button  onClick={() => addCart(val)}>+</button>
                  )}
                </div>
                   
                )
              })
          }
      
    <div className='book'>
    {currentBooks.map((book, index) => (
        <div key={index} className="books">
          <div className="container">
          <img src={`${process.env.PUBLIC_URL}/${book.imageLink}`} alt="" />
          </div>
          <span className='dd'><strong>Title:</strong> {book.title}</span>
          <span><strong>Author:</strong> {book.author}</span><br />
          <span><strong>Price:</strong>{book.pages}</span>
          {cart.includes(book) ? (
            <button onClick={() => removeCart(book)}>-</button>
          ) : (
            <button  onClick={() => addCart(book)}>+</button>
          )}
        </div>
      ))}
    </div>
    <div className="pagination">
  <button onClick={(e) => paginate(currentPage - 1, e)} disabled={currentPage === 1}>
    Previous
  </button>
  {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
    <button
      key={i}
      onClick={(e) => paginate(i + 1, e)}
      className={currentPage === i + 1 ? 'active' : ''}
    >
      {i + 1}
    </button>
  ))}
  <button onClick={(e) => paginate(currentPage + 1, e)} disabled={currentPage === Math.ceil(books.length / booksPerPage)}>
    Next
  </button>
</div>
  </div>
    
  );
};

export default Home;
