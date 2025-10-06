"use client";
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TemplateAI from '@/components/template-ai';
import OnboardingPreviewPage from '@/components/onboarding-preview';

interface FormData {
  firstName: string;
  lastName: string;
  location?: string;
  title?: string;
  company?: string;
  email: string;
  phone?: string;
}

const OnboardingPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
    
    const onSubmitStep1 = () => {
        setCurrentStep(2);
    };
    
    const onSubmitStep2 = () => {
        setCurrentStep(3);
    };

    return (
        <>
        {currentStep === 3 ? (
        <TemplateAI />
        ) : (
        <div className="flex min-h-screen bg-gray-100 gap-8">
            <div className="flex-1 bg-white rounded-4xl shadow-lg p-8 ">

                <div className="h-10 w-10 rounded-lg border bg-gradient-to-br from-[#52525B] to-[#18181B]">
                </div>
                
                {currentStep === 1 && (
                    <div>
                    <div className="flex items-center gap-8 m-10 ml-28">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#00C5FF] text-white flex items-center justify-center text-sm">1</div>
                            <span className="text-sm font-medium">About</span>
                            </div>
                        <div className="text-gray-400 text-2xl">›</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">2</div>
                            <span className="text-sm text-gray-500">Contact info</span>
                        </div>
                        <div className="text-gray-400 text-2xl">›</div>
                            <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">3</div>
                            <span className="text-sm text-gray-500 font-medium">
                                Template + {" "} <span className="bg-gradient-to-r from-[#0058E6] via-[#E6511E] to-[#F4B400] bg-clip-text text-transparent"> AI </span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold mb-2">Tell us a bit about yourself</h1>
                        <p className="text-gray-600 mb-6">Well use this info to build your page.</p>

                        <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm font-medium mb-2">
                                First name<span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text"
                                placeholder="First name"
                                {...register("firstName", { required: "Required" })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium mb-2">
                                Last name<span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Last name"
                                {...register("lastName", { required: "Required"})}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <input 
                            type="text" 
                            placeholder="Place, City, Country"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input 
                            type="text" 
                            placeholder="Marketing Lead"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Company</label>
                            <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Acme"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            </div>
                        </div>

                        <button 
                            onClick={handleSubmit(onSubmitStep1)}
                            className="w-full bg-[#2C7BDE] text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mt-4"
                        >
                            Continue
                        </button>
                        </div>
                    </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                    <div className="flex items-center gap-8 m-10 ml-28">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#00C5FF] text-white flex items-center justify-center text-sm">1</div>
                            <span className="text-sm font-medium">About</span>
                        </div>
                        <div className="text-gray-400 text-2xl">›</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#00C5FF] text-white flex items-center justify-center text-sm">2</div>
                            <span className="text-sm font-medium">Contact info</span>
                        </div>
                        <div className="text-gray-400 text-2xl">›</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">3</div>
                            <span className="text-sm text-gray-500 font-medium">
                                Template + {" "} <span className="bg-gradient-to-r from-[#0058E6] via-[#E6511E] to-[#F4B400] bg-clip-text text-transparent"> AI </span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-cente px-10 ml-12">
                        <h1 className="text-2xl font-bold mb-2">How can your audience connect with you?</h1>
                        <p className="text-gray-600 mb-8">You can customize the details later.</p>

                        <div className="space-y-6 w-full max-w-md">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                            Email ID<span className="text-red-500">*</span> 
                            </label>
                            <input 
                            type="email" 
                            placeholder="name@domain.com"
                            {...register("email", { required: "Required", validate: (value) => value.includes("@") || "Invalid email"})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Phone number</label>
                            <input 
                            type="tel" 
                            placeholder="(+XX)99999999"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C7BDE]"
                            />
                        </div>

                        <button 
                            onClick={handleSubmit(onSubmitStep2)}
                            className="w-full bg-[#2C7BDE] text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mt-4"
                        >
                            Continue
                        </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>

            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 m-8 h-[calc(100vh-4rem)] overflow-hidden">
            <OnboardingPreviewPage />
            </div>
        </div>
        )}
        </>
    )
}

export default OnboardingPage;