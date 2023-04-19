import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState("");
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      <h1>
        {tours.map((tour) => {
          return (
            <>
              <img src={tour.image} alt={tour.name} />
            </>
          );
        })}
      </h1>
    </main>
  );
};
export default App;
