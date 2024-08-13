(function ($) {
    $(function () {
        if (!areCookiesEnabled()) {
            $("#divCookieRequired").show();
        }

        function areCookiesEnabled() {
            try {
                document.cookie = 't=1';
                var cookiesEnabled = document.cookie.indexOf('t=') !== -1;
                document.cookie = 't=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
                return cookiesEnabled;
            } catch (e) {
                return false;
            }
        }
    });
})(window.jQuery);