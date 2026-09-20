import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"

export default function TestPage(){
    return(
        <div className="container mx-auto">
            <h1>Page teste des composants</h1>
            <p>Je teste mes composant sur cette page...</p>
            <h2>Boutons</h2>
            <hr />
            <div className="flex gap-4">
                <SecondaryButton text="VOIR MES PROJETS" />
                <PrimaryButton text="ME CONTACTER" />
            </div>
        </div>
    )
}