// react | next
import { useState } from 'react';
// state
import { useRecoilState } from 'recoil';
import { TodosAtom } from './TodosAtom';
// styles
import styles from './Todos.module.scss';

// export const TodoForm = () => {
//   const [todos, setTodos] = useRecoilState(TodosAtom);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = (text) => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue) return;
//     addTodo(inputValue);
//     setInputValue('');
//   };

//   return (
//     <form className={styles.TodoForm} onSubmit={handleSubmit}>
//       <input
//         className={styles.TodoFormInput}
//         type='text'
//         name='addTodo'
//         id='addTodo'
//         onChange={(e) => setInputValue(e.target.value)}
//         value={inputValue}
//         placeholder='Add Todo'
//       />
//     </form>
//   );
// };
