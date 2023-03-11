import { Box, Typography, Button, Grid } from "@mui/material"
import { useRouter } from 'next/router'
import { useDarkMode } from "../../hooks/useDarkMode"
import { CardItemProps } from "./card.type"
import classes from "./cardItem.module.scss"

export const Card = ({ title, date, description, image, slug, endpoint }: CardItemProps) => {
    const { isDarkMode } = useDarkMode();
    const router = useRouter();
    const handleRedirect = () => {
        router.push(
            {
                pathname: `${endpoint}/${slug}`,
            })
    }
    return (

        <Grid container
            className={classes.card}
            justifyContent='center'

            sx={{
                padding: "1rem",
                width: "98%",
                minHeight: '50vh'
            }}>
            <Grid item xs={12} md={4} className={classes.card__container} sx={{ margin: "1rem" }}>
                <img className={classes.card__image} src={image} alt={title} />
            </Grid>
            <Grid item xs={12} md={6} justifyContent='flex-start'
                sx={{ textAlign: 'left', margin: '1rem' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Typography component="h2" sx={{ fontWeight: "600", fontSize: "large" }}>{title}</Typography>
                    <Typography sx={{ color: "#2753d7", fontWeight: "600" }}>{date}</Typography>
                </Box>
                <Typography sx={{  marginTop: "2rem", textOverflow: "ellipsis" }}>
                    {description}
                </Typography>
                <Button
                    onClick={handleRedirect}>Read more</Button>
            </Grid>
        </Grid>
    )
}
