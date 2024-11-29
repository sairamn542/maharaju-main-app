import React from "react";
import Image from "next/image";

const ThreeCards = () => {
    const cardData = [
        { 
            title: "Data Management", 
            content: "We provide insights through data analysis and ensure data integrity for informed decision-making.", 
            image: "/path-to-your-image/iki-thumbnail.png", // Use relative paths for better optimization
            bgColor: "bg-green-500" 
        },
        { 
            title: "User Support", 
            content: "We offer responsive technical support to ensure our colleagues can work efficiently and without interruption.", 
            image: "/path-to-your-image/innovation-fund-thumbnail.png",
            bgColor: "bg-red-500" 
        },
        { 
            title: "Help Desk & Technical Support", 
            content: "Our support team ensures that our users receive prompt assistance and guidance on technical issues.", 
            image: "/path-to-your-image/innovation-network-thumbnail.png",
            bgColor: "bg-yellow-500" 
        },
    ];

    return (
        <div className="w-full flex justify-center p-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
                {cardData.map((card, index) => (
                    <div 
                        className="card1-container" 
                        key={index} 
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div 
                            className={`card1 relative rounded-lg p-6 flex flex-col justify-between shadow-lg overflow-hidden ${card.bgColor}`}
                        >
                            <span className="hover-effect"></span>
                            <div className="card1-content z-10">
                                <h2 className="card1-title text-xl font-bold mb-3 text-white">
                                    {card.title}
                                </h2>
                                <p className="card1-text text-base text-gray-100">
                                    {card.content}
                                </p>
                            </div>
                            {card.image && (
                                <div className="relative w-full h-24">
                                    <Image 
                                        src={card.image} 
                                        alt={card.title} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        className="rounded-b-lg z-10"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeCards;
