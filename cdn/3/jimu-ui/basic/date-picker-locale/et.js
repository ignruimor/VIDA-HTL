System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>v});var a={lessThanXSeconds:{standalone:{one:"vähem kui üks sekund",other:"vähem kui {{count}} sekundit"},withPreposition:{one:"vähem kui ühe sekundi",other:"vähem kui {{count}} sekundi"}},xSeconds:{standalone:{one:"üks sekund",other:"{{count}} sekundit"},withPreposition:{one:"ühe sekundi",other:"{{count}} sekundi"}},halfAMinute:{standalone:"pool minutit",withPreposition:"poole minuti"},lessThanXMinutes:{standalone:{one:"vähem kui üks minut",other:"vähem kui {{count}} minutit"},withPreposition:{one:"vähem kui ühe minuti",other:"vähem kui {{count}} minuti"}},xMinutes:{standalone:{one:"üks minut",other:"{{count}} minutit"},withPreposition:{one:"ühe minuti",other:"{{count}} minuti"}},aboutXHours:{standalone:{one:"umbes üks tund",other:"umbes {{count}} tundi"},withPreposition:{one:"umbes ühe tunni",other:"umbes {{count}} tunni"}},xHours:{standalone:{one:"üks tund",other:"{{count}} tundi"},withPreposition:{one:"ühe tunni",other:"{{count}} tunni"}},xDays:{standalone:{one:"üks päev",other:"{{count}} päeva"},withPreposition:{one:"ühe päeva",other:"{{count}} päeva"}},aboutXWeeks:{standalone:{one:"umbes üks nädal",other:"umbes {{count}} nädalat"},withPreposition:{one:"umbes ühe nädala",other:"umbes {{count}} nädala"}},xWeeks:{standalone:{one:"üks nädal",other:"{{count}} nädalat"},withPreposition:{one:"ühe nädala",other:"{{count}} nädala"}},aboutXMonths:{standalone:{one:"umbes üks kuu",other:"umbes {{count}} kuud"},withPreposition:{one:"umbes ühe kuu",other:"umbes {{count}} kuu"}},xMonths:{standalone:{one:"üks kuu",other:"{{count}} kuud"},withPreposition:{one:"ühe kuu",other:"{{count}} kuu"}},aboutXYears:{standalone:{one:"umbes üks aasta",other:"umbes {{count}} aastat"},withPreposition:{one:"umbes ühe aasta",other:"umbes {{count}} aasta"}},xYears:{standalone:{one:"üks aasta",other:"{{count}} aastat"},withPreposition:{one:"ühe aasta",other:"{{count}} aasta"}},overXYears:{standalone:{one:"rohkem kui üks aasta",other:"rohkem kui {{count}} aastat"},withPreposition:{one:"rohkem kui ühe aasta",other:"rohkem kui {{count}} aasta"}},almostXYears:{standalone:{one:"peaaegu üks aasta",other:"peaaegu {{count}} aastat"},withPreposition:{one:"peaaegu ühe aasta",other:"peaaegu {{count}} aasta"}}};function n(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}const i={date:n({formats:{full:"EEEE, d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:n({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'kell' {{time}}",long:"{{date}} 'kell' {{time}}",medium:"{{date}}. {{time}}",short:"{{date}}. {{time}}"},defaultWidth:"full"})};var r={lastWeek:"'eelmine' eeee 'kell' p",yesterday:"'eile kell' p",today:"'täna kell' p",tomorrow:"'homme kell' p",nextWeek:"'järgmine' eeee 'kell' p",other:"P"};function o(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=e.formattingValues[r]||e.formattingValues[i]}else{var o=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}}var u={narrow:["J","V","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],wide:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},s={narrow:["P","E","T","K","N","R","L"],short:["P","E","T","K","N","R","L"],abbreviated:["pühap.","esmasp.","teisip.","kolmap.","neljap.","reede.","laup."],wide:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"]};const l={ordinalNumber:function(e,t){return Number(e)+"."},era:o({values:{narrow:["e.m.a","m.a.j"],abbreviated:["e.m.a","m.a.j"],wide:["enne meie ajaarvamist","meie ajaarvamise järgi"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:o({values:u,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:o({values:s,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},abbreviated:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},wide:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},abbreviated:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},wide:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"}},defaultFormattingWidth:"wide"})};function m(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,u=r[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?h(s,(function(e){return e.test(u)})):d(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(l):l,o=a.valueCallback?a.valueCallback(o):o;var m=t.slice(u.length);return{value:o,rest:m}}}function d(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function h(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}var k,p={ordinalNumber:(k={matchPattern:/^\d+\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(k.matchPattern);if(!a)return null;var n=a[0],i=e.match(k.parsePattern);if(!i)return null;var r=k.valueCallback?k.valueCallback(i[0]):i[0];r=t.valueCallback?t.valueCallback(r):r;var o=e.slice(n.length);return{value:r,rest:o}}),era:m({matchPatterns:{narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^(m|p)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jvmasond]/i,abbreviated:/^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,wide:/^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^juun/i,/^juul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{any:/^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},defaultParseWidth:"any"})};const v={code:"et",formatDistance:function(e,t,n){var i,r=null!=n&&n.addSuffix?a[e].withPreposition:a[e].standalone;return i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?i+" pärast":i+" eest":i},formatLong:i,formatRelative:function(e,t,a,n){return r[e]},localize:l,match:p,options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));