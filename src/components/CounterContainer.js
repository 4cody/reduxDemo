import React from 'react';
import { connect } from 'react-redux'
import { incrementNumber } from '../redux' 
import { decrementNumber } from '../redux' 

function CounterContainer(props) {
    return (
        <div>
            <h2>Number - {props.num}</h2>
            <button onClick={props.decrementNum}>Decrement Number</button>
            <button onClick={props.incrementNum}>Increment Number</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        num: state.number 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementNum: () => dispatch(incrementNumber()),
        decrementNum: () => dispatch(decrementNumber())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)
