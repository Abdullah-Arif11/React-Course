import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { FetchingActions } from "../store/FetchingStatusSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchingActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchingActions.markFetchingDone());
        dispatch(FetchingActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
};

export default FetchItem;
