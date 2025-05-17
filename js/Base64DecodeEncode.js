/**
 * 自定义Base64加密方法，支持汉字（UTF-8编码），兼容Android 1.0及以上版本
 * @param {string} input 需要加密的字符串
 * @returns {string} Base64加密后的字符串
 */
function kjmnBase64Encode(input) {
    /**
     * Base64字符集
     */
    var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /**
     * 将输入字符串转换为UTF-8字节数组
     * @param {string} str 输入字符串
     * @returns {number[]} UTF-8字节数组
     */
    function stringToUTF8Bytes(str) {
        var bytes = [];
        for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (code <= 0x7F) {
                /** 1字节字符 */
                bytes.push(code);
            } else if (code <= 0x7FF) {
                /** 2字节字符 */
                bytes.push(0xC0 | ((code >> 6) & 0x1F));
                bytes.push(0x80 | (code & 0x3F));
            } else if (code >= 0xD800 && code <= 0xDFFF) {
                /** 处理代理对（Surrogate Pair） */
                i++;
                var low = str.charCodeAt(i);
                var fullCode = ((code - 0xD800) << 10) + (low - 0xDC00) + 0x10000;
                bytes.push(0xF0 | ((fullCode >> 18) & 0x07));
                bytes.push(0x80 | ((fullCode >> 12) & 0x3F));
                bytes.push(0x80 | ((fullCode >> 6) & 0x3F));
                bytes.push(0x80 | (fullCode & 0x3F));
            } else {
                /** 3字节字符 */
                bytes.push(0xE0 | ((code >> 12) & 0x0F));
                bytes.push(0x80 | ((code >> 6) & 0x3F));
                bytes.push(0x80 | (code & 0x3F));
            }
        }
        return bytes;
    }

    /**
     * 将输入字符串转换为UTF-8字节数组
     */
    var bytes = stringToUTF8Bytes(input);

    /**
     * 初始化输出字符串
     */
    var output = "";

    /**
     * 处理每3个字节
     */
    for (var i = 0; i < bytes.length; i += 3) {
        /**
         * 取出3个字节，不足3个字节时用0填充
         */
        var byte1 = bytes[i] || 0;
        var byte2 = i + 1 < bytes.length ? bytes[i + 1] : 0;
        var byte3 = i + 2 < bytes.length ? bytes[i + 2] : 0;

        /**
         * 将3个字节合并为一个24位的整数
         */
        var block = (byte1 << 16) | (byte2 << 8) | byte3;

        /**
         * 分别取出4个6位的片段
         */
        output += base64Alphabet[(block >> 18) & 0x3F];
        output += base64Alphabet[(block >> 12) & 0x3F];
        output += base64Alphabet[(block >> 6) & 0x3F];
        output += base64Alphabet[block & 0x3F];
    }

    /**
     * 处理填充字符
     */
    if (bytes.length % 3 === 1) {
        output = output.slice(0, -2) + "==";
    } else if (bytes.length % 3 === 2) {
        output = output.slice(0, -1) + "=";
    }

    return output;
}


/**
 * 自定义Base64解密方法，支持汉字（UTF-8编码），兼容Android 1.0及以上版本
 * @param {string} input Base64编码后的字符串
 * @returns {string} 解密后的原始字符串
 */
function kjmnBase64Decode(input) {
    /**
     * Base64字符集
     */
    var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /**
     * 创建Base64字符到索引的映射表
     */
    var base64Index = {};
    for (var i = 0; i < base64Alphabet.length; i++) {
        base64Index[base64Alphabet[i]] = i;
    }

    /**
     * 去除输入字符串中的填充字符（=）并获取有效长度
     */
    var paddingLength = 0;
    if (input[input.length - 1] === "=") {
        paddingLength++;
        if (input[input.length - 2] === "=") {
            paddingLength++;
        }
    }
    var validLength = input.length - paddingLength;

    /**
     * 初始化输出字节数组
     */
    var outputBytes = [];

    /**
     * 处理每4个字符
     */
    for (var i = 0; i < validLength; i += 4) {
        /**
         * 取出4个字符，不足4个字符时用0填充
         */
        var char1 = base64Index[input[i]];
        var char2 = base64Index[input[i + 1]];
        var char3 = i + 2 < input.length ? base64Index[input[i + 2]] : 0;
        var char4 = i + 3 < input.length ? base64Index[input[i + 3]] : 0;

        /**
         * 将4个6位的片段合并为一个24位的整数
         */
        var block = (char1 << 18) | (char2 << 12) | (char3 << 6) | char4;

        /**
         * 分别提取出3个字节
         */
        outputBytes.push((block >> 16) & 0xFF);
        if (i + 2 < validLength) {
            outputBytes.push((block >> 8) & 0xFF);
        }
        if (i + 3 < validLength) {
            outputBytes.push(block & 0xFF);
        }
    }

    /**
     * 将UTF-8字节数组转换为字符串
     */
    function utf8BytesToString(bytes) {
        var str = "";
        var i = 0;
        while (i < bytes.length) {
            var byte1 = bytes[i++];
            if (byte1 <= 0x7F) {
                /** 1字节字符 */
                str += String.fromCharCode(byte1);
            } else if ((byte1 >> 5) === 0x06) {
                /** 2字节字符 */
                var byte2 = bytes[i++];
                var code = ((byte1 & 0x1F) << 6) | (byte2 & 0x3F);
                str += String.fromCharCode(code);
            } else if ((byte1 >> 4) === 0x0E) {
                /** 3字节字符 */
                var byte2 = bytes[i++];
                var byte3 = bytes[i++];
                var code = ((byte1 & 0x0F) << 12) | ((byte2 & 0x3F) << 6) | (byte3 & 0x3F);
                str += String.fromCharCode(code);
            } else if ((byte1 >> 3) === 0x1E) {
                /** 4字节字符（代理对） */
                var byte2 = bytes[i++];
                var byte3 = bytes[i++];
                var byte4 = bytes[i++];
                var code = ((byte1 & 0x07) << 18) | ((byte2 & 0x3F) << 12) | ((byte3 & 0x3F) << 6) | (byte4 & 0x3F);
                var high = Math.floor((code - 0x10000) / 0x400) + 0xD800;
                var low = (code - 0x10000) % 0x400 + 0xDC00;
                str += String.fromCharCode(high, low);
            }
        }
        return str;
    }

    /**
     * 将解码后的字节数组转换为字符串
     */
    return utf8BytesToString(outputBytes);
}

/** 加密使用示例
var input = "你好，世界！Hello, World!";
var encoded = customBase64Encode(input);
console.log(encoded); 
// 输出：5L2g5aW977yM5LiW55WM77yBSEVsbG8sIFdvcmxkIQ==
**/

/** 解密使用示例
var encoded = "5L2g5aW977yM5LiW55WM77yBSEVsbG8sIFdvcmxkIQ==";
var decoded = kjmnBase64Decode(encoded);
console.log(decoded); // 输出：你好，世界！Hello, World!

**/
