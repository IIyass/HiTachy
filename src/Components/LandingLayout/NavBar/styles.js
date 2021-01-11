import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
font-family:Roboto;
justify-content:space-between;
background-color:#fff;
align-items:center;
height:100px;

ul{
    width:250px;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0;
    margin:0;
    margin-right:120px;
    
    a{
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-decoration:none;
        color:#47525D;  
        :nth-child(${({ position }) => position}){
        color:#53A8CB;
        }
    }
}
`;

export const Logo = styled.div`
margin-left:120px;
width :270px;
height: 50px;
display:flex;
flex-direction:row;
justify-content:space-between;
img{
    width:100%;
    height:100%;
}
`;
