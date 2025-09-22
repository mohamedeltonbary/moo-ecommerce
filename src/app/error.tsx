"use client";

import React from "react";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
            <p className="text-gray-600 mt-2">Please try again later.</p>
        </div>
    );
};

export default Error;
