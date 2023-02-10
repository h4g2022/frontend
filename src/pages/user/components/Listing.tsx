import { FC } from "react";
import Link from "next/link";
import { Talent } from "@/types/User";

interface Props {
  talent: Talent;
}

// eslint-disable-next-line arrow-body-style
const Listing: FC<Props> = ({ talent }) => {
  return (
    <>
      <hr />
      <div className="my-4 flex items-center">
        <div className="bg-black w-32 h-32 rounded-full"></div>
        <div className="ml-4 mr-auto">
          <div>{talent.name}</div>
          <div>{talent.job_title}</div>
          <div>{talent.job_types.join(", ")}</div>
          <div>{talent.job_modes.join(", ")}</div>
        </div>
        <Link href={`/user/${talent.talent_id}`}>
          <button className="button">View more</button>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Listing;
