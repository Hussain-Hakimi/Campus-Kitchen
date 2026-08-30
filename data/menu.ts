export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

// Edit this list to change Campus Kitchen's menu.
// Replace the SVG files in public/assets with real JPG/PNG photos when available.
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fresh homemade chicken biryani with fragrant rice and spices.",
    price: 300 ,
    image: "/assets/Chicken-Biryani.jpeg",
    category: "Rice",
  },
  {
    id: 2,
    name: "Dal Chawal",
    description: "Freshly cooked, fluffy rice prepared for a comforting meal.",
    price: 150,
    image: "/assets/Dal-Chawal.jpg",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Pulao",
    description: "Tender chicken cooked with tomatoes, herbs, and traditional spices.",
    price: 350,
    image: "/assets/Chicken-Pulao.jpg",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Chana Polawo",
    description: "Homestyle chicken curry with a rich, flavorful gravy.",
    price: 300,
    image: "/assets/Chana-Polawo.webp",
    category: "Chicken",
  },
];
