const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

btn.addEventListener('click', () => {
    const text = input.value;
    if (text) {
        const li = document.createElement('li');
        li.textContent = text;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'x';
        delBtn.onclick = () => li.remove();
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = '';
    }
});
