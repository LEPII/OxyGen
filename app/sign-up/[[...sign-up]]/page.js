"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import SignupForm from "@/app/components/SingupForm";
import VerifyForm from "@/app/components/VerifyForm";

const Signup = () =>
{

    const { isLoaded, signUp, setActive } = useSignUp();
    const [clerkError, setClerkError] = useState("");
    const router = useRouter();
    const [verifying, setVerifying] = useState(false);
    const [code, setCode] = useState("");
    const [signUpError, setSignUpError] = useState("")

    const isValidPassword = (password) =>
    {
        const passwordRegex = /^[a-zA-Z0-9]{10,}$/;
        return passwordRegex.test(password);
    };

    const isValidEmail = (email) =>
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async ({
        emailAddress,
        password,
        repeatPassword,
    }) =>
   
    {
        if (!isLoaded || !emailAddress || !password || !repeatPassword)
        {
            setSignUpError("Please fill out all required fields");
            return;
        }
        if (password !== repeatPassword)
        {
            setSignUpError("Passwords do not match");
            return;
        }
        if (!isValidPassword(password))
        {
            setSignUpError("Password must include at least 10 characters, and only letters and numbers");
            return;
        }
        if (!isValidEmail(emailAddress))
        {
            setSignUpError("Invalid email address");
            return;
        }

        try
        {
            await signUp.create({
                emailAddress,
                password,
            });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setVerifying(true);
        } catch (error)
        {
            if (error.response && error.response.status === 409)
            {
                setSignUpError("Account already exists with the provided email address");
            } else if (error.response && error.response.status === 401)
            {
                setSignUpError("Incorrect email/password combination");
            } else
            {
                setSignUpError("Network error. Please try again later.");
            }
        }
    };

    const handleVerify = async (e) =>
    {
        e.preventDefault();
        if (!isLoaded) return;

        try
        {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });
            if (completeSignUp.status !== "complete")
            {
                console.log(JSON.stringify(completeSignUp, null, 2));
            }

            if (completeSignUp.status === "complete")
            {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push("/");
            }
        } catch (err)
        {
            console.log("Error:", JSON.stringify(err, null, 2));
        }
    };

    return (
        <>
            {!verifying ?
                (<SignupForm handleSubmit={handleSubmit} signUpError={signUpError} />) :
                (<VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />)
            }
        </>
    )

};

export default Signup;
