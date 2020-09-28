import React from 'react';
import {Wrapper, LogoInner, Logo, Content, Background1, Background2, Image} from "./UniversityHeader.style"
import Img from "gatsby-image" 

const UniversityHeader = ({ data }) => {

  return (
      <Wrapper>
        <LogoInner>
            <Logo upper><p>WORLD</p></Logo>
            <Logo><p>WORKS</p></Logo>
        </LogoInner>
        <Content>
            <p>{data.title}</p>
        </Content>
        <Background1 />
        <Background2 />
        <Image>
      
          <Img fluid={data.img.src.childImageSharp.fluid} alt={data.img.alt} /> 
        
        </Image>
      </Wrapper>
  );
}
export default UniversityHeader;

