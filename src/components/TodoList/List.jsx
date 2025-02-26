import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import {
  selectFilter,
  selectTodos,
  selectVisibilityTasksByStatus,
  selectVisibilityTasksByStatusMemo,
} from '../../redux/selectors';

export const List = () => {
  // const todos = useSelector(selectTodos);
  const todos = useSelector(selectVisibilityTasksByStatusMemo);
  // const filter = useSelector(selectFilter);
  // const taskStatus=useSelector(state=>state.filter.status)

  // const filteredData = todos.filter(item =>
  //   item.todo.toLowerCase().includes(filter.toLowerCase())
  // );

  // const getVisibilityTasks = () => {
  //   switch (taskStatus) {
  //     case 'all':
  //       return todos;
  //     case 'active':
  //       return todos.filter(item => !item.completed);
  //     case 'completed':
  //       return todos.filter(item => item.completed);
  //     default:
  //       break;
  //   }
  // };

  return (
    <ul className={s.list}>
      {/* {filteredData().map(item => (
         <Item {...item} key={item.id} />
       ))}
       {getVisibilityTasks().map(item => (
         <Item {...item} key={item.id} />
       ))} */}

      {todos.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
