import React, { useState } from 'react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    text: 'Working with Josip was a game-changer. His expertise and attention to detail ensured our project’s success. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula, sapien a efficitur imperdiet, magna quam volutpat tellus, sit amet sollicitudin elit sapien in augue. Sed ultrices, nulla a auctor sollicitudin, augue arcu commodo eros, et fermentum sapien magna vel sapien.',
    image: '/images/josip.mestrovic.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    text: 'A true professional. Josip delivered exceptional results, and his creative solutions always impressed us. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sed augue sit amet erat porttitor feugiat. Quisque at mauris nec arcu imperdiet feugiat.',
    image: '/images/josip.mestrovic.jpg',
  },
  {
    id: 3,
    name: 'Carol Williams',
    text: 'His technical acumen and clear communication made collaborating a pleasure from start to finish. Donec mollis nunc ac nibh bibendum, id bibendum nulla tristique. Integer faucibus, magna ac lacinia commodo, erat nulla luctus ex, vitae tempus felis dui vel metus.',
    image: '/images/josip.mestrovic.jpg',
  },
  {
    id: 4,
    name: 'David Brown',
    text: 'Josip consistently exceeded expectations. His innovative approach and dedication were evident in every aspect of his work. In hac habitasse platea dictumst. Mauris bibendum, justo sit amet sodales gravida, dui ligula tincidunt mauris, vitae tincidunt nisi magna eu justo.',
    image: '/images/josip.mestrovic.jpg',
  },
  {
    id: 5,
    name: 'Eva Davis',
    text: 'Professional, efficient, and highly skilled. I highly recommend Josip for any challenging project. Suspendisse potenti. Nulla facilisi. Curabitur vitae mauris eu massa finibus congue. Vivamus ut est a felis condimentum volutpat.',
    image: '/images/josip.mestrovic.jpg',
  },
  {
    id: 6,
    name: 'Frank Miller',
    text: 'His ability to merge design and functionality resulted in a seamless, user-friendly product. Praesent fermentum orci sit amet mauris consequat, vel euismod libero malesuada. Fusce ut augue sed nibh congue tincidunt. Phasellus sed turpis at dui tempus semper a sed felis.',
    image: '/images/josip.mestrovic.jpg',
  },
];

// The ReviewText component renders the review paragraph and a toggle button.
// When not expanded, it clamps the text to 2 lines and shows a "See More" button with a chevron-down icon.
// Once expanded, the full text is shown and the button disappears.
const ReviewText = ({ text, expanded, onToggle }) => {
  return (
    <div className="review-text">
      <p className={!expanded ? 'collapsed' : ''}>{text}</p>
      {!expanded && (
        <button className="see-more-button small" onClick={onToggle}>
          Read More <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

const Reviews = () => {
  // Index of the currently visible review
  const [currentIndex, setCurrentIndex] = useState(0);
  // Controls whether the text in the current card is expanded
  const [expanded, setExpanded] = useState(false);
  // Flag to prevent rapid clicks while animating
  const [animating, setAnimating] = useState(false);
  // Inline style used to animate the review card container
  const [cardStyle, setCardStyle] = useState({ transform: 'translateX(0)', transition: 'transform 0.5s ease' });

  const totalReviews = reviewsData.length;
  const currentReview = reviewsData[currentIndex];

  // Animate the current card sliding out and the new card sliding in.
  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setExpanded(false); // Reset expansion for the new card
    // Slide the current card to the left
    setCardStyle({ transform: 'translateX(-100%)', transition: 'transform 0.5s ease' });
    setTimeout(() => {
      // Update index to the next review
      setCurrentIndex((currentIndex + 1) % totalReviews);
      // Immediately position the new card off-screen to the right without animation
      setCardStyle({ transform: 'translateX(100%)', transition: 'none' });
      // Allow the browser to register the new position before sliding in
      setTimeout(() => {
        setCardStyle({ transform: 'translateX(0)', transition: 'transform 0.5s ease' });
        setTimeout(() => {
          setAnimating(false);
        }, 500);
      }, 50);
    }, 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setExpanded(false);
    // Slide the current card to the right
    setCardStyle({ transform: 'translateX(100%)', transition: 'transform 0.5s ease' });
    setTimeout(() => {
      // Update index to the previous review
      setCurrentIndex((currentIndex - 1 + totalReviews) % totalReviews);
      // Immediately position the new card off-screen to the left without animation
      setCardStyle({ transform: 'translateX(-100%)', transition: 'none' });
      // Animate the new card sliding in from the left
      setTimeout(() => {
        setCardStyle({ transform: 'translateX(0)', transition: 'transform 0.5s ease' });
        setTimeout(() => {
          setAnimating(false);
        }, 500);
      }, 50);
    }, 500);
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <h2>Client Reviews</h2>
        <div className="reviews-carousel">
          {/* Only one review card is rendered at a time */}
          <div className="review-slide" style={cardStyle}>
            <div className="review-card">
              <img src={currentReview.image} alt={currentReview.name} className="review-image" />
              <h3>{currentReview.name}</h3>
              <ReviewText
                text={currentReview.text}
                expanded={expanded}
                onToggle={() => setExpanded(true)}
              />
            </div>
          </div>
          {/* Desktop arrow controls */}
          <div className="reviews-arrows desktop">
            <button className="reviews-control prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="reviews-control next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
          {/* Mobile arrow controls */}
          <div className="reviews-arrows mobile">
            <button className="reviews-control prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="reviews-control next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
        <div className="reviews-external-buttons">
          <a
            href="https://www.google.com/search?q=your+google+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="external-button"
          >
            <img src="/images/google-logo.png" alt="Google" className="external-logo" />
            Read my Google Reviews
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="external-button"
          >
            <img src="/images/linkedin-logo.webp" alt="LinkedIn" className="external-logo" />
            See LinkedIn Recommendations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
