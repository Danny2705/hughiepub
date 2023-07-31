import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import contentReducer from "./content";

export default configureStore({
  reducer: {
    counter: counterReducer,
    content: contentReducer,
  },
});
