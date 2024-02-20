import Link from "next/link";

const SignupForm = ({ signUpWithEmail, clerkError }) =>
{
    return (
        <div>
            <h1>
                Sign Up
            </h1>
            <form
                onSubmit={(e) =>
                {
                    e.preventDefault();
                    const target = e.target
                    console.log(target)
                    const email = target.email.value;
                    const password = target.password.value;
                    const repeatPassword = target.repeatPassword.value;
                    signUpWithEmail({ emailAddress: email, password: password, repeatPassword: repeatPassword });
                }}>
                <input
                    name="email"
                    placeholder="Email address"
                    type="email"
                    required />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    required />
                <input
                    name="repeatPassword"
                    placeholder="Confirm Password"
                    type="password"
                    required />
                <h2 >
                    {clerkError && <p>{clerkError}</p>}
                </h2>
                <button
                    type="submit">
                    Create an account
                </button>
                <p>
                    Already have an account?
                </p>
                <p>
                    <Link>
                        Login to your account
                    </Link>
                </p>
            </form>

        </div>
    );
};

export default SignupForm
