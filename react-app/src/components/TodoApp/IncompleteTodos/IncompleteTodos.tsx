import { IncompleteTodosProps } from "./IncompleteTodosProps";
import incompleteTodos from './IncompleteTodos.module.css';
import todoApp from '../TodoApp.module.css';

export const IncompleteTodos: React.FC<IncompleteTodosProps> = ({todos, onClickComplete, onClickDelete}) => {
    return (
        <div className={incompleteTodos['incomplete-area']}>
            <p className='title'>未完了のTODO</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                    <div className={todoApp['list-row']}>
                        <p className={todoApp['todo-item']}>{todo}</p>
                        <button onClick={() => onClickComplete(index)}>完了</button>
                        <button onClick={() => onClickDelete(index)}>削除</button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
