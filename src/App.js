import React, { useState } from 'react'
import './App.css';
import Button from './components/button/button';
import UserList from './components/userList/userList';
import Preloader from './components/preloader/preloader';

function App() {

  const [users, setUsers] = useState([]); // state для массива пользователей
  const [isLoader, setIsLoader] = useState(false); // state для отображения прелоадера

  async function download () {
    setIsLoader(true); // отоброжаем прелоадер
    setUsers([]);
    await fetch('https://randomuser.me/api/?results=10&nat=us,au,br,de,gb') 
      .then((response) => {
          return response.json(); // если ответ есть парсим в json
      }).catch((err) => {
          setIsLoader(false);
          return console.log(err); // если ошибка выводим ошибку
      }).then((data) => {
        setUsers(data.results) // если ответ распарсили присваиваем данные в dataArr
        //console.log(data); // раскомментировать, чтобы посмотреть в консоли структуру объекта
    });
    setIsLoader(false); //скрываем прелоадер
  }
  return (
    <div className="App">
      <Button onClick={download} label='Загрузить'/>
      {isLoader && <Preloader/> /*Если isLoader === true, тогда отобразить Preloader */}
      <div>
      
      <div className="out_div" id='out_div'></div>
      {users.length > 0 && <UserList users={users} /> /*Если длина массива users > 0, тогда  отобразить UserList */}
      </div>
      
    </div>
  );
}

export default App;
