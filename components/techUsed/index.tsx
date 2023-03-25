import { Box, Typography } from "@mui/material"
import { useDarkMode } from '../../hooks/useDarkMode';

export const TechUsed = ({ techStack }: { techStack: string }) => {
    const { isDarkMode } = useDarkMode();
    return (
        <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <Typography fontWeight={600}>Tech stack</Typography>
            <Typography>{techStack}</Typography>
        </Box>
    )
}
