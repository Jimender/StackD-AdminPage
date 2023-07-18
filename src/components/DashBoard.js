import React, { useEffect, useState } from "react";

export default function DashBoard() {
  const [ads, setAds] = useState([]);
  const [adInd, setAdInd] = useState(0);
  const [titles, setTitles] = useState([]);
  const [viewTitles, setViewTitles] = useState(true);
  const [viewAds, setViewAds] = useState(false);

  const handleTitleClick = (ind) => {
    setAdInd(ind);
    setViewAds(!viewAds);
    setViewTitles(!viewTitles);
  };

  const handleAdClick = () => {
    setViewAds(!viewAds);
    setViewTitles(!viewTitles);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/item/get");
        if (response.ok) {
          const jsonData = await response.json();
          const tit = jsonData.map((entry) => entry.title);
          setTitles(tit);
          const ads = jsonData.map((entry) => entry.ads);
          setAds(ads);
        } else {
          throw new Error("Request failed with status " + response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  var count = 1;
  return (
    <div>
      {viewTitles && (
        <div>
          {titles.map((title) => (
            <div onClick={handleTitleClick.bind(this, count - 1)}>
              <div> {count++ + " " + title} </div> <br />
            </div>
          ))}
        </div>
      )}
      {viewAds && (
        <div>
          {ads[adInd].map((adStack) => (
            <div onClick={handleAdClick}>
              <div> {adStack.map(ad => (
                <div>
                  {ad} <br/>
                </div>
              ))} </div> <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
