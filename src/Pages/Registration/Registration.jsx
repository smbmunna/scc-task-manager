import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/UseAuth";

const Registration = () => {
    const {createUser}= useAuth();    
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log("Form Data:", data); // Log form data
        createUser(data.email, data.password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error.message);
        })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <input className="input input-bordered" placeholder="Your Name" required {...register("name", { required: true, maxLength: 20 })} />
                        <input className="input input-bordered" placeholder="Your Email" required {...register("email", { required: true, maxLength: 20 })} />
                        <input className="input input-bordered" placeholder="Password" required type="password" {...register("password", { required: true, maxLength: 20 })} />
                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;