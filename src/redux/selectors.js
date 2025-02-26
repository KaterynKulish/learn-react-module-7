import { createSelector } from '@reduxjs/toolkit';

// todos

export const selectTodos = state => state.todos.items;

//filter

export const selectFilter = state => state.filter.filter;
export const selectStatus = state => state.filter.status;

//

export const selectVisibilityTasksByStatus = state => {
  const todos = selectTodos(state);
  const taskStatus = selectStatus(state);

  switch (taskStatus) {
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
};

// мемоізація:
export const selectVisibilityTasksByStatusMemo = createSelector(
  [selectStatus, selectTodos],
  (taskStatus, todos) => {
    //     const todos = selectTodos(state);
    //   const taskStatus = selectStatus(state);

    switch (taskStatus) {
      case 'active':
        return todos.filter(item => !item.completed);
      case 'completed':
        return todos.filter(item => item.completed);
      default:
        return todos;
    }
  }
);

export const selectUncomplededTodos = state => {
  const todos = selectTodos(state);
  // 1 варіант краще: reduce повертає значення:
  return todos.reduce((total, curr) => (curr.completed ? total : total + 1), 0);
  // 2 варіант: filter повертає масив:
  //   return todos.filter(item => !item.completed).length;
};

export const selectUncomplededTodosMemo = createSelector(
  [selectTodos],
  todos => {
    return todos.reduce(
      (total, curr) => (curr.completed ? total : total + 1),
      0
    );
  }
);
