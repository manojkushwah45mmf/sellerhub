import React from "react";
import image_url from "../Common/images";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};



const Review = () => {
  return (
    <div className="mt-2 p-3">
      <div className=" visit_review_level">
        <h5 className="mt-3">Reviews</h5>
        <div className="d-flex">
          <img src={image_url.profilecircle} alt="" />
          <div className="ms-3">
            <span className="review_des">Buyer's Name</span>
            <br></br>
            <span className="review_des">Products Name</span>
          </div>
        </div>
        <p className="mt-3 review_content_list">
          Contrary to popular belief, Lorem Ipsum is not simply text. It has
          roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old. The chunk of Lorem Ipsum used since the 1500s is
          reproduced.
          <div className="d-flex justify-content-between">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            <div className="mt-2">
              <p className="review_content_list">31 Mar, 2021</p>
            </div>
          </div>
        </p>
      </div>
      <div className=" visit_review_level">
      <h5 className="mt-3">Reviews</h5>
      <div className="d-flex">
        <img src={image_url.profilecircle} alt="" />
        <div className="ms-3">
          <span className="review_des">Buyer's Name</span>
          <br></br>
          <span className="review_des">Products Name</span>
        </div>
      </div>
      <p className="mt-3 review_content_list">
        Contrary to popular belief, Lorem Ipsum is not simply text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. The chunk of Lorem Ipsum used since the 1500s is
        reproduced.
        <div className="d-flex justify-content-between">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />

          <div className="mt-2">
            <p className="review_content_list">31 Mar, 2021</p>
          </div>
        </div>
      </p>
    </div>
    </div>
  );
};

export default Review;
