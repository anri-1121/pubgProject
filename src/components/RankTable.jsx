import "./RankTable.scss";

const RankTable = (props) => {
  return (
    <>
      <div className="rankTable">
        <h1>{props.tableCountry}</h1>
        <table>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
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
            </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default RankTable;
