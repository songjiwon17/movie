function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <div className="MovieListItem">
            <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
            <div>
                <h1>{item.title}</h1>
                <p>{item.rating}</p>
                <p>{formatDate(item.createdAt)}</p>
            </div>
        </div>
    )
}
export default MovieListItem;