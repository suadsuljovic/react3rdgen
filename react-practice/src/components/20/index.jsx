import ProductCard from "./ProductCard";

const Class20 = () => {
  const additionalData = [
    {
      brandTitle: "New Brand 1",
      description: "This is another great product!",
      reviews: 4.0,
      reviewsCount: 75,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand1",
        twitter: "https://twitter.com/newbrand1",
        instagram: "https://www.instagram.com/newbrand1",
      },
      imgs: {
        blue: "new-blue-product.jpg",
        white: "new-white-product.jpg",
        black: "new-black-product.jpg",
      },
      sizes: ["m", "l", "xl"],
      price: 59.99,
    },
    {
      brandTitle: "New Brand 2",
      description: "Introducing our latest product!",
      reviews: 4.8,
      reviewsCount: 120,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand2",
        twitter: "https://twitter.com/newbrand2",
        instagram: "https://www.instagram.com/newbrand2",
      },
      imgs: {
        blue: "newest-blue-product.jpg",
        white: "newest-white-product.jpg",
        black: "newest-black-product.jpg",
      },
      sizes: ["s", "m", "l", "xl"],
      price: 69.99,
    },
  ];
  return (
    <div>
      <ProductCard data={{}} />
    </div>
  );
};
export default Class20;
