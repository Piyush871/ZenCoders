

window.currDrag;
window.parentcurrDrag;
window.DNDData;

window.setEditor = function (editor) {
  //on content load, set the editor
  // Set up the editor
  console.log("setting up editor"+editor);
  if($("#"+editor).length == 0){
    console.log("editor not found");
  }
    var aceEditor = ace.edit(editor);
    aceEditor.setTheme("ace/theme/monokai");
    aceEditor.session.setMode("ace/mode/c_cpp");

};
window.makeDraggable = function (element) {
  element.draggable({
    revert: "invalid",
    start: function () {
      window.currDrag = $(this);
      //get the parent of the option-item
      window.parentcurrDrag = $(this).parent();
    },
  });
};
window.dropHandler = function(event, ui) {
    var $this = $(this);
    var oldItem = $this.children().first();
    if (oldItem.length) {
        oldItem.appendTo(window.parentcurrDrag);
        makeDraggable(oldItem);
    }
    window.currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
};

window.resetDNDModal = function () {
  //undo all the drag and drop operations
  window.populateDNDModal(window.DNDData);
}

window.addDragAndDrop = function (){
var blank_line_div = document.createElement("div");
// Set some properties on the div
blank_line_div.className = "blank-line";
blank_line_div.innerText = "----------------------------------";


//make the blank line draggable
window.makeDraggable($("#DNDModal .blank-line"));

window.makeDraggable($("#DNDModal .option-item"));
//make option-line droppable
$("#DNDModal .option-line").droppable({
  accept: "#DNDModal .option-item, #DNDModal .blank-line",
  drop: function (event, ui) {
    var $this = $(this);
    var oldItem = $this.children().first();
    // If there was already an item in the droppable area, revert it back to options
    if (oldItem.length) {
      oldItem.appendTo(window.parentcurrDrag);
      window.makeDraggable(oldItem);
    } else {
      //create a copy of blank_line_div
      var blank_line_copy = blank_line_div.cloneNode(true);
      window.parentcurrDrag.append(blank_line_copy);
      //make the blank line draggable
      window.makeDraggable($(blank_line_copy));
    }
    // Append the dragged item to the droppable area
    window.currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
  },
});

$("#DNDModal .droppable-area").droppable({
  accept: "#DNDModal .option-item, #DNDModal .blank-line",
  drop: function (event, ui) {
    var $this = $(this);
    var oldItem = $this.children().first();
    //if the droppable area has blank line then remove it

    // If there was already an item in the droppable area, revert it back to options
    console.log(oldItem);

    if (oldItem.length) {
      oldItem.appendTo(window.parentcurrDrag);
      window.makeDraggable(oldItem);
    }
    // Append the dragged item to the droppable area
    window.currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
  },
});
}

window.populateDNDModal = function (data) {
    // Clear the current code lines and options
    DNDData = data;
    $("#DNDModal .code").empty();
    $("#DNDModal #optionCntr").empty();
    // Iterate over the data to create new lines and options
    DNDData.forEach((line, index) => {
      // Generate the new code line
      var newCodeLine = $('<div class="code-line"></div>');
      if (line.is_blank) {
        newCodeLine.append(
          '<div class="droppable-area"><div class="empty-box"></div></div>'
        );
      } else {
        newCodeLine.append(
          '<pre><code class="language-cpp hljs">' +
          line.line_text.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
            "</code></pre>"
        );

      }

      $(".code").append(newCodeLine);
      //hightlight the element with hljs
      if(!line.is_blank){
        hljs.highlightBlock(newCodeLine.find("code")[0]);
      }
      
  
      // Generate the new option line
      if (line.is_blank) {
        var newOptionLine = $('<div class="option-line"></div>');
        newOptionLine.append(
          '<div class="option-item"><pre><code class="language-cpp">' +
          line.line_text.replace(/</g, '&lt;').replace(/>/g, '&gt;') +
            "</code></pre></div>"
        );
        $("#DNDModal #optionCntr").append(newOptionLine);
        //hightlight the element with hljs
        hljs.highlightBlock(newOptionLine.find("code")[0]);
      }
    });
  
    // Make new lines and options draggable and droppable
    window.makeDraggable($("#DNDModal .blank-line"));
    window.makeDraggable($(" #DNDModal .option-item"));
    $("  #DNDModal .option-line").droppable({
      accept: "#DNDModal .option-item, #DNDModal .blank-line",
      drop: window.dropHandler,
    });
    $("#DNDModal .droppable-area").droppable({
      accept: "#DNDModal .option-item, #DNDModal .blank-line",
      drop: window.dropHandler,
    });
    window.addDragAndDrop();
    // window.setEditor("editor1");
    
};

window.differentOptions = function(){
  //get the approach from the select
  let approachId = $("#approachSelect").val();
  fetch(`/api/get_approach_lines/${approachId}`)
  .then(response => response.json())
  .then(data => {
    populateDNDModal(data)
  });
}

//on click the submit-DNDModal button
$("#different-options").click(function () {
  window.differentOptions();
});   

function checkSubmission() {
  let solution = window.DNDData;
  let code = [];
  //get the text out of each code line
  $("#DNDModal .code .code-line").each(function () {
    let line = $(this).find("code").text().trim(); // Trim whitespace
    console.log(line);
    code.push(line);
  });
  // Use a regular for loop to allow returning false from checkSubmission
  for (let index = 0; index < DNDData.length; index++) {
    let line = DNDData[index];
    console.log("the line text is " + line.line_text.trim()); // Trim whitespace
    console.log("the code text is " + code[index]);
    if (line.line_text.trim() != code[index]) {
      return false;
    }
  }
  return true;
}

$("#submit-btn").click(function () {
  if(checkSubmission()){
    window.showAlertGlobal("Correct Answer", "success")
  }
  else{
    window.showAlertGlobal("Wrong Answer", "error")
  }
});

//on click the reset-DNDModal button
$("#reset-DNDModal").click(function () {
  window.resetDNDModal();
});
