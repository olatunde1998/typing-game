import styled from "styled-components";
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const FooterWrapper = styled.footer`
  margin-top: 60px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  border-top: 1px solid grey;
`;
const FooterLogo = styled.div`
  margin-top: 20px;
  text-align: left;
  margin-left: 30px;
`;
const Contact = styled.h3`
  margin-bottom: 30px;
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
        <Contact>Contact</Contact>
        <SiFacebook size={30} />
        <SiLinkedin style={{ marginLeft: "10px" }} size={30} />
        <SiTwitter style={{ marginLeft: "10px" }} size={30} />
        <a
          href="https://www.github.com/olatunde1998"
          style={{ textDecoration: "none" }}
        >
          <SiGithub
            color="#00acee"
            style={{ marginLeft: "10px" }}
            size={30}
          ></SiGithub>
        </a>
      </FooterLogo>
      <Info>
        <UnorderList>
          <List>+234-8133-6427-98</List>
          <List>
            <a
              href="https://olatunde336@gmail.com"
              style={{ textDecoration: "none", color: "#00acee" }}
            >
              olatunde336@gmail.com
            </a>
          </List>
          <List>
            <a
              href="https://www.github.com/olatunde1998"
              style={{ textDecoration: "none", color: "#00acee" }}
            >
              Github
            </a>
          </List>
        </UnorderList>
      </Info>
    </FooterWrapper>
  );
};

export default Footer;
