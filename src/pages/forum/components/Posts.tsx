import { FC, useState } from "react";

interface Props {}

const mockData = [
  "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis nibh ornare venenatis ornare. Duis felis neque, luctus ac ante id, suscipit lobortis enim. Aliquam eros leo, rhoncus eu commodo eu, pretium non purus. Ut pharetra risus quis mauris semper ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vulputate lobortis urna, ut laoreet diam aliquam sed. Donec ullamcorper aliquam ligula, at gravida quam congue nec. F",
  "orem ipsum dolor sit amet, consectetur ",
];

const comments = ["Good job", "Good job", "Good job", "Good job", "Good job"];

const Posts: FC<Props> = () => {
  const [hide, setHide] = useState(true);

  const onComment = () => {};
  const onSeeComments = () => {};

  return (
    <div>
      <div className="text-4xl font-semibold">Posts</div>
      <hr className="my-8" />
      <div className="flex flex-col gap-y-6 my-8">
        {mockData.map((post, i: number) => (
          <div
            className="p-4 border border-1 border-gray-300 rounded-3xl min-h-80 shadow-lg"
            key={i}
          >
            <div className="flex items-center">
              <div className="w-20 h-20 bg-black rounded-full"></div>
              <div className="ml-4">Johnny Applesead</div>
            </div>
            <hr className="my-4" />
            <div>{post}</div>
            <div className="flex justify-between mt-4">
              <button>{hide ? "See comments" : "Collapse"}</button>
              <button onClick={onComment} className="button">
                Comment
              </button>
            </div>
            {!hide && (
              <div>
                <div className="text-2xl font-bold">Comments</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
