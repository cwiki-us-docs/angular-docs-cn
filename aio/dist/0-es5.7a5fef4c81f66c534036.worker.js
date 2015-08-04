!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,(function(t){return e[t]}).bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="RA2L")}({LyFZ:function(e,t,r){var i,n;!function(){var s,o,a,u,l,c,d,h,f,p,y,m,g,x,v,w,Q,b,k,S,E,L,P,T,O,I,R=function e(t){var r=new e.Builder;return r.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),r.searchPipeline.add(e.stemmer),t.call(r,r),r.build()};R.version="2.3.8",(R.utils={}).warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),R.utils.asString=function(e){return null==e?"":e.toString()},R.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],s=e[n];if(Array.isArray(s))t[n]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[n]=s}}return t},(R.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r}).joiner="/",R.FieldRef.fromString=function(e){var t=e.indexOf(R.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),i=e.slice(t+1);return new R.FieldRef(i,r,e)},R.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+R.FieldRef.joiner+this.docRef),this._stringValue},(R.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0}).complete={intersect:function(e){return e},union:function(e){return e},contains:function(){return!0}},R.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},R.Set.prototype.contains=function(e){return!!this.elements[e]},R.Set.prototype.intersect=function(e){var t,r,i,n=[];if(e===R.Set.complete)return this;if(e===R.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),i=Object.keys(t.elements);for(var s=0;s<i.length;s++){var o=i[s];o in r.elements&&n.push(o)}return new R.Set(n)},R.Set.prototype.union=function(e){return e===R.Set.complete?R.Set.complete:e===R.Set.empty?this:new R.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},R.idf=function(e,t){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);return Math.log(1+Math.abs((t-r+.5)/(r+.5)))},(R.Token=function(e,t){this.str=e||"",this.metadata=t||{}}).prototype.toString=function(){return this.str},R.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},R.Token.prototype.clone=function(e){return new R.Token((e=e||function(e){return e})(this.str,this.metadata),this.metadata)},(R.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return new R.Token(R.utils.asString(e).toLowerCase(),R.utils.clone(t))});for(var r=e.toString().toLowerCase(),i=r.length,n=[],s=0,o=0;s<=i;s++){var a=s-o;if(r.charAt(s).match(R.tokenizer.separator)||s==i){if(a>0){var u=R.utils.clone(t)||{};u.position=[o,a],u.index=n.length,n.push(new R.Token(r.slice(o,s),u))}o=s+1}}return n}).separator=/[\s\-]+/,(R.Pipeline=function(){this._stack=[]}).registeredFunctions=Object.create(null),R.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&R.utils.warn("Overwriting existing registered function: "+t),e.label=t,R.Pipeline.registeredFunctions[e.label]=e},R.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||R.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},R.Pipeline.load=function(e){var t=new R.Pipeline;return e.forEach(function(e){var r=R.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)}),t},R.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){R.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},R.Pipeline.prototype.after=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r+=1,0,t)},R.Pipeline.prototype.before=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},R.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},R.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var i=this._stack[r],n=[],s=0;s<e.length;s++){var o=i(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)n.push(o[a]);else n.push(o)}e=n}return e},R.Pipeline.prototype.runString=function(e,t){var r=new R.Token(e,t);return this.run([r]).map(function(e){return e.toString()})},R.Pipeline.prototype.reset=function(){this._stack=[]},R.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return R.Pipeline.warnIfFunctionNotRegistered(e),e.label})},(R.Vector=function(e){this._magnitude=0,this.elements=e||[]}).prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,i=r-t,n=Math.floor(i/2),s=this.elements[2*n];i>1&&(s<e&&(t=n),s>e&&(r=n),s!=e);)i=r-t,n=t+Math.floor(i/2),s=this.elements[2*n];return s==e||s>e?2*n:s<e?2*(n+1):void 0},R.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},R.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],t):this.elements.splice(i,0,e,t)},R.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},R.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,i=e.elements,n=r.length,s=i.length,o=0,a=0,u=0,l=0;u<n&&l<s;)(o=r[u])<(a=i[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*i[l+1],u+=2,l+=2);return t},R.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},R.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},R.Vector.prototype.toJSON=function(){return this.elements},R.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",l="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,m=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,x=/.$/,v=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),Q=new RegExp("^"+l+u+"[^aeiouwxy]$"),b=/^(.+?[^aeiou])y$/,k=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,S=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,E=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,L=/^(.+?)(s|t)(ion)$/,P=/^(.+?)e$/,T=/ll$/,O=new RegExp("^"+l+u+"[^aeiouwxy]$"),I=function(e){var t,r,i,n,s,u,l;if(e.length<3)return e;if("y"==(i=e.substr(0,1))&&(e=i.toUpperCase()+e.substr(1)),s=y,(n=p).test(e)?e=e.replace(n,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=g,(n=m).test(e)){var I=n.exec(e);(n=c).test(I[1])&&(e=e.replace(n=x,""))}else s.test(e)&&(I=s.exec(e),(s=f).test(t=I[1])&&(u=w,l=Q,(s=v).test(e=t)?e+="e":u.test(e)?e=e.replace(n=x,""):l.test(e)&&(e+="e")));return(n=b).test(e)&&(e=(t=(I=n.exec(e))[1])+"i"),(n=k).test(e)&&(r=(I=n.exec(e))[2],(n=c).test(t=I[1])&&(e=t+o[r])),(n=S).test(e)&&(r=(I=n.exec(e))[2],(n=c).test(t=I[1])&&(e=t+a[r])),s=L,(n=E).test(e)?(I=n.exec(e),(n=d).test(t=I[1])&&(e=t)):s.test(e)&&(I=s.exec(e),(s=d).test(t=I[1]+I[2])&&(e=t)),(n=P).test(e)&&(I=n.exec(e),s=h,u=O,((n=d).test(t=I[1])||s.test(t)&&!u.test(t))&&(e=t)),s=d,(n=T).test(e)&&s.test(e)&&(e=e.replace(n=x,"")),"y"==i&&(e=i.toLowerCase()+e.substr(1)),e},function(e){return e.update(I)}),R.Pipeline.registerFunction(R.stemmer,"stemmer"),R.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},R.stopWordFilter=R.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),R.Pipeline.registerFunction(R.stopWordFilter,"stopWordFilter"),R.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},R.Pipeline.registerFunction(R.trimmer,"trimmer"),(R.TokenSet=function(){this.final=!1,this.edges={},this.id=R.TokenSet._nextId,R.TokenSet._nextId+=1})._nextId=1,R.TokenSet.fromArray=function(e){for(var t=new R.TokenSet.Builder,r=0,i=e.length;r<i;r++)t.insert(e[r]);return t.finish(),t.root},R.TokenSet.fromClause=function(e){return"editDistance"in e?R.TokenSet.fromFuzzyString(e.term,e.editDistance):R.TokenSet.fromString(e.term)},R.TokenSet.fromFuzzyString=function(e,t){for(var r=new R.TokenSet,i=[{node:r,editsRemaining:t,str:e}];i.length;){var n=i.pop();if(n.str.length>0){var s,o=n.str.charAt(0);o in n.node.edges?s=n.node.edges[o]:(s=new R.TokenSet,n.node.edges[o]=s),1==n.str.length&&(s.final=!0),i.push({node:s,editsRemaining:n.editsRemaining,str:n.str.slice(1)})}if(0!=n.editsRemaining){if("*"in n.node.edges)var a=n.node.edges["*"];else a=new R.TokenSet,n.node.edges["*"]=a;if(0==n.str.length&&(a.final=!0),i.push({node:a,editsRemaining:n.editsRemaining-1,str:n.str}),n.str.length>1&&i.push({node:n.node,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)}),1==n.str.length&&(n.node.final=!0),n.str.length>=1){if("*"in n.node.edges)var u=n.node.edges["*"];else u=new R.TokenSet,n.node.edges["*"]=u;1==n.str.length&&(u.final=!0),i.push({node:u,editsRemaining:n.editsRemaining-1,str:n.str.slice(1)})}if(n.str.length>1){var l,c=n.str.charAt(0),d=n.str.charAt(1);d in n.node.edges?l=n.node.edges[d]:(l=new R.TokenSet,n.node.edges[d]=l),1==n.str.length&&(l.final=!0),i.push({node:l,editsRemaining:n.editsRemaining-1,str:c+n.str.slice(2)})}}}return r},R.TokenSet.fromString=function(e){for(var t=new R.TokenSet,r=t,i=0,n=e.length;i<n;i++){var s=e[i],o=i==n-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new R.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},R.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),i=Object.keys(r.node.edges),n=i.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<n;s++){var o=i[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},R.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var n=t[i];e=e+n+this.edges[n].id}return e},R.TokenSet.prototype.intersect=function(e){for(var t=new R.TokenSet,r=void 0,i=[{qNode:e,output:t,node:this}];i.length;){r=i.pop();for(var n=Object.keys(r.qNode.edges),s=n.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=n[u],c=0;c<a;c++){var d=o[c];if(d==l||"*"==l){var h=r.node.edges[d],f=r.qNode.edges[l],p=h.final&&f.final,y=void 0;d in r.output.edges?(y=r.output.edges[d]).final=y.final||p:((y=new R.TokenSet).final=p,r.output.edges[d]=y),i.push({qNode:f,output:y,node:h})}}}return t},R.TokenSet.Builder=function(){this.previousWord="",this.root=new R.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},R.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,i=r;i<e.length;i++){var n=new R.TokenSet,s=e[i];t.edges[s]=n,this.uncheckedNodes.push({parent:t,char:s,child:n}),t=n}t.final=!0,this.previousWord=e},R.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},R.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},(R.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline}).prototype.search=function(e){return this.query(function(t){new R.QueryParser(e,t).parse()})},R.Index.prototype.query=function(e){for(var t=new R.Query(this.fields),r=Object.create(null),i=Object.create(null),n=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)i[this.fields[a]]=new R.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=R.Set.complete;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var d=0;d<u.length;d++){l.term=u[d];var h=R.TokenSet.fromClause(l),f=this.tokenSet.intersect(h).toArray();if(0===f.length&&l.presence===R.Query.presence.REQUIRED){for(var p=0;p<l.fields.length;p++)s[I=l.fields[p]]=R.Set.empty;break}for(var y=0;y<f.length;y++){var m=f[y],g=this.invertedIndex[m],x=g._index;for(p=0;p<l.fields.length;p++){var v=g[I=l.fields[p]],w=Object.keys(v),Q=m+"/"+I,b=new R.Set(w);if(l.presence==R.Query.presence.REQUIRED&&(c=c.union(b),void 0===s[I]&&(s[I]=R.Set.complete)),l.presence!=R.Query.presence.PROHIBITED){if(i[I].upsert(x,l.boost,function(e,t){return e+t}),!n[Q]){for(var k=0;k<w.length;k++){var S,E=w[k],L=new R.FieldRef(E,I),P=v[E];void 0===(S=r[L])?r[L]=new R.MatchData(m,I,P):S.add(m,I,P)}n[Q]=!0}}else void 0===o[I]&&(o[I]=R.Set.empty),o[I]=o[I].union(b)}}}if(l.presence===R.Query.presence.REQUIRED)for(p=0;p<l.fields.length;p++)s[I=l.fields[p]]=s[I].intersect(c)}var T=R.Set.complete,O=R.Set.empty;for(a=0;a<this.fields.length;a++){var I;s[I=this.fields[a]]&&(T=T.intersect(s[I])),o[I]&&(O=O.union(o[I]))}var F=Object.keys(r),j=[],_=Object.create(null);if(t.isNegated())for(F=Object.keys(this.fieldVectors),a=0;a<F.length;a++){var C=R.FieldRef.fromString(L=F[a]);r[L]=new R.MatchData}for(a=0;a<F.length;a++){var N=(C=R.FieldRef.fromString(F[a])).docRef;if(T.contains(N)&&!O.contains(N)){var D,A=i[C.fieldName].similarity(this.fieldVectors[C]);if(void 0!==(D=_[N]))D.score+=A,D.matchData.combine(r[C]);else{var B={ref:N,score:A,matchData:r[C]};_[N]=B,j.push(B)}}}return j.sort(function(e,t){return t.score-e.score})},R.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:R.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},R.Index.load=function(e){var t={},r={},i=e.fieldVectors,n=Object.create(null),s=e.invertedIndex,o=new R.TokenSet.Builder,a=R.Pipeline.load(e.pipeline);e.version!=R.version&&R.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+R.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<i.length;u++)r[(l=i[u])[0]]=new R.Vector(l[1]);for(u=0;u<s.length;u++){var l,c=(l=s[u])[0],d=l[1];o.insert(c),n[c]=d}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=n,t.tokenSet=o.root,t.pipeline=a,new R.Index(t)},(R.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=R.tokenizer,this.pipeline=new R.Pipeline,this.searchPipeline=new R.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]}).prototype.ref=function(e){this._ref=e},R.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},R.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},R.Builder.prototype.k1=function(e){this._k1=e},R.Builder.prototype.add=function(e,t){var r=e[this._ref],i=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var n=0;n<i.length;n++){var s=i[n],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new R.FieldRef(r,s),d=Object.create(null);this.fieldTermFrequencies[c]=d,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var h=0;h<l.length;h++){var f=l[h];if(null==d[f]&&(d[f]=0),d[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<i.length;y++)p[i[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},R.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},i={},n=0;n<t;n++){var s=R.FieldRef.fromString(e[n]),o=s.fieldName;i[o]||(i[o]=0),i[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(n=0;n<a.length;n++){var u=a[n];r[u]=r[u]/i[u]}this.averageFieldLength=r},R.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,i=Object.create(null),n=0;n<r;n++){for(var s=R.FieldRef.fromString(t[n]),o=s.fieldName,a=this.fieldLengths[s],u=new R.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),d=c.length,h=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<d;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===i[x]?(y=R.idf(this.invertedIndex[x],this.documentCount),i[x]=y):y=i[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=h,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},R.Builder.prototype.createTokenSet=function(){this.tokenSet=R.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},R.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new R.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},R.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},(R.MatchData=function(e,t,r){for(var i=Object.create(null),n=Object.keys(r||{}),s=0;s<n.length;s++){var o=n[s];i[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=i)}).prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var i=t[r],n=Object.keys(e.metadata[i]);null==this.metadata[i]&&(this.metadata[i]=Object.create(null));for(var s=0;s<n.length;s++){var o=n[s],a=Object.keys(e.metadata[i][o]);null==this.metadata[i][o]&&(this.metadata[i][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];this.metadata[i][o][l]=null==this.metadata[i][o][l]?e.metadata[i][o][l]:this.metadata[i][o][l].concat(e.metadata[i][o][l])}}}},R.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var i=Object.keys(r),n=0;n<i.length;n++){var s=i[n];this.metadata[e][t][s]=s in this.metadata[e][t]?this.metadata[e][t][s].concat(r[s]):r[s]}else this.metadata[e][t]=r},(R.Query=function(e){this.clauses=[],this.allFields=e}).wildcard=new String("*"),R.Query.wildcard.NONE=0,R.Query.wildcard.LEADING=1,R.Query.wildcard.TRAILING=2,R.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},R.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=R.Query.wildcard.NONE),e.wildcard&R.Query.wildcard.LEADING&&e.term.charAt(0)!=R.Query.wildcard&&(e.term="*"+e.term),e.wildcard&R.Query.wildcard.TRAILING&&e.term.slice(-1)!=R.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=R.Query.presence.OPTIONAL),this.clauses.push(e),this},R.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=R.Query.presence.PROHIBITED)return!1;return!0},R.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(e){this.term(e,R.utils.clone(t))},this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},(R.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r}).prototype=new Error,(R.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]}).prototype.run=function(){for(var e=R.QueryLexer.lexText;e;)e=e(this)},R.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)e.push(this.str.slice(t,r=this.escapeCharPositions[i])),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},R.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},R.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},R.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return R.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},R.QueryLexer.prototype.width=function(){return this.pos-this.start},R.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},R.QueryLexer.prototype.backup=function(){this.pos-=1},R.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=R.QueryLexer.EOS&&this.backup()},R.QueryLexer.prototype.more=function(){return this.pos<this.length},R.QueryLexer.EOS="EOS",R.QueryLexer.FIELD="FIELD",R.QueryLexer.TERM="TERM",R.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",R.QueryLexer.BOOST="BOOST",R.QueryLexer.PRESENCE="PRESENCE",R.QueryLexer.lexField=function(e){return e.backup(),e.emit(R.QueryLexer.FIELD),e.ignore(),R.QueryLexer.lexText},R.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(R.QueryLexer.TERM)),e.ignore(),e.more())return R.QueryLexer.lexText},R.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.EDIT_DISTANCE),R.QueryLexer.lexText},R.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.BOOST),R.QueryLexer.lexText},R.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(R.QueryLexer.TERM)},R.QueryLexer.termSeparator=R.tokenizer.separator,R.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==R.QueryLexer.EOS)return R.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return R.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if(t.match(R.QueryLexer.termSeparator))return R.QueryLexer.lexTerm}else e.escapeCharacter()}},(R.QueryParser=function(e,t){this.lexer=new R.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0}).prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=R.QueryParser.parseClause;e;)e=e(this);return this.query},R.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},R.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},R.QueryParser.prototype.nextClause=function(){this.query.clause(this.currentClause),this.currentClause={}},R.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case R.QueryLexer.PRESENCE:return R.QueryParser.parsePresence;case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new R.QueryParseError(r,t.start,t.end)}},R.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=R.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=R.Query.presence.REQUIRED;break;default:throw new R.QueryParseError("unrecognised presence operator'"+t.str+"'",t.start,t.end)}var r=e.peekLexeme();if(null==r)throw new R.QueryParseError("expecting term or field, found nothing",t.start,t.end);switch(r.type){case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:throw new R.QueryParseError("expecting term or field, found '"+r.type+"'",r.start,r.end)}}},R.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", ");throw new R.QueryParseError("unrecognised field '"+t.str+"', possible fields: "+r,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw new R.QueryParseError("expecting term, found nothing",t.start,t.end);switch(i.type){case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:throw new R.QueryParseError("expecting term, found '"+i.type+"'",i.start,i.end)}}},R.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw new R.QueryParseError("Unexpected lexeme type '"+r.type+"'",r.start,r.end)}else e.nextClause()}},R.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r))throw new R.QueryParseError("edit distance must be numeric",t.start,t.end);e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw new R.QueryParseError("Unexpected lexeme type '"+i.type+"'",i.start,i.end)}else e.nextClause()}},R.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r))throw new R.QueryParseError("boost must be numeric",t.start,t.end);e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw new R.QueryParseError("Unexpected lexeme type '"+i.type+"'",i.start,i.end)}else e.nextClause()}},void 0===(n="function"==typeof(i=function(){return R})?i.call(t,r,t,e):i)||(e.exports=n)}()},RA2L:function(e,t,r){"use strict";r.r(t);var i,n=r("LyFZ"),s={};function o(e){e=e.replace(/^["']|['"]$/g,"");try{if(e.length){var t=e.replace(/(^|\s)([^\s]+)/g,"$1+$2"),r=i.search(t);if(0===r.length&&(r=i.search(e)),0===r.length){var n="title:*"+e.split(" ",1)[0]+"*";r=i.search(e+" "+n)}return r.map(function(e){return s[e.ref]})}}catch(o){console.error(o)}return[]}addEventListener("message",function(e){var t,r=e.data.type,a=e.data.id,u=e.data.payload;switch(r){case"load-index":(t=new XMLHttpRequest).onload=function(){var e,t,o,u,l;e=JSON.parse(this.responseText),u=(o=e).dictionary,l=o.pages,t=function(e){l.forEach(function(t){var r=function(e,t){var r,i,n,s,o,a;return Object.assign(Object.assign({},e),{headings:null!==(i=null===(r=e.headings)||void 0===r?void 0:r.map(function(e){return t[e]}).join(" "))&&void 0!==i?i:"",keywords:null!==(s=null===(n=e.keywords)||void 0===n?void 0:n.map(function(e){return t[e]}).join(" "))&&void 0!==s?s:"",members:null!==(a=null===(o=e.members)||void 0===o?void 0:o.map(function(e){return t[e]}).join(" "))&&void 0!==a?a:""})}(t,u);e.add(r),s[r.path]=r})},n.QueryLexer.termSeparator=n.tokenizer.separator=/\s+/,i=n(function(){this.pipeline.remove(n.stemmer),this.ref("path"),this.field("topics",{boost:15}),this.field("title",{boost:10}),this.field("headings",{boost:5}),this.field("members",{boost:4}),this.field("keywords",{boost:2}),t(this)}),postMessage({type:r,id:a,payload:!0})},t.open("GET","/generated/docs/app/search-data.json"),t.send();break;case"query-index":postMessage({type:r,id:a,payload:{query:u,results:o(u)}});break;default:postMessage({type:r,id:a,payload:{error:"invalid message type"}})}})}});
//# sourceMappingURL=0-es5.7a5fef4c81f66c534036.worker.js.map