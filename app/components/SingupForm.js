import Link from "next/link";

const SignupForm = ({ handleSubmit, signUpError }) =>
{
    return (
        <div>
            <form
                onSubmit={(e) =>
                {
                    e.preventDefault();
                    const target = e.target
                    console.log(target)
                    const email = target.email.value;
                    const password = target.password.value;
                    const repeatPassword = target.repeatPassword.value;
                    handleSubmit({ emailAddress: email, password: password, repeatPassword: repeatPassword });
                }}>
                <h1>
                    Sign Up
                </h1>
                <p>Please fill your information below.</p>
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
                    {signUpError && <p>{signUpError}</p>}
                </h2>
                <button
                    type="submit">
                    Create an account
                </button>
                <p>
                    Already have an account?
                </p>
                <p>
                    <Link href="/sign-in">
                        Login to your account
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignupForm
