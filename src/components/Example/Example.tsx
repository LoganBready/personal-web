// interface
import type { IExample } from './IExample';
// styles
import styles from './Example.module.scss';

export const Example = ({ text }: IExample) => {
  return (
    <section>
      <div className={`container ${styles.Example}`}>
        <p className={styles.ExampleText}>{text}</p>
      </div>
    </section>
  );
};
