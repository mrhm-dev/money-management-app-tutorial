import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { addNewTransaction } from '../../store/actions/transactionActions'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
        transform: 'translate(-50%, -50%)',
      width: '500px'
    }
  };
  

class CreateTransaction extends React.Component {

    state = {
        amount: 0,
        type: '',
        note: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.addNewTransaction(this.state)
        this.setState({
            amount: 0,
            type: '',
            note: ''
        })
    }

    render() {
        let { amount, note } = this.state
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
                style={customStyles}
                contentLabel='Create A New Transaction'
            >
                <h2>Create A New Transaction</h2>
                <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <label htmlFor='amount'> Amount: </label>
                            <input
                                type="number"
                                className='form-control'
                                placeholder="Enter Amount"
                                name='amount'
                                id='amount'
                                value={amount}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='type'> Type: </label>
                        <select
                            className='form-control'
                            onChange={this.changeHandler}
                            name='type'
                        >
                            <option> Select A Type </option>
                            <option value="expense"> Expense </option>
                            <option value="income">Income</option>
                        </select>
                            
                    </div>
                    <div className='form-group'>
                        <label htmlFor='note'> Amount: </label>
                            <textarea
                                className='form-control'
                                placeholder="Enter a Note"
                                name='note'
                                id='note'
                                value={note}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Modal>
        )
    }
}

export default connect(null, { addNewTransaction })(CreateTransaction)

// amount
// Type
// Note