import React from 'react'

const handleButtonClick = (id) => {
    console.log("pressed", id)
}

const Suggestions = (props) => {
    console.log(props.results);
    const { Search, Response } = props.results;
    console.log(props.results);

    if ( Response === undefined || Response === 'False' ) return null;
    const options = Search.map( r => (
        <li key={r.imdbID}>
            <button onClick = { () => console.log('pressed')}>
            {r.Title}
            </button>
        </li>
    ))
  return <ul>{options}</ul>
//   onClick={(id) => handleButtonClick(id)}>
}

export default Suggestions