import ACTIONS from "./first-page-action";
import _ from "lodash";

const defaultState = {
  show: false
};

const firstPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SHOW_TEXT: {
      console.log('veuo no redux')
      return {...state, show: true};
    }
    default:
      return state;
  }
};

export default firstPageReducer;