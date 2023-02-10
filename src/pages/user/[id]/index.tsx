import Details from "./components/Details";
import About from "./components/About";
import { useEffect, useState } from "react";
import { Talent } from "@/types/User";
import { useRouter } from "next/router";

const Index = () => {
  const [data, setData] = useState<Talent>();
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const param = router.query.id;
    // UserProvider ensures that auth key is present (Temp fix)
    let value = JSON.parse(localStorage.getItem("auth")!);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/talent/detail?tid=${param}`, {
      headers: {
        Authorization: `Bearer ${value.access_token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        setError("Error loading data");
      });
  }, [router]);

  return (
    <div>
      {error ? (
        <div>Error loading data</div>
      ) : data ? (
        <>
          <Details talent={data} />
          <About talent={data} />
        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default Index;
