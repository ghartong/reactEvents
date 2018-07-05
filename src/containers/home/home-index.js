import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: ${props => props.color ? props.color : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
`

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <ButtonStyled color='blue' primary onClick={props.increment} disabled={props.isIncrementing}>Increment</ButtonStyled>
      <ButtonStyled onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</ButtonStyled>
    </p>

    <p>
      <ButtonStyled color='red' primary onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</ButtonStyled>
      <ButtonStyled onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</ButtonStyled>
    </p>

    <p><button className="btn btn-default" onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
