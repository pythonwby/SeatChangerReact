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
import Divider from '@mui/material/Divider';
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
const buttonStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 16, fontWeight: 'bold', height: 33, border: 2}

// if (screenfull.isEnabled){
// 	screenfull.request();
// }

function App() {
	const [seatImage, setSeatImage] = useState(listToImage());
	const [weekString, setWeekString] = useState(getWeekString());
	const [colorMode, setColorMode] = useState(lightTheme);
	const [colorModeIcon, setColorModeIcon] = useState(colorMode.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />);
	const [backgroundCssClass,setBackgroundCssClass] = useState('backgroundImage-style-light');
	const [boxBackgroundSx, setBoxBackgroundColor] = useState({bgcolor: 'rgba(210,225,230,0.7)', width: 700});
	const [paperBackgroundSx, setPaperBackgroundColor] = useState({width: 633, bgcolor: 'rgba(255,255,255,0.4)'});
	const [dividerTextSx, setDividerTextSx] = useState({fontFamily: 'LXGWWenkaiGB', fontSize: 13, color: '#333333'});

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
		if (colorMode.palette.mode === 'dark') {        // Dark to Light
			setColorModeIcon(<DarkModeOutlinedIcon/>);
			setColorMode(lightTheme);
			setBackgroundCssClass('backgroundImage-style-light');
			setBoxBackgroundColor({bgcolor: 'rgba(210,225,230,0.7)', width: 700});
			setPaperBackgroundColor({width: 633, bgcolor: 'rgba(255,255,255,0.4)'});
			setDividerTextSx({fontFamily: 'LXGWWenkaiGB', fontSize: 13, color: '#333333'});
		}else if (colorMode.palette.mode === 'light') { //Light to Dark
			setColorModeIcon(<LightModeOutlinedIcon/>);
			setColorMode(darkTheme);
			setBackgroundCssClass('backgroundImage-style-dark');
			setBoxBackgroundColor({bgcolor: 'rgba(70,75,80,0.6)', width: 700});
			setPaperBackgroundColor({width: 633, bgcolor: 'rgba(30,30,30,0.6)'});
			setDividerTextSx({fontFamily: 'LXGWWenkaiGB', fontSize: 13, color: '#BBBBBB'});
		}
	}

	return (
		<ThemeProvider theme={colorMode}>
			<CssBaseline/>
			<div className={backgroundCssClass}>
				<Container align='center' maxWidth='md'>
					<Box sx={boxBackgroundSx}>
						<Grid container spacing={1} alignContent={'center'} justifyContent={'center'}>
							<Grid item xs={12}>
								<Paper sx={paperBackgroundSx} elevation={5}>
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
								<IconButton color='info' onClick={onRefreshButtonPress}><RefreshRoundedIcon/></IconButton>
							</Grid>
							<Grid xs={1.5}/>
							<Grid xs={2}>
								<Button color='info' size='small' variant='outlined' sx={buttonStyle} onClick={onLastWeekButtonPress}>上一周</Button>
							</Grid>
							<Grid xs={2} alignContent={'center'} justifyContent={'center'}>
								<span class='span-style'>{weekString}</span>
							</Grid>
							<Grid xs={2}>
								<Button color='info' size='small' variant='outlined' sx={buttonStyle} onClick={onNextWeekButtonPress}>下一周</Button>
							</Grid>
							<Grid xs={1.5}/>
							<Grid xs={1}>
								<IconButton color='info' onClick={onColorModeChangeButtonPress}>{colorModeIcon}</IconButton>
							</Grid>
							<Grid xs={0.5}/>
							<Grid xs={12}>
								<Divider variant='middle' color='#888888' sx={dividerTextSx}>Powered by React and JavaScript</Divider>
							</Grid>
							<Grid xs={12}>
								<span class='mobile-warning-span-style'>移动端建议横屏查看该网页</span>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
