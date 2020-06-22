import React from 'react';

const NavBar = props => {
  return (
    <div id='nav-bar'>
      <h1>Книжная полка</h1>
      <button
        className='btn'
        id='add-item-btn'
        onClick={() => props.handleClick()}>
        Добавить книгу
      </button>
    </div>
  );
};

export default NavBar;
