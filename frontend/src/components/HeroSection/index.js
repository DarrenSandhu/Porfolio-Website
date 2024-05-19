import React from "react";
import UserDataComponent from "../../data/userData";
import { HomeContainer, HomeBg, HomeContent, HomeLeftContent, HomeRightContent } from "./HomeStyledComponents";
import { Title } from "@mui/icons-material";


const HomeSection = () => {
    return (
        <div id="home">
            <HomeContainer>
                <HomeBg>
                </HomeBg>
                <HomeContent>
                    <HomeLeftContent>
                        <UserDataComponent>
                        </UserDataComponent>
                    </HomeLeftContent>

                    <HomeRightContent>
                    
                    </HomeRightContent>
                </HomeContent>
            </HomeContainer>
        </div>
    );
};

export default HomeSection;