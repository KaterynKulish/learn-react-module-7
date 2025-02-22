export const reset = { type: 'RESET' };

// import { createAction } from '@reduxjs/toolkit';

export const changeStep = newStep => {
  return {
    type: 'changeStep',
    payload: newStep,
  };
};

// export const reset = createAction('reset');

// export const changeStep = createAction('changeStep');
