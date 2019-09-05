var xlsxUtils = {
    Binary: {
        fixdata(data) { //文件流转BinaryString
            //......
        },
        s2ab(s) { //字符串转字符流
            //......
        }
    },
    _wb: null,//缓存导入时的Workbook 
    _rABS: false,//设置读取方式
    /**
     * @desc  导入根据文件
     * @param {File} f 文件
     * @param {Function} c 回调
     * @return {Object} 回调值
     */
    import(f, c) {
        //......
    },
    /**
     * @desc  根据表Sheet名获取数据
     * @param {String} name 
     * @return {Object} 
     */
    getSheetByName(name) {//
        //......
    },
    /**
     * @desc  根据表Sheet索引获取数据
     * @param {Number} index 
     * @return {Object}
     */
    getSheetByIndex(index = 0) {
        //......
    },
    /**
     * @desc 导出
     * @param {Array} data 数据{title1:dataList,title2:dataList....}  
     * @param {String} type 
     * @return {Blob}
     */
    export(data, type) {
        //......
    },
    /**
     * 从数据数组或对象中根据key生成相同key值的对象
     * @param {Object|Array} data 
     * @return {Object}
     */
    readDataHead(data) {
        //......
    },
    /**
     * @desc 格式化数据为Sheet格式
     * @param {Array} json 数据 
     * @param {Number} n
     * @param {Number} r
     * @param {Array} keyMap
     */
    format2Sheet(json, n, r, keyMap) {
        //......
    },
    /**
     * @desc 格式化数据为Sheet格式
     * @param {Array} sheetData 
     * @param {String} title 
     * @param {Object} wb 
     * @param {Object} ref
     */
    format2WB(sheetData, title = "mySheet", wb,ref) {
        //......
    },
    /**
     * @desc 将xlsx Workbook 转为blob
     * @param {Array} wb 
     * @param {String} type 类型
     */
    format2Blob(wb, type) {
        //......
    },
    /**
     * @desc 匹配单元格对应的标识
     * @param {Number} n 
     */
    getCharCol(n) {
       //......
    },
};