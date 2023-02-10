import { Dispatch, FC, SetStateAction, useState } from "react";
import Dropdown from "@/components/Dropdown";

interface Props {
  setError: Dispatch<SetStateAction<string>>;
}

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

const Talent: FC<Props> = ({ setError }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [workType, setWorkType] = useState("");
  const [jobMode, setJobMode] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [treatmentHours, setTreatmentHours] = useState<number>();
  const [linkedin, setLinkedin] = useState("");
  const [displayed, setDisplayed] = useState(false);
  const [availability, setAvailability] = useState([]);

  const onSubmit = async () => {
    const body = {
      story: description,
      job_types: [workType],
      job_modes: [jobMode],
      job_title: jobTitle,
      skills: [""],
      availability,
      photo_url: "string",
      is_displayed: displayed,
      linkedin_url: linkedin,
      talent_id: 0,
      center_location: location,
      weekly_hours: treatmentHours,
      treatment_type: "",
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
          <label className="mb-2">Job Modes</label>
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="Remote"
                  type="radio"
                  checked={jobMode === "Remote"}
                  onChange={(e) => setJobMode(e.currentTarget.value)}
                />
                <span className="ml-2">Remote</span>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="Hybrid"
                  type="radio"
                  checked={jobMode === "Hybrid"}
                  onChange={(e) => setJobMode(e.currentTarget.value)}
                />
                <span className="ml-2">Hybrid</span>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="On-site"
                  type="radio"
                  checked={jobMode === "On-site"}
                  onChange={(e) => setJobMode(e.currentTarget.value)}
                />
                <span className="ml-2">Onsite</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="skills" className="mb-2">
            Job Types
          </label>
          <div className="flex gap-x-2">
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="Full-time"
                  type="radio"
                  checked={workType === "Full-time"}
                  onChange={(e) => setWorkType(e.currentTarget.value)}
                />
                <span className="ml-2">Full Time</span>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="Part-time"
                  type="radio"
                  checked={workType === "Part-time"}
                  onChange={(e) => setWorkType(e.currentTarget.value)}
                />
                <span className="ml-2">Part Time</span>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <label>
                <input
                  value="Contract"
                  type="radio"
                  checked={workType === "Contract"}
                  onChange={(e) => setWorkType(e.currentTarget.value)}
                />
                <span className="ml-2">Contract</span>
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
            value={jobTitle}
            onChange={(e) => setJobTitle(e.currentTarget.value)}
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
    </>
  );
};

export default Talent;
