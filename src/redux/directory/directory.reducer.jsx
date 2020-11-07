const INITIAL_STATE = {
    sections: [
        {
            title: "Thali",
            imageUrl: "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/news/research/thali-treatment-traditional-indian-dietary-practice-may-lower-chronic-disease-risk/8444774-2-eng-GB/Thali-treatment-Traditional-Indian-dietary-practice-may-lower-chronic-disease-risk.jpg",
            id: 1,
            linkUrl: "shop/thali"
        },
        {
            title: "Snacks",
            imageUrl: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/07/Veggie-Burger-Recipe-Step-By-Step-Instructions.jpg?fit=3072%2C3024&quality=65&strip=all&ssl=1",
            id: 2,
            linkUrl: "shop/snacks"
        },
        {
            title: "Sabjis",
            imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-500x500.jpg",
            id: 3,
            linkUrl: "shop/sabjis"
        },
        {
            title: "Breads",
            imageUrl: "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-1.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/breads"
        },
        {
            title: "Dal and Rice",
            imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Dal-Fry-Recipe.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/dalrice"
        },
        {
            title: "Beverages and Ice-cream",
            imageUrl: "https://img1.cgtrader.com/items/967980/fdd49d68f0/soft-drinks-cans-3d-model-animated-ma-mb.jpg",
            size: "large",
            id: 6,
            linkUrl: "shop/bai"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer