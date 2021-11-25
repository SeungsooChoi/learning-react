import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // componentDidMount와 componentDidUpdate를 합친 형태.. 마운트 될때만 실행하고싶으면 두번째 파라미터로 []를 넣어주면 된다.
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name);

    return () => {
      console.log("cleanup : 언마운트 되기 전이나 업데이트 직전");
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input input={name} onChange={onChangeName} />
        <input input={nickname} onChange={onChangeNickname} />
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
