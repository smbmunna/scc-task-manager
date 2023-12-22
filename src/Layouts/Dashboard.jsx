import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(res => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const links = <>
        <Link to='create-task'>Create Task</Link>
        <Link to='view-task'>View all Task</Link>
    </>
    return (
        <div className="drawer lg:drawer-open">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {user &&
                <>
                    <img className="w-10 mr-2" src={user?.photoURL} alt="" />
                    <span className="mr-2  text-white dark:text-black">{user?.displayName}</span>
                    <Link onClick={handleLogout} className="btn border-none rounded-none" >Logout</Link>
                </>
            }
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {links}
                </ul>
                <div className="navbar-end">
                    <button onClick={handleLogout} className="btn">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;