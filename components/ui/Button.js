import Link from "next/link";

import styles from "./Button.module.css";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;