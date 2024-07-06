import { useQuery } from 'react-query';
import axios from 'axios';

const fetchJobs = async () => {
    const { data } = await axios.get('http://localhost:8000/api/jobs/');
    return data;
};

export default function Jobs() {
    const { data, error, isLoading } = useQuery('jobs', fetchJobs);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading jobs</div>;

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {data.map(job => (
                    <li key={job.id}>{job.title} at {job.company}</li>
                ))}
            </ul>
        </div>
    );
}
