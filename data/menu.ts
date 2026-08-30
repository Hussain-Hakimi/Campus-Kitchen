export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

// Edit this list to change Campus Kitchen's menu.
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fresh homemade chicken biryani with fragrant rice and spices.",
    price: 250,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80",
    category: "Rice",
  },
  {
    id: 2,
    name: "Plain Rice",
    description: "Freshly cooked, fluffy rice prepared for a comforting meal.",
    price: 150,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
    category: "Rice",
  },
  {
    id: 3,
    name: "Chicken Karahi",
    description: "Tender chicken cooked with tomatoes, herbs, and traditional spices.",
    price: 350,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    category: "Chicken",
  },
  {
    id: 4,
    name: "Chicken Curry",
    description: "Homestyle chicken curry with a rich, flavorful gravy.",
    price: 300,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    category: "Chicken",
  },
];
