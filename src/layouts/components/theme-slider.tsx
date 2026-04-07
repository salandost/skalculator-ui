import Switch from '@mui/material/Switch';
import { useColorScheme } from "@mui/material";

export function ThemeSlider() {
    const { colorScheme, setMode } = useColorScheme()
    
    return <Switch
    aria-label="Switch theme"
    checked={colorScheme === 'dark'}
    onChange={()=>setMode(colorScheme === 'dark' ? 'light' : 'dark')}
    />
}