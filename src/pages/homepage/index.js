import "./styles.scss";

import api from "../../services/api";
import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/character-card";
import { Header } from "../../components/header";

export function Homepage() {
  const [character, setCharacter] = useState({ character: [] });
  const [searchedData, setSearchedData] = useState([]) 
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(50)

  useEffect(() => {
    async function Request() {
      try {
        const key =
          "?ts=1&apikey=af95085f5056fbb00e65e3bc94a455f2&hash=dca3d9faf47973b9c730b8e14b587db9";
        const { data } = await api.get(`/v1/public/characters${key}&limit=${load}`);
        const characters = data.data.results;
        setCharacter({ character: characters });
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    }
    Request();
  }, [load]);

  useEffect(()=>{
    async function Search(){
        try{
          const key =
          "?ts=1&apikey=af95085f5056fbb00e65e3bc94a455f2&hash=dca3d9faf47973b9c730b8e14b587db9";
          const { data } = search!=="" ? await api.get(`/v1/public/characters${key}&nameStartsWith=${search.replace(" ", "%20")}`) : "";
          data!==undefined ? setSearchedData(data.data.results) : setSearchedData([])
        }catch(error){
            console.error("Erro ao buscar itens", error)
        }
    }
    Search()
},[search])

console.log(searchedData)

  

  const data = search==="" ? character.character : searchedData

  return (
    <>
      <Header search={search} onChange={(e) => setSearch(e.target.value)}/>
      <CharacterCard data={data}/>
    </>
  );
}
