(function (document) {
  const eleContainer = document.getElementById("container");

  // to render table headings
  function renderTableHeadings(tableHeadings) {
    const tableRow = document.createElement("tr");
    tableHeadings.forEach((heading) => {
      const tableHeading = document.createElement("th");
      heading = heading.replace("_", " ");
      tableHeading.innerText = heading;
      tableHeading.className = heading;
      tableRow.appendChild(tableHeading);
    });
    return tableRow;
  }

  // To render table data with rows
  function renderTableRows(employees, tableHeading) {
    return employees.map((employee) => {
      const tableRow = document.createElement("tr");
      tableHeading.forEach((heading) => {
        const tableColumn = document.createElement("td");
        tableColumn.innerText = employee[heading];
        tableRow.appendChild(tableColumn);
      });
      return tableRow;
    });
  }

  // To render table

  function renderTable({ employees }) {
    const tableHeadings = Object.keys(employees[0]);

    const table = document.createElement("table");

    const tableHeaders = renderTableHeadings(tableHeadings);
    const tableRows = renderTableRows(employees, tableHeadings);

    // appending headings to table
    table.append(tableHeaders);

    // appending table columns to table
    table.append(...tableRows);

    eleContainer.appendChild(table);
  }

  function renderInit() {
    fetch("../staticData/staticData.json")
      .then((res) => res.json())
      .then((data) => renderTable(data))
      .catch((err) => console.log(err));
  }

  function resetStats() {
    window.removeEventListener("load");
    window.removeEventListener("close");
  }

  window.addEventListener("load", renderInit);
  window.addEventListener("close", resetStats);
})(document);

// We can make it more dynamic by implementing pagination or infinite scroll for large data set
