import React from "react";
import Image from "next/image";

const FourCards = () => {
    const cardData = [
        {
            title: "Our Vision",
            content: "To be a proactive, trusted technology partner that propels Maharaju IT Department towards a future of digital excellence and resilience.",
            image: "/path-to-your-image/digital-core.png", // Use relative paths for better optimization
            bgColor: "bg-orange-500",
        },
        {
            title: "Infrastructure Management",
            content: "We manage and maintain the networks, servers, and devices that keep us connected and operational.",
            image: "/path-to-your-image/digital-operating.png",
            bgColor: "bg-blue-500",
        },
        {
            title: "Cybersecurity",
            content: "We protect the organization’s data and systems from cyber threats with robust security measures and continuous monitoring.",
            image: "/path-to-your-image/talent-transformation.png",
            bgColor: "bg-pink-500",
        },
        {
            title: "Software Development",
            content: "We design, develop, and maintain custom software solutions tailored to our organization’s unique needs.",
            image: "/path-to-your-image/new-possibilities.png",
            bgColor: "bg-red-500",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-8">What We Do</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg text-white flex flex-col justify-between h-80 ${card.bgColor} hover:bg-purple-600 transition-colors duration-300`}
                    >
                        <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                        <p className="mb-4 text-sm">{card.content}</p>
                        {card.image && (
                            <div className="relative w-full h-32">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-b-lg"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FourCards;
