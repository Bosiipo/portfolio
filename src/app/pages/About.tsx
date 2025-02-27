import Layout from "../components/Layout/Layout";
import PageCard from "../components/PageCard/PageCard";
import me2 from "../assets/images/me2.jpg";
import styled from "styled-components";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import git from "../assets/icons/git.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import typescript from "../assets/icons/typescript.svg";
import express from "../assets/icons/express.svg";

const About = () => {
  return (
    <Layout>
      <PageCard>
        <Header>About me</Header>
        <AboutMe>
          <div>
            <Img src={me2} alt="" />
          </div>
          <TextDiv>
            <p>
              Hello! My name is Olabosipo, a creative Frontend Engineer based in
              Lagos, Nigeria. I develop responsive, pixel perfect websites and
              web applications, and also provide web based solutions. I mainly
              work as a Frontend Engineer, but have hands on experience working
              on the backend of products.
            </p>
            <p>Here are some of the tools I use for development</p>

            <Tech>
              <img src={html} alt="html" title="HTML" />
              <img src={css} alt="css" title="CSS" />
              <img src={git} alt="git" title="Git" />
              <img src={javascript} alt="javascript" title="JavaScript" />
              <img src={react} alt="react" title="ReactJS" />
              <img src={node} alt="node" title="nodeJS" />
              <img src={typescript} alt="typescript" title="TypeScript" />
              <img src={express} alt="express" title="Express" />
            </Tech>
          </TextDiv>
        </AboutMe>
      </PageCard>
    </Layout>
  );
};

export default About;

const AboutMe = styled.div`
  display: grid;
  justify-items: center;

  @media only screen and (min-width: 1300px) {
    grid-template-columns: 1fr 2fr;
    margin: 0 50px;
    justify-items: left;
  }
  @media only screen and (min-width: 950px) and (max-width: 1299px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 50px;
    justify-items: left;
  }
`;
const Img = styled.img`
  border-radius: 2rem;
  width: 300px;
  height: 300px;
  object-fit: cover;

  @media only screen and (max-width: 370px) {
    width: 250px;
    height: 250px;
  }
  @media only screen and (max-width: 310px) {
    width: 220px;
    height: 220px;
  }
`;

const Header = styled.h1`
  margin-bottom: 30px;
  margin-left: 100px;

  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;
const TextDiv = styled.div`
  font-size: 13px;
  p {
    @media only screen and (min-width: 800px) {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  img {
    height: 37px;
    width: 50px;

    @media only screen and (min-width: 800px) {
      height: 47px;
      width: 60px;
    }
  }
`;
