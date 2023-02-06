import { FC, Fragment, useState } from "react";
import Link from "next/link";

interface Props {}

// eslint-disable-next-line arrow-body-style
const Header: FC<Props> = () => {
  const [auth, setAuth] = useState();
  return (
    <div className="shadow-lg">
      <header className="flex items-center justify-between w-full h-16 section">
        <Link href="/" passHref>
          Homepage
        </Link>
        <nav className="flex gap-x-4">
          {!auth ? (
            <Fragment>
              <Link href="/login">
                <button>Login</button>
              </Link>
              <Link href="/forum">
                <button>Forum</button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <button>View Patients</button>
              <button>Forum</button>
            </Fragment>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
