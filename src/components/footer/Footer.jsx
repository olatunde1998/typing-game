import React from "react";
import styled from "styled-components";
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const FooterWrapper = styled.footer`
  margin-top: 100px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  border-top: 1px solid grey;
`;
const FooterLogo = styled.div`
  // border: 1px solid red;
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
`;
const Info = styled.div``;
const UnorderList = styled.ul`
  list-style-type: none;
  text-align: left;
  line-height: 20px;
`;
const List = styled.li`
  margin-top: 10px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <SiFacebook  color="white" size={30} />
        <SiLinkedin color="white" size={30} />
        <SiTwitter color=" #00acee" size={30} />
        <a href="https://www.github.com/olatunde1998">
          <SiGithub color="white" size={30}></SiGithub>
        </a>
      </FooterLogo>
      <Info>
        <UnorderList>
          <List>+234-8133-6427-98</List>
          <List>olatunde336@gmail.com</List>
          <List>
            <a href="https://www.github.com/olatunde1998">Github</a>
          </List>
        </UnorderList>
      </Info>
    </FooterWrapper>
  );
};

export default Footer;
