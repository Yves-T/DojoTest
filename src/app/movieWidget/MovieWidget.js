// app/movieWidget/MovieWidget.js
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dojo/text!./templates/MovieWidget.html", "dojo/i18n!./nls/MovieWidget", "xstyle/css!./css/movieWidget.css"],
    function (declare, _WidgetBase, _TemplatedMixin, movieWidgetTemplate, movieWidgetNls) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: movieWidgetTemplate,
            movie: null,
            baseClass: "movieWidget",
            labels: movieWidgetNls,

            constructor: function (params) {
                this.movie = params.movie;
            },

            postCreate: function () {
                this.inherited(arguments);
                console.log(this.baseClass+": postCreate");
            },

            startup: function () {
                this.inherited(arguments);
                console.log(this.baseClass+": startup");
            }
        });
    });