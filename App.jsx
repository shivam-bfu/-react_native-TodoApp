import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import TodoApp from './Components/TodoApp';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
