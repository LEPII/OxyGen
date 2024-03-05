import Link from "next/link";

const SigninForm = ({ signInWithEmail, clerkError }) =>
{
    return (
        <div>
            <h1>
                Sign In
            </h1>
            <form
                onSubmit={(e) =>
                {
                    e.preventDefault();
                    const target = e.target;
                    const email = target.email.value;
                    const password = target.password.value;
                    signInWithEmail({ emailAddress: email, password: password });
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
                <h2>
                    {clerkError && <p>{clerkError}</p>}
                </h2>
                <button
                    type="submit">
                    Sign in
                </button>
            </form>
            <p>
                Don&apos;t have an account?
            </p>
            <Link href="/sign-up">
                Sign up
            </Link>
            <Link href="/forgot-password">
                Forgot Your Password?
            </Link>   
        </div>
    );
};

export default SigninForm;
