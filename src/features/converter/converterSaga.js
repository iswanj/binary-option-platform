import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSupportedCodes,
  getAllRates,
  getPairRate,
} from "../../services/apis";

import { createAction } from "@reduxjs/toolkit";
import { setCodes, setRates, setPairRate } from "./converterSlice";

export const loadCurrencies = createAction("converter/loadCodes");
export const loadRates = createAction("converter/getRates");
export const loadPairRate = createAction("converter/loadPairRate");

function* getCodes(action) {
  const data = yield call(getSupportedCodes, action.payload);
  yield put(setCodes(data));
}

function* getRates(action) {
  const data = yield call(getAllRates, action.payload);
  yield put(setRates(data));
}

function* convertBaseRate(action) {
  const data = yield call(getPairRate, action.payload);
  yield put(setPairRate(data));
}

export function* loadCurrunciesSaga() {
  yield takeLatest(loadCurrencies, getCodes);
}

export function* loadRatesSaga() {
  yield takeLatest(loadRates, getRates);
}
export function* convertBaseRateSaga() {
  yield takeLatest(loadPairRate, convertBaseRate);
}
