import axios from "axios";
import Swal from "sweetalert2";


const Task = ({ task }) => {
    const { _id, title, description, deadline } = task;
    const handleDelete = (id) => {
        axios.delete(`https://scc-task-manager-server.vercel.app/tasks/delete/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Deleted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    window.location.reload();
                }
            })

    }
    return (
        <div>
            <div className="card w-48 my-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <br />
                    <p>Deadline: {deadline}</p>
                    <div className="card-actions  grid">
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;