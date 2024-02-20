const VerifyForm = ({ handleVerify, code, setCode }) =>
{
    return (
        <div >
            <h1>
                Verification Code
            </h1>
            <form onSubmit={handleVerify}>
                <input
                    value={code}
                    id="code"
                    name="code"
                    onChange={(e) => setCode(e.target.value)} />
                <button
                    type="submit">
                    Complete sign up
                </button>
            </form>
        </div>
    );
}

export default VerifyForm