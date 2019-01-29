'use strict'
// Options

class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeCssText(){
        let css = '';
        if (this.height !== undefined){
            css += 'height:' + this.height + ';';
        }
        if (this.width !== undefined){
            css += 'width:' + this.width + ';';
        }
        if (this.bg !== undefined){
            css += 'background:' + this.bg + ';';
        }
        if (this.fontSize !== undefined){
            css += 'font-size:' + this.fontSize + ';';
        }
        if (this.textAlign !== undefined){
            css += 'text-align:' + this.textAlign + ';';
        }
        return css;
    }
    createTextDiv(text){
        let div = document.createElement('div');
        div.textContent = text;
        div.style.cssText = '' + makeCssText() + '';
    }
}

let option = new Options('20px', '30px', 'red', 10, 'center');
option.createTextDiv('Hello, World!');