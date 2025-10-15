
// 要素の取得
const testA = document.getElementById("target-text")
console.log(testA)
console.log(testA.textContent)
console.log(testA.id)
console.log(testA.getAttribute('id'))



console.log("--- 実行2: 書き換え後 ---");
console.log("属性 (Attribute):", document.getElementById('myInput').getAttribute('value'));
console.log("プロパティ (Property):", document.getElementById('myInput').value);