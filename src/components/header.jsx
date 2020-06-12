import React, { useState } from "react";
import Text from "./text.jsx";
import styled from "styled-components";

const StyledHeader = styled.div`
    color: white;
    padding: 2.5%;
`

function Header(props) {
    const [ name, setName ] = useState("");

    return(
        <StyledHeader>
            <Text fontSize="1.8rem">What's your GitHub handle?</Text>
        </StyledHeader>
    );
}

export default Header;