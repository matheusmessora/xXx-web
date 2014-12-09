var PANDOX = PANDOX || {};


/*=====================================================================================================
 * LOGGER Module
 *======================================================================================================*/
PANDOX.LOGGER = function () {

    function createAngulosoHTML() {
        return new Array(
            "<div id='angulosoHolder'>",
            "<div id='angulosoConsoler'><button id='angulosoConsoleBtn' type='button' class='btn btn-danger btn-sm'>Console &#10687;</button></div>",
            "<div id='anguloso'></div>",
            "<div id='consolerHolder'></div>",
            "</div>",

            "").join(" ");
    }

    var init = function () {
        console.log("PANDOX.LOGGER.init");

        $(createAngulosoHTML()).appendTo("body");

        $("#consolerHolder").html('<div class="col-lg-12" id="consoler"><div class="row"><div class="col-lg-12" id="executor"><input type="text" id="command" class="input-sm"><span class="label label-danger" id="executorBtn">Send</span></div></div></div>');

        $("#angulosoConsoler").click(function () {
            showHide();
        });

        bindExecutor();

        info("PANDOX.LOGGER.init.success");
    };

    function bindExecutor() {
        $("#command").keyup(function (event) {
            if (event.keyCode == 13) {
                var command = $("#command").val();
                try {

                    //var result = jQuery.globalEval(command);
                    var result = eval(command);
                    PANDOX.LOGGER.info(toString(result));
                } catch (err) {
                    PANDOX.LOGGER.error(err);
                }

            }
        });

        $("#executorBtn").click(function () {
            var command = $("#command").val();
            try {
                var result = eval(command);
                PANDOX.LOGGER.info(toString(result));
            } catch (err) {
                PANDOX.LOGGER.error(err);
            }

        });
    };

    function toString(result) {
        return result;
    };

    function info(message) {
        appendLog("info", message);
    };

    function error(message) {
        appendLog("error", message);
    };

    var appendLog = function (level, message) {
        $("#consoler").append('<div class="row"><div class="col-lg-12 ' + getCssClassFromLogLevel(level) + '"><span class="label label-warning consoler-close">X</span> ' + message + '</div></div>');
        $(".consoler-close").click(function () {
            $(this).parent().parent().remove();
        });
    };

    var getCssClassFromLogLevel = function (level) {
        if (level === "info") {
            return "text-primary";
        }
        if (level === "error") {
            return "text-danger";
        }
    }


    var showHide = function () {
        if ($("#consolerHolder").is(":hidden")) {
            show();
        } else {
            hide();
        }
    };

    var show = function () {
        $("#consolerHolder").slideDown();
        $("#angulosoConsoleBtn").html("Console &#10687;");
    }

    var hide = function () {
        $("#consolerHolder").slideUp();
        $("#angulosoConsoleBtn").html("&#10687;");
    }

    return {
        init: init,
        info: info,
        error: error
    }
}();