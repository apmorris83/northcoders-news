import {expect} from 'chai';
import { articlesReducer } from '../src/reducers/articles.reducer';
import * as actions from '../src/actions/actions';

describe('articles.reducer', () => {
    const initialState = {
        data: {},
        byId: {},
        loading: false,
        error: null
    }
    describe('when passed action FETCH_ARTICLES_REQUEST', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('returns state when not passed an action', () => {
            const newState = articlesReducer(initialState);
            expect(newState).to.eql(initialState);
        });
        it('sets loading to true', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState.loading).to.equal(true);
        });
    });
    describe('when passed action FETCH_ARTICLES_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesSuccess();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('returns state when not passed an action', () => {
            const newState = articlesReducer(initialState);
            expect(newState).to.eql(initialState);
        });
    });
});
