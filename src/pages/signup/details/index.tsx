import { UserContext } from "@/pages/provider/UserProvider";
import { useContext, useState } from "react";
import Employer from "./components/Employer";
import Talent from "./components/Talent";

const Index = () => {
  const [error, setError] = useState("");
  const { userType } = useContext(UserContext);
  return (
    <div className="section flex justify-centers my-12 items-center">
      <div className="flex flex-col gap-y-6 shadow-2xl border border-1 rounded-3xl p-12 w-[50rem] ">
        <div className="flex justify-between items-center">
          <div className="text-2xl">Sign up</div>
          {error && <div className="text-red-300">{error}</div>}
        </div>
        <hr />
        {userType === "talent" ? (
          <Talent setError={setError} />
        ) : (
          <Employer setError={setError} />
        )}
      </div>
    </div>
  );
};

export default Index;
