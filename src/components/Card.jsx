import {FaStar} from "react-icons/fa6";

export default function Card({product}) {
  return (
    <>
      <div className="w-full bg-black shadow-xl md:max-w-96 card">
        <figure>
          <img src={product.productImage} alt={product.productName} />
        </figure>
        <div className="text-white card-body">
          <p className="flex gap-1 text-sm text-end opacity-70">
            <FaStar className="text-lg" /> {product.ratings}
          </p>

          <h2 className="card-title">
            {product.productName}
            <div className="text-black bg-white border-white badge badge-secondary">
              ${product.price}
            </div>
          </h2>

          <p className="text-xs">
            <span className="font-bold">{product.brand}</span> -{" "}
            {product.category}
          </p>
          <p className="opacity-95">{product.description}</p>
          <p className="text-xs opacity-60">
            Released on {new Date(product.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}
