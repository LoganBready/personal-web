// interface
import type { IButtonLink } from './IButtonLink';
// styles
import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ href, className, children, title }: IButtonLink) => (
  <a className={`button ${styles.ButtonLink} ${className}`} href={href} title={title}>
    {children}
  </a>
);
