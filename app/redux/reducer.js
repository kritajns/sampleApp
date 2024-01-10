const initialState = {
  items: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const sameItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (sameItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          count: state.count + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          count: state.count + 1,
        };
      }

    case "REMOVE_FROM_CART":
      const removeItem = state.items.find((item) => item.id === action.payload);

      if (removeItem) {
        if (removeItem.quantity > 1) {
          const updatedItems = state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return {
            ...state,
            items: updatedItems,
            count: state.count - 1,
          };
        } else {
          const updatedItems = state.items.filter(
            (item) => item.id !== action.payload
          );

          return {
            ...state,
            items: updatedItems,
            count: state.count - 1,
          };
        }
      }

    default:
      return state;
  }
};

export default cartReducer;
