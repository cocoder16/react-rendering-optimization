const Page = (function () {
  let id = 0;

  return function Page({ title, explanation }) {
    this.id = id;
    this.title = title;
    this.explanation = explanation;

    id += 1;
  };
})();

const pages = [
  new Page({
    title: "1. state 선언 위치",
    explanation: [
      "해당 state를 사용하는 컴포넌트 중 가장 상위 컴포넌트에 state를 선언합니다.",
      '개발자 도구 콘솔창을 키고 "새 유저 생성" 버튼을 눌러 users state를 사용하지 않는 Group 컴포넌트도 리렌더링 되는 것을 확인하세요.',
    ],
  }),
  new Page({
    title: "1. state 선언 위치",
    explanation: [
      "더 상위 컴포넌트에 state를 선언하면 불필요한 리렌더링을 하는 컴포넌트들이 생깁니다.",
      '개발자 도구 콘솔창을 키고 "state 변경" 버튼을 눌러 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
    ],
  }),
  new Page({
    title: "2. state가 객체라면 되도록 분할을 합니다.",
    explanation: [
      "하나의 객체에 모든 데이터를 저장한 state입니다.",
      '개발자 도구 콘솔창을 키고 "그룹명 변경" 버튼을 눌러 group.name state값을 변경시키고 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
    ],
  }),
  new Page({
    title: "2. state가 객체라면 되도록 분할을 합니다.",
    explanation: [
      "group과 users로 객체를 나누어 데이터를 저장한 state입니다.",
      '개발자 도구 콘솔창을 키고 "그룹명 변경" 버튼을 눌러 group.name state값을 변경시키고 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
    ],
  }),
  new Page({
    title:
      "3. 컴포넌트를 매핑할 때에는 배열의 index를 key값으로 사용하는 것을 피합니다.",
    explanation: [
      "배열의 index를 key값으로 사용한 경우입니다.",
      '개발자 도구 콘솔창을 키고 "아이템 추가" 버튼을 눌러 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
      '또한 "맨 앞에 아이템 추가" 버튼을 눌러 어떤 부작용이 있는지 확인하세요.',
    ],
  }),
  new Page({
    title:
      "3. 컴포넌트를 매핑할 때에는 배열의 index를 key값으로 사용하는 것을 피합니다.",
    explanation: [
      "고유 id를 key값으로 사용한 경우입니다.",
      '개발자 도구 콘솔창을 키고 "아이템 추가" 버튼을 눌러 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
      '또한 "맨 앞에 아이템 추가" 버튼을 눌러 이전에 본 부작용이 발생하지 않는지 확인하세요.',
    ],
  }),
  new Page({
    title: "4. React.memo를 통해 컴포넌트를 메모이제이션 합니다.",
    explanation: [
      "이전 예제에서 React.memo를 사용한 경우입니다.",
      '개발자 도구 콘솔창을 키고 "아이템 추가" 버튼을 눌러 어떤 컴포넌트들이 리렌더링 되는지 확인하세요.',
    ],
  }),
  new Page({
    title:
      "5. state를 이용해 새로 정제하여 만든 데이터를 props로 전달하는 경우입니다.",
    explanation: "",
  }),
];

export default pages;
