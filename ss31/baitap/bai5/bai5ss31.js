const employees = [
    {
      id: 1,
      name: 'Example 1',
      age: 18,
      address: 'District',
    },
    {
      id: 2,
      name: 'Example 1',
      age: 18,
      address: 'District',
    },
];
const table=document.getElementById("tableBody");
employees.forEach(element=>{
      const row =`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.address}</td>
        </tr>
        `;
        table.innerHTML += row;
});