import { all } from "redux-saga/effects";
import {
  loadCurrunciesSaga,
  loadRatesSaga,
  convertBaseRateSaga,
} from "../features/converter/converterSaga";

export default function* rootSaga() {
  yield all([loadCurrunciesSaga(), loadRatesSaga(), convertBaseRateSaga()]);
}
