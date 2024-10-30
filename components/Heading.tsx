import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-2xl font-medium capitalize mb-8">{children}</h2>;
};

export default Heading;
