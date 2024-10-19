import { createSlice } from "@reduxjs/toolkit";
import snake from '../assets/snake.jpg';
import monstera from '../assets/monstera.png';
import orchid from '../assets/orchid.jpeg';
import paradise from '../assets/paradise.jpeg';
import pothos from '../assets/pothos.jpeg';
import fig from '../assets/fig.jpeg';

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Snake Plant",
      price: 19.99,
      image: snake,
      category: "Low Light",
    },
    {
      id: 2,
      name: "Monstera",
      price: 29.99,
      image: monstera,
      category: "Tropical",
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: 39.99,
      image: fig,
      category: "Large Plants",
    },
    {
      id: 4,
      name: "Pothos",
      price: 14.99,
      image: pothos,
      category: "Low Light",
    },
    {
      id: 5,
      name: "Bird of Paradise",
      price: 49.99,
      image: paradise,
      category: "Large Plants",
    },
    {
      id: 6,
      name: "Orchid",
      price: 24.99,
      image: orchid,
      category: "Flowering",
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
