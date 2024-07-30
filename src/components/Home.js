import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Home = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Creating a unique, fully customized website tailored to the client specific needs and brand. This includes designing and developing the website from scratch, ensuring it aligns with the client\'s vision and business goals.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Developing online stores that provide a seamless shopping experience for customers. This includes setting up and customizing e-commerce platforms like Shopify, WooCommerce, or Magento, and integrating essential features for online sales.',
    },
    {
      title: 'Website Maintenance and Updates',
      description: 'Providing ongoing support and updates to ensure the website remains functional, secure, and up-to-date. This service includes regular backups, security updates, performance optimization, and content updates as needed.',
    },
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VideoContainer>
        <video autoPlay loop muted>
          <source src="/3141208-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      <Main>
        <HeroSection>
          <HeroContent>
            <h1>Coding Samurai</h1>
            <p>Designed and deployed many responsive websites for small to medium-sized businesses, enhancing their online presence and increasing their sales by 20% each.</p>
          </HeroContent>
        </HeroSection>
        <Cards
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              whileHover={{ scale: 1.05 }}
              variants={cardVariants}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </Cards>
      </Main>
      <Footer>
        <p>© 2024 Coding Samurai. All rights reserved.</p>
      </Footer>
    </HomeContainer>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 100px; 
  position: relative;
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6; 
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: transparent;
  color: white;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  padding: 4rem 0;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7); 
  }

  p {
    font-size: 1.2rem;
    color: #ddd; 
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Cards = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7); 
  color: #fff; 
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1rem;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

const Footer = styled.footer`
  padding: 1rem;
  background-color: transparent; 
  color: #fff;
  text-align: center;
  box-shadow: none; 
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.7);
`;

export default Home;
