import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';

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
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Lizard</Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
            
            {/* <div className="MovieListItem">
                <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                <div>
                    <h1>{item.title}</h1>
                    <p>{formatDate(item.createdAt)}</p>
                </div>
            </div> */}
        </Card>
    )
}
export default MovieListItem;