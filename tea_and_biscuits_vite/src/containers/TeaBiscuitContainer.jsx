import { useEffect, useState } from "react";
import BiscuitList from "../components/BiscuitList";
import TeaList from "../components/TeaList";
import TeaBiscuitForm from "../components/TeaBiscuitForm";

const TeasContainer = () => {
  const [teas, setTeas] = useState([]);
  const [biscuits, setBiscuits] = useState([]);
  const [currentlyUpdating, setCurrentlyUpdating] = useState();
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchTeas();
    fetchBiscuits();
  }, []);

  const fetchTeas = () => {
    fetch(BASE_URL + "/api/teas")
      .then((response) => response.json())
      .then((teas) => setTeas(teas));
  };

  const fetchBiscuits = () => {
    fetch(BASE_URL + "/api/biscuits")
      .then((response) => response.json())
      .then((biscuits) => setBiscuits(biscuits));
  };

  const handleTeaSubmit = (newTea) => {
    console.log(newTea);
    if (newTea.id) {
      handleTeaUpdate(newTea);
      return;
    }
    fetch(BASE_URL + "/api/teas", {
      method: "POST",
      body: JSON.stringify(newTea),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchTeas());
  };

  const handleBiscuitSubmit = (newBiscuit) => {
    if (newBiscuit.id) {
      handleBiscuitUpdate(newBiscuit);
      return;
    }
    fetch(BASE_URL + "/api/biscuits", {
      method: "POST",
      body: JSON.stringify(newBiscuit),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchBiscuits());
  };

  const handleTeaDelete = (tea) => {
    fetch(BASE_URL + `/api/teas/${tea.id}`, {
      method: "DELETE",
    }).then(() => fetchTeas());
  };

  const handleBiscuitDelete = (biscuit) => {
    fetch(BASE_URL + `/api/biscuits/${biscuit.id}`, {
      method: "DELETE",
    }).then(() => fetchBiscuits());
  };

  const handleBiscuitUpdate = (biscuit) => {
    fetch(BASE_URL + `/api/biscuits/${biscuit.id}`, {
      method: "PUT",
      body: JSON.stringify(biscuit),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchBiscuits());
    setCurrentlyUpdating(undefined);
  };

  const handleTeaUpdate = (tea) => {
    fetch(BASE_URL + `/api/teas/${tea.id}`, {
      method: "PUT",
      body: JSON.stringify(tea),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchTeas());
    setCurrentlyUpdating(undefined);
  };

  const handleShowUpdate = (values) => {
    setCurrentlyUpdating(values);
  };

  return (
    <>
      <TeaBiscuitForm
        onTeaSubmit={handleTeaSubmit}
        onBiscuitSubmit={handleBiscuitSubmit}
        initialValues={currentlyUpdating}
      />
      <TeaList
        teas={teas}
        onDelete={handleTeaDelete}
        onShowUpdate={handleShowUpdate}
      />
      <BiscuitList
        biscuits={biscuits}
        onDelete={handleBiscuitDelete}
        onShowUpdate={handleShowUpdate}
      />
    </>
  );
};

export default TeasContainer;
