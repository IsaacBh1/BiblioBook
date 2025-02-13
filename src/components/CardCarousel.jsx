import { BookCover } from "./BookCover";
import { useRef } from "react";
import PropTypes from 'prop-types';

const CardCarouselStyle = {
    cardCarouselContainer: {
        display: "flex",
        alignItems: "center",
        width: "99vw",
        height:"100%" , 
        gap:"2rem",
    },
    scrollButton: {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "2rem",
        cursor: "pointer",
    },
    cardCarousel: {
        display: "flex",
        overflowX: "hidden", // Change to 'hidden' to hide overflow
        overflowY: "hidden",
        scrollBehavior: "smooth",
        width: "100%",
        gap:"2rem" , 
        padding :"2rem"
    },
    card: {
        flex: "0 0 25%", // Each card takes up 1/3 of the container
        boxSizing: "border-box",
    },
};

function CardCarousel({ books }) {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current.scrollLeft === 0) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.scrollWidth,
                behavior: "smooth",
            });
        } else {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.clientWidth / 4,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth) {
            carouselRef.current.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        } else {
            carouselRef.current.scrollBy({
                left: carouselRef.current.clientWidth / 4,
                behavior: "smooth",
            });
        }
    };

    return (
        <div style={CardCarouselStyle.cardCarouselContainer}>
            <button onClick={scrollLeft} style={CardCarouselStyle.scrollButton}>
                {"<"}
            </button>
            <div style={CardCarouselStyle.cardCarousel} ref={carouselRef}>
                {books.map((book, index) => (
                    <div key={index} >
                        <BookCover book={book} />
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} style={CardCarouselStyle.scrollButton}>
                {">"}
            </button>
        </div>
    );
}

CardCarousel.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { CardCarousel };
