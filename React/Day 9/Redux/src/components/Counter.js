import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state=>state.counter.showCounter)
  const incrementhandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  };
  const increasedhandler = () => {
    dispatch(counterActions.increased(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}> {counter} </div>}
      <button onClick={incrementhandler}>increment</button>
      <button onClick={increasedhandler}>increasesd by amount</button>
      <button onClick={decrementhandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
