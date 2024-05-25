import { useState, useEffect } from 'react';

export const useApi = () => {
  const [educations, setEducations] = useState([]);
  const [programming, setProgramming] = useState([]);
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: 'Basic ' + btoa('darren:0800')
      };

      const educationResponse = await fetch('http://api.darrensandhu.uk/education/', { headers });
      const educationData = await educationResponse.json();
      setEducations(educationData);

      const programmingResponse = await fetch('http://api.darrensandhu.uk/programming/', { headers });
      const programmingData = await programmingResponse.json();
      setProgramming(programmingData);

      const userResponse = await fetch('http://api.darrensandhu.uk/users/', { headers });
      const userData = await userResponse.json();
      setUser(userData);

      const skillsResponse = await fetch('http://api.darrensandhu.uk/skills/', { headers });
      const skillsData = await skillsResponse.json();
      setSkills(skillsData);

      const experienceResponse = await fetch('http://api.darrensandhu.uk/experience/', { headers });
      const experienceData = await experienceResponse.json();
      setExperience(experienceData);

      const projectsResponse = await fetch('http://api.darrensandhu.uk/projects/', { headers });
      const projectsData = await projectsResponse.json();
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { educations, programming, user, skills, experience, projects };
};
