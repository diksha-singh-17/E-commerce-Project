import React from "react";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";

const Product = () => {
  const { productId } = useParams();
  console.log("productIdis", productId);
  const productData = [
    {
      id: 1,
      name: "Men Full Sleeve Printed Hooded Sweatshirt",
      images: [
        "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70&crop=false",
      ],
      reviews: [
        {
          id: 101,
          rating: 5,
          comment: "This product is amazing!",
        },
        {
          id: 102,
          rating: 4,
          comment: "Good value for money.",
        },
      ],
    },
    {
      id: 2,
      name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
      images: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/h/k/40-11895996-roadster-original-imafvtvzncggbsvk-bb.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/kfcv6vk0-0/shirt/a/d/2/40-11895996-roadster-original-imafvtvzq7tgxzqh.jpeg?q=70&crop=false",
      ],
      reviews: [
        {
          id: 201,
          rating: 3,
          comment: "Average product.",
        },
        {
          id: 202,
          rating: 2,
          comment: "Not satisfied with the quality.",
        },
      ],
    },
    {
      id: 3,
      name: "Men Checked shirt of 100% cotton",
      images: [
        "https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/e/h/d/-original-imagfaekytkyxjhg.jpeg?q=70&crop=falseg",
        "https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/5/w/w/-original-imagfaektecmgbhf.jpeg?q=70&crop=false",
      ],
      reviews: [
        {
          id: 301,
          rating: 5,
          comment: "Absolutely love it!",
        },
      ],
    },
  ];

  const item = productData.find((p) => p.id === Number(productId));
  console.log(item, "item");

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col bg-slate-400 h-[70vh] mx-auto justify-center items-center">
      <h2 className="text-2xl text-white">{item.name} - Details</h2>
      <div>
        {item.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Product ${item.id} - ${index + 1}`}
          />
        ))}
      </div>
      <h3 className="text-xl text-white">Reviews:</h3>
      <ul className="text-red-100">
        {item.reviews.map((review, index) => (
          <li key={index}>{review.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
