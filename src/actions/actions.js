import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';

export function getArticles (topic) {
    return function (dispatch) {
        const URL = topic
            ? ROOT + `/topics/${topic}/articles`
            : ROOT + '/articles';
        dispatch(fetchArticlesRequest());
        axios
            .get(URL)
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticlesError(err));
            });
    };
}

export function fetchArticlesRequest() {
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}

export function fetchArticlesSuccess(data) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        data
    };

}

export function fetchArticlesError(error) {
    return {
        type: types.FETCH_ARTICLES_ERROR,
        error
    };
}