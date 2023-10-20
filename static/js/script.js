async function getUsers() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'GET',
        },
      )
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  getUsers().then(data => {
    console.log(data)
    let table = '<table style="border-collapse: collapse;">';

  table += `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Компания</th>
        <th>Город</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
  `;

    data.forEach(user => {
        table += `
          <tr>
            <td>${user.name}</td>
            <td>${user.company.name}</td>
            <td>${user.address.city}</td>
            <td>${user.email}</td>
          </tr>
        `;
      });
      table += `
    </tbody>
  </table>
  `;

  const container = document.getElementById('table');
  container.innerHTML = table;
  });