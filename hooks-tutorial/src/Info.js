import React, { useReducer } from "react";

// useReducer의 가장 큰 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target); // e.target이 reducer의 action으로 간다
  };

  return (
    <div>
      <div>
        <input name="name" input={name} onChange={onChange} />
        <input name="nickname" input={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 : </b>
          {name}
        </div>
        <div>
          <b>닉네임 : </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
