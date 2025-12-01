import { useCallback, useEffect, useState } from "react";

function Counter() {
  console.log("Render Counter!");

  /**
   * useState: 상태 값과 그 값을 갱신하는 함수를 반환
   * - 인자: 초기 상태 값
   * - 반환: [상태 변수, 상태에 대한 Setter]
   */
  const [value, setValue] = useState(0);

  /**
   * useEffect: 컴포넌트가 렌더링 될 때, 특정 작업을 실행 (컴포넌트의 상태 변화에 따름)
   * - 인자
   *   - 실행하고자 하는 함수 (effect callback)
   *     - effect는 정리(clean-up) 함수를 반환할 수 있음
   *     - 반환된 함수는 컴포넌트가 언마운트 또는 effect 재실행 이전에 실행됨
   *   - 의존성 배열 (dependency list)
   */
  useEffect(() => {
    console.log("[Function] useEffect []: 컴포넌트가 마운트 될 때, 한 번만!");

    const handler = () => {
      console.log("body click");
    };
    document.body.addEventListener("click", handler);

    // clean-up 함수
    return () => {
      console.log("[Function] useEffect return []: 컴포넌트가 언마운트 될 때,");
      // 한번 마운트된 리소스는 다른 화면으로 렌더링이 되어도 사라지지 않음.
      // unmount시 mount시 사용했던 리소스들을 정리해줘야 함
      document.body.removeEventListener("click", handler);
    };
  }, []);

  // 두번째 인자로 value 가 든 배열(dependency list)을 넘김, value 의 상태를 따름
  // value의 상태가 변경되면, clean-up 함수가 먼저 실행되고, 그다음 useEffect 내부에 있는 로직이 실행됨
  // 마찬가지로 useEffect 내부에, 예를들어 이벤트 핸들러를 선언하면, clean-up으로 그 핸들러를 remove 해줘야 중복 생성을 막을 수 있음
  useEffect(() => {
    console.log(
      "[Function] useEffect [value]: 컴포넌트가 마운트 될 때, + value가 변경되면,"
    );

    return () => {
      console.log(
        "[Function] useEffect return [value]: 새로 useEffect를 수행하기 전에,"
      );
    };
  }, [value]);

  /**
   * useCallback: 메모이제이션된 콜백을 반환, 렌더링이 될때 한번 만들어놨으면, 두번째 렌더링에서는 기존에 만들어놓은 것을 재사용함. 기능을 위해 x, 성능을 위해 o
   * - 인자
   *   - 메모이제이션 할 함수
   *   - 의존성 배열
   * - 반환: 메모이제이션 된 함수
   * *의존성 배열을 제대로 셋팅하지 않으면 함수 안에서 사용되는 값이 업데이트 되지 않은 값일 수 있음
   * *의존성 배열을 [value]로 넘기면, value의 상태가 변할때 마다 함수가 새로 만들어짐
   * *의존성 배열을 []로 넘기면, 초기에 만들어진 함수를 계속 재사용한다는 뜻임
   * *increase, reset 중에서 useCallback을 쓰기 좋은 함수는 reset 함수임.
   
   */
  const increaseValue = () => {
    setValue(value + 1);
  };
  const resetValue = useCallback(() => {
    setValue(0);
  }, []);

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={increaseValue}>Increase value</button>
      <button onClick={resetValue}>Reset value</button>
    </div>
  );
}

export default Counter;

/**
 * 조건적으로 Hooks 를 사용할 수 없다. Hook을 if 문안에 넣을 수 없다. 컴포넌트에서 hook들을 배열에 담아 관리하고 있는데, 조건이 붙으면 충돌날 수 있음
 * 일반 함수에서 Hooks를 사용할 수 없다.
 */
