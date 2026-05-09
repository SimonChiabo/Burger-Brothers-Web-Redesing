// src/data/menu.js

// 1. Diccionario Centralizado de Ingredientes (Base de Datos Relacional)
export const ingredientsDB = {
  // Carnes
  "ing_triple_smash": { name: "Triple Smash", extraPrice: 3.50 },
  "ing_doble_smash": { name: "Doble Smash", extraPrice: 2.50 },
  "ing_single_smash": { name: "Single Smash", extraPrice: 1.50 },
  "ing_pechuga": { name: "Pechuga de Pollo", extraPrice: 2.00 },
  
  // Quesos
  "ing_cheddar": { name: "Queso Cheddar", extraPrice: 1.00 },
  "ing_emmental": { name: "Queso Emmental", extraPrice: 1.20 },
  "ing_provolone": { name: "Queso Provolone", extraPrice: 1.50 },
  "ing_raclette": { name: "Queso Raclette", extraPrice: 1.50 },
  "ing_gorgonzola": { name: "Queso Gorgonzola", extraPrice: 1.50 },
  "ing_queso_ahumado": { name: "Queso Blando Ahumado", extraPrice: 1.50 },
  
  // Salsas
  "ing_salsa_burger": { name: "Salsa Burger", extraPrice: 0.50 },
  "ing_salsa_royal": { name: "Salsa Royal", extraPrice: 0.50 },
  "ing_salsa_mostaza_miel": { name: "Salsa Mostaza Miel", extraPrice: 0.50 },
  "ing_salsa_mayo_chimi": { name: "Salsa Mayo Chimichurri", extraPrice: 0.50 },
  "ing_salsa_alioli": { name: "Salsa Alioli", extraPrice: 0.50 },
  "ing_salsa_bbq": { name: "Salsa BBQ", extraPrice: 0.50 },
  "ing_salsa_curry_mango": { name: "Salsa Curry Mango", extraPrice: 0.50 },
  
  // Vegetales y Otros
  "ing_lechuga": { name: "Lechuga", extraPrice: 0.50 },
  "ing_tomate": { name: "Tomate", extraPrice: 0.50 },
  "ing_cebolla_roja": { name: "Cebolla Roja", extraPrice: 0.50 },
  "ing_pepinillos": { name: "Pepinillos", extraPrice: 0.50 },
  "ing_bacon": { name: "Bacon", extraPrice: 1.50 },
  "ing_cebolla_caramelizada": { name: "Cebolla Caramelizada", extraPrice: 1.00 },
  "ing_rucula": { name: "Rúcula", extraPrice: 0.50 },
  "ing_espinaca": { name: "Espinaca", extraPrice: 0.50 },
  "ing_champinon": { name: "Champiñón", extraPrice: 1.00 },
  "ing_cebolla_crunchy": { name: "Cebolla Crunchy", extraPrice: 0.50 },
  "ing_canonigos": { name: "Canónigos", extraPrice: 0.50 },
  "ing_confitura_higo": { name: "Confitura de Higo", extraPrice: 1.00 },
  "ing_pimientos_piquillo": { name: "Pimientos de Piquillo", extraPrice: 1.00 },
  "ing_coleslaw": { name: "Coleslaw", extraPrice: 1.00 },
  "ing_aguacate": { name: "Aguacate", extraPrice: 1.50 },
  
  // Extras Menú
  "ing_bebida": { name: "Bebida", extraPrice: 0 },
  "ing_patatas": { name: "Patatas Fritas", extraPrice: 0 }
};

// 2. Base de Datos de Productos
export const menuDB = [
  // --- SMASH BURGERS ---
  {
    id: "burger_big_brother",
    name: "Big Brother",
    basePrice: 13,
    category: "smash_burger",
    composition: ["ing_triple_smash", "ing_salsa_burger", "ing_cheddar", "ing_lechuga", "ing_tomate", "ing_cebolla_roja", "ing_pepinillos"],
    isPopular: true
  },
  {
    id: "burger_clasica",
    name: "Clásica",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_royal", "ing_lechuga", "ing_tomate", "ing_cebolla_roja", "ing_pepinillos"],
    isPopular: false
  },
  {
    id: "burger_royal",
    name: "Royal",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_royal", "ing_cheddar", "ing_cebolla_roja", "ing_pepinillos"],
    isPopular: true
  },
  {
    id: "burger_bacon_cheese",
    name: "Bacon Cheese",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_cheddar", "ing_bacon"],
    isPopular: true
  },
  {
    id: "burger_eiffel",
    name: "Eiffel",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_mostaza_miel", "ing_emmental", "ing_cebolla_caramelizada", "ing_rucula"],
    isPopular: false
  },
  {
    id: "burger_argentina",
    name: "Argentina",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_mayo_chimi", "ing_provolone", "ing_lechuga", "ing_tomate", "ing_cebolla_roja"],
    isPopular: false
  },
  {
    id: "burger_suiza",
    name: "Suiza",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_burger", "ing_raclette", "ing_espinaca", "ing_champinon", "ing_cebolla_crunchy"],
    isPopular: false
  },
  {
    id: "burger_blues_brother",
    name: "Blues Brother",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_alioli", "ing_gorgonzola", "ing_canonigos", "ing_champinon", "ing_confitura_higo"],
    isPopular: false
  },
  {
    id: "burger_casolana",
    name: "Casolana",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_alioli", "ing_queso_ahumado", "ing_canonigos", "ing_pimientos_piquillo"],
    isPopular: false
  },
  {
    id: "burger_bbq",
    name: "BBQ",
    basePrice: 12,
    category: "smash_burger",
    composition: ["ing_doble_smash", "ing_salsa_bbq", "ing_cheddar", "ing_coleslaw", "ing_pepinillos"],
    isPopular: false
  },
  {
    id: "burger_pollo",
    name: "Pollo",
    basePrice: 12,
    category: "smash_burger", // Técnicamente no es smash, pero va en la misma categoría visual
    composition: ["ing_pechuga", "ing_salsa_curry_mango", "ing_aguacate", "ing_lechuga", "ing_tomate"],
    isPopular: false
  },
  {
    id: "burger_baby",
    name: "Baby",
    basePrice: 10,
    category: "smash_burger",
    composition: ["ing_single_smash", "ing_cheddar"],
    isPopular: false
  },

  // --- MENÚS COMPLETOS ---
  {
    id: "menu_big_brother", name: "Menú Big Brother", basePrice: 17, category: "menu_completo",
    composition: ["ing_triple_smash", "ing_salsa_burger", "ing_cheddar", "ing_lechuga", "ing_tomate", "ing_cebolla_roja", "ing_pepinillos", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_clasica", name: "Menú Clásica", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_royal", "ing_lechuga", "ing_tomate", "ing_cebolla_roja", "ing_pepinillos", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_royal", name: "Menú Royal", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_royal", "ing_cheddar", "ing_cebolla_roja", "ing_pepinillos", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_bacon_cheese", name: "Menú Bacon Cheese", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_cheddar", "ing_bacon", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_eiffel", name: "Menú Eiffel", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_mostaza_miel", "ing_emmental", "ing_cebolla_caramelizada", "ing_rucula", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_argentina", name: "Menú Argentina", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_mayo_chimi", "ing_provolone", "ing_lechuga", "ing_tomate", "ing_cebolla_roja", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_suiza", name: "Menú Suiza", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_burger", "ing_raclette", "ing_espinaca", "ing_champinon", "ing_cebolla_crunchy", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_blues_brother", name: "Menú Blues Brother", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_alioli", "ing_gorgonzola", "ing_canonigos", "ing_champinon", "ing_confitura_higo", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_casolana", name: "Menú Casolana", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_alioli", "ing_queso_ahumado", "ing_canonigos", "ing_pimientos_piquillo", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_bbq", name: "Menú BBQ", basePrice: 16, category: "menu_completo",
    composition: ["ing_doble_smash", "ing_salsa_bbq", "ing_cheddar", "ing_coleslaw", "ing_pepinillos", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_pollo", name: "Menú Pollo", basePrice: 16, category: "menu_completo",
    composition: ["ing_pechuga", "ing_salsa_curry_mango", "ing_aguacate", "ing_lechuga", "ing_tomate", "ing_bebida", "ing_patatas"]
  },
  {
    id: "menu_baby", name: "Menú Baby", basePrice: 14, category: "menu_completo",
    composition: ["ing_single_smash", "ing_cheddar", "ing_bebida", "ing_patatas"]
  },

  // --- PATATAS ---
  { id: "side_patatas", name: "Ración de Patatas", basePrice: 3.5, category: "patatas", composition: [] },

  // --- BEBIDAS ---
  { id: "bev_agua", name: "Agua", basePrice: 2, category: "bebidas", composition: [] },
  { id: "bev_agua_gas", name: "Agua con Gas", basePrice: 2, category: "bebidas", composition: [] },
  { id: "bev_refresco", name: "Refresco", basePrice: 3.3, category: "bebidas", composition: [] },
  { id: "bev_cerveza", name: "Lata Cerveza", basePrice: 3, category: "bebidas", composition: [] },

  // --- CAFÉS E INFUSIONES ---
  { id: "caf_solo", name: "Café Solo", basePrice: 1.5, category: "cafes_infusiones", composition: [] },
  { id: "caf_cortado", name: "Cortado", basePrice: 1.8, category: "cafes_infusiones", composition: [] },
  { id: "caf_leche", name: "Café con Leche", basePrice: 2.1, category: "cafes_infusiones", composition: [] },
  { id: "caf_infusion", name: "Infusión", basePrice: 1.5, category: "cafes_infusiones", composition: [] },

  // --- POSTRES ---
  { id: "des_cheesecake_orig", name: "Cheesecake Original", basePrice: 5, category: "postres", composition: [] },
  { id: "des_cheesecake_oreo", name: "Cheesecake Oreo", basePrice: 5, category: "postres", composition: [] },
  { id: "des_brownie", name: "Brownie", basePrice: 5, category: "postres", composition: [] },
  { id: "des_copa_helado", name: "Copa de Helado", basePrice: 5, category: "postres", composition: [] },
  { id: "des_batido", name: "Batido", basePrice: 5, category: "postres", composition: [] }
];

// Mantenemos las categorías para el filtrado
export const categories = [
  { id: 'all', name: 'Ver Todo' },
  { id: 'smash_burger', name: 'Smash Burgers' },
  { id: 'patatas', name: 'Patatas' },
  { id: 'menu_completo', name: 'Menús' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'postres', name: 'Postres' },
  { id: 'cafes_infusiones', name: 'Cafés' },
];
