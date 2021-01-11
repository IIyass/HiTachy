import styled from 'styled-components'

export const OurProductWrapper = styled.div`
background-color: #DDDDDD;
padding-bottom:42px;
`;

export const OurProductContainer = styled.div`
padding-top:75px;
width:1280px;
max-width:1280px;
margin:0 auto;

.Top{
.hero{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        letter-spacing: 0.7px;
        color: #4A4A4A;
    }

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
}


.GridWrapper{
    display: grid;
    grid-gap: 19px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(160px, auto);
    margin-top:19px;
    margin-bottom:19px;
    h2,span{
        margin-top:40px;
        margin-bottom:0;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        letter-spacing: 0.7px;
        color: #FFFFFF;
    }

    span{
        font-weight: 300;
        font-size: 20px;
        width:165px;
        display:block;
        margin:auto;
    }

    .OneGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column: 1;
        grid-row: 1;
    }

    .TwoGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column:  2;
        grid-row: 1;
    }

    .TreeGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column: 3;
        grid-row: 1;
    }

    .FoorGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column: 4;
        grid-row: 1;
    }

    .FiveGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column: 1/3;
        grid-row: 2;
    }

    .SixGrid{
        background-color: #53A8CB;
        text-align:center;
        grid-column:  3/5;
        grid-row: 2;
    }
}
}

`;


export const EvoContainer = styled.div`
background: #FFFFFF;
border: 2px solid #C8C8C8;
box-shadow: 0px 4px 0px #C8C8C8;
padding-bottom:10px;
.hand{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    margin-top:38px;
    img:first-of-type{
        width:686px;
        height:1084px;
    }
    img{
        width :375px;
        height: 627.69px;
        display:flex;
        margin:auto;
    }
}

.firstSliderBar{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:relative;
    img{
        width :375px;
        height :700px;
        margin:0px 20px;
        :nth-child(1){
            margin-top:40px;
        }
        :nth-child(2){
            margin-top:150px;
        }
        :nth-child(3){
            margin-top:300px;
        }
    }
}

#logo{
    position:absolute;
    bottom:0;
    width: 284px;
    height: 119px;
}


.secondSliderBar{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    img{
        width :375px;
        height :700px;
        margin:0px 20px;
        :nth-child(3){
            margin-top:40px;
        }
        :nth-child(2){
            margin-top:100px;
        }
        :nth-child(1){
            margin-top:150px;
        }
    }
}


.thirdSliderBar{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    img{
        width :375px;
        height :700px;
        margin:0px 20px;
        :nth-child(3){
            margin-top:40px;
        }
        :nth-child(2){
            margin-top:150px;
        }
        :nth-child(1){
            margin-top:100px;
        }
    }
}
`;