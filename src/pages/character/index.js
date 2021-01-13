import "./styles.scss";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import api from "../../services/api";

export function Character() {
  const [comics, setComics] = useState([]);
  const location = useLocation();
  const data = location.state;
  const id = data.id;

  useEffect(() => {
    async function getComic() {
      try {
        const key =
          "?ts=1&apikey=af95085f5056fbb00e65e3bc94a455f2&hash=dca3d9faf47973b9c730b8e14b587db9";
        const { data } = await api.get(
          `/v1/public/characters/${id}/comics${key}`
        );
        const comic = data.data.results;
        setComics(comic);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    }
    getComic();
  }, [id]);

  console.log(comics);
  return (
    <>
      <Header />
      <div className="character-page">
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />

        <div className="name-character">
          <span className="bold">Name: </span>
          <span>{data.name}</span>
        </div>

        <div className="description-character">
          <span className="bold">Description: </span>
          <span>
            {data.description !== ""
              ? data.description
              : `No character description`}
          </span>
        </div>
      </div>

      <div className="comic-list">
        <h1>Comics</h1>
        <Slider>
          {comics.length === 0 ? (
            <div className="comics"></div>
          ) : (
            comics.map((item) => {
              return (
                <div className="comics">
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </>
  );
}
