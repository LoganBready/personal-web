// state
import { useRecoilState } from 'recoil';
// import { TodosAtom } from './TodosAtom';
// interface
// import type { ITodo } from './ITodo';
// styles
// import styles from './Todos.module.scss';

// export const Todo = ({ index, isCompleted, text }: ITodo) => {
//   const [todos, setTodos] = useRecoilState(TodosAtom);

//   const replaceItemAtIndex = (arr, index, newValue) => {
//     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
//   };

//   const removeItemAtIndex = (arr, index) => {
//     return [...arr.slice(0, index), ...arr.slice(index + 1)];
//   };

//   const editItemText = ({ target: { value } }) => {
//     const newTodos = replaceItemAtIndex(todos, index, {
//       ...{ text, isCompleted },
//       text: value,
//     });
//     setTodos(newTodos);
//   };

//   const completeTodo = () => {
//     const newTodos = replaceItemAtIndex(todos, index, {
//       ...{ text, isCompleted },
//       isCompleted: !{ text, isCompleted }.isCompleted,
//     });
//     setTodos(newTodos);
//   };

//   const removeTodo = () => {
//     const newTodos = removeItemAtIndex(todos, index);
//     setTodos(newTodos);
//   };

//   return (
//     <li className={styles.Todo}>
//       <div className={`${styles.TodoText} ${isCompleted ? styles.IsCompleted : ''}`}>
//         <input type='text' value={text} onChange={editItemText} />
//       </div>
//       <div className={styles.ButtonWrapper}>
//         <button className={styles.CompleteTodo} onClick={completeTodo} type='button'>
//           {isCompleted ? 'incomplete' : 'complete'}
//         </button>
//         <button className={styles.RemoveTodo} onClick={removeTodo} type='button'>
//           x
//         </button>
//       </div>
//     </li>
//   );
// };
