import "./index.css";

interface IDateTable {
  type: "day" | "week";
}

const DateTable = ({ type }: IDateTable) => {
  return (
    <div className="table">
      {Array(24)
        .fill(" AM")
        .map((h) => (
          <div className="table-col">
            {h}
            {Array(7)
              .fill("27")
              .map((v) => (
                <div className="table-row">{v}</div>
              ))}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default DateTable;
