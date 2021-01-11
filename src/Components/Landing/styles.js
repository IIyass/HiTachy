import styled, { keyframes, css } from 'styled-components'


const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity:0.5;
  }

  to {
    transform: translateX(0);
    opacity:1;
  }
`;

const Visibility = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const OpacityAnimation = css`
animation-duration: 1.5s;
animation-timing-function: ease-in; 
animation-delay: 0s; 
animation-iteration-count: 1; 
animation-name:${Visibility}; 
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity:0.5;
  }

  to {
    transform: translateX(0);
    opacity:1;
  }
`;

const LeftAnimation = css`
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-delay: 0s; 
animation-iteration-count: 1; 
animation-name:${slideInFromLeft}; 
`;

const RightAnimation = css`
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-delay: 0s; 
animation-iteration-count: 1; 
animation-name:${slideInFromRight}; 
`;

const UI_UX = css`
  height:150px;
  margin:0;
  with:auto;
  font-family:Rubik Mono One ;
  font-style: normal;
  font-weight: 400;
  font-size: 180px;
  line-height: 175px;
  background: linear-gradient(200deg, #8881B9, #EC99BA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;   
`;

export const HeroWrapper = styled.div`
display:flex;
height:100vh;

#container{
margin:auto;
width:100%;

 

.imageContainer{
  display:flex;
  width: 59.99px;
  height: 60px;
  background: #F3F3F3;
  border-radius: 50%;
  margin:0 15px;
}

#socialTop{
      display:flex;
      flex-direction:row;
      width:max-content;
      margin-left:0px;

      img{
        width: 80%;
        height: 80%;
        margin:auto;
      }
}

#socialBottom{
  display:flex;
  flex-direction:row;
  width:max-content;
  margin-left:60%;

  img{
    width: 50%;
    height: 50%;
    margin:auto;
  }
  #finalPattern{
    width: 354.94px;
    height: 85px;
  }
}
 

h1{
  font-family: Gotham;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 50px;
  color: #164664;
  margin-bottom:50px;
  ${LeftAnimation};
}
>div{
    width:825px;
    height:auto;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;


    .pattern{
      width:275.95px;
      height:276px;
      position:relative;
      img{
        width:100%;
        height:100%;
        position:absolute;
      }

      #pattern2{
        bottom:130px;
      }
         
    h2{    
      position:absolute;
      width:225px;
      right:0;
      ${LeftAnimation};
      ${UI_UX}; 
    }

    h4{
      width:300px;
      ${UI_UX};
      ${RightAnimation};
      padding-left:45px;
    }
  }
    img{
      width: 164.84px;
      height: 195.98px;
      ${OpacityAnimation};
    }
}

h3{
font-family: Inter;
width:800px;
margin:0 auto;
text-align:right;
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 100px;
color: #53A8CB;
${RightAnimation};
}

}
`;




export const ProjectWrapper = styled.div`
background-color: #F3F3F3;

`;
export const ProjectContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding: 93px 0px;
.OneProject{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  a{
    text-decoration:none;
  }
  h1{
font-family: Roboto;
margin-top:0px;
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 59px;
color: #3D464D;
  }

  img{
    width:560.29px;
    height:616.32px;
}

h2{
font-family: Helvetica;
font-style: normal;
margin-bottom:0;
font-weight: bold;
font-size: 22.4116px;
line-height: 26px;
text-align: center;
color: #4A4A4A;
}

}


.TwoProject{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}


.Project{
    width: 616.32px;
    height: 373.53px;
  img{
    width: 100%;
    height: 100%;
  }
}


`;


export const ServiceWrapper = styled.div`
padding-top:80px;
padding-bottom:151px;
h1{
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 59px;
color: #3D464D;
margin-bottom:60px;
margin-top:0px;
}

.list{
display:flex;
flex-direction:row;
margin-top:50px;
 ul{ 
  width: 380.63px;
  height: 400px;
  list-style:none;
  padding:0;
  margin:0;
  border-right:4px solid #000000;

  li{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 80px;
color: #072E4B;
}

}

.text{
  margin-left:40px;
  width:620px;

  p{
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #3D464D;
  }

  >div{
    display:flex;
    flex-direction:row;
    margin-top:40px;
    img{
      margin-right:51px;
      height:100px;
    }
  }

}
}
`;

export const AboutWrapper = styled.div`
background-color:#F3F3F3;
padding:100px 0px;

`;
export const AboutContainer = styled.div`
border: 2px solid #4A4A4A; 
position:relative;
padding-left:50px;
padding-bottom:50px;
h1{
width:198px;
padding:0px 30px;
height:40px;
position:absolute;
top:-25px;
left:18px;
background-color:#F3F3F3;
margin:0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 40px;
color: #3D464D;
}

h2{

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 38px;
  color: #47525D;
  margin:45px 0px;

}

span,p,h3{
font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 34px;
color: #47525D;
}

p{
  margin:0;
  margin-bottom:40px;
}

.firstType{
  margin-top:40px;
}
span{
  margin-bottom:30px;
}
h3{
  margin:0;
  font-weight: 700;
}

.footer{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}
.profil{
width:250px;
text-align:center;
margin-right:70px;
h4{
margin:0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
color: #3D464D;
}

  p{
margin:0;
margin-top:10px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #47525D;
  }
}

.service{
  width:760px;
}
`;