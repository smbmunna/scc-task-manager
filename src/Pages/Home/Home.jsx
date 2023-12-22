import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="grid justify-center my-16">
            <h2 className="text-3xl font-bold">Welcome to task manager</h2>            
            <Link className="btn btn-ghosttext-black my-8" to='/dashboard'>Visit Dashboard</Link>
        </div>
    );
};

export default Home;