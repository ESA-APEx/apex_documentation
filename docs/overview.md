---
title: "Document Repository"
format: html
---
```{=html}

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<style>
#docContainer {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 2.5rem;

}

#error {
  padding: 20px;
  background-color: #310413;
  color: #f54280;
  border-radius: 10px;
}

/* project list column */
#projectsContainer {
  flex: 0 0 220px;
  height: 70vh;
  overflow: auto;
  background: #00868138;
  padding: 1rem;
  border-radius: 10px;
}
#projectsContainer h4, #docListContainer h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.project-item {
  padding: 8px 10px;
  margin: 4px 0;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}
.project-item:hover {
  background: #f0f4ff;
  color: black
}
.project-item.selected {
  background: #00af9d;
  color: white;
  font-weight: 600;
}

#docListContainer{
  padding: 1rem;
  flex: 3;
}

/* table column */
#docTable_wrapper {
  border-collapse: collapse;
}

.dataTables_wrapper input {
  border-radius: 10px !important;
  margin-left: 1rem !important;
}
</style>

<div id="error"></div>
<div id="docContainer">
  <div id="projectsContainer">
      <h4>Projects</h4>
      <div id="projectList" aria-label="Project list">
      </div>
  </div>

  <div id="docListContainer">
    <h4 id="selectedProject"></h4>
    <table id="docTable">
      <thead>
        <tr><th>Title</th><th>File</th></tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</div>


<script>
let docs = [];
let table = null;

// helper to build DataTable rows for a project
function rowsForProject(projectName) {
  const filtered = docs.filter(d => d.project === projectName);
  const results = filtered.map(it => ([
    it.title || it.filename || "",
    `<a href="${it.path}" target="_blank" rel="noopener">${it.filename || (it.path || "").split("/").pop()}</a>`
  ]));
  console.log(results);
  return results;
}

// initialize empty DataTable (columns set)
function initTable() {
  table = $('#docTable').DataTable({
    data: [], // start empty
    columns: [
      { title: "Title" },
      { title: "File", orderable: false, searchable: false }
    ],
    pageLength: 10,
    order: [[1, 'asc']],
  });
}

function populateProjectList(projects) {
  // create items with data-project attribute
  const html = projects.map(p => `<div class="project-item" data-project="${p}">${p}</div>`).join('');
  $('#projectList').html(html);
  // click handler (delegated)
  $('#projectList').off('click').on('click', '.project-item', function() {
    const project = $(this).attr('data-project');
    // highlight selected project and unhighlight others
    $('#projectList .project-item').removeClass('selected');
    $(this).addClass('selected');

    // set title of selected project
    $("#selectedProject").html(project);

    // populate DataTable for this project
    const newRows = rowsForProject(project);
    table.clear();
    if (newRows.length) table.rows.add(newRows);
    table.draw();
  });

  // optionally auto-click first project if exists
  const first = $('#projectList .project-item').first();
  if (first.length) {
    first.trigger('click');
  }
}

function showError(error) {
      $('#error').html(error);
      $('#docContainer').hide();
}

fetch("doc-repo.json")
  .then(r => {
    if (!r.ok) {
      console.error("Could not load listing", r);
      throw new Error("Could not load document listing");
    } else {
      $('#error').hide();
      return r.json();
    }
  })
  .then(items => {
    docs = items || [];

    // collect unique projects in original order (or sorted)
    const projects = [...new Set(items.map(it => it.project))];

    console.log(projects);

    initTable();
    populateProjectList(projects);
  })
  .catch(e => {
    console.error(e);
    showError(e)
  });
</script>

```
