import styled from "styled-components";

export const StyledParagraph = styled.p`
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    @media (max-width: 740px) {
        margin: 10px 25px;
        font-size: 14px;
}`

export const StyledMainHeader = styled.h1`
    font-family: 'Hind', sans-serif;
    width: 80%;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 52px;
    margin-top: 28px;
    @media (max-width: 740px) {
        font-size: 26px;
        margin: 26px 20px 0 20px;
}`

export const StyledSecondaryHeader = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    font-family: 'Public Sans';
    line-height: 19px;
    color: #2F2F2F;
    @media (max-width: 740px) {
        padding: 0 25px 0 25px;
        font-size: 13px;
}`

const handleBackgroundColor = color => {
    switch(color) {
        case "Enabled":
            return "linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);"
        case "Disabled":
            return "#9F9F9F;"
        default:
            return "#F3E2D9;"
    }
}

export const StyledButton = styled.button`
    width: ${ props => props.buttonProperties.value === "Späť" ? "81px;" : "124px;"}
    height: 59px;
    background: ${ props => handleBackgroundColor(props.buttonProperties.className)}
    border-radius: 100px;
    border: none;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    box-shadow: ${ props => props.buttonProperties.notAllowed ? "none;" : "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);"}
    color: ${ props => props.buttonProperties.value === "Späť" ? "#2F2F2F;" : "#fff;" }
    font-size: 14px;
    line-height: 19px;
    cursor: ${ props => props.buttonProperties.notAllowed ? "not-allowed;" : "pointer;"}
    outline: none;
    @media (max-width: 740px) {
        width: 150px;
        height: 80px;
        margin: 0 25px;
}`