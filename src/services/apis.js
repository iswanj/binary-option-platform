import request from "./request";

export const getSupportedCodes = async () => {
  const { data } = await request.get("codes");
  return data.supported_codes;
};

export const getAllRates = async (baseCurrency) => {
  const { data } = await request.get(`latest/${baseCurrency}`);
  return data.conversion_rates;
};

export const getPairRate = async (payload) => {
  const { data } = await request.get(`pair/${payload.from}/${payload.to}`);
  return data.conversion_rate;
};
