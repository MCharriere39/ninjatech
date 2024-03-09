import AirCrispCard from "../component/AirCrispCard";

export default function test() {
    return (
      <main>
        <div className="container" style={{ marginTop:"20px"}}>
          <h2 style={{color:"#689f38"}}>Air Crisp</h2>
          <h6> Pour le panier Cook & Crisp</h6>
          <div className="row">
            <div className="col">
              <AirCrispCard/>
            </div>
            <div className="col">
              <AirCrispCard/>
            </div>
            <div className="col">
              <AirCrispCard/>
            </div>
            <div className="col">
              <AirCrispCard/>
            </div>
          </div>
          
        </div>
      </main>
    );
  }
  