import { Grid,Card, CardMedia, Stack, CardContent, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Stack sx={{bgcolor:'pink'}}>
            {items?.map((item)=>{
                return (
                    <Grid container>
                        <Grid>

                        </Grid>
                        <Card key={item.id}>
                        <CardMedia 
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
                    </Grid>
                )})}
        </Stack>
    )
}
export default MovieList;