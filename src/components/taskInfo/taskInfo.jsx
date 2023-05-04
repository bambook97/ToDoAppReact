import './taskInfo.scss'

const TaskInfo = (props) => {
    const {tasks, completedTasks} = props
    return (
        <div className="taskInfo">
            <div className="totalContainer">
                <span>Задачи</span>
                <div className="totalCounter">{tasks}</div>
            </div>
            <div className="doneContainer">
                <span>Выполнено</span>
                <div className="doneCounter">{tasks === 0 ? 0 : (`${completedTasks} из ${tasks}`)}</div>
            </div>
        </div>

    )
}

export default TaskInfo;