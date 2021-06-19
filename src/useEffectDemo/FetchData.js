import React, { useEffect, useState } from "react";

function FetchData() {
  const endpointUrl = "https://jsonplaceholder.typicode.com/photos";
  const [photos, setPhotos] = useState([]);

    useEffect(() => {
      fetch(endpointUrl)
        .then((response) => response.json())
        .then((photosData) => {
          setPhotos(photosData);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      {photos.length ? (
        photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.thumbnailUrl} alt={"Preview"} />
            <p>{photo.title}</p>
            <p>{photo.url}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default FetchData;
