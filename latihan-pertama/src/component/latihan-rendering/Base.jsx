const Base = () => {
    const namaSiswa = ['Ipul Saripul', 'Ucup Marucup', 'Mamet']
    const dataKelas = [
        {namaKelas:'X-RPL',jurusan:'REKAYASA PERANGKAT LUNAK'}, //0
        {namaKelas:'X-TP',jurusan:'TEKNIK PERMESINAN'},         //1
        {namaKelas:'X-AK',jurusan:'AKUNTANSI'},                 //2
    ]

    return(
        <>
            <h1>
                {namaSiswa[1]}
            </h1>
            {/* menampilkan json bisa menggunakan kurung siku dengan nama key/indexnya ataupun bisa juga menggunakan simbol dot atau titik "." dilanjut dengan nama key/indexnya */}
            <h2>Kelasnya adalah {dataKelas[2]['namaKelas']} dijurusan {dataKelas[2].jurusan}</h2>
        </>
    )
}

export default Base