import React from 'react';
import styles from './TodoInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
    const handleKeypress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    };
    
    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeypress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
};

export default TodoInput;