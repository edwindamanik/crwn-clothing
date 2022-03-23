import Directory from "./components/directory/directory.component";

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/FnVsTsP/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/4tb3gCh/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/1q7xBmv/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/G9GKyJS/womens.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/D4prY6P/mens.png"
    }
  ]
  

  return (
    <Directory categories={categories} />
  );
}

export default App;