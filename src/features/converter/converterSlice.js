import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baseCurrency: "LKR",
  convertCurrency: "USD",
  amount: "1",
  codes: [],
  rates: [],
  pairRate: 0,
};

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    changeField: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setCodes: (state, action) => {
      state.codes = action.payload.reduce((arr, item) => {
        return [...arr, { label: `${item[0]}-${item[1]}`, value: item[0] }];
      }, []);
    },
    setRates: (state, action) => {
      state.rates = Object.entries(action.payload).map(([currency, rate]) => {
        return {
          currency,
          rate,
        };
      });
    },
    setPairRate: (state, action) => {
      state.pairRate = action.payload;
    },
  },
});

export const { changeField, setCodes, setRates, setPairRate } =
  converterSlice.actions;
export const converterValues = (state) => state.converter;
export default converterSlice.reducer;
