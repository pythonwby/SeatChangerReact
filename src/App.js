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
import Stack from '@mui/material/Stack';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import { listToImage, getWeekString, nextWeekShift, lastWeekShift, shiftToNow } from './SeatChangerCore';
import './Styles.css';

const timeNow = new Date();
const lightOrDark = 16;
const darkTheme = createTheme({palette:{mode: 'dark'}});
const lightTheme = createTheme({palette:{mode: 'light'}});
const tablecellStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 15.3, whiteSpace: 'nowrap', border: '1px dashed gray', padding: '12px 15px', bgcolor: 'rgba(0,0,0,0)'};
const emptyTablecellStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 15, whiteSpace: 'nowrap', border: 0, width: 8};
const buttonStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 16, fontWeight: 'bold', height: 33, border: 2}

// if (screenfull.isEnabled){
// 	screenfull.request();
// }

function App() {
	const [seatImage, setSeatImage] = useState(listToImage());
	const [weekString, setWeekString] = useState(getWeekString());
	const [colorMode, setColorMode] = useState(timeNow.getHours() < lightOrDark ? lightTheme : darkTheme);
	const [colorModeIcon, setColorModeIcon] = useState(colorMode.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />);
	const [backgroundCssClass,setBackgroundCssClass] = useState(timeNow.getHours() < lightOrDark ? 'backgroundImage-style-light' : 'backgroundImage-style-dark');
	const [boxBackgroundSx, setBoxBackgroundColor] = useState(timeNow.getHours() < lightOrDark ? {bgcolor: 'rgba(210,225,230,0.7)', width: 700} : {bgcolor: 'rgba(70,75,80,0.6)', width: 700});
	const [paperBackgroundSx, setPaperBackgroundColor] = useState(timeNow.getHours() < lightOrDark ? {width: 633, bgcolor: 'rgba(255,255,255,0.4)'} : {width: 633, bgcolor: 'rgba(30,30,30,0.6)'});
	const [dividerTextSx, setDividerTextSx] = useState(timeNow.getHours() < lightOrDark ? {fontFamily: 'LXGW WenKai Lite', fontSize: 13, color: '#333333'} : {fontFamily: 'LXGW WenKai Lite', fontSize: 13, color: '#BBBBBB'});

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
			setDividerTextSx({fontFamily: 'LXGW WenKai Lite', fontSize: 13, color: '#333333'});
		}else if (colorMode.palette.mode === 'light') { //Light to Dark
			setColorModeIcon(<LightModeOutlinedIcon/>);
			setColorMode(darkTheme);
			setBackgroundCssClass('backgroundImage-style-dark');
			setBoxBackgroundColor({bgcolor: 'rgba(70,75,80,0.6)', width: 700});
			setPaperBackgroundColor({width: 633, bgcolor: 'rgba(30,30,30,0.6)'});
			setDividerTextSx({fontFamily: 'LXGW WenKai Lite', fontSize: 13, color: '#BBBBBB'});
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
								<span className='span-style'>{weekString}</span>
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
								<span className='mobile-warning-span-style'>移动端建议横屏查看该网页</span>
								{/* <span className='mobile-warning-span-style'>当前为内部测试版本,一切内容以正式发布为准</span> */}
							</Grid>
							<Grid xs={12} alignContent={'center'} justifyContent={'center'}>
								<Stack spacing={1} direction='row' alignContent={'center'} justifyContent={'center'} divider={<Divider orientation="vertical" variant='middle' flexItem />}>
									<span className='info-span-style'>数据收集时间:2024.6.6</span>
									<span className='info-span-style'>数据修正时间:2024.8.9</span>
									<a href='https://github.com/pythonwby/SeatChangerReact' className='info-span-style'>GitHub</a>
									<span className='info-span-style'>SeatChangerReact by pythonwby on 2024.8.10</span>
								</Stack>
							</Grid>
							<Grid xs={12} sx={{height: '1vh'}}/>
						</Grid>
					</Box>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
