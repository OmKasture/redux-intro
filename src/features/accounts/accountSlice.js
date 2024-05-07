const intitalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = intitalStateAccount, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requesLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposite(amount) {
  return { type: "account/deposite", payload: amount };
}

// store.dispatch(deposite(500));
// console.log(store.getState());

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
// store.dispatch(withdraw(300));
// console.log(store.getState());

export function requestLoan(amount, purpose) {
  return { type: "account/requesLoan", payload: { amount, purpose } };
}
// store.dispatch(requestLoan(1000, "For Buy a Car"));
// console.log(store.getState());

export function payLoan() {
  return { type: "account/payLoan" };
}
// store.dispatch(payLoan());
// console.log(store.getState());
