import React, {useEffect, useState} from "react";
import "./Selections.scss";
import Header from "../Header/Header";
import SelectionBlock from "./SelectionBlock";
import { EmblaCarousel } from "../EmblaCarousel/EmblaCarousel";

const Selections = () => {
  const [selections, setSelections] = useState([
    {
      id: 1,
      title: "сигма (базированные фильмы)",
      movieIds: [361, 276598, 588, 358, 589290, 1048334]
    }
  ]);

  return (
    <div>
      <div className="Selections">
        <h2 className="BlockTitle">Подборки от KINOSPOT:</h2>
        <div className="Container">
          {selections.map((selection) =>
            <SelectionBlock selection={selection} key={selection.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Selections;
