import './taskListEmpty.scss'
import Icon from './img/Clipboard.svg'

const TaskListEmpty = () => {
    return (
        <div className="containerEmpt">
            <div className="wrapper">
                <img src={Icon} alt="EmptyIcon" />
                <span className='title'>У вас еще нет созданных задач</span>
                <span className='descr'>Создавайте задачи и организуйте свои дела</span>
            </div>
           

        </div>
    )
}

export default TaskListEmpty;