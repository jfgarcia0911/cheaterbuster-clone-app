"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db, googleProvider } from "@/firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { UserCredential, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@/components/icons/GoogleIcon";
import useScrollDirection from "@/hooks/useScrollDirection";

interface FormData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
}

export default function SignupPage() {
	const { user } = useAuth();
    const isScrollingDown = useScrollDirection();
  
	console.log(user);
	const [createUserWithEmailAndPassword, , loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));

		if (errors[id as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [id]: "" }));
		}
	};

	const handleSignin = () => {
		router.push("/signin");
	};

	const validateForm = (): boolean => {
		const newError: FormErrors = {};

		if (!formData.name.trim()) {
			newError.name = "Name is required";
		}
		if (!formData.email.trim()) {
			newError.email = "Email is required";
		}
		if (!formData.password) {
			newError.password = "Password is required";
		} else if (formData.password.length < 6) {
			newError.password = "Password must be at least 6 characters";
		}
		if (!formData.confirmPassword) {
			newError.confirmPassword = "Please confirm your password";
		} else if (formData.password !== formData.confirmPassword) {
			newError.confirmPassword = "Password do not match";
		}

		setErrors(newError);
		return Object.keys(newError).length === 0;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		try {
			const res: UserCredential | undefined =
				await createUserWithEmailAndPassword(formData.email, formData.password);

			if (res?.user) {
				await setDoc(doc(db, "cheater-users", res.user.uid), {
					uid: res.user.uid,
					displayName: formData.name,
					email: formData.email,
					photoURL: "",
					isAdmin: false,
					provider: "email",
					createdAt: new Date(),
				});
				console.log("User created and saved to Firestore:", res.user);
				alert("Account created successfully! Your data has been saved.");
				router.push("/signin");
			}
		} catch (err) {
			console.error("Signup error:", err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
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

	useEffect(() => {
		if (user) {
			router.push("/");
		}
	}, [user, router]);

	return (
		<div className={`p-10 flex justify-center diagonal-overlay w-full ${isScrollingDown ? "mt-20" : ""}` }>
			<div className="flex flex-col items-center mt-5">
				<h1 className="text-white font-bold tracking-tight text-5xl">
					JOIN THE <span className="text-red-500">HUNT</span>
				</h1>
				<p className="text-white/80 mt-4 mb-8 tracking-widest">
					Create your account and start uncovering the truth
				</p>

				<div className="border border-gray-800 rounded-xl w-120 p-5 bg-foreground text-white/70">
					<form onSubmit={handleSubmit} className="">
						<label htmlFor="name" className="block text-sm font-bold mb-2">
							Your Name
						</label>
						<input
							id="name"
							type="text"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your name"
							className={`bg-black/80  w-full border rounded-xl p-2 pl-3 border-gray-800 focus:outline-none tracking-widest ${
								errors.name
									? "border-red-500 focus:border-red-500"
									: "focus:ring-1 focus:ring-blue-400 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">{errors.name}</p>

						<label htmlFor="email" className="block text-sm font-bold mb-2">
							Email Address
						</label>
						<input
							id="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							className={`bg-black/80 w-full border rounded-xl p-2 pl-3 border-gray-800 focus:outline-none tracking-widest ${
								errors.email
									? "border-red-500 focus:border-red-500"
									: "focus:ring-1 focus:ring-blue-400 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">{errors.email}</p>

						<label htmlFor="password" className="block text-sm font-bold mb-1">
							Password
						</label>
						<input
							id="password"
							type="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="At least 6 characters"
							className={`bg-black/80 w-full border rounded-xl p-2 pl-3 border-gray-800 focus:outline-none tracking-widest ${
								errors.password
									? "border-red-500 focus:border-red-500"
									: "focus:ring-1 focus:ring-blue-400 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">{errors.password}</p>

						<label
							htmlFor="confirmPassword"
							className="block text-sm font-bold mb-1"
						>
							Confirm password
						</label>
						<input
							id="confirmPassword"
							type="password"
							value={formData.confirmPassword}
							onChange={handleChange}
							placeholder="Confirm your password"
							className={`bg-black/80 w-full border rounded-xl p-2 pl-3 border-gray-800 focus:outline-none tracking-widest ${
								errors.confirmPassword
									? "border-red-500 focus:border-red-500"
									: "focus:ring-1 focus:ring-blue-400 mb-2"
							}`}
						/>
						<p className="text-red-500 mb-2 mt-1 text-sm">
							{errors.confirmPassword}
						</p>

						<button
							type="submit"
							disabled={isSubmitting || loading}
							className="bg-red-600 text-white font-bold p-3 w-full rounded-xl mt-2  cursor-pointer disabled:opacity-50 hover:[box-shadow:0_6px_10px_rgba(255,0,0,0.4)]"
						>
							{isSubmitting ? (
								<div className="flex items-center justify-center space-x-2">
									<div className="w-6 h-6 border-4 border-white/60 border-t-transparent rounded-full animate-spin"></div>
									<span>Creating Account...</span>
								</div>
							) : (
								"Create account"
							)}
						</button>
					</form>
					<div className="relative mt-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-800"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-3 bg-foreground text-gray-500 tracking-wider">
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
						onClick={handleSignin}
						className="mt-6 text-center text-gray-500 text-sm"
					>
						<span>Already have an account? </span>
						<span className="text-red-500 cursor-pointer">Sign in</span>
					</div>
				</div>
			</div>
		</div>
	);
}
