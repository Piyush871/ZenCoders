//get the select id from the select element

function fillSelect()
{
    var select = document.getElementById("topicSelect");
    //get the topics from the server
    window.makeRequest({
        url: `/api/topics`,
        method: "GET",
        onSuccess: function (data) {
            console.log("data", data);
            //fill the select with the topics
            data.forEach(function (topic) {
                var option = document.createElement("option");
                option.value = topic.id;
                option.text = topic.name;
                select.appendChild(option);
            });
            var option = document.createElement("All");
            option.value = "All";
            option.text = "All";
            select.appendChild(option);
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
}