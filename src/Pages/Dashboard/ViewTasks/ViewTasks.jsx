import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../Task/Task";

const ViewTasks = () => {
    const [tasksLow, setTasksLow] = useState([]);
    
    useEffect(() => {
        axios.get('https://scc-task-manager-server.vercel.app/allTasks')
            .then(res => {
                setTasksLow(res.data)
            })
        
    }, [])

    return (
        <div className="grid grid-cols-3 gap-16">
            <div>
                <h2>Ongoing</h2>
                {
                    tasksLow.map(task => <Task key={task._id} task={task} />)
                }
            </div>
            <div>
                <h2>Completed</h2>
                {
                    //tasksHigh.map(task => <Task key={task._id} task={task} />)
                }
            </div>            
        </div>
    );
};

export default ViewTasks;