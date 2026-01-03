import React from 'react';

export const ProductCardSkeleton = () => {
    return (
        <div className="product-card">
            <div className="relative overflow-hidden bg-gray-200 h-56 animate-pulse">
                <div className="shimmer absolute inset-0"></div>
            </div>
            <div className="p-6 space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center justify-between">
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export const CategoryCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl p-6 text-center animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 mx-auto bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-16 mx-auto bg-gray-200 rounded"></div>
        </div>
    );
};

export const TestimonialSkeleton = () => {
    return (
        <div className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 animate-pulse">
            <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
                ))}
            </div>
            <div className="space-y-3 mb-6">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default { ProductCardSkeleton, CategoryCardSkeleton, TestimonialSkeleton };
