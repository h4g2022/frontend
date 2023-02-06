import { FC, useState } from "react";

interface Props {}

// eslint-disable-next-line arrow-body-style
const UserInput: FC<Props> = () => {
  const [input, setInput] = useState("");
  const onSubmit = () => {};

  return (
    <div className="flex flex-col">
      <textarea
        className="border border-1 rounded-xl h-32 w-full p-4 hover:border-gray-300"
        placeholder="Enter your input"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button className="self-end button mt-4" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default UserInput;
