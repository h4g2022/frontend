import { Talent } from "@/types/User";
import { FC } from "react";

interface Props {
  talent: Talent;
}

// eslint-disable-next-line arrow-body-style
const Index: FC<Props> = ({ talent }) => {
  return (
    <div className="section max-w-screen-lg">
      <div className="mb-8">
        <div className="font-bold text-lg">About me</div>
        <hr className="my-4" />
        <div>{talent.story}</div>
      </div>
      <div>
        <div className="font-bold text-lg">Contact me</div>
        <hr className="my-4" />
        <div>blabla@mgail.com</div>
      </div>
    </div>
  );
};

export default Index;
