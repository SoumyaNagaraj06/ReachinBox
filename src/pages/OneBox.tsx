// OneBox.js
import { useEffect, useState } from "react";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useLocation, useNavigate } from "react-router-dom";

function OneBox() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {

    localStorage.setItem("token", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic291bXlhbmFnYXJhajIwMDJAZ21haWwuY29tIiwiaWQiOjkwMiwiZmlyc3ROYW1lIjoiU291bXlhIiwibGFzdE5hbWUiOiJOYWdhcmFqIn0sImlhdCI6MTcyMzYxNTg2MCwiZXhwIjoxNzU1MTUxODYwfQ.Ll4yuLMoyfOlko3DJbzHBwFyg4RgW6pq0tcgCsdzoLM`);
    

  }, []);

  const [selectedComponent, setSelectedComponent] = useState(null); 

  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <TopBar />
        <SubView />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <MainPage />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
