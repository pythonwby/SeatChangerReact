import {useState} from 'react';
// import screenfull from 'screenfull';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import { listToImage, getWeekString, nextWeekShift, lastWeekShift, shiftToNow } from './SeatChangerCore';
import './Styles.css';

const darkTheme = createTheme({palette:{mode: 'dark'}});
const lightTheme = createTheme({palette:{mode: 'light'}});
const tablecellStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 15.3, whiteSpace: 'nowrap', border: '1px dashed gray', padding: '12px 15px', bgcolor: 'rgba(0,0,0,0)'};
const emptyTablecellStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 15, whiteSpace: 'nowrap', border: 0, width: 8};
const buttonStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 16, fontWeight: 'bold', height: 33}

// if (screenfull.isEnabled){
// 	screenfull.request();
// }

function App() {
	const [seatImage, setSeatImage] = useState(listToImage());
	const [weekString, setWeekString] = useState(getWeekString());
	const [colorMode, setColorMode] = useState(lightTheme);
	const [colorModeIcon, setColorModeIcon] = useState(colorMode.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />);

	function onNextWeekButtonPress(){
		nextWeekShift();
		setSeatImage(listToImage());
		setWeekString(getWeekString());
	}

	function onLastWeekButtonPress(){
		lastWeekShift();
		setSeatImage(listToImage());
		setWeekString(getWeekString());
	}

	function onRefreshButtonPress(){
		shiftToNow();
		setSeatImage(listToImage());
		setWeekString(getWeekString());
	}

	function onColorModeChangeButtonPress(){
		if (colorMode.palette.mode === 'dark') {
			setColorModeIcon(<DarkModeOutlinedIcon/>);
			setColorMode(lightTheme);
		}else if (colorMode.palette.mode === 'light') {
			setColorModeIcon(<LightModeOutlinedIcon/>);
			setColorMode(darkTheme);
		}
	}

	return (
		<ThemeProvider theme={colorMode}>
			<CssBaseline/>
			<div className='backgroundImage-style'>
				<Container align='center' maxWidth='md'>
					<Box sx={{bgcolor: 'rgba(230,230,230,0.5)', width: 700, height: '101vh'}}>
						<Grid container spacing={1} alignContent={'center'} justifyContent={'center'}>
							<Grid item xs={12}>
								<Paper sx={{width: 633, bgcolor: 'rgba(255,255,255,0.2)'}} elevation={4}>
									<TableContainer>
										<Table>
											<TableBody>
												{seatImage.map((s)=>(
													<TableRow>
														<TableCell align='center' sx={tablecellStyle}>{s[0]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[1]}</TableCell>
														<TableCell align='center' sx={emptyTablecellStyle}/>
														<TableCell align='center' sx={tablecellStyle}>{s[3]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[4]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[5]}</TableCell>
														<TableCell align='center' sx={emptyTablecellStyle}/>
														<TableCell align='center' sx={tablecellStyle}>{s[7]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[8]}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Paper>
							</Grid>
							<Grid xs={12} sx={{height: '1.5vh'}}/>
							<Grid xs={0.5}/>
							<Grid xs={1}>
								<IconButton color='primary' onClick={onRefreshButtonPress}><RefreshRoundedIcon/></IconButton>
							</Grid>
							<Grid xs={1.5}/>
							<Grid xs={2}>
								<Button size='small' variant='outlined' sx={buttonStyle} onClick={onLastWeekButtonPress}>上一周</Button>
							</Grid>
							<Grid xs={2} alignContent={'center'} justifyContent={'center'}>
								<span class='span-style'>{weekString}</span>
							</Grid>
							<Grid xs={2}>
								<Button size='small' variant='outlined' sx={buttonStyle} onClick={onNextWeekButtonPress}>下一周</Button>
							</Grid>
							<Grid xs={1.5}/>
							<Grid xs={1}>
								<IconButton color='primary' onClick={onColorModeChangeButtonPress}>{colorModeIcon}</IconButton>
							</Grid>
							<Grid xs={0.5}/>
						</Grid>
					</Box>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
