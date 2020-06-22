// Я учил React используя create-react-app, поэтому использую его сейчас
// Также мне комфортнее использовать функциональные компоненты и хуки,
// хотя с классовыми компонентами я тоже знаком
import React, { useState } from 'react';

// Компоненты

// Шапка
import NavBar from './components/NavBar';
// Всплывающее окно
import Popup from './components/Popup';
// Список книг
import BookList from './components/BookList';

// Я вынес изначальный список книг и схему данных книги в отдельный документ
import { bookSchema, initialBookList } from './data/initialData';

function App() {
  // Весь стейт приложения находится здесь
  // В данном приложении это сделано для передачи данных формы списку книг и обратно
  // и возможности открывать всплывающее окно кнопками из других компонентов

  // Текцщий список книг для отображения
  const [bookList, setBookList] = useState(initialBookList);

  // formData - это объект, соответствующий единой схеме данных книги
  // и содержащий текущие значения полей формы
  // Константа с пустыми значениями используется для обнуления формы
  const emptyFormData = bookSchema;
  const [formData, setFormData] = useState(emptyFormData);
  const [popupStatus, setPopupStatus] = useState(null);
  const [formType, setFormType] = useState('none');

  // Функции открытия формы. Передаются как пропсы дочерним компонентам

  // Открытие формы редактирования
  const openPopupEdit = id => {
    // Находим нужный элемент по id
    const itemToEdit = bookList.filter(book => book.id === id)[0];
    // Меняем данные формы на данные найденного элемента
    setFormData(itemToEdit);
    setFormType('edit');
    setPopupStatus('open');
  };

  // Открытие пустой формы для добавления
  const openPopupAdd = () => {
    setFormType('add');
    setPopupStatus('open');
  };

  // Закрытие формы
  const closePopup = () => {
    setPopupStatus('closed');
    setFormType('none');
    setFormData(emptyFormData);
  };

  // Функция обновления списка

  const updateBookList = bookData => {
    let newBookList = [...bookList];
    // Если переданные данные имеют id,
    // значит книга уже существует в списке
    // и нужно ее найти и сделать апдейт,
    if (bookData.id) {
      const updateIndex = newBookList.findIndex(
        item => item.id === bookData.id
      );
      newBookList[updateIndex] = { ...bookData };
      setBookList(newBookList);
      closePopup();
      // если id пустой, значит это новый элемент:
      // генерируем id и добавляем новый элемент в список
    } else {
      bookData.id =
        Math.round(Math.random() * 10000).toString() +
        Math.round(Math.random() * 10000).toString();
      newBookList.push(bookData);
      setBookList(newBookList);
      closePopup();
    }
  };

  // Удаление элемента
  // Копируем текущий список, исключив удаляемый элемент с помощью Array.prototype.filter
  // и устанавливаем обновленный список в качестве текущего
  const deleteListItem = id => {
    const newBookList = bookList.filter(book => book.id !== id);
    setBookList(newBookList);
  };

  // Функции используемые формой

  // Изменение соотвествующего значения formData при вводе текста
  const handleFormChange = (key, value) => {
    let newFormData = { ...formData };
    newFormData[key] = value;
    setFormData({ ...newFormData });
  };

  // Вызов функции апдейта списка при сабмите
  const handleFormSubmit = e => {
    e.preventDefault();
    updateBookList(formData);
  };

  return (
    <div className='App'>
      <Popup
        status={popupStatus}
        formType={formType}
        formData={formData}
        handleSubmit={handleFormSubmit}
        handleChange={handleFormChange}
        handleCancel={closePopup}
      />
      <NavBar handleClick={openPopupAdd} />
      <BookList
        bookList={bookList}
        handleClickEdit={openPopupEdit}
        handleClickDelete={deleteListItem}
      />
    </div>
  );
}

export default App;
