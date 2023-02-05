import { FC } from "react";

interface Props {}

// eslint-disable-next-line arrow-body-style
const Index: FC<Props> = () => {
  return (
    <div className="section max-w-screen-lg">
      <div className="mb-8">
        <div className="font-bold text-lg">About me</div>
        <hr className="my-4" />
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
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
