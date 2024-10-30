import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-2xl font-medium capitalize mb-8 text-center">
      {children}
    </h1>
  );
};

export default Heading;
