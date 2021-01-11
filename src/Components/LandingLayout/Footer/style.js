import styled from 'styled-components';


export const Wrapper = styled.div`
position:relative;
height:93.86px;
background: #FFFFFF;
box-shadow: 0px -3px 8px rgba(135, 135, 135, 0.25);
`;


export const Center = styled.div`
align-items:center;
display:flex;
height:100%;
flex-direction:column;
justify-content: flex-end;
img{
    width: 45.25px;
    height: 50px;
}
h1{
width: 289px;
height :24px;
font-family: Roboto;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color:#585858;
margin-bottom:0px;
margin-top:11px;
}
`;

export const Details = styled.div`
position:absolute;
width:175px;
right:120px;
display:flex;
flex-direction:column;
top:50%;
transform: translate(0%,-50%);
ul{
    width:100%;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0;
    margin:0;
    img{
        width:24px;
        height:24px;
    }
}
h2{
text-align:right;
font-style: normal;
margin:0;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #47525D;
margin-bottom:23px;
}
`;
