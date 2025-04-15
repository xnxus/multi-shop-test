// Add an item
export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Delete an item
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
