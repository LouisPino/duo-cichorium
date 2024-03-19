import { useState, useEffect } from "react";
import '../styles/projects.css'
import PageTitle from "../components/PageTitle";
function Ensembles() {
    const [ensembles, setEnsembles] = useState(null);
    const getEnsemblesData = async () => {
        const response = await fetch("./ensembles.json");
        const data = await response.json();
        setEnsembles(data);
    };

    useEffect(() => {
        getEnsemblesData();
    }, []);

    if (ensembles === null) {
        return <PageTitle page={"Loading"} />;
    }

    if (ensembles?.length) {
        const ensembleCards = ensembles.map(function (ensemble, idx) {
            return (
                <div className="ens-card" key={ensemble.name}>
                    <img className="ens-photo" src={ensemble.img} alt="" />
                    <div className="ens-info">
                        <div className="ens-title">
                            <img src="./assets/ensgif.gif" alt="" className="ens-gif gif-reverse" />
                            <h1 className="ens-name link">{ensemble.name}</h1>
                            <img src="./assets/ensgif.gif" alt="" className="ens-gif" />
                        </div>
                        <p className="ens-bio">
                            {ensemble.bio}
                        </p>
                    </div>
                </div>
            )
        }
        )


        return ensembles ?
            <section className="ensembles-body">
                <PageTitle page="ENSEMBLES" />
                {ensembleCards}
            </section>
            :
            <h1 className="loading-title">Loading...</h1>;
    }
}

export default Ensembles;
