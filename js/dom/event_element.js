// ボタン要素の取得
const button = document.getElementById('change-button');

const targetElement = document.getElementById('target-text');

// クリック時に実行
button.addEventListener('click', function() {
    targetElement.style.backgroundColor = 'pink'
});