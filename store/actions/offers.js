import * as fromTypes from '../types/offers';

export const fetchPlatforms = () => ({
  type: fromTypes.FETCH_PLATFORMS,
});

export const fetchPlatformsSuccess = (payload) => ({
  type: fromTypes.FETCH_PLATFORMS_SUCCESS,
  payload
});

export const fetchPlatformsError = () => ({
  type: fromTypes.FETCH_PLATFORMS_ERROR,
});

export const fetchPlans = (payload) => ({
  type: fromTypes.FETCH_PLANS,
  payload
});

export const fetchPlansSuccess = (payload) => ({
  type: fromTypes.FETCH_PLANS_SUCCESS,
  payload
});

export const fetchPlansError = () => ({
  type: fromTypes.FETCH_PLANS_ERROR,
});

export const subscribe = (payload) => ({
  type: fromTypes.SUBSCRIBE,
  payload
});

export const subscribeSuccess = () => ({
  type: fromTypes.SUBSCRIBE_SUCCESS,
});

export const subscribeError = () => ({
  type: fromTypes.SUBSCRIBE_ERROR,
});