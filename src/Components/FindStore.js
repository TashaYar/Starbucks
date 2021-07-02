import React, { Component } from "react";
import "./FindStore.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { Link } from "react-router-dom";

class FindStore extends Component {
  componentDidMount = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_KEY;
    const map = new mapboxgl.Map({
      container: "map_cont",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.1025, 28.7041],
      zoom: 5,
    });
  };
  render() {
    return (
      <div className="find_store_cont">
        <div className="col-12 col-md-4 find_store-left">
          <div className="col-md-10 findastore">
            <div className="finfil">
              <p className="fnsp">Find a Store</p>
              <Link className="sistrx">
                {" "}
                <i className="fab fa-sistrix sis"></i>
              </Link>
            </div>
            <hr className="ho-line"></hr>
          </div>
          <div className="col-md-2 filter">
            <Link style={{ textDecoration: "none", color: "black" }}>
              Filter
            </Link>
          </div>
        </div>
        <div id="map_cont" className="col-12 col-md-8 map_cont"></div>
      </div>
    );
  }
}

export default FindStore;
