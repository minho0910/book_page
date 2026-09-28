// firebase-config.js
// 주의: Firebase 콘솔(https://console.firebase.google.com/)에서 새 프로젝트를 만들고
// 웹 앱을 추가한 뒤, 아래에 나오는 firebaseConfig 객체의 값으로 교체해주세요!

const firebaseConfig = {
    apiKey: "AIzaSyD4BSq6cFN8CsDiXpnUIL9fB-EAU8-ng2w",
    authDomain: "themargin.firebaseapp.com",
    projectId: "themargin",
    messagingSenderId: "675374191395",
    appId: "1:675374191395:web:68b93e71d6c0adb74bf296",
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebase.auth();
    window.db = db;
    window.auth = auth;
    console.log("Firebase가 성공적으로 초기화되었습니다.");
} else {
    console.warn("Firebase config가 입력되지 않았습니다. 현재 기본(하드코딩된) 데이터를 사용합니다.");
    window.db = null;
    window.auth = null;
}


