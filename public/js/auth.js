    var token = {
        get: function () {
            var name = "token" + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        set: function (cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "token" + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
    var username = {
        get: function () {
            var name = "username" + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        set: function (cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "username" + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
    var id = {
        get: function () {
            var name = "id" + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        set: function (cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "id" + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
    var username = {
        get: function () {
            var name = "username" + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        set: function (cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "username" + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
    var formatedName = {
        get: function () {
            var name = "name" + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        set: function (cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "name" + "=" + cvalue + ";" + expires + ";path=/";
        }
    }

    // console.log(getCookie())
   // console.log("h")
    // token.set("ketA7l3D3h7DcS1iIvyGz6mfxWdTCF6pqn4SLF")
    // username.set("westmon")



