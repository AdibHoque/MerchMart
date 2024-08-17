import {useEffect, useState} from "react";
import Card from "./Card";

export default function Cards() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
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
      <div className="flex gap-4">
        <select className="w-full max-w-xs select select-bordered">
          <option disabled selected>
            Sort
          </option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Date Added: Newest first</option>
        </select>
        <select className="w-full max-w-xs select select-bordered">
          <option disabled selected>
            Category
          </option>
          <option>Electronics</option>
          <option>Wearables</option>
          <option>Computers</option>
          <option>Home Automation</option>
          <option>Computer Accessories</option>
        </select>
        <select className="w-full max-w-xs select select-bordered">
          <option disabled selected>
            Price
          </option>
          <option>1-50</option>
          <option>51-200</option>
          <option>201-500</option>
          <option>501-1000</option>
          <option>1001-2000</option>
        </select>
        <select className="w-full max-w-xs select select-bordered">
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
        {data.map((d) => (
          <Card key={d.id} product={d}></Card>
        ))}
      </div>
    </div>
  );
}
