"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, googleProvider, db } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { UserCredential } from "firebase/auth";
import useScrollDirection from "@/hooks/useScrollDirection";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
interface FormData {
	email: string;
	password: string;
}

interface FormErrors {
	email?: string;
	password?: string;
}

export default function SignInPage() {
	const isScrollingDown = useScrollDirection();
	const [rememberMe, setRememberMe] = useState(true);
	const { user } = useAuth();
	const [signInWithEmailAndPassword, , loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));

		if (errors[id as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [id]: "" }));
		}
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);

		try {
      // Set persistence based on checkbox value
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
			const res: UserCredential | undefined = await signInWithEmailAndPassword(
				formData.email,
				formData.password,
			);

			if (res?.user) {
				console.log("User signed in:", res.user);
				router.push("/");
			}
		} catch (err) {
			setErrors({
				password:
					"The email or password you entered is incorrect. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
			const res = await signInWithPopup(auth, googleProvider);
			const user = res.user;

			const userDoc = await getDoc(doc(db, "amazon-users", user.uid));
			if (!userDoc.exists()) {
				await setDoc(doc(db, "amazon-users", user.uid), {
					uid: user.uid,
					displayName: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
					isAdmin: false,
					provider: "google",
					createdAt: new Date(),
				});
				console.log("New user created in Firestore");
			}
			router.push("/");
		} catch (err) {
			setErrors({
				password: `Google sign-in error: ${err instanceof Error ? err.message : "Unknown error"}`,
			});
		}
	};

	const handleSignup = () => {
		router.push("/signup");
	};

	useEffect(() => {
		if (user) {
			router.push("/");
		}
	}, [user, router]);
	return (
		<div
			className={`${isScrollingDown ? "mt-20" : ""} p-20  flex justify-center w-full  diagonal-overlay `}
		>
			<div className="space-y-4 flex flex-col items-center">
				<h1 className="text-white font-bold tracking-tight text-5xl">
					WELCOME <span className="text-red-500">BACK</span>
				</h1>
				<p className="text-white">Sign in to continue your investigation</p>
				<div className="border border-gray-800  bg-foreground rounded-xl w-90 mt-4 p-5 text-white/70">
					<form onSubmit={handleSubmit}>
						{error && (
							<div className="border border-red-500 bg-red-500/20 mb-4  rounded-lg p-3 ">
								<p className="text-red-400 font-semibold text-sm">
									Invalid email or password
								</p>
							</div>
						)}
						<label htmlFor="email" className="block text-sm font-bold mb-1">
							Email address
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 top-5 left-0 pl-3 flex items-center pointer-events-none">
								<Mail size={18} className="text-gray-400" />
							</div>
						</div>
						<input
							id="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							className={`w-full border border-gray-800 rounded-lg p-2 pl-10  focus:outline-none ${
								errors.email
									? "border-red-500 focus:border-red-500"
									: "focus:ring-2 focus:ring-red-800 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">{errors.email}</p>

						<label htmlFor="password" className="block text-sm font-bold mb-1">
							Password
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 top-5 left-0 pl-3 flex items-center pointer-events-none">
								<Lock size={18} className="text-gray-400" />
							</div>
						</div>
						<input
							id="password"
							type="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							className={`w-full border rounded-lg p-2 pl-10 border-gray-800 focus:outline-none ${
								errors.password
									? "border-red-500 focus:border-red-500"
									: "focus:ring-2 focus:ring-red-800 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">{errors.password}</p>

						<div className="flex items-center justify-between mb-4">
							<label className="flex items-center space-x-2 text-sm">
								<input
									type="checkbox"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									className="h-4 w-4 rounded border text-red-600 focus:ring-red-500"
								/>
								<span>Remember me</span>
							</label>
						</div>
						<button
							type="submit"
							disabled={isSubmitting || loading}
							className="bg-red-600 text-white font-bold p-3 w-full rounded-xl mt-2  cursor-pointer disabled:opacity-50 hover:[box-shadow:0_6px_10px_rgba(255,0,0,0.4)]"
						>
							{isSubmitting ? (
								<div className="flex items-center justify-center space-x-2">
									<div className="w-6 h-6 border-4 border-white/60 border-t-transparent rounded-full animate-spin"></div>
									<span>Signing in...</span>
								</div>
							) : (
								"Sign in"
							)}
						</button>
					</form>
					<div className="relative mt-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-800"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-3 bg-foreground text-gray-500">
								or continue with
							</span>
						</div>
					</div>
					<div
						onClick={handleGoogleSignIn}
						className="mt-6 flex items-center justify-center space-x-1 border p-2 border-gray-800 rounded-lg text-sm cursor-pointer gap-1 bg-black/80"
					>
						<GoogleIcon className="h-4 w-4 " />
						<span>Google</span>
					</div>
					<div
						onClick={handleSignup}
						className="mt-6 text-center text-gray-500 text-sm"
					>
						<span>Don&apos;t have an account? </span>
						<span className="text-red-500 cursor-pointer">Sign up</span>
					</div>
				</div>
			</div>
		</div>
	);
}
