// layout
import { BaseLayout } from '../layouts/BaseLayout';
// components
import { Logo } from '../components/Svgs/Logo/Logo';

// styles
import styles from '../styles/pages/home.module.scss';
// data
import data from '../data/home.json';
import Link from 'next/link';
import { ButtonLink } from '../components/ButtonLink/ButtonLink';

const Page = () => {
  return (
    <BaseLayout {...data?.layout}>
      <div className={styles.Container}>
        <Logo height='200px' />
        <div className={styles.ButtonWrapper}>
          <Link href='/example' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Example Page'>
              Example
            </ButtonLink>
          </Link>
          <Link href='/theme' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Theme Page'>
              Theme
            </ButtonLink>
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page;
