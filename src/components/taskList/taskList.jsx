import './taskList.scss'
import TaskListItem from '../taskListItem/taskListItem'

const TaskList = (props) => {
    const {tasks, changeTask, deleteTask, toggleTask} = props;

    const elements = tasks.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TaskListItem 
            key={id} 
            {...itemProps}
            deleteTask={() => deleteTask(id)} 
            toggleTask={() => toggleTask(id)}
            changeTask={(event) => changeTask(event, id)}/>
        )
    })

    return (
        <ul className="taskList">
            {elements}
        </ul>
    )
}

export default TaskList;