import { FC, Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/pages/provider/UserProvider";

interface Props {}

const Header: FC<Props> = () => {
  const { auth } = useContext(UserContext);
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
              <Link href="/user">
                <button>View Patients</button>
              </Link>
              <Link href="/forum">
                <button>Forum</button>
              </Link>
            </Fragment>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
