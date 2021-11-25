import React, { useReducer, useState } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 해당 없으면 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  /**
   * state : 현재 가리키고 있는 상태
   * dispatch : 액션을 발생시키는 함수 >> dispatch(action)
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // 두번째 파라미터는 기본값

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* setValue에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링함. */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
