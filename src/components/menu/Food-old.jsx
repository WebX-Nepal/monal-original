const foods = [
  {
    name: "Margherita Pizza",

    price: "$12.99",
    ingredients:
      "Pizza dough, tomato sauce, fresh mozzarella cheese, basil leaves, olive oil",
  },
  {
    name: "Grilled Chicken Caesar Salad",

    price: " $9.99",
    ingredients:
      "Romaine lettuce, grilled chicken breast, Parmesan cheese, croutons, Caesar dressing",
  },
  {
    name: "Spaghetti Bolognese",

    price: "$14.99",
    ingredients:
      " Spaghetti pasta, beef Bolognese sauce (ground beef, tomatoes, onions, garlic, herbs), Parmesan cheese",
  },
  {
    name: "Vegetable Stir-Fry",

    price: "$11.99",
    ingredients:
      "  Mixed vegetables (bell peppers, broccoli, carrots, snap peas), tofu or chicken, soy sauce, sesame oil, ginger, garlic",
  },
  {
    name: "Mushroom Risotto",

    price: "$11.99",
    ingredients:
      "  Arborio rice, mushrooms, onion, garlic, white wine, vegetable broth, Parmesan cheese, butter",
  },
  {
    name: "Margherita Pizza",

    price: "$12.99",
    ingredients:
      "Pizza dough, tomato sauce, fresh mozzarella cheese, basil leaves, olive oil",
  },
  {
    name: "Grilled Chicken Caesar Salad",

    price: " $9.99",
    ingredients:
      "Romaine lettuce, grilled chicken breast, Parmesan cheese, croutons, Caesar dressing",
  },
  {
    name: "Spaghetti Bolognese",

    price: "$14.99",
    ingredients:
      " Spaghetti pasta, beef Bolognese sauce (ground beef, tomatoes, onions, garlic, herbs), Parmesan cheese",
  },
  {
    name: "Vegetable Stir-Fry",

    price: "$11.99",
    ingredients:
      "  Mixed vegetables (bell peppers, broccoli, carrots, snap peas), tofu or chicken, soy sauce, sesame oil, ginger, garlic",
  },
  {
    name: "Mushroom Risotto",

    price: "$11.99",
    ingredients:
      "  Arborio rice, mushrooms, onion, garlic, white wine, vegetable broth, Parmesan cheese, butter",
  },
];

export default function FFood() {
  return (
    <div className="  bg-black object-contain bg-cover ">
      <div className="h-full bg-black/30 text-white px-32 py-8">
        <h3 className="w-full text-center font-Cormorant font-semibold text-5xl capitalize mb-8 ">
          Food menu
        </h3>

        {foods.map((food, index) => {
          return (
            <div
              key={food.name}
              className="font-poppins mb-12 flex flex-col gap-2  bg-black/70 p-2 rounded-3xl shadow-md shadow-orange-300"
            >
              <div className="flex items-center w-full ">
                <div className="w-[40%] flex gap-[0.3rem]">
                  <span className="text-2xl">{index + 1}.</span>
                  <h4 className=" text-2xl">{food.name}</h4>
                </div>
                <span className="w-full  overflow-hidden">
                  .......................................................................................................................................................................................................................................................................................................................................................................................................................
                </span>
                <span className="font-poppins text-2xl w-[8%]  ml-8">
                  {food.price}
                </span>
              </div>
              <p className="ml-8">( {food.ingredients} )</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
