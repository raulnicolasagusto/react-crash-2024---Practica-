import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJob = async()=>{
            
            
            try {
                const res = await fetch(`http://localhost:3000/jobs/${id}`)
                const data = await res.json();
                setJob(data);
                
            } catch (error) {
                console.log("Error fetching data", error);
                
            }finally{
                setLoading(false);
            }
        }
        fetchJob();
    }, [])
  return (
    <div>
      <h1>{job.title}</h1>
    </div>
  )
}

export default JobPage
