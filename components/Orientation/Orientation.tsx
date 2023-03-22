import { createContext, useContext, useEffect, useState } from "react";

type Orientation = "horizontal" | "vertical";

const OrientationContext = createContext<Orientation | null>(null);

export const useOrientation = () => {
  const orientation = useContext(OrientationContext);

  if (orientation === null) {
    throw new Error(
      "useOrientation must be called in a child component of <OrientationProvider>"
    );
  } else {
    return orientation;
  }
};

export const OrientationProvider = ({ children }: React.PropsWithChildren) => {
  const [orientation, setOrientation] = useState<Orientation | null>(null);

  useEffect(() => {
    const onResize = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? "vertical" : "horizontal"
      );
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <OrientationContext.Provider value={orientation}>
      {orientation === null ? null : children}
    </OrientationContext.Provider>
  );
};
