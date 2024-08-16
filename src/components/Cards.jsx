import {useEffect, useState} from "react";
import Card from "./Card";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="grid items-center justify-center grid-cols-1 gap-4 px-4 mt-6 md:grid-cols-2 lg:grid-cols-3 md:px-8 lg:px-24">
        {data.map((d) => (
          <Card key={d.id} product={d}></Card>
        ))}
      </div>
    </>
  );
}
