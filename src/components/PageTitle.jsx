
export default function PageTitle({ page }) {



    return (
        <div className="page-title hover-glow">
            <img src="./assets/pagegif.gif" alt="" className="page-gif gif-reverse" />
            <h1 className="hover-glow project-category">{page}</h1>
            <img src="./assets/pagegif.gif" alt="" className="page-gif" />
        </div>
    )
}



