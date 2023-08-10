

const tableId = "datatablesSimple";
const myTable = document.getElementById(tableId);
const url = "/api/questions_table/";
const searchUrl = "/api/questions_table/";
const columns = [
  { select: 1, title: "Completed"},
  { select: 2, title: "Question" },
  { select: 3, title: "Open" },
  {
    select: 4,title :"Note"
  },
  {
    select: 5,
    title: "Last Visited",
  },
  {
    select: 6,
    title: "Topic",
  },
  {
    select: 7,
    title: "Important",
  },
  {
    select: 8,
    title: "Delete ",
  },
  {
    select: 9,
    title: "Add Approach",
  },
];


window.addApproach_button = function()
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

window.getNote = function(question_id)
{
  window.makeRequest(
    {
      url: `/api/get_question_note/${question_id}`,
      method: "GET",
      onSuccess: function (data) {
        console.log("data", data);
        //add the note to the modal
        $('#noteModal').modal('show');
        $('#noteModal').find('#note').val(data.note);
      },
      onNetError: function (error) {
        console.error("Network error:", error);
        window.showAlertGlobal("Network error:", error);
      },
      onErrorMessage: function (message) {
        console.error("Application error:", message);
        window.showAlertGlobal("Application error:", message);
      },
    }
  )
}



window.Note_button = function()
{
var buttons = document.querySelectorAll(".note_button");
console.log(buttons)
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        var questionId = button.getAttribute('data-id');
        $('#noteModal').attr('data-id',questionId)
        console.log("questionId",questionId)
        //show the addAppraochModal
        window.getNote(questionId);
    });
});

}


window.fetchDataAsync = async function (tableId, myTable, url, searchUrl, columns, query = "") {
  await window.fetchData(tableId, myTable, url, searchUrl, columns, query);
  window.addApproach_button();
  window.Note_button();
}

//if the complete button is checked for unchecked 
$(document).on("click", ".done-checkbox", function () {
  var questionId = this.getAttribute('data-id');
  var done = this.checked;
  console.log("checked", done);
  console.log("questionId", questionId);
  body = JSON.stringify({
    done: done,
  });

  window.makeRequest({
    url: `/api/question_done/${questionId}`,
    method:"POST",
    body: body,
    onSuccess: function (data) {
      console.log("data", data);
      
    },
    onNetError: function (error) {
      console.error("Network error:", error);
      window.showAlertGlobal("Network error:", error);
    },
    onErrorMessage: function (message) {
      console.error("Application error:", message);
      window.showAlertGlobal("Application error:", message);
    },
  });


});

$(document).on("click", ".important-checkbox", function () {
  var questionId = this.getAttribute('data-id');
  var important = this.checked;
  console.log("checked", important);
  console.log("questionId", questionId);
  body = JSON.stringify({
    important: important,
  });
  window.makeRequest({
    url: `/api/question_important/${questionId}`,
    method:"POST",
    body: body,
    onSuccess: function (data) {
      console.log("data", data);
    },
    onNetError: function (error) {
      console.error("Network error:", error);
      window.showAlertGlobal("Network error:", error);
    },
    onErrorMessage: function (message) {
      console.error("Application error:", message);
      window.showAlertGlobal("Application error:", message);
    },
  });
});

//when the deleteQuestionButton is clicked
$(document).on("click", "#deleteQuestionButton", function () {
  //get all checked checkboxes
  var checkboxes = document.querySelectorAll(".delete-checkbox:checked");

  var questionIds = [];
  checkboxes.forEach(function (checkbox) {
    questionIds.push(checkbox.getAttribute("data-id"));
  });

  if(questionIds.length == 0|| questionIds == null)
  {
    window.showAlertGlobal("Please select a question to delete");
    return;
  }
  if(questionIds.length>5)
  {
    window.showAlertGlobal("You can only delete 5 questions at a time");
    return;
  }
  console.log("questionIds", questionIds);
  body = JSON.stringify({
    ids: questionIds,
  });
  window.makeRequest({
    url: "/api/delete_questions/",
    method: "POST",
    body: body,
    onSuccess: function (data) {
      console.log("data", data);
      window.fetchDataAsync(tableId, myTable, url, searchUrl, columns, "");
    },
    onNetError: function (error) {
      console.error("Network error:", error);
      window.showAlertGlobal("Network error:", error);
    },
    onErrorMessage: function (message) {
      console.error("Application error:", message);
      window.showAlertGlobal("Application error:", message);
    },
  });
});

fetchDataAsync(tableId, myTable, url, searchUrl, columns, "");
