document.addEventListener("DOMContentLoaded", function () {
    const employees = [
        { id: 101, name: "John Doe", company: "Tech Corp", salary: "$80,000", city: "New York", area: "Manhattan" },
        { id: 102, name: "Jane Smith", company: "Web Solutions", salary: "$75,000", city: "San Francisco", area: "Bay Area" },
        { id: 103, name: "Alice Brown", company: "InnovateX", salary: "$85,000", city: "Austin", area: "Downtown" },
        { id: 104, name: "Bob Johnson", company: "Code Labs", salary: "$70,000", city: "Seattle", area: "Capitol Hill" }
    ];

    const tableBody = document.querySelector("#employeeTable tbody");

    employees.forEach(emp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.company}</td>
            <td>${emp.salary}</td>
            <td>${emp.city}</td>
            <td>${emp.area}</td>
        `;

        tableBody.appendChild(row);
    });
});
