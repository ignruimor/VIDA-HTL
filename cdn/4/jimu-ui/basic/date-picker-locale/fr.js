System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c});var a={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}}const n={date:i({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:i({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var r={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"};function o(e){return function(t,a){var i;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):n;i=e.formattingValues[r]||e.formattingValues[n]}else{var o=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;i=e.values[u]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}}const u={ordinalNumber:function(e,t){var a=Number(e),i=null==t?void 0:t.unit;return 0===a?"0":a+(1===a?i&&["year","week","hour","minute","second"].includes(i)?"ère":"er":"ème")},era:o({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},defaultWidth:"wide"}),day:o({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})};function d(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],r=t.match(n);if(!r)return null;var o,u=r[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?m(d,(function(e){return e.test(u)})):s(d,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(l):l,o=a.valueCallback?a.valueCallback(o):o;var h=t.slice(u.length);return{value:o,rest:h}}}function s(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function m(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}var l,h={ordinalNumber:(l={matchPattern:/^(\d+)(ième|ère|ème|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(l.matchPattern);if(!a)return null;var i=a[0],n=e.match(l.parsePattern);if(!n)return null;var r=l.valueCallback?l.valueCallback(n[0]):n[0];r=t.valueCallback?t.valueCallback(r):r;var o=e.slice(i.length);return{value:r,rest:o}}),era:d({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})};const c={code:"fr",formatDistance:function(e,t,i){var n,r=a[e];return n="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"dans "+n:"il y a "+n:n},formatLong:n,formatRelative:function(e,t,a,i){return r[e]},localize:u,match:h,options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));