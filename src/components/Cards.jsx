import {useEffect, useState} from "react";
import Card from "./Card";

export default function Cards() {
  const [data, setData] = useState({products: []});
  const {totalProducts, currentPage, totalPages, products} = data;
  const [search, setSearch] = useState("");
  const [currentP, setCurrentP] = useState(1);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentP}&&sort=${sort}&&category=${category}&&priceRange=${priceRange}&&brand=${brand}&&search=${search}`
    )
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [currentP, sort, category, priceRange, brand, search]);

  return (
    <div className="px-4 md:px-8 lg:px-24">
      <label className="flex items-center gap-2 my-2 mt-6 input input-bordered">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="bg-transparent grow"
          placeholder="Search Job"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex gap-4 mt-4">
        <select
          className="w-full max-w-xs select select-bordered"
          onChange={(e) => setSort(e.target.value)}
        >
          <option disabled selected>
            Sort
          </option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="newest">Date Added: Newest first</option>
        </select>
        <select
          className="w-full max-w-xs select select-bordered"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected>
            Category
          </option>
          <option>Electronics</option>
          <option>Wearables</option>
          <option>Computers</option>
          <option value="Home-Automation">Home Automation</option>
          <option value="Computer-Accessories">Computer Accessories</option>
        </select>
        <select
          className="w-full max-w-xs select select-bordered"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value="1-50">$1-50</option>
          <option value="51-200">$51-200</option>
          <option value="201-500">$201-500</option>
          <option value="501-1000">$501-1000</option>
          <option value="1001-2000">$1001-2000</option>
        </select>
        <select
          className="w-full max-w-xs select select-bordered"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Brand
          </option>
          <option>AudioTech</option>
          <option>TechTime</option>
          <option>GamerPro</option>
          <option>VisionPlus</option>
          <option>FitPro</option>
        </select>
      </div>
      <div className="grid items-stretch justify-center grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((d) => (
          <Card key={d.id} product={d}></Card>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-4">
          Showing {(currentPage - 1) * 9 + 1}-
          {currentPage * 9 > totalProducts ? totalProducts : currentPage * 9} of{" "}
          {totalProducts} Results
        </h2>
        <div className="flex justify-center items-center my-6">
          <button
            className="bg-black btn btn-sm text-white"
            onClick={() =>
              currentP > 1 ? setCurrentP(currentP - 1) : setCurrentP(currentP)
            }
          >
            Previous
          </button>
          <p className="mx-8">
            Page {currentPage} of {totalPages}
          </p>
          <button
            className="bg-black text-white btn btn-sm"
            onClick={() =>
              currentP < 5 ? setCurrentP(currentP + 1) : setCurrentP(currentP)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
