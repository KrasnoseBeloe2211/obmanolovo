import scam from './imgs/scam-peepoo-scam.gif'
import money from './imgs/money.gif'
import bin from './imgs/bin.png'
import './App.css'
import { useState } from 'react'

function App() {
	const [window, setWindow] = useState('menu')

	function OpenMenu() {
		setWindow('menu active')
	}

	return (
		<div className='App'>
			<div className='container'>
				<div className={window}>
					<h1>ПОТРАЧЕНО</h1>
					<h3>
						<b className='dot'>P.S.</b> оставшийся день на крошке хлеба
					</h3>
				</div>
				<div className='header'>
					<img src={scam} alt='' />
					<h1 className='logo'>
						ОБМАНОЛОВО<b className='dot'>.</b>
						<b className='com'>COM</b>
					</h1>
				</div>
				<div className='text'>
					<p>
						На карте минус, в душе пустота, в шкафу старый{' '}
						<b className='rollton'>роллтон</b>?
					</p>
					<p>
						<b className='dot'>Решение есть:</b> быстрые{' '}
						<b className='com'>деньги</b> к нам.
					</p>
				</div>
				<div className='fast_money'>
					<h2 className='halyava'>
						<img className='money' src={money} alt='' />
						ХАЛЯВА
						<img className='money' src={money} alt='' />
					</h2>
					<div className='free_monet_sec'>
						<div className='input_agree'>
							<h3 className='agree'>
								СОГЛАСЕН<b className='com'>?</b>
							</h3>
							<label className='checkbox'>
								<input onClick={OpenMenu} type='checkbox' />
								<span class='checkmark'></span>
							</label>
						</div>
						<img className='bean' src={bin} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
