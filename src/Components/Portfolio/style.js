import styled from 'styled-components'



export const PortfolioWrapper = styled.div`
background-color:#DDDDDD;
padding-top:60px;
`;

export const PortfolioContainer = styled.div`
width:1280px;
max-width:1280px;
margin:0 auto;
display: grid;
grid-template-columns: 620px 620px;
grid-auto-rows: auto;
column-gap: 19px;

#full{
    display:${({ open }) => open ? 'block' : 'none'};
}

h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #4A4A4A;
    margin-top:0px;
    margin-bottom:44px;
}
 
.work{
    width:100%;
    height:auto;
    margin-bottom:40px;
    img{
        height:800px;
        width:100%;
        cursor:pointer;
    }
    .footer{
        height:100px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        ul{
            margin:0;
            padding:0;
            display:flex;
            width:250px;
            flex-direction:row;
            list-style:none;
            align-items:center;
            justify-content:space-between;
            li{
                width:65px;
                height:65px;
                background-color:#fff;
                border-radius:50%;
                display:flex;
                img{
                    width:50%;
                    height:50%;
                    margin:auto;
                }
            }
        }
        h2{
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 47px;
            letter-spacing: 1px;       
            color: #000000;
            margin-top:0px;
            margin-bottom:12px;
        }
        span{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.6px;
            color: #4A4A4A;
        }
    }
}
}
`;