import { createContext, ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const UserContext = createContext({
  auth: false,
});

const UserProvider = ({
  children,
  publicPaths,
}: {
  children: ReactElement;
  publicPaths: string[];
}) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let value;
    if (typeof window !== "undefined") {
      value = localStorage.getItem("auth");
    }

    const notAuth = async () => {
      setAuth(false);
      if (publicPaths.indexOf(router.pathname || "") === -1) {
        await router.push("/login");
      }
      setLoading(false);
    };

    if (!value) {
      notAuth();
      return;
    }

    const localData = JSON.parse(value);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
      method: "POST",
      body: JSON.stringify({
        refresh_token: localData.refresh_token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        notAuth();
        return;
      }

      return res.json().then((data) => {
        setAuth(true);
        localData.access_token = data.access_token;
        setLoading(false);
      });
    });
  }, [router, publicPaths]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <UserContext.Provider value={{ auth }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
