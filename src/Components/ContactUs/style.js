import styled from 'styled-components'


export const ContactUsHeaderWrapper = styled.div`
background-color:#DDDDDD;

#container{
    width:1200px;
    max-width:1200px;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    #image{
        width:500px;
        height:500px;
        border-radius:50%;
        border:10px solid #072E4B;
        background-color:#fff;
        display:flex;
        margin-top:170px;
        img{
            margin:auto;
        }
    }

    form{
        width:600px;
        margin-top:420px;
        h1,p{
            font-family: Helvetica;
            font-style: normal;
            font-weight: 400;
            font-size: 29px;
            line-height: 34px;
            letter-spacing: 0.75px;
            color: #072E4B;
        }
        p{
            color: #9B9B9B;
        }

        input,select,textarea{
            width:100%;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
            mix-blend-mode: normal;
            opacity: 0.5;
            margin-bottom:40px;
            background:transparent;
            border: 1px solid #4A4A4A;
            box-sizing: border-box;
            border-radius: 5px;
            padding-left:20px;
            color:#53A8CB;
            ::placeholder{
                color:#9B9B9B;
            }
        }
        select{
            color:#9B9B9B;
            cursor:pointer;
        }
        input,select{
            height:60px;
        }
        textarea{
            padding-top:18px;
        }

        .row{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            input{
                width:280px;
            }
        }

        button{
            margin-bottom:40px;
            display:block;
            cursor:pointer;
        }

        #file{
            width: 165px;
            height: 60px;
            background: #9B9B9B;
            border-radius: 5px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.5;
        }

        #submit{
            width:100%;
            height:60px;
            background: #53A8CB;
            border-radius: 5px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 1px;
            color: #FFFFFF;
            border:none;
        }
    }
}

`;

export const ContactUsFooterWrapper = styled.div`
background: #53A8CB;
padding-top:60px;
padding-bottom:78px;

#Footercontainer{
    width:1200px;
    max-width:1200px;
    margin:0 auto;
    
    h1{
        margin:0;
        margin-left:100px;
        text-align:center;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 1px;
        color: #FFFFFF;
    }

    ul{
        display:flex;
        flex-direction:row;
        list-style:none;
        margin:0;
        padding:0;
        justify-content:space-between;
        margin-top:54px;

        li{
            h2{
                margin:0;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 40px;
                text-align: center;
                letter-spacing: 1px;     
                color: #FFFFFF;   
            }
        }
    }
}






`;