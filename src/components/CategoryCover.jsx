import  { useState } from 'react';
import PropTypes from 'prop-types';

function CategoryCover({ img, name }) {
    const [isHovered, setIsHovered] = useState(false);

    const CategoryCoverStyle = {
        container: {
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '7rem',
            height: '7rem',
            borderRadius: '1rem',
            cursor: 'pointer',
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
        },
        name: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
        }
    };

    return (
        <div
            style={CategoryCoverStyle.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={CategoryCoverStyle.name}>{name}</span>
        </div>
    );
}
CategoryCover.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export { CategoryCover };
