import { createContext, useContext } from "react";

export const EpisodeContext = createContext();

export const useEpisode = () => {
    return useContext(EpisodeContext);
};

