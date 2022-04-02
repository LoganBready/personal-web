// react | next
import { useEffect } from 'react';
import Link from 'next/link';
// state
import { useSetRecoilState } from 'recoil';
import { TodosAtom } from '../../components/Todos/TodosAtom';
// layout
import { BaseLayout } from '../../layouts/BaseLayout';
// components
// import { Todos } from '../../components/Todos/Todos';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
// styles
import styles from '../../styles/pages/example.module.scss';
// data
import data from '../../data/example.json';

const Page = () => {
  const setTodos = useSetRecoilState(TodosAtom);

  // useEffect(() => {
  //   setTodos(data?.todos);
  // }, [setTodos]);

  return (
    <BaseLayout {...data?.layout}>
      {/* <div className={styles.Container}>
        <Todos />
        <div className={styles.ButtonWrapper}>
          <Link href='/' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Home Page'>
              Home
            </ButtonLink>
          </Link>
          <Link href='/theme' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Theme Page'>
              Theme
            </ButtonLink>
          </Link>
        </div>
      </div> */}
    </BaseLayout>
  );
};

export default Page;
