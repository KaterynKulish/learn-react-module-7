import { FaStar } from 'react-icons/fa';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../todoSlice';
// import { deleteTodo, editTodo } from '../../redux/todoSlice';

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <input type="checkbox" checked={isCompleted} />
      <p>
        {isFavorite && <FaStar color="gold" />}
        {todo}
      </p>

      <div>
        <button>{isFavorite ? 'Dislike' : 'Like'}</button>

        <button
          onClick={() =>
            dispatch(
              editTodo({ id: id, todo: prompt('Enter new value') || todo })
            )
          }
        >
          Edit
        </button>

        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
