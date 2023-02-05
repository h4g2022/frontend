import { FC } from "react";

interface Props {}

const Details: FC<Props> = () => {
  return (
    <div className="section flex my-12">
      <div className="h-80 w-80 bg-black rounded-full text-white flex justify-center items-center">
        Profile Picture
      </div>
      <div className="ml-8 flex flex-col gap-y-4 pt-8">
        <div className="font-bold">John Applesead</div>
        <div>Stage 5 Kidney</div>
        <div>Engineer</div>
        <div>Hobbies: Coding, Soccer, blabla</div>
        <div>Skillsets: Writing, Reading, Playing...</div>
      </div>
    </div>
  );
};

export default Details;
