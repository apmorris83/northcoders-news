import * as types from './types';
import axios from 'axios';

export function fetchArticlesRequest () {
    type: types.FETCH_ARTICLES_REQUEST
}

export function fetchArticlesSuccess () {
    type: types.FETCH_ARTICLES_SUCCESS
}

export function fetchArticlesError () {
    type: types.FETCH_ARTICLES_ERROR
}