import "./EuropeTournament.scss";
import HeaderNav from "../components/HeaderNav";
import RankTable from "../components/RankTable";
import Footer from '../components/Footer.jsx';

// Schedule Data Importing
import { EuSchedule, EuropeTableData } from "../data.js";

const EuropeTournament = () => {
  return (
    <>
      <HeaderNav
        bgColor="#07080B"
        itemColor="#5a8ba2"
        pageTitle="Europe"
      />
      <section className="firstSection">
        <video loop autoPlay className="video">
          <source
            type="video/mp4"
            src="https://cdn.game.tv/images/homepage/herobanner-video.mp4"
          />
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
            {EuSchedule.map((i) => (
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
        <RankTable tableCountry="Europe" tableData={EuropeTableData} />
      </section>
      <Footer bgLinear="#5a8ba2"/>
    </>
  );
};

export default EuropeTournament;
