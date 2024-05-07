const intitalStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  status: "",
};

export default function customerReducer(state = intitalStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

// store.dispatch(createCustomer("Om", 12345));
// console.log(store.getState());

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
