const ProductDetails = ({ details, nutritionFacts }) => {
  return (
    <div className="space-y-6">
      {/* Product Details */}
      <div className="space-y-4 pt-6 border-t border-primary/10">
        <h2 className="text-xl font-semibold text-primary">Product Details</h2>
        <ul className="grid grid-cols-2 gap-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2 text-primary/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
