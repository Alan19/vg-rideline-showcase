import {getCollection} from "astro:content";

export async function DeckList() {
    const allDecks = await getCollection('decks');
    console.log(allDecks.map(value => value.data.title))

    return (
        <div>
            {allDecks.map(value =>
                <div style={{height: '4rem'}}>
                    <img src={value.data["card-art"].src} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "0 22.5%", position: "absolute", maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"}}/>
                    <p style={{position: "absolute", right: 0}}>{value.data.title}</p>
                </div>)}
        </div>
    )
}