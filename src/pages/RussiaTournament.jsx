import "./RussiaTournament.scss";
import HeaderNav from "../components/HeaderNav";
import RussiaPageBg from "../img/RussiaPageBg.mp4";
import RankTable from "../components/RankTable";

// Schedule Data Importing
import { RusSchedule, RussiaTableData } from "../data.js";
const RussiaTournament = () => {
  const bgAnim = document.getElementById("secondSec");
  document.addEventListener("scroll", function () {
    var scrollValue = window.pageYOffset;
    console.log(scrollValue);
    // if (scrollValue > 20 && scrollValue < 3000) {
      
    // } else {
    //   menu.style.opacity = "1";
    //   menu.style.visibility = "visible";
    // }
  });

  return (
    <>
      <HeaderNav bgColor="#090D11" itemColor="#172544" pageTitle="Russia" />
      <div className="section1">
        <video loop autoPlay className="video">
          <source type="video/mp4" src={RussiaPageBg} />
        </video>
        <div className="scheduleCard">
          <table>
            <tr>
              <th>#</th>
              <th>Tournament Name</th>
              <th>Date</th>
            </tr>
            {RusSchedule.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.date}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="secondSec" id="secondSec">
        <RankTable tableCountry="Russia" tableData={RussiaTableData} />
      </div>
    </>
  );
};

export default RussiaTournament;
