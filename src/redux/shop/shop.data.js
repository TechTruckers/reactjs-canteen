const SHOP_DATA = [
  {
    id: 1,
    title: "THALI",
    routeName: "thali",
    items: [
      {
        id: 1,
        name: "Gujarati Thali",
        imageUrl: "https://images-ext-2.discordapp.net/external/jSLGDd3DyqRAxVseneBgs1jAUGMVhTnHJvsRZvASx18/https/post.healthline.com/wp-content/uploads/2020/07/thali-indian-732x549-thumbnail-732x549.jpg",
        calories: 200,
        price: 25
      },
      {
        id: 2,
        name: "Rajasthani Thali ",
        imageUrl: "https://www.semrne.com/wp-content/uploads/2019/03/sabji-roti-daal-chawal.jpg",
        calories: 200,
        price: 18
      },
      {
        id: 3,
        name: "Punjabi Thali",
        imageUrl: "https://allaboutjaipur.com/wp-content/uploads/2019/03/fabhotels-Thali-and-More.jpg",
        calories: 200,
        price: 35
      },
      {
        id: 4,
        name: "South Indian",
        imageUrl: "https://curlytales.com/wp-content/uploads/2018/11/ftr-img.jpg",
        calories: 200,
        price: 25
      },
      {
        id: 5,
        name: "Bengali",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        calories: 200,
        price: 18
      },
      {
        id: 6,
        name: "Half Thali",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        calories: 200,
        price: 14
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        calories: 200,
        price: 18
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        calories: 200,
        price: 14
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        calories: 200,
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: "SNACKS",
    routeName: "snacks",
    items: [
      {
        id: 10,
        name: "Burgers",
        imageUrl: "https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg",
        calories: 200,
        price: 220
      },
      {
        id: 11,
        name: "Pizza",
        imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x500.jpg",
        calories: 200,
        price: 280
      },
      {
        id: 12,
        name: "Mix Bhel",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Indian_cuisine-Chaat-Bhelpuri-03.jpg",
        calories: 200,
        price: 110
      },
      {
        id: 13,
        name: "Aloo Paratha",
        imageUrl: "https://recipes.timesofindia.com/thumb/msid-53109843,width-1600,height-900/53109843.jpg",
        calories: 200,
        price: 160
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        calories: 200,
        price: 160
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        calories: 200,
        price: 160
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        calories: 200,
        price: 190
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        calories: 200,
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: "SABJIS",
    routeName: "sabjis",
    items: [
      {
        id: 18,
        name: "Malai Kofta",
        imageUrl: "https://holycowvegan.net/wp-content/uploads/2020/01/vegan-malai-kofta-indian-cream-dumplings-tomato-onion-sauce-2-1.jpg",
        calories: 200,
        price: 125
      },
      {
        id: 19,
        name: "Masala Bhindi",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg",
        calories: 200,
        price: 90
      },
      {
        id: 20,
        name: "Mix Veg",
        imageUrl: "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2010/06/mix-veg-recipe-2.jpg",
        calories: 200,
        price: 90
      },
      {
        id: 21,
        name: "Paneer Butter Masala",
        imageUrl: "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2010/06/mix-veg-recipe-2.jpg",
        calories: 200,
        price: 165
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        calories: 200,
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: "BREADS",
    routeName: "breads",
    items: [
      {
        id: 23,
        name:"Butter Naan",
        imageUrl: "https://www.jessicagavin.com/wp-content/uploads/2020/04/naan-bread-17-1200.jpg",
        calories: 200,
        price: 25
      },
      {
        id: 24,
        name: "Butter Roti",
        imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Roti-1-3-500x500.jpg",
        calories: 200,
        price: 20
      },
      {
        id: 25,
        name: "Parantha",
        imageUrl: "https://ministryofcurry.com/wp-content/uploads/2018/10/Version-2.jpg",
        calories: 200,
        price: 80
      },
      {
        id: 26,
        name: "Tandoori Roti",
        imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Roti-1-3-500x500.jpg",
        calories: 200,
        price: 80
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        calories: 200,
        price: 45
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        calories: 200,
        price: 135
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        calories: 200,
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: "DAL RICE",
    routeName: "dal",
    items: [
      {
        id: 30,
        name: "Dal Fry",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Dal-Fry-Recipe-500x500.jpg",
        calories: 200,
        price: 325
      },
      {
        id: 31,
        name: "Jeera Rice",
        imageUrl: "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
        calories: 200,
        price: 20
      },
      {
        id: 32,
        name: "Moong Dal",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2014/09/Moong-Dal-500x500.jpg",
        calories: 200,
        price: 25
      },
      {
        id: 33,
        name: "Plain Rice",
        imageUrl: "https://5.imimg.com/data5/AQ/SL/MY-55761382/plain-boiled-rice-500x500.png",
        calories: 200,
        price: 25
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        calories: 200,
        price: 40
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        calories: 200,
        price: 25
      }
    ]
  },
  {
    id: 6,
    title: "BEVERAGES AND SNACKS",
    routeName: "bevacks",
    items: [
      {
        id: 36,
        name: "Buttermilk",
        imageUrl: "https://yummyindiankitchen.com/wp-content/uploads/2016/04/how-to-make-masala-chaas-recipe.jpg",
        calories: 200,
        price: 325
      },
      {
        id: 37,
        name: "Cold Drink",
        imageUrl: "https://img1.cgtrader.com/items/967980/fdd49d68f0/soft-drinks-cans-3d-model-animated-ma-mb.jpg",
        calories: 200,
        price: 20
      },
      {
        id: 38,
        name: "Lemon Juice",
        imageUrl: "https://i1.wp.com/www.rasoimenu.com/wp-content/uploads/2019/08/Nimbu-Pani-Recipe.jpg?fit=1920%2C1080&ssl=1",
        calories: 200,
        price: 25
      },
      {
        id: 39,
        name: "Frooti",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71jQMW9E-WL._SL1080_.jpg",
        calories: 200,
        price: 25
      },
      {
        id: 40,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        calories: 200,
        price: 40
      },
      {
        id: 41,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        calories: 200,
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;

