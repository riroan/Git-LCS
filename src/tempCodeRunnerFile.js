
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
							console.log(arr)
							setResult(arr.map(a => <span style={{ backgroundColor: a[1], color: a[2], fontSize: '1.5rem' }}>{a[0]}</span>))