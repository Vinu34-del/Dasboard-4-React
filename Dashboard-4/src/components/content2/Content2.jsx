import React from "react";
import "./Content2.css";
import downArrow from "../../assets/downArrow.png";
import percentage2 from "../../assets/percentage2.jpg";
import bluedot from "../../assets/bluedot.png";
import greydot from "../../assets/greydot.png";
import chart from "../../assets/chart.jpg";
import percentage from "../../assets/percentage.jpg";

const Content2 = () => {
  return (
    <div className="container2">
      <div className="chart">
        <div className="top">
          <div className="top1">
            <small>Contract by</small>
            <h5>LIBOR impact</h5>
          </div>
          <button>
            Today
            <img src={downArrow} alt="" />
          </button>
        </div>
        <div className="mid">
          <img src={percentage2} alt="" />
        </div>
        <div className="bottom">
          <div className="bottomcontent">
            <label htmlFor="impacted">
              <input
                type="radio"
                id="impacted"
                name="impactStatus"
                value="impacted"
              />
              Impacted
            </label>

            <label htmlFor="nonImpacted">
              <input
                type="radio"
                id="nonImpacted"
                name="impactStatus"
                value="nonImpacted"
              />
              Non Impacted
            </label>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="top">
          <div className="top1">
            <small>Contract by</small>
            <h5>Relationship</h5>
          </div>
          <button>
            Last Month
            <img src={downArrow} alt="" />
          </button>
        </div>
        <div className="mid">
          <div className="chartimg">
          <img src={chart} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottomcontent">
            <label htmlFor="impacted">
              <input
                type="radio"
                id="impacted"
                name="impactStatus"
                value="impacted"
              />
               Active
            </label>

            <label htmlFor="nonImpacted">
              <input
                type="radio"
                id="nonImpacted"
                name="impactStatus"
                value="nonImpacted"
              />
               Complete
            </label>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="top">
          <div className="top1">
            <small>Contract by</small>
            <h5>LIBOR impact</h5>
          </div>
          <button>
            Month
            <img src={downArrow} alt="" />
          </button>
        </div>
        <div className="mid">
          <img src={percentage} alt="" />
        </div>
        <div className="bottom">
          <div className="bottomcontent">
            <label htmlFor="impacted">
              <input
                type="radio"
                id="impacted"
                name="impactStatus"
                value="impacted"
              />
                Active
            </label>

            <label htmlFor="nonImpacted">
              <input
                type="radio"
                id="nonImpacted"
                name="impactStatus"
                value="nonImpacted"
              />
              Complete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
