import React, { useState } from 'react';
import { BsBookmark, BsBookmarkFill} from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import Image from "next/image";


interface SchoolCardProps {
    schoolName: string;
    schoolCity: string;
    googleMapLocation: string;
    initialFavorited: boolean;
    rating: number;
    description: string;

}
const SchoolCard = ({ schoolName, schoolCity, googleMapLocation, initialFavorited, rating, description }: SchoolCardProps) => {
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
                <Image src="https://img.freepik.com/vecteurs-libre/creation-logo-ecole-elementaire-degrade_23-2149626923.jpg?w=740&t=st=1680121070~exp=1680121670~hmac=d7f57a77286878f9108cc915b08c20c0b730a50ec7fe2c1d7cb82d31e03272b8"  width={80} height={80} alt="School" />
            </div>
            <div className="school-info">
                <h2 className="school-name">{schoolName}</h2>
                <div className="buttons">
                    <a className="city-button" href={`https://www.google.com/maps?q=${googleMapLocation}`} target="_blank" rel="noreferrer">
                        <BiMap className="map-icon" />
                        {schoolCity}
                    </a>
                    <a className="favorite-button" href = "#"  target="_blank" rel="noreferrer"><BsBookmark className="bookmark-icon" />Add to Favourites
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


