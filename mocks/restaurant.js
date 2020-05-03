import uuid from "uuid/v4";

var restaurant = {
  id: uuid(),
  name: "Altınkapı Restaurant",
  address: "Sakarya Cad. No:156 İzmir Ekonomi Üniversitesi",
  coverPhoto:
    "http://altinkapi.com/wp-content/uploads/2018/06/Altın-kapı-Restoran-04.jpg",
  foods: [
    {
      id: uuid(),
      name: "Lentil Soup",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/7/21/3/FNM_090110-WN-Dinners-024_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371592995411.jpeg",
      category: "Soup",
      featured: true,
      price: 9.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Tomato Soup",
      image: "http://altinkapi.com/wp-content/uploads/2018/06/corbalar.jpg",
      category: "Soup",
      featured: false,
      price: 12,
      description:
        "Dumanı Üzerinde Mis Gibi Kokan Enfes Bir Lezzet : Domates Çorbası",
    },
    {
      id: uuid(),
      name: "Pork Sisig",
      image:
        "https://i.pinimg.com/474x/63/ae/17/63ae17e98e2019da608cb8fe1c3efddb--filipino-recipes-filipino-food.jpg",
      category: "Salads",
      featured: true,
      price: 10.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Poqui-poqui",
      image:
        "https://www.kawalingpinoy.com/wp-content/uploads/2017/04/poqui-poqui-4.jpg",
      category: "Dessert",
      featured: false,
      price: 6.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Pork Adobo",
      image:
        "https://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg",
      category: "Main Dish",
      featured: false,
      price: 15.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Sinanglao",
      image:
        "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2017/10/Sinanglaw.jpg?ssl=1",
      category: "Soup",
      featured: false,
      price: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Pork Sisig",
      image:
        "https://i.pinimg.com/474x/63/ae/17/63ae17e98e2019da608cb8fe1c3efddb--filipino-recipes-filipino-food.jpg",
      category: "Salads",
      featured: false,
      price: 10.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Poqui-poqui",
      image:
        "https://www.kawalingpinoy.com/wp-content/uploads/2017/04/poqui-poqui-4.jpg",
      category: "Dessert",
      featured: false,
      price: 6.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Pork Adobo",
      image:
        "https://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg",
      category: "Main Dish",
      featured: false,
      price: 15.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Sinanglao",
      image:
        "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2017/10/Sinanglaw.jpg?ssl=1",
      category: "Soup",
      featured: false,
      price: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Pork Sisig",
      image:
        "https://i.pinimg.com/474x/63/ae/17/63ae17e98e2019da608cb8fe1c3efddb--filipino-recipes-filipino-food.jpg",
      category: "Salads",
      featured: false,
      price: 10.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
    {
      id: uuid(),
      name: "Poqui-poqui",
      image:
        "https://www.kawalingpinoy.com/wp-content/uploads/2017/04/poqui-poqui-4.jpg",
      category: "Dessert",
      featured: false,
      price: 6.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam efficitur elit, non lacinia mi fermentum sed. In mattis dignissim elementum",
    },
  ],
};

export default restaurant;
