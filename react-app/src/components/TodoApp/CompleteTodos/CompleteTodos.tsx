import { CompleteTodosProps } from "./CompleteTodosProps";
import completeTodos from './CompleteTodos.module.css';
import todoApp from '../TodoApp.module.css';

export const CompleteTodos: React.FC<CompleteTodosProps> = ({todos, onClickBack}) => {
    return (
        <div className={completeTodos['complete-area']}>
            <p className='title'>完了のTODO</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                    <div className={todoApp['list-row']}>
                        <p className={todoApp['todo-item']}>{todo}</p>
                        <button onClick={() => onClickBack(index)}>戻す</button>
                    </div>
                    </li>
                ))}
            </ul>
      </div>
    );
};
