function KyleIsBoss() {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var doc, pdf;

	pdf = __webpack_require__(1);

	doc = new pdf();

	//blarg = document.getElementById("yes").value;

	doc.text(20, 20, 'This is Kyle killing it!');

	doc.save();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(){
	/** @preserve jsPDF 0.9.0rc1 ( 2013-04-07T16:52 commit ID d95d8f69915bb999f6704e8021108e2e755bd868 )
	Copyright (c) 2010-2012 James Hall, james@snapshotmedia.co.uk, https://github.com/MrRio/jsPDF
	Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
	MIT license.
	*/
	function Tree(){"use strict"
	function t(t){var e,r,s,o,i,u,a=n.dyn_tree,c=n.stat_desc.static_tree,l=n.stat_desc.extra_bits,f=n.stat_desc.extra_base,w=n.stat_desc.max_length,d=0
	for(o=0;MAX_BITS>=o;o++)t.bl_count[o]=0
	for(a[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;HEAP_SIZE>e;e++)r=t.heap[e],o=a[2*a[2*r+1]+1]+1,o>w&&(o=w,d++),a[2*r+1]=o,r>n.max_code||(t.bl_count[o]++,i=0,r>=f&&(i=l[r-f]),u=a[2*r],t.opt_len+=u*(o+i),c&&(t.static_len+=u*(c[2*r+1]+i)))
	if(0!==d){do{for(o=w-1;0===t.bl_count[o];)o--
	t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[w]--,d-=2}while(d>0)
	for(o=w;0!==o;o--)for(r=t.bl_count[o];0!==r;)s=t.heap[--e],s>n.max_code||(a[2*s+1]!=o&&(t.opt_len+=(o-a[2*s+1])*a[2*s],a[2*s+1]=o),r--)}}function e(t,e){var r=0
	do r|=1&t,t>>>=1,r<<=1
	while(--e>0)
	return r>>>1}function r(t,r,n){var s,o,i,u=[],a=0
	for(s=1;MAX_BITS>=s;s++)u[s]=a=a+n[s-1]<<1
	for(o=0;r>=o;o++)i=t[2*o+1],0!==i&&(t[2*o]=e(u[i]++,i))}var n=this
	n.build_tree=function(e){var s,o,i,u=n.dyn_tree,a=n.stat_desc.static_tree,c=n.stat_desc.elems,l=-1
	for(e.heap_len=0,e.heap_max=HEAP_SIZE,s=0;c>s;s++)0!==u[2*s]?(e.heap[++e.heap_len]=l=s,e.depth[s]=0):u[2*s+1]=0
	for(;e.heap_len<2;)i=e.heap[++e.heap_len]=2>l?++l:0,u[2*i]=1,e.depth[i]=0,e.opt_len--,a&&(e.static_len-=a[2*i+1])
	for(n.max_code=l,s=Math.floor(e.heap_len/2);s>=1;s--)e.pqdownheap(u,s)
	i=c
	do s=e.heap[1],e.heap[1]=e.heap[e.heap_len--],e.pqdownheap(u,1),o=e.heap[1],e.heap[--e.heap_max]=s,e.heap[--e.heap_max]=o,u[2*i]=u[2*s]+u[2*o],e.depth[i]=Math.max(e.depth[s],e.depth[o])+1,u[2*s+1]=u[2*o+1]=i,e.heap[1]=i++,e.pqdownheap(u,1)
	while(e.heap_len>=2)
	e.heap[--e.heap_max]=e.heap[1],t(e),r(u,n.max_code,e.bl_count)}}function StaticTree(t,e,r,n,s){var o=this
	o.static_tree=t,o.extra_bits=e,o.extra_base=r,o.elems=n,o.max_length=s}function Config(t,e,r,n,s){var o=this
	o.good_length=t,o.max_lazy=e,o.nice_length=r,o.max_chain=n,o.func=s}function smaller(t,e,r,n){var s=t[2*e],o=t[2*r]
	return o>s||s==o&&n[e]<=n[r]}function Deflate(){function t(){var t
	for(M=2*C,L[H-1]=0,t=0;H-1>t;t++)L[t]=0
	$=config_table[tt].max_lazy,rt=config_table[tt].good_length,nt=config_table[tt].nice_length,Q=config_table[tt].max_chain,G=0,P=0,J=0,K=V=MIN_MATCH-1,X=0,B=0}function e(){var t
	for(t=0;L_CODES>t;t++)st[2*t]=0
	for(t=0;D_CODES>t;t++)ot[2*t]=0
	for(t=0;BL_CODES>t;t++)it[2*t]=0
	st[2*END_BLOCK]=1,ut.opt_len=ut.static_len=0,dt=pt=0}function r(){at.dyn_tree=st,at.stat_desc=StaticTree.static_l_desc,ct.dyn_tree=ot,ct.stat_desc=StaticTree.static_d_desc,lt.dyn_tree=it,lt.stat_desc=StaticTree.static_bl_desc,yt=0,vt=0,ht=8,e()}function n(t,e){var r,n,s=-1,o=t[1],i=0,u=7,a=4
	for(0===o&&(u=138,a=3),t[2*(e+1)+1]=65535,r=0;e>=r;r++)n=o,o=t[2*(r+1)+1],++i<u&&n==o||(a>i?it[2*n]+=i:0!==n?(n!=s&&it[2*n]++,it[2*REP_3_6]++):10>=i?it[2*REPZ_3_10]++:it[2*REPZ_11_138]++,i=0,s=n,0===o?(u=138,a=3):n==o?(u=6,a=3):(u=7,a=4))}function s(){var t
	for(n(st,at.max_code),n(ot,ct.max_code),lt.build_tree(ut),t=BL_CODES-1;t>=3&&0===it[2*Tree.bl_order[t]+1];t--);return ut.opt_len+=3*(t+1)+5+5+4,t}function o(t){ut.pending_buf[ut.pending++]=t}function i(t){o(255&t),o(t>>>8&255)}function u(t){o(t>>8&255),o(255&t&255)}function a(t,e){var r,n=e
	vt>Buf_size-n?(r=t,yt|=r<<vt&65535,i(yt),yt=r>>>Buf_size-vt,vt+=n-Buf_size):(yt|=t<<vt&65535,vt+=n)}function c(t,e){var r=2*t
	a(65535&e[r],65535&e[r+1])}function l(t,e){var r,n,s=-1,o=t[1],i=0,u=7,l=4
	for(0===o&&(u=138,l=3),r=0;e>=r;r++)if(n=o,o=t[2*(r+1)+1],!(++i<u&&n==o)){if(l>i){do c(n,it)
	while(0!==--i)}else 0!==n?(n!=s&&(c(n,it),i--),c(REP_3_6,it),a(i-3,2)):10>=i?(c(REPZ_3_10,it),a(i-3,3)):(c(REPZ_11_138,it),a(i-11,7))
	i=0,s=n,0===o?(u=138,l=3):n==o?(u=6,l=3):(u=7,l=4)}}function f(t,e,r){var n
	for(a(t-257,5),a(e-1,5),a(r-4,4),n=0;r>n;n++)a(it[2*Tree.bl_order[n]+1],3)
	l(st,t-1),l(ot,e-1)}function w(){16==vt?(i(yt),yt=0,vt=0):vt>=8&&(o(255&yt),yt>>>=8,vt-=8)}function d(){a(STATIC_TREES<<1,3),c(END_BLOCK,StaticTree.static_ltree),w(),9>1+ht+10-vt&&(a(STATIC_TREES<<1,3),c(END_BLOCK,StaticTree.static_ltree),w()),ht=7}function m(t,e){var r,n,s
	if(ut.pending_buf[mt+2*dt]=t>>>8&255,ut.pending_buf[mt+2*dt+1]=255&t,ut.pending_buf[ft+dt]=255&e,dt++,0===t?st[2*e]++:(pt++,t--,st[2*(Tree._length_code[e]+LITERALS+1)]++,ot[2*Tree.d_code(t)]++),0===(8191&dt)&&tt>2){for(r=8*dt,n=G-P,s=0;D_CODES>s;s++)r+=ot[2*s]*(5+Tree.extra_dbits[s])
	if(r>>>=3,pt<Math.floor(dt/2)&&r<Math.floor(n/2))return!0}return dt==wt-1}function p(t,e){var r,n,s,o,i=0
	if(0!==dt)do r=ut.pending_buf[mt+2*i]<<8&65280|255&ut.pending_buf[mt+2*i+1],n=255&ut.pending_buf[ft+i],i++,0===r?c(n,t):(s=Tree._length_code[n],c(s+LITERALS+1,t),o=Tree.extra_lbits[s],0!==o&&(n-=Tree.base_length[s],a(n,o)),r--,s=Tree.d_code(r),c(s,e),o=Tree.extra_dbits[s],0!==o&&(r-=Tree.base_dist[s],a(r,o)))
	while(dt>i)
	c(END_BLOCK,t),ht=t[2*END_BLOCK+1]}function h(){vt>8?i(yt):vt>0&&o(255&yt),yt=0,vt=0}function y(t,e,r){h(),ht=8,r&&(i(e),i(~e)),ut.pending_buf.set(N.subarray(t,t+e),ut.pending),ut.pending+=e}function v(t,e,r){a((STORED_BLOCK<<1)+(r?1:0),3),y(t,e,!0)}function _(t,r,n){var o,i,u=0
	tt>0?(at.build_tree(ut),ct.build_tree(ut),u=s(),o=ut.opt_len+3+7>>>3,i=ut.static_len+3+7>>>3,o>=i&&(o=i)):o=i=r+5,o>=r+4&&-1!=t?v(t,r,n):i==o?(a((STATIC_TREES<<1)+(n?1:0),3),p(StaticTree.static_ltree,StaticTree.static_dtree)):(a((DYN_TREES<<1)+(n?1:0),3),f(at.max_code+1,ct.max_code+1,u+1),p(st,ot)),e(),n&&h()}function q(t){_(P>=0?P:-1,G-P,t),P=G,A.flush_pending()}function g(){var t,e,r,n
	do{if(n=M-J-G,0===n&&0===G&&0===J)n=C
	else if(-1==n)n--
	else if(G>=C+C-MIN_LOOKAHEAD){N.set(N.subarray(C,C+C),0),Y-=C,G-=C,P-=C,t=H,r=t
	do e=65535&L[--r],L[r]=e>=C?e-C:0
	while(0!==--t)
	t=C,r=t
	do e=65535&D[--r],D[r]=e>=C?e-C:0
	while(0!==--t)
	n+=C}if(0===A.avail_in)return
	t=A.read_buf(N,G+J,n),J+=t,J>=MIN_MATCH&&(B=255&N[G],B=(B<<j^255&N[G+1])&Z)}while(MIN_LOOKAHEAD>J&&0!==A.avail_in)}function x(t){var e,r=65535
	for(r>R-5&&(r=R-5);;){if(1>=J){if(g(),0===J&&t==Z_NO_FLUSH)return NeedMore
	if(0===J)break}if(G+=J,J=0,e=P+r,(0===G||G>=e)&&(J=G-e,G=e,q(!1),0===A.avail_out))return NeedMore
	if(G-P>=C-MIN_LOOKAHEAD&&(q(!1),0===A.avail_out))return NeedMore}return q(t==Z_FINISH),0===A.avail_out?t==Z_FINISH?FinishStarted:NeedMore:t==Z_FINISH?FinishDone:BlockDone}function k(t){var e,r,n=Q,s=G,o=V,i=G>C-MIN_LOOKAHEAD?G-(C-MIN_LOOKAHEAD):0,u=nt,a=z,c=G+MAX_MATCH,l=N[s+o-1],f=N[s+o]
	V>=rt&&(n>>=2),u>J&&(u=J)
	do if(e=t,N[e+o]==f&&N[e+o-1]==l&&N[e]==N[s]&&N[++e]==N[s+1]){s+=2,e++
	do;while(N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&N[++s]==N[++e]&&c>s)
	if(r=MAX_MATCH-(c-s),s=c-MAX_MATCH,r>o){if(Y=t,o=r,r>=u)break
	l=N[s+o-1],f=N[s+o]}}while((t=65535&D[t&a])>i&&0!==--n)
	return J>=o?o:J}function b(t){for(var e,r=0;;){if(MIN_LOOKAHEAD>J){if(g(),MIN_LOOKAHEAD>J&&t==Z_NO_FLUSH)return NeedMore
	if(0===J)break}if(J>=MIN_MATCH&&(B=(B<<j^255&N[G+(MIN_MATCH-1)])&Z,r=65535&L[B],D[G&z]=L[B],L[B]=G),0!==r&&C-MIN_LOOKAHEAD>=(G-r&65535)&&et!=Z_HUFFMAN_ONLY&&(K=k(r)),K>=MIN_MATCH)if(e=m(G-Y,K-MIN_MATCH),J-=K,$>=K&&J>=MIN_MATCH){K--
	do G++,B=(B<<j^255&N[G+(MIN_MATCH-1)])&Z,r=65535&L[B],D[G&z]=L[B],L[B]=G
	while(0!==--K)
	G++}else G+=K,K=0,B=255&N[G],B=(B<<j^255&N[G+1])&Z
	else e=m(0,255&N[G]),J--,G++
	if(e&&(q(!1),0===A.avail_out))return NeedMore}return q(t==Z_FINISH),0===A.avail_out?t==Z_FINISH?FinishStarted:NeedMore:t==Z_FINISH?FinishDone:BlockDone}function S(t){for(var e,r,n=0;;){if(MIN_LOOKAHEAD>J){if(g(),MIN_LOOKAHEAD>J&&t==Z_NO_FLUSH)return NeedMore
	if(0===J)break}if(J>=MIN_MATCH&&(B=(B<<j^255&N[G+(MIN_MATCH-1)])&Z,n=65535&L[B],D[G&z]=L[B],L[B]=G),V=K,W=Y,K=MIN_MATCH-1,0!==n&&$>V&&C-MIN_LOOKAHEAD>=(G-n&65535)&&(et!=Z_HUFFMAN_ONLY&&(K=k(n)),5>=K&&(et==Z_FILTERED||K==MIN_MATCH&&G-Y>4096)&&(K=MIN_MATCH-1)),V>=MIN_MATCH&&V>=K){r=G+J-MIN_MATCH,e=m(G-1-W,V-MIN_MATCH),J-=V-1,V-=2
	do++G<=r&&(B=(B<<j^255&N[G+(MIN_MATCH-1)])&Z,n=65535&L[B],D[G&z]=L[B],L[B]=G)
	while(0!==--V)
	if(X=0,K=MIN_MATCH-1,G++,e&&(q(!1),0===A.avail_out))return NeedMore}else if(0!==X){if(e=m(0,255&N[G-1]),e&&q(!1),G++,J--,0===A.avail_out)return NeedMore}else X=1,G++,J--}return 0!==X&&(e=m(0,255&N[G-1]),X=0),q(t==Z_FINISH),0===A.avail_out?t==Z_FINISH?FinishStarted:NeedMore:t==Z_FINISH?FinishDone:BlockDone}function T(e){return e.total_in=e.total_out=0,e.msg=null,ut.pending=0,ut.pending_out=0,E=BUSY_STATE,O=Z_NO_FLUSH,r(),t(),Z_OK}var A,E,R,I,O,C,F,z,N,M,D,L,B,H,U,Z,j,P,K,W,X,G,Y,J,V,Q,$,tt,et,rt,nt,st,ot,it,ut=this,at=new Tree,ct=new Tree,lt=new Tree
	ut.depth=[]
	var ft,wt,dt,mt,pt,ht,yt,vt
	ut.bl_count=[],ut.heap=[],st=[],ot=[],it=[],ut.pqdownheap=function(t,e){for(var r=ut.heap,n=r[e],s=e<<1;s<=ut.heap_len&&(s<ut.heap_len&&smaller(t,r[s+1],r[s],ut.depth)&&s++,!smaller(t,n,r[s],ut.depth));)r[e]=r[s],e=s,s<<=1
	r[e]=n},ut.deflateInit=function(t,e,r,n,s,o){return n||(n=Z_DEFLATED),s||(s=DEF_MEM_LEVEL),o||(o=Z_DEFAULT_STRATEGY),t.msg=null,e==Z_DEFAULT_COMPRESSION&&(e=6),1>s||s>MAX_MEM_LEVEL||n!=Z_DEFLATED||9>r||r>15||0>e||e>9||0>o||o>Z_HUFFMAN_ONLY?Z_STREAM_ERROR:(t.dstate=ut,F=r,C=1<<F,z=C-1,U=s+7,H=1<<U,Z=H-1,j=Math.floor((U+MIN_MATCH-1)/MIN_MATCH),N=new Uint8Array(2*C),D=[],L=[],wt=1<<s+6,ut.pending_buf=new Uint8Array(4*wt),R=4*wt,mt=Math.floor(wt/2),ft=3*wt,tt=e,et=o,I=255&n,T(t))},ut.deflateEnd=function(){return E!=INIT_STATE&&E!=BUSY_STATE&&E!=FINISH_STATE?Z_STREAM_ERROR:(ut.pending_buf=null,L=null,D=null,N=null,ut.dstate=null,E==BUSY_STATE?Z_DATA_ERROR:Z_OK)},ut.deflateParams=function(t,e,r){var n=Z_OK
	return e==Z_DEFAULT_COMPRESSION&&(e=6),0>e||e>9||0>r||r>Z_HUFFMAN_ONLY?Z_STREAM_ERROR:(config_table[tt].func!=config_table[e].func&&0!==t.total_in&&(n=t.deflate(Z_PARTIAL_FLUSH)),tt!=e&&(tt=e,$=config_table[tt].max_lazy,rt=config_table[tt].good_length,nt=config_table[tt].nice_length,Q=config_table[tt].max_chain),et=r,n)},ut.deflateSetDictionary=function(t,e,r){var n,s=r,o=0
	if(!e||E!=INIT_STATE)return Z_STREAM_ERROR
	if(MIN_MATCH>s)return Z_OK
	for(s>C-MIN_LOOKAHEAD&&(s=C-MIN_LOOKAHEAD,o=r-s),N.set(e.subarray(o,o+s),0),G=s,P=s,B=255&N[0],B=(B<<j^255&N[1])&Z,n=0;s-MIN_MATCH>=n;n++)B=(B<<j^255&N[n+(MIN_MATCH-1)])&Z,D[n&z]=L[B],L[B]=n
	return Z_OK},ut.deflate=function(t,e){var r,n,s,o,i
	if(e>Z_FINISH||0>e)return Z_STREAM_ERROR
	if(!t.next_out||!t.next_in&&0!==t.avail_in||E==FINISH_STATE&&e!=Z_FINISH)return t.msg=z_errmsg[Z_NEED_DICT-Z_STREAM_ERROR],Z_STREAM_ERROR
	if(0===t.avail_out)return t.msg=z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR
	if(A=t,o=O,O=e,E==INIT_STATE&&(n=Z_DEFLATED+(F-8<<4)<<8,s=(tt-1&255)>>1,s>3&&(s=3),n|=s<<6,0!==G&&(n|=PRESET_DICT),n+=31-n%31,E=BUSY_STATE,u(n)),0!==ut.pending){if(A.flush_pending(),0===A.avail_out)return O=-1,Z_OK}else if(0===A.avail_in&&o>=e&&e!=Z_FINISH)return A.msg=z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR
	if(E==FINISH_STATE&&0!==A.avail_in)return t.msg=z_errmsg[Z_NEED_DICT-Z_BUF_ERROR],Z_BUF_ERROR
	if(0!==A.avail_in||0!==J||e!=Z_NO_FLUSH&&E!=FINISH_STATE){switch(i=-1,config_table[tt].func){case STORED:i=x(e)
	break
	case FAST:i=b(e)
	break
	case SLOW:i=S(e)}if((i==FinishStarted||i==FinishDone)&&(E=FINISH_STATE),i==NeedMore||i==FinishStarted)return 0===A.avail_out&&(O=-1),Z_OK
	if(i==BlockDone){if(e==Z_PARTIAL_FLUSH)d()
	else if(v(0,0,!1),e==Z_FULL_FLUSH)for(r=0;H>r;r++)L[r]=0
	if(A.flush_pending(),0===A.avail_out)return O=-1,Z_OK}}return e!=Z_FINISH?Z_OK:Z_STREAM_END}}function ZStream(){var t=this
	t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}function Deflater(t){var e=this,r=new ZStream,n=512,s=Z_NO_FLUSH,o=new Uint8Array(n)
	"undefined"==typeof t&&(t=Z_DEFAULT_COMPRESSION),r.deflateInit(t),r.next_out=o,e.append=function(t,e){var i,u,a=[],c=0,l=0,f=0
	if(t.length){r.next_in_index=0,r.next_in=t,r.avail_in=t.length
	do{if(r.next_out_index=0,r.avail_out=n,i=r.deflate(s),i!=Z_OK)throw"deflating: "+r.msg
	r.next_out_index&&(r.next_out_index==n?a.push(new Uint8Array(o)):a.push(new Uint8Array(o.subarray(0,r.next_out_index)))),f+=r.next_out_index,e&&r.next_in_index>0&&r.next_in_index!=c&&(e(r.next_in_index),c=r.next_in_index)}while(r.avail_in>0||0===r.avail_out)
	return u=new Uint8Array(f),a.forEach(function(t){u.set(t,l),l+=t.length}),u}},e.flush=function(){var t,e,s=[],i=0,u=0
	do{if(r.next_out_index=0,r.avail_out=n,t=r.deflate(Z_FINISH),t!=Z_STREAM_END&&t!=Z_OK)throw"deflating: "+r.msg
	n-r.avail_out>0&&s.push(new Uint8Array(o.subarray(0,r.next_out_index))),u+=r.next_out_index}while(r.avail_in>0||0===r.avail_out)
	return r.deflateEnd(),e=new Uint8Array(u),s.forEach(function(t){e.set(t,i),i+=t.length}),e}}var jsPDF=function(){"use strict"
	function t(n,s,o,i){n="undefined"==typeof n?"p":n.toString().toLowerCase(),"undefined"==typeof s&&(s="mm"),"undefined"==typeof o&&(o="a4"),"undefined"==typeof i&&"undefined"==typeof zpipe&&(i=!1)
	var u,a,c,l,f,w,d,m,p,h=o.toString().toLowerCase(),y="20120619",v=[],_=0,q=i,g="1.3",x={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]},k="0 g",b="0 G",S=0,T=[],A=2,E=!1,R=[],I={},O={},C=16,F=.200025,z={title:"",subject:"",author:"",keywords:"",creator:""},N=0,M=0,D={},L=new r(D),B=function(t){return t.toFixed(2)},H=function(t){return t.toFixed(3)},U=function(t){var e=t.toFixed(0)
	return 10>t?"0"+e:e},Z=function(t){var e=t.toFixed(0)
	return e.length<10?new Array(11-e.length).join("0")+e:e},j=function(t){E?T[S].push(t):(v.push(t),_+=t.length+1)},P=function(){return A++,R[A]=_,j(A+" 0 obj"),A},K=function(t){j("stream"),j(t),j("endstream")},W=function(){d=c*l,m=a*l
	var t,e,r,n,s,o
	for(t=1;S>=t;t++){if(P(),j("<</Type /Page"),j("/Parent 1 0 R"),j("/Resources 2 0 R"),j("/Contents "+(A+1)+" 0 R>>"),j("endobj"),e=T[t].join("\n"),P(),q){for(r=[],n=0;n<e.length;++n)r[n]=e.charCodeAt(n)
	o=adler32cs.from(e),s=new Deflater(6),s.append(new Uint8Array(r)),e=s.flush(),r=[new Uint8Array([120,156]),new Uint8Array(e),new Uint8Array([255&o,o>>8&255,o>>16&255,o>>24&255])],e=""
	for(n in r)r.hasOwnProperty(n)&&(e+=String.fromCharCode.apply(null,r[n]))
	j("<</Length "+e.length+" /Filter [/FlateDecode]>>")}else j("<</Length "+e.length+">>")
	K(e),j("endobj")}for(R[1]=_,j("1 0 obj"),j("<</Type /Pages"),p="/Kids [",n=0;S>n;n++)p+=3+2*n+" 0 R "
	j(p+"]"),j("/Count "+S),j("/MediaBox [0 0 "+B(d)+" "+B(m)+"]"),j(">>"),j("endobj")},X=function(t){t.objectNumber=P(),j("<</BaseFont/"+t.PostScriptName+"/Type/Font"),"string"==typeof t.encoding&&j("/Encoding/"+t.encoding),j("/Subtype/Type1>>"),j("endobj")},G=function(){var t
	for(t in I)I.hasOwnProperty(t)&&X(I[t])},Y=function(){L.publish("putXobjectDict")},J=function(){j("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),j("/Font <<")
	var t
	for(t in I)I.hasOwnProperty(t)&&j("/"+t+" "+I[t].objectNumber+" 0 R")
	j(">>"),j("/XObject <<"),Y(),j(">>")},V=function(){G(),L.publish("putResources"),R[2]=_,j("2 0 obj"),j("<<"),J(),j(">>"),j("endobj"),L.publish("postPutResources")},Q=function(t,e,r){var n
	O[e]===n&&(O[e]={}),O[e][r]=t},$=function(t,r,n,s){var o="F"+(e(I)+1).toString(10),i=I[o]={id:o,PostScriptName:t,fontName:r,fontStyle:n,encoding:s,metadata:{}}
	return Q(o,r,n),L.publish("addFont",i),o},tt=function(){var t,e,r,n,s="helvetica",o="times",i="courier",u="normal",a="bold",c="italic",l="bolditalic",f="StandardEncoding",w=[["Helvetica",s,u],["Helvetica-Bold",s,a],["Helvetica-Oblique",s,c],["Helvetica-BoldOblique",s,l],["Courier",i,u],["Courier-Bold",i,a],["Courier-Oblique",i,c],["Courier-BoldOblique",i,l],["Times-Roman",o,u],["Times-Bold",o,a],["Times-Italic",o,c],["Times-BoldItalic",o,l]]
	for(t=0,e=w.length;e>t;t++)r=$(w[t][0],w[t][1],w[t][2],f),n=w[t][0].split("-"),Q(r,n[0],n[1]||"")
	L.publish("addFonts",{fonts:I,dictionary:O})},et=function(t,e){var r,n,s,o,i,a,c,l,f,w
	if(e===s&&(e={}),o=e.sourceEncoding?o:"Unicode",a=e.outputEncoding,(e.autoencode||a)&&I[u].metadata&&I[u].metadata[o]&&I[u].metadata[o].encoding&&(i=I[u].metadata[o].encoding,!a&&I[u].encoding&&(a=I[u].encoding),!a&&i.codePages&&(a=i.codePages[0]),"string"==typeof a&&(a=i[a]),a)){for(l=!1,c=[],r=0,n=t.length;n>r;r++)f=a[t.charCodeAt(r)],f?c.push(String.fromCharCode(f)):c.push(t[r]),c[r].charCodeAt(0)>>8&&(l=!0)
	t=c.join("")}for(r=t.length;l===s&&0!==r;)t.charCodeAt(r-1)>>8&&(l=!0),r--
	if(l){for(c=e.noBOM?[]:[254,255],r=0,n=t.length;n>r;r++){if(f=t.charCodeAt(r),w=f>>8,w>>8)throw new Error("Character at position "+r.toString(10)+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE")
	c.push(w),c.push(f-(w<<8))}return String.fromCharCode.apply(s,c)}return t},rt=function(t,e){return et(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},nt=function(){j("/Producer (jsPDF "+y+")"),z.title&&j("/Title ("+rt(z.title)+")"),z.subject&&j("/Subject ("+rt(z.subject)+")"),z.author&&j("/Author ("+rt(z.author)+")"),z.keywords&&j("/Keywords ("+rt(z.keywords)+")"),z.creator&&j("/Creator ("+rt(z.creator)+")")
	var t=new Date
	j("/CreationDate (D:"+[t.getFullYear(),U(t.getMonth()+1),U(t.getDate()),U(t.getHours()),U(t.getMinutes()),U(t.getSeconds())].join("")+")")},st=function(){j("/Type /Catalog"),j("/Pages 1 0 R"),j("/OpenAction [3 0 R /FitH null]"),j("/PageLayout /OneColumn"),L.publish("putCatalog")},ot=function(){j("/Size "+(A+1)),j("/Root "+A+" 0 R"),j("/Info "+(A-1)+" 0 R")},it=function(){S++,E=!0,T[S]=[]},ut=function(){it(),j(B(F*l)+" w"),j(b),0!==N&&j(N.toString(10)+" J"),0!==M&&j(M.toString(10)+" j"),L.publish("addPage",{pageNumber:S})},at=function(t,e){var r,n
	t===n&&(t=I[u].fontName),e===n&&(e=I[u].fontStyle)
	try{r=O[t][e]}catch(s){r=n}if(!r)throw new Error("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts.")
	return r},ct=function(){E=!1,v=[],R=[],j("%PDF-"+g),W(),V(),P(),j("<<"),nt(),j(">>"),j("endobj"),P(),j("<<"),st(),j(">>"),j("endobj")
	var t,e=_
	for(j("xref"),j("0 "+(A+1)),j("0000000000 65535 f "),t=1;A>=t;t++)j(Z(R[t])+" 00000 n ")
	return j("trailer"),j("<<"),ot(),j(">>"),j("startxref"),j(e),j("%%EOF"),E=!0,v.join("\n")},lt=function(t){var e="S"
	return"F"===t?e="f":("FD"===t||"DF"===t)&&(e="B"),e},ft=function(t,e){var r,n,s,o,i,u
	switch(t){case r:return ct()
	case"save":if(navigator.getUserMedia){if(void 0===window.URL)return D.output("dataurlnewwindow")
	if(void 0===window.URL.createObjectURL)return D.output("dataurlnewwindow")}for(n=ct(),s=n.length,o=new Uint8Array(new ArrayBuffer(s)),i=0;s>i;i++)o[i]=n.charCodeAt(i)
	u=new Blob([o],{type:"application/pdf"}),saveAs(u,e)
	break
	case"datauristring":case"dataurlstring":return"data:application/pdf;base64,"+btoa(ct())
	case"datauri":case"dataurl":document.location.href="data:application/pdf;base64,"+btoa(ct())
	break
	case"dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(ct()))
	break
	default:throw new Error('Output type "'+t+'" is not supported.')}}
	if("pt"===s)l=1
	else if("mm"===s)l=72/25.4
	else if("cm"===s)l=72/2.54
	else{if("in"!==s)throw"Invalid unit: "+s
	l=72}if(x.hasOwnProperty(h))a=x[h][1]/l,c=x[h][0]/l
	else try{a=o[1],c=o[0]}catch(wt){throw"Invalid format: "+o}if("p"===n||"portrait"===n)n="p",c>a&&(f=c,c=a,a=f)
	else{if("l"!==n&&"landscape"!==n)throw"Invalid orientation: "+n
	n="l",a>c&&(f=c,c=a,a=f)}D.internal={pdfEscape:rt,getStyle:lt,getFont:function(){return I[at.apply(D,arguments)]},getFontSize:function(){return C},btoa:btoa,write:function(t,e,r,n){j(1===arguments.length?t:Array.prototype.join.call(arguments," "))},getCoordinateString:function(t){return B(t*l)},getVerticalCoordinateString:function(t){return B((a-t)*l)},collections:{},newObject:P,putStream:K,events:L,scaleFactor:l,pageSize:{width:c,height:a},output:function(t,e){return ft(t,e)}},D.addPage=function(){return ut(),this},D.text=function(t,e,r,n){var s,o,i,c,f,w,d
	if("number"==typeof t&&(o=r,i=t,c=e,t=o,e=i,r=c),"string"==typeof t&&t.match(/[\n\r]/)&&(t=t.split(/\r\n|\r|\n/g)),"undefined"==typeof n?n={noBOM:!0,autoencode:!0}:(n.noBOM===s&&(n.noBOM=!0),n.autoencode===s&&(n.autoencode=!0)),"string"==typeof t)w=rt(t,n)
	else{if(!(t instanceof Array))throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.')
	for(f=t.concat(),d=f.length-1;-1!==d;d--)f[d]=rt(f[d],n)
	w=f.join(") Tj\nT* (")}return j("BT\n/"+u+" "+C+" Tf\n"+C+" TL\n"+k+"\n"+B(e*l)+" "+B((a-r)*l)+" Td\n("+w+") Tj\nET"),this},D.line=function(t,e,r,n){return j(B(t*l)+" "+B((a-e)*l)+" m "+B(r*l)+" "+B((a-n)*l)+" l S"),this},D.lines=function(t,e,r,n,s){var o,i,u,c,f,w,d,m,p,h,y,v,_,q,g
	for("number"==typeof t&&(i=r,u=t,c=e,t=i,e=u,r=c),s=lt(s),n=n===o?[1,1]:n,j(H(e*l)+" "+H((a-r)*l)+" m "),f=n[0],w=n[1],m=t.length,q=e,g=r,d=0;m>d;d++)p=t[d],2===p.length?(q=p[0]*f+q,g=p[1]*w+g,j(H(q*l)+" "+H((a-g)*l)+" l")):(h=p[0]*f+q,y=p[1]*w+g,v=p[2]*f+q,_=p[3]*w+g,q=p[4]*f+q,g=p[5]*w+g,j(H(h*l)+" "+H((a-y)*l)+" "+H(v*l)+" "+H((a-_)*l)+" "+H(q*l)+" "+H((a-g)*l)+" c"))
	return j(s),this},D.rect=function(t,e,r,n,s){var o=lt(s)
	return j([B(t*l),B((a-e)*l),B(r*l),B(-n*l),"re",o].join(" ")),this},D.triangle=function(t,e,r,n,s,o,i){return this.lines([[r-t,n-e],[s-r,o-n],[t-s,e-o]],t,e,[1,1],i),this},D.roundedRect=function(t,e,r,n,s,o,i){var u=4/3*(Math.SQRT2-1)
	return this.lines([[r-2*s,0],[s*u,0,s,o-o*u,s,o],[0,n-2*o],[0,o*u,-(s*u),o,-s,o],[-r+2*s,0],[-(s*u),0,-s,-(o*u),-s,-o],[0,-n+2*o],[0,-(o*u),s*u,-o,s,-o]],t+s,e,[1,1],i),this},D.ellipse=function(t,e,r,n,s){var o=lt(s),i=4/3*(Math.SQRT2-1)*r,u=4/3*(Math.SQRT2-1)*n
	return j([B((t+r)*l),B((a-e)*l),"m",B((t+r)*l),B((a-(e-u))*l),B((t+i)*l),B((a-(e-n))*l),B(t*l),B((a-(e-n))*l),"c"].join(" ")),j([B((t-i)*l),B((a-(e-n))*l),B((t-r)*l),B((a-(e-u))*l),B((t-r)*l),B((a-e)*l),"c"].join(" ")),j([B((t-r)*l),B((a-(e+u))*l),B((t-i)*l),B((a-(e+n))*l),B(t*l),B((a-(e+n))*l),"c"].join(" ")),j([B((t+i)*l),B((a-(e+n))*l),B((t+r)*l),B((a-(e+u))*l),B((t+r)*l),B((a-e)*l),"c",o].join(" ")),this},D.circle=function(t,e,r,n){return this.ellipse(t,e,r,r,n)},D.setProperties=function(t){var e
	for(e in z)z.hasOwnProperty(e)&&t[e]&&(z[e]=t[e])
	return this},D.setFontSize=function(t){return C=t,this},D.setFont=function(t,e){return u=at(t,e),this},D.setFontStyle=D.setFontType=function(t){var e
	return u=at(e,t),this},D.getFontList=function(){var t,e,r,n={}
	for(t in O)if(O.hasOwnProperty(t)){n[t]=r=[]
	for(e in O[t])O[t].hasOwnProperty(e)&&r.push(e)}return n},D.setLineWidth=function(t){return j((t*l).toFixed(2)+" w"),this},D.setDrawColor=function(t,e,r,n){var s
	return s=void 0===e||void 0===n&&t===e===r?"string"==typeof t?t+" G":B(t/255)+" G":void 0===n?"string"==typeof t?[t,e,r,"RG"].join(" "):[B(t/255),B(e/255),B(r/255),"RG"].join(" "):"string"==typeof t?[t,e,r,n,"K"].join(" "):[B(t),B(e),B(r),B(n),"K"].join(" "),j(s),this},D.setFillColor=function(t,e,r,n){var s
	return s=void 0===e||void 0===n&&t===e===r?"string"==typeof t?t+" g":B(t/255)+" g":void 0===n?"string"==typeof t?[t,e,r,"rg"].join(" "):[B(t/255),B(e/255),B(r/255),"rg"].join(" "):"string"==typeof t?[t,e,r,n,"k"].join(" "):[B(t),B(e),B(r),B(n),"k"].join(" "),j(s),this},D.setTextColor=function(t,e,r){return k=0===t&&0===e&&0===r||"undefined"==typeof e?H(t/255)+" g":[H(t/255),H(e/255),H(r/255),"rg"].join(" "),this},D.CapJoinStyles={0:0,butt:0,but:0,bevel:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,milter:2},D.setLineCap=function(t){var e=this.CapJoinStyles[t]
	if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles")
	return N=e,j(e.toString(10)+" J"),this},D.setLineJoin=function(t){var e=this.CapJoinStyles[t]
	if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles")
	return M=e,j(e.toString(10)+" j"),this},D.output=ft,D.save=function(t){D.output("save",t)}
	for(w in t.API)t.API.hasOwnProperty(w)&&("events"===w&&t.API.events.length?!function(t,e){var r,n,s
	for(s=e.length-1;-1!==s;s--)r=e[s][0],n=e[s][1],t.subscribe.apply(t,[r].concat("function"==typeof n?[n]:n))}(L,t.API.events):D[w]=t.API[w])
	return tt(),u="F1",ut(),L.publish("initialized"),D}"undefined"==typeof btoa&&(window.btoa=function(t){var e,r,n,s,o,i,u,a,c,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=l.split(""),w=0,d=0,m="",p=[]
	do e=t.charCodeAt(w++),r=t.charCodeAt(w++),n=t.charCodeAt(w++),a=e<<16|r<<8|n,s=a>>18&63,o=a>>12&63,i=a>>6&63,u=63&a,p[d++]=f[s]+f[o]+f[i]+f[u]
	while(w<t.length)
	return m=p.join(""),c=t.length%3,(c?m.slice(0,c-3):m)+"===".slice(c||3)}),"undefined"==typeof atob&&(window.atob=function(t){var e,r,n,s,o,i,u,a,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,f=0,w="",d=[]
	if(!t)return t
	t+=""
	do s=c.indexOf(t.charAt(l++)),o=c.indexOf(t.charAt(l++)),i=c.indexOf(t.charAt(l++)),u=c.indexOf(t.charAt(l++)),a=s<<18|o<<12|i<<6|u,e=a>>16&255,r=a>>8&255,n=255&a,64===i?d[f++]=String.fromCharCode(e):64===u?d[f++]=String.fromCharCode(e,r):d[f++]=String.fromCharCode(e,r,n)
	while(l<t.length)
	return w=d.join("")})
	var e="function"==typeof Object.keys?function(t){return Object.keys(t).length}:function(t){var e,r=0
	for(e in t)t.hasOwnProperty(e)&&r++
	return r},r=function(t){this.topics={},this.context=t,this.publish=function(t,e){if(this.topics[t]){var r,n,s,o,i=this.topics[t],u=[],a=function(){}
	for(e=Array.prototype.slice.call(arguments,1),n=0,s=i.length;s>n;n++)o=i[n],r=o[0],o[1]&&(o[0]=a,u.push(n)),r.apply(this.context,e)
	for(n=0,s=u.length;s>n;n++)i.splice(u[n],1)}},this.subscribe=function(t,e,r){return this.topics[t]?this.topics[t].push([e,r]):this.topics[t]=[[e,r]],{topic:t,callback:e}},this.unsubscribe=function(t){if(this.topics[t.topic]){var e,r,n=this.topics[t.topic]
	for(e=0,r=n.length;r>e;e++)n[e][0]===t.callback&&n.splice(e,1)}}}
	return t.API={events:[]},t}()
	!function(t){"use strict"
	var e="addImage_",r=function(t){var e,r
	if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary jpeg file")
	for(var n=256*t.charCodeAt(4)+t.charCodeAt(5),s=4,o=t.length;o>s;){if(s+=n,255!==t.charCodeAt(s))throw new Error("getJpegSize could not find the size of the image")
	if(192===t.charCodeAt(s+1))return r=256*t.charCodeAt(s+5)+t.charCodeAt(s+6),e=256*t.charCodeAt(s+7)+t.charCodeAt(s+8),[e,r]
	s+=2,n=256*t.charCodeAt(s)+t.charCodeAt(s+1)}},n=function(t){var e=this.internal.newObject(),r=this.internal.write,n=this.internal.putStream
	if(t.n=e,r("<</Type /XObject"),r("/Subtype /Image"),r("/Width "+t.w),r("/Height "+t.h),"Indexed"===t.cs?r("/ColorSpace [/Indexed /DeviceRGB "+(t.pal.length/3-1)+" "+(e+1)+" 0 R]"):(r("/ColorSpace /"+t.cs),"DeviceCMYK"===t.cs&&r("/Decode [1 0 1 0 1 0 1 0]")),r("/BitsPerComponent "+t.bpc),"f"in t&&r("/Filter /"+t.f),"dp"in t&&r("/DecodeParms <<"+t.dp+">>"),"trns"in t&&t.trns.constructor==Array)for(var s="",o=0;o<t.trns.length;o++)s+=t[s][o]+" "+t.trns[o]+" ",r("/Mask ["+s+"]")
	"smask"in t&&r("/SMask "+(e+1)+" 0 R"),r("/Length "+t.data.length+">>"),n(t.data),r("endobj")},s=function(){var t=this.internal.collections[e+"images"]
	for(var r in t)n.call(this,t[r])},o=function(){var t,r=this.internal.collections[e+"images"],n=this.internal.write
	for(var s in r)t=r[s],n("/I"+t.i,t.n,"0","R")}
	t.addImage=function(t,n,i,u,a,c){if("object"==typeof t&&1===t.nodeType){var l=document.createElement("canvas")
	l.width=t.clientWidth,l.height=t.clientHeight
	var f=l.getContext("2d")
	if(!f)throw"addImage requires canvas to be supported by browser."
	f.drawImage(t,0,0,l.width,l.height),t=l.toDataURL("image/jpeg"),n="JPEG"}if("JPEG"!==n.toUpperCase())throw new Error("addImage currently only supports format 'JPEG', not '"+n+"'")
	var w,d=this.internal.collections[e+"images"],m=this.internal.getCoordinateString,p=this.internal.getVerticalCoordinateString
	"data:image/jpeg;base64,"===t.substring(0,23)&&(t=atob(t.replace("data:image/jpeg;base64,",""))),d?w=Object.keys?Object.keys(d).length:function(t){var e=0
	for(var r in t)t.hasOwnProperty(r)&&e++
	return e}(d):(w=0,this.internal.collections[e+"images"]=d={},this.internal.events.subscribe("putResources",s),this.internal.events.subscribe("putXobjectDict",o))
	var h=r(t),y={w:h[0],h:h[1],cs:"DeviceRGB",bpc:8,f:"DCTDecode",i:w,data:t}
	return d[w]=y,a||c||(a=-96,c=-96),0>a&&(a=-1*y.w*72/a/this.internal.scaleFactor),0>c&&(c=-1*y.h*72/c/this.internal.scaleFactor),0===a&&(a=c*y.w/y.h),0===c&&(c=a*y.h/y.w),this.internal.write("q",m(a),"0 0",m(c),m(i),p(u+c),"cm /I"+y.i,"Do Q"),this}}(jsPDF.API),function(t){"use strict"
	function e(t){for(var e,r=0,n=t.length,s=!1,o=!1;!s&&r!==n;)e=t[r]=t[r].trimLeft(),e&&(s=!0),r++
	for(r=n-1;n&&!o&&-1!==r;)e=t[r]=t[r].trimRight(),e&&(o=!0),r--
	var i=/\s+$/g,u=!0
	for(r=0;r!==n;r++)e=t[r].replace(/\s+/g," "),u&&(e=e.trimLeft()),e&&(u=i.test(e)),t[r]=e
	return t}function r(t,e,r,n){return this.pdf=t,this.x=e,this.y=r,this.settings=n,this.init(),this}function n(t){for(var e,r=t.split(","),n=r.shift();!e&&n;)e=c[n.trim().toLowerCase()],n=r.shift()
	return e}function s(t){var e,r=16,n=w[t]
	return n?n:(n={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[t],n!==e?w[t]=n/r:(n=parseFloat(t))?w[t]=n/r:(n=t.match(/([\d\.]+)(px)/),3===n.length?w[t]=parseFloat(n[1])/r:w[t]=1))}function o(t){var e,r=$(t),o={}
	return o["font-family"]=n(r.css("font-family"))||"times",o["font-style"]=f[r.css("font-style")]||"normal",e=l[r.css("font-weight")]||"normal","bold"===e&&("normal"===o["font-style"]?o["font-style"]=e:o["font-style"]=e+o["font-style"]),o["font-size"]=s(r.css("font-size"))||1,o["line-height"]=s(r.css("line-height"))||1,o.display="inline"===r.css("display")?"inline":"block","block"===o.display&&(o["margin-top"]=s(r.css("margin-top"))||0,o["margin-bottom"]=s(r.css("margin-bottom"))||0,o["padding-top"]=s(r.css("padding-top"))||0,o["padding-bottom"]=s(r.css("padding-bottom"))||0),o}function i(t,e,r){var n,s,o=!1,i=r["#"+t.id]
	if(i)if("function"==typeof i)o=i(t,e)
	else for(n=0,s=i.length;!o&&n!==s;)o=i[n](t,e),n++
	if(i=r[t.nodeName],!o&&i)if("function"==typeof i)o=i(t,e)
	else for(n=0,s=i.length;!o&&n!==s;)o=i[n](t,e),n++
	return o}function u(t,e,r){var n,s=t.childNodes,a=o(t),c="block"===a.display
	c&&(e.setBlockBoundary(),e.setBlockStyle(a))
	for(var l=0,f=s.length;f>l;l++)n=s[l],"object"==typeof n?1===n.nodeType&&"SCRIPT"!=n.nodeName?i(n,e,r)||u(n,e,r):3===n.nodeType&&e.addText(n.nodeValue,a):"string"==typeof n&&e.addText(n,a)
	c&&e.setBlockBoundary()}function a(t,e,n,s,o){"string"==typeof e&&(e=function(t){var e="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),r="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",n=($('<div style="'+r+'"><iframe style="height:1px;width:1px" name="'+e+'" /></div>').appendTo(document.body),window.frames[e])
	return $(n.document.body).html(t)[0]}(e))
	var i=new r(t,n,s,o)
	u(e,i,o.elementHandlers)
	return i.dispose()}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")}),r.prototype.init=function(){this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},r.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y}},r.prototype.splitFragmentsIntoLines=function(t,e){for(var r,n,s,o,i,u,a,c,l=12,f=this.pdf.internal.scaleFactor,w={},d=[],m=[d],p=0,h=this.settings.width;t.length;)if(o=t.shift(),i=e.shift(),o)if(r=i["font-family"],n=i["font-style"],s=w[r+n],s||(s=this.pdf.internal.getFont(r,n).metadata.Unicode,w[r+n]=s),u={widths:s.widths,kerning:s.kerning,fontSize:i["font-size"]*l,textIndent:p},a=this.pdf.getStringUnitWidth(o,u)*u.fontSize/f,p+a>h){for(c=this.pdf.splitTextToSize(o,h,u),d.push([c.shift(),i]);c.length;)d=[[c.shift(),i]],m.push(d)
	p=this.pdf.getStringUnitWidth(d[0][0],u)*u.fontSize/f}else d.push([o,i]),p+=a
	return m},r.prototype.RenderTextFragment=function(t,e){var r=12,n=this.pdf.internal.getFont(e["font-family"],e["font-style"])
	this.pdf.internal.write("/"+n.id,(r*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj")},r.prototype.renderParagraph=function(){var t=e(this.paragraph.text),r=this.paragraph.style,n=this.paragraph.blockstyle,s=this.paragraph.blockstyle||{}
	if(this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:n},t.join("").trim()){var o,i,u,a,c=this.splitFragmentsIntoLines(t,r),l=12,f=l/this.pdf.internal.scaleFactor,w=(Math.max((n["margin-top"]||0)-(s["margin-bottom"]||0),0)+(n["padding-top"]||0))*f,d=((n["margin-bottom"]||0)+(n["padding-bottom"]||0))*f,m=this.pdf.internal.write
	for(this.y+=w,m("q","BT",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");c.length;){for(o=c.shift(),i=0,u=0,a=o.length;u!==a;u++)o[u][0].trim()&&(i=Math.max(i,o[u][1]["line-height"],o[u][1]["font-size"]))
	for(m(0,(-1*l*i).toFixed(2),"Td"),u=0,a=o.length;u!==a;u++)o[u][0]&&this.RenderTextFragment(o[u][0],o[u][1])
	this.y+=i*f}m("ET","Q"),this.y+=d}},r.prototype.setBlockBoundary=function(){this.renderParagraph()},r.prototype.setBlockStyle=function(t){this.paragraph.blockstyle=t},r.prototype.addText=function(t,e){this.paragraph.text.push(t),this.paragraph.style.push(e)}
	var c={helvetica:"helvetica","sans-serif":"helvetica",serif:"times",times:"times","times new roman":"times",monospace:"courier",courier:"courier"},l={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},f={normal:"normal",italic:"italic",oblique:"italic"},w={normal:1}
	t.fromHTML=function(t,e,r,n){return a(this,t,e,r,n)}}(jsPDF.API),function(t){"use strict"
	t.addSVG=function(t,e,r,n,s){function o(t,e){var r=e.createElement("style")
	r.type="text/css",r.styleSheet?r.styleSheet.cssText=t:r.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(r)}function i(t){var e="childframe",r=t.createElement("iframe")
	return o(".jsPDF_sillysvg_iframe {display:none;position:absolute;}",t),r.name=e,r.setAttribute("width",0),r.setAttribute("height",0),r.setAttribute("frameborder","0"),r.setAttribute("scrolling","no"),r.setAttribute("seamless","seamless"),r.setAttribute("class","jsPDF_sillysvg_iframe"),t.body.appendChild(r),r}function u(t,e){var r=(e.contentWindow||e.contentDocument).document
	return r.write(t),r.close(),r.getElementsByTagName("svg")[0]}function a(t){for(var e=parseFloat(t[1]),r=parseFloat(t[2]),n=[],s=3,o=t.length;o>s;)"c"===t[s]?(n.push([parseFloat(t[s+1]),parseFloat(t[s+2]),parseFloat(t[s+3]),parseFloat(t[s+4]),parseFloat(t[s+5]),parseFloat(t[s+6])]),s+=7):"l"===t[s]?(n.push([parseFloat(t[s+1]),parseFloat(t[s+2])]),s+=3):s+=1
	return[e,r,n]}var c
	if(e===c||e===c)throw new Error("addSVG needs values for 'x' and 'y'")
	var l=i(document),f=u(t,l),w=[1,1],d=parseFloat(f.getAttribute("width")),m=parseFloat(f.getAttribute("height"))
	d&&m&&(n&&s?w=[n/d,s/m]:n?w=[n/d,n/d]:s&&(w=[s/m,s/m]))
	var p,h,y,v,_=f.childNodes
	for(p=0,h=_.length;h>p;p++)y=_[p],y.tagName&&"PATH"===y.tagName.toUpperCase()&&(v=a(y.getAttribute("d").split(" ")),v[0]=v[0]*w[0]+e,v[1]=v[1]*w[1]+r,this.lines.call(this,v[2],v[0],v[1],w))
	return this}}(jsPDF.API),function(t){"use strict"
	var e=t.getCharWidthsArray=function(t,e){e||(e={})
	var r,n,s,o=e.widths?e.widths:this.internal.getFont().metadata.Unicode.widths,i=o.fof?o.fof:1,u=e.kerning?e.kerning:this.internal.getFont().metadata.Unicode.kerning,a=u.fof?u.fof:1,c=0,l=o[0]||i,f=[]
	for(r=0,n=t.length;n>r;r++)s=t.charCodeAt(r),f.push((o[s]||l)/i+(u[s]&&u[s][c]||0)/a),c=s
	return f},r=function(t){for(var e=t.length,r=0;e;)e--,r+=t[e]
	return r},n=(t.getStringUnitWidth=function(t,n){return r(e.call(this,t,n))},function(t,e,r,n){for(var s=[],o=0,i=t.length,u=0;o!==i&&u+e[o]<r;)u+=e[o],o++
	s.push(t.slice(0,o))
	var a=o
	for(u=0;o!==i;)u+e[o]>n&&(s.push(t.slice(a,o)),u=0,a=o),u+=e[o],o++
	return a!==o&&s.push(t.slice(a,o)),s}),s=function(t,s,o){o||(o={})
	var i,u,a,c,l,f=e(" ",o)[0],w=t.split(" "),d=[],m=[d],p=o.textIndent||0,h=0,y=0
	for(a=0,c=w.length;c>a;a++)if(i=w[a],u=e(i,o),y=r(u),p+h+y>s){if(y>s){for(l=n(i,u,s-(p+h),s),d.push(l.shift()),d=[l.pop()];l.length;)m.push([l.shift()])
	y=r(u.slice(i.length-d[0].length))}else d=[i]
	m.push(d),p=y,h=f}else d.push(i),p+=h+y,h=f
	var v=[]
	for(a=0,c=m.length;c>a;a++)v.push(m[a].join(" "))
	return v}
	t.splitTextToSize=function(t,e,r){r||(r={})
	var n,o=r.fontSize||this.internal.getFontSize(),i=function(t){var e={0:1},r={}
	if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning}
	var n=this.internal.getFont(t.fontName,t.fontStyle),s="Unicode"
	return n.metadata[s]?{widths:n.metadata[s].widths||e,kerning:n.metadata[s].kerning||r}:{widths:e,kerning:r}}.call(this,r)
	n=t.match(/[\n\r]/)?t.split(/\r\n|\r|\n/g):[t]
	var u=1*this.internal.scaleFactor*e/o
	i.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/o:0
	var a,c,l=[]
	for(a=0,c=n.length;c>a;a++)l=l.concat(s(n[a],u,i))
	return l}}(jsPDF.API),function(t){"use strict"
	var e=function(t){for(var e="0123456789abcdef",r="klmnopqrstuvwxyz",n={},s=0;s<r.length;s++)n[r[s]]=e[s]
	var o,i,u,a,c,l={},f=1,w=l,d=[],m="",p="",h=t.length-1
	for(s=1;s!=h;)c=t[s],s+=1,"'"==c?i?(a=i.join(""),i=o):i=[]:i?i.push(c):"{"==c?(d.push([w,a]),w={},a=o):"}"==c?(u=d.pop(),u[0][u[1]]=w,a=o,w=u[0]):"-"==c?f=-1:a===o?n.hasOwnProperty(c)?(m+=n[c],a=parseInt(m,16)*f,f=1,m=""):m+=c:n.hasOwnProperty(c)?(p+=n[c],w[a]=parseInt(p,16)*f,f=1,a=o,p=""):p+=c
	return l},r={codePages:["WinAnsiEncoding"],WinAnsiEncoding:e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},n={Unicode:{Courier:r,"Courier-Bold":r,"Courier-BoldOblique":r,"Courier-Oblique":r,Helvetica:r,"Helvetica-Bold":r,"Helvetica-BoldOblique":r,"Helvetica-Oblique":r,"Times-Roman":r,"Times-Bold":r,"Times-BoldItalic":r,"Times-Italic":r}},s={Unicode:{"Courier-Oblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Helvetica:e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),"Courier-Bold":e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}}
	t.events.push(["addFonts",function(t){var e,r,o,i,u,a="Unicode"
	for(r in t.fonts)t.fonts.hasOwnProperty(r)&&(e=t.fonts[r],o=s[a][e.PostScriptName],o&&(i=e.metadata[a]?e.metadata[a]:e.metadata[a]={},i.widths=o.widths,i.kerning=o.kerning),u=n[a][e.PostScriptName],u&&(i=e.metadata[a]?e.metadata[a]:e.metadata[a]={},i.encoding=u,u.codePages&&u.codePages.length&&(e.encoding=u.codePages[0])))}])}(jsPDF.API)
	var BlobBuilder=BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder||function(t){"use strict"
	var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},r=function(){this.data=[]},n=function(t,e,r){this.data=t,this.size=t.length,this.type=e,this.encoding=r},s=r.prototype,o=n.prototype,i=t.FileReaderSync,u=function(t){this.code=this[this.name=t]},a="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),c=a.length,l=t.URL||t.webkitURL||t,f=l.createObjectURL,w=l.revokeObjectURL,d=l,m=t.btoa,p=t.atob,h=!1,y=function(t){h=!t},v=t.ArrayBuffer,_=t.Uint8Array
	for(r.fake=o.fake=!0;c--;)u.prototype[a[c]]=c+1
	try{_&&y.apply(0,new _(1))}catch(q){}return l.createObjectURL||(d=t.URL={}),d.createObjectURL=function(t){var e,r=t.type
	return null===r&&(r="application/octet-stream"),t instanceof n?(e="data:"+r,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):m?e+";base64,"+m(t.data):e+","+encodeURIComponent(t.data)):f?f.call(l,t):void 0},d.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&w&&w.call(l,t)},s.append=function(t){var r=this.data
	if(_&&t instanceof v)if(h)r.push(String.fromCharCode.apply(String,new _(t)))
	else for(var s="",o=new _(t),a=0,c=o.length;c>a;a++)s+=String.fromCharCode(o[a])
	else if("Blob"===e(t)||"File"===e(t)){if(!i)throw new u("NOT_READABLE_ERR")
	var l=new i
	r.push(l.readAsBinaryString(t))}else t instanceof n?"base64"===t.encoding&&p?r.push(p(t.data)):"URI"===t.encoding?r.push(decodeURIComponent(t.data)):"raw"===t.encoding&&r.push(t.data):("string"!=typeof t&&(t+=""),r.push(unescape(encodeURIComponent(t))))},s.getBlob=function(t){return arguments.length||(t=null),new n(this.data.join(""),t,"raw")},s.toString=function(){return"[object BlobBuilder]"},o.slice=function(t,e,r){var s=arguments.length
	return 3>s&&(r=null),new n(this.data.slice(t,s>1?e:this.data.length),r,this.encoding)},o.toString=function(){return"[object Blob]"},r}(self),saveAs=saveAs||function(t){"use strict"
	if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,r=function(){return t.URL||t.webkitURL||t},n=e.createElementNS("http://www.w3.org/1999/xhtml","a"),s="download"in n,o=function(t){var e=new MouseEvent("click")
	t.dispatchEvent(e)},i=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),u=t.webkitRequestFileSystem,a=t.requestFileSystem||u||t.mozRequestFileSystem,c=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},l="application/octet-stream",f=0,w=500,d=function(e){var n=function(){"string"==typeof e?r().revokeObjectURL(e):e.remove()}
	t.chrome?n():setTimeout(n,w)},m=function(t,e,r){e=[].concat(e)
	for(var n=e.length;n--;){var s=t["on"+e[n]]
	if("function"==typeof s)try{s.call(t,r||t)}catch(o){c(o)}}},p=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t},h=function(e,c,w){w||(e=p(e))
	var h,y,v,_=this,q=e.type,g=!1,x=function(){m(_,"writestart progress write writeend".split(" "))},k=function(){if(y&&i&&"undefined"!=typeof FileReader){var n=new FileReader
	return n.onloadend=function(){var t=n.result
	y.location.href="data:attachment/file"+t.slice(t.search(/[,;]/)),_.readyState=_.DONE,x()},n.readAsDataURL(e),void(_.readyState=_.INIT)}if((g||!h)&&(h=r().createObjectURL(e)),y)y.location.href=h
	else{var s=t.open(h,"_blank")
	void 0==s&&i&&(t.location.href=h)}_.readyState=_.DONE,x(),d(h)},b=function(t){return function(){return _.readyState!==_.DONE?t.apply(this,arguments):void 0}},S={create:!0,exclusive:!1}
	return _.readyState=_.INIT,c||(c="download"),s?(h=r().createObjectURL(e),n.href=h,n.download=c,void setTimeout(function(){o(n),x(),d(h),_.readyState=_.DONE})):(t.chrome&&q&&q!==l&&(v=e.slice||e.webkitSlice,e=v.call(e,0,e.size,l),g=!0),u&&"download"!==c&&(c+=".download"),(q===l||u)&&(y=t),a?(f+=e.size,void a(t.TEMPORARY,f,b(function(t){t.root.getDirectory("saved",S,b(function(t){var r=function(){t.getFile(c,S,b(function(t){t.createWriter(b(function(r){r.onwriteend=function(e){y.location.href=t.toURL(),_.readyState=_.DONE,m(_,"writeend",e),d(t)},r.onerror=function(){var t=r.error
	t.code!==t.ABORT_ERR&&k()},"writestart progress write abort".split(" ").forEach(function(t){r["on"+t]=_["on"+t]}),r.write(e),_.abort=function(){r.abort(),_.readyState=_.DONE},_.readyState=_.WRITING}),k)}),k)}
	t.getFile(c,{create:!1},b(function(t){t.remove(),r()}),b(function(t){t.code===t.NOT_FOUND_ERR?r():k()}))}),k)}),k)):void k())},y=h.prototype,v=function(t,e,r){return new h(t,e,r)}
	return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,r){return r||(t=p(t)),navigator.msSaveOrOpenBlob(t,e||"download")}:(y.abort=function(){var t=this
	t.readyState=t.DONE,m(t,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,v)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content)
	"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!="function"&&null!==__webpack_require__(2)&&null!=__webpack_require__(3)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return saveAs}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	var MAX_BITS=15,D_CODES=30,BL_CODES=19,LENGTH_CODES=29,LITERALS=256,L_CODES=LITERALS+1+LENGTH_CODES,HEAP_SIZE=2*L_CODES+1,END_BLOCK=256,MAX_BL_BITS=7,REP_3_6=16,REPZ_3_10=17,REPZ_11_138=18,Buf_size=16,Z_DEFAULT_COMPRESSION=-1,Z_FILTERED=1,Z_HUFFMAN_ONLY=2,Z_DEFAULT_STRATEGY=0,Z_NO_FLUSH=0,Z_PARTIAL_FLUSH=1,Z_FULL_FLUSH=3,Z_FINISH=4,Z_OK=0,Z_STREAM_END=1,Z_NEED_DICT=2,Z_STREAM_ERROR=-2,Z_DATA_ERROR=-3,Z_BUF_ERROR=-5,_dist_code=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]
	Tree._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],Tree.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Tree.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Tree.d_code=function(t){return 256>t?_dist_code[t]:_dist_code[256+(t>>>7)]},Tree.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Tree.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Tree.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Tree.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],StaticTree.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],StaticTree.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],StaticTree.static_l_desc=new StaticTree(StaticTree.static_ltree,Tree.extra_lbits,LITERALS+1,L_CODES,MAX_BITS),StaticTree.static_d_desc=new StaticTree(StaticTree.static_dtree,Tree.extra_dbits,0,D_CODES,MAX_BITS),StaticTree.static_bl_desc=new StaticTree(null,Tree.extra_blbits,0,BL_CODES,MAX_BL_BITS)
	var MAX_MEM_LEVEL=9,DEF_MEM_LEVEL=8,STORED=0,FAST=1,SLOW=2,config_table=[new Config(0,0,0,0,STORED),new Config(4,4,8,4,FAST),new Config(4,5,16,8,FAST),new Config(4,6,32,32,FAST),new Config(4,4,16,16,SLOW),new Config(8,16,32,32,SLOW),new Config(8,16,128,128,SLOW),new Config(8,32,128,256,SLOW),new Config(32,128,258,1024,SLOW),new Config(32,258,258,4096,SLOW)],z_errmsg=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],NeedMore=0,BlockDone=1,FinishStarted=2,FinishDone=3,PRESET_DICT=32,INIT_STATE=42,BUSY_STATE=113,FINISH_STATE=666,Z_DEFLATED=8,STORED_BLOCK=0,STATIC_TREES=1,DYN_TREES=2,MIN_MATCH=3,MAX_MATCH=258,MIN_LOOKAHEAD=MAX_MATCH+MIN_MATCH+1
	ZStream.prototype={deflateInit:function(t,e){var r=this
	return r.dstate=new Deflate,e||(e=MAX_BITS),r.dstate.deflateInit(r,t,e)},deflate:function(t){var e=this
	return e.dstate?e.dstate.deflate(e,t):Z_STREAM_ERROR},deflateEnd:function(){var t=this
	if(!t.dstate)return Z_STREAM_ERROR
	var e=t.dstate.deflateEnd()
	return t.dstate=null,e},deflateParams:function(t,e){var r=this
	return r.dstate?r.dstate.deflateParams(r,t,e):Z_STREAM_ERROR},deflateSetDictionary:function(t,e){var r=this
	return r.dstate?r.dstate.deflateSetDictionary(r,t,e):Z_STREAM_ERROR},read_buf:function(t,e,r){var n=this,s=n.avail_in
	return s>r&&(s=r),0===s?0:(n.avail_in-=s,t.set(n.next_in.subarray(n.next_in_index,n.next_in_index+s),e),n.next_in_index+=s,n.total_in+=s,s)},flush_pending:function(){var t=this,e=t.dstate.pending
	e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}},void function(t,e){ true?module.exports=e():"function"==typeof define?define(e):t.adler32cs=e()}(this,function(){var t="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,e=null,r=function(){if(!t)return function(){return!1}
	try{var r=__webpack_require__(4)
	"function"==typeof r.Buffer&&(e=r.Buffer)}catch(n){}return function(t){return t instanceof ArrayBuffer||null!==e&&t instanceof e}}(),n=function(){return null!==e?function(t){return new e(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))}}(),s=65521,o=function(t,e){for(var r=65535&t,n=t>>>16,o=0,i=e.length;i>o;o++)r=(r+(255&e.charCodeAt(o)))%s,n=(n+r)%s
	return(n<<16|r)>>>0},i=function(t,e){for(var r=65535&t,n=t>>>16,o=0,i=e.length;i>o;o++)r=(r+e[o])%s,n=(n+r)%s
	return(n<<16|r)>>>0},u={},a=u.Adler32=function(){var e=function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.")
	if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.")
	this.checksum=t>>>0},s=e.prototype={}
	return s.constructor=e,e.from=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.")
	if(null==t)throw new Error("First argument needs to be a string.")
	this.checksum=o(1,t.toString())}),e.fromUtf8=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.")
	if(null==t)throw new Error("First argument needs to be a string.")
	var r=n(t.toString())
	this.checksum=o(1,r)}),t&&(e.fromBuffer=function(t){return t.prototype=s,t}(function(t){if(!(this instanceof e))throw new TypeError("Constructor cannot called be as a function.")
	if(!r(t))throw new Error("First argument needs to be ArrayBuffer.")
	var n=new Uint8Array(t)
	return this.checksum=i(1,n)})),s.update=function(t){if(null==t)throw new Error("First argument needs to be a string.")
	return t=t.toString(),this.checksum=o(this.checksum,t)},s.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.")
	var e=n(t.toString())
	return this.checksum=o(this.checksum,e)},t&&(s.updateBuffer=function(t){if(!r(t))throw new Error("First argument needs to be ArrayBuffer.")
	var e=new Uint8Array(t)
	return this.checksum=i(this.checksum,e)}),s.clone=function(){return new a(this.checksum)},e}()
	return u.from=function(t){if(null==t)throw new Error("First argument needs to be a string.")
	return o(1,t.toString())},u.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.")
	var e=n(t.toString())
	return o(1,e)},t&&(u.fromBuffer=function(t){if(!r(t))throw new Error("First argument need to be ArrayBuffer.")
	var e=new Uint8Array(t)
	return i(1,e)}),u})
	;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return jsPDF}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	var base64 = __webpack_require__(5)
	var ieee754 = __webpack_require__(6)
	var isArray = __webpack_require__(7)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  this.length = 0
	  this.parent = undefined

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 6 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	/**
	 * isArray
	 */

	var isArray = Array.isArray;

	/**
	 * toString
	 */

	var str = Object.prototype.toString;

	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */

	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ }
/******/ ]);
}