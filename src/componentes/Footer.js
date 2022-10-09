import styled from "styled-components";

export default function Footer({url, title, date}){
    return (
        <FooterStyle>
            <img src={url} alt='poster movie' data-identifier="movie-img-preview"/>
            <h3 data-identifier="movie-and-session-infos-preview">{title} <br/>{date}</h3>
        </FooterStyle>
    );
};

const FooterStyle = styled.div`
    width:100%;
    height:117px;
    background-color: #C3CFD9;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    align-items:center;
    padding:14px 10px;

    img{
        width:64px;
        height:89px;
        border:5px solid #fff;
        margin-right:14px;
    }

    h3{
        color:#293845;
        font-size:26px;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
    }
`;