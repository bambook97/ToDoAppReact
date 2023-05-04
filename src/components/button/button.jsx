import './button.scss'
import Plus from './img/plus.svg'


const Button = ({handleSubmit}) => {

    return (
        <>
            <button onClick={(e) => handleSubmit(e)} className='addButton'>
                 Добавить 
                 <img src={Plus} alt="Plus" />
            </button>
        </>
        
    )
}

export default Button;