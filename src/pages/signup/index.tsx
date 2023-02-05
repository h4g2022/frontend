import { useState } from "react";

const Index = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = () => {
    setError("");
    if (!email || !password || !confirm) {
      setError("Missing fields");
      return;
    }

    if (password !== confirm) {
      setError("Passwords not matched");
      return;
    }

    if (password.length < 6) {
      setError("Password too short");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Invalid email");
      return;
    }
  };

  return (
    <div className="section flex justify-center h-screen items-center">
      <div className="w-96 flex flex-col gap-y-6 shadow-2xl border border-1 rounded-3xl p-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl">Sign up</div>
          {error && <div className="text-red-300">{error}</div>}
        </div>
        <hr />
        <div>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            className="border px-6 py-4 w-full border-lg rounded-xl"
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2">
            Password&nbsp;
            <span className="text-gray-400 text-sm">{"(>= 6 chars)"}</span>
          </label>
          <input
            className="border px-6 py-4 w-full border-lg rounded-xl"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm" className="mb-2">
            Confirm Password
          </label>
          <input
            className="border px-6 py-4 w-full border-lg rounded-xl"
            type="password"
            placeholder="Confirm Password"
            id="confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.currentTarget.value)}
          />
        </div>
        <button
          className="bg-black px-6 py-4 rounded-xl text-white hover:bg-opacity-80"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Index;
