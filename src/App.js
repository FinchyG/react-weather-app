import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './WeatherDataStyles.css';

// constants for formatting date display
import Months from './components/Months';
import WeekDays from './components/WeekDays';

// component constants
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';

function App() {
	const [input, setInput] = useState('');
	const [weather, setWeather] = useState({
		loading: false,
		data: {},
		error: false,
	});

	const toDateFunction = () => {

		const currentDate = new Date();
		const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${Months[currentDate.getMonth()]
			}`;
		return date;
	};

	const enterKeySearch = async (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			setInput('');
			setWeather({ ...weather, loading: true });
			const url = 'https://api.openweathermap.org/data/2.5/weather';
			const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
			await axios
				.get(url, {
					params: {
						q: input,
						units: 'metric',
						appid: api_key,
					},
				})
				.then((res) => {
					console.log('res', res);
					setWeather({ data: res.data, loading: false, error: false });
				})
				.catch((error) => {
					setWeather({ ...weather, data: {}, error: true });
					setInput('');
					console.log('error', error);
				});
		}
	};

	const searchButtonPress = async (event) => {
		event.preventDefault();
		setInput('');
		setWeather({ ...weather, loading: true });
		const url = 'https://api.openweathermap.org/data/2.5/weather';
		const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
		await axios
			.get(url, {
				params: {
					q: input,
					units: 'metric',
					appid: api_key,
				},
			})
			.then((res) => {
				console.log('res', res);
				setWeather({ data: res.data, loading: false, error: false });
			})
			.catch((error) => {
				setWeather({ ...weather, data: {}, error: true });
				setInput('');
				console.log('error', error);
			});
		
	};

	const appStyle = {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'sans-serif',
		justifyContent: 'center',
		alignItems: 'center',
		width: '25rem',
		backgroundColor: '#D3D8E0',
		textAlign: 'center',
		margin: '3rem auto',
		borderRadius: '2rem',
		paddingBottom: '3rem',
		boxShadow: '0rem 0.2rem 0.5rem #E9EDF5'
	}

	return (
		<div style={appStyle}>
			<AppHeader
			  textContent='Place Search Weather App' 
      		/>
			<p>Type in a place and hit enter to search for current weather</p>
			<div>
				<SearchBar
					type="text"
					placeholder="Enter City Name.."
					name="query"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					onKeyDown={enterKeySearch}
				/>
			</div>
			<div>
				<SearchButton onClick={searchButtonPress} />
			</div>
			{weather.loading && (
				<>
					<br />
					<br />
					<Oval type="Oval" color="black" height={100} width={100} />
				</>
			)}
			{weather.error && (
				<>
					<br />
					<br />
					<span className="error-message">
						<FontAwesomeIcon icon={faFrown} />
						<span style={{ fontSize: '1.5rem' }}>City not found</span>
					</span>
				</>
			)}
			{weather && weather.data && weather.data.main && (
				<div>
					<div className="city-name">
						<h2>
							{weather.data.name}, <span>{weather.data.sys.country}</span>
						</h2>
					</div>
					<div className="date">
						<span>{toDateFunction()}</span>
					</div>
					<div className="icon-temp">
						<img
							className=""
							src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
							alt={weather.data.weather[0].description}
						/>
						{Math.round(weather.data.main.temp)}
						<sup className="deg">°C</sup>
					</div>
					<div className="des-wind">
						<p>{weather.data.weather[0].description.toUpperCase()}</p>
						<p>Wind Speed: {weather.data.wind.speed}m/s</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;