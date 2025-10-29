import React, { useState } from 'react'
import axios from 'axios'


function App() {
const [text, setText] = useState('')
const [result, setResult] = useState<any>(null)
const [loading, setLoading] = useState(false)


const handleTranslate = async () => {
setLoading(true)
try {
const resp = await axios.post('http://localhost:3001/api/translate', { text })
setResult(resp.data)
} catch (err) {
alert('Erro: ' + (err as any).message)
} finally {
setLoading(false)
}
}


return (
<div style={{ padding: 20, fontFamily: 'Arial' }}>
<h1>Tradutor para Libras — PoC</h1>
<textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} cols={70} placeholder="Digite aqui..." />
<br />
<button onClick={handleTranslate} disabled={loading || !text}>Traduzir</button>
<div style={{ marginTop: 20 }}>
{loading && <div>Processando...</div>}
{result && (
<pre style={{ background: '#eee', padding: 10 }}>{JSON.stringify(result, null, 2)}</pre>
)}
</div>
</div>
)
}


export default App
