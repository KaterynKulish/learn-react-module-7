// import { changeStep, reset } from './actions';

// const initialState = { counter: 10, step: 1 };

// export const counterReducer = (state = initialState, action) => {
//   console.log(action);
//   console.log(state);

//   switch (action.type) {
//     case 'INCREMENT': {
//       return {
//         ...state,
//         counter: state.counter + state.step,
//       };
//     }
//     case 'DECREMENT': {
//       return {
//         ...state,
//         counter: state.counter - state.step,
//       };
//     }
//     case reset.type: {
//       return initialState;
//     }
//     case changeStep.type: {
//       return {
//         ...state,
//         step: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

// // ============= Лекція 2 Рефакторінг зі слайсами ===========

const initialState = { counter: 10, step: 1 };

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + state.step,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - state.step,
      };
    }
    case reset.type: {
      return initialState;
    }
    case changeStep.type: {
      return {
        ...state,
        step: action.payload,
      };
    }

    default:
      return state;
  }
};
