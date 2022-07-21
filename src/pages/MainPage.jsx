import "./mainPage.scss";
import EuropePoster from "../img/EuropePoster.jpg";
import RussiaPoster from "../img/RussianPoster.jpg";
import ArabianPoster from "../img/ArabianPoster.jpg";
import GeorgiaPoster from "../img/GeorgiaPoster.jpg";
import { Link } from "react-router-dom";
import React from "react";
import { EuSchedule, RusSchedule, ArabSchedule, GeoSchedule } from "../data.js";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import LoadingCmp from "../components/loadingCmp";

// გაბო ესაა მთავარი ფეიჯი მაინც რო იცოდე და ბევრი არ ეთამაშო დდდდდ
const MainPage = () => {
  const [euDesc, setEuDesc] = useState(false);
  const [rusDesc, setRusDesc] = useState(false);
  const [arabDesc, setArabDesc] = useState(false);
  const [geoDesc, setGeoDesc] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // requirement.
  if (loading) {
    return <LoadingCmp />;
  } else {
    return (
      <div>
        <HeaderNav bgColor="#171718" pageTitle="Tournament" />
        <section className="tournamentList">
          <div className="card">
            <Link
              to="/Europe"
              onMouseOver={() => setEuDesc(true)}
              onMouseOut={() => setEuDesc(false)}
            >
              <img className="EuropePoster" src={EuropePoster} alt="" />
            </Link>
          </div>
          <div
            className={euDesc ? "EuropeActive desc" : "descDisactive"}
            onMouseOver={() => setEuDesc(true)}
            onMouseOut={() => setEuDesc(false)}
          >
            <h1>
              <span>Europian</span> tournament schedule
            </h1>
            <ul>
              {EuSchedule.map((i) => (
                <li key={i.id}>
                  {i.title} <span>{i.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Link
              to="/Russia"
              onMouseOver={() => setRusDesc(true)}
              onMouseOut={() => setRusDesc(false)}
            >
              <img src={RussiaPoster} className="EuropePoster" alt="" />
            </Link>
          </div>
          <div
            className={rusDesc ? "RussiaActive desc" : "descDisactive"}
            onMouseOver={() => setRusDesc(true)}
            onMouseOut={() => setRusDesc(false)}
          >
            <h1>
              <span>Russian</span> tournament schedule
            </h1>
            <ul>
              {RusSchedule.map((i) => (
                <li key={i.id}>{i.title}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Link
              to="/Arabia"
              onMouseOver={() => setArabDesc(true)}
              onMouseOut={() => setArabDesc(false)}
            >
              <img src={ArabianPoster} className="EuropePoster" alt="" />
            </Link>
          </div>
          <div
            className={arabDesc ? "ArabiaActive desc" : "descDisactive"}
            onMouseOver={() => setArabDesc(true)}
            onMouseOut={() => setArabDesc(false)}
          >
            <h1>
              <span>Arabian</span> tournament schedule
            </h1>
            <ul>
              {ArabSchedule.map((i) => (
                <li key={i.id}>{i.title}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <Link
              to="/Georgia"
              onMouseOver={() => setGeoDesc(true)}
              onMouseOut={() => setGeoDesc(false)}
            >
              <img src={GeorgiaPoster} className="EuropePoster" alt="" />
            </Link>
          </div>
          <div
            className={geoDesc ? "GeorgiaActive desc" : "descDisactive"}
            onMouseOver={() => setArabDesc(true)}
            onMouseOut={() => setArabDesc(false)}
          >
            <h1>
              <span>Georgian</span> tournament schedule
            </h1>
            <ul>
              {GeoSchedule.map((i) => (
                <li key={i.id}>{i.title}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="advertisement">
          <div>
            <h1>Your advertisement place</h1>
          </div>
        </section>
        <Footer bgLinear="#171718" />
      </div>
    );
  }
};

export default MainPage;
