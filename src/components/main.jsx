import Figurina from "/img/buy-comics-digital-comics.png?url"
import Maglietta from "/img/buy-comics-merchandise.png?url"
import Carte from "/img/buy-comics-subscriptions.png?url"
import Gps from "/img/buy-comics-shop-locator.png?url"
import Batteria from "/img/buy-dc-power-visa.svg?url"

export default function Main() {
    return (
        <main>
            <div className="bg-black">
           <section className="top container">
            <h3> <i className="bi bi-arrow-right"></i>  Content goes here  
                 <i className="bi bi-arrow-left"></i>   </h3>
           </section>
           
          </div>
          <div className="bg-blue">
           <section className="bottom container">
            <a className="nav-link active" aria-current="page" href="#"> <img className="fotoPiccole" src={Figurina} /> DIGITAL COMICS</a>
             <a className="nav-link active" aria-current="page" href="#"> <img className="fotoPiccole" src={Maglietta} /> DC MERCHANDISE</a>
             <a className="nav-link active" aria-current="page" href="#"> <img className="fotoPiccole" src={Carte} /> SUBSCRIPTION</a>
             <a className="nav-link active" aria-current="page" href="#"> <img className="fotoPiccole" src={Gps} />COMIC SHOP LOCATOR</a>
             <a className="nav-link active" aria-current="page" href="#"> <img className="fotoPiccole" src={Batteria} /> DC POWER VISA</a>
           </section>
          </div>
        </main>
    )
}