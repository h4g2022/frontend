import Posts from "./components/posts";
import UserInput from "./components/UserInput";

const Index = () => {
  return (
    <div className="section my-8">
      <div className="text-4xl font-semibold">Forum</div>
      <hr className="my-8" />
      <UserInput />
      <Posts />
    </div>
  );
};

export default Index;
