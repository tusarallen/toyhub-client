import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyHub | ${title}`;
  }, [title]);
};

export default useTitle;
