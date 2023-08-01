import React, { useState } from 'react'
import './App.css'

function App() {
	const [before, setBefore] = useState('')
	const [after, setAfter] = useState('')
	const [result, setResult] = useState('')
	const handleBefore = e => {
		setBefore(e.target.value.split('\n'))
	}
	const handleAfter = e => {
		setAfter(e.target.value.split('\n'))
	}
	const lcs = (a, b) => {
		var arr = new Array(b.length + 1)
		for (var i = 0; i < b.length + 1; i++) {
			arr[i] = new Array(a.length + 1)
			for(var j = 0;j<a.length+1;j++)
				arr[i][j] = 0;
		}
		const la = a.length
		const lb = b.length
		for (var i = 1; i < lb + 1; i++) {
			for (var j = 1; j < la + 1; j++) {
				if (a[j - 1] === b[i - 1]) arr[i][j] = arr[i - 1][j - 1] + 1
				else arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
			}
		}
		var tmp = a
		a = b
		b = tmp
		var i = la,
			j = lb
		var aa = []
		var bb = []
		while (i > 0 && j > 0) {
			if (a[i - 1] === b[j - 1]) {
				aa.push(i - 1)
				bb.push(j - 1)
				i--
				j--
			} else {
				if (arr[i - 1][j] > arr[i][j - 1]) i--
				else j--
			}
		}
		aa.reverse()
		bb.reverse()
		return [bb, aa]
	}
	return (
		<div className="App">
			<textarea type="textarea" onChange={handleBefore} style={{ width: '500px', height: '500px' }} />
			<textarea type="textarea" onChange={handleAfter} style={{ width: '500px', height: '500px' }} />
			<br />
			<button
				onClick={() => {
					const res = lcs(before, after)
					const a = res[0]
					const b = res[1]
					const bef = before
					const aft = after
					const arr = []
					let l = 0,
						r = 0
					for (let i = 0; i < a.length; i++) {
						let t = ''
						while (l < a[i]) {
							t += bef[l] + '\n'
							l++
						}
						if (t) arr.push([t, 'red', 'white'])
						t = ''
						while (r < b[i]) {
							t += aft[r] + '\n'
							r++
						}
						if (t) arr.push([t, 'green', 'white'])
						arr.push([bef[a[i]] + '\n', 'white', 'black'])
						l++
						r++
					}
					let t = ''
					while (l < a.length) {
						t += bef[l] + '\n'
						l++
					}
					t = ''
					while (l < bef.length) {
						t += bef[l] + '\n'
						l++
					}
					if (t) arr.push([t, 'red', 'white'])
					t = ''
					while (r < aft.length) {
						t += aft[r] + '\n'
						r++
					}
					if (t) arr.push([t, 'green', 'white'])
					setResult(arr.map(a => <span style={{ backgroundColor: a[1], color: a[2], fontSize: '1.5rem' }}>{a[0]}</span>))
				}}
			>
				Submit
			</button>
			<br />
			<div style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{result}</div>
		</div>
	)
}

export default App
