import { Fragment } from 'react'


import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/bg-1.jpg'
import classes from './Header.module.css'


const Header = (props) => {
    return (
        <Fragment> 
            <header className={classes.header}>
                <h1>InstaPizza</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </Fragment> 
    )
};

export default Header;