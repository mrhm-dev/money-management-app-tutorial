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
            console.log(response)
            dispatch({type: Types.CREATE_TRANSACTION, payload: { transaction: response.data}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const removeTransaction = id => dispatch => {

    Axios.delete(`/api/transactions/${id}`)
        .then(response => {
            dispatch({type: Types.REMOVE_TRANSACTION, payload: {id: response.data._id}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const updateTransaction = (id, transaction) => dispatch => {
    Axios.put(`/api/transactions/${id}`, transaction)
        .then(response => {
            dispatch({type: Types.UPDATE_TRANSACTION, payload: {transaction: response.data.transaction}})
        })
        .catch(error => {
            console.log(error)
        })
}