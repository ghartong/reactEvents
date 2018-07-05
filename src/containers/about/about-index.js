import React from 'react'
import StyledButton from '../../components/button-styled'
import { LimeButton, BlueButton } from '../../components/button-colored'

//test extending styled-components
const TomatoButton = StyledButton.extend`
  background: red;
  color: white;
`

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>Hello there!</p>
    <StyledButton color="black">Test imported styled button</StyledButton>
    <br/>
    <TomatoButton>Test tomato extended styled button</TomatoButton>
    <br/>
    <LimeButton>Test lime styled button</LimeButton>
    <br/>
    <BlueButton>Test blue styled button</BlueButton>
    <br/>
  </div>
)

export default About