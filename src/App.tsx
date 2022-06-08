import React, {ChangeEvent} from 'react'
import './App.css'
import {Input} from './components/Input'
import schema from './helpers/schemaTable'
import {ISchemeRow, IDataRow} from './interfaces'

const list: Array<IDataRow> = [
    {r_n: 123432, name: 'Василий', age: 34, gender: true, status: 1},
    {r_n: 65645, name: 'Оксана', age: 26, gender: false, status: 2},
    {r_n: 23423, name: 'Анатолий', age: 44, gender: true, status: 3},
    {r_n: 67652, name: 'Любовь', age: 21, gender: false, status: 4},
    {r_n: 5652256, name: 'Наталья', age: 19, gender: false, status: 5}
]

// document!.querySelector<HTMLElement>('body')!.style.background = 'red';
// document!.querySelector<HTMLElement>('#root')!.parentElement!.style.background = 'red';
// const $ = <T>(selector, scope = document): T =>
//     scope.querySelector(selector);
// const example: HTMLElement | null = document.querySelector("body")



function App() {
    const [value, setValue] = React.useState('text')
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    React.useEffect(() => {
        // document!.querySelector<HTMLElement>('body')!.style.background = 'red';
        // document!.body!.style! = 'background: red'
    }, [])

    React.useEffect(()  => {
        document.body.classList.add('bg-black');
        document.querySelector('#root')!.classList.add('bg');

        return () => {
            document.body.classList.remove('bg-black');
        };
    });

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div style={{textAlign: 'left', width: 500}}>
                    <Input
                        className={'column'}
                        name={'idInput1'}
                        label={'Label Input 1'}
                        value={value}
                        onChange={handleChangeValue}/>
                    <Input
                        disabled={true}
                        name={'idInput2'}
                        label={'Since properties are compatible, you can easily migrate and use your old migrate and use your old'}
                        value={value}
                        onChange={handleChangeValue}/>
                    <Input
                        name={'idInput3'}
                        label={'Since properties are compatible'}
                        value={value}
                        onChange={handleChangeValue}/>
                </div>
                <div style={{textAlign: 'left', width: 500}}>
                    <table className={'table'}>
                        <thead>
                        <tr>
                            {schema.map(th => (
                                <th key={th.id}>{th.label}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {list.map(tr => (
                            <tr key={tr.r_n}>
                                {schema.map((td: ISchemeRow) => {
                                    const {id, handler, association} = td
                                    return (
                                        <td key={id}>
                                            {handler(tr[association as keyof IDataRow])}
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </header>
        </div>
    );
}

export default App
