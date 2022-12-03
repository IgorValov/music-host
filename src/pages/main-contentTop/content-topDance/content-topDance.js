import React from "react";
import axios from "axios";
import { TrackItem } from "./track-item";
import { useDispatch } from "react-redux";
import { addTracks } from "../../../store/actions/creators/top";
import { useSelector } from "react-redux";
import { tracksSelector } from "../../../store/selectors/top";

export const TopDanceTrack = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(tracksSelector);
  console.log(tracks);
  const TopTrack = async () => {
    const response = await axios.get(
      "https://painassasin.online/catalog/track/favorite/all/"
    );

    dispatch(addTracks(response.data));
    console.log(response.data);
  };

  return (
    <div className="content__playlist playlist">
      <button className="fetch-button" onClick={TopTrack}>
        Показать все треки
      </button>
      {tracks &&
        tracks.map((track, index) => {
          return <TrackItem track={track} index={index} />;
        })}
    </div>
  );
};
