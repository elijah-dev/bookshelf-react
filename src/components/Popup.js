import React from 'react';

const Popup = props => {
  return (
    <div id='popup-container' className={props.status}>
      <div id='popup-form'>
        <form id='book-info-form' onSubmit={e => props.handleSubmit(e)}>
          <h2 id='form-title'>
            {props.formType === 'add' ? 'Добавить книгу' : null}
            {props.formType === 'edit' ? 'Редактировать книгу' : null}
          </h2>
          <div className='form-field-container'>
            <label htmlFor='book-title-field'>Название</label>
            <input
              value={props.formData.bookTitle}
              onChange={e => props.handleChange('bookTitle', e.target.value)}
              type='text'
              id='book-title-field'
              className='form-field'
              required
            />
          </div>
          <div className='form-field-container'>
            <label htmlFor='book-author-field'>Автор</label>
            <input
              value={props.formData.bookAuthor}
              onChange={e => props.handleChange('bookAuthor', e.target.value)}
              type='text'
              id='book-author-field'
              className='form-field'
              required
            />
          </div>
          <div className='form-field-container'>
            <label htmlFor='book-release-year-field'>Год издания</label>
            <input
              value={props.formData.bookReleaseYear}
              onChange={e =>
                props.handleChange('bookReleaseYear', e.target.value)
              }
              type='number'
              min='1'
              max='2017'
              id='book-release-year-field'
              className='form-field'
              required
            />
          </div>
          <div className='form-field-container'>
            <label htmlFor='book-cover-field'>Изображение</label>
            <input
              value={props.formData.bookCover}
              onChange={e => props.handleChange('bookCover', e.target.value)}
              type='text'
              id='book-cover-field'
              className='form-field'
            />
          </div>
          <div id='form-btn-container'>
            <input
              type='button'
              className='btn'
              id='cancel-btn'
              defaultValue='Отменить'
              onClick={() => props.handleCancel()}
            />
            <input
              type='submit'
              className='btn'
              id='save-btn'
              defaultValue='Сохранить'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
