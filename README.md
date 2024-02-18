# Natest-Shop

상품 목록을 조회할 수 있는 페이지입니다.

- [**`배포링크`**](https://natest.shop)

<details>
<summary>디렉터리 구조</summary>
<div markdown="1">

```
📦 
├─ .babelrc
├─ .eslintrc.cjs
├─ .gitignore
├─ .husky
│  └─ pre-commit
├─ .prettierrc.cjs
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ db.json
│  └─ justq.svg
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Header
│  │  │  └─ Header.tsx
│  │  ├─ Item
│  │  │  └─ ProductListItem.tsx
│  │  ├─ Layout
│  │  │  └─ Layout.tsx
│  │  ├─ List
│  │  │  └─ ProductList.tsx
│  │  └─ Ui
│  │     ├─ ComboBox
│  │     │  └─ PageComboBox.tsx
│  │     ├─ Loading
│  │     │  └─ Loading.tsx
│  │     └─ Pagination
│  │        └─ ProductPagination.tsx
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Home.tsx
│  │  └─ NotFound.tsx
│  ├─ routes
│  │  └─ Router.tsx
│  ├─ service
│  │  ├─ config.ts
│  │  └─ products.ts
│  ├─ stores
│  │  └─ pageStore.ts
│  ├─ styles
│  │  └─ GlobalStyle.ts
│  ├─ types
│  │  └─ product.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vercel.json
├─ vite.config.ts
└─ yarn.lock
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)
</div>
</details>

<br/>

## 📌 기능 목록

## Home

### 상품 검색
> 특정 상품을 검색할 수 있는 검색창을 구현하였습니다. <br>

| 데모영상      |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/d28e32e7-9746-4589-81dc-9fa25aefc35f"/> | 

- **상품명 입력** : 상품을 검색창에 입력하면, 네이버 쇼핑 API로부터 GET 요청을 통해 상품 데이터를 받아오는 기능을 구현하였습니다. <br><br>
- **결과 없음 화면 구현** : 검색 결과가 없는 경우, 해당 정보를 사용자에게 알리는 화면을 표출하도록 구현하였습니다. <br><br>
<br><br>

### 페이지네이션
> 상품 목록 표의 페이지를 넘길 수 있는 버튼을 구현하였습니다. <br>

| 데모영상      |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/664dbc53-4c46-4f1c-9fdc-fb890994fd0a"/> | 

- **주변 페이지 번호 계산** : **현재 페이지 번호를 기준으로 주변 번호를 계산해 배열을 생성**하였습니다(예: 현재 3페이지면 `[1,2,3,4,5]` 배열 반환). 이 기능은 사용자가 현재 페이지 주변의 번호를 클릭해 **직접 원하는 페이지로 이동**이 가능하도록 구현하였습니다. <br><br>
- **직전/직후 페이지 이동 버튼 구현** : 현재 페이지를 기준으로 직전 페이지와 직후 페이지로 네비게이션 할 수 있는 버튼을 구현하였습니다. <br><br>
- **첫/마지막 페이지 바로가기 버튼 구현** : 첫 페이지와 마지막 페이지로 바로 이동 가능한 버튼을 구현하여 **사용자가 원하는 페이지로 빠르게 네비게이션** 할 수 있도록 구현하였습니다.
<br><br>

### 무한 스크롤링
> 상품 목록을 끊임없이 조회할 수 있도록 구현하였습니다. <br>

| 데모영상      |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/55a0cd81-17ad-45ce-96d6-3b13ce5d26f8"/> | 

- **무한 스크롤링 구현** : 현재 페이지 사이즈를 기준으로 데이터를 표출하여 주고, 스크롤이 페이지 끝에 다다르면 추가 데이터를 로드하여 연속적인 사용자 경험을 제공하도록 구현하였습니다. 
<br><br>

<br><br>

### 페이지 사이즈 콤보박스
> ant design의 Select 컴포넌트를 사용하여 상품 목록 표의 한 페이지당 표시하는 상품 수를 바꿀 수 있는 콤보 박스를 구현하였습니다. <br>

| 데모영상      |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/ccd5c6e1-d547-4484-855e-755366387ddc"/> | 

- **제한된 페이지 사이즈 선택** : 사용자가 페이지 사이즈를 임의로 지정하는 것은 허용하지 않고, **사전에 지정된 수(예: 15,30,50,100) 중에서만 선택하여 페이지 사이즈를 변경**할 수 있도록 구현하였습니다. <br><br>
- **검색 기능 추가** : 사용자가 편리하게 원하는 수치를 찾을 수 있도록 **검색 기능을 추가하여 지정된 페이지 사이즈들 중에서 선택**할 수 있게 구현하였습니다. <br><br>

<br><br>

### 새로고침시 페이지 번호, 한 페이지에 나오는 상품 수 유지
> 페이지를 새로 고쳐도 페이지 번호, 한 페이지에 나오는 상품 수가 전과 동일하게 표시되도록 구현하였습니다. <br>

| 데모영상      |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/1316b1b9-80f6-4907-a41e-5211fba012f6"/> | 

- **URL을 통한 페이지 정보 저장 및 유지** : `URLSearchParams`와 `React Router`의 `useLocation` 기능을 활용하여, **페이지 사이즈와 현재 페이지 정보를 URL에 저장**하였습니다. 이렇게 함으로써 사용자가 새로고침을 해도 동일한 페이지 상태를 유지할 수 있도록 구현하였습니다. <br><br>

## Not found

> 사용자가 주소창에 유효하지 않은 URL을 입력할 경우, 해당 요청에 대응하는 에러 페이지가 렌더링되도록 설정하였습니다. <br>

<br>

| 데모영상          |       
| ------------ | 
| <img width=600 src="https://github.com/Team-DumdiDumdi/Derm.D-client/assets/62326659/f2e3d683-1098-4ced-b6b7-2e55e658b82b"/> | 

- **에러창 표시** : 라우팅을 관리하는 컴포넌트 내의 `<Route path="/*" element={<NotFoundPage />} />` 코드를 통해 구현되었습니다. 이 코드는 **모든 유효하지 않은 경로에 대해 NotFoundPage 컴포넌트를 반환**하도록 설계하였습니다.
<br><br>

## Loading

> 데이터 요청 과정에서는 사용자에게 Loading UI를 제공합니다. <br>

<br>

| 데모영상        | 
| --------------- | 
| <img width=600 src="https://github.com/ncb6206/natest-shop/assets/62326659/ee8abf1c-0d97-4e1b-8864-544b9bbb6292"/> | 

- **로딩 상태 관리** : `isLoading` 변수를 사용하여 로딩 상태를 관리하였습니다. 이를 통해 **상품 목록을 불러오는 동안에는 로딩 컴포넌트가 화면에 표시**되도록 구현하였습니다.

<br>


## 📌 개발 환경 설정

```
$ yarn install
$ yarn dev
```

## 📌 기술 스택 & 사용 라이브러리

|구분| 스택 & 라이브러리|
|--|--|
|언어| <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">|
|메인 라이브러리|<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=black">|
|기타 라이브러리|<img alt="Static Badge" src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img alt="Static Badge" src="https://img.shields.io/badge/Axios-%235A29E4?style=for-the-badge&logo=axios"> <img alt="Static Badge" src="https://img.shields.io/badge/ant design-0170FE?style=for-the-badge&logo=antdesign&logoColor=black"> <img src="https://img.shields.io/badge/justand-2359C6?style=for-the-badge&logo=justand"> <img src="https://img.shields.io/badge/tanstack query-FF4154?style=for-the-badge&logo=reactquery&logoColor=black"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge"> 
|패키지 관리|<img alt="Static Badge" src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=black">|
|배포| <img src="https://img.shields.io/badge/vercel-232F3E?style=for-the-badge&logo=vercel&logoColor=white"> |

## 📌 컨벤션

> 폴더 구조 관리

- src > 디렉토리는 소문자로 명명 (components, pages 등)
- src > 디렉토리 > 디렉토리(파스칼 case) > 컴포넌트명(파스칼 case).tsx 사용

- ex: src > components > Layout > Layout.tsx

<br>

> 커밋 컨벤션

- 커밋 구분은 아래 블럭의 용도에 맞게 사용하여 해당 커밋의 작업을 파악할 수 있도록 합니다.
- 커밋 구분을 제외한 내용은 한글로 작성하여 직관적으로 커밋의 변경사항을 파악할 수 있도록 합니다.

```
Init : 초기 세팅
Feat : 기능 (새로운 기능)
Fix : 버그 (버그 수정)
Design : CSS 등 사용자 UI 디자인 변경
Style : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
Refactor: 리팩토링
Comment : 필요한 주석 추가 및 변경
Docs : 문서 (문서 추가, 수정, 삭제)
Test : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
Chore : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove : 파일을 삭제하는 작업만 수행한 경우
!HOTFIX : 급하게 치명적인 버그를 고쳐야하는 경우
!BREAKING CHANGE : CHANGE 커다란 API 변경의 경우
```
