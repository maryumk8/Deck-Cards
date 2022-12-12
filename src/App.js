import { useEffect, useState } from "react";
import Card from "./card";
import { deckArray } from "./deckarray";
import { Button } from "./index";
import { handlePostRandom } from "./actionCreators";

export default function App() {
    const [cardsArray, setCardsArray] = useState(deckArray);
    const [randomCards, setRandomCards] = useState([]);
    const [popUp, setPopUp] = useState(true);

    useEffect(() => {
        handleShuffle();
    }, []);

    const handleShuffle = async () => {
        try {
            let tempNumbersArray = [];
            let objectsOfCards = [];
            [...Array(7)].map((item) => {
                console.log(parseInt(Math.random() * 51));
                tempNumbersArray.push(parseInt(Math.random() * 51));
            });
            for (let index of tempNumbersArray) {
                objectsOfCards.push(cardsArray[index]);
            }
            setRandomCards(objectsOfCards);
            const data = await handlePostRandom(randomCards);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "40px auto 0px 180px",
                    height: 282
                }}
            >
                {randomCards &&
                    randomCards.map((card, index) => {
                        return (
                            <div key={index}>
                                <Card
                                    suits={card.suits}
                                    card={card.card}
                                    color={card.color}
                                    front={true}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="text-center mt-2">
                <Button
                    className="btn-lg"
                    variant="outline-dark "
                    onClick={handleShuffle}
                >
                    Shuffle
                </Button>
                {popUp ? (
                    <div className="popup">
                        <p>Its a Full House!!</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
