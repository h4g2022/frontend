import { FC } from "react";
import Link from "next/link";
import { Talent } from "@/types/User";
import Image from "next/image";

interface Props {
  talent: Talent;
}

// eslint-disable-next-line arrow-body-style
const Listing: FC<Props> = ({ talent }) => {
  return (
    <>
      <hr />
      <div className="my-4 flex items-center">
        <div className="overflow-hidden rounded-full">
          <Image
            src={talent.photo_url}
            alt="Profile pic"
            height="128"
            width="128"
          />
        </div>
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
