import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"/>
            
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