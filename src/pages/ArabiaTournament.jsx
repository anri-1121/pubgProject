import "./ArabiaTournament.scss";
import HeaderNav from "../components/HeaderNav.jsx";
import ArabiaPageBg from "../video/ArabiaPageBg.mp4";
import RankTable from "../components/RankTable";
import Footer from "../components/Footer";

// Schedule Data Importing
import { ArabSchedule, ArabiaTableData } from "../data.js";

const ArabiaTournament = () => {
  return (
    <>
      <HeaderNav
        bgColor="#010001"
        itemColor="rgb(138 153 195)"
        pageTitle="Arabia"
      />
      <section className="firstSection secFirstBg">
        <video loop autoPlay className="video">
          <source type="video/mp4" src={ArabiaPageBg} />
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
            {ArabSchedule.map((i) => (
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
        <RankTable tableCountry="Arabia" tableData={ArabiaTableData} />
      </section>
      <Footer bgLinear="rgb(138 153 195)"/>
    </>
  );
};

export default ArabiaTournament;
