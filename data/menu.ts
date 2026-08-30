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
    price: 250,
    image: "/assets/chicken-biryani.svg",
    category: "Rice",
  },
  {
    id: 2,
    name: "Plain Rice",
    description: "Freshly cooked, fluffy rice prepared for a comforting meal.",
    price: 150,
    image: "/assets/plain-rice.svg",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Karahi",
    description: "Tender chicken cooked with tomatoes, herbs, and traditional spices.",
    price: 350,
    image: "/assets/chicken-karahi.svg",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Chicken Curry",
    description: "Homestyle chicken curry with a rich, flavorful gravy.",
    price: 300,
    image: "/assets/chicken-curry.svg",
    category: "Chicken",
  },
];
