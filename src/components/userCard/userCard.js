import React from 'react';
import Avatar from '../avatar/avatar';
import './userCard.css';

export default function UserCard (props) {
    let gender = ''; // пол
    let date = new Date(props.user.dob.date);
    let dob = 'Дата рождения: ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear(); // дата рождения
    let age = props.user.dob.age + ' ' + ageStr(props.user.dob.age); // возраст + вызов функции которая вернет слово для возраста
    let adress = 'Страна: ' + props.user.location.country 
                            + '; г. ' + props.user.location.city 
                            + '; улица: ' 
                            + props.user.location.street.name 
                            + ' / ' 
                            + props.user.location.street.number; // адрес
    if (props.user.gender === 'male'){
        gender = 'Мужчина';
    }else{
        gender = 'Женщина';
    }

    //функция подстановки слова для определенного возраста
    function ageStr (num) {
        let str = num.toString()
        let val = parseInt(str[str.length - 1])
        if (val === 0){
            return ('лет');
        }else if (val === 1){
            return ('год');
        }else if (val >= 2 && val <= 4){
            return ('года');
        }else if ( val >= 5){
            return ('лет')
        }
    }

    return(
        <div className='userCard dfr'>
            <Avatar src={props.user.picture.large} width='90' height='90' />
            <div className='dfc'>
                <h3 className="card-title">{props.user.name.title + ' ' + props.user.name.first + ' ' + props.user.name.last}</h3>
                <h5 className="card-title">{gender}</h5>
                <h6 className="card-title">{dob}</h6>
                <h6 className="card-title">{age}</h6>
                <h6 className="card-title">Телефон: {props.user.phone}</h6>
                <h6 className="card-title">Email: {props.user.email}</h6>
                <h6 className="card-title">{adress}</h6>
            </div>
        </div>
    )
}