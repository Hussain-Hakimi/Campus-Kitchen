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
    description: "Comforting lentil dal served with fluffy steamed rice, prepared in a simple homemade style.",
    price: 150,
    image: "/assets/Dal-Chawal.jpg",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Pulao",
    description: "Aromatic pulao rice cooked with tender chicken, fragrant herbs, and traditional spices.",
    price: 350,
    image: "/assets/Chicken-Pulao.jpg",
    category: "Rice",
  },
  {
    id: 4,
    name: "Chana Polawo",
    description: "Flavorful rice cooked with chickpeas, aromatic spices, and a delicious homemade touch.",
    price: 300,
    image: "/assets/Chana-Polawo.webp",
    category: "Rice",
  },
];
