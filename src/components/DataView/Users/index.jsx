import React, { useState } from "react";

function User({ data }) {
  const [collapse, setCollapse] = useState(null);

  const toggleCollapse = (id) => {
    if (collapse === id) {
      setCollapse(null);
    } else {
      setCollapse(id);
    }
  };

  return (
    <div className="bg-base-300">
      <h2 className="text-3xl font-bold">Adherents</h2>
      {data.map((u) => {
        return (
          <div className="card card-side bg-base-100 shadow-md m-4 mt-10 p-4 flex flex-col relative" key={u.id}>
            <div className="flex-grow">
              <div onClick={() => toggleCollapse(u.id)} className="flex items-center">
                <figure className="mr-4">
                  <img src={u.url_img} alt="User" className="rounded-full w-20 h-20" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">
                    {u.firstname} {u.lastname} ({u.nickname})
                  </h2>
                </div>
              </div>
              <button
                onClick={() => toggleCollapse(u.id)}
                className={`btn btn-primary mt-4 top-5 right-4 absolute`}
              >
                Edition
              </button>
            </div>
            {collapse === u.id && (
              <div className="card-body mt-4">
                <div>
                  <p className="normal-case first-letter:capitalize text-gray-600">
                    {u.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone: </span>
                    {u.phone}
                  </p>
                  <p>
                    <span className="font-medium">Address: </span>
                    {u.address}, {u.address_2}
                  </p>
                  <p>
                    <span className="font-medium">City: </span>
                    {u.city}
                  </p>
                  <p>
                    <span className="font-medium">Zip Code: </span>
                    {u.zip_code}
                  </p>
                  <p>
                    <span className="font-medium">Gender: </span>
                    {u.gender}
                  </p>
                  <p>
                    <span className="font-medium">Top Size: </span>
                    {u.top_size}
                  </p>
                  <p>
                    <span className="font-medium">Bottom Size: </span>
                    {u.bottom_size}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default User;
