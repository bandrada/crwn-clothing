import './button.scss';

const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, isLoading, ...otherProps}) => {
    return (
        <button 
            disabled={isLoading}
            className={`button-container ${BUTTON_TYPE[buttonType]}`}
            {...otherProps}
        >{isLoading 
            ? <div className='spinner'></div>
            : children
        }</button>
    );
};

export default Button;