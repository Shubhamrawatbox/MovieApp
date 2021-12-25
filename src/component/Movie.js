import React from 'react'


const Img = 'https://image.tmdb.org/t/p/w500/'
function Movie({ title, poster_path, vote_average, overview }) {

    const setvote = (vote) => {
        if (vote >= 7) {
            return 'greens'
        } else {
            return 'reds'
        }
    }
    return (
        <div className='movie'>
            <img src={poster_path ? (Img + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'} alt="not defined" />
            <div className="movie-info">
                <h2>{title}</h2>

                <span className={`vote-tag ${setvote(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview ? overview : 'Australian director Cate Shortland recalls the emotional moment when her film “Lore” was presented at the London Film Festival in October. The real-life Lore came on stage, finally prepared to acknowledge '}</p>
            </div>
        </div>
    )
}

export default Movie

