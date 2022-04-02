// react | next
import Head from 'next/head';
import Link from 'next/link';
// components
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
// styles
import styles from '../../styles/pages/theme.module.scss';

const Page = () => {
  return (
    <>
      <Head>
        <title>Theme</title>
      </Head>
      <div className={styles.Container}>
        <section>
          <div className='container'>
            <h1 style={{ marginBottom: '28px' }}>Heading 1</h1>
            <h2 style={{ marginBottom: '28px' }}>Heading 2</h2>
            <h3 style={{ marginBottom: '28px' }}>Heading 3</h3>
            <h4 style={{ marginBottom: '28px' }}>Heading 4</h4>
            <h5 style={{ marginBottom: '28px' }}>Heading 5</h5>
            <h6 style={{ marginBottom: '28px' }}>Heading 6</h6>
            <p style={{ marginBottom: '28px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore vel labore minima. Laboriosam
              labore officia delectus, molestiae adipisci praesentium. Adipisci excepturi ullam quis omnis veritatis
              magnam vero fugit aperiam?
            </p>
            <p style={{ marginBottom: '28px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore vel labore minima. Laboriosam
              labore officia delectus, molestiae adipisci praesentium. Adipisci excepturi ullam quis omnis veritatis
              magnam vero fugit aperiam?
            </p>
            <ul style={{ marginBottom: '28px', paddingLeft: '1.6rem', listStyleType: 'disc' }}>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ul>
            <ol style={{ marginBottom: '28px', paddingLeft: '1.6rem', listStyleType: 'number' }}>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
            </ol>
            <button>Lorem Ipsum</button>
          </div>
        </section>
        <div className={styles.ButtonWrapper}>
          <Link href='/' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Home Page'>
              Home
            </ButtonLink>
          </Link>
          <Link href='/example' passHref>
            <ButtonLink className={styles.Button} title='Navigate to Example Page'>
              Example
            </ButtonLink>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
