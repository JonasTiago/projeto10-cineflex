import styled from "styled-components";

export default function Header() {
    return (
        <HeaderStyle>
            <h1>cineflex</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
width:100vw;
height:67px;
background-color:#C3CFD9;
position:fixed;
top:0;
left:0;
text-align:center;

    h1{
        color:#E8833A;
        font-family:roboto, sans-serif;
        text-transform:uppercase;
        font-size:34px;
        margin-top:15px;
    }
    
`