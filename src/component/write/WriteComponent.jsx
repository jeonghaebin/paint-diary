import { useState } from "react";
import Write from "./Write";
import Paint from "./Paint";
import Complete from "./Complete";

const WriteComponent = (props) => {
  const { setIsWrite } = props;

  const [paint, setPaint] = useState(0);

  return (
    <>
      {paint === 0 ? (
        <Write setIsWrite={setIsWrite} setPaint={setPaint} />
      ) : paint === 1 ? (
        <Paint setIsWrite={setIsWrite} setPaint={setPaint} />
      ) : (
        <Complete setIsWrite={setIsWrite} setPaint={setPaint} />
      )}
    </>
  );
};

export default WriteComponent;
