import { useState, useEffect } from 'react';

const UserDataComponent = () => {
    const [educations, setEducations] = useState([])
    const [programming, setProgramming] = useState([])
    const[user, setUser] = useState({})
    const[skills, setSkills] = useState([])
    const[experience, setExperience] = useState([])
    const[projects, setProjects] = useState([])

    useEffect(() => {
    getDate()
    }, [])

    const getDate = async () => {
        const educationResponse = await fetch('/education')
        const educationData = await educationResponse.json()
        setEducations(educationData)

        const programmingResponse = await fetch('/programming')
        const programmingData = await programmingResponse.json()
        setProgramming(programmingData)

        const userResponse = await fetch('/users')
        const userData = await userResponse.json()
        setUser(userData)

        const skillsResponse = await fetch('/skills')
        const skillsData = await skillsResponse.json()
        setSkills(skillsData)

        const experienceResponse = await fetch('/experience')
        const experienceData = await experienceResponse.json()
        setExperience(experienceData)

        const projectsResponse = await fetch('/projects')
        const projectsData = await projectsResponse.json()
        setProjects(projectsData)
    }

}

export default UserDataComponent;