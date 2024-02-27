import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import FetchingSlice from "./FetchingStatusSlice";
import bagSlice from "./BagSlice";


const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: FetchingSlice.reducer,
    bag: bagSlice.reducer,
  }
})
export default myntraStore;