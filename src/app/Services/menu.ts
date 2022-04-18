import { menuItem } from './menuItem';

interface MenuInterface {
    starters: menuItem[];
    salads: menuItem[];
    pasta: menuItem[];
    burgers: menuItem[];
    mains: menuItem[];
    kids: menuItem[];
}

export class Menu implements MenuInterface {
    public starters = [
        new menuItem("CRAB & COMPANY", "Panko-coated prawn, crab, and BC red snapper, potato, and red pepper seafood cakes served with yellow curry aioli.", "16.50", false, false, false, false, false, false, false, false), 
        new menuItem("TOUR DE FRIES", "Skinny cut chickpea fries with curry mayo, Pedal spicy sauce, and roasted garlic aioli for dipping. Vegetarian, vegan with only spicy sauce.", "12", true, false, false, true, true, false, false, true),
        new menuItem("CAVEMAN'S PICNIC", "Buttermilk fried chicken, grilled local sausage, bacon-wrapped bison meatloaf, P&T honey mustard, housemade cherry bbq sauce, hand-cut fries, and coleslaw. (Meal for 2 OR app for more).", "50", false, false, false, false, false, false, false, false),
        new menuItem("MUCKY FRIES", "Hand-cut fries, mozzarella, aged cheddar, maple bacon, and green onion topped with house-made chipotle sauce.", "16", true, false, false, false, false, true, false, false),
        new menuItem("SALMON POKE", "Sesame soy marinated raw salmon, rice, cucumber, soybeans, pickled daikon and carrot, smashed avocado, and seaweed. | Vegan, sub sesame soy marinated tofu.", "26 Meal | 17 Starter", true, false, true, false, false, true, false, true)
    ];

    public salads = [
        new menuItem("THE COMMUTER", "Crisp romaine, mixed greens, bacon, marinated grape tomatoes, aged cheddar, croutons, boiled egg, housemade citrus vinaigrette. Gluten-free without croutons.", "14.50 Meal | 9.50 Starter", false, true, false, true, false, true, false, false),
        new menuItem("GLORIOUS BOWL", "Crisped tofu roasted beets, quinoa, millet, toasted sunflower, and pumpkin seeds, with greens, and carrots dressed in a tangy sunflower vinaigrette. | vegan", "18 Meal | 10.50 Starter", true, false, true, false, true, false, true, false),
        new menuItem("PEDAL HOUSE SALAD", "Fresh mixed greens with house-made balsamic vinaigrette.", "9.50 Meal | 6.50 Starter", true, false, true, false, true, false, true, false),
        new menuItem("ASIAN CRISPY NOODLE SALAD", "Cabbage, peppers, snap peas, carrots, arugula, toasted almonds, crispy noodles, sesame soy dressing.", "13.50 Meal | 9 Starter", false, true, true, false, true, false, false, true)
    ];

    pasta = [
        new menuItem("ROSELINNE", "Smoked ham and mozzarella stuffed pasta roll, oven-baked in a creamy rosé sauce with fresh tomato, basil, and parmesan.", "19", false, false, false, false, false, false, false, false),
        new menuItem("HOT MESS", "Linguine and garlic oil with fresh basil, spinach, brie, roasted garlic, artichoke hearts.", "19.50 | half 13.50", false, true, false, true, true, false, false, true),
        new menuItem("SPAGHETTIBALLS", "Fried balls of spaghetti, cheese & spices served on a classic bolognese made with local beef.", "18.50 | hafl 12.50", false, false, false, false, false, true, false, false),
        new menuItem("CARBONARA", "Rigatoni, farmer's bacon, cream, fresh herbs, and white wine topped with parmesan.", "18.50 | half 12.50", false, true, false, false, false, true, false, false)
    ];

    burgers = [
        new menuItem("COOP DU JOUR", "A staff favorite; buttermilk brined fried chicken, fresh tomato, butter leaf lettuce, creamy slaw, garlic mayo, and P&T cherry bbq sauce.", "18.50", false, false, false, false, false, false, false, false),
        new menuItem("ANYTHING FOR LOVE", "Bacon-wrapped bison meatloaf, roasted tomato sauce, mozzarella, roasted peppers, fresh basil, and balsamic reduction on a toasted local hoagie.", "18.50", false, true, false, false, false, false, false, false),
        new menuItem("CLASSIC CHEESEBURGER", "Local beef and pork burger patty, butter leaf lettuce, tomato, pickled onions, American cheddar, P&T burger sauce.", "17.50", false, true, false, true, false, false, false, false),
        new menuItem("CAMBURGER", "Local beef and pork patty, aged white cheddar, mushrooms, maple bacon, and our secret sweet & spicy sauce.", "18.50", false, true, false, true, false, false, false, false),
        new menuItem("TOFU BAHN MI", "Marinated fried tofu, garlic mayo, pickled daikon and carrot, cucumber, fresh cilantro, crispy onions, and sweet and spicy hoisin sauce. | vegetarian, vegan without mayo.", "17", false, true, false, true, true, false, false, true)
    ];

    mains = [
        new menuItem("SEAFOOD LAKSA SOUP", "Prawns, mussels, grilled squid, in a spicy lemongrass coconut milk, cashew broth with rice noodles, crispy onions, fresh cilantro, and mint.", "19", false, true, true, false, false, false, false, false),
        new menuItem("BISON MEATLOAF", "Bacon-wrapped bison meatloaf, scalloped potatoes, roasted vegetables, and creamy mushroom gravy, and cranberry sauce.", "26", false, false, false, false, false, false, false, false),
        new menuItem("KIM JONG YUM BOWL", "Sesame soy-marinated local beef, steamed rice, house-made kimchi, mushrooms, spinach, cucumber, carrots, and Korean-style barbecue sauce. | vegetarian available. Ask to sub-stir-fried tofu.", "18.50", true, false, true, false, false, true, false, true)
    ];

    kids = [
        new menuItem("PASTA WITH CHEESE SAUCE", "Rigatoni noodles with creamy cheese sauce.", "9.50", false, true, false, false, true, false, false, false),
        new menuItem("PASTA LOLA", "Kid-sized portion carbonara. Rigatoni, farmer's bacon, cream, fresh herbs, and white wine topped with parmesan.", "10.50", false, true, false, false, false, true, false, false),
        new menuItem("LE GEORGES BURGER", "A burger patty on a bun with ketchup. Served with a small side of fries.", "10.50", false, true, false, true, false, false, false, false),
        new menuItem("PASTA WITH MEAT SAUCE", "Rigatoni noodles with tomato meat sauce made from local beef.", "9.50", false, true, false, true, false, true, false, false),
        new menuItem("CHEESE OR PEPPERONI PIZZA", "A kid-size personal pizza with either cheese or cheese & pepperoni.", "9.50", false, false, false, false, false, true, false, false),
        new menuItem("FRIED CHICKEN & FRIES", "2 pieces of boneless buttermilk fried chicken thighs and P&T honey mustard and a small side of fries.", "10.50", false, false, false, false, false, false, false, false)
    ]
}