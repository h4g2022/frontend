import { useState } from "react";

const Index = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState();

  const onSubmit = () => {};

  return (
    <div className="section flex justify-center h-screen items-center">
      <div className="flex flex-col gap-y-6 shadow-2xl border border-1 rounded-3xl p-12 w-[50rem] ">
        <div className="flex justify-between items-center">
          <div className="text-2xl">Sign up</div>
          {error && <div className="text-red-300">{error}</div>}
        </div>
        <hr />
        <div>
          <label htmlFor="name" className="mb-2">
            Email
          </label>
          <input
            className="border px-6 py-4 w-full border-lg rounded-xl"
            type="text"
            placeholder="Full Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            className="border px-6 py-4 w-full border-lg rounded-xl"
            placeholder="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="skills" className="mb-2">
            Availability {"(days a week)"}
          </label>
          <div className="flex flex-col gap-y-2">
            <div>
              <label htmlFor="">One</label>
              <input name="availability" value="1" type="radio" />
            </div>
            <div>
              <label htmlFor="">Two</label>
              <input name="availability" value="2" type="radio" />
            </div>
            <div>
              <label htmlFor="">Three</label>
              <input name="availability" value="3" type="radio" />
            </div>
            <div>
              <label htmlFor="">Four</label>
              <input name="availability" value="4" type="radio" />
            </div>
            <div>
              <label htmlFor="">Five</label>
              <input name="availability" value="5" type="radio" />
            </div>
          </div>
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
