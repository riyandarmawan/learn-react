function ShareButton({nama, warnaLatarBelakang, warnaTeks}) {
    return(
        <>
            <button style={{backgroundColor:warnaLatarBelakang, color:warnaTeks}}>{nama}</button>
        </>
    )
}  

export default ShareButton