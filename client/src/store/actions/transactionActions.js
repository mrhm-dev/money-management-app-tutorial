import Axios from 'axios'

import * as Types from './types'

export const loadTransactions = () => dispatch => {
    Axios.get('/api/transactions/')
        .then(response => {
            dispatch({
                type: Types.LOAD_TRANSACTIONS,
                payload: {
                    transactions: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const addNewTransaction = transaction => dispatch => {
    Axios.post('/api/transactions/', transaction)
        .then(response => {
            dispatch({type: Types.CREATE_TRANSACTION, payload: { transaction: response.data}})
        })
        .catch(error => {
            console.log(error)
        })
}