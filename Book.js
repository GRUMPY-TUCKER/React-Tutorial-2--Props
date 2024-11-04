import React from 'react';
import './Book.css';

const Book = (props) =>{
    const   {image, title, author, price} = props;
    return(
        <div className="book">
            <div className='book-image'>
                <img src={image}/>
            </div>
            <div className="book-info">
                <h2>{title}</h2>
                <p className='book-author'>by {author}</p>
                <p className='book-price'>$ {price}</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
}
export default Book;
