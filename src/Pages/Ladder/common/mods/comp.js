import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "../module.mods-grid.css";

const Comp = () => {
  const [count, setCount] = useState([]);

  const getCount = () => {
    axios
      .get("http://localhost:5000/api/servers/comp/count")
      .then((response) => {
        console.log(response.data[0]);
        const count = response.data[0];
        setCount(count);
      });
  };

  useEffect(() => getCount(), []);
  return (
    <Fragment>
      <div
        className="ideas-col ideas-col-xs-24 ideas-col-md-12 ideas-col-xxl-8 pointer"
        style={{ padding: "15px 17px" }}
      >
        <div className="gamecover-card-container__cover clickable">
          <div
            className="gamecover-card-img__cover clickable"
            style={{
              backgroundImage: "url(assets/img/mods/COMP.jpg)",
              width: "278px",
              height: "250px",
            }}
          ></div>
          <h3 className="ideas-typography gamecover-title__cover clickable">
            Competitif
          </h3>
          <article
            className="ideas-typography gamecover-playerCount__cover clickable"
            style={{ color: "rgb(129, 134, 155)" }}
          >
            <span style={{ color: "rgb(116, 209, 24)", marginRight: "5px" }}>
              249
            </span>
            players ranked
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Comp;
