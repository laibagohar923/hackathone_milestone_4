// Add this at the top of your TypeScript file, or in a separate .d.ts file.
interface JQuery {
  repeater(options?: any): JQuery;
}

$(document).ready(function () {
  $('.repeater').repeater({
    initEmpty: false,
    defaultValues: {
      'text-input': ''
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function (deleteElement) {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV();
      }, 500);
    },
    isFirstItemUndeletable: true
  });
});

function generateCV() {
  console.log("CV Generated");
}
