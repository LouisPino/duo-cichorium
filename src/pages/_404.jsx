import Photo from "../components/Photo"

export default function _404() {
  return (<div className="_404">
    <Photo photo={{
      "url": "https://res.cloudinary.com/dsvcyich1/image/upload/v1712531266/Tilly404_c2ootw.jpg",
      "credit": "",
      "title": "",
      "imgAlt": "Picture of a cat playing with chichory flowers"
    }} materialbox={true} />
  </div>)
}