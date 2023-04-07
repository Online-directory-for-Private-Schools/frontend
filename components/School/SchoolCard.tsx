import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import Image from "next/image";
import Logo from "@/public/School_Logo.svg"

interface SchoolCardProps {
    schoolName: string;
    schoolCity: string;
    googleMapLocation: string;
    initialFavorited: boolean;
    rating: number;
    description: string;

}
const SchoolCard = ({SchoolProps: { schoolName, schoolCity, googleMapLocation, initialFavorited, rating, description }} : {
    SchoolProps: SchoolCardProps
}) => {
    const [favorited, setFavorited] = useState(initialFavorited);
    const toggleFavorite = () => {
        setFavorited(!favorited);
    };

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <AiTwotoneStar
                    key={`star-${i}`}
                    className={`star-icon ${i <= rating ? 'filled' : ''}`}
                />
            );
        }
        return stars;
    };


    return (
        <div className="school-card">
            <div className="school-image">
                <Image src={Logo.src}  width={80} height={80} alt="School" />
            </div>
            <div className="school-info">
                <h2 className="school-name">{schoolName}</h2>
                <div className="buttons">
                    <a className="city-button" href={`https://www.google.com/maps?q=${googleMapLocation}`} target="_blank" rel="noreferrer">
                        <BiMap className="map-icon" />
                        {schoolCity}
                    </a>
                    <a className="favorite-button" href = "#"  target="_blank" rel="noreferrer" onClick={toggleFavorite}><BsBookmark className="bookmark-icon" />Add to Favourites
                    </a>
                </div>
                <div className="review-stars">
                    {renderStars(rating)}
                </div>
            </div>
            <div className='desc'>
                <p className="school-description">{description}</p>
            </div>

        </div>
    );
};

export default SchoolCard;


