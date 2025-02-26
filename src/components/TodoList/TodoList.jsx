import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { useEffect } from 'react';
import { fetchData } from '../../redux/todosOps';
import Filter from './Filter';
import {
  selectUncomplededTodos,
  selectUncomplededTodosMemo,
} from '../../redux/selectors';

export const TodoList = () => {
  const dispatch = useDispatch();
  const uncompletedTodos = useSelector(selectUncomplededTodosMemo);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchData({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <h2>Uncompleted todos: {uncompletedTodos}</h2>
      <List />
    </div>
  );
};
