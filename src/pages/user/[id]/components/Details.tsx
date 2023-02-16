import { Talent } from "@/types/User";
import Image from "next/image";
import { FC } from "react";

interface Props {
  talent: Talent;
}

const Details: FC<Props> = ({ talent }) => {
  return (
    <div className="section flex my-12">
      <div className="rounded-full overflow-hidden">
        <Image
          src={talent.photo_url}
          alt="Profile picture"
          width="320"
          height="320"
        />
      </div>
      <div className="ml-8 flex flex-col gap-y-4 pt-8">
        <div className="font-bold">{talent.name}</div>
        <div>Stage 5 Kidney</div>
        <div>Engineer</div>
        <div>
          Linkedin URL:
          <a href={talent.linkedin_url}>{talent.linkedin_url}</a>
        </div>
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
