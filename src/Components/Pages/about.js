import React from 'react';
import BackGroundImage from '../Backgroundimage/backGroundImage';
import styled from 'styled-components'
import BackgroundImage from "../../Images/AdobeStock_237533217.png";
import YellowStroke from "../../Images/YellowStroke.svg";
import { Container } from '@material-ui/core';

export const About = () => {
    return (
        <div>
        
  
   <BackGroundImage/>
   
<AboutCarddiv>
<Container className='container'>
<h1 className='title'>Unser Team</h1>
<div className='dash'><img src={YellowStroke}></img></div>
<p >
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy 
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummynibh 
</p>
</Container>
<Container  className='container'>
    <img src={BackgroundImage}></img>
</Container>

</AboutCarddiv>


<AboutCarddiv    style={{ marginTop: '70px'} }>

<Container style={{paddingLeft:'12px'}} className='container'>
    <img src={BackgroundImage}></img>
</Container>

<Container style={{marginLeft:'20px'}}className='container'>
<h1 className='title'>Unser Team</h1>
<div className='dash'><img src={YellowStroke}></img></div>
<p >
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy 
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummynibh 
</p>
</Container>


</AboutCarddiv>
            
        </div>
    );
};
export default About;

const AboutCarddiv= styled.div`
width:100%;
margin: -13px;
display: inline-flex;
padding-top: 30px;
.container{
    width:50%;
    overflow: hidden;
    height: 300px;
    
}
.title{
    padding: 0px;
    margin-top: 0px;
}

.dash{width: 14%;
    margin-top: -20px;
    }
`