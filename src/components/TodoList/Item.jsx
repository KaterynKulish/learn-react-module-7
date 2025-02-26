import { FaStar } from 'react-icons/fa';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/todosOps';
import { useState } from 'react';

const Item = ({ completed, todo, edit, id, isFavorite }) => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState(todo);
  // const [editMode, setEditMode] = useState(false);

  const handleChange = e => {
    dispatch(editTodo({ completed: !completed, todo, id }));
    dispatch(editTodo({ completed: !completed, todo, id }));
  };

  return (
    <li className={s.item}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <p>
        {isFavorite && <FaStar color="gold" />}
        {todo}
      </p>

      <div>
        <button>{isFavorite ? 'Dislike' : 'Like'}</button>

        <button onClick={edit}>Edit</button>

        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
