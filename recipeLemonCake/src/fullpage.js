import about from "./about.js";
import ingredients from "./ingredients.js";
import cakeMethod from "./cakeMethod.js";
import drizzleMethod from "./drizzleMethod.js";
import tip from "./tip.js";
import more from "./moreRecipes.js";
import image from "./image";

const page = (<>
    <h1 className="header">LEMON DRIZZLE CAKE</h1>
    <a href="https://google.com" target="_blank" rel="noreferrer">
          <img
            src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
            alt="example"
          />
        </a>
    <h2 className="about"><u>About the recipe: </u></h2>
    {about}
    <h2 className="ingredients"><u>Ingredients:</u></h2>
    {ingredients}
    <h2 className="method"><u>Recipe for the cake:</u></h2>
    {cakeMethod}
    <h2 className="method"><u>Recipe for the lemon drizzle:</u></h2>
    {drizzleMethod}
    <h2 className="tip">Tip of the Day</h2>
    {tip}
    <h4 className="more">For more recipes go to the</h4>
    {more}

    <footer>made by aeslehc</footer>
    </>
  );

export default page;