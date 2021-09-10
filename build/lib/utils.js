function isMobile() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    const bIsMidp = sUserAgent.match(/midp/i) == "midp";
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    const bIsAndroid = sUserAgent.match(/android/i) == "android";
    const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}

function indexToH5() {
    const domain = `${window.location.protocol}//${window.location.host}`
    if (domain.indexOf("127.0.0.1") != -1) {
        return
    }
    if (domain == window.location.href || `${domain}/` == window.location.href) {
        window.location.href = domain + '/h5.html'
    }
}

function h5ToIndex() {
    const domain = `${window.location.protocol}//${window.location.host}`
    if (domain.indexOf("127.0.0.1") != -1) {
        return
    }
    if (window.location.href.endsWith('h5.html')) {
        window.location.href = domain
    }
}