import React, { useState, useEffect } from 'react';
import { HomeContainer, HomeBg, HomeContent, HomeLeftContent, HomeRightContent, Title, SubTitle, TextLoop, Span, ResumeButton, Image, ImageContainer } from "./HomeStyledComponents";
import TypeWriter from 'typewriter-effect';
import ImageBackground from '../AnimatedBackground';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';


const HomeSection = ({ userData }) => {
  const user = userData;  
  const skills = userData.skills;

  return (
    <div id="about" >
      <HomeContainer>
        <HomeBg>
            <ImageBackground />
        </HomeBg>
        <HomeContent>
          <HomeLeftContent>
            <Title>
                Hi 👋, <br />
                I am {user.name}
            </Title>
            <TextLoop>
                I am a
                <Span>
                    <TypeWriter
                        options={{
                            strings: skills,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    
                </Span>
            </TextLoop>
            <SubTitle>
                {user.bio?.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
            </SubTitle>
            <ResumeButton as={Link} to="/resume">
                Check My CV
            </ResumeButton>
          </HomeLeftContent>
          <HomeRightContent>
            <Tilt>
                <Image src={user.image} alt="profile" />
            </Tilt>
          </HomeRightContent>
        </HomeContent>
      </HomeContainer>
    </div>
    
  );
};

export default HomeSection;

