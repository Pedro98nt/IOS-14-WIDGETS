console.clear();

document.querySelectorAll(".apps--main > .app").forEach((app) => {
  app.addEventListener("click", function (e) {
    let widgetState = "";
    let newWidgetState = "";

    if (app.classList.contains("app--widget")) {
      widgetState = [...app.classList].filter((x) =>
        x.startsWith("app--widget--")
      )[0];
    }

    if (widgetState === "") {
      newWidgetState = "long";
    } else if (widgetState === "app--widget--long") {
      newWidgetState = "tall";
    } else if (widgetState === "app--widget--tall") {
      newWidgetState = "box";
    } else {
      newWidgetState = "";
    }

    if (newWidgetState) {
      app.classList.add("app--widget");
      app.classList.add(`app--widget--${newWidgetState}`);
    } else {
      app.classList.remove("app--widget");
    }

    if (widgetState) app.classList.remove(widgetState);
  });
});