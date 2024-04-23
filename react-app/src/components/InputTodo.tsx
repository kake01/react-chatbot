import React from 'react';
import { InputTodoProps } from './InputTodoProps';

export const InputTodo: React.FC<InputTodoProps> = ({todoText, onChange, onClick}) => {
    return (
        <div className='input-area'>
            <input placeholder='Todoを入力' value={todoText} onChange={onChange} />
            <button onClick={onClick}>追加</button>
        </div>
    );
};
