import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildFC color="red" onClick={() => console.log("Clicked")}>
      This is a children...
    </ChildFC>
  );
};

export default Parent;
