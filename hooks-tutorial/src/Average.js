import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

// 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여줌.
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [list, number]); // list혹은 number가 바뀌었을 때만 함수 생성
  // 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜 주어야 한다.

  /**
   * useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.
   * list 배열의 내용이 바뀔 때만 getAverage 함수 호출
   */
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </>
  );
};

export default Average;
