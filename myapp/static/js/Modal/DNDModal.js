
window.makeDraggable = function (element) {
  element.draggable({
    revert: "invalid",
    start: function () {
      currDrag = $(this);
      //get the parent of the option-item
      parentcurrDrag = $(this).parent();
    },
  });
};
window.dropHandler = function(event, ui) {
    var $this = $(this);
    var oldItem = $this.children().first();
    if (oldItem.length) {
        oldItem.appendTo(parentcurrDrag);
        makeDraggable(oldItem);
    }
    currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
};

window.addDragAndDrop = function (){
var blank_line_div = document.createElement("div");
// Set some properties on the div
blank_line_div.className = "blank-line";
blank_line_div.innerText = "----------------------------------";

var currDrag;
var parentcurrDrag;

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
      oldItem.appendTo(parentcurrDrag);
      window.makeDraggable(oldItem);
    } else {
      //create a copy of blank_line_div
      var blank_line_copy = blank_line_div.cloneNode(true);
      parentcurrDrag.append(blank_line_copy);
      //make the blank line draggable
      window.makeDraggable($(blank_line_copy));
    }
    // Append the dragged item to the droppable area
    currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
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
      oldItem.appendTo(parentcurrDrag);
      window.makeDraggable(oldItem);
    }
    // Append the dragged item to the droppable area
    currDrag.detach().css({ top: 0, left: 0 }).appendTo($this);
  },
});
}

window.populateDNDModal = function (data) {
    // Clear the current code lines and options
    $("#DNDModal .code").empty();
    $("#DNDModal #optionCntr").empty();
    // Iterate over the data to create new lines and options
    data.forEach((line, index) => {
      // Generate the new code line
      var newCodeLine = $('<div class="code-line"></div>');
      if (line.is_blank) {
        newCodeLine.append(
          '<div class="droppable-area"><div class="empty-box"></div></div>'
        );
      } else {
        newCodeLine.append(
          '<pre><code class="language-cpp hljs">' +
            line.line_text +
            "</code></pre>"
        );
      }
      $(".code").append(newCodeLine);
  
      // Generate the new option line
      if (line.is_blank) {
        var newOptionLine = $('<div class="option-line"></div>');
        newOptionLine.append(
          '<div class="option-item"><pre><code class="language-cpp">' +
            line.line_text +
            "</code></pre></div>"
        );
        $("#DNDModal #optionCntr").append(newOptionLine);
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
};
  