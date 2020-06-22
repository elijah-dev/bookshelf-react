import React from 'react';

const BookList = props => {
  return (
    <div id='list-container'>
      <ul id='book-list'>
        {props.bookList.map(listItem => {
          return (
            <li className='list-item' id={listItem.id} key={listItem.id}>
              <div className='image-container'>
                <img
                  className='book-cover'
                  src={listItem.bookCover}
                  alt={listItem.bookTitle}
                  onError={e => {
                    e.target.src = 'placeholder.png';
                  }}
                />
              </div>
              <div className='book-info'>
                <h2>
                  <span className='book-title'>{listItem.bookTitle} </span>
                  <span className='book-release-year'>
                    {listItem.bookReleaseYear}
                  </span>
                </h2>
                <p>
                  <span className='book-author'>{listItem.bookAuthor}</span>
                </p>
              </div>
              <div className='button-container'>
                <button
                  className='btn edit-btn'
                  onClick={() => props.handleClickEdit(listItem.id)}>
                  Редактировать
                </button>
                <button
                  className='btn delete-btn'
                  onClick={() => props.handleClickDelete(listItem.id)}>
                  Удалить
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
