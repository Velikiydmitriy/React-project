import React from 'react';

const HeaderComponent = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <figure className="logo">
                    <img alt="логотип" src="img/logo.png" className="logo__img"/>
                        <figcaption>Единый <br/> центр записи</figcaption>
                </figure>
                <div className="header__right">
                    <figure className="telephone">
                        <img alt="телефон" src="img/phone-square.png" className="telephone__img"/>
                            <figcaption>80300 5000</figcaption>
                    </figure>
                    <ul className="nav">
                        <li className="nav__item nav__item_active">
                            <a href="#">Главная</a>
                        </li>
                        <li className="nav__item nav__item_arrow">
                            <a href="#">Услуги</a>
                        </li>
                        <li className="nav__item">
                            <a href="#">Клиники и кабинеты</a>
                        </li>
                        <li className="nav__item">
                            <a href="#">О нас</a>
                        </li>
                        <li className="nav__item">
                            <a href="#">Статьи</a>
                        </li>
                        <li className="nav__item">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="nav__item">
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;