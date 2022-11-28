import React from "react";
import image_url from "../Common/images";



const Review = () => {
  return (
    <div className="mt-4">
      <div className=" visit_review_level">
    <h5>Reviews</h5>
  <div className="d-flex">
   <img src={image_url.profilecircle}  alt=""/>
   
   <div>
     <span>Buyer's Name</span>
     <br></br>
     
     <span>Products Name</span>
  
   
   </div>
  
  
  </div>




  </div>
    </div>
  );
};

export default Review;
