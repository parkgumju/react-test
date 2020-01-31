import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    e => {
      const nexList = list.concat(parseInt(number));
      setList(nexList);
      setNumber("");
      inputEl.current.focus(); //해당 인풋창에 포커싱
    },
    [number, list] //이 부분이 이해가 안감 , list 만 단독으로 사용시 에러남
  );

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <b>평균값:</b>
      {avg}
    </div>
  );
};

export default Average;
