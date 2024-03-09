import AirCrispCard from "../component/AirCrispCard";
import { airCrispAliments } from "../data/airCrispData";
import { AirCrispAliment } from "../data/alimentType";

export default function Page() {
  const rows = [];
  for (let i = 0; i < airCrispAliments.length; i += 4) {
    const row = airCrispAliments.slice(i, i + 4);
    rows.push(row);
  }

  return (
    <main>
      <div  style={{ marginTop: "40px",width:"70%",margin:"auto" }}>
        <h2 style={{ color: "#689f38" }}>Air Crisp</h2>
        <h6> Pour le panier Cook & Crisp</h6>
        {rows.map((row, index) => (
          <div key={index} className="row">
            {row.map((aliment : AirCrispAliment, subIndex) => (
              <div key={subIndex} className="col-sm">
                <AirCrispCard aliment={aliment} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
