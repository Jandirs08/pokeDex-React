import React, { useState } from "react";

export const PokeDetailsStats = ({ stats, types }) => {
  //   console.log(types);
  return (
    <>
      <div className="stats__flex">
        {/* <h4>Stats</h4> */}
        {stats.map((stat, index) => (
          <div className="bar-item">
            <div className="bar">
              <div
                className={
                  types[0].type.name
                    ? `bar-active ${types[0].type.name} `
                    : `bar-active default`
                }
                style={{ height: stat.base_stat }}
              ></div>
              <div className="container-label">
                <p>{stat.base_stat}</p>
              </div>
            </div>
            <p>{stat.stat.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
