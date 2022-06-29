import "./EuropeTournament.scss";
import HeaderNav from "../components/HeaderNav";
import RankTable from "../components/RankTable";
import section2Bg from "../img/section2.mp4";

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
              <th>Date</th>
            </tr>
            {EuSchedule.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.date}</td>
              </tr>
            ))}
          </table>
        </div>
      </section>
      <section className="secondSection">
        <video loop autoPlay className="video2">
          <source type="video/mp4" src={section2Bg} />
        </video>
        <RankTable tableCountry="Europe" tableData={EuropeTableData} />
      </section>
    </>
  );
};

export default EuropeTournament;
