import { FC, Fragment, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "@/pages/provider/UserProvider";

interface Props {}

const Header: FC<Props> = () => {
  const { auth } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <div className="shadow-lg">
      <header className="flex items-center justify-between w-full h-16 section px-2 sm:px-5 ">
        <Link href="/" passHref>
          <Image src="/images/logo.jpg" alt="Logo" height={340} width={150} />
        </Link>
        <nav className="flex gap-x-4 items-center">
          {!auth ? (
            <Fragment>
              <Link href="/login">
                <button className="text-xs sm:text-md">Login</button>
              </Link>
              <Link href="/signup">
                <button className="text-xs sm:text-md">Sign up</button>
              </Link>
              <Link href="/resources">
                <button className="text-xs sm:text-md">Resources</button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/user">
                <button className="text-xs sm:text-md">View Patients</button>
              </Link>
              <Link href="/resources">
                <button className="text-xs sm:text-md">Resources</button>
              </Link>
              <button className="text-xs sm:text-md" onClick={logout}>
                Log out
              </button>
            </Fragment>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
