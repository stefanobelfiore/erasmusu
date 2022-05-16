import { types } from "../types/types";

const initialResultsState = {
    AllResultsListIds: [],
    thirdyResults:[],
    resultsForType: []
  };
  
  export const resultsReducer = (state = initialResultsState, action) => {
    switch (action.type) {
      case types.setAllResultsIds:
        return {
          ...state,
          AllResultsListIds: action.payload,
        };
      
        case types.setResults:
          return {
            ...state,
           thirdyResults: action.payload,
          };

      case types.setResultsForType:
        return {
          ...state,
          resultsForType: action.payload,
        };

  
      default:
        return state;
    }
  };
  
 