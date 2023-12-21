import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {signInUser}= useAuth();
    const { register, handleSubmit } = useForm();
    const navigate= useNavigate();

    const onSubmit = (data) => {
        console.log("Form Data:", data); 
        signInUser(data.email, data.password)
        .then(res=>{
            console.log('Logged In user: ', res.user)
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
        })
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">                        
                        <input className="input input-bordered" placeholder="Your Name" required {...register("email", { required: true, maxLength: 20 })} />
                        <input className="input input-bordered" placeholder="Your Name" required type="password" {...register("password", { required: true, maxLength: 20 })} />
                        <input className="btn btn-primary" type="submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;