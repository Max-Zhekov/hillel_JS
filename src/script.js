"use strict";

$(document).ready(function () {
  const $taskList = $("#taskList");
  const $taskInput = $("#taskInput");
  const $addBtn = $("#addBtn");

  $addBtn.on("click", function () {
    const taskText = $.trim($taskInput.val());

    if (!taskText) {
      alert("Будь ласка, введіть текст завдання");
      return;
    }

    if (taskText.length > 100) {
      alert("Занадто довгий текст (макс. 100 символів)");
      return;
    }

    const $li = $("<li></li>");
    const $span = $("<span></span>").text(taskText).addClass("task-text");
    const $deleteBtn = $("<button></button>")
      .addClass("btn-delete")
      .text("Видалити")
      .attr("aria-label", "Видалити завдання");

    $li.append($span, $deleteBtn);
    $taskList.append($li);

    $taskInput.val("");
  });

  $taskList.on("click", ".btn-delete", function () {
    $(this).closest("li").remove();
  });

  $taskList.on("click", ".task-text", function () {
    const text = $(this).text();
    $("#modalTaskContent").text(text);
    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});
