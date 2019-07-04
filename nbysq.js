var window = this;
window.navigator = {};
navigator = {
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this, window.navigator = navigator;

function get_arg2(arg1) {
    var _0x5e8b26 = "3000176000856006061501533003690027800375";

    function hexXor(_0x4e08d8, _0x23a392) {
        var _0x5a5d3b = '';
        for (var _0xe89588 = 0x0; _0xe89588 < _0x23a392["length"] && _0xe89588 < _0x4e08d8["length"]; _0xe89588 += 0x2) {
            var _0x401af1 = parseInt(_0x23a392["slice"](_0xe89588, _0xe89588 + 0x2), 0x10);
            var _0x105f59 = parseInt(_0x4e08d8["slice"](_0xe89588, _0xe89588 + 0x2), 0x10);
            var _0x189e2c = (_0x401af1 ^ _0x105f59)["toString"](0x10);
            if (_0x189e2c["length"] == 0x1) {
                _0x189e2c = '\x30' + _0x189e2c;
            }
            _0x5a5d3b += _0x189e2c;
        }
        return _0x5a5d3b;
    }

    function unsbox(arg1) {
        var _0x4b082b = [0xf, 0x23, 0x1d, 0x18, 0x21, 0x10, 0x1, 0x26, 0xa, 0x9, 0x13, 0x1f, 0x28, 0x1b, 0x16, 0x17, 0x19, 0xd, 0x6, 0xb, 0x27, 0x12, 0x14, 0x8, 0xe, 0x15, 0x20, 0x1a, 0x2, 0x1e, 0x7, 0x4, 0x11, 0x5, 0x3, 0x1c, 0x22, 0x25, 0xc, 0x24];
        var _0x4da0dc = [];
        var _0x12605e = '';
        for (var _0x20a7bf = 0x0; _0x20a7bf < arg1.length; _0x20a7bf++) {
            var _0x385ee3 = arg1[_0x20a7bf];
            for (var _0x217721 = 0x0; _0x217721 < _0x4b082b["length"]; _0x217721++) {
                if (_0x4b082b[_0x217721] == _0x20a7bf + 0x1) {
                    _0x4da0dc[_0x217721] = _0x385ee3;
                }
            }
        }
        _0x12605e = _0x4da0dc["join"]('');
        return _0x12605e;
    };
    var _0x23a392 = unsbox(arg1);
    arg2 = hexXor(_0x5e8b26, _0x23a392);
    return arg2;
};

var _ = process.argv.splice(2);

console.log(get_arg2(_[0]));