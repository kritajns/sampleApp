const initialState = {
    items: [],
    count: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          count: state.count + 1,
        };

        case 'REMOVE_FROM_CART':
            return {
              ...state,
              items: state.items.filter((item) => item.id !== action.payload),
              count: state.count - 1,
            };
      
      default:
        return state;
    }
  };
  
  export default cartReducer;