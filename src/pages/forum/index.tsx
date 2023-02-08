import UserInput from "./components/UserInput";
import Posts from "./components/Posts";

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
