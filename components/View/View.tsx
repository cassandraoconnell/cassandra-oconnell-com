import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface ViewContextValue {
  height: number;
  orientation: "horizontal" | "vertical";
  scroll: number;
  width: number;
}

const ViewContext = createContext<ViewContextValue | null>(null);

export const useView = () => {
  const view = useContext(ViewContext);

  if (view === null) {
    throw new Error(
      "useView must be called in a child component of <ViewProvider>"
    );
  } else {
    return view;
  }
};

export const ViewProvider = ({ children }: React.PropsWithChildren) => {
  const [height, setHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const value = useMemo<ViewContextValue>(
    () => ({
      height,
      orientation: height > width ? "vertical" : "horizontal",
      scroll,
      width,
    }),
    [height, scroll, width]
  );

  return (
    <ViewContext.Provider value={value}>
      {height === 0 || width === 0 ? null : children}
    </ViewContext.Provider>
  );
};
