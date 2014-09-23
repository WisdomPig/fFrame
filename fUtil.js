
/* *
 * @usage	: util javascript
 * @author	: Frend
 * @date	: 2014-08-26
 * @update	: 2014-09-01
 * */

var config = {
	class2type: {},
	toString: Object.toString
};

var fUtil = {
	/* *
	 * @usage : judge the type of input
	 * */
	classToType: function() {
		var clsArr = ['String', 'Object', 'Function', 'Number', 'Null', 'Array', 'Undefined', 'Boolean', 'RegExp', 'Date'],
			len = clsArr.length;
		
		for (var i=0; i<len; i++) {
			config.class2type['[object ' + clsArr[i] + ']'] = clsArr[i].toLowerCase();
		}
	}(),	//execute immediatly
	type: function(obj) {
		return config.class2type[config.toString.call(obj)];
	},
	
	/* *
	 * @usage : detect the browser's type && version by navigator.userAgent
	 * */
	uaMatch: function(ua) {
		var ua = ua.toLowerCase();
		
		var browser_math = 
			/(chrome)[ \/]([\w.]+)/.exec(ua) ||
			/(webkit)[ \/]([\w.]+)/.exec(ua) ||
			/(msie) ([\w.])/.exec(ua) ||
			/(firefox)[ \/]([\w.])/.exec(ua) ||
			/(opera)[ \/]([\w.]+)/.exec(ua) || 
			[];
		
		var platform_math = 
			/(ipad)/.exec(ua) ||
			/(iphone)/.exec(ua) ||
			/(android)/.exec(ua) || 
			[];
					   
		return {
			browser: browser_math[1] || '',
			version: browser_math[2] || '',
			platform: platform_math[0] || ''
		};
	},
	browser: function() {
		var matched = fUtil.uaMatch(navigator.userAgent), browser = {};
		
		if (matched.browser) {
			browser[matched.browser] = true;
			browser.version = matchde.version;
		}
		
		if (matched.platform) {
			browser[matched.platform] = true;
		}
		
		//chrome is webkit, and webkit is also safari
		if (browser.chrome) {
			browser.webkit = true;
		} else if (browser.webkit) {
			browser.safari = true;
		}
		
		return browser;
	},
	
	/* *
	 * @usage : detect event support
	 * */
	
};









