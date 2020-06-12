import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    color: white;
    padding: 2.5%;
`

function Header(props) {
    const [ name, setName ] = useState("");

    return(
        <StyledHeader>
            What's your GitHub handle?
        </StyledHeader>
    );
}

export default Header;