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
import listToImage from './SeatChangerCore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Font.css';

function App() {
	const darkTheme = createTheme({palette:{mode: 'dark'}});
	const [seatImage, setSeatImage] = useState(listToImage());
	const tablecellStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 15, whiteSpace: 'nowrap', border: '1px dashed gray', padding: '13.3px 16px'};
	const emptyTablecellStyle = {fontFamily: 'LXGWWenkaiGB', fontSize: 15, whiteSpace: 'nowrap', border: 0, width: 8};
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline/>
			<Container align='center' maxWidth='md'>
				<Box sx={{bgcolor: '#333333', width: 700}}>
					<Grid container spacing={1} alignContent={'center'} justifyContent={'center'}>
						<Grid item xs={12}>
							<Paper sx={{width: 633}}>
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
						<Grid xs={10}/>
						<Grid xs>
							<Button >123</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
