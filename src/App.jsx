import './index.css'
const biodata = {
  nama: "Hilwa Isnaini Marfuah",
  img: "./public/image/photo.webp",
  ttl : "15 Maret 2004",
  umur: "20 tahun",
  hobi: ["membaca", "ngoding", "ngegame"]
  };

export default function App() {
  return (
    <>
      <div className="card">
        <h1>Tugas 1 Kelompok Nebula</h1>
        <div className="data">
          <h2>Biodata</h2>
          <img src={biodata.img} alt="" />
          <h3>{biodata.nama}</h3>
          <h3>{biodata.ttl}</h3>
          <h3>{biodata.umur}</h3>
          {biodata.hobi.map((hob, index)=>(
            <button key={index}>{hob}</button>
          ))}
        </div>
      </div>
    </>
  )
}



