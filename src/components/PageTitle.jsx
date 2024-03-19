
export default function PageTitle({ page }) {
    return (
        <div className="ens-title">
            <img src="./assets/pagegif.gif" alt="" className="page-gif gif-reverse" />
            <h1 className="here project-category">{page}</h1>
            <img src="./assets/pagegif.gif" alt="" className="page-gif" />
        </div>
    )
}



