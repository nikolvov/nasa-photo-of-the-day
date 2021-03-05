import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
background-color: black;

&:hover {
    background-color: orange;
}

h1 {
    color: blue;
    
    &:hover {
        color: yellow;
        text-shadow: 4px 4px 3px green;
    }
}
`

const Header = () => {
    return (
       <StyledHeader>
           <h1>NASA Photo of the Day</h1>
       </StyledHeader> 
    )
}

export default Header