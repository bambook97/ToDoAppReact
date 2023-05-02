import './form.scss'
import Button from '../button/button'
import { useState } from 'react';

const Form = (props) => {
    const {addTask} = props;
    const [name, setName] = useState("");

    const onChangeValue = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "") {
            addTask(name);
            setName("");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }


    return (
        <div className="container">
            <input className="addTaskForm" onKeyDown={handleKeyDown} type="text" name="task" placeholder='Введите новую задачу' value={name} onChange={onChangeValue}/>
            <Button handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Form;