import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesListItem = ({serie}) => (
    <li>
        <Link to={`/series/${serie.show.id}`}>
            {serie.show.name}
        </Link>
    </li>
)
const SeriesList = (props) =>{
    return (
        <div>
            <ul className="series-list">
                {props.list.map(serie =>{
                    return <SeriesListItem serie={serie} key={serie.show.id}></SeriesListItem>
                })}
            </ul>
        </div>
    )
}

export default SeriesList;