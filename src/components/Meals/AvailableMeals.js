import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza Margherita",
    description: "Traditional Neopolitan Style",
    price: 23.99,
  },
  {
    id: "m2",
    name: "Deep Dish Pizza",
    description: "Chicago Inspired",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Vegan Pizza",
    description: "100% Plant Based",
    price: 15.5,
  },
  {
    id: "m4",
    name: "Hawaiian Pizza",
    description: "Fresh Pineapples And Ham",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Buffalo Chicken Pizza",
    description: "Buffalo Sauce And Grilled Chicken",
    price: 17.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul> {mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

/*in AvailableMeals we want to render our DUMMY_MEALS as jsx. We need to transform this array of javasript objects into jsx elements. 

You could map DUMMY_MEALS in the <ul> but to keep our return statement lean, I will make a helper const on top titled mealsList, which simply stores that mapped DUMMY_MEALS. Now down in the <ul> I can just ouput mealsList. 

We will map all these meals by passing a function to map- which is executed for every meal. Then for every meal we want to return a jsx element that represents this meal element. That will be a list item. 

We want to have our MealItem component mapped. This is where our meal name, description, price will show up. 


*/
