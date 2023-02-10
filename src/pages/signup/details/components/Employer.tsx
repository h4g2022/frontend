import { FC, Dispatch, SetStateAction, useState } from "react";

interface Props {
  setError: Dispatch<SetStateAction<string>>;
}

const Employer: FC<Props> = ({ setError }) => {
  const [company, setCompany] = useState("");

  const onSubmit = async () => {
    const body = {
      company,
    };
    const data = JSON.parse(localStorage.getItem("auth")!);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/talent/me`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${data.access_token}`,
        },
      }
    );

    if (!res.ok) {
      setError("Error creating account");
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="text-xl font-semibold">Tell us about yourself</div>
        <div>
          <label htmlFor="commpany" className="mb-2">
            Company
          </label>
          <textarea
            className="border px-6 py-4 w-full border-lg rounded-xl"
            placeholder="Company"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.currentTarget.value)}
          />
        </div>
        <button
          className="bg-black px-6 py-4 rounded-xl text-white hover:bg-opacity-80"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Employer;
