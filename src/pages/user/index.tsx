import { Fragment, useEffect, useState } from "react";

import { Talent } from "@/types/User";
import Listing from "./components/Listing";

const Index = () => {
  const [data, setData] = useState<Talent[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    // UserProvider ensures that auth key is present (Temp fix)
    let value = JSON.parse(localStorage.getItem("auth")!);
    if (!value) {
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/talent/all`, {
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
  }, []);

  return (
    <div className="section my-12">
      <div className="text-4xl font-semibold mb-8">Users</div>
      <div className="flex flex-col gap-y-6">
        {error ? (
          <div>{error}</div>
        ) : data ? (
          <div className="flex flex-col gap-y-4">
            {data.map((x: Talent, i: number) => (
              <Fragment key={i}>
                <Listing talent={x} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Index;
