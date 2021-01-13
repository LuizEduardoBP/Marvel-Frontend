import "./styles.scss";
import logo from "../../assets/icons/marvel.svg";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Header(props) {
    const {search, onChange} = props
  const [open, setOpen] = useState(false);
  
  const history = useHistory();

  
  return (
    <>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="Logo da Marvel"
            onClick={() => history.push("/")}
          />
        </div>

        <div className="input-search">
          {open ? (
            <input
              placeholder="Pesquisar"
              value={search}
              onChange={onChange}
            />
          ) : null}
          <FiSearch
            size={40}
            color="white"
            style={{ right: 0 }}
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        </div>
      </header>
    </>
  );
}
