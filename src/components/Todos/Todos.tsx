// state
import { useRecoilValue } from 'recoil';
import { TodosAtom } from './TodosAtom';
// components
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
// styles
import styles from './Todos.module.scss';

// export const Todos = () => {
//   const todos = useRecoilValue(TodosAtom);

//   return (
//     <section>
//       <div className='container'>
//         <div className={styles.TodoWrapper}>
//           <ul className={styles.TodoList}>
//             {todos?.map(({ text, isCompleted }, index) => (
//               <Todo text={text} isCompleted={isCompleted} index={index} key={index} />
//             ))}
//           </ul>
//           <TodoForm />
//         </div>
//       </div>
//     </section>
//   );
// };
