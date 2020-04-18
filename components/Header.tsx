import styles from "./Header.module.css";

import {
  Button,
  Navbar
} from "react-bootstrap";
import Link from "next/link";

type HeaderProps = {
  title: string;
  closeable?: boolean;
};

function renderCloseButton(closeable: boolean) {
  if (!closeable) return null;

  return (
    <Link href="/" as="/">
      <Button variant="light" className={styles.close}>Close</Button>
    </Link>
  )
}

function Header({ closeable = false, title }: HeaderProps) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={{ display: "block", textAlign: "center" }}>
      <Navbar.Brand>{title}</Navbar.Brand>
      {renderCloseButton(closeable)}
    </Navbar>
  )
}

export default Header;