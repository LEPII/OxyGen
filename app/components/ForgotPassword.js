
const ForgotPassword = ({ successfulCreation, create, reset }) =>
{
    return (
        <div>            
            <h1>Forgot Password?</h1>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                }}
                onSubmit={!successfulCreation ? create : reset}
            >
                {!successfulCreation && (
                    <>
                        <label htmlFor='email'>Please provide your email address</label>
                        <input
                            type='email'
                            placeholder='e.g john@doe.com'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <button>Send password reset code</button>
                        {error && <p>{error}</p>}
                    </>
                )}

                {successfulCreation && (
                    <>
                        <label htmlFor='password'>Enter your new password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <label htmlFor='password'>Enter the password reset code that was sent to your email</label>
                        <input
                            type='text'
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                        <button>Reset</button>
                        {error && <p>{error}</p>}
                    </>
                )}
            </form></div>
    )
}

export default ForgotPassword