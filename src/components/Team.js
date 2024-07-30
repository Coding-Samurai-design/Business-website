import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/pexels-fauxels-3183150.jpg'; 

const teamMembers = [
  { name: 'Sagar Trushna Panigrahi', role: 'Developer' },
  { name: 'Amit Kumar Mahapatra', role: 'Project Associate' },
  { name: 'Kalpajit Jena', role: 'Backend Developer' },
  { name: 'Amit Kumar Jena', role: 'Quality Assurance (QA) Engineer' },
];

const containerVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Team = () => {
  return (
    <TeamContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1>Our Team</h1>
      <p>Meet the professionals behind our success.</p>
      <TeamList>
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            whileHover="hover"
            variants={cardVariants}
          >
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </TeamCard>
        ))}
      </TeamList>
    </TeamContainer>
  );
};

const TeamContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
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

const TeamList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7); 
  color: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }
`;

export default Team;
