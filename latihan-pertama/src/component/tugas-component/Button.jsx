const Button = ({kelas, description}) => {
    return(
        <>
            <button className={kelas}>{description}</button>
        </>
    )
}

export default Button