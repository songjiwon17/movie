import { Grid, Box, Typography} from "@mui/material";

function MovieList({items}){
    return(
        <Grid container p={6} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display:'flex'}}>
            {items?.map((item)=>{
                return (
                    <Grid key={item.id} elevation={6} sx={{margin:'0.5rem' ,border:'1px solid #ededed'}}>
                        <Grid sx={{textAlign:'center'}}>
                            <Box
                                sx={{width: 250, height: 350}}
                                component="img"
                                src={item.imgUrl}
                                alt={item.title}
                            />
                            <Typography variant="h6" sx={{color: '#fff', p:2}}>{item.title}</Typography>
                        </Grid>
                    </Grid>
                    )})}
        </Grid>
    )
}
export default MovieList;