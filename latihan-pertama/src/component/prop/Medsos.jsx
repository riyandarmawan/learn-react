import ShareButton from "./ShareButton"

const Medsos = () => {
    return(
        <>
            <h1>Klik untuk berbagi tautan</h1>
            <ShareButton nama={'Facebook'} warnaLatarBelakang={'blue'} warnaTeks={'white'}/>
            <ShareButton nama={'Instagram'} warnaLatarBelakang={'purple'} warnaTeks={'white'}/>
            <ShareButton nama={'TikTok'} warnaLatarBelakang={'black'} warnaTeks={'white'}/>
        </>
    )
}

export default Medsos