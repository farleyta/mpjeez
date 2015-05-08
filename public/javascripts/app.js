var React = require("react"),
    App = React.createFactory(require("../../app/components/app"));

if (typeof window !== "undefined") {
    window.onload = function() {
        React.render(App({ initialCount: 7 }), document.getElementById("content"));
    };
}