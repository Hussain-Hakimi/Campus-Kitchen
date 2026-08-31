export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

// Edit this list to change the menu. Each image path must match a file in public/assets.
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with tender chicken, aromatic spices, and traditional biryani flavors.",
    price: 300,
    image: "/assets/Chiken-Biryani.jpeg",
    category: "Rice",
  },
  {
    id: 2,
    name: "Dal Chawal",
<<<<<<< HEAD
    description: "Freshly cooked, fluffy rice prepared for a comforting meal.",
    price: 200,
=======
    description: "Comforting lentil dal served with fluffy steamed rice, prepared in a simple homemade style.",
    price: 150,
>>>>>>> 3fd4ee135e561bc96c86649f706cffb380599462
    image: "/assets/Dal-Chawal.jpg",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Pulao",
<<<<<<< HEAD
    description: "Tender chicken cooked with tomatoes, herbs, and traditional spices.",
    price: 300,
=======
    description: "Aromatic pulao rice cooked with tender chicken, fragrant herbs, and traditional spices.",
    price: 350,
>>>>>>> 3fd4ee135e561bc96c86649f706cffb380599462
    image: "/assets/Chicken-Pulao.jpg",
    category: "Rice",
  },
  {
    id: 4,
    name: "Chana Polawo",
<<<<<<< HEAD
    description: "Homestyle chicken curry with a rich, flavorful gravy.",
    price: 200,
=======
    description: "Flavorful rice cooked with chickpeas, aromatic spices, and a delicious homemade touch.",
    price: 300,
>>>>>>> 3fd4ee135e561bc96c86649f706cffb380599462
    image: "/assets/Chana-Polawo.webp",
    category: "Rice",
  },
];
