---
title: "Document Repository"
format: html
---

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<div>
  <table id="docTable" class="display" style="width:100%">
    <thead><tr><th>Project</th><th>Title</th><th>File</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

<script>
fetch("doc-repo.json")
  .then(r => r.json())
  .then(items => {
    const tbody = items.map(it =>
      `<tr>
        <td>${it.project}</td>
        <td>${it.title}</td>
        <td><a href="${it.path}" target="_blank" rel="noopener">${it.filename}</a></td>
      </tr>`).join('');
    document.querySelector('#docTable tbody').innerHTML = tbody;
    $('#docTable').DataTable({
      pageLength: 25,
      order: [[0,'asc'], [1,'asc']]
    });
  })
  .catch(e => document.body.insertAdjacentHTML('beforeend', '<div>Failed to load index: ' + e + '</div>'));
</script>
