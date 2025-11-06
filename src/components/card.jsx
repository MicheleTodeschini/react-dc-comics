export default function Card(props) {
    return(
           <div className="col-2  " key={props.id}>
                        <div className="card">
                            <img className="card-img-top" src={props.thumb} alt={props.title} />
                            <div className="card-body">
                                <p>{props.series}</p>
                            </div>
                        </div>
                    </div>
    )
}