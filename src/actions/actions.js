import * as types from './types';
import axios from 'axios';
import thunk from 'redux-thunk';

export function fetchArticlesRequest (data) {
    type: types.FETCH_ARTICLES_REQUEST,
    data
}

export function fetchArticlesSuccess (data) {
    type: types.FETCH_ARTICLES_SUCCESS,
    data
}

export function fetchArticlesError (error) {
    type: types.FETCH_ARTICLES_ERROR,
    error
}