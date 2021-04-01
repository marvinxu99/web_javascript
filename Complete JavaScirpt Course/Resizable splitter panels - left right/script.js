$("#left_pane").resizable({
  handles: 'e',
  resize: function() {
    $("#right_pane").outerWidth($("#container").innerWidth() - $("#left_pane").outerWidth());
  }
});
