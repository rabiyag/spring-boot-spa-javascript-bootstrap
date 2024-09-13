document.addEventListener("DOMContentLoaded", function() {
    loadUsers();

    document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault();
        addUser();
    });
});

function loadUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("userList");
            userList.innerHTML = "";
            data.forEach(user => {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item";
                listItem.innerHTML = `
                    ${user.name} - ${user.email}
                    <button onclick="deleteUser(${user.id})" class="btn btn-danger btn-sm float-right">Delete</button>
                `;
                userList.appendChild(listItem);
            });
        });
}

function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    }).then(response => {
        if (response.ok) {
            loadUsers();
        }
    });
}

function deleteUser(id) {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                loadUsers();
            }
        });
}
