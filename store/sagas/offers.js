import { put, takeLatest, select, call } from 'redux-saga/effects';
import axios from 'axios';
import Router from 'next/router'
import { toast } from 'react-toastify';
import * as fromActions from '../actions';
import * as fromTypes from '../types/offers';

const getOffersState = (state) => state.offers;

const URL_BASE = "http://private-59658d-celulardireto2017.apiary-mock.com";

const parseFormValue = (form, sku, planSku) => {
  return {
    platform: sku,
    plan: planSku,
    userData: form 
  }
}

export function* fetchPlatforms() {
  try {
    const response = yield axios.get(`${URL_BASE}/plataformas`);
    yield put(fromActions.fetchPlatformsSuccess(response.data.plataformas));
  } catch (error) {
    toast.error('Ops, não foi possível listar as plataformas disponíveis. Tente novamente mais tarde.');
    yield put(fromActions.fetchPlatformsError());
    console.error(error);
  }
}

export function* fetchPlans({payload}) {
  try {
    const response = yield axios.get(`${URL_BASE}/planos/${payload}`);
    yield put(fromActions.fetchPlansSuccess(response.data.planos));
  } catch (error) {
    toast.error('Ops, não foi possível listar os planos disponíveis. Tente novamente mais tarde.');
    yield put(fromActions.fetchPlansError());
    console.error(error);
  }
}

export function* subscribe({ payload }) {
  try {
    const { form, sku, planSku } = payload;
    const formValue = parseFormValue(form, sku, planSku)
    console.log(formValue)
    toast.success('Plano contratado com sucesso.');
    yield put(fromActions.subscribeSuccess());
    Router.push('/')
  } catch (error) {
    yield put(fromActions.subscribeError());
    toast.error('Ops, não foi possível contratar o plano. Tente novamente mais tarde.');
    console.error(error);
  }
}

export function* watchOffers() {
  yield takeLatest(fromTypes.FETCH_PLATFORMS, fetchPlatforms);
  yield takeLatest(fromTypes.FETCH_PLANS, fetchPlans);
  yield takeLatest(fromTypes.SUBSCRIBE, subscribe);
}
