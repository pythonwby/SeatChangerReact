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

function App() {
	const [seatImage, setSeatImage] = useState(listToImage());
	return (
		<>
			<Container maxWidth='sm'>
				<Box sx={{bgcolor: '#cfe8fc'}}>
					<Grid container spacing={1} alignContent={'center'} justifyContent={'center'}>
						<Grid item xs={12}>
							<TableContainer component={Paper}>
								<Table sx={{minWidth: 30}}>
									<TableBody>
										{seatImage.map((seat)=>(
											<TableRow>
												<TableCell>{seat[0]}</TableCell>
												<TableCell>{seat[1]}</TableCell>
												<TableCell>{seat[2]}</TableCell>
												<TableCell>{seat[3]}</TableCell>
												<TableCell>{seat[4]}</TableCell>
												<TableCell>{seat[5]}</TableCell>
												<TableCell>{seat[6]}</TableCell>
												<TableCell>{seat[7]}</TableCell>
												<TableCell>{seat[8]}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default App;
