

const tableId = "datatablesSimple";
const myTable = document.getElementById(tableId);
const url = "/api/questions_table/";
const searchUrl = "/api/questions_table/";
const columns = [
  { select: 1, title: "Question" },
  { select: 2, title: "Open" },
  {
    select: 3,
    title: "Last Visited",
  },
  {
    select: 4,
    title: "Topic",
  },
  {
    select: 5,
    title: "Important",
  },
  {
    select: 6,
    title: "Add Approach",
  },
];


function addApproach_button()
{
var buttons = document.querySelectorAll(".addApproach_button");
console.log(buttons)
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        var questionId = button.getAttribute('data-id');
        $('#addApproachModal').attr('data-id',questionId)
        //show the addAppraochModal
        $('#addApproachModal').modal('show');
    });
});
}

async function fetchDataAsync(tableId, myTable, url, searchUrl, columns, query = "") {
  await window.fetchData(tableId, myTable, url, searchUrl, columns, query);
  addApproach_button()

}

fetchDataAsync(tableId, myTable, url, searchUrl, columns, "");
