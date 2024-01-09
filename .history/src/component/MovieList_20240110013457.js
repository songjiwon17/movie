import { Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";
import { Container } from "react-dom";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Cotnainer>
                        <Card key={item.id} className="movie">
                        <CardMedia  className="image"
                            component="img"
                            src={item.imgUrl}
                            alt={item.title}
                        />
                        <CardContent >
                            <Typography variant="h5" sx={{color: '#333', textAlign: 'center'}}>
                                {item.title}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Cotnainer>
                )})}
        </Stack>
    )
}
export default MovieList;