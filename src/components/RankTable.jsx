import "./RankTable.scss";

const RankTable = (props) => {
  return (
    <>
      <div className="rankTable">
        <h1>{props.tableCountry} Ranks</h1>
        <table>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Kills</th>
            <th>Total</th>
            <th>WWSD</th>
          </tr>
          {props.tableData.map((i) => {
            return(
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
              <td>{i.kills}</td>
              <td>{i.Total}</td>
              <td>{i.WWSD}</td>
            </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default RankTable;
