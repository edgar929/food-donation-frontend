import store from '../../store';

export const authenticatedUser = async (data,type) => {
  
  await store.dispatch({ type, payload: data });
  
};