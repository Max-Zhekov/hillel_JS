"use strict";

$(document).ready(function () {
  var $taskList = $("#taskList");
  var $taskInput = $("#taskInput");
  var $addBtn = $("#addBtn");
  $addBtn.on("click", function () {
    var taskText = $.trim($taskInput.val());
    if (!taskText) {
      alert("Будь ласка, введіть текст завдання");
      return;
    }
    if (taskText.length > 100) {
      alert("Занадто довгий текст (макс. 100 символів)");
      return;
    }
    var $li = $("<li></li>");
    var $span = $("<span></span>").text(taskText).addClass("task-text");
    var $deleteBtn = $("<button></button>").addClass("btn-delete").text("Видалити").attr("aria-label", "Видалити завдання");
    $li.append($span, $deleteBtn);
    $taskList.append($li);
    $taskInput.val("");
  });
  $taskList.on("click", ".btn-delete", function () {
    $(this).closest("li").remove();
  });
  $taskList.on("click", ".task-text", function () {
    var text = $(this).text();
    $("#modalTaskContent").text(text);
    var modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});