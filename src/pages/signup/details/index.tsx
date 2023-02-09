import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "@/components/Dropdown";

const locations = ["psir", "tamp"];

enum Availability {
  MON_MORNING,
  MON_AFTERNOON,
  TUES_MORNING,
  TUES_AFTERNOON,
}

const availabilitys = [
  { name: "Monday Morning", value: Availability.MON_MORNING },
  { name: "Monday Afternoon", value: Availability.MON_AFTERNOON },
  { name: "Tuesday Morning", value: Availability.TUES_MORNING },
  { name: "Tuesday Afternon", value: Availability.TUES_AFTERNOON },
];

const Index = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [workType, setWorkType] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitles, setJobTitles] = useState("");
  const [treatmentHours, setTreatmentHours] = useState<number>();
  const [linkedin, setLinkedin] = useState("");
  const [displayed, setDisplayed] = useState(false);
  const [availability, setAvailability] = useState([]);

  const onSubmit = () => {
    const details = {
      name,
      description,
      workType,
      jobTitles,
      location,
      treatmentHours,
      linkedin,
      displayed,
      availability,
    };

    console.log(details);
  };

  return (
    <div className="section flex justify-centers my-12 items-center">
      <div className="flex flex-col gap-y-6 shadow-2xl border border-1 rounded-3xl p-12 w-[50rem] ">
        <div className="flex justify-between items-center">
          <div className="text-2xl">Sign up</div>
          {error && <div className="text-red-300">{error}</div>}
        </div>
        <hr />
        <div className="flex flex-col gap-y-4">
          <div className="text-xl font-semibold">Tell us about yourself</div>
          <div>
            <label htmlFor="name" className="mb-2">
              Full Name
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
          <div className="flex items-center">
            <label htmlFor="name" className="mr-2">
              Public Profile
            </label>
            <input
              className="border px-6 py-4 border-lg rounded-xl"
              type="checkbox"
              id="name"
              defaultChecked={displayed}
              onChange={() => {
                setDisplayed(!displayed);
              }}
            />
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-y-4">
          <div className="text-xl font-semibold">Your work conditions</div>
          <div>
            <label htmlFor="skills" className="mb-2">
              Work type
            </label>
            <div className="flex gap-x-2">
              <div className="flex items-center gap-x-2">
                <label>
                  <input
                    value="remote"
                    type="radio"
                    checked={workType === "remote"}
                    onChange={(e) => {
                      console.log(e.currentTarget.value);
                      setWorkType(e.currentTarget.value);
                    }}
                  />
                  <span className="ml-2">Remote</span>
                </label>
              </div>
              <div className="flex items-center gap-x-2">
                <label>
                  <input
                    value="flexible"
                    type="radio"
                    checked={workType === "flexible"}
                    onChange={(e) => {
                      console.log(e.currentTarget.value);
                      setWorkType(e.currentTarget.value);
                    }}
                  />
                  <span className="ml-2">Flexible</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="jobTitles" className="mb-2">
              Job titles
            </label>
            <input
              className="border px-6 py-4 w-full border-lg rounded-xl"
              type="text"
              placeholder="Job title"
              id="jobTitles"
              value={jobTitles}
              onChange={(e) => setJobTitles(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="mb-2">
              Linkedin URL
            </label>
            <input
              className="border px-6 py-4 w-full border-lg rounded-xl"
              type="string"
              placeholder="Linkedin url"
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.currentTarget.value)}
            />
          </div>
          <Dropdown
            content={availabilitys}
            state={availability}
            setState={setAvailability}
            label="Availability"
            placeholder="Choose your available timings"
            multiple
          />
        </div>

        <hr />

        <div className="flex flex-col gap-y-4">
          <div className="text-xl font-semibold">Your kidney condition</div>
          <Dropdown
            content={locations.map((l) => ({ name: l, value: l + "_value" }))}
            state={location}
            setState={setLocation}
            label="Kidney Treatment Location"
            placeholder="Select a location"
          />
          <div>
            <label htmlFor="treatmentHours" className="mb-2">
              Treatment hours
            </label>
            <input
              className="border px-6 py-4 w-full border-lg rounded-xl"
              type="number"
              placeholder="Treatment Hours"
              id="treatmentHours"
              value={treatmentHours || ""}
              onChange={(e) => setTreatmentHours(Number(e.currentTarget.value))}
            />
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
