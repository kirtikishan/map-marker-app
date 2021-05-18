import { combineReducers } from "redux";

//HERE IMPORT REDUCERS TO BE COMBINED.

import { mapReducer } from "./mapReducer";

export default combineReducers({
  mapData: mapReducer,
});
