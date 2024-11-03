import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';


function* fetchRating() {
    try {
        const ratingResponse = yield axios.get('/api/rating');
        yield put({type: 'SET_RATING', payload: ratingResponse.data})
    } catch (error) {
        console.error('Error Get Rating Saga', error)
    }
}

function* addRating(action){
    try {
        yield axios.post('/api/rating', action.payload)
        yield put({type: 'FETCH_RATING'})
    } catch (error) {
        console.error('Error Add Rating Saga', error)
    }
}

function* deleteRating(action){
    try {
        yield axios.delete(`/api/rating`, {data: action.payload})
        yield put({type: 'FETCH_RATING'})
    } catch (error) {
        console.error('Error Deleting Rating Saga', error)
    }
}

function* ratingSaga(){
    yield takeLatest('FETCH_RATING', fetchRating)
    yield takeLatest('ADD_RATING', addRating)
    yield takeLatest('DELETE_RATING', deleteRating)
}

export default ratingSaga;