import {FaStar} from "react-icons/fa6";

export default function Card() {
  return (
    <>
      <div className="bg-black shadow-xl card w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="text-white card-body">
          <p className="flex gap-1 text-sm text-end opacity-70">
            <FaStar className="text-lg"></FaStar> 4.5
          </p>

          <h2 className="card-title">
            Wireless Headphones
            <div className="text-black bg-white border-white badge badge-secondary">
              $99.99
            </div>
          </h2>

          <p className="text-xs">
            <span className="font-bold">AudioTech</span> - Electronics
          </p>
          <p className="opacity-95">
            High-quality wireless headphones with noise-cancellation feature.
          </p>
          <p className="text-xs opacity-60">
            Released on {new Date("2024-08-01T10:00:00Z").toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}
