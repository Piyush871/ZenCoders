window.makeRequest({
  url: "/api/topics/",
  method: "GET",
  onSuccess: function (data) {
    var select = $("#topic");
    data.forEach(function (topic) {
      var option = $("<option></option>")
        .attr("value", topic.name)
        .text(topic.name);
      select.append(option);
    });
  },
  onNetError: function (error) {
    console.error("Network error:", error);
  },
  onErrorMessage: function (message) {
    console.error("Application error:", message);
  },
});

$("#save_button").click(function (e) {
  saveQuestion(e);
});
//save question
function saveQuestion(event) {
  event.preventDefault();
  var questionName = $("#addQuestionModal #QuestionName").val();
  var description = $("#addQuestionModal #description").val();
  var topic = $("#addQuestionModal #topic").val();

  return new Promise((resolve, reject) => {
    window.makeRequest({
      url: "/api/addQuestion/" + topic + "/",
      method: "POST",
      body: JSON.stringify({
        name: questionName,
        description: description,
        topic: topic,
      }),
      onSuccess: function (data) {
        alert("Question added successfully");
        console.log("data",data);
        console.log("data.id", data.id);
        $("#addApproachModal").attr("data-id", data.id);
        $("#addQuestionModal").modal("hide");
        window.fetchDataAsync(tableId, myTable, url, searchUrl, columns, (query = ""));
        resolve(true); // Success
      },
      onNetError: function (error) {
        console.error("Network error:", error);
        reject(false); // Failure
      },
      onErrorMessage: function (message) {
        console.error("Application error:", message);
        reject(false); // Failure
      },
    });
  });
}

$("#addQuestionModal").on("hidden.bs.modal", function () {
  $(this).find("form").trigger("reset");
  $(".modal-backdrop").remove();
});

//save and next button
document
  .querySelector("#addQuestionModal #save_and_add_app_button")
.addEventListener("click", function (event) {
  saveQuestion(event).then((success) => {
    if (success) {
      //show the addApproachModal
      $("#addApproachModal").modal("show");
    } else {
      //nothing to do 
    }
  }).catch((error) => {
    // Handle error
  });
});
