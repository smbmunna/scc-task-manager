import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { signInUser, googleLogin } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        signInUser(data.email, data.password)
            .then(res => {
                console.log('Logged In user: ', res.user)
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                //redirecting to desired page after login
                navigate(location.state ? location.state : '/');
            })
        // .catch(error => {
        //     setLoginError(error.message);
        // })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login!</h1>                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <input className="input input-bordered" placeholder="Your Name" required {...register("email", { required: true, maxLength: 20 })} />
                            <input className="input input-bordered" placeholder="Your Name" required type="password" {...register("password", { required: true, maxLength: 20 })} />
                            <input className="btn btn-primary" type="submit" />
                        </form>
                        <div>
                            <button
                                onClick={handleGoogleLogin}
                                className="btn text-gray-500 rounded-none  mt-4 w-full ">
                                <FcGoogle className="text-3xl" />  Google Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;