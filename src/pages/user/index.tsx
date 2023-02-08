import { useEffect, useState } from "react";

import { User } from "@/types/User";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>();
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/talent/all`).then((res) => {
      if (!res.ok) {
        setError("Error loading");
      }
    });
  });

  return (
    <div>
      <div className="text-4xl font-semibold">Users</div>
      <div className="flex flex-col gap-y-6">
        {loading ? <div>Loading...</div> : <div></div>}
      </div>
    </div>
  );
};

export default Index;
