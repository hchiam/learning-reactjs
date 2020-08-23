import { useState } from "react";

/**
 * Auto-updates the (new) limit of the number of items to show by using a window.onscroll listener.
 * @param {number} start initial limit of number of items to show
 * @param {number} pace how many more items to extend when scrolling
 */
export const useInfiniteScroll = (start = 30, pace = 10) => {
  const [limit, setLimit] = useState(start);
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit(limit + pace);
    }
  };
  return limit;
};

/**
 * usage:
 *
 * import { useInfiniteScroll } from "./useInfiniteScroll";
 *
 * let maxNumItems = useInfiniteScroll();
 *
 * tableContent.slice(0, maxNumItems).map(item => return <div>{item.content}</div>
 */
