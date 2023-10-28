import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            alert('user registered successfully')
        })
        .catch(error=> console.error(error))
    }

    
    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
                <form onSubmit={handleSignUp} className="card-body">
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Confirm Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="SignUp" />
                    </div>
                </form>
                <p className='my-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;