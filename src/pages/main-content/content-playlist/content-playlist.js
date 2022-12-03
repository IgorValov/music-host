import React from "react";
import axios from "axios";
import { TrackItem } from "./track-item";
import { useDispatch } from "react-redux";
import { addTracks } from "../../../store/actions/creators/tracks";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../store/selectors/tracks";

const PlayList = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(tracksSelector);
  console.log(tracks);
  const fetchData = async () => {
    const response = await axios.get(
      "https://painassasin.online/catalog/track/all"
    );

    dispatch(addTracks(response.data));
  };

  return (
    <div className="content__playlist playlist">
      <button className="fetch-button" onClick={fetchData}>
        Показать все треки
      </button>
      {tracks &&
        tracks.map((track, index) => {
          return <TrackItem track={track} index={index} />;
        })}
    </div>
  );
};

export default PlayList;
