import { useSelector } from "react-redux";

const counter = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
};

export default counter;
