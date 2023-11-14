import { useEffect, useState } from "react";


const Gallery = () => {

    const [index, setIndex] = useState(0);
    const [sculpture, setSculpture] = useState(
        [{
            name: "",
            artist: "",
            description: "",
            url: "",
            alt: "",

        }]
    )
    const [showMore, setShowMore] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/aaldacog/secoms319/master/11_3/sculptures.json");
            const json = await response.json();
            console.log(json);
            setSculpture(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    /**
     * Executes once each time we reload the webpage
     */
    useEffect(() => {
        fetchData();
    }, []);

    function handleClickNext() {
        if (index === sculpture.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1)
        }
    }
    function handleClickPrev() {
        if (index === 0) {
            setIndex(sculpture.length - 1);
        }
        else {
            setIndex(index - 1)
        }
    }
    function handleShowHideDescription() {
        setShowMore(!showMore);
    }


    return (
        <>
            <div>
                <button onClick={handleClickPrev}>Previous</button>
                <button onClick={handleClickNext}>Next</button>
                <div>
                    <h2>
                        <i>{sculpture[index].name} </i>
                        by {sculpture[index].artist}
                    </h2>
                    <h3>
                        ({index + 1} of {sculpture.length})
                    </h3>
                    <img src={sculpture[index].url} alt={sculpture[index].alt} />
                    <div>
                        <button onClick={handleShowHideDescription}>
                            {showMore ? 'Hide' : 'Show'} details
                        </button>
                        {showMore && <p>{sculpture[index].description}</p>}
                        {/* Funtion above shows when showMore is true; i.e. hides when showmore is false */}
                    </div>
                </div>
            </div>
        </>
    )
}; export default Gallery