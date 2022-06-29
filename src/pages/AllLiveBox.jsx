import "./AllLiveBox.scss";
import HeaderNav from "../components/HeaderNav";
import bgVideo from '../img/LiveStreamBg.mp4';

const AllLiveBox = () => {
  return (
    <>
      <HeaderNav
        bgColor="#020202"
        itemColor="#447F93"
        pageTitle="Live/Stream"
      />
      <section className="livesSection">
        <video preload="true" loop autoPlay className="video">
          <source
            type="video/mp4"
            src={bgVideo}
          />
        </video>
        <div className="box">
          <img id="backgroundImg" src="https://i.ytimg.com/vi/k4JeqrWH_GA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgTpAXfJBeI2RYhEEeluZS4qgl0g" alt="" />
        </div>
        <div className="box">
          <img id="backgroundImg" src="https://i.ytimg.com/vi/Bbwb6T162Hw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2xztzAAviV3w_pPK-5MGsfg_psA" alt="" />
        </div>
        <div className="box">
          <img id="backgroundImg" src="https://i.ytimg.com/vi/k4JeqrWH_GA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgTpAXfJBeI2RYhEEeluZS4qgl0g" alt="" />
        </div>
      </section>
    </>
  );
};

export default AllLiveBox;
