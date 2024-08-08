import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import backgroundImage from '../assets/pexels-fauxels-3183150.jpg'; 

const teamMembers = [
  { name: 'Sagar Trushna Panigrahi', role: 'Developer', email: 'sagar.trushnapanigrahi2002@gmail.com', linkedin: 'https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/' },
  { name: 'Amit Kumar Mahapatra', role: 'Project Associate', email: 'amitkumarmahapatra2@gmail.com', linkedin: 'https://www.linkedin.com/in/amit-kumar-mahapatra-7b4989274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Kalpajit Jena', role: 'Backend Developer', email: 'kalpajitjena00@gmail.com', linkedin: 'https://linkedin.com/in/kalpajit' },
  { name: 'Amit Kumar Jena', role: 'Quality Assurance (QA) Engineer', email: 'amitjena175@gmail.com', linkedin: 'https://linkedin.com/in/amitk' },
];

const containerVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (index) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

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
            onClick={() => handleCardClick(index)}
            whileHover="hover"
            variants={cardVariants}
            selected={selectedMember === index}
          >
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {selectedMember === index && (
              <Details>
                <p>Email: {member.email}</p>
                <p>
                  LinkedIn: <a href={member.linkedin} target="_blank" rel="noopener noreferrer">{member.linkedin}</a>
                </p>
              </Details>
            )}
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

  @media (max-width: 480px) {
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const TeamList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  cursor: pointer;
  overflow: hidden;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    word-wrap: break-word;
  }

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Details = styled.div`
  margin-top: 1rem;

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    word-wrap: break-word;

    a {
      color: #fff;
      text-decoration: underline;

      &:hover {
        color: #ddd;
      }
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default Team;
