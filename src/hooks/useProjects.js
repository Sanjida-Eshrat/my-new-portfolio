import {useState, useEffect} from 'react';

const useProjects = () =>{
    const [projects, setProjects] = useState([])
    useEffect(() => {
       fetch('homeProject.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [projects])

    return[projects,setProjects];
}

export default useProjects;