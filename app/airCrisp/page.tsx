import RecipeTable from "../component/recipeTable";

export default function test() {
    return (
      <main>
        <div className="container" style={{ marginTop:"20px"}}>
          <h2 style={{color:"#689f38"}}>Tableau de cuisson Air Crisp</h2>
          <RecipeTable color="#689f38" />
        </div>
      </main>
    );
  }
  