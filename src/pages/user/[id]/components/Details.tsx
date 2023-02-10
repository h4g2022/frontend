import { Talent } from "@/types/User";
import { FC } from "react";

interface Props {
  talent: Talent;
}

const Details: FC<Props> = ({ talent }) => {
  return (
    <div className="section flex my-12">
      <div className="h-80 w-80 bg-black rounded-full text-white flex justify-center items-center">
        Profile Picture
      </div>
      <div className="ml-8 flex flex-col gap-y-4 pt-8">
        <div className="font-bold">{talent.name}</div>
        <div>Stage 5 Kidney</div>
        <div>Engineer</div>
        <div>Linkedin URL: {talent.linkedin_url}</div>
        <div>Skillsets: {talent.skills.join(", ")}</div>
        <div>
          Open for&nbsp;
          <span className="font-bold">{talent.job_types.join(", ")}</span>&nbsp;
          opportunities
        </div>
      </div>
    </div>
  );
};

export default Details;
