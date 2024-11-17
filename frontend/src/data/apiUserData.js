import { useState, useEffect } from 'react';

export const useApi = () => {
  const [educations, setEducations] = useState([]);
  const [programming, setProgramming] = useState([]);
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://api.darrensandhu.uk/users/', {
        headers: {
          Authorization: 'Basic ' + btoa('darren:0800')
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      const user = userData[0];
      setUser(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: 'Basic ' + btoa('darren:0800')
      };

      const educationResponse = await fetch('https://api.darrensandhu.uk/education/', { headers });
      const educationData = await educationResponse.json();
      setEducations(educationData);

      const programmingResponse = await fetch('https://api.darrensandhu.uk/programming/', { headers });
      const programmingData = await programmingResponse.json();
      setProgramming(programmingData);

      const skillsResponse = await fetch('https://api.darrensandhu.uk/skills/', { headers });
      const skillsData = await skillsResponse.json();
      setSkills(skillsData);

      const experienceResponse = await fetch('https://api.darrensandhu.uk/experience/', { headers });
      const experienceData = await experienceResponse.json();
      setExperience(experienceData);

      const projectsResponse = await fetch('https://api.darrensandhu.uk/projects/', { headers });
      const projectsData = await projectsResponse.json();
      setProjects(projectsData);

      const response = await fetch('https://api.darrensandhu.uk/categories/');
      const categoryData = await response.json();
      const categoryNames = categoryData.map((category) => category.name);
      const filteredCategoryNames = ['all', ...categoryNames];
      setCategories(filteredCategoryNames);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { educations, programming, user, skills, experience, projects, categories };
};
