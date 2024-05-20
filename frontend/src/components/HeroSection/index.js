import React, { useState, useEffect } from 'react';
import { HomeContainer, HomeBg, HomeContent, HomeLeftContent, HomeRightContent, Title, SubTitle, TextLoop, Span } from "./HomeStyledComponents";
import { Typography } from "@mui/material"; // Use Typography from @mui/material instead of Title
import TypeWriter from 'typewriter-effect';


const HomeSection = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
        const userResponse = await fetch('/users')
        const userData = await userResponse.json()
        const user = userData[0]
        setUser(user)
        console.log(user.skills)
    } 
    catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div id="about">
      <HomeContainer>
        <HomeBg />
        <HomeContent>
          <HomeLeftContent>
            <Title>
                {user.name}
            </Title>
            <TextLoop>
                I am a
                <Span>
                    <TypeWriter
                        options={{
                            strings: ['Software Engineer', 'Full Stack Developer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    
                </Span>
            </TextLoop>
            <SubTitle>
                {user.bio}
            </SubTitle>
          </HomeLeftContent>
          <HomeRightContent>
            {/* Other content */}
          </HomeRightContent>
        </HomeContent>
      </HomeContainer>
    </div>
  );
};

export default HomeSection;

