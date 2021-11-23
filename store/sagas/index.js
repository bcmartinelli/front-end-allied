import { all } from 'redux-saga/effects';
import { watchOffers } from './offers';

export default function* rootSaga() {
  yield all([watchOffers()]);
}
