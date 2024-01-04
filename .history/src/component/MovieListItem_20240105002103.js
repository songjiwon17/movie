import Card from '@mui/material/Card';

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <Card>
            <div className="MovieListItem">
                <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                <div>
                    <h1>{item.title}</h1>
                    <p>{formatDate(item.createdAt)}</p>
                </div>
            </div>
        </Card>
    )
}
export default MovieListItem;