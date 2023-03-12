import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React memo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const TableUsers = (props: { users: string[] }) => {
    console.log("aaaaaaaaaaa")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(TableUsers)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, SetUsers] = useState(["Andrey", "Vova", "Abas"])
    const addUsers = () => {
        const newUser = 'sveta' + new Date().getTime()
        SetUsers([...users, newUser])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>AddUser</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}


export const Exemple2 = () => {
    const [a, SetA] = useState(15)
    const [b, SetB] = useState(2)

    let resultB = 1


    const count = () => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const value = Math.random()
            }
            temp = temp * i
        }
        return temp
    }


    const resultA = useMemo(count, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => SetA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => SetB(+e.currentTarget.value)}/>

        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>

    </>
}


export const HelpToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, SetUsers] = useState(["Andrey", "Vova", "Koko"])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUsers = () => {
        const newUser = 'sveta' + new Date().getTime()
        SetUsers([...users, newUser])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>add Sveta</button>
        {counter}

        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, SetBooks] = useState(["React", "JS", "StoryBook"])
    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])
    const addBooks = () => {
        const newUser = 'Angular' + new Date().getTime()
        SetBooks([...books, newUser])
    }

    // const memoBook=useMemo(()=> {
    //     return addBooks
    // },[books])

    const useCallbackBook= useCallback(addBooks,[books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}

        <Book books={newArray} addBooks={useCallbackBook}/>
    </>
}



type bookPropsType = {
    books: string[]
    addBooks: () => void
}

const Books = (props: bookPropsType) => {
    console.log("aaaaaaaaaaa")
    return <div>
        <button onClick={props.addBooks}>add Sveta</button>

        {props.books.map((u, i) => <div key={i}>{u}</div>)
        }</div>
}
const Book = React.memo(Books)