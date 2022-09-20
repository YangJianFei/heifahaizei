/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Thursday, September 8th 2022, 9:44:33 am
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */


var npCore = {
    cookie: {
        set: function (key, val, time) { //设置cookie方法
            var date = new Date(); //获取当前时间
            var expiresDays = time; //将date设置为n天以后的时间
            date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
            document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
        },
        get: function (key) { //获取cookie方法
            /*获取cookie参数*/
            var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
            var arrCookie = getCookie.split(";"); //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
            var tips; //声明变量tips
            for (var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
                var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                if (key === arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                    tips = arr[1]; //将cookie的值赋给变量tips
                    break; //终止for循环遍历
                }
            }
            return tips;
        },
        delete: function (key) { //删除cookie方法
            var date = new Date(); //获取当前时间
            date.setTime(date.getTime() - 10000); //将date设置为过去的时间
            document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
        }
    },
    //浏览器
    detectbrowser: function () { //判断是什么浏览器
        var sUserAgent = navigator.userAgent;
        var browser;
        var version;
        var versioncode;
        var start;
        var end;
        if (sUserAgent.indexOf("Firefox") > -1) {
            browser = "Firefox";
            start = sUserAgent.indexOf("Firefox/");
            end = sUserAgent.substring(start + 7, sUserAgent.length);
            browser = browser + end;
        } else if (sUserAgent.indexOf("OPR") > -1) {
            browser = "Opera";
            start = sUserAgent.indexOf("OPR/");
            browser = browser + sUserAgent.substring(start + 3, sUserAgent.length);
        } else if (sUserAgent.indexOf("QQBrowser") > -1) {
            browser = "QQBrowser";
            start = sUserAgent.indexOf("QQBrowser/");
            browser = browser + sUserAgent.substring(start + 9, sUserAgent.length);
        } else if (sUserAgent.indexOf("Chrome") > -1 &&
            sUserAgent.indexOf("Safari") > -1 &&
            sUserAgent.indexOf("QQBrowser") === -1) {
            browser = "Chrome";
            start = sUserAgent.indexOf("Chrome/");
            end = sUserAgent.indexOf(" ", start);
            browser = browser + sUserAgent.substring(start + 6, end);
        } else if (sUserAgent.indexOf("Safari") > -1 && sUserAgent.indexOf("Chrome") === -1) {
            browser = "Safari";
            start = sUserAgent.indexOf("Version/");
            end = sUserAgent.indexOf(" ", start);
            browser = browser + sUserAgent.substring(start + 7, end);
        } else if (sUserAgent.indexOf("Trident") > -1) {
            browser = "IE";
            start = sUserAgent.indexOf("Trident");
            end = sUserAgent.indexOf(";", start);
            version = sUserAgent.substring(start + 8, end);
            if (version === 7.0) {
                versioncode = 11;
            } else if (version === 6.0) {
                versioncode = 10;
            } else if (version === 5.0) {
                versioncode = 9;
            } else if (version === 4.0) {
                versioncode = 8;
            }
            browser = browser + versioncode;
        }
        return browser;
    },
    //系统语言
    getlanguage: function () {
        if (this.detectbrowser().indexOf("IE") > -1) {
            return window.navigator.language;
        } else {
            return window.navigator.languages;
        }
    },
    //操作系统
    detectOS: function () {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
        var isMac = (navigator.platform === "Mac68K") ||
            (navigator.platform === "MacPPC") ||
            (navigator.platform === "Macintosh") ||
            (navigator.platform === "MacIntel");
        if (isMac) return "Mac";
        var isLinux = navigator.platform.indexOf("Linux") > -1;
        if (isLinux) return "Linux";
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "Win2003";
            var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) return "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) return "Win7";
            var isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
            if (isWin8) return "Win8";
        }
    },
    //cookie seed
    cookieSeed: function () {
        var result;
        //cookie
        if (this.cookie.get("seed") === null || this.cookie.get("seed") === "" || this.cookie.get("seed") === "undefined") {
            var seed = "";
            var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            for (var i = 0; i < 32; i++) {
                var id = parseInt(Math.random() * 61);
                seed += chars[id];
            }
            this.cookie.set("seed", seed, 365);
        }
        result = this.cookie.get("seed");
        return result;
    }
};

var __np = {
    nua: "UA_12501254214",
    cookie: npCore.cookieSeed(),
    host: location.host,//主机
    userAgent: navigator.userAgent,//用户代理信息
    referrer: document.referrer,//上一个页面
    acceptLanguage: npCore.getlanguage().toString(),//接收语言
    domain: document.domain,//域
    url: location.href,//链接地址
    title: window.document.title, //页面标题
    charset: window.document.charset,//页面编码
    os: npCore.detectOS(),//操作系统
    browser: npCore.detectbrowser(),//浏览器
    resolution: window.screen.deviceXDPI,// 分辨率
    responseHeader: "",//响应头
    server: ""
}

//console.log(__np);

{/* <script src="http://analysis.lsmaps.com/Context/js/piwikInfo.js"></script>
<script>
   var _np_host = "http://analytics.lsmaps.com";
   
    $.ajax({
        url: _np_host + "/api/Get",
        type: "GET",   //请求方式
        data: __np,    //参数值
    });
</script> */
    //或者放入图片链接上
}