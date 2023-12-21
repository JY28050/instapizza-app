import { Fragment } from 'react'


import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/bg-1.jpg'
import classes from './Header.module.css'


const Header = (props) => {
    return (
        <> 
            <header className={classes.header}>
                <h1>InstaPizza</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </> 
    )
};

export default Header;


/*
Refer back to our App, on <HeaderCartButton> we are goint to pass props from our custom props onShowCart- again we are naming it. Pass onClick prop which we named. 

Follow the chain of events. In App, we are creating the function that defines- showCartHandler, which is being passed through props down there, which we are taking now here. 

Now, this is what we learned as prop drilling, for education purposes we can keep it like this as it will work, but usually we would handle this through Context. 




*/