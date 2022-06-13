// import Currency from '../../components/Currency';


enum ActionType {
  ADD_CURRENCY = "ADD_CURRENCY",
  REMOVE_CURRENCY = "REMOVE_CURRENCY",
}

type Action =
  | {
      type: ActionType.ADD_CURRENCY,
      payload: any;
      currency: any[];
    }
  | {
      type: ActionType.REMOVE_CURRENCY;
      id: number;
    };

let defaultState = {
  currency: [],
};

export const CurrencyReducer = (state: any = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CURRENCY:
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state.currency,
          {
            id: id,
            data: data,
          }
        ]
      }
         
    case ActionType.REMOVE_CURRENCY:
      const deleteItem = state.currency.filter((item: any) => item.id !== action.id);
      return {
        ...state,
        currency: deleteItem
      };
    default:
      return state;
  }
};
