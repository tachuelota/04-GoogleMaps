const JSDOM = require("jsdom").JSDOM;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;
global.Element = dom.window.Element;

const target = document.querySelector('p');

function closestParentOld( target, selector ) {
	var parent = target.parentNode;
	while( parent ) {
		var matchesMethod = parent.matches || parent.matchesSelector || parent.msMatchesSelector;
		if( matchesMethod && matchesMethod.call( parent, selector ) ) {
			return parent;
		}
		parent = parent.parentNode;
	}
	return null;
}

var cachedMatches = typeof Element !== 'undefined' && ( Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector );

function closestParentNew( target, selector ) {
	var parent = target.parentNode;
	while( parent ) {
		if( parent.nodeType === 1 && cachedMatches && cachedMatches.call( parent, selector ) ) {
			return parent;
		}
		parent = parent.parentNode;
	}
	return null;
}

console.time("old");
for (let i = 0; i < 100000; i++) {
    closestParentOld(target, '.non-existent');
}
console.timeEnd("old");

console.time("new");
for (let i = 0; i < 100000; i++) {
    closestParentNew(target, '.non-existent');
}
console.timeEnd("new");
