// ボタン要素の取得
const button = document.getElementById('change-button');
const targetElement = document.getElementById('target-text');
const listItems = document.querySelectorAll(".list-item")

// クリック時に実行
button.addEventListener('click', function() {
    targetElement.style.backgroundColor = 'pink'
    targetElement.textContent = 'クリックされました'
    console.log(listItems)
    // リストに色付け
    listItems.forEach(function(item) {
       item.style.color = "pink"
       item.textContent += ' (色変更済)'
    });
});