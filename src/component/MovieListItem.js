import {Container, Box} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";

function MovieListItem({item}){

    function formatDate(value){
        const date = new Date(value);
        return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    }

    return(
        <Container sx={{bgcolor:'pink'}}>
            <Card variant="outlined" sx={{ maxWidth: 120, bgcolor:'#ccc'}}>
                <CardMedia>
                    <div className="MovieListItem">
                        <img className="MovieListItem-img" src={item.imgUrl} alt={item.title}/>
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1>{item.title}</h1>
                        <p>{formatDate(item.createdAt)}</p>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default MovieListItem;