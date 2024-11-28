



const SeasonDetail =  ({season, urrentEpisode }) => {
     
    

     const handleEpisodeClick = async (episode) => {
        setCurrentEpisode(episode.file)
        
    };

    return(
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{season.title}</h3>
            <p className="text-gray-500 text-sm">{season.episodes.length} Episodes</p>
            <ul className="mt-2 space-y-1">
                {season.episodes.map((episode) => (
                    <li key={episode.episode} 
                    className="text-gray-700"
                    onClick={() => handleEpisodeClick(episode)}
                    
                    >
                        {episode.title}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeasonDetail;
