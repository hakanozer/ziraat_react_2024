import React, { memo, useCallback, useContext, useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IProduct } from '../models/IProduct'
import Navbar from '../components/Navbar'
import { DataContext, IContext } from '../DataContext'

function Dashboard(props: {age: number}) {

  const params = useParams()  
  const location = useLocation()
  const item = location.state as IProduct
  //console.log(item)

  const { getItem, setItem } = useContext(DataContext)

  function reducer(state:number, action:string ) {
    if(action === "plus") {
        return state + 10
    }else if (action === "minus") {
        return state - 10
    }else {
        return 0
    }
  }

  const [count, dipatch] = useReducer(reducer, 0)

  const callClick = useCallback(() => {
    console.log("this line call", count)
  }, [props.age])

  function MyComponent(props: {count: number}) {
    // Contrived use of `useCallback()`
    const handleClick = useCallback(() => {
      console.log('You clicked');
    }, [props.count]);
  
    return <MyChild onClick={handleClick} />;
  }

  function MyChild ({ onClick }: any) {
    return <button onClick={onClick}>I am a child</button>;
  }

  /*
  const myComponent = memo( function myComponent(props: any) {
  }, (prevProps:number, nextProps: number) => {
    return 10
  } )
  */


  return (
    <>
        <Navbar />
        <h1>{getItem.title}</h1>
        <h2>Welcome Dashboard</h2>
        <div>{ item && item.title }</div>
        <div>{ params.pid }</div>

        <h3>{count}</h3>
        <button onClick={() => dipatch("plus")}>+</button>
        <button onClick={() => dipatch("minus")}>-</button>
        
        <button onClick={callClick}>Call</button>

        <hr></hr>
        <MyComponent count={count}  />

    </>
  )
}

export default Dashboard