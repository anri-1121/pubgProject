import "./AllLiveBox.scss";
import HeaderNav from "../components/HeaderNav";
import bgVideo from "../video/LiveStreamBg.mp4";
import LoadingCmp from '../components/loadingCmp.jsx';
import { useEffect, useState } from "react";

const AllLiveBox = () => {
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
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      <LoadingCmp/>
    );
  } else {
    return (
      <>
        <HeaderNav
          bgColor="#020202"
          itemColor="#447F93"
          pageTitle="Live/Stream"
        />
        <section className="livesSection">
          <video preload="true" loop autoPlay className="video">
            <source type="video/mp4" src={bgVideo} />
          </video>
          <div className="box">
            <img
              id="backgroundImg"
              src="https://i.ytimg.com/vi/k4JeqrWH_GA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgTpAXfJBeI2RYhEEeluZS4qgl0g"
              alt=""
            />
          </div>
          <div className="box">
            <img
              id="backgroundImg"
              src="https://i.ytimg.com/vi/Bbwb6T162Hw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2xztzAAviV3w_pPK-5MGsfg_psA"
              alt=""
            />
          </div>
          <div className="box">
            <img
              id="backgroundImg"
              src="https://i.ytimg.com/vi/k4JeqrWH_GA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgTpAXfJBeI2RYhEEeluZS4qgl0g"
              alt=""
            />
          </div>
        </section>
      </>
    );
  }
};

export default AllLiveBox;
