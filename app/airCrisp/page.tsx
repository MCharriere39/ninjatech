import RecipeTable from "../component/recipeTable";

export default function test() {
    return (
      <main>
        <div className="container" style={{ marginTop:"20px"}}>
          <h2 style={{color:"#689f38"}}>Tableau de cuisson Air Crisp</h2>
          <h6> Pour le panier Cook & Crisp</h6>
          <RecipeTable color="#689f38" />
        </div>
      </main>
    );
  }
  