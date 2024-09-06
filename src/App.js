// SeatChangerReact 前端+Button信号映射
// Author: pythonwby

import {useState} from 'react';
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
const lightOrDark = 18;    //Light和Dark模式时间分界线
const darkTheme = createTheme({palette:{mode: 'dark'}});
const lightTheme = createTheme({palette:{mode: 'light'}});
const tablecellStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 15, whiteSpace: 'nowrap', border: '1px dashed gray', padding: '12px 9px', bgcolor: 'rgba(0,0,0,0)'};
const emptyTablecellStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 15, whiteSpace: 'nowrap', border: 0, width: 8};
const buttonStyle = {fontFamily: 'LXGW WenKai Lite', fontSize: 16, fontWeight: 'bold', height: 33, border: 2};

function CloudflareLogoSVG() {
	return (<svg viewBox="0 0 105 36" role="img" width="60px" height="17px" aria-hidden="true"><path fill="#000" d="M11.679 26.754h2.353v6.423h4.111v2.06H11.68v-8.483zM20.58 31.02v-.024c0-2.436 1.965-4.412 4.584-4.412 2.62 0 4.56 1.951 4.56 4.387v.025c0 2.436-1.965 4.41-4.584 4.41-2.618 0-4.56-1.95-4.56-4.386zm6.743 0v-.024c0-1.223-.885-2.291-2.183-2.291-1.285 0-2.147 1.042-2.147 2.266v.025c0 1.222.886 2.29 2.171 2.29 1.298 0 2.159-1.042 2.159-2.266zM32.604 31.517v-4.763h2.389v4.714c0 1.223.618 1.806 1.564 1.806.946 0 1.564-.557 1.564-1.745v-4.775h2.39v4.7c0 2.74-1.564 3.939-3.978 3.939s-3.93-1.223-3.93-3.878M44.112 26.755h3.274c3.032 0 4.79 1.744 4.79 4.192v.025c0 2.447-1.782 4.265-4.838 4.265h-3.226v-8.483zm3.31 6.397c1.408 0 2.34-.775 2.34-2.146v-.024c0-1.357-.932-2.145-2.34-2.145h-.958v4.316l.959-.001zM55.596 26.754h6.791v2.06h-4.438v1.442h4.014v1.951h-4.014v3.03h-2.353v-8.483zM65.661 26.754h2.353v6.423h4.111v2.06h-6.464v-8.483zM78.273 26.693h2.268l3.614 8.544h-2.522l-.62-1.515H77.74l-.606 1.515h-2.474l3.614-8.544zm2.062 5.2l-.946-2.413-.959 2.412h1.905zM87.186 26.754H91.2c1.298 0 2.195.34 2.765.921.498.485.752 1.14.752 1.976v.024c0 1.296-.693 2.156-1.746 2.605l2.025 2.957H92.28l-1.71-2.57h-1.03v2.57h-2.353v-8.483zm3.905 4.072c.8 0 1.262-.388 1.262-1.006v-.024c0-.667-.486-1.006-1.275-1.006h-1.54v2.038l1.553-.002zM98.112 26.754h6.827v2h-4.498v1.284h4.075v1.854h-4.075v1.346H105v1.999h-6.888v-8.483zM6.528 32.014c-.33.744-1.023 1.272-1.944 1.272-1.286 0-2.171-1.067-2.171-2.29v-.025c0-1.223.86-2.266 2.146-2.266.97 0 1.708.595 2.02 1.406h2.48c-.398-2.02-2.173-3.526-4.475-3.526-2.62 0-4.584 1.977-4.584 4.41v.024c0 2.436 1.94 4.388 4.56 4.388 2.24 0 3.991-1.45 4.453-3.393H6.528z"></path><path d="M89.012 22.355l.257-.887c.306-1.056.192-2.031-.321-2.748-.472-.66-1.259-1.049-2.214-1.094l-18.096-.229a.358.358 0 01-.285-.151.367.367 0 01-.04-.326.481.481 0 01.42-.321l18.263-.232c2.166-.099 4.512-1.856 5.333-3.998L93.37 9.65a.659.659 0 00.028-.36C92.216 3.975 87.468 0 81.792 0c-5.23 0-9.67 3.373-11.263 8.061a5.34 5.34 0 00-3.756-1.039 5.356 5.356 0 00-4.637 6.644c-4.099.12-7.386 3.475-7.386 7.6 0 .368.028.735.082 1.1a.354.354 0 00.348.305l33.408.004h.009a.44.44 0 00.415-.32z" fill="#F6821F"></path><path d="M95.04 9.847c-.167 0-.334.004-.5.013a.28.28 0 00-.079.017.285.285 0 00-.182.192l-.712 2.456c-.305 1.055-.192 2.03.322 2.746.471.661 1.258 1.05 2.213 1.094l3.858.232a.351.351 0 01.275.149.365.365 0 01.041.328.484.484 0 01-.42.32l-4.008.232c-2.176.1-4.521 1.856-5.342 3.998l-.29.756a.212.212 0 00.095.262c.03.017.062.027.096.028h13.802a.366.366 0 00.356-.265 9.846 9.846 0 00.367-2.677c-.001-5.457-4.429-9.88-9.891-9.88z" fill="#FBAD41"></path></svg>);
}

function GithubLogoSVG() {
	return (<svg height="20" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default"><path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path></svg>);
}

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
							{/* <Grid item xs={12}>
								<span className='data-out-of-date-warning-style'>数据已过时，暂未更新</span>
							</Grid> */}
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
														<TableCell align='center' sx={emptyTablecellStyle}/>
														<TableCell align='center' sx={tablecellStyle}>{s[6]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[7]}</TableCell>
														<TableCell align='center' sx={emptyTablecellStyle}/>
														<TableCell align='center' sx={tablecellStyle}>{s[9]}</TableCell>
														<TableCell align='center' sx={tablecellStyle}>{s[10]}</TableCell>
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
								<Divider variant='middle' color='#888888' sx={dividerTextSx}>Powered by React & JavaScript</Divider>
							</Grid>
							<Grid xs={12}>
								<span className='mobile-warning-span-style'>移动端建议横屏查看该网页</span>
							</Grid>
							<Grid xs={12} alignContent={'center'} justifyContent={'center'}>
								<Stack spacing={0.7} sx={{height: '4.5vh'}} direction='row' alignContent={'center'} justifyContent={'center'} divider={<Divider orientation="vertical" variant='middle' flexItem />}>
									<a rel="noreferrer" target='_blank' href='https://github.com/pythonwby/SeatChangerReact' className='info-span-style'><GithubLogoSVG/></a>
									<a rel="noreferrer" target='_blank' href='https://www.cloudflare.com'><CloudflareLogoSVG/></a>
									<span className='info-span-style'>S.C.R. V1.2.1 by pythonwby on 2024.9.6</span>
									<span className='info-span-style'>Based on Cloudflare Pages</span>
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
