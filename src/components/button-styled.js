import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.color ? props.color : 'white'};
    color: pink;
    padding: 5px 50px;
    border-radius: 6px;
    width: 800px;
`
export default StyledButton