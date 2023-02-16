import { useContext } from "react";
import Image from "next/image";
import { UserContext } from "./provider/UserProvider";
import Link from "next/link";

export default function Home() {
  const { auth } = useContext(UserContext);
  return (
    <div className="flex justify-center mt-16 text-9xl font-semibold px-5">
      <div>
        <div className="mb-5 flex justify-center">
          <Image
            src="/images/home_banner.jpg"
            alt="Homepage banner"
            width={900}
            height={450}
            style={{ borderRadius: "96px" }}
          />
        </div>
        {/* <div className="mb-5 text-center">HIRE 4 GOOD</div> */}
        <div className="flex justify-center mb-5">
          <Image src="/images/logo.jpg" alt="Logo" width={700} height={350} />
        </div>
        <div className="flex text-sm justify-center gap-x-5">
          {!auth ? (
            <>
              <Link href="/login">
                <button className="border-black rounded-2xl border-1 border px-4 py-2 hover:bg-gray-300">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="border-black rounded-2xl border-1 border px-4 py-2 hover:bg-gray-300">
                  Sign up
                </button>
              </Link>
              <Link href="/resources">
                <button className="border-black rounded-2xl border-1 border px-4 py-2 hover:bg-gray-300">
                  Resources
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/user">
                <button className="border-black rounded-2xl border-1 border px-4 py-2 hover:bg-gray-300">
                  View Patients
                </button>
              </Link>
              <Link href="/resources">
                <button className="border-black rounded-2xl border-1 border px-4 py-2 hover:bg-gray-300">
                  Resources
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
