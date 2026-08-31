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
    description: "",
    price: 300,
    image: "/assets/Chiken-Biryani.jpeg",
    category: "Rice",
  },
  {
    id: 2,
    name: "Dal Chawal",
    description: "",
    price: 200,
    image: "/assets/Dal-Chawal.jpg",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Pulao",
    description: "",
    price: 300,
    image: "/assets/Chicken-Pulao.jpg",
    category: "Rice",
  },
  {
    id: 4,
    name: "Chana Polawo",
    description: "",
    price: 200,
    image: "/assets/Chana-Polawo.webp",
    category: "Rice",
  },
];
