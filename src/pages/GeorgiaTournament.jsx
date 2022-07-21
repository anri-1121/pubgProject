import "./GeorgiaTournament.scss";
import HeaderNav from "../components/HeaderNav.jsx";
import GeorgiaPageBg from "../video/GeorgiaPageBg.mp4";
import Footer from "../components/Footer";

// Import Data from data.js
import { GeoSchedule, GeorgiaTableData } from "../data";

const GeorgiaTournament = () => {
  return (
    <>
      <HeaderNav
        bgColor="#010001"
        itemColor="rgb(138 153 195)"
        pageTitle="Georgia"
      />
      <section className="firstSection geoMobileBg">
        <video loop autoPlay className="video">
          <source type="video/mp4" src={GeorgiaPageBg} />
        </video>
        <div className="scheduleCard">
          <table>
            <tr>
              <th>#</th>
              <th>Tournament Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Links</th>
            </tr>
            {GeoSchedule.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.startDate}</td>
                <td>{i.endDate}</td>
                <td className="linkData">{i.link}</td>
              </tr>
            ))}
          </table>
        </div>
      </section>
      <section className="secondSection">
        <div className="Geo_Rank_Table">
          <h1>Georgia</h1>
          <table>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Total</th>
            </tr>
            {GeorgiaTableData.map((i) => {
              return (
                <tr key={i.id} className="teamRank">
                  <td>{i.id}</td>
                  <td
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      alignItems: "center",
                    }}
                  >
                    <img src={i.teamImage} alt="" width="28" height="28" />
                    <span>{i.teamName}</span>
                  </td>
                  <td>{i.total}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </section>
      <Footer bgLinear="rgb(138 153 195)"/>
    </>
  );
};

export default GeorgiaTournament;
