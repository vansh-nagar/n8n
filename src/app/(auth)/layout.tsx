import React from "react";

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return (
    <div className=" flex  justify-center items-center h-screen w-full">
      {props.children}
    </div>
  );
};

export default layout;
