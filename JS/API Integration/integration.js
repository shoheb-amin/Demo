//all student data url
const apiurl = 'http://localhost:8080/students';

//function to fetch and display user data
function fetchStdData() {
    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            const userTableBody = document.querySelector('#userTable tbody');

            //clear any existing data in the table
            userTableBody.innerHTML = '';

            //Loop through the table data nad create table rows
            data.forEach(user => {
                const rows = document.createElement('tr');

                //create table cells for each piece of data
                rows.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                `;

                //append the row to the table body
                userTableBody.appendChild(rows);
            });
        })
        .catch(error => {
            console.error('error fetching data:', error);
        });
}
window.onload=fetchStdData;