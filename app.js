document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reminderInput = document.getElementById('reminder-input');
    const reminderText = reminderInput.value;

    const li = document.createElement('li');
    li.textContent = reminderText;

    document.getElementById('reminder-list').appendChild(li);
    reminderInput.value = '';
});
