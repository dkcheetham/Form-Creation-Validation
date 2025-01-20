document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // The API endpoint
        const dataContainer = document.getElementById('api-data');  // Select the container element
        
        try {
            // Fetch user data asynchronously
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to display users
            const userList = document.createElement('ul');

            // Loop through users and create a list item for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the name of each user
                userList.appendChild(listItem); // Add list item to the user list
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // In case of error, show the error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call fetchUserData when the DOM is fully loaded
    fetchUserData();
});