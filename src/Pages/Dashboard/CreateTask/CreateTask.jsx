import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CreateTask = () => {
    const { register, handleSubmit } = useForm();
    const navigate= useNavigate();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        axios.post('https://scc-task-manager-server.vercel.app/addTask', data)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Task has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/dashboard/view-task');
            }
        })

    };

    return (
        <div>
            <h2>Create new task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <input className="input input-bordered" placeholder="Title" required {...register("title", { required: true, maxLength: 20 })} />
                <input className="input input-bordered" placeholder="description" required {...register("description", { required: true, maxLength: 20 })} />
                <input className="input input-bordered" type="date" placeholder="deadline" required {...register("deadline", { required: true, maxLength: 20 })} />
                <select {...register("priority")} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    {/* <option value="">Select Priority</option> */}
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default CreateTask;