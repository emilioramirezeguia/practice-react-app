import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
    color: ${props => props.textColor || "white" };
    font-size: ${props => props.textSize };

`
function Text(props) {
    const { children, color, fontSize } = props;

    return (
        <StyledText textColor={color} textSize={fontSize}>
            {children}
        </StyledText>
    );
}

export default Text;