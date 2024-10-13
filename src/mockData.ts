export const mockRestaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    rating: 4.5,
    reviewCount: 120,
    deliveryTime: 30,
    menu: [
      { id: 101, name: "Classic Burger", price: 8.99 },
      { id: 102, name: "Cheeseburger", price: 9.99 },
      { id: 103, name: "Veggie Burger", price: 7.99 },
    ]
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.2,
    reviewCount: 85,
    deliveryTime: 40,
    menu: [
      { id: 201, name: "Margherita Pizza", price: 12.99 },
      { id: 202, name: "Pepperoni Pizza", price: 14.99 },
      { id: 203, name: "Vegetarian Pizza", price: 13.99 },
    ]
  },
  {
    id: 3,
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 200,
    deliveryTime: 35,
    menu: [
      { id: 301, name: "California Roll", price: 6.99 },
      { id: 302, name: "Salmon Nigiri", price: 8.99 },
      { id: 303, name: "Tuna Sashimi", price: 10.99 },
    ]
  }
];