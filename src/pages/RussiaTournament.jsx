import "./RussiaTournament.scss";
import HeaderNav from "../components/HeaderNav";
import RussiaPageBg from "../video/RussiaPageBg.mp4";
import RankTable from "../components/RankTable";
import Footer from "../components/Footer";

// Schedule Data Importing
import { RusSchedule, RussiaTableData } from "../data.js";
const RussiaTournament = () => {
  // const bgAnim = document.getElementById("secondSec");
  // document.addEventListener("scroll", function () {
  //   var scrollValue = window.pageYOffset;
  // });

  return (
    <>
      <HeaderNav bgColor="#090D11" itemColor="#8b8989" pageTitle="Russia" />
      <div className="section1">
        <video loop autoPlay className="video">
          <source type="video/mp4" src={RussiaPageBg} />
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
            {RusSchedule.map((i) => (
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
      </div>
      <div className="secondSec" id="secondSec">
        <RankTable tableCountry="Russia" tableData={RussiaTableData} />
      </div>
      <Footer bgLinear="#8b8989"/>
    </>
  );
};

export default RussiaTournament;
