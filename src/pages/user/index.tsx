import { useEffect, useState } from "react";

import { User } from "@/types/User";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/talent/all`)
      .then((res) => {
        if (!res.ok) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="section my-12">
      <div className="text-4xl font-semibold mb-8">Users</div>
      <div className="flex flex-col gap-y-6">
        {!data ? <div>No data</div> : <div></div>}
      </div>
    </div>
  );
};

export default Index;
