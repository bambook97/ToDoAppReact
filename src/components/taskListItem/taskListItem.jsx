import { useEffect } from 'react';
import './taskListItem.scss'

const TaskListItem = (props) => {
    const { text, completed, changeTask, deleteTask, toggleTask } = props;

    const textStyle = {
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#808080' : "white"
    }

    const handleChange = (event, id) => {
        if (completed) {
            return;
        }
        if (event.target.value === "") {
            deleteTask(id)
        } else {
            changeTask(event, id)
        }
        autoResize()
    }
    
    useEffect (
            () => {
                autoResize()
            }, [text]
    )

    function autoResize() {
        const textareas = document.getElementsByClassName('taskListItemInput');
        for (let i = 0; i < textareas.length; i++) {
            const textarea = textareas[i];
            textarea.style.height = "auto";
            if (textarea.scrollHeight > 4.8 + "em") {
                textarea.style.height = 5.8 + "em";
            } else {
                textarea.style.height = textarea.scrollHeight + "px";
            }
        }
    }

    const delTask = (event, id) => {
        event.preventDefault();
        deleteTask(id);
    }

    return (
        <li className="taskListItem">
            <input onChange={toggleTask} type="checkbox" className='taskListItemCheckbox' id="myCheckbox" checked={completed} />
            <textarea rows={1} onChange={handleChange} className='taskListItemInput' value={text} style={textStyle} />
            <a onClick={delTask} href='#' className='trashButton' />
        </li>
    )
}

export default TaskListItem;