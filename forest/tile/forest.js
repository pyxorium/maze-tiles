/* Winter Forest (thunderbird.cafe). Includes three.js (MIT licence, three.js authors). */
(()=>{var sd=0,nh=1,rd=2;var _s=1,od=2,ur=3,ji=0,Je=1,Ie=2,vi=0,dr=1,Ve=2,ih=3,sh=4,ad=5;var ys=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,rh=204,oh=205,gd=206,xd=207,_d=208,yd=209,vd=210,Md=211,Sd=212,Ed=213,bd=214,Ma=0,Sa=1,Ea=2,js=3,ba=4,Ta=5,wa=6,Aa=7,_o=0,Td=1,wd=2,oi=0,ah=1,lh=2,ch=3,yo=4,hh=5,uh=6,dh=7;var fh=300,ts=301,vs=302,sl=303,rl=304,vo=306,ei=1e3,mi=1001,Ra=1002,en=1003,Ad=1004;var Mo=1005;var on=1006,ol=1007;var es=1008;var Rn=1009,ph=1010,mh=1011,fr=1012,al=1013,ai=1014,Vn=1015,Fn=1016,ll=1017,cl=1018,pr=1020,gh=35902,xh=35899,_h=1021,yh=1022,Gn=1023,xi=1026,ns=1027,hl=1028,ul=1029,is=1030,dl=1031;var fl=1033,So=33776,Eo=33777,bo=33778,To=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,yl=37492,vl=37496,Ml=37488,Sl=37489,wo=37490,El=37491,bl=37808,Tl=37809,wl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Ll=37816,Dl=37817,Nl=37818,Ul=37819,Fl=37820,Ol=37821,Bl=36492,Hl=36494,zl=36495,kl=36283,Vl=36284,Ao=36285,Gl=36286;var Vr=2300,Ca=2301,ya=2302,Wc=2303,Xc=2400,qc=2401,Yc=2402;var Rd=3200;var Ro=0,Cd=1,Oi="",rn="srgb",Gr="srgb-linear",Wr="linear",_e="srgb";var va=7680;var Pd=519,Id=512,Ld=513,Dd=514,Wl=515,Nd=516,Ud=517,Xl=518,Fd=519,vh=35044;var Mh="300 es",ti=2e3,tr=2001;function Wp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=Xr("canvas");return i.style.display="block",i}var Tu={},er=null;function qr(...i){let t="THREE."+i.shift();er?er("log",t,...i):console.log(t,...i)}function Bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Bd(i);let t="THREE."+i.shift();if(er)er("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=Bd(i);let t="THREE."+i.shift();if(er)er("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Tu||(Tu[t]=!0,Kt(...i))}function Hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zd={[Ma]:Sa,[Ea]:wa,[ba]:Aa,[js]:Ta,[Sa]:Ma,[wa]:Ea,[Aa]:ba,[Ta]:js},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xc=Math.PI/180,Pa=180/Math.PI;function Di(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function qp(i,t){return(i%t+t)%t}function _c(i,t,e){return(1-e)*i+e*t}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ah=class Ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var vt=Ah,pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==x){let p=l*u+c*f+h*x+d*y;p<0&&(u=-u,f=-f,x=-x,y=-y,p=-p);let m=1-a;if(p<.9995){let S=Math.acos(p),R=Math.sin(S);m=Math.sin(m*S)/R,a=Math.sin(a*S)/R,l=l*m+u*a,c=c*m+f*a,h=h*m+x*a,d=d*m+y*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+x*a,d=d*m+y*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*f-c*u,t[e+1]=l*x+h*u+c*d-a*f,t[e+2]=c*x+h*f+a*u-l*d,t[e+3]=h*x-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rh=class Rh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yc.copy(this).projectOnVector(t),this.sub(yc)}reflect(t){return this.sub(yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rh.prototype.isVector3=!0;var U=Rh,yc=new U,wu=new pn,Ch=class Ch{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],y=s[0],p=s[3],m=s[6],S=s[1],R=s[4],v=s[7],A=s[2],T=s[5],N=s[8];return r[0]=o*y+a*S+l*A,r[3]=o*p+a*R+l*T,r[6]=o*m+a*v+l*N,r[1]=c*y+h*S+d*A,r[4]=c*p+h*R+d*T,r[7]=c*m+h*v+d*N,r[2]=u*y+f*S+x*A,r[5]=u*p+f*R+x*T,r[8]=u*m+f*v+x*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ch.prototype.isMatrix3=!0;var ee=Ch,vc=new ee,Au=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gr]:{primaries:t,whitePoint:n,transfer:Wr,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Au,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var he=Yp();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Xr("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Jp=0,Sc=new U,Mn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=on,o=es,a=Gn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Di(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=fh;Mn.DEFAULT_ANISOTROPY=1;var Ph=class Ph{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,v=(f+1)/2,A=(m+1)/2,T=(h+u)/4,N=(d+y)/4,g=(x+p)/4;return R>v&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=N/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=g/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=N/r,s=g/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ph.prototype.isVector4=!0;var ye=Ph,La=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Mn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Yr=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var il=class il{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new il().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,x=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=x+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u+y*a,e[4]=x*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,x=a*h,y=a*d;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+x,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Kp)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Vi.crossVectors(n,Pn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Vi.crossVectors(n,Pn)),Vi.normalize(),qo.crossVectors(Pn,Vi),s[0]=Vi.x,s[4]=qo.x,s[8]=Pn.x,s[1]=Vi.y,s[5]=qo.y,s[9]=Pn.y,s[2]=Vi.z,s[6]=qo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],y=n[6],p=n[10],m=n[14],S=n[3],R=n[7],v=n[11],A=n[15],T=s[0],N=s[4],g=s[8],M=s[12],w=s[1],P=s[5],O=s[9],L=s[13],C=s[2],V=s[6],W=s[10],z=s[14],K=s[3],Z=s[7],b=s[11],F=s[15];return r[0]=o*T+a*w+l*C+c*K,r[4]=o*N+a*P+l*V+c*Z,r[8]=o*g+a*O+l*W+c*b,r[12]=o*M+a*L+l*z+c*F,r[1]=h*T+d*w+u*C+f*K,r[5]=h*N+d*P+u*V+f*Z,r[9]=h*g+d*O+u*W+f*b,r[13]=h*M+d*L+u*z+f*F,r[2]=x*T+y*w+p*C+m*K,r[6]=x*N+y*P+p*V+m*Z,r[10]=x*g+y*O+p*W+m*b,r[14]=x*M+y*L+p*z+m*F,r[3]=S*T+R*w+v*C+A*K,r[7]=S*N+R*P+v*V+A*Z,r[11]=S*g+R*O+v*W+A*b,r[15]=S*M+R*L+v*z+A*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],y=t[7],p=t[11],m=t[15],S=l*f-c*u,R=a*f-c*d,v=a*u-l*d,A=o*f-c*h,T=o*u-l*h,N=o*d-a*h;return e*(y*S-p*R+m*v)-n*(x*S-p*A+m*T)+s*(x*R-y*A+m*N)-r*(x*v-y*T+p*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],y=t[13],p=t[14],m=t[15],S=e*a-n*o,R=e*l-s*o,v=e*c-r*o,A=n*l-s*a,T=n*c-r*a,N=s*c-r*l,g=h*y-d*x,M=h*p-u*x,w=h*m-f*x,P=d*p-u*y,O=d*m-f*y,L=u*m-f*p,C=S*L-R*O+v*P+A*w-T*M+N*g;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/C;return t[0]=(a*L-l*O+c*P)*V,t[1]=(s*O-n*L-r*P)*V,t[2]=(y*N-p*T+m*A)*V,t[3]=(u*T-d*N-f*A)*V,t[4]=(l*w-o*L-c*M)*V,t[5]=(e*L-s*w+r*M)*V,t[6]=(p*v-x*N-m*R)*V,t[7]=(h*N-u*v+f*R)*V,t[8]=(o*O-a*w+c*g)*V,t[9]=(n*w-e*O-r*g)*V,t[10]=(x*T-y*v+m*S)*V,t[11]=(d*v-h*T-f*S)*V,t[12]=(a*M-o*P-l*g)*V,t[13]=(e*P-n*M+s*g)*V,t[14]=(y*R-x*A-p*S)*V,t[15]=(h*A-d*R+u*S)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,x=r*d,y=o*h,p=o*d,m=a*d,S=l*c,R=l*h,v=l*d,A=n.x,T=n.y,N=n.z;return s[0]=(1-(y+m))*A,s[1]=(f+v)*A,s[2]=(x-R)*A,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+m))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(x+R)*N,s[9]=(p-S)*N,s[10]=(1-(u+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let c=1/o,h=1/a,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,e.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ti,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(a===ti)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===tr)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(a===ti)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===tr)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};il.prototype.isMatrix4=!0;var ae=il,Us=new U,Kn=new ae,$p=new U(0,0,0),Kp=new U(1,1,1),Vi=new U,qo=new U,Pn=new U,Cu=new ae,Pu=new pn,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qp=0,Iu=new U,Fs=new pn,Ai=new ae,Yo=new U,Pr=new U,jp=new U,tm=new pn,Lu=new U(1,0,0),Du=new U(0,1,0),Nu=new U(0,0,1),Uu={type:"added"},em={type:"removed"},Os={type:"childadded",child:null},Ec={type:"childremoved",child:null},nn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new an,n=new pn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new ee}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Pr,Yo,this.up):Ai.lookAt(Yo,Pr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),Os.child=t,this.dispatchEvent(Os),Os.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},nm={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=qp(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bc(o,r,t+1/3),this.g=bc(o,r,t),this.b=bc(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return he.workingToColorSpace(fn.copy(this),t),Math.round(le(fn.r*255,0,255))*65536+Math.round(le(fn.g*255,0,255))*256+Math.round(le(fn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=rn){he.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Zo);let n=_c(Gi.h,Zo.h,e),s=_c(Gi.s,Zo.s,e),r=_c(Gi.l,Zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new te;te.NAMES=kd;var Jr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ni=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new U,Ri=new U,Tc=new U,Ci=new U,Bs=new U,Hs=new U,Fu=new U,wc=new U,Ac=new U,Rc=new U,Cc=new ye,Pc=new ye,Ic=new ye,Li=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ri.subVectors(n,e),Tc.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ri),l=Qn.dot(Tc),c=Ri.dot(Ri),h=Ri.dot(Tc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Cc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Cc.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,n),Ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Cc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ri.subVectors(t,e),Qn.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Qn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,n),Hs.subVectors(r,n),wc.subVectors(t,n);let l=Bs.dot(wc),c=Hs.dot(wc);if(l<=0&&c<=0)return e.copy(n);Ac.subVectors(t,s);let h=Bs.dot(Ac),d=Hs.dot(Ac);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bs,o);Rc.subVectors(t,r);let f=Bs.dot(Rc),x=Hs.dot(Rc);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Hs,a);let p=h*x-f*d;if(p<=0&&d-h>=0&&f-x>=0)return Fu.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Fu,a);let m=1/(p+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(Bs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),$o.subVectors(this.max,Ir),zs.subVectors(t.a,Ir),ks.subVectors(t.b,Ir),Vs.subVectors(t.c,Ir),Wi.subVectors(ks,zs),Xi.subVectors(Vs,ks),cs.subVectors(zs,Vs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-cs.z,cs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,cs.z,0,-cs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-cs.y,cs.x,0];return!Lc(e,zs,ks,Vs,$o)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,zs,ks,Vs,$o))?!1:(Ko.crossVectors(Wi,Xi),e=[Ko.x,Ko.y,Ko.z],Lc(e,zs,ks,Vs,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,Jo=new yi,zs=new U,ks=new U,Vs=new U,Wi=new U,Xi=new U,cs=new U,Ir=new U,$o=new U,Ko=new U,hs=new U;function Lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new U,Qo=new vt,im=0,Oe=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $r=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},sm=new yi,Lr=new U,Dc=new U,Ui=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Dc)),this.expandByPoint(Lr.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rm=0,zn=new ae,Nc=new nn,Gs=new U,In=new yi,Dr=new yi,tn=new U,fe=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?Kr:$r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Nc.lookAt(t),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(In.min,Dr.min),In.expandByPoint(tn),tn.addVectors(In.max,Dr.max),In.expandByPoint(tn)):(In.expandByPoint(Dr.min),In.expandByPoint(Dr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),tn.add(Gs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new U,l[g]=new U;let c=new U,h=new U,d=new U,u=new vt,f=new vt,x=new vt,y=new U,p=new U;function m(g,M,w){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,M),x.fromBufferAttribute(r,w),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(P),a[g].add(y),a[M].add(y),a[w].add(y),l[g].add(p),l[M].add(p),l[w].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,M=S.length;g<M;++g){let w=S[g],P=w.start,O=w.count;for(let L=P,C=P+O;L<C;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let R=new U,v=new U,A=new U,T=new U;function N(g){A.fromBufferAttribute(s,g),T.copy(A);let M=a[g];R.copy(M),R.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(T,M);let P=v.dot(l[g])<0?-1:1;o.setXYZW(g,R.x,R.y,R.z,P)}for(let g=0,M=S.length;g<M;++g){let w=S[g],P=w.start,O=w.count;for(let L=P,C=P+O;L<C;L+=3)N(t.getX(L+0)),N(t.getX(L+1)),N(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)u[x++]=c[f++]}return new Oe(u,h,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},vn=new U,Qr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uc=new U,om=new U,am=new ee,Ln=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Uc.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),s=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lm=0,ii=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=dr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Be=class extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Nr=new U,Xs=new U,qs=new U,Ys=new vt,Ur=new vt,Vd=new ae,jo=new U,Fr=new U,ta=new U,Ou=new vt,Fc=new vt,Bu=new vt,ke=class extends nn{constructor(t=new Be){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Na(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Qr(n,3,0,!1)),Ws.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Vd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ea(jo.set(-.5,-.5,0),qs,o,Xs,s,r),ea(Fr.set(.5,-.5,0),qs,o,Xs,s,r),ea(ta.set(.5,.5,0),qs,o,Xs,s,r),Ou.set(0,0),Fc.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(jo,Fr,ta,!1,Nr);if(a===null&&(ea(Fr.set(-.5,.5,0),qs,o,Xs,s,r),Fc.set(0,1),a=t.ray.intersectTriangle(jo,ta,Fr,!1,Nr),a===null))return;let l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:Li.getInterpolation(Nr,jo,Fr,ta,Ou,Fc,Bu,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ea(i,t,e,n,s,r){Ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*Ys.x-s*Ys.y,Ur.y=s*Ys.x+r*Ys.y):Ur.copy(Ys),i.copy(t),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(Vd)}var Ii=new U,Oc=new U,na=new U,ia=new U,jr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ia.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),h=Math.abs(1-o*o),d,u,f,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oc).addScaledVector(na,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,x=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,S=n.y-o.y,R=n.z-o.z,v=Math.abs(l),A=Math.abs(c),T=Math.abs(h),N,g,M,w,P,O,L,C,V,W,z,K;if(v>=A&&v>=T?(M=l,O=d,V=x,K=m,l>=0?(N=c,g=h,w=u,P=f,L=y,C=p,W=S,z=R):(N=h,g=c,w=f,P=u,L=p,C=y,W=R,z=S)):A>=T?(M=c,O=u,V=y,K=S,c>=0?(N=h,g=l,w=f,P=d,L=p,C=x,W=R,z=m):(N=l,g=h,w=d,P=f,L=x,C=p,W=m,z=R)):(M=h,O=f,V=p,K=R,h>=0?(N=l,g=c,w=d,P=u,L=x,C=y,W=m,z=S):(N=c,g=l,w=u,P=d,L=y,C=x,W=S,z=m)),M===0)return null;let Z=N/M,b=g/M,F=1/M,J=w-Z*O,k=P-b*O,et=L-Z*V,lt=C-b*V,H=W-Z*K,I=z-b*K,B=H*lt-I*et,j=J*I-k*H,ut=et*k-lt*J;if(s){if(B<0||j<0||ut<0)return null}else if((B<0||j<0||ut<0)&&(B>0||j>0||ut>0))return null;let tt=B+j+ut;if(tt===0)return null;let it=F*(B*O+j*V+ut*K);return(tt>0?it<0:it>0)?null:this.at(it/tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hu=new ae,us=new jr,sa=new Ui,zu=new U,ra=new U,oa=new U,aa=new U,Bc=new U,la=new U,ku=new U,ca=new U,pt=class extends nn{constructor(t=new fe,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Bc.fromBufferAttribute(d,t),o?la.addScaledVector(Bc,h):la.addScaledVector(Bc.sub(e),h))}e.add(la)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(sa.containsPoint(us.origin)===!1&&(us.intersectSphere(sa,zu)===null||us.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),us.copy(t.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),R=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,A=R;v<A;v+=3){let T=a.getX(v),N=a.getX(v+1),g=a.getX(v+2);s=ha(this,m,t,n,c,h,d,T,N,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let S=a.getX(p),R=a.getX(p+1),v=a.getX(p+2);s=ha(this,o,t,n,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,A=R;v<A;v+=3){let T=v,N=v+1,g=v+2;s=ha(this,m,t,n,c,h,d,T,N,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let S=p,R=p+1,v=p+2;s=ha(this,o,t,n,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function cm(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:i}}function ha(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ra),i.getVertexPosition(l,oa),i.getVertexPosition(c,aa);let h=cm(i,t,e,n,ra,oa,aa,ku);if(h){let d=new U;Li.getBarycoord(ku,ra,oa,aa,d),s&&(h.uv=Li.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Li.getNormal(ra,oa,aa,u.normal),h.face=u,h.barycoord=d}return h}var to=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,h=en,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new ae,Vu=new ae,ua=[],Gu=new yi,hm=new ae,Or=new pt,Br=new Ui,si=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Gu.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Br.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Vu.multiplyMatrices(n,Zs),Or.matrixWorld=Vu,Or.raycast(t,ua);for(let o=0,a=ua.length;o<a;o++){let l=ua[o];l.instanceId=r,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(s*this.count),s,this.count,hl,Vn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new Ui,um=new vt(.5,.5),da=new U,sr=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],y=r[9],p=r[10],m=r[11],S=r[12],R=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,m-x,A-S).normalize(),s[1].setComponents(c+o,f+h,m+x,A+S).normalize(),s[2].setComponents(c+a,f+d,m+y,A+R).normalize(),s[3].setComponents(c-a,f-d,m-y,A-R).normalize(),n)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,m-p,A-v).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-v).normalize(),e===ti)s[5].setComponents(c+l,f+u,m+p,A+v).normalize();else if(e===tr)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);let e=um.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ua=class extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wu=new ae,Zc=new jr,fa=new Ui,pa=new U,rr=class extends nn{constructor(t=new fe,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Wu.copy(s).invert(),Zc.copy(t.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=u,y=f;x<y;x++){let p=c.getX(x);pa.fromBufferAttribute(d,p),Xu(pa,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=u,y=f;x<y;x++)pa.fromBufferAttribute(d,x),Xu(pa,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xu(i,t,e,n,s,r,o){let a=Zc.distanceSqToPoint(i);if(a<e){let l=new U;Zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends Mn{constructor(t=[],e=ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yi=class extends Mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends Mn{constructor(t,e,n=ai,s,r,o,a=en,l=en,c,h=xi,d=1){if(h!==xi&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends Zi{constructor(t,e=ai,n=ts,s,r,o=en,a=en,l,c=xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},jt=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function x(y,p,m,S,R,v,A,T,N,g,M){let w=v/N,P=A/g,O=v/2,L=A/2,C=T/2,V=N+1,W=g+1,z=0,K=0,Z=new U;for(let b=0;b<W;b++){let F=b*P-L;for(let J=0;J<V;J++){let k=J*w-O;Z[y]=k*S,Z[p]=F*R,Z[m]=C,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(J/N),d.push(1-b/g),z+=1}}for(let b=0;b<g;b++)for(let F=0;F<N;F++){let J=u+F+V*b,k=u+F+V*(b+1),et=u+(F+1)+V*(b+1),lt=u+(F+1)+V*b;l.push(J,k,lt),l.push(k,et,lt),K+=6}a.addGroup(f,K,M),f+=K,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},so=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,x=n*2+r,y=s+1,p=new U,m=new U;for(let S=0;S<=x;S++){let R=0,v=0,A=0,T=0;if(S<=n){let M=S/n,w=M*Math.PI/2;v=-h-t*Math.cos(w),A=t*Math.sin(w),T=-t*Math.cos(w),R=M*d}else if(S<=n+r){let M=(S-n)/r;v=-h+M*e,A=t,T=0,R=d+M*u}else{let M=(S-n-r)/n,w=M*Math.PI/2;v=h+t*Math.sin(w),A=t*Math.cos(w),T=t*Math.sin(w),R=d+u+M*d}let N=Math.max(0,Math.min(1,R/f)),g=0;S===0?g=.5/s:S===x&&(g=-.5/s);for(let M=0;M<=s;M++){let w=M/s,P=w*Math.PI*2,O=Math.sin(P),L=Math.cos(P);m.x=-A*L,m.y=v,m.z=A*O,a.push(m.x,m.y,m.z),p.set(-A*L,T,A*O),p.normalize(),l.push(p.x,p.y,p.z),c.push(w+g,N)}if(S>0){let M=(S-1)*y;for(let w=0;w<s;w++){let P=M+w,O=M+w+1,L=S*y+w,C=S*y+w+1;o.push(P,O,L),o.push(O,C,L)}}}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Dn=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,y=[],p=n/2,m=0;S(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function S(){let v=new U,A=new U,T=0,N=(e-t)/n;for(let g=0;g<=r;g++){let M=[],w=g/r,P=w*(e-t)+t;for(let O=0;O<=s;O++){let L=O/s,C=L*l+a,V=Math.sin(C),W=Math.cos(C);A.x=P*V,A.y=-w*n+p,A.z=P*W,d.push(A.x,A.y,A.z),v.set(V,N,W).normalize(),u.push(v.x,v.y,v.z),f.push(L,1-w),M.push(x++)}y.push(M)}for(let g=0;g<s;g++)for(let M=0;M<r;M++){let w=y[M][g],P=y[M+1][g],O=y[M+1][g+1],L=y[M][g+1];(t>0||M!==0)&&(h.push(w,P,L),T+=3),(e>0||M!==r-1)&&(h.push(P,O,L),T+=3)}c.addGroup(m,T,0),m+=T}function R(v){let A=x,T=new vt,N=new U,g=0,M=v===!0?t:e,w=v===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*w,0),u.push(0,w,0),f.push(.5,.5),x++;let P=x;for(let O=0;O<=s;O++){let C=O/s*l+a,V=Math.cos(C),W=Math.sin(C);N.x=M*W,N.y=p*w,N.z=M*V,d.push(N.x,N.y,N.z),u.push(0,w,0),T.x=V*.5+.5,T.y=W*.5*w+.5,f.push(T.x,T.y),x++}for(let O=0;O<s;O++){let L=A+O,C=P+O;v===!0?h.push(C,C+1,L):h.push(C+1,C,L),g+=3}c.addGroup(m,g,v===!0?1:2),m+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sn=class i extends Ne{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new ae;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},or=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends or{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qu=new U,Yu=new U,Hc=new Sh,zc=new Sh,kc=new Sh,wn=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yu.subVectors(s[0],s[1]).add(s[0]),c=Yu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),Hc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,y,p),zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,y,p),kc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,y,p)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),kc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Hc.calc(l),zc.calc(l),kc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function dm(i,t){let e=1-i;return e*e*t}function fm(i,t){return 2*(1-i)*i*t}function pm(i,t){return i*i*t}function zr(i,t,e,n){return dm(i,t)+fm(i,e)+pm(i,n)}function mm(i,t){let e=1-i;return e*e*e*t}function gm(i,t){let e=1-i;return 3*e*e*i*t}function xm(i,t){return 3*(1-i)*i*i*t}function _m(i,t){return i*i*i*t}function kr(i,t,e,n,s){return mm(i,t)+gm(i,e)+xm(i,n)+_m(i,s)}var ro=class extends Nn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ba=class extends Nn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends Nn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Nn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Nn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Nn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y),zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,l.x,c.x,h.x,d.x),Zu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},za=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:wn,CubicBezierCurve:ro,CubicBezierCurve3:Ba,EllipseCurve:or,LineCurve:oo,LineCurve3:Ha,QuadraticBezierCurve:ao,QuadraticBezierCurve3:lo,SplineCurve:co}),ka=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new za[s.type]().fromJSON(s))}return this}},ps=class extends ka{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ao(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ro(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new or(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends ps{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ps().fromJSON(s))}return this}};function ym(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],x=i[u+1];f<a&&(a=f),x<l&&(l=x),f>h&&(h=f),x>d&&(d=x)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ho(r,o,e,a,l,c,0),o}function Gd(i,t,e,n,s){let r;if(s===Um(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ju(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ju(o/n|0,i[o],i[o+1],r);return r&&ar(r,r.next)&&(fo(r),r=r.next),r}function ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||Fe(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mm(i,n,s,r):vm(i)){t.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sm(ms(i),t),ho(i,t,e,n,s,r,2)):o===2&&Em(i,t,e,n,s,r):ho(ms(i),t,e,n,s,r,1);break}}}function vm(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&Hr(s,a,r,l,o,c,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Mm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),x=Math.min(h,d,u),y=Math.max(a,l,c),p=Math.max(h,d,u),m=Jc(f,x,t,e,n),S=Jc(y,p,t,e,n),R=i.prevZ,v=i.nextZ;for(;R&&R.z>=m&&v&&v.z<=S;){if(R.x>=f&&R.x<=y&&R.y>=x&&R.y<=p&&R!==s&&R!==o&&Hr(a,h,l,d,c,u,R.x,R.y)&&Fe(R.prev,R,R.next)>=0||(R=R.prevZ,v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Hr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;R&&R.z>=m;){if(R.x>=f&&R.x<=y&&R.y>=x&&R.y<=p&&R!==s&&R!==o&&Hr(a,h,l,d,c,u,R.x,R.y)&&Fe(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&Hr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Sm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ar(n,s)&&Xd(n,e,e.next,s)&&uo(n,s)&&uo(s,n)&&(t.push(n.i,e.i,s.i),fo(e),fo(e.next),e=i=s),e=e.next}while(e!==i);return ms(e)}function Em(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lm(o,a)){let l=qd(o,a);o=ms(o,o.next),l=ms(l,l.next),ho(o,t,e,n,s,r,0),ho(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Gd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Im(c))}s.sort(Tm);for(let r=0;r<s.length;r++)e=wm(s[r],e);return e}function Tm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function wm(i,t){let e=Am(i,t);if(!e)return t;let n=qd(e,i);return ms(n,n.next),ms(e,e.next)}function Am(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ar(i,e))return e;do{if(ar(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);uo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Rm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Rm(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Cm(i,t,e,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pm(s)}function Pm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Jc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Im(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Hr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wd(i,t,e,n,s,r,o,a)}function Lm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dm(i,t)&&(uo(i,t)&&uo(t,i)&&Nm(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||ar(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ar(i,t){return i.x===t.x&&i.y===t.y}function Xd(i,t,e,n){let s=ga(Fe(i,t,e)),r=ga(Fe(i,t,n)),o=ga(Fe(e,n,i)),a=ga(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Dm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function uo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function Nm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qd(i,t){let e=$c(i.i,i.x,i.y),n=$c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=$c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kc=class{static triangulate(t,e,n=2){return ym(t,e,n)}},gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$u(t),Ku(n,t);let o=t.length;e.forEach($u);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ku(n,e[l]);let a=Kc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kn=class i extends fe{constructor(t=new ln([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Fm,R,v=!1,A,T,N,g;if(m){R=m.getSpacedPoints(h),v=!0,u=!1;let G=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,G),T=new U,N=new U,g=new U}u||(p=0,f=0,x=0,y=0);let M=a.extractPoints(c),w=M.shape,P=M.holes;if(!gi.isClockWise(w)){w=w.reverse();for(let G=0,X=P.length;G<X;G++){let nt=P[G];gi.isClockWise(nt)&&(P[G]=nt.reverse())}}function L(G){let nt=10000000000000001e-36,ct=G[0];for(let mt=1;mt<=G.length;mt++){let It=mt%G.length,St=G[It],Bt=St.x-ct.x,Gt=St.y-ct.y,q=Bt*Bt+Gt*Gt,me=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(ct.x),Math.abs(ct.y)),oe=nt*me*me;if(q<=oe){G.splice(It,1),mt--;continue}ct=St}}L(w),P.forEach(L);let C=P.length,V=w;for(let G=0;G<C;G++){let X=P[G];w=w.concat(X)}function W(G,X,nt){return X||$t("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(X,nt)}let z=w.length;function K(G,X,nt){let ct,mt,It,St=G.x-X.x,Bt=G.y-X.y,Gt=nt.x-G.x,q=nt.y-G.y,me=St*St+Bt*Bt,oe=St*q-Bt*Gt;if(Math.abs(oe)>Number.EPSILON){let D=Math.sqrt(me),_=Math.sqrt(Gt*Gt+q*q),Q=X.x-Bt/D,at=X.y+St/D,dt=nt.x-q/_,Mt=nt.y+Gt/_,Et=((dt-Q)*q-(Mt-at)*Gt)/(St*q-Bt*Gt);ct=Q+St*Et-G.x,mt=at+Bt*Et-G.y;let ft=ct*ct+mt*mt;if(ft<=2)return new vt(ct,mt);It=Math.sqrt(ft/2)}else{let D=!1;St>Number.EPSILON?Gt>Number.EPSILON&&(D=!0):St<-Number.EPSILON?Gt<-Number.EPSILON&&(D=!0):Math.sign(Bt)===Math.sign(q)&&(D=!0),D?(ct=-Bt,mt=St,It=Math.sqrt(me)):(ct=St,mt=Bt,It=Math.sqrt(me/2))}return new vt(ct/It,mt/It)}let Z=[];for(let G=0,X=V.length,nt=X-1,ct=G+1;G<X;G++,nt++,ct++)nt===X&&(nt=0),ct===X&&(ct=0),Z[G]=K(V[G],V[nt],V[ct]);let b=[],F,J=Z.concat();for(let G=0,X=C;G<X;G++){let nt=P[G];F=[];for(let ct=0,mt=nt.length,It=mt-1,St=ct+1;ct<mt;ct++,It++,St++)It===mt&&(It=0),St===mt&&(St=0),F[ct]=K(nt[ct],nt[It],nt[St]);b.push(F),J=J.concat(F)}let k;if(p===0)k=gi.triangulateShape(V,P);else{let G=[],X=[];for(let nt=0;nt<p;nt++){let ct=nt/p,mt=f*Math.cos(ct*Math.PI/2),It=x*Math.sin(ct*Math.PI/2)+y;for(let St=0,Bt=V.length;St<Bt;St++){let Gt=W(V[St],Z[St],It);j(Gt.x,Gt.y,-mt),ct===0&&G.push(Gt)}for(let St=0,Bt=C;St<Bt;St++){let Gt=P[St];F=b[St];let q=[];for(let me=0,oe=Gt.length;me<oe;me++){let D=W(Gt[me],F[me],It);j(D.x,D.y,-mt),ct===0&&q.push(D)}ct===0&&X.push(q)}}k=gi.triangulateShape(G,X)}let et=k.length,lt=x+y;for(let G=0;G<z;G++){let X=u?W(w[G],J[G],lt):w[G];v?(N.copy(A.normals[0]).multiplyScalar(X.x),T.copy(A.binormals[0]).multiplyScalar(X.y),g.copy(R[0]).add(N).add(T),j(g.x,g.y,g.z)):j(X.x,X.y,0)}for(let G=1;G<=h;G++)for(let X=0;X<z;X++){let nt=u?W(w[X],J[X],lt):w[X];v?(N.copy(A.normals[G]).multiplyScalar(nt.x),T.copy(A.binormals[G]).multiplyScalar(nt.y),g.copy(R[G]).add(N).add(T),j(g.x,g.y,g.z)):j(nt.x,nt.y,d/h*G)}for(let G=p-1;G>=0;G--){let X=G/p,nt=f*Math.cos(X*Math.PI/2),ct=x*Math.sin(X*Math.PI/2)+y;for(let mt=0,It=V.length;mt<It;mt++){let St=W(V[mt],Z[mt],ct);j(St.x,St.y,d+nt)}for(let mt=0,It=P.length;mt<It;mt++){let St=P[mt];F=b[mt];for(let Bt=0,Gt=St.length;Bt<Gt;Bt++){let q=W(St[Bt],F[Bt],ct);v?j(q.x,q.y+R[h-1].y,R[h-1].x+nt):j(q.x,q.y,d+nt)}}}H(),I();function H(){let G=s.length/3;if(u){let X=0,nt=z*X;for(let ct=0;ct<et;ct++){let mt=k[ct];ut(mt[2]+nt,mt[1]+nt,mt[0]+nt)}X=h+p*2,nt=z*X;for(let ct=0;ct<et;ct++){let mt=k[ct];ut(mt[0]+nt,mt[1]+nt,mt[2]+nt)}}else{for(let X=0;X<et;X++){let nt=k[X];ut(nt[2],nt[1],nt[0])}for(let X=0;X<et;X++){let nt=k[X];ut(nt[0]+z*h,nt[1]+z*h,nt[2]+z*h)}}n.addGroup(G,s.length/3-G,0)}function I(){let G=s.length/3,X=0;B(V,X),X+=V.length;for(let nt=0,ct=P.length;nt<ct;nt++){let mt=P[nt];B(mt,X),X+=mt.length}n.addGroup(G,s.length/3-G,1)}function B(G,X){let nt=G.length;for(;--nt>=0;){let ct=nt,mt=nt-1;mt<0&&(mt=G.length-1);for(let It=0,St=h+p*2;It<St;It++){let Bt=z*It,Gt=z*(It+1),q=X+ct+Bt,me=X+mt+Bt,oe=X+mt+Gt,D=X+ct+Gt;tt(q,me,oe,D)}}}function j(G,X,nt){l.push(G),l.push(X),l.push(nt)}function ut(G,X,nt){it(G),it(X),it(nt);let ct=s.length/3,mt=S.generateTopUV(n,s,ct-3,ct-2,ct-1);ot(mt[0]),ot(mt[1]),ot(mt[2])}function tt(G,X,nt,ct){it(G),it(X),it(ct),it(X),it(nt),it(ct);let mt=s.length/3,It=S.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);ot(It[0]),ot(It[1]),ot(It[3]),ot(It[1]),ot(It[2]),ot(It[3])}function it(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function ot(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Om(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new za[s.type]().fromJSON(s)),new i(n,t.options)}},Fm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-d),new vt(u,1-x),new vt(y,1-m)]:[new vt(a,1-l),new vt(h,1-d),new vt(f,1-x),new vt(p,1-m)]}};function Om(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var lr=class i extends fe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new U,u=new vt,f=new U,x=new U,y=new U,p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let S=0;S<=e;S++){let R=n+S*h*s,v=Math.sin(R),A=Math.cos(R);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*A,o.push(d.x,d.y,d.z),u.x=S/e,u.y=T/(t.length-1),a.push(u.x,u.y);let N=l[3*T+0]*v,g=l[3*T+1],M=l[3*T+0]*A;c.push(N,g,M)}}for(let S=0;S<e;S++)for(let R=0;R<t.length-1;R++){let v=R+S*t.length,A=v,T=v+t.length,N=v+t.length+1,g=v+1;r.push(A,T,g),r.push(N,g,T)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var He=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],x=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*u-o;for(let R=0;R<c;R++){let v=R*d-r;x.push(v,-S,0),y.push(0,0,1),p.push(R/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let R=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),T=S+1+c*m;f.push(R,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ji=class i extends fe{constructor(t=new ln([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,x=u.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=x.length;p<m;p++){let S=x[p];gi.isClockWise(S)===!0&&(x[p]=S.reverse())}let y=gi.triangulateShape(f,x);for(let p=0,m=x.length;p<m;p++){let S=x[p];f=f.concat(S)}for(let p=0,m=f.length;p<m;p++){let S=f[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=y.length;p<m;p++){let S=y[p],R=S[0]+d,v=S[1]+d,A=S[2]+d;n.push(R,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Bm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Bm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var gn=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,u=new U,f=[],x=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],R=m/n,v=o+R*a,A=t*Math.cos(v),T=Math.sqrt(t*t-A*A),N=0;m===0&&o===0?N=.5/e:m===n&&l===Math.PI&&(N=-.5/e);for(let g=0;g<=e;g++){let M=g/e,w=s+M*r;d.x=-T*Math.cos(w),d.y=A,d.z=T*Math.sin(w),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(M+N,1-R),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let R=h[m][S+1],v=h[m][S],A=h[m+1][S],T=h[m+1][S+1];(m!==0||o>0)&&f.push(R,v,T),(m!==n-1||l<Math.PI)&&f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,x=new U;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(S),f.y=(t+e*Math.cos(p))*Math.sin(S),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,R=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,S,v),l.push(S,R,v)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ri=class i extends fe{constructor(t=new lo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new vt,h=new U,d=[],u=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function y(){for(let R=0;R<e;R++)p(R);p(r===!1?e:0),S(),m()}function p(R){h=t.getPointAt(R/e,h);let v=o.normals[R],A=o.binormals[R];for(let T=0;T<=s;T++){let N=T/s*Math.PI*2,g=Math.sin(N),M=-Math.cos(N);l.x=M*v.x+g*A.x,l.y=M*v.y+g*A.y,l.z=M*v.z+g*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let R=1;R<=e;R++)for(let v=1;v<=s;v++){let A=(s+1)*(R-1)+(v-1),T=(s+1)*R+(v-1),N=(s+1)*R+v,g=(s+1)*(R-1)+v;x.push(A,T,g),x.push(T,N,g)}}function S(){for(let R=0;R<=e;R++)for(let v=0;v<=s;v++)c.x=R/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Yd={clone:Ms,merge:xn},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Va=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cr=class extends ii{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var kt=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ga=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xa=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=t,a=2*e-n;break;case Yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=t,l=2*n-e;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,p=y*x,m=-u*p+2*u*y-u*x,S=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,R=(-1-f)*p+(1.5+f)*y+.5*x,v=f*p-f*y;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+S*o[c+A]+R*o[l+A]+v*o[d+A];return r}},qa=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ya=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Za=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),y=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*x;return r}let u=a*2,f=t-1;for(let x=0;x!==a;++x){let y=o[c+x],p=o[l+x],m=f*u+x*2,S=d[m],R=d[m+1],v=t*u+x*2,A=h[v],T=h[v+1],N=Gm(n,e,S,A,s);r[x]=Zd(N,y,R,T,p)}return r}};function Zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Gm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Vm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vc(t.settings)&&(n.settings={inTangents:Js(t.settings.inTangents,Array),outTangents:Js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Za(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break;case Wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vc(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Xp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let y=e[d+x];if(y!==e[u+x]||y!==e[f+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ju(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ca;var Ki=class extends Un{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Vr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ja.prototype.ValueTypeName="color";var $a=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="number";var Ka=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},po=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ka(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Un{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Vr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="vector";var ja=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jd=new ja,tl=class{constructor(t){this.manager=t!==void 0?t:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xs=class extends gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gc=new ae,td=new U,ed=new U,mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;td.setFromMatrixPosition(t.matrixWorld),e.position.copy(td),ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new U,_a=new pn,fi=new U,go=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,_a,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,_a,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new U,nd=new vt,id=new vt,Ye=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qc=class extends mo{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},Xe=class extends gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hr=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jc=class extends mo{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Fi=class extends gs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var $s=-90,Ks=1,el=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye($s,Ks,t,e);s.layers=this.layers,this.add(s);let r=new Ye($s,Ks,t,e);r.layers=this.layers,this.add(r);let o=new Ye($s,Ks,t,e);o.layers=this.layers,this.add(o);let a=new Ye($s,Ks,t,e);a.layers=this.layers,this.add(a);let l=new Ye($s,Ks,t,e);l.layers=this.layers,this.add(l);let c=new Ye($s,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},nl=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bh="\\[\\]\\.:\\/",Wm=new RegExp("["+bh+"]","g"),Th="[^"+bh+"]",Xm="[^"+bh.replace("\\.","")+"]",qm=/((?:WC+[\/:])*)/.source.replace("WC",Th),Ym=/(WCOD+)?/.source.replace("WCOD",Xm),Zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),$m=new RegExp("^"+qm+Ym+Zm+Jm+"$"),Km=["material","materials","bones","map"],th=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(t){let e=$m.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=th;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cv=new Float32Array(1);var Ih=class Ih{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ih.prototype.isMatrix2=!0;var eh=Ih;function wh(i,t,e,n){let s=Qm(n);switch(e){case _h:return i*t;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(i,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(t,8)/2;case _l:case yl:case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:case wo:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bl:case Hl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(i){switch(i){case Rn:case ph:return{byteLength:1,components:1};case fr:case mh:case Fn:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case ai:case al:case Vn:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _f(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function t0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:e0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:o0,aomap_fragment:a0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:d0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:y0,color_fragment:v0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:E0,common:b0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:w0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:P0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:N0,envmap_pars_fragment:U0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:Y0,envmap_vertex:O0,fog_vertex:B0,fog_pars_vertex:H0,fog_fragment:z0,fog_pars_fragment:k0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:G0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:$0,lights_phong_pars_fragment:K0,lights_physical_fragment:Q0,lights_physical_pars_fragment:j0,lights_fragment_begin:tg,lights_fragment_maps:eg,lights_fragment_end:ng,lightprobes_pars_fragment:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:xg,morphtarget_vertex:_g,normal_fragment_begin:yg,normal_fragment_maps:vg,normal_pars_fragment:Mg,normal_pars_vertex:Sg,normal_vertex:Eg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Ig,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ng,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:Bg,shadowmap_vertex:Hg,shadowmask_pars_fragment:zg,skinbase_vertex:kg,skinning_pars_vertex:Vg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:Jg,transmission_pars_fragment:$g,uv_pars_fragment:Kg,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:tx,background_vert:ex,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ox,depth_vert:ax,depth_frag:lx,distance_vert:cx,distance_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:xx,meshlambert_frag:_x,meshmatcap_vert:yx,meshmatcap_frag:vx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:Ex,meshphong_frag:bx,meshphysical_vert:Tx,meshphysical_frag:wx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Ix,shadow_frag:Lx,sprite_vert:Dx,sprite_frag:Nx},Pt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Si={basic:{uniforms:xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:xn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:xn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:xn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:xn([Pt.points,Pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:xn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:xn([Pt.common,Pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:xn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:xn([Pt.sprite,Pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:xn([Pt.common,Pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:xn([Pt.lights,Pt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Si.physical={uniforms:xn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var ql={r:0,b:0,g:0},Ux=new ae,yf=new ee;yf.set(-1,0,0,0,1,0,0,0,1);function Fx(i,t,e,n,s,r){let o=new te(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let v=S.backgroundBlurriness>0;R=t.get(R,v)}return R}function x(S){let R=!1,v=f(S);v===null?p(o,a):v&&v.isColor&&(p(v,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===vo)?(c===void 0&&(c=new pt(new jt(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ms(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new pt(new He(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ms(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,R){S.getRGB(ql,Eh(i)),e.buffers.color.setClear(ql.r,ql.g,ql.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),a=R,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:x,addToRenderList:y,dispose:m}}function Ox(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,O,L,C,V){let W=!1,z=d(P,C,L,O);r!==z&&(r=z,c(r.object)),W=f(P,C,L,V),W&&x(P,C,L,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(P,O,L,C),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,O,L,C){let V=C.wireframe===!0,W=n[O.id];W===void 0&&(W={},n[O.id]=W);let z=P.isInstancedMesh===!0?P.id:0,K=W[z];K===void 0&&(K={},W[z]=K);let Z=K[L.id];Z===void 0&&(Z={},K[L.id]=Z);let b=Z[V];return b===void 0&&(b=u(l()),Z[V]=b),b}function u(P){let O=[],L=[],C=[];for(let V=0;V<e;V++)O[V]=0,L[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:C,object:P,attributes:{},index:null}}function f(P,O,L,C){let V=r.attributes,W=O.attributes,z=0,K=L.getAttributes();for(let Z in K)if(K[Z].location>=0){let F=V[Z],J=W[Z];if(J===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function x(P,O,L,C){let V={},W=O.attributes,z=0,K=L.getAttributes();for(let Z in K)if(K[Z].location>=0){let F=W[Z];F===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(F=P.instanceColor));let J={};J.attribute=F,F&&F.data&&(J.data=F.data),V[Z]=J,z++}r.attributes=V,r.attributesNum=z,r.index=C}function y(){let P=r.newAttributes;for(let O=0,L=P.length;O<L;O++)P[O]=0}function p(P){m(P,0)}function m(P,O){let L=r.newAttributes,C=r.enabledAttributes,V=r.attributeDivisors;L[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),V[P]!==O&&(i.vertexAttribDivisor(P,O),V[P]=O)}function S(){let P=r.newAttributes,O=r.enabledAttributes;for(let L=0,C=O.length;L<C;L++)O[L]!==P[L]&&(i.disableVertexAttribArray(L),O[L]=0)}function R(P,O,L,C,V,W,z){z===!0?i.vertexAttribIPointer(P,O,L,V,W):i.vertexAttribPointer(P,O,L,C,V,W)}function v(P,O,L,C){y();let V=C.attributes,W=L.getAttributes(),z=O.defaultAttributeValues;for(let K in W){let Z=W[K];if(Z.location>=0){let b=V[K];if(b===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(b=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(b=P.instanceColor)),b!==void 0){let F=b.normalized,J=b.itemSize,k=t.get(b);if(k===void 0)continue;let et=k.buffer,lt=k.type,H=k.bytesPerElement,I=lt===i.INT||lt===i.UNSIGNED_INT||b.gpuType===al;if(b.isInterleavedBufferAttribute){let B=b.data,j=B.stride,ut=b.offset;if(B.isInstancedInterleavedBuffer){for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt,B.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let tt=0;tt<Z.locationSize;tt++)p(Z.location+tt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let tt=0;tt<Z.locationSize;tt++)R(Z.location+tt,J/Z.locationSize,lt,F,j*H,(ut+J/Z.locationSize*tt)*H,I)}else{if(b.isInstancedBufferAttribute){for(let B=0;B<Z.locationSize;B++)m(Z.location+B,b.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let B=0;B<Z.locationSize;B++)p(Z.location+B);i.bindBuffer(i.ARRAY_BUFFER,et);for(let B=0;B<Z.locationSize;B++)R(Z.location+B,J/Z.locationSize,lt,F,J*H,J/Z.locationSize*B*H,I)}}else if(z!==void 0){let F=z[K];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(Z.location,F);break;case 3:i.vertexAttrib3fv(Z.location,F);break;case 4:i.vertexAttrib4fv(Z.location,F);break;default:i.vertexAttrib1fv(Z.location,F)}}}}S()}function A(){M();for(let P in n){let O=n[P];for(let L in O){let C=O[L];for(let V in C){let W=C[V];for(let z in W)h(W[z].object),delete W[z];delete C[V]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let L in O){let C=O[L];for(let V in C){let W=C[V];for(let z in W)h(W[z].object),delete W[z];delete C[V]}}delete n[P.id]}function N(P){for(let O in n){let L=n[O];for(let C in L){let V=L[C];if(V[P.id]===void 0)continue;let W=V[P.id];for(let z in W)h(W[z].object),delete W[z];delete V[P.id]}}}function g(P){for(let O in n){let L=n[O],C=P.isInstancedMesh===!0?P.id:0,V=L[C];if(V!==void 0){for(let W in V){let z=V[W];for(let K in z)h(z[K].object),delete z[K];delete V[W]}delete L[C],Object.keys(L).length===0&&delete n[O]}}}function M(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function Bx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Hx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Gn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let g=N===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Rn&&N!==Vn&&!g&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:v,maxSamples:A,samples:T}}function zx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,R=S*4,v=m.clippingState||null;l.value=v,v=h(x,u,R,f);for(let A=0;A!==R;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,v=f;R!==y;++R,v+=4)o.copy(d[R]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var gr=4,kx=6,Vx=20,Gx=256,Co=new hr,$d=new te,Lh=null,Dh=0,Nh=0,Uh=!1,Wx=new U,Ss=new U,Zl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Wx}=r;Lh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Dh,Nh),this._renderer.xr.enabled=Uh,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Fn,format:Gn,colorSpace:Gr,depthBuffer:!1},s=Kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(r)),this._blurMaterial=Yx(r,t,e),this._ggxMaterial=qx(r,t,e)}return s}_compileMaterial(t){let e=new pt(new fe,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,s,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($d),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new jt,new be({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy($d),m=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):v===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let A=this._cubeSize;mr(s,v*A,R>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ts||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:x}=this,y=this._sizeLods[n],p=3*y*(n>x-gr?n-x+gr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,mr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,Co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,mr(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,Co)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-gr?s-this._lodMax+gr:0),u=4*(this._cubeSize-h);mr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Co)}};function Xx(i){let t=[],e=[],n=i,s=i-gr+1+kx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,x=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,R=m>2?0:-1,v=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(v,f*u*m);for(let A=0;A<u;A++){let T=h[A*2]*2-1,N=h[A*2+1]*2-1;m===0?Ss.set(1,N,T):m===1?Ss.set(-T,1,-N):m===2?Ss.set(-T,N,1):m===3?Ss.set(-1,N,-T):m===4?Ss.set(-T,-1,N):Ss.set(T,N,-1),Ss.toArray(y,(m*u+A)*f)}}let p=new fe;p.setAttribute("position",new Oe(x,f)),p.setAttribute("outputDirection",new Oe(y,f)),e.push(new pt(p,null)),n>gr&&n--}return{lodMeshes:e,sizeLods:t}}function Kd(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qx(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Yx(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qd(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function jd(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jl=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new jt(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:vi});r.uniforms.tEquirect.value=e;let o=new pt(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=on),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Zx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===sl||f===rl)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Jl(x.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,x=f===sl||f===rl,y=f===ts||f===vs;if(x||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Zl(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return x&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Zl(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===sl?u.mapping=ts:f===rl&&(u.mapping=vs),u}function l(u){let f=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Jx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function $x(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,x=d.attributes.position,y=0;if(x===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let R=0,v=S.length;R<v;R+=3){let A=S[R+0],T=S[R+1],N=S[R+2];u.push(A,T,T,N,N,A)}}else{let S=x.array;y=x.version;for(let R=0,v=S.length/3-1;R<v;R+=3){let A=R+0,T=R+1,N=R+2;u.push(A,T,T,N,N,A)}}let p=new(x.count>=65535?Kr:$r)(u,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Kx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],R=0;f===!0&&(R=1),x===!0&&(R=2),y===!0&&(R=3);let v=a.attributes.position.count*R,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*A*4*d),N=new Yr(T,v,A,d);N.type=Vn,N.needsUpdate=!0;let g=R*4;for(let w=0;w<d;w++){let P=p[w],O=m[w],L=S[w],C=v*A*4*w;for(let V=0;V<P.count;V++){let W=V*g;f===!0&&(s.fromBufferAttribute(P,V),T[C+W+0]=s.x,T[C+W+1]=s.y,T[C+W+2]=s.z,T[C+W+3]=0),x===!0&&(s.fromBufferAttribute(O,V),T[C+W+4]=s.x,T[C+W+5]=s.y,T[C+W+6]=s.z,T[C+W+7]=0),y===!0&&(s.fromBufferAttribute(L,V),T[C+W+8]=s.x,T[C+W+9]=s.y,T[C+W+10]=s.z,T[C+W+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new vt(v,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function t_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var e_={[ah]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function n_(i,t,e,n,s,r){let o=new mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pt(c,h),u=new hr(-1,1,1,-1,0,1),f=null,x=null,y=!1,p,m=null,S=[],R=!1;this.setSize=function(v,A){o.setSize(v,A),a!==null&&a.setSize(v,A),l!==null&&l.setSize(v,A);for(let T=0;T<S.length;T++){let N=S[T];N.setSize&&N.setSize(v,A)}},this.setEffects=function(v){S=v,R=S.length>0&&S[0].isRenderPass===!0;let A=o.width,T=o.height;S.length>0&&a===null&&(a=new mn(A,T,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new mn(A,T,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<S.length;N++){let g=S[N];g.setSize&&g.setSize(A,T)}},this.begin=function(v,A){if(y||v.toneMapping===oi&&S.length===0)return!1;if(m=A,A!==null){let T=A.width,N=A.height;(o.width!==T||o.height!==N)&&this.setSize(T,N)}return R===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=oi,!0},this.hasRenderPass=function(){return R},this.end=function(v,A){v.toneMapping=p,y=!0;let T=o,N=a;for(let g=0;g<S.length;g++){let M=S[g];M.enabled!==!1&&(M.render(v,N,T,A),M.needsSwap!==!1&&(T=N,N=N===a?l:a))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,h.defines={},he.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let g=e_[x];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vf=new Mn,Bh=new Zi(1,1),Mf=new Yr,Sf=new Da,Ef=new no,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ql(i,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function a_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),Ke(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),Ke(e,n)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),Ke(e,n)}}function h_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function p_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function __(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bh.compareFunction=e.isReversedDepthBuffer()?Xl:Wl,r=Bh):r=vf,e.setTexture2D(t||r,s)}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ef,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function S_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return M_}}function E_(i,t){i.uniform1fv(this.addr,t)}function b_(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function T_(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function w_(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function A_(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R_(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C_(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P_(i,t){i.uniform1iv(this.addr,t)}function I_(i,t){i.uniform2iv(this.addr,t)}function L_(i,t){i.uniform3iv(this.addr,t)}function D_(i,t){i.uniform4iv(this.addr,t)}function N_(i,t){i.uniform1uiv(this.addr,t)}function U_(i,t){i.uniform2uiv(this.addr,t)}function F_(i,t){i.uniform3uiv(this.addr,t)}function O_(i,t){i.uniform4uiv(this.addr,t)}function B_(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bh:o=vf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function H_(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sf,r[o])}function z_(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ef,r[o])}function k_(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mf,r[o])}function V_(i){switch(i){case 5126:return E_;case 35664:return b_;case 35665:return T_;case 35666:return w_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}var Hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S_(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V_(e.type)}},kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function of(i,t){i.seq.push(t),i.map[t.id]=t}function G_(i,t,e){let n=i.name,s=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),o=Fh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){of(e,c===void 0?new Hh(a,i,t):new zh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new kh(a),of(e,d)),e=d}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);G_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function af(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var W_=37297,X_=0;function q_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var lf=new ee;function Y_(i){he._getMatrix(lf,he.workingColorSpace,i);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+q_(i.getShaderSource(t),a)}else return r}function Z_(i,t){let e=Y_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var J_={[ah]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[yo]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function $_(i,t){let e=J_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yl=new U;function K_(){he.getLuminanceCoefficients(Yl);let i=Yl.x.toFixed(4),t=Yl.y.toFixed(4),e=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function j_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ty(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(i){return i.replace(ey,iy)}var ny=new Map;function iy(i,t){let e=re[t];if(e===void 0){let n=ny.get(t);if(n!==void 0)e=re[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vh(e)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(sy,ry)}function ry(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var oy={[_s]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function ay(i){return oy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ly={[ts]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ly[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var hy={[vs]:"ENVMAP_MODE_REFRACTION"};function uy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[wd]:"ENVMAP_BLENDING_ADD"};function fy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dy[i.combine]||"ENVMAP_BLENDING_NONE"}function py(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function my(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ay(e),c=cy(e),h=uy(e),d=fy(e),u=py(e),f=Q_(e),x=j_(r),y=s.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Io).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?re.tonemapping_pars_fragment:"",e.toneMapping!==oi?$_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Vh(o),o=hf(o,e),o=uf(o,e),a=Vh(a),a=hf(a,e),a=uf(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=S+p+o,v=S+m+a,A=af(s,s.VERTEX_SHADER,R),T=af(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",L=s.getShaderInfoLog(A)||"",C=s.getShaderInfoLog(T)||"",V=O.trim(),W=L.trim(),z=C.trim(),K=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,T);else{let b=cf(s,A,"vertex"),F=cf(s,T,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+b+`
`+F)}else V!==""?Kt("WebGLProgram: Program Info Log:",V):(W===""||z==="")&&(Z=!1);Z&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:W,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(T),g=new xr(s,y),M=ty(s,y)}let g;this.getUniforms=function(){return g===void 0&&N(this),g};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,W_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var gy=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wh(t),e.set(t,n)),n}},Wh=class{constructor(t){this.id=gy++,this.code=t,this.usedTimes=0}};function xy(i){return i===is||i===wo||i===Ao}function _y(i,t,e,n,s,r){let o=new Zr,a=new Gh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,M,w,P,O,L){let C=P.fog,V=O.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,K=t.get(g.envMap||W,z),Z=K&&K.mapping===vo?K.image.height:null,b=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Kt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let F=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,J=F!==void 0?F.length:0,k=0;V.morphAttributes.position!==void 0&&(k=1),V.morphAttributes.normal!==void 0&&(k=2),V.morphAttributes.color!==void 0&&(k=3);let et,lt,H,I;if(b){let Ce=Si[b];et=Ce.vertexShader,lt=Ce.fragmentShader}else{et=g.vertexShader,lt=g.fragmentShader;let Ce=a.getVertexShaderStage(g),ge=a.getFragmentShaderStage(g);a.update(g,Ce,ge),H=Ce.id,I=ge.id}let B=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ut=O.isInstancedMesh===!0,tt=O.isBatchedMesh===!0,it=!!g.map,ot=!!g.matcap,G=!!K,X=!!g.aoMap,nt=!!g.lightMap,ct=!!g.bumpMap&&g.wireframe===!1,mt=!!g.normalMap,It=!!g.displacementMap,St=!!g.emissiveMap,Bt=!!g.metalnessMap,Gt=!!g.roughnessMap,q=g.anisotropy>0,me=g.clearcoat>0,oe=g.dispersion>0,D=g.retroreflectivity>0,_=g.iridescence>0,Q=g.sheen>0,at=g.transmission>0,dt=q&&!!g.anisotropyMap,Mt=me&&!!g.clearcoatMap,Et=me&&!!g.clearcoatNormalMap,ft=me&&!!g.clearcoatRoughnessMap,xt=_&&!!g.iridescenceMap,bt=_&&!!g.iridescenceThicknessMap,Xt=Q&&!!g.sheenColorMap,Ct=Q&&!!g.sheenRoughnessMap,Tt=!!g.specularMap,qt=!!g.specularColorMap,Zt=!!g.specularIntensityMap,ie=at&&!!g.transmissionMap,$=at&&!!g.thicknessMap,wt=!!g.gradientMap,gt=!!g.alphaMap,At=g.alphaTest>0,Nt=!!g.alphaHash,yt=!!g.extensions,Yt=oi;g.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let Vt={shaderID:b,shaderType:g.type,shaderName:g.name,vertexShader:et,fragmentShader:lt,defines:g.defines,customVertexShaderID:H,customFragmentShaderID:I,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:tt,batchingColor:tt&&O._colorsTexture!==null,instancing:ut,instancingColor:ut&&O.instanceColor!==null,instancingMorph:ut&&O.morphTexture!==null,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:it,matcap:ot,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Z,aoMap:X,lightMap:nt,bumpMap:ct,normalMap:mt,displacementMap:It,emissiveMap:St,normalMapObjectSpace:mt&&g.normalMapType===Cd,normalMapTangentSpace:mt&&g.normalMapType===Ro,packedNormalMap:mt&&g.normalMapType===Ro&&xy(g.normalMap.format),metalnessMap:Bt,roughnessMap:Gt,anisotropy:q,anisotropyMap:dt,clearcoat:me,clearcoatMap:Mt,clearcoatNormalMap:Et,clearcoatRoughnessMap:ft,dispersion:oe,retroreflection:D,iridescence:_,iridescenceMap:xt,iridescenceThicknessMap:bt,sheen:Q,sheenColorMap:Xt,sheenRoughnessMap:Ct,specularMap:Tt,specularColorMap:qt,specularIntensityMap:Zt,transmission:at,transmissionMap:ie,thicknessMap:$,gradientMap:wt,opaque:g.transparent===!1&&g.blending===dr&&g.alphaToCoverage===!1,alphaMap:gt,alphaTest:At,alphaHash:Nt,combine:g.combine,mapUv:it&&x(g.map.channel),aoMapUv:X&&x(g.aoMap.channel),lightMapUv:nt&&x(g.lightMap.channel),bumpMapUv:ct&&x(g.bumpMap.channel),normalMapUv:mt&&x(g.normalMap.channel),displacementMapUv:It&&x(g.displacementMap.channel),emissiveMapUv:St&&x(g.emissiveMap.channel),metalnessMapUv:Bt&&x(g.metalnessMap.channel),roughnessMapUv:Gt&&x(g.roughnessMap.channel),anisotropyMapUv:dt&&x(g.anisotropyMap.channel),clearcoatMapUv:Mt&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(g.sheenRoughnessMap.channel),specularMapUv:Tt&&x(g.specularMap.channel),specularColorMapUv:qt&&x(g.specularColorMap.channel),specularIntensityMapUv:Zt&&x(g.specularIntensityMap.channel),transmissionMapUv:ie&&x(g.transmissionMap.channel),thicknessMapUv:$&&x(g.thicknessMap.channel),alphaMapUv:gt&&x(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(mt||q),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(it||gt),fog:!!C,useFog:g.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:k,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:it&&g.map.isVideoTexture===!0&&he.getTransfer(g.map.colorSpace)===_e,decodeVideoTextureEmissive:St&&g.emissiveMap.isVideoTexture===!0&&he.getTransfer(g.emissiveMap.colorSpace)===_e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ie,flipSided:g.side===Je,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:yt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&g.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let w in g.defines)M.push(w),M.push(g.defines[w]);return g.isRawShaderMaterial===!1&&(m(M,g),S(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function m(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function S(g,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function R(g){let M=f[g.type],w;if(M){let P=Si[M];w=Yd.clone(P.uniforms)}else w=g.uniforms;return w}function v(g,M){let w=h.get(M);return w!==void 0?++w.usedTimes:(w=new my(i,M,g,s),c.push(w),h.set(M,w)),w}function A(g){if(--g.usedTimes===0){let M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){a.remove(g)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:R,acquireProgram:v,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:N}}function yy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,x,y,p,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=x,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=p,S.group=m),t++,S}function l(u,f,x,y,p,m,S){S.reversedDepth===!0&&(p=-p);let R=a(u,f,x,y,p,m);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):e.push(R)}function c(u,f,x,y,p,m){let S=a(u,f,x,y,p,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||vy),n.length>1&&n.sort(f||pf),s.length>1&&s.sort(f||pf)}function d(){for(let u=t,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function My(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mf,i.set(n,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var by=0;function Ty(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wy(i){let t=new Sy,e=Ey(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,x=0,y=0,p=0,m=0,S=0,R=0,v=0,A=0,T=0,N=0,g=0,M=0,w=0;c.sort(Ty);for(let O=0,L=c.length;O<L;O++){let C=c[O],V=C.color,W=C.intensity,z=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===is?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=V.r*W,d+=V.g*W,u+=V.b*W;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(C.sh.coefficients[Z],W);w++}else if(C.isSunLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let b=C.shadow,F=e.get(C);F.shadowIntensity=b.intensity,F.shadowBias=b.bias,F.shadowNormalBias=b.normalBias,F.shadowRadius=b.radius,F.shadowMapSize.copy(b.mapSize).multiply(b.getFrameExtents()),n.sunShadow[x]=F,n.sunShadowMap[x]=K;let J=b.getViewportCount();for(let k=0;k<J;k++)n.sunShadowMatrix[y+k]=b.getMatrix(k),n.sunShadowCascade[y+k]=b._cascadeData[k];y+=J,x++}n.sun[f]=Z,f++}else if(C.isDirectionalLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let b=C.shadow,F=e.get(C);F.shadowIntensity=b.intensity,F.shadowBias=b.bias,F.shadowNormalBias=b.normalBias,F.shadowRadius=b.radius,F.shadowMapSize=b.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=Z,p++}else if(C.isSpotLight){let Z=t.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(V).multiplyScalar(W),Z.distance=z,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,n.spot[S]=Z;let b=C.shadow;if(C.map&&(n.spotLightMap[g]=C.map,g++,b.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[S]=b.matrix,C.castShadow){let F=e.get(C);F.shadowIntensity=b.intensity,F.shadowBias=b.bias,F.shadowNormalBias=b.normalBias,F.shadowRadius=b.radius,F.shadowMapSize=b.mapSize,n.spotShadow[S]=F,n.spotShadowMap[S]=K,N++}S++}else if(C.isRectAreaLight){let Z=t.get(C);Z.color.copy(V).multiplyScalar(W),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),n.rectArea[R]=Z,R++}else if(C.isPointLight){let Z=t.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){let b=C.shadow,F=e.get(C);F.shadowIntensity=b.intensity,F.shadowBias=b.bias,F.shadowNormalBias=b.normalBias,F.shadowRadius=b.radius,F.shadowMapSize=b.mapSize,F.shadowCameraNear=b.camera.near,F.shadowCameraFar=b.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=Z,m++}else if(C.isHemisphereLight){let Z=t.get(C);Z.skyColor.copy(C.color).multiplyScalar(W),Z.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[v]=Z,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==S||P.rectAreaLength!==R||P.hemiLength!==v||P.numSunShadows!==x||P.numDirectionalShadows!==A||P.numPointShadows!==T||P.numSpotShadows!==N||P.numSpotMaps!==g||P.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=R,n.point.length=m,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+g-M,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=S,P.rectAreaLength=R,P.hemiLength=v,P.numSunShadows=x,P.numDirectionalShadows=A,P.numPointShadows=T,P.numSpotShadows=N,P.numSpotMaps=g,P.numLightProbes=w,n.version=by++)}function l(c,h){let d=0,u=0,f=0,x=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let v=c[S];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(v.isSpotLight){let A=n.spot[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),x++}else if(v.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function gf(i){let t=new wy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ay(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gf(i),t.set(s,[a])):r>=o.length?(a=new gf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Py=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Iy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],xf=new ae,Po=new U,Oh=new U;function Ly(i,t,e){let n=new sr,s=new vt,r=new vt,o=new ye,a=new Ga,l=new Wa,c={},h=e.maxTextureSize,d={[ji]:Je,[Je]:ji,[Ie]:Ie},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new fe;x.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pt(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let m=this.type;this.render=function(T,N,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===od&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let M=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=m!==this.type;L&&N.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(V=>V.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,V=T.length;C<V;C++){let W=T[C],z=W.shadow;if(z===void 0){Kt("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ur){if(W.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new mn(s.x,s.y,{format:is,type:Fn,minFilter:on,magFilter:on,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new Zi(s.x,s.y,Vn),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=xi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en}else W.isPointLight?(z.map=new Jl(s.x),z.map.depthTexture=new Fa(s.x,ai)):(z.map=new mn(s.x,s.y),z.map.depthTexture=new Zi(s.x,s.y,ai)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=xi,this.type===_s?(z.map.depthTexture.compareFunction=Z?Xl:Wl,z.map.depthTexture.minFilter=on,z.map.depthTexture.magFilter=on):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let b=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();W.isPointLight!==!0&&z.updateMatrices(W,g);for(let F=0;F<b;F++){let J=z.getCamera(F);if(W.isPointLight){let k=z.camera,et=z.matrix,lt=W.distance||k.far;lt!==k.far&&(k.far=lt,k.updateProjectionMatrix()),Po.setFromMatrixPosition(W.matrixWorld),k.position.copy(Po),Oh.copy(k.position),Oh.add(Py[F]),k.up.copy(Iy[F]),k.lookAt(Oh),k.updateMatrixWorld(),et.makeTranslation(-Po.x,-Po.y,-Po.z),xf.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z._frustum.setFromProjectionMatrix(xf,k.coordinateSystem,k.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,F),i.clear();else{F===0&&(i.setRenderTarget(z.map),i.clear());let k=z.getViewport(F);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),O.viewport(o)}n=z.getFrustum(F),v(N,g,J,W,this.type)}z.isPointLightShadow!==!0&&this.type===ur&&S(z,g),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,w,P)};function S(T,N){let g=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new mn(s.x,s.y,{format:is,type:Fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(N,null,g,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(N,null,g,f,y,null)}function R(T,N,g,M){let w=null,P=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)w=P;else if(w=g.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let O=w.uuid,L=N.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let V=C[L];V===void 0&&(V=w.clone(),C[L]=V,N.addEventListener("dispose",A)),w=V}if(w.visible=N.visible,w.wireframe=N.wireframe,M===ur?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:d[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,g.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=i.properties.get(w);O.light=g}return w}function v(T,N,g,M,w){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===ur)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);let L=t.update(T),C=T.material;if(Array.isArray(C)){let V=L.groups;for(let W=0,z=V.length;W<z;W++){let K=V[W],Z=C[K.materialIndex];if(Z&&Z.visible){let b=R(T,Z,M,w);T.onBeforeShadow(i,T,N,g,L,b,K),i.renderBufferDirect(g,null,L,b,T,K),T.onAfterShadow(i,T,N,g,L,b,K)}}}else if(C.visible){let V=R(T,C,M,w);T.onBeforeShadow(i,T,N,g,L,V,null),i.renderBufferDirect(g,null,L,V,T,null),T.onAfterShadow(i,T,N,g,L,V,null)}}let O=T.children;for(let L=0,C=O.length;L<C;L++)v(O[L],N,g,M,w)}function A(T){T.target.removeEventListener("dispose",A);for(let g in c){let M=c[g],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Dy(i,t){function e(){let $=!1,wt=new ye,gt=null,At=new ye(0,0,0,0);return{setMask:function(Nt){gt!==Nt&&!$&&(i.colorMask(Nt,Nt,Nt,Nt),gt=Nt)},setLocked:function(Nt){$=Nt},setClear:function(Nt,yt,Yt,Vt,Ce){Ce===!0&&(Nt*=Vt,yt*=Vt,Yt*=Vt),wt.set(Nt,yt,Yt,Vt),At.equals(wt)===!1&&(i.clearColor(Nt,yt,Yt,Vt),At.copy(wt))},reset:function(){$=!1,gt=null,At.set(-1,0,0,0)}}}function n(){let $=!1,wt=!1,gt=null,At=null,Nt=null;return{setReversed:function(yt){if(wt!==yt){let Yt=t.get("EXT_clip_control");yt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),wt=yt;let Vt=Nt;Nt=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(yt){yt?B(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(yt){gt!==yt&&!$&&(i.depthMask(yt),gt=yt)},setFunc:function(yt){if(wt&&(yt=zd[yt]),At!==yt){switch(yt){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=yt}},setLocked:function(yt){$=yt},setClear:function(yt){Nt!==yt&&(Nt=yt,wt&&(yt=1-yt),i.clearDepth(yt))},reset:function(){$=!1,gt=null,At=null,Nt=null,wt=!1}}}function s(){let $=!1,wt=null,gt=null,At=null,Nt=null,yt=null,Yt=null,Vt=null,Ce=null;return{setTest:function(ge){$||(ge?B(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ge){wt!==ge&&!$&&(i.stencilMask(ge),wt=ge)},setFunc:function(ge,$n,ui){(gt!==ge||At!==$n||Nt!==ui)&&(i.stencilFunc(ge,$n,ui),gt=ge,At=$n,Nt=ui)},setOp:function(ge,$n,ui){(yt!==ge||Yt!==$n||Vt!==ui)&&(i.stencilOp(ge,$n,ui),yt=ge,Yt=$n,Vt=ui)},setLocked:function(ge){$=ge},setClear:function(ge){Ce!==ge&&(i.clearStencil(ge),Ce=ge)},reset:function(){$=!1,wt=null,gt=null,At=null,Nt=null,yt=null,Yt=null,Vt=null,Ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],y=null,p=!1,m=null,S=null,R=null,v=null,A=null,T=null,N=null,g=new te(0,0,0),M=0,w=!1,P=null,O=null,L=null,C=null,V=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let b=null,F={},J=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),et=new ye().fromArray(J),lt=new ye().fromArray(k);function H($,wt,gt,At){let Nt=new Uint8Array(4),yt=i.createTexture();i.bindTexture($,yt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<gt;Yt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(wt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return yt}let I={};I[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc(js),ct(!1),mt(nh),B(i.CULL_FACE),X(vi);function B($){h[$]!==!0&&(i.enable($),h[$]=!0)}function j($){h[$]!==!1&&(i.disable($),h[$]=!1)}function ut($,wt){return u[$]!==wt?(i.bindFramebuffer($,wt),u[$]=wt,$===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),$===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function tt($,wt){let gt=x,At=!1;if($){gt=f.get(wt),gt===void 0&&(gt=[],f.set(wt,gt));let Nt=$.textures;if(gt.length!==Nt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Yt=Nt.length;yt<Yt;yt++)gt[yt]=i.COLOR_ATTACHMENT0+yt;gt.length=Nt.length,At=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,At=!0);At&&i.drawBuffers(gt)}function it($){return y!==$?(i.useProgram($),y=$,!0):!1}let ot={[ys]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};ot[hd]=i.MIN,ot[ud]=i.MAX;let G={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function X($,wt,gt,At,Nt,yt,Yt,Vt,Ce,ge){if($===vi){p===!0&&(j(i.BLEND),p=!1);return}if(p===!1&&(B(i.BLEND),p=!0),$!==ad){if($!==m||ge!==w){if((S!==ys||A!==ys)&&(i.blendEquation(i.FUNC_ADD),S=ys,A=ys),ge)switch($){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ve:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",$);break}else switch($){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ve:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",$);break}R=null,v=null,T=null,N=null,g.set(0,0,0),M=0,m=$,w=ge}return}Nt=Nt||wt,yt=yt||gt,Yt=Yt||At,(wt!==S||Nt!==A)&&(i.blendEquationSeparate(ot[wt],ot[Nt]),S=wt,A=Nt),(gt!==R||At!==v||yt!==T||Yt!==N)&&(i.blendFuncSeparate(G[gt],G[At],G[yt],G[Yt]),R=gt,v=At,T=yt,N=Yt),(Vt.equals(g)===!1||Ce!==M)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ce),g.copy(Vt),M=Ce),m=$,w=!1}function nt($,wt){$.side===Ie?j(i.CULL_FACE):B(i.CULL_FACE);let gt=$.side===Je;wt&&(gt=!gt),ct(gt),$.blending===dr&&$.transparent===!1?X(vi):X($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let At=$.stencilWrite;a.setTest(At),At&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),St($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct($){P!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),P=$)}function mt($){$!==sd?(B(i.CULL_FACE),$!==O&&($===nh?i.cullFace(i.BACK):$===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),O=$}function It($){$!==L&&(z&&i.lineWidth($),L=$)}function St($,wt,gt){$?(B(i.POLYGON_OFFSET_FILL),(C!==wt||V!==gt)&&(C=wt,V=gt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,gt))):j(i.POLYGON_OFFSET_FILL)}function Bt($){$?B(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Gt($){$===void 0&&($=i.TEXTURE0+W-1),b!==$&&(i.activeTexture($),b=$)}function q($,wt,gt){gt===void 0&&(b===null?gt=i.TEXTURE0+W-1:gt=b);let At=F[gt];At===void 0&&(At={type:void 0,texture:void 0},F[gt]=At),(At.type!==$||At.texture!==wt)&&(b!==gt&&(i.activeTexture(gt),b=gt),i.bindTexture($,wt||I[$]),At.type=$,At.texture=wt)}function me(){let $=F[b];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function D(){try{i.compressedTexImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function _(){try{i.texSubImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function Q(){try{i.texSubImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function Mt(){try{i.texStorage2D(...arguments)}catch($){$t("WebGLState:",$)}}function Et(){try{i.texStorage3D(...arguments)}catch($){$t("WebGLState:",$)}}function ft(){try{i.texImage2D(...arguments)}catch($){$t("WebGLState:",$)}}function xt(){try{i.texImage3D(...arguments)}catch($){$t("WebGLState:",$)}}function bt($){return d[$]!==void 0?d[$]:i.getParameter($)}function Xt($,wt){d[$]!==wt&&(i.pixelStorei($,wt),d[$]=wt)}function Ct($){et.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),et.copy($))}function Tt($){lt.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),lt.copy($))}function qt($,wt){let gt=c.get(wt);gt===void 0&&(gt=new WeakMap,c.set(wt,gt));let At=gt.get($);At===void 0&&(At=i.getUniformBlockIndex(wt,$.name),gt.set($,At))}function Zt($,wt){let At=c.get(wt).get($);l.get(wt)!==At&&(i.uniformBlockBinding(wt,At,$.__bindingPointIndex),l.set(wt,At))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},b=null,F={},u={},f=new WeakMap,x=[],y=null,p=!1,m=null,S=null,R=null,v=null,A=null,T=null,N=null,g=new te(0,0,0),M=0,w=!1,P=null,O=null,L=null,C=null,V=null,et.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:j,bindFramebuffer:ut,drawBuffers:tt,useProgram:it,setBlending:X,setMaterial:nt,setFlipSided:ct,setCullFace:mt,setLineWidth:It,setPolygonOffset:St,setScissorTest:Bt,activeTexture:Gt,bindTexture:q,unbindTexture:me,compressedTexImage2D:oe,compressedTexImage3D:D,texImage2D:ft,texImage3D:xt,pixelStorei:Xt,getParameter:bt,updateUBOMapping:qt,uniformBlockBinding:Zt,texStorage2D:Mt,texStorage3D:Et,texSubImage2D:_,texSubImage3D:Q,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Ct,viewport:Tt,reset:ie}}function Ny(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,_){return x?new OffscreenCanvas(D,_):Xr("canvas")}function p(D,_,Q){let at=1,dt=oe(D);if((dt.width>Q||dt.height>Q)&&(at=Q/Math.max(dt.width,dt.height)),at<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Mt=Math.floor(at*dt.width),Et=Math.floor(at*dt.height);u===void 0&&(u=y(Mt,Et));let ft=_?y(Mt,Et):u;return ft.width=Mt,ft.height=Et,ft.getContext("2d").drawImage(D,0,0,Mt,Et),Kt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Mt+"x"+Et+")."),ft}else return"data"in D&&Kt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),D;return D}function m(D){return D.generateMipmaps}function S(D){i.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,_,Q,at,dt,Mt=!1){if(D!==null){if(i[D]!==void 0)return i[D];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Et;at&&(Et=t.get("EXT_texture_norm16"),Et||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=_;if(_===i.RED&&(Q===i.FLOAT&&(ft=i.R32F),Q===i.HALF_FLOAT&&(ft=i.R16F),Q===i.UNSIGNED_BYTE&&(ft=i.R8),Q===i.UNSIGNED_SHORT&&Et&&(ft=Et.R16_EXT),Q===i.SHORT&&Et&&(ft=Et.R16_SNORM_EXT)),_===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.R8UI),Q===i.UNSIGNED_SHORT&&(ft=i.R16UI),Q===i.UNSIGNED_INT&&(ft=i.R32UI),Q===i.BYTE&&(ft=i.R8I),Q===i.SHORT&&(ft=i.R16I),Q===i.INT&&(ft=i.R32I)),_===i.RG&&(Q===i.FLOAT&&(ft=i.RG32F),Q===i.HALF_FLOAT&&(ft=i.RG16F),Q===i.UNSIGNED_BYTE&&(ft=i.RG8),Q===i.UNSIGNED_SHORT&&Et&&(ft=Et.RG16_EXT),Q===i.SHORT&&Et&&(ft=Et.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RG16UI),Q===i.UNSIGNED_INT&&(ft=i.RG32UI),Q===i.BYTE&&(ft=i.RG8I),Q===i.SHORT&&(ft=i.RG16I),Q===i.INT&&(ft=i.RG32I)),_===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),Q===i.UNSIGNED_INT&&(ft=i.RGB32UI),Q===i.BYTE&&(ft=i.RGB8I),Q===i.SHORT&&(ft=i.RGB16I),Q===i.INT&&(ft=i.RGB32I)),_===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ft=i.RGBA32UI),Q===i.BYTE&&(ft=i.RGBA8I),Q===i.SHORT&&(ft=i.RGBA16I),Q===i.INT&&(ft=i.RGBA32I)),_===i.RGB&&(Q===i.UNSIGNED_SHORT&&Et&&(ft=Et.RGB16_EXT),Q===i.SHORT&&Et&&(ft=Et.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),_===i.RGBA){let xt=Mt?Wr:he.getTransfer(dt);Q===i.FLOAT&&(ft=i.RGBA32F),Q===i.HALF_FLOAT&&(ft=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ft=xt===_e?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Et&&(ft=Et.RGBA16_EXT),Q===i.SHORT&&Et&&(ft=Et.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function A(D,_){let Q;return D?_===null||_===ai||_===pr?Q=i.DEPTH24_STENCIL8:_===Vn?Q=i.DEPTH32F_STENCIL8:_===fr&&(Q=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ai||_===pr?Q=i.DEPTH_COMPONENT24:_===Vn?Q=i.DEPTH_COMPONENT32F:_===fr&&(Q=i.DEPTH_COMPONENT16),Q}function T(D,_){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function N(D){let _=D.target;_.removeEventListener("dispose",N),M(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function g(D){let _=D.target;_.removeEventListener("dispose",g),P(_)}function M(D){let _=n.get(D);if(_.__webglInit===void 0)return;let Q=D.source,at=f.get(Q);if(at){let dt=at[_.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(D),Object.keys(at).length===0&&f.delete(Q)}n.remove(D)}function w(D){let _=n.get(D);i.deleteTexture(_.__webglTexture);let Q=D.source,at=f.get(Q);delete at[_.__cacheKey],o.memory.textures--}function P(D){let _=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(_.__webglFramebuffer[at]))for(let dt=0;dt<_.__webglFramebuffer[at].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[at][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[at]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[at])}else{if(Array.isArray(_.__webglFramebuffer))for(let at=0;at<_.__webglFramebuffer.length;at++)i.deleteFramebuffer(_.__webglFramebuffer[at]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let at=0;at<_.__webglColorRenderbuffer.length;at++)_.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[at]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Q=D.textures;for(let at=0,dt=Q.length;at<dt;at++){let Mt=n.get(Q[at]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(Q[at])}n.remove(D)}let O=0;function L(){O=0}function C(){return O}function V(D){O=D}function W(){let D=O;return D>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,D}function z(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function K(D,_){let Q=n.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){let at=D.image;if(at===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(Q,D,_);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+_)}function Z(D,_){let Q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){j(Q,D,_);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+_)}function b(D,_){let Q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){j(Q,D,_);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+_)}function F(D,_){let Q=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){ut(Q,D,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+_)}let J={[ei]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},k={[en]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ol]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},et={[Id]:i.NEVER,[Fd]:i.ALWAYS,[Ld]:i.LESS,[Wl]:i.LEQUAL,[Dd]:i.EQUAL,[Xl]:i.GEQUAL,[Nd]:i.GREATER,[Ud]:i.NOTEQUAL};function lt(D,_){if(_.type===Vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===ol||_.magFilter===Mo||_.magFilter===es||_.minFilter===on||_.minFilter===ol||_.minFilter===Mo||_.minFilter===es)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,J[_.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,k[_.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,k[_.minFilter]),_.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Mo&&_.minFilter!==es||_.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function H(D,_){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",N));let at=_.source,dt=f.get(at);dt===void 0&&(dt={},f.set(at,dt));let Mt=z(_);if(Mt!==D.__cacheKey){dt[Mt]===void 0&&(dt[Mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),dt[Mt].usedTimes++;let Et=dt[D.__cacheKey];Et!==void 0&&(dt[D.__cacheKey].usedTimes--,Et.usedTimes===0&&w(_)),D.__cacheKey=Mt,D.__webglTexture=dt[Mt].texture}return Q}function I(D,_,Q){return Math.floor(Math.floor(D/Q)/_)}function B(D,_,Q,at){let Mt=D.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,Q,at,_.data);else{Mt.sort((Xt,Ct)=>Xt.start-Ct.start);let Et=0;for(let Xt=1;Xt<Mt.length;Xt++){let Ct=Mt[Et],Tt=Mt[Xt],qt=Ct.start+Ct.count,Zt=I(Tt.start,_.width,4),ie=I(Ct.start,_.width,4);Tt.start<=qt+1&&Zt===ie&&I(Tt.start+Tt.count-1,_.width,4)===Zt?Ct.count=Math.max(Ct.count,Tt.start+Tt.count-Ct.start):(++Et,Mt[Et]=Tt)}Mt.length=Et+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Xt=0,Ct=Mt.length;Xt<Ct;Xt++){let Tt=Mt[Xt],qt=Math.floor(Tt.start/4),Zt=Math.ceil(Tt.count/4),ie=qt%_.width,$=Math.floor(qt/_.width),wt=Zt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,$),e.texSubImage2D(i.TEXTURE_2D,0,ie,$,wt,gt,Q,at,_.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function j(D,_,Q){let at=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(at=i.TEXTURE_3D);let dt=H(D,_),Mt=_.source;e.bindTexture(at,D.__webglTexture,i.TEXTURE0+Q);let Et=n.get(Mt);if(Mt.version!==Et.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let gt=he.getPrimaries(he.workingColorSpace),At=_.colorSpace===Oi?null:he.getPrimaries(_.colorSpace),Nt=_.colorSpace===Oi||gt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let xt=p(_.image,!1,s.maxTextureSize);xt=me(_,xt);let bt=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type),Ct=v(_.internalFormat,bt,Xt,_.normalized,_.colorSpace,_.isVideoTexture);lt(at,_);let Tt,qt=_.mipmaps,Zt=_.isVideoTexture!==!0,ie=Et.__version===void 0||dt===!0,$=Mt.dataReady,wt=T(_,xt);if(_.isDepthTexture)Ct=A(_.format===ns,_.type),ie&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ct,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,xt.width,xt.height,0,bt,Xt,null));else if(_.isDataTexture)if(qt.length>0){Zt&&ie&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,qt[0].width,qt[0].height);for(let gt=0,At=qt.length;gt<At;gt++)Tt=qt[gt],Zt?$&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Tt.width,Tt.height,bt,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,gt,Ct,Tt.width,Tt.height,0,bt,Xt,Tt.data);_.generateMipmaps=!1}else Zt?(ie&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,xt.width,xt.height),$&&B(_,xt,bt,Xt)):e.texImage2D(i.TEXTURE_2D,0,Ct,xt.width,xt.height,0,bt,Xt,xt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,qt[0].width,qt[0].height,xt.depth);for(let gt=0,At=qt.length;gt<At;gt++)if(Tt=qt[gt],_.format!==Gn)if(bt!==null)if(Zt){if($)if(_.layerUpdates.size>0){let Nt=wh(Tt.width,Tt.height,_.format,_.type);for(let yt of _.layerUpdates){let Yt=Tt.data.subarray(yt*Nt/Tt.data.BYTES_PER_ELEMENT,(yt+1)*Nt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,yt,Tt.width,Tt.height,1,bt,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Tt.width,Tt.height,xt.depth,bt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ct,Tt.width,Tt.height,xt.depth,0,Tt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Tt.width,Tt.height,xt.depth,bt,Xt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ct,Tt.width,Tt.height,xt.depth,0,bt,Xt,Tt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Zt&&ie&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,qt[0].width,qt[0].height);for(let gt=0,At=qt.length;gt<At;gt++)Tt=qt[gt],_.format!==Gn?bt!==null?Zt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ct,Tt.width,Tt.height,0,Tt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?$&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Tt.width,Tt.height,bt,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,gt,Ct,Tt.width,Tt.height,0,bt,Xt,Tt.data)}else if(_.isDataArrayTexture)if(Zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,xt.width,xt.height,xt.depth),$)if(_.layerUpdates.size>0){let gt=wh(xt.width,xt.height,_.format,_.type);for(let At of _.layerUpdates){let Nt=xt.data.subarray(At*gt/xt.data.BYTES_PER_ELEMENT,(At+1)*gt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,xt.width,xt.height,1,bt,Xt,Nt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,bt,Xt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,xt.width,xt.height,xt.depth,0,bt,Xt,xt.data);else if(_.isData3DTexture)Zt?(ie&&e.texStorage3D(i.TEXTURE_3D,wt,Ct,xt.width,xt.height,xt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,bt,Xt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,xt.width,xt.height,xt.depth,0,bt,Xt,xt.data);else if(_.isFramebufferTexture){if(ie)if(Zt)e.texStorage2D(i.TEXTURE_2D,wt,Ct,xt.width,xt.height);else{let gt=xt.width,At=xt.height;for(let Nt=0;Nt<wt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Ct,gt,At,0,bt,Xt,null),gt>>=1,At>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),xt.parentNode!==gt){gt.appendChild(xt),d.add(_),gt.onpaint=At=>{let Nt=At.changedElements;for(let yt of d)Nt.includes(yt.image)&&(yt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{let Nt=i.RGBA,yt=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,yt,Yt,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Zt&&ie){let gt=oe(qt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Ct,gt.width,gt.height)}for(let gt=0,At=qt.length;gt<At;gt++)Tt=qt[gt],Zt?$&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,bt,Xt,Tt):e.texImage2D(i.TEXTURE_2D,gt,Ct,bt,Xt,Tt);_.generateMipmaps=!1}else if(Zt){if(ie){let gt=oe(xt);e.texStorage2D(i.TEXTURE_2D,wt,Ct,gt.width,gt.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Xt,xt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,bt,Xt,xt);m(_)&&S(at),Et.__version=Mt.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function ut(D,_,Q){if(_.image.length!==6)return;let at=H(D,_),dt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Q);let Mt=n.get(dt);if(dt.version!==Mt.__version||at===!0){e.activeTexture(i.TEXTURE0+Q);let Et=he.getPrimaries(he.workingColorSpace),ft=_.colorSpace===Oi?null:he.getPrimaries(_.colorSpace),xt=_.colorSpace===Oi||Et===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let bt=_.isCompressedTexture||_.image[0].isCompressedTexture,Xt=_.image[0]&&_.image[0].isDataTexture,Ct=[];for(let yt=0;yt<6;yt++)!bt&&!Xt?Ct[yt]=p(_.image[yt],!0,s.maxCubemapSize):Ct[yt]=Xt?_.image[yt].image:_.image[yt],Ct[yt]=me(_,Ct[yt]);let Tt=Ct[0],qt=r.convert(_.format,_.colorSpace),Zt=r.convert(_.type),ie=v(_.internalFormat,qt,Zt,_.normalized,_.colorSpace),$=_.isVideoTexture!==!0,wt=Mt.__version===void 0||at===!0,gt=dt.dataReady,At=T(_,Tt);lt(i.TEXTURE_CUBE_MAP,_);let Nt;if(bt){$&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ie,Tt.width,Tt.height);for(let yt=0;yt<6;yt++){Nt=Ct[yt].mipmaps;for(let Yt=0;Yt<Nt.length;Yt++){let Vt=Nt[Yt];_.format!==Gn?qt!==null?$?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,0,0,Vt.width,Vt.height,qt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,ie,Vt.width,Vt.height,0,Vt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,0,0,Vt.width,Vt.height,qt,Zt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,ie,Vt.width,Vt.height,0,qt,Zt,Vt.data)}}}else{if(Nt=_.mipmaps,$&&wt){Nt.length>0&&At++;let yt=oe(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,ie,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Xt){$?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ct[yt].width,Ct[yt].height,qt,Zt,Ct[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,Ct[yt].width,Ct[yt].height,0,qt,Zt,Ct[yt].data);for(let Yt=0;Yt<Nt.length;Yt++){let Ce=Nt[Yt].image[yt].image;$?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,0,0,Ce.width,Ce.height,qt,Zt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,ie,Ce.width,Ce.height,0,qt,Zt,Ce.data)}}else{$?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,qt,Zt,Ct[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,qt,Zt,Ct[yt]);for(let Yt=0;Yt<Nt.length;Yt++){let Vt=Nt[Yt];$?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,0,0,qt,Zt,Vt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,ie,qt,Zt,Vt.image[yt])}}}m(_)&&S(i.TEXTURE_CUBE_MAP),Mt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function tt(D,_,Q,at,dt,Mt){let Et=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),xt=v(Q.internalFormat,Et,ft,Q.normalized,Q.colorSpace),bt=n.get(_),Xt=n.get(Q);if(Xt.__renderTarget=_,!bt.__hasExternalTextures){let Ct=Math.max(1,_.width>>Mt),Tt=Math.max(1,_.height>>Mt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Mt,xt,Ct,Tt,_.depth,0,Et,ft,null):e.texImage2D(dt,Mt,xt,Ct,Tt,0,Et,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,dt,Xt.__webglTexture,0,Bt(_)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,dt,Xt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(D,_,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),_.depthBuffer){let at=_.depthTexture,dt=at&&at.isDepthTexture?at.type:null,Mt=A(_.stencilBuffer,dt),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),Mt,_.width,_.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),Mt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,D)}else{let at=_.textures;for(let dt=0;dt<at.length;dt++){let Mt=at[dt],Et=r.convert(Mt.format,Mt.colorSpace),ft=r.convert(Mt.type),xt=v(Mt.internalFormat,Et,ft,Mt.normalized,Mt.colorSpace);Gt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),xt,_.width,_.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),xt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(D,_,Q){let at=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(_.depthTexture);if(dt.__renderTarget=_,(!dt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),at){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_.depthTexture);let bt=r.convert(_.depthTexture.format),Xt=r.convert(_.depthTexture.type),Ct;_.depthTexture.format===xi?Ct=i.DEPTH_COMPONENT24:_.depthTexture.format===ns&&(Ct=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,_.width,_.height,0,bt,Xt,null)}}else K(_.depthTexture,0);let Mt=dt.__webglTexture,Et=Bt(_),ft=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,xt=_.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)Gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ft,Mt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ft,Mt,0);else if(_.depthTexture.format===ns)Gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ft,Mt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ft,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(D){let _=n.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let at=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),at){let dt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),_.__depthDisposeCallback=dt}_.__boundDepthTexture=at}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(Q)for(let at=0;at<6;at++)ot(_.__webglFramebuffer[at],D,at);else{let at=D.texture.mipmaps;at&&at.length>0?ot(_.__webglFramebuffer[0],D,0):ot(_.__webglFramebuffer,D,0)}else if(Q){_.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[at]),_.__webglDepthbuffer[at]===void 0)_.__webglDepthbuffer[at]=i.createRenderbuffer(),it(_.__webglDepthbuffer[at],D,!1);else{let dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Mt)}}else{let at=D.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,D,!1);else{let dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(D,_,Q){let at=n.get(D);_!==void 0&&tt(at.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&G(D)}function nt(D){let _=D.texture,Q=n.get(D),at=n.get(_);D.addEventListener("dispose",g);let dt=D.textures,Mt=D.isWebGLCubeRenderTarget===!0,Et=dt.length>1;if(Et||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=_.version,o.memory.textures++),Mt){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let xt=0;xt<_.mipmaps.length;xt++)Q.__webglFramebuffer[ft][xt]=i.createFramebuffer()}else Q.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ft=0,xt=dt.length;ft<xt;ft++){let bt=n.get(dt[ft]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Gt(D)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){let xt=dt[ft];Q.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);let bt=r.convert(xt.format,xt.colorSpace),Xt=r.convert(xt.type),Ct=v(xt.internalFormat,bt,Xt,xt.normalized,xt.colorSpace,D.isXRRenderTarget===!0),Tt=Bt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Ct,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),it(Q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)tt(Q.__webglFramebuffer[ft][xt],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else tt(Q.__webglFramebuffer[ft],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,xt=dt.length;ft<xt;ft++){let bt=dt[ft],Xt=n.get(bt),Ct=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Xt.__webglTexture),lt(Ct,bt),tt(Q.__webglFramebuffer,D,bt,i.COLOR_ATTACHMENT0+ft,Ct,0),m(bt)&&S(Ct)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,at.__webglTexture),lt(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)tt(Q.__webglFramebuffer[xt],D,_,i.COLOR_ATTACHMENT0,ft,xt);else tt(Q.__webglFramebuffer,D,_,i.COLOR_ATTACHMENT0,ft,0);m(_)&&S(ft),e.unbindTexture()}D.depthBuffer&&G(D)}function ct(D){let _=D.textures;for(let Q=0,at=_.length;Q<at;Q++){let dt=_[Q];if(m(dt)){let Mt=R(D),Et=n.get(dt).__webglTexture;e.bindTexture(Mt,Et),S(Mt),e.unbindTexture()}}}let mt=[],It=[];function St(D){if(D.samples>0){if(Gt(D)===!1){let _=D.textures,Q=D.width,at=D.height,dt=i.COLOR_BUFFER_BIT,Mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(D),ft=_.length>1;if(ft)for(let bt=0;bt<_.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let xt=D.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let bt=0;bt<_.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);let Xt=n.get(_[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,Q,at,0,0,Q,at,dt,i.NEAREST),l===!0&&(mt.length=0,It.length=0,mt.push(i.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(mt.push(Mt),It.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<_.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[bt]);let Xt=n.get(_[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let _=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Bt(D){return Math.min(s.maxSamples,D.samples)}function Gt(D){let _=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(D){let _=o.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())}function me(D,_){let Q=D.colorSpace,at=D.format,dt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Gr&&Q!==Oi&&(he.getTransfer(Q)===_e?(at!==Gn||dt!==Rn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",Q)),_}function oe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.getTextureUnits=C,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=b,this.setTextureCube=F,this.rebindTextures=X,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Uy(i,t){function e(n,s=Oi){let r,o=he.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===yh)return i.RGB;if(n===Gn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===is)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===So||n===Eo||n===bo||n===To)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===vl||n===Ml||n===Sl||n===wo||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===yl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===El)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===Hl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===Ao||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,y=typeof XRWebGLBinding<"u",p=new Xh,m={},S=e.getContextAttributes(),R=null,v=null,A=[],T=[],N=new vt,g=null,M=null,w=new Ye;w.viewport=new ye;let P=new Ye;P.viewport=new ye;let O=[w,P],L=new nl,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let B=A[I];return B===void 0&&(B=new ir,A[I]=B),B.getTargetRaySpace()},this.getControllerGrip=function(I){let B=A[I];return B===void 0&&(B=new ir,A[I]=B),B.getGripSpace()},this.getHand=function(I){let B=A[I];return B===void 0&&(B=new ir,A[I]=B),B.getHandSpace()};function W(I){let B=T.indexOf(I.inputSource);if(B===-1)return;let j=A[B];j!==void 0&&(j.update(I.inputSource,I.frame,c||o),j.dispatchEvent({type:I.type,data:I.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let I=0;I<A.length;I++){let B=T[I];B!==null&&(T[I]=null,A[I].disconnect(B))}C=null,V=null,p.reset();for(let I in m)delete m[I];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,v=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(N.width,N.height,!1),M!==null){let I=M.camera;I.fov=M.fov,I.zoom=M.zoom,I.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ut=null,tt=null;S.depth&&(tt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=S.stencil?ns:xi,ut=S.stencil?pr:ai);let it={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(it),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new mn(u.textureWidth,u.textureHeight,{format:Gn,type:Rn,depthTexture:new Zi(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new mn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(I){for(let B=0;B<I.removed.length;B++){let j=I.removed[B],ut=T.indexOf(j);ut>=0&&(T[ut]=null,A[ut].disconnect(j))}for(let B=0;B<I.added.length;B++){let j=I.added[B],ut=T.indexOf(j);if(ut===-1){for(let it=0;it<A.length;it++)if(it>=T.length){T.push(j),ut=it;break}else if(T[it]===null){T[it]=j,ut=it;break}if(ut===-1)break}let tt=A[ut];tt&&tt.connect(j)}}let Z=new U,b=new U;function F(I,B,j){Z.setFromMatrixPosition(B.matrixWorld),b.setFromMatrixPosition(j.matrixWorld);let ut=Z.distanceTo(b),tt=B.projectionMatrix.elements,it=j.projectionMatrix.elements,ot=tt[14]/(tt[10]-1),G=tt[14]/(tt[10]+1),X=(tt[9]+1)/tt[5],nt=(tt[9]-1)/tt[5],ct=(tt[8]-1)/tt[0],mt=(it[8]+1)/it[0],It=ot*ct,St=ot*mt,Bt=ut/(-ct+mt),Gt=Bt*-ct;if(B.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Gt),I.translateZ(Bt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),tt[10]===-1)I.projectionMatrix.copy(B.projectionMatrix),I.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let q=ot+Bt,me=G+Bt,oe=It-Gt,D=St+(ut-Gt),_=X*G/me*q,Q=nt*G/me*q;I.projectionMatrix.makePerspective(oe,D,_,Q,q,me),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function J(I,B){B===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(B.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let B=I.near,j=I.far;p.texture!==null&&(p.depthNear>0&&(B=p.depthNear),p.depthFar>0&&(j=p.depthFar)),L.near=P.near=w.near=B,L.far=P.far=w.far=j,(C!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,V=L.far),L.layers.mask=I.layers.mask|6,w.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let ut=I.parent,tt=L.cameras;J(L,ut);for(let it=0;it<tt.length;it++)J(tt[it],ut);tt.length===2?F(L,w,P):L.projectionMatrix.copy(w.projectionMatrix),M===null&&I.isPerspectiveCamera&&(M={camera:I,fov:I.fov,zoom:I.zoom}),k(I,L,ut)};function k(I,B,j){j===null?I.matrix.copy(B.matrixWorld):(I.matrix.copy(j.matrixWorld),I.matrix.invert(),I.matrix.multiply(B.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(B.projectionMatrix),I.projectionMatrixInverse.copy(B.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Pa*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(I){l=I,u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(I){return m[I]};let et=null;function lt(I,B){if(h=B.getViewerPose(c||o),x=B,h!==null){let j=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ut=!1;j.length!==L.cameras.length&&(L.cameras.length=0,ut=!0);for(let G=0;G<j.length;G++){let X=j[G],nt=null;if(f!==null)nt=f.getViewport(X);else{let mt=d.getViewSubImage(u,X);nt=mt.viewport,G===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let ct=O[G];ct===void 0&&(ct=new Ye,ct.layers.enable(G),ct.viewport=new ye,O[G]=ct),ct.matrix.fromArray(X.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(X.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(nt.x,nt.y,nt.width,nt.height),G===0&&(L.matrix.copy(ct.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ut===!0&&L.cameras.push(ct)}let tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let G=d.getDepthInformation(j[0]);G&&G.isValid&&G.texture&&p.init(G,s.renderState)}if(tt&&tt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let G=0;G<j.length;G++){let X=j[G].camera;if(X){let nt=m[X];nt||(nt=new io,m[X]=nt);let ct=d.getCameraImage(X);nt.sourceTexture=ct}}}}for(let j=0;j<A.length;j++){let ut=T[j],tt=A[j];ut!==null&&tt!==void 0&&tt.update(ut,B,c||o)}et&&et(I,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),x=null}let H=new _f;H.setAnimationLoop(lt),this.setAnimationLoop=function(I){et=I},this.dispose=function(){}}},By=new ae,bf=new ee;bf.set(-1,0,0,0,1,0,0,0,1);function Hy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Eh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,R,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),R=S.envMap,v=S.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(bf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let T=A.program;n.uniformBlockBinding(v,T)}function c(v,A){let T=s[v.id];T===void 0&&(p(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",S));let N=A.program;n.updateUBOMapping(v,N);let g=t.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function h(v){let A=d();v.__bindingPointIndex=A;let T=i.createBuffer(),N=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],T=v.uniforms,N=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let g=0,M=T.length;g<M;g++){let w=T[g];if(Array.isArray(w))for(let P=0,O=w.length;P<O;P++)f(w[P],g,P,N);else f(w,g,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,A,T,N){if(y(v,A,T,N)===!0){let g=v.__offset,M=v.value;if(Array.isArray(M)){let w=0;for(let P=0;P<M.length;P++){let O=M[P],L=m(O);x(O,v.__data,w),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(w+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function x(v,A,T){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,T)}function y(v,A,T,N){let g=v.value,M=A+"_"+T;if(N[M]===void 0)return typeof g=="number"||typeof g=="boolean"?N[M]=g:ArrayBuffer.isView(g)?N[M]=g.slice():N[M]=g.clone(),!0;{let w=N[M];if(typeof g=="number"||typeof g=="boolean"){if(w!==g)return N[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(w.equals(g)===!1)return w.copy(g),!0}}return!1}function p(v){let A=v.uniforms,T=0,N=16;for(let M=0,w=A.length;M<w;M++){let P=Array.isArray(A[M])?A[M]:[A[M]];for(let O=0,L=P.length;O<L;O++){let C=P[O],V=Array.isArray(C.value)?C.value:[C.value];for(let W=0,z=V.length;W<z;W++){let K=V[W],Z=m(K),b=T%N,F=b%Z.boundary,J=b+F;T+=F,J!==0&&N-J<Z.storage&&(T+=N-J),C.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=Z.storage}}}let g=T%N;return g>0&&(T+=N-g),v.__size=T,v.__cache={},this}function m(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",v),A}function S(v){let A=v.target;A.removeEventListener("dispose",S);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Vy(){return Mi===null&&(Mi=new to(ky,16,16,is,Fn),Mi.name="DFG_LUT",Mi.minFilter=on,Mi.magFilter=on,Mi.wrapS=mi,Mi.wrapT=mi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var $l=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let y=f,p=new Set([fl,dl,ul]),m=new Set([Rn,ai,fr,pr,ll,cl]),S=new Uint32Array(4),R=new Int32Array(4),v=new U,A=null,T=null,N=[],g=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1,O=null,L=null,C=null,V=null;this._outputColorSpace=rn;let W=0,z=0,K=null,Z=-1,b=null,F=new ye,J=new ye,k=null,et=new te(0),lt=0,H=e.width,I=e.height,B=1,j=null,ut=null,tt=new ye(0,0,H,I),it=new ye(0,0,H,I),ot=!1,G=new sr,X=!1,nt=!1,ct=new ae,mt=new U,It=new ye,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Gt(){return K===null?B:1}let q=n;function me(E,Y){return e.getContext(E,Y)}let oe,D,_,Q,at,dt,Mt,Et,ft,xt,bt,Xt,Ct,Tt,qt,Zt,ie,$,wt,gt,At,Nt,yt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",$n,!1),q===null){let Y="webgl2";if(q=me(Y,E),q===null)throw me(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(E){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),$t("WebGLRenderer: "+E.message),E}function Yt(){oe=new Jx(q),oe.init(),At=new Uy(q,oe),D=new Hx(q,oe,t,At),_=new Dy(q,oe),D.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),L=q.createFramebuffer(),C=q.createFramebuffer(),V=q.createFramebuffer(),Q=new Qx(q),at=new yy,dt=new Ny(q,oe,_,at,D,At,Q),Mt=new Zx(w),Et=new t0(q),Nt=new Ox(q,Et),ft=new $x(q,Et,Q,Nt),xt=new t_(q,ft,Et,Nt,Q),$=new jx(q,D,dt),qt=new zx(at),bt=new _y(w,Mt,oe,D,Nt,qt),Xt=new Hy(w,at),Ct=new My,Tt=new Ay(oe),ie=new Fx(w,Mt,_,xt,x,l),Zt=new Ly(w,xt,D),yt=new zy(q,Q,D,_),wt=new Bx(q,oe,Q),gt=new Kx(q,oe,Q),Q.programs=bt.programs,w.capabilities=D,w.extensions=oe,w.properties=at,w.renderLists=Ct,w.shadowMap=Zt,w.state=_,w.info=Q}y!==Rn&&(M=new n_(y,e.width,e.height,a,s,r));let Vt=new qh(w,q);this.xr=Vt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(H,I,!1))},this.getSize=function(E){return E.set(H,I)},this.setSize=function(E,Y,ht=!0){if(Vt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,I=Y,e.width=Math.floor(E*B),e.height=Math.floor(Y*B),ht===!0&&(e.style.width=E+"px",e.style.height=Y+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,E,Y)},this.getDrawingBufferSize=function(E){return E.set(H*B,I*B).floor()},this.setDrawingBufferSize=function(E,Y,ht){H=E,I=Y,B=ht,e.width=Math.floor(E*ht),e.height=Math.floor(Y*ht),this.setViewport(0,0,E,Y)},this.setEffects=function(E){if(y===Rn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let Y=0;Y<E.length;Y++)if(E[Y].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,Y,ht,st){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,Y,ht,st),_.viewport(F.copy(tt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,Y,ht,st){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,Y,ht,st),_.scissor(J.copy(it).multiplyScalar(B).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){_.setScissorTest(ot=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(E=!0,Y=!0,ht=!0){let st=0;if(E){let rt=!1;if(K!==null){let Dt=K.texture.format;rt=p.has(Dt)}if(rt){let Dt=K.texture.type,Ot=m.has(Dt),Lt=ie.getClearColor(),Ht=ie.getClearAlpha(),Wt=Lt.r,se=Lt.g,ce=Lt.b;Ot?(S[0]=Wt,S[1]=se,S[2]=ce,S[3]=Ht,q.clearBufferuiv(q.COLOR,0,S)):(R[0]=Wt,R[1]=se,R[2]=ce,R[3]=Ht,q.clearBufferiv(q.COLOR,0,R))}else st|=q.COLOR_BUFFER_BIT}Y&&(st|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(st|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&q.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),ie.dispose(),Ct.dispose(),Tt.dispose(),at.dispose(),Mt.dispose(),xt.dispose(),Nt.dispose(),yt.dispose(),bt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",gu),Vt.removeEventListener("sessionend",xu),ls.stop()};function Ce(E){E.preventDefault(),qr("WebGLRenderer: Context Lost."),P=!0}function ge(){qr("WebGLRenderer: Context Restored."),P=!1;let E=Q.autoReset,Y=Zt.enabled,ht=Zt.autoUpdate,st=Zt.needsUpdate,rt=Zt.type;Yt(),Q.autoReset=E,Zt.enabled=Y,Zt.autoUpdate=ht,Zt.needsUpdate=st,Zt.type=rt}function $n(E){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ui(E){let Y=E.target;Y.removeEventListener("dispose",ui),Op(Y)}function Op(E){Bp(E),at.remove(E)}function Bp(E){let Y=at.get(E).programs;Y!==void 0&&(Y.forEach(function(ht){bt.releaseProgram(ht)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,Y,ht,st,rt,Dt){Y===null&&(Y=St);let Ot=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Lt=kp(E,Y,ht,st,rt);_.setMaterial(st,Ot);let Ht=ht.index,Wt=1;if(st.wireframe===!0){if(Ht=ft.getWireframeAttribute(ht),Ht===void 0)return;Wt=2}let se=ht.drawRange,ce=ht.attributes.position,zt=se.start*Wt,xe=(se.start+se.count)*Wt;Dt!==null&&(zt=Math.max(zt,Dt.start*Wt),xe=Math.min(xe,(Dt.start+Dt.count)*Wt)),Ht!==null?(zt=Math.max(zt,0),xe=Math.min(xe,Ht.count)):ce!=null&&(zt=Math.max(zt,0),xe=Math.min(xe,ce.count));let Ge=xe-zt;if(Ge<0||Ge===1/0)return;Nt.setup(rt,st,Lt,ht,Ht);let Le,Ae=wt;if(Ht!==null&&(Le=Et.get(Ht),Ae=gt,Ae.setIndex(Le)),rt.isMesh)st.wireframe===!0?(_.setLineWidth(st.wireframeLinewidth*Gt()),Ae.setMode(q.LINES)):Ae.setMode(q.TRIANGLES);else if(rt.isLine){let un=st.linewidth;un===void 0&&(un=1),_.setLineWidth(un*Gt()),rt.isLineSegments?Ae.setMode(q.LINES):rt.isLineLoop?Ae.setMode(q.LINE_LOOP):Ae.setMode(q.LINE_STRIP)}else rt.isPoints?Ae.setMode(q.POINTS):rt.isSprite&&Ae.setMode(q.TRIANGLES);if(rt.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ae.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let un=rt._multiDrawStarts,Ft=rt._multiDrawCounts,yn=rt._multiDrawCount,de=Ht?Et.get(Ht).bytesPerElement:1,Hn=at.get(st).currentProgram.getUniforms();for(let di=0;di<yn;di++)Hn.setValue(q,"_gl_DrawID",di),Ae.render(un[di]/de,Ft[di])}else if(rt.isInstancedMesh)Ae.renderInstances(zt,Ge,rt.count);else if(ht.isInstancedBufferGeometry){let un=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ft=Math.min(ht.instanceCount,un);Ae.renderInstances(zt,Ge,Ft)}else Ae.render(zt,Ge)};function mu(E,Y,ht,st){O!==null&&E.isNodeMaterial&&O.setObject(st,E),X===!0&&qt.setState(E,ht,!1),E.transparent===!0&&E.side===Ie&&E.forceSinglePass===!1?(E.side=Je,E.needsUpdate=!0,Xo(E,Y,st),E.side=ji,E.needsUpdate=!0,Xo(E,Y,st),E.side=Ie):Xo(E,Y,st)}this.compile=function(E,Y,ht=null){ht===null&&(ht=E),O!==null&&O.renderStart(E,Y,ht),T=Tt.get(ht),T.init(Y),g.push(T),ht.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Y.layers)&&(T.pushLight(rt),rt.castShadow&&T.pushShadow(rt))}),E!==ht&&E.traverseVisible(function(rt){rt.isLight&&rt.layers.test(Y.layers)&&(T.pushLight(rt),rt.castShadow&&T.pushShadow(rt))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),nt=this.localClippingEnabled,X=qt.init(this.clippingPlanes,nt),X===!0&&qt.setGlobalState(this.clippingPlanes,Y),O!==null&&Zt.render(T.state.shadowsArray,ht,Y);let st=new Set;return E.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Dt=rt.material;if(Dt)if(Array.isArray(Dt))for(let Ot=0;Ot<Dt.length;Ot++){let Lt=Dt[Ot];mu(Lt,ht,Y,rt),st.add(Lt)}else mu(Dt,ht,Y,rt),st.add(Dt)}),T=g.pop(),O!==null&&O.renderEnd(),st},this.compileAsync=function(E,Y,ht=null){let st=this.compile(E,Y,ht);return new Promise(rt=>{function Dt(){if(st.forEach(function(Ot){let Ht=at.get(Ot).currentProgram;(Ht===void 0||Ht.isReady())&&st.delete(Ot)}),st.size===0){rt(E);return}setTimeout(Dt,10)}oe.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let mc=null;function Hp(E){mc&&mc(E)}function gu(){ls.stop()}function xu(){ls.start()}let ls=new _f;ls.setAnimationLoop(Hp),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(E){mc=E,Vt.setAnimationLoop(E),E===null?ls.stop():ls.start()},Vt.addEventListener("sessionstart",gu),Vt.addEventListener("sessionend",xu),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(E,Y);let ht=Vt.enabled===!0&&Vt.isPresenting===!0,st=M!==null&&(K===null||ht)&&M.begin(w,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Y),Y=Vt.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,Y,K),T=Tt.get(E,g.length),T.init(Y),T.state.textureUnits=dt.getTextureUnits(),g.push(T),ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G.setFromProjectionMatrix(ct,ti,Y.reversedDepth),nt=this.localClippingEnabled,X=qt.init(this.clippingPlanes,nt),A=Ct.get(E,N.length),A.init(),N.push(A),Vt.enabled===!0&&Vt.isPresenting===!0){let Ot=w.xr.getDepthSensingMesh();Ot!==null&&gc(Ot,Y,-1/0,w.sortObjects)}gc(E,Y,0,w.sortObjects),A.finish(),O!==null&&O.updateLights(T.state.lightsArray),w.sortObjects===!0&&A.sort(j,ut),Bt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Bt&&ie.addToRenderList(A,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),X===!0&&qt.beginShadows();let rt=T.state.shadowsArray;if(Zt.render(rt,E,Y),X===!0&&qt.endShadows(),(st&&M.hasRenderPass())===!1){let Ot=A.opaque,Lt=A.transmissive;if(T.setupLights(),Y.isArrayCamera){let Ht=Y.cameras;if(Lt.length>0)for(let Wt=0,se=Ht.length;Wt<se;Wt++){let ce=Ht[Wt];yu(Ot,Lt,E,ce)}Bt&&ie.render(E);for(let Wt=0,se=Ht.length;Wt<se;Wt++){let ce=Ht[Wt];_u(A,E,ce,ce.viewport)}}else Lt.length>0&&yu(Ot,Lt,E,Y),Bt&&ie.render(E),_u(A,E,Y)}K!==null&&z===0&&(dt.updateMultisampleRenderTarget(K),dt.updateRenderTargetMipmap(K)),st&&M.end(w),E.isScene===!0&&E.onAfterRender(w,E,Y),Nt.resetDefaultState(),Z=-1,b=null,g.pop(),g.length>0?(T=g[g.length-1],dt.setTextureUnits(T.state.textureUnits),X===!0&&qt.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,O!==null&&O.renderEnd()};function gc(E,Y,ht,st){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)ht=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(G)){st&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);let Ot=xt.update(E),Lt=E.material;Lt.visible&&A.push(E,Ot,Lt,ht,It.z,null,Y)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(G))){let Ot=xt.update(E),Lt=E.material;if(st&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(Lt)){let Ht=Ot.groups;for(let Wt=0,se=Ht.length;Wt<se;Wt++){let ce=Ht[Wt],zt=Lt[ce.materialIndex];zt&&zt.visible&&A.push(E,Ot,zt,ht,It.z,ce,Y)}}else Lt.visible&&A.push(E,Ot,Lt,ht,It.z,null,Y)}}let Dt=E.children;for(let Ot=0,Lt=Dt.length;Ot<Lt;Ot++)gc(Dt[Ot],Y,ht,st)}function _u(E,Y,ht,st){let{opaque:rt,transmissive:Dt,transparent:Ot}=E;T.setupLightsView(ht),X===!0&&qt.setGlobalState(w.clippingPlanes,ht),st&&_.viewport(F.copy(st)),rt.length>0&&Wo(rt,Y,ht),Dt.length>0&&Wo(Dt,Y,ht),Ot.length>0&&Wo(Ot,Y,ht),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function yu(E,Y,ht,st){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[st.id]===void 0){let zt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[st.id]=new mn(1,1,{generateMipmaps:!0,type:zt?Fn:Rn,minFilter:es,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Dt=T.state.transmissionRenderTarget[st.id],Ot=st.viewport||F;Dt.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);let Lt=w.getRenderTarget(),Ht=w.getActiveCubeFace(),Wt=w.getActiveMipmapLevel();w.setRenderTarget(Dt),w.getClearColor(et),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Bt&&ie.render(ht);let se=w.toneMapping;w.toneMapping=oi;let ce=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),T.setupLightsView(st),X===!0&&qt.setGlobalState(w.clippingPlanes,st),Wo(E,ht,st),dt.updateMultisampleRenderTarget(Dt),dt.updateRenderTargetMipmap(Dt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let xe=0,Ge=Y.length;xe<Ge;xe++){let Le=Y[xe],{object:Ae,geometry:un,material:Ft,group:yn}=Le;if(Ft.side===Ie&&Ae.layers.test(st.layers)){let de=Ft.side;Ft.side=Je,Ft.needsUpdate=!0,vu(Ae,ht,st,un,Ft,yn),Ft.side=de,Ft.needsUpdate=!0,zt=!0}}zt===!0&&(dt.updateMultisampleRenderTarget(Dt),dt.updateRenderTargetMipmap(Dt))}w.setRenderTarget(Lt,Ht,Wt),w.setClearColor(et,lt),ce!==void 0&&(st.viewport=ce),w.toneMapping=se}function Wo(E,Y,ht){let st=Y.isScene===!0?Y.overrideMaterial:null;for(let rt=0,Dt=E.length;rt<Dt;rt++){let Ot=E[rt],{object:Lt,geometry:Ht,group:Wt}=Ot,se=Ot.material;se.allowOverride===!0&&st!==null&&(se=st),Lt.layers.test(ht.layers)&&vu(Lt,Y,ht,Ht,se,Wt)}}function vu(E,Y,ht,st,rt,Dt){O!==null&&rt.isNodeMaterial&&O.setObject(E,rt),E.onBeforeRender(w,Y,ht,st,rt,Dt),E.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),rt.onBeforeRender(w,Y,ht,st,E,Dt),rt.transparent===!0&&rt.side===Ie&&rt.forceSinglePass===!1?(rt.side=Je,rt.needsUpdate=!0,w.renderBufferDirect(ht,Y,st,rt,E,Dt),rt.side=ji,rt.needsUpdate=!0,w.renderBufferDirect(ht,Y,st,rt,E,Dt),rt.side=Ie):w.renderBufferDirect(ht,Y,st,rt,E,Dt),E.onAfterRender(w,Y,ht,st,rt,Dt)}function Xo(E,Y,ht){Y.isScene!==!0&&(Y=St);let st=at.get(E),rt=T.state.lights,Dt=T.state.shadowsArray,Ot=rt.state.version,Lt=bt.getParameters(E,rt.state,Dt,Y,ht,T.state.lightProbeGridArray),Ht=bt.getProgramCacheKey(Lt),Wt=st.programs;st.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Y.environment:null,st.fog=Y.fog;let se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;st.envMap=Mt.get(E.envMap||st.environment,se),st.envMapRotation=st.environment!==null&&E.envMap===null?Y.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",ui),Wt=new Map,st.programs=Wt);let ce=Wt.get(Ht);if(ce!==void 0){if(st.currentProgram===ce&&st.lightsStateVersion===Ot)return Su(E,Lt),ce}else Lt.uniforms=bt.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,ht,Lt),E.onBeforeCompile(Lt,w),ce=bt.acquireProgram(Lt,Ht),Wt.set(Ht,ce),st.uniforms=Lt.uniforms;let zt=st.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=qt.uniform),Su(E,Lt),st.needsLights=Gp(E),st.lightsStateVersion=Ot,st.needsLights&&(zt.ambientLightColor.value=rt.state.ambient,zt.lightProbe.value=rt.state.probe,zt.sunLights.value=rt.state.sun,zt.sunLightShadows.value=rt.state.sunShadow,zt.directionalLights.value=rt.state.directional,zt.directionalLightShadows.value=rt.state.directionalShadow,zt.spotLights.value=rt.state.spot,zt.spotLightShadows.value=rt.state.spotShadow,zt.rectAreaLights.value=rt.state.rectArea,zt.ltc_1.value=rt.state.rectAreaLTC1,zt.ltc_2.value=rt.state.rectAreaLTC2,zt.pointLights.value=rt.state.point,zt.pointLightShadows.value=rt.state.pointShadow,zt.hemisphereLights.value=rt.state.hemi,zt.sunShadowMatrix.value=rt.state.sunShadowMatrix,zt.sunShadowCascade.value=rt.state.sunShadowCascade,zt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,zt.spotLightMatrix.value=rt.state.spotLightMatrix,zt.spotLightMap.value=rt.state.spotLightMap,zt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=T.state.lightProbeGridArray.length>0,st.currentProgram=ce,st.uniformsList=null,ce}function Mu(E){if(E.uniformsList===null){let Y=E.currentProgram.getUniforms();E.uniformsList=xr.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function Su(E,Y){let ht=at.get(E);ht.outputColorSpace=Y.outputColorSpace,ht.batching=Y.batching,ht.batchingColor=Y.batchingColor,ht.instancing=Y.instancing,ht.instancingColor=Y.instancingColor,ht.instancingMorph=Y.instancingMorph,ht.skinning=Y.skinning,ht.morphTargets=Y.morphTargets,ht.morphNormals=Y.morphNormals,ht.morphColors=Y.morphColors,ht.morphTargetsCount=Y.morphTargetsCount,ht.numClippingPlanes=Y.numClippingPlanes,ht.numIntersection=Y.numClipIntersection,ht.vertexAlphas=Y.vertexAlphas,ht.vertexTangents=Y.vertexTangents,ht.toneMapping=Y.toneMapping}function zp(E,Y){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let ht=0,st=E.length;ht<st;ht++){let rt=E[ht];if(rt.texture!==null&&rt.boundingBox.containsPoint(v))return rt}return null}function kp(E,Y,ht,st,rt){Y.isScene!==!0&&(Y=St),dt.resetTextureUnits();let Dt=Y.fog,Ot=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?Y.environment:null,Lt=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:he.workingColorSpace,Ht=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Wt=Mt.get(st.envMap||Ot,Ht),se=st.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ce=!!ht.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),zt=!!ht.morphAttributes.position,xe=!!ht.morphAttributes.normal,Ge=!!ht.morphAttributes.color,Le=oi;st.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=w.toneMapping);let Ae=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,un=Ae!==void 0?Ae.length:0,Ft=at.get(st),yn=T.state.lights;if(X===!0&&(nt===!0||E!==b)){let Pe=E===b&&st.id===Z;qt.setState(st,E,Pe)}let de=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==yn.state.version||Ft.outputColorSpace!==Lt||rt.isBatchedMesh&&Ft.batching===!1||!rt.isBatchedMesh&&Ft.batching===!0||rt.isBatchedMesh&&Ft.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ft.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ft.instancing===!1||!rt.isInstancedMesh&&Ft.instancing===!0||rt.isSkinnedMesh&&Ft.skinning===!1||!rt.isSkinnedMesh&&Ft.skinning===!0||rt.isInstancedMesh&&Ft.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ft.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ft.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ft.instancingMorph===!1&&rt.morphTexture!==null||Ft.envMap!==Wt||st.fog===!0&&Ft.fog!==Dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==qt.numPlanes||Ft.numIntersection!==qt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==ce||Ft.morphTargets!==zt||Ft.morphNormals!==xe||Ft.morphColors!==Ge||Ft.toneMapping!==Le||Ft.morphTargetsCount!==un||!!Ft.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Ft.__version=st.version);let Hn=Ft.currentProgram;de===!0&&(Hn=Xo(st,Y,rt),O&&st.isNodeMaterial&&O.onUpdateProgram(st,Hn,Ft));let di=!1,Hi=!1,Ls=!1,Se=Hn.getUniforms(),ze=Ft.uniforms;if(_.useProgram(Hn.program)&&(di=!0,Hi=!0,Ls=!0),st.id!==Z&&(Z=st.id,Hi=!0),Ft.needsLights){let Pe=zp(T.state.lightProbeGridArray,rt);Ft.lightProbeGrid!==Pe&&(Ft.lightProbeGrid=Pe,Hi=!0)}if(di||b!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(q,"projectionMatrix",E.projectionMatrix),Se.setValue(q,"viewMatrix",E.matrixWorldInverse);let ki=Se.map.cameraPosition;ki!==void 0&&ki.setValue(q,mt.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&Se.setValue(q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(q,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,Hi=!0,Ls=!0)}if(Ft.needsLights&&(yn.state.sunShadowMap.length>0&&Se.setValue(q,"sunShadowMap",yn.state.sunShadowMap,dt),yn.state.directionalShadowMap.length>0&&Se.setValue(q,"directionalShadowMap",yn.state.directionalShadowMap,dt),yn.state.spotShadowMap.length>0&&Se.setValue(q,"spotShadowMap",yn.state.spotShadowMap,dt),yn.state.pointShadowMap.length>0&&Se.setValue(q,"pointShadowMap",yn.state.pointShadowMap,dt)),rt.isSkinnedMesh){Se.setOptional(q,rt,"bindMatrix"),Se.setOptional(q,rt,"bindMatrixInverse");let Pe=rt.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Se.setValue(q,"boneTexture",Pe.boneTexture,dt))}rt.isBatchedMesh&&(Se.setOptional(q,rt,"batchingTexture"),Se.setValue(q,"batchingTexture",rt._matricesTexture,dt),Se.setOptional(q,rt,"batchingIdTexture"),Se.setValue(q,"batchingIdTexture",rt._indirectTexture,dt),Se.setOptional(q,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Se.setValue(q,"batchingColorTexture",rt._colorsTexture,dt));let zi=ht.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&$.update(rt,ht,Hn),(Hi||Ft.receiveShadow!==rt.receiveShadow)&&(Ft.receiveShadow=rt.receiveShadow,Se.setValue(q,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&Y.environment!==null&&(ze.envMapIntensity.value=Y.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=Vy()),Hi){if(Se.setValue(q,"toneMappingExposure",w.toneMappingExposure),Ft.needsLights&&Vp(ze,Ls),Dt&&st.fog===!0&&Xt.refreshFogUniforms(ze,Dt),Xt.refreshMaterialUniforms(ze,st,B,I,T.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.lightProbeGrid){let Pe=Ft.lightProbeGrid;ze.probesSH.value=Pe.texture,ze.probesMin.value.copy(Pe.boundingBox.min),ze.probesMax.value.copy(Pe.boundingBox.max),ze.probesResolution.value.copy(Pe.resolution)}xr.upload(q,Mu(Ft),ze,dt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(xr.upload(q,Mu(Ft),ze,dt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(q,"center",rt.center),Se.setValue(q,"modelViewMatrix",rt.modelViewMatrix),Se.setValue(q,"normalMatrix",rt.normalMatrix),Se.setValue(q,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){let Pe=st.uniformsGroups;for(let ki=0,Ds=Pe.length;ki<Ds;ki++){let bu=Pe[ki];yt.update(bu,Hn),yt.bind(bu,Hn)}}return Hn}function Vp(E,Y){E.ambientLightColor.needsUpdate=Y,E.lightProbe.needsUpdate=Y,E.sunLights.needsUpdate=Y,E.sunLightShadows.needsUpdate=Y,E.directionalLights.needsUpdate=Y,E.directionalLightShadows.needsUpdate=Y,E.pointLights.needsUpdate=Y,E.pointLightShadows.needsUpdate=Y,E.spotLights.needsUpdate=Y,E.spotLightShadows.needsUpdate=Y,E.rectAreaLights.needsUpdate=Y,E.hemisphereLights.needsUpdate=Y}function Gp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,Y,ht){let st=at.get(E);st.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),at.get(E.texture).__webglTexture=Y,at.get(E.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ht,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Y){let ht=at.get(E);ht.__webglFramebuffer=Y,ht.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(E,Y=0,ht=0){K=E,W=Y,z=ht;let st=null,rt=!1,Dt=!1;if(E){let Lt=at.get(E);if(Lt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(q.FRAMEBUFFER,Lt.__webglFramebuffer),F.copy(E.viewport),J.copy(E.scissor),k=E.scissorTest,_.viewport(F),_.scissor(J),_.setScissorTest(k),Z=-1;return}else if(Lt.__webglFramebuffer===void 0)dt.setupRenderTarget(E);else if(Lt.__hasExternalTextures)dt.rebindTextures(E,at.get(E.texture).__webglTexture,at.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(Lt.__boundDepthTexture!==se){if(se!==null&&at.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(E)}}let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);let Wt=at.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?st=Wt[Y][ht]:st=Wt[Y],rt=!0):E.samples>0&&dt.useMultisampledRTT(E)===!1?st=at.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[ht]:st=Wt,F.copy(E.viewport),J.copy(E.scissor),k=E.scissorTest}else F.copy(tt).multiplyScalar(B).floor(),J.copy(it).multiplyScalar(B).floor(),k=ot;if(ht!==0&&(st=L),_.bindFramebuffer(q.FRAMEBUFFER,st)&&_.drawBuffers(E,st),_.viewport(F),_.scissor(J),_.setScissorTest(k),rt){let Lt=at.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,ht)}else if(Dt){let Lt=Y;for(let Ht=0;Ht<E.textures.length;Ht++){let Wt=at.get(E.textures[Ht]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,ht,Lt)}}else if(E!==null&&ht!==0){let Lt=at.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Lt.__webglTexture,ht)}Z=-1};function Eu(E){let Y=at.get(E);return(Y.__readFormat!==E.format||Y.__readType!==E.type)&&(Y.__readFormat=E.format,Y.__readType=E.type,Y.__formatReadable=D.textureFormatReadable(E.format),Y.__typeReadable=D.textureTypeReadable(E.type)),Y}this.readRenderTargetPixels=function(E,Y,ht,st,rt,Dt,Ot,Lt=0){if(!(E&&E.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){_.bindFramebuffer(q.FRAMEBUFFER,Ht);try{let Wt=E.textures[Lt],se=Wt.format,ce=Wt.type;E.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Lt);let zt=Eu(Wt);if(zt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=E.width-st&&ht>=0&&ht<=E.height-rt&&q.readPixels(Y,ht,st,rt,At.convert(se),At.convert(ce),Dt)}finally{let Wt=K!==null?at.get(K).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(E,Y,ht,st,rt,Dt,Ot,Lt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht)if(Y>=0&&Y<=E.width-st&&ht>=0&&ht<=E.height-rt){_.bindFramebuffer(q.FRAMEBUFFER,Ht);let Wt=E.textures[Lt],se=Wt.format,ce=Wt.type;E.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Lt);let zt=Eu(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,xe),q.bufferData(q.PIXEL_PACK_BUFFER,Dt.byteLength,q.STREAM_READ),q.readPixels(Y,ht,st,rt,At.convert(se),At.convert(ce),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Ge=K!==null?at.get(K).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,Ge);let Le=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Hd(q,Le,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,xe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Dt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(xe),q.deleteSync(Le),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Y=null,ht=0){let st=Math.pow(2,-ht),rt=Math.floor(E.image.width*st),Dt=Math.floor(E.image.height*st),Ot=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;dt.setTexture2D(E,0),q.copyTexSubImage2D(q.TEXTURE_2D,ht,0,0,Ot,Lt,rt,Dt),_.unbindTexture()},this.copyTextureToTexture=function(E,Y,ht=null,st=null,rt=0,Dt=0){let Ot,Lt,Ht,Wt,se,ce,zt,xe,Ge,Le=E.isCompressedTexture?E.mipmaps[Dt]:E.image;if(ht!==null)Ot=ht.max.x-ht.min.x,Lt=ht.max.y-ht.min.y,Ht=ht.isBox3?ht.max.z-ht.min.z:1,Wt=ht.min.x,se=ht.min.y,ce=ht.isBox3?ht.min.z:0;else{let ze=Math.pow(2,-rt);Ot=Math.floor(Le.width*ze),Lt=Math.floor(Le.height*ze),E.isDataArrayTexture?Ht=Le.depth:E.isData3DTexture?Ht=Math.floor(Le.depth*ze):Ht=1,Wt=0,se=0,ce=0}st!==null?(zt=st.x,xe=st.y,Ge=st.z):(zt=0,xe=0,Ge=0);let Ae=At.convert(Y.format),un=At.convert(Y.type),Ft;Y.isData3DTexture?(dt.setTexture3D(Y,0),Ft=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(dt.setTexture2DArray(Y,0),Ft=q.TEXTURE_2D_ARRAY):(dt.setTexture2D(Y,0),Ft=q.TEXTURE_2D),_.activeTexture(q.TEXTURE0),_.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);let yn=_.getParameter(q.UNPACK_ROW_LENGTH),de=_.getParameter(q.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(q.UNPACK_SKIP_PIXELS),di=_.getParameter(q.UNPACK_SKIP_ROWS),Hi=_.getParameter(q.UNPACK_SKIP_IMAGES);_.pixelStorei(q.UNPACK_ROW_LENGTH,Le.width),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Le.height),_.pixelStorei(q.UNPACK_SKIP_PIXELS,Wt),_.pixelStorei(q.UNPACK_SKIP_ROWS,se),_.pixelStorei(q.UNPACK_SKIP_IMAGES,ce);let Ls=E.isDataArrayTexture||E.isData3DTexture,Se=Y.isDataArrayTexture||Y.isData3DTexture;if(E.isDepthTexture){let ze=at.get(E),zi=at.get(Y),Pe=at.get(ze.__renderTarget),ki=at.get(zi.__renderTarget);_.bindFramebuffer(q.READ_FRAMEBUFFER,Pe.__webglFramebuffer),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ds=0;Ds<Ht;Ds++)Ls&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(E).__webglTexture,rt,ce+Ds),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,at.get(Y).__webglTexture,Dt,Ge+Ds)),q.blitFramebuffer(Wt,se,Ot,Lt,zt,xe,Ot,Lt,q.DEPTH_BUFFER_BIT,q.NEAREST);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(rt!==0||E.isRenderTargetTexture||at.has(E)){let ze=at.get(E),zi=at.get(Y);_.bindFramebuffer(q.READ_FRAMEBUFFER,C),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,V);for(let Pe=0;Pe<Ht;Pe++)Ls?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ze.__webglTexture,rt,ce+Pe):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ze.__webglTexture,rt),Se?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,zi.__webglTexture,Dt,Ge+Pe):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,zi.__webglTexture,Dt),rt!==0?q.blitFramebuffer(Wt,se,Ot,Lt,zt,xe,Ot,Lt,q.COLOR_BUFFER_BIT,q.NEAREST):Se?q.copyTexSubImage3D(Ft,Dt,zt,xe,Ge+Pe,Wt,se,Ot,Lt):q.copyTexSubImage2D(Ft,Dt,zt,xe,Wt,se,Ot,Lt);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?q.texSubImage3D(Ft,Dt,zt,xe,Ge,Ot,Lt,Ht,Ae,un,Le.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ft,Dt,zt,xe,Ge,Ot,Lt,Ht,Ae,Le.data):q.texSubImage3D(Ft,Dt,zt,xe,Ge,Ot,Lt,Ht,Ae,un,Le):E.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Dt,zt,xe,Ot,Lt,Ae,un,Le.data):E.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Dt,zt,xe,Le.width,Le.height,Ae,Le.data):q.texSubImage2D(q.TEXTURE_2D,Dt,zt,xe,Ot,Lt,Ae,un,Le);_.pixelStorei(q.UNPACK_ROW_LENGTH,yn),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,de),_.pixelStorei(q.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(q.UNPACK_SKIP_ROWS,di),_.pixelStorei(q.UNPACK_SKIP_IMAGES,Hi),Dt===0&&Y.generateMipmaps&&q.generateMipmap(Ft),_.unbindTexture()},this.initRenderTarget=function(E){at.get(E).__webglFramebuffer===void 0&&dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?dt.setTextureCube(E,0):E.isData3DTexture?dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?dt.setTexture2DArray(E,0):dt.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){W=0,z=0,K=null,_.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Tf={ArrowUp:"forward",KeyW:"forward",ArrowDown:"back",KeyS:"back",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"},Lo=56,yr=.14;function wf({canvas:i,held:t,stick:e,isFree:n,onCommand:s,onDrag:r,onMoved:o,blocked:a,onKey:l,repeat:c=()=>!0}){let h=document.body,d=document.getElementById("stick"),u=document.getElementById("knob"),f=g=>g.target&&/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(g.target.tagName)&&g.target.closest("#menu"),x=()=>{for(let g in t)t[g]=!1;e.x=0,e.y=0};window.addEventListener("keydown",g=>{if(g.altKey||g.ctrlKey||g.metaKey)return;if(l(g)){g.preventDefault();return}if(f(g)||a())return;let M=Tf[g.code];M&&(g.preventDefault(),o(),n()?t[M]=!0:(!g.repeat||c())&&s(M))}),window.addEventListener("keyup",g=>{let M=Tf[g.code];M&&(t[M]=!1)}),window.addEventListener("blur",x),document.addEventListener("visibilitychange",()=>{document.hidden&&x()}),window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&h.classList.add("touch");let p=null,m=[0,0],S=null,R=0,v=g=>{let M=i.getBoundingClientRect();return g.clientX-M.left<M.width*.5&&g.clientY-M.top>M.height*.4},A=(g,M)=>{let w=i.getBoundingClientRect();d.style.left=`${g-w.left}px`,d.style.top=`${M-w.top}px`,d.hidden=!1,T(0,0)},T=(g,M)=>{u.style.transform=`translate(${g}px, ${M}px)`};i.addEventListener("pointerdown",g=>{if(!a()){if(g.pointerType==="touch"&&h.classList.add("touch"),g.pointerType==="touch"&&n()&&p===null&&v(g))p=g.pointerId,m=[g.clientX,g.clientY],A(g.clientX,g.clientY);else if(S===null)S=g.pointerId,R=g.clientX;else return;try{i.setPointerCapture(g.pointerId)}catch{}o()}}),i.addEventListener("pointermove",g=>{if(g.pointerId===p){let M=g.clientX-m[0],w=g.clientY-m[1],P=Math.hypot(M,w);P>Lo&&(M*=Lo/P,w*=Lo/P),T(M,w);let O=M/Lo,L=w/Lo;e.x=Math.abs(O)<yr?0:(O-Math.sign(O)*yr)/(1-yr),e.y=Math.abs(L)<yr?0:(L-Math.sign(L)*yr)/(1-yr)}else g.pointerId===S&&(n()&&r(g.clientX-R),R=g.clientX)});let N=g=>{g.pointerId===p&&(p=null,e.x=0,e.y=0,d.hidden=!0),g.pointerId===S&&(S=null)};for(let g of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(g,N);for(let g of document.querySelectorAll("#pad [data-cmd]"))g.addEventListener("pointerdown",M=>{M.preventDefault(),o(),s(g.dataset.cmd)}),g.addEventListener("keydown",M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),s(g.dataset.cmd))});return{setMovement(g){x(),p=null,d.hidden=!0,h.classList.toggle("step",g==="step"),h.classList.toggle("free",g!=="step")}}}var Gy={sound:!0,volume:.8,footsteps:.8,footTone:1,footCrisp:.6,wind:.5,lampHum:.35,music:.5,bells:.5,reverb:.5},Cf=Gy,ss=i=>440*Math.pow(2,(i-69)/12),Af=[62,64,65,67,69,71,72,74,76,77,79,81,83,84,86],Rf=[[50,57,62,65,69],[46,53,58,62,65],[41,48,53,57,64],[48,55,60,64,67]];function Pf(i){let t=null,e,n,s,r,o,a,l,c,h=[],d=0,u=0,f=0,x,y,p,m,S,R,v=0,A=0,T=[0,1,0],N="forest",g=i;function M(H){let I=t.createBuffer(1,Math.round(t.sampleRate*H),t.sampleRate),B=I.getChannelData(0);for(let j=0;j<B.length;j++)B[j]=Math.random()*2-1;return I}function w(H=4.2){let I=Math.round(t.sampleRate*H),B=t.createBuffer(2,I,t.sampleRate);for(let j=0;j<2;j++){let ut=B.getChannelData(j);for(let tt=0;tt<I;tt++)ut[tt]=(Math.random()*2-1)*Math.pow(1-tt/I,2.6)}return B}function P(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.connect(t.destination),a=M(2.5),s=t.createConvolver(),s.buffer=w(),r=t.createGain(),o=t.createGain(),n=t.createGain(),n.connect(o),n.connect(s),s.connect(r),o.connect(e),r.connect(e),x=t.createGain(),y=t.createBiquadFilter(),y.type="lowpass",y.frequency.value=9e3,x.connect(y),y.connect(e),p=t.createGain(),p.gain.value=0;{let X=t.createDelay(1);X.delayTime.value=.085;let nt=t.createGain();nt.gain.value=.38;let ct=t.createBiquadFilter();ct.type="lowpass",ct.frequency.value=1400,p.connect(X),X.connect(ct),ct.connect(nt),nt.connect(X),ct.connect(e)}l=[{f:420,q:.6,g:.55,rate:.07},{f:1700,q:2.5,g:.12,rate:.11}].map(X=>{let nt=t.createBufferSource();nt.buffer=a,nt.loop=!0;let ct=t.createBiquadFilter();ct.type="bandpass",ct.frequency.value=X.f,ct.Q.value=X.q;let mt=t.createGain();return mt.gain.value=0,nt.connect(ct),ct.connect(mt),mt.connect(x),nt.start(0,Math.random()*2),{...X,filt:ct,gain:mt,phase:Math.random()*10}});let H=t.createPanner();Object.assign(H,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.5,rolloffFactor:1.6,maxDistance:60}),O(H,0,3.6,0);let I=t.createGain();I.gain.value=0;let B=t.createOscillator();B.frequency.value=98;let j=t.createOscillator();j.frequency.value=196.6;let ut=t.createGain();ut.gain.value=.18;let tt=t.createGain();tt.gain.value=.05;let it=t.createBufferSource();it.buffer=a,it.loop=!0;let ot=t.createBiquadFilter();ot.type="highpass",ot.frequency.value=3500;let G=t.createGain();G.gain.value=.05,B.connect(ut),j.connect(tt),it.connect(ot),ot.connect(G);for(let X of[ut,tt,G])X.connect(I);I.connect(H),H.connect(e),B.start(),j.start(),it.start(0,1),c={lampGain:I};{let X=t.createPanner();Object.assign(X,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.2,rolloffFactor:1.4,maxDistance:30}),O(X,...T);let nt=t.createGain();nt.gain.value=0;let ct=t.createBufferSource();ct.buffer=a,ct.loop=!0;let mt=t.createBiquadFilter();mt.type="bandpass",mt.frequency.value=2200,mt.Q.value=.6;let It=t.createGain();It.gain.value=.02;let St=t.createBufferSource();St.buffer=a,St.loop=!0;let Bt=t.createBiquadFilter();Bt.type="lowpass",Bt.frequency.value=180;let Gt=t.createGain();Gt.gain.value=.35,ct.connect(mt),mt.connect(It),It.connect(nt),St.connect(Bt),Bt.connect(Gt),Gt.connect(nt),nt.connect(X),X.connect(e),ct.start(0,.3),St.start(0,1.1),m={gain:nt,pop:It,pan:X}}{let X=t.createGain();X.gain.value=0,X.connect(e);let nt=t.createOscillator();nt.frequency.value=.7;let ct=t.createGain();ct.gain.value=.3,nt.connect(ct);for(let[mt,It]of[[ss(86),.5],[ss(90)*1.002,.35],[ss(93),.25]]){let St=t.createOscillator();St.frequency.value=mt;let Bt=t.createGain();Bt.gain.value=It,ct.connect(Bt.gain),St.connect(Bt),Bt.connect(X),St.start()}nt.start(),S={gain:X}}{let X=(q,me,oe)=>{let D=t.createBufferSource();D.buffer=a,D.loop=!0;let _=t.createBiquadFilter();_.type=q,_.frequency.value=me,_.Q.value=oe;let Q=t.createGain();return Q.gain.value=0,D.connect(_),_.connect(Q),Q.connect(e),D.start(0,Math.random()*2),{g:Q,fl:_}},nt=X("bandpass",700,.8),ct=X("highpass",3800,.5),mt=X("lowpass",200,.7),It=t.createOscillator();It.frequency.value=16;let St=t.createGain();St.gain.value=0,It.connect(St),St.connect(nt.g.gain),It.start();let Bt=t.createOscillator();Bt.frequency.value=ss(38);let Gt=t.createGain();Gt.gain.value=0,Bt.connect(Gt),Gt.connect(e),Bt.start(),R={rattle:nt,hiss:ct,swellN:mt,fg:St,dg:Gt}}u=t.currentTime+.5,d=t.currentTime+3,et()}function O(H,I,B,j){H.positionX?(H.positionX.value=I,H.positionY.value=B,H.positionZ.value=j):H.setPosition(I,B,j)}function L(H,I){let B=t.listener;B.positionX?(B.positionX.value=H.x,B.positionY.value=H.y,B.positionZ.value=H.z,B.forwardX.value=I.x,B.forwardY.value=I.y,B.forwardZ.value=I.z,B.upX.value=0,B.upY.value=1,B.upZ.value=0):(B.setPosition(H.x,H.y,H.z),B.setOrientation(I.x,I.y,I.z,0,1,0))}function C({surface:H="snow",creak:I=!1}={}){if(!t||!g.sound||g.footsteps<=0)return;if(H==="boards"||H==="wood"||H==="hollow"){V(H),I&&W(380,.25,.05);return}let B=H==="path",j=t.currentTime,ut=t.createBufferSource();ut.buffer=a;let tt=t.createBiquadFilter();tt.type="bandpass";let it=(B?1200:2100)*g.footTone*(.85+Math.random()*.3);tt.frequency.value=it,tt.Q.value=.7;let ot=t.createBiquadFilter();ot.type="lowpass",ot.frequency.value=it*2.6;let G=t.createGain(),X=.16+Math.random()*.07,nt=g.footsteps*(B?.5:.75)*(.8+Math.random()*.4);G.gain.setValueAtTime(0,j),G.gain.linearRampToValueAtTime(nt,j+.008);for(let ct=.012;ct<X;ct+=.006+Math.random()*.01){let mt=Math.pow(1-ct/X,1.6);G.gain.setValueAtTime(nt*mt*(1-g.footCrisp*Math.random()),j+ct)}G.gain.linearRampToValueAtTime(0,j+X+.02),ut.connect(tt),tt.connect(ot),ot.connect(G),G.connect(e),ut.start(j,Math.random()*2,X+.05)}function V(H,I=1){let B=t.currentTime,j=H==="hollow",ut=(j?105:H==="boards"?150:135)*(.9+Math.random()*.2),tt=t.createOscillator();tt.frequency.setValueAtTime(ut*1.6,B),tt.frequency.exponentialRampToValueAtTime(ut,B+.04);let it=t.createGain(),ot=g.footsteps*.32*I*(.8+Math.random()*.4);it.gain.setValueAtTime(0,B),it.gain.linearRampToValueAtTime(ot,B+.004),it.gain.exponentialRampToValueAtTime(5e-4,B+(j?.16:.1));let G=t.createBufferSource();G.buffer=a;let X=t.createBiquadFilter();X.type="bandpass",X.frequency.value=j?700:1300,X.Q.value=1.2;let nt=t.createGain();nt.gain.setValueAtTime(ot*.5,B),nt.gain.exponentialRampToValueAtTime(5e-4,B+.05),tt.connect(it),G.connect(X),X.connect(nt);for(let ct of[it,nt])ct.connect(e),j&&ct.connect(p);tt.start(B),tt.stop(B+.2),G.start(B,Math.random()*2,.07)}function W(H,I,B,j=!1){let ut=t.currentTime,tt=t.createOscillator();tt.type="sawtooth",tt.frequency.setValueAtTime(H,ut),tt.frequency.linearRampToValueAtTime(H*.78,ut+I);let it=t.createBiquadFilter();it.type="bandpass",it.frequency.value=H*2.2,it.Q.value=6;let ot=t.createGain();ot.gain.setValueAtTime(0,ut),ot.gain.linearRampToValueAtTime(B,ut+I*.25),ot.gain.linearRampToValueAtTime(0,ut+I),tt.connect(it),it.connect(ot),ot.connect(e),j&&ot.connect(p),tt.start(ut),tt.stop(ut+I+.05)}function z(H){if(!t||!g.sound)return;let I=t.currentTime,B={wardrobe:62,"tree-door":57,arch:65,slide:69}[H]||62;[0,7,14].forEach((j,ut)=>{let tt=t.createOscillator();tt.frequency.value=ss(B+j);let it=t.createGain(),ot=.05/(1+ut*.4);it.gain.setValueAtTime(0,I+ut*.06),it.gain.linearRampToValueAtTime(ot,I+ut*.06+.02),it.gain.exponentialRampToValueAtTime(3e-4,I+3),tt.connect(it),it.connect(n),tt.start(I+ut*.06),tt.stop(I+3.1)})}function K(){!t||!g.sound||(V("wood",1.4),setTimeout(()=>{t&&V("boards",.5)},140))}function Z(){!t||!g.sound||V("wood",.9)}function b(H){if(!t)return;let I=t.currentTime,B=R;B.rattle.g.gain.setTargetAtTime(H==="wood"?.22:0,I,.08),B.fg.gain.setTargetAtTime(H==="wood"?.12:0,I,.08),B.hiss.g.gain.setTargetAtTime(H==="ice"?.14:0,I,.1),B.swellN.g.gain.setTargetAtTime(H==="blue"?.4:0,I,H==="blue"?.5:.2),B.dg.gain.setTargetAtTime(H==="blue"?.12:0,I,H==="blue"?.4:.2),H==="blue"?B.swellN.fl.frequency.setTargetAtTime(900,I,.6):B.swellN.fl.frequency.setTargetAtTime(200,I,.1)}function F(H){N=H,t&&et()}function J(H){let I=Rf[f++%Rf.length],B=13;for(let j of I){let ut=t.createOscillator(),tt=t.createOscillator();ut.type="triangle",tt.type="sawtooth",ut.frequency.value=ss(j),tt.frequency.value=ss(j)*1.004;let it=t.createBiquadFilter();it.type="lowpass",it.frequency.value=650,it.Q.value=.4;let ot=t.createGain();ot.gain.value=.25;let G=t.createGain();G.gain.setValueAtTime(0,H),G.gain.linearRampToValueAtTime(.045,H+4.5),G.gain.setValueAtTime(.045,H+B-5),G.gain.linearRampToValueAtTime(0,H+B),ut.connect(it),tt.connect(ot),ot.connect(it),it.connect(G),G.connect(n),ut.start(H),tt.start(H),ut.stop(H+B+.1),tt.stop(H+B+.1)}}function k(H){let I=Af[Math.floor(Math.random()*Af.length)]+(Math.random()<.3?12:0),B=t.createStereoPanner();B.pan.value=Math.random()*1.4-.7;let j=t.createGain();j.connect(B),B.connect(n);let ut=.06+Math.random()*.04,tt=3.5+Math.random()*2;j.gain.setValueAtTime(0,H),j.gain.linearRampToValueAtTime(ut,H+.01),j.gain.exponentialRampToValueAtTime(5e-4,H+tt);for(let[it,ot]of[[1,1],[2.76,.25],[5.4,.08]]){let G=t.createOscillator();G.frequency.value=ss(I)*it;let X=t.createGain();X.gain.value=ot,G.connect(X),X.connect(j),G.start(H),G.stop(H+tt+.1)}}function et(){if(!t)return;let H=t.currentTime;e.gain.setTargetAtTime(g.sound?g.volume:0,H,.08);let I=N==="library"?.4:N==="tunnel"?.7:1;n.gain.setTargetAtTime(g.music*(N==="library"?.7:N==="ride"?.6:1),H,.3),r.gain.setTargetAtTime(g.reverb*.9*I,H,.2),o.gain.setTargetAtTime(1-g.reverb*.55*I,H,.2),c.lampGain.gain.setTargetAtTime(N==="forest"?g.lampHum:0,H,.2),p.gain.setTargetAtTime(N==="tunnel"?.55:0,H,.1),m.gain.gain.setTargetAtTime(N==="library"?.5:0,H,.3),y.frequency.setTargetAtTime(N==="library"?700:9e3,H,.3)}function lt({camPos:H,camFwd:I,outside:B,lane:j=0,archNear:ut=0,ride:tt=null}){if(!t||t.state!=="running")return;let it=t.currentTime;L(H,I);let ot=N==="forest"?1-.7*j:N==="library"?.3:N==="ride"&&tt&&tt.part!=="wood"?1.3:0;N==="forest"&&y.frequency.setTargetAtTime(9e3-7600*j,it,.3);for(let G of l){G.phase+=G.rate/60;let X=.55+.45*Math.sin(G.phase)*Math.sin(G.phase*.37+1),nt=N==="forest"?.45+.55*B:1;G.gain.gain.setTargetAtTime(g.wind*G.g*X*nt*ot,it,.3),G.filt.frequency.setTargetAtTime(G.f*(.8+.4*X),it,.5)}S.gain.gain.setTargetAtTime(N==="forest"?.12*ut*ut*g.music*2:0,it,.25),N==="library"&&it>=A&&(m.pop.gain.setValueAtTime(.25+Math.random()*.5,it),m.pop.gain.setTargetAtTime(.02,it+.01,.02),A=it+.04+Math.random()*Math.random()*.45),N==="tunnel"&&it>=v?(v&&W(62+Math.random()*18,1.2+Math.random()*.6,.07,!0),v=it+6+Math.random()*9):N!=="tunnel"&&(v=0),g.music>0?(it>=u-.2&&(J(Math.max(it,u)),u+=9),g.bells>0&&it>=d&&(k(it+.05),d=it+(2+Math.random()*6)/Math.max(.15,g.bells))):(u=it+1,d=it+2)}return{start(){t||P(),t.state==="suspended"&&!document.hidden&&t.resume()},step:C,update:lt,apply:et,portal:z,door:K,hop:Z,ride:b,setPlace:F,setFirePos(H,I,B){T=[H,I,B],m&&O(m.pan,H,I,B)},pause(){t&&t.state==="running"&&t.suspend()},resume(){t&&t.state==="suspended"&&t.resume()},get running(){return!!t&&t.state==="running"},get started(){return!!t}}}var If=Object.freeze({skyTop:"#04060d",skyHorizon:"#1a2640",stars:.7,moonlight:.8,moonColour:"#9fb6ff",ambient:.6,exposure:1,lampColour:"#ffbf6e",lampIntensity:14,lampReach:18,halo:1.6,shadows:!0,flicker:.15,snowAmount:6e3,snowSpeed:.8,flakeSize:1,snowDrift:.5,falling:!0,snowColour:"#e6ecf6",pathColour:"#8592ab",pathWidth:1.8,bumps:.5,treeCount:260,treeSize:1,treeSpacing:2.6,treeSnow:.75,treeColour:"#2c5341",trunkColour:"#4a3527",seed:7,fogColour:"#141c2e",fogDensity:.03,distance:3.2,height:2.1,shoulder:.35,lookAhead:1.6,lookHeight:.75,fov:62,follow:7,walkSpeed:2.6,turnSpeed:150,mouseTurn:!0}),Lf=Object.freeze({skyTop:"#06121c",skyHorizon:"#1f4152",fogColour:"#10242e",fogDensity:.026,ambient:.75,hemiSky:"#9fd0d8",moonColour:"#b8e2e6",snowSpeed:.35,lampColour:"#ffd9a0"}),Df=()=>({...Cf});function qe(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Wy=[[.2,-5.5],[-.5,-10.5],[.5,-15.5],[1.3,-19.5],[3.6,-22.2],[7.5,-23.4],[12,-23],[16.5,-23.7],[21,-23.3],[25,-23.5]],No=[{id:"wardrobe",route:Wy},{id:"tree-door",angle:.15,bend:-1.2},{id:"arch",angle:Math.PI/2-.2,bend:.9},{id:"slide",angle:Math.PI+.1,bend:-.8}],Xy=.82;function qy(i,t){let e=Math.max(0,Math.min(Xy,(t-7)/23));return i.angle+e*i.bend*.55+Math.sin(e*Math.PI*1.6)*.16*i.bend}function Sr(i,{from:t=7-1.5,to:e=30,step:n=.5}={}){if(i.route)return Uf(i.route,{from:t,extra:Math.max(0,e-30),step:n});let s=[];for(let r=t;r<=e+1e-9;r+=n){let o=qy(i,r);s.push([Math.cos(o)*r,Math.sin(o)*r])}return s}var Zh=i=>No.find(t=>t.id===i);function Uf(i,{from:t,extra:e,step:n}){let s=[...i];if(t<Math.hypot(...i[0])-.25){let[h,d]=i[0],u=Math.hypot(h,d),f=Math.max(0,t)/u;s.unshift([h*f,d*f])}let r=[],o=[s[0],...s,s[s.length-1]];for(let h=1;h<o.length-2;h++){let[d,u,f,x]=[o[h-1],o[h],o[h+1],o[h+2]];for(let y=0;y<1;y+=.05){let p=y*y,m=p*y;r.push([0,1].map(S=>.5*(2*u[S]+(-d[S]+f[S])*y+(2*d[S]-5*u[S]+4*f[S]-x[S])*p+(-d[S]+3*u[S]-3*f[S]+x[S])*m)))}}r.push(s[s.length-1]);let a=[r[0]],l=0;for(let h=1;h<r.length;h++){let[d,u]=r[h-1],[f,x]=r[h],y=Math.hypot(f-d,x-u);for(;l+y>=n;){let p=(n-l)/y;d+=(f-d)*p,u+=(x-u)*p,y=Math.hypot(f-d,x-u),a.push([d,u]),l=0}l+=y}let c=s[s.length-1];if(Math.hypot(a.at(-1)[0]-c[0],a.at(-1)[1]-c[1])>.05&&a.push(c),e>0){let[h,d]=a.at(-2),[u,f]=a.at(-1),x=Math.hypot(u-h,f-d);for(let y=n;y<=e+1e-9;y+=n)a.push([u+(u-h)/x*y,f+(f-d)/x*y])}return a}function jl(i,t,e){let n=1/0,s=null;for(let r of e){let o=r.pts;for(let a=1;a<o.length;a++){let[l,c]=o[a-1],[h,d]=o[a],u=h-l,f=d-c,x=Math.max(0,Math.min(1,((i-l)*u+(t-c)*f)/(u*u+f*f))),y=Math.hypot(i-(l+u*x),t-(c+f*x));y<n&&(n=y,s=r.id)}}return{d:n,id:s}}function Yy(i){let t=Sr(Zh(i)),[e,n]=t[t.length-1],[s,r]=t[t.length-3],o=Math.hypot(e-s,n-r),a=[(e-s)/o,(n-r)/o];return{id:i,o:[e,n],d:a,r:[-a[1],a[0]]}}var ne=Object.fromEntries(No.map(i=>[i.id,Yy(i.id)]));function Re(i,t,e){let n=t-i.o[0],s=e-i.o[1];return[n*i.d[0]+s*i.d[1],n*i.r[0]+s*i.r[1]]}function ue(i,t,e){return[i.o[0]+i.d[0]*t+i.r[0]*e,i.o[1]+i.d[1]*t+i.r[1]*e]}var Er=(i,t)=>Math.atan2(-i,-t),cn={depth:2.6,half:1.1,height:2.45,inner:.8},Do={opening:1.2,pillar:.45,height:3.6,glade:3.4,gladeAt:-1.6},hn={radius:2.5,at:3.2,mouth:.95,glade:3,gladeAt:-1},Te={width:10,depth:14,front:.6,door:.7,glade:3.6,gladeAt:-1.2},Bi=i=>ne[i],rs=ue(Bi("tree-door"),hn.at,0),Ff=ue(Bi("slide"),Te.front+Te.depth/2,0),vr=[{id:"arch",at:ue(Bi("arch"),Do.gladeAt,0),r:Do.glade},{id:"tree-door",at:ue(Bi("tree-door"),hn.gladeAt,0),r:hn.glade},{id:"slide",at:ue(Bi("slide"),Te.gladeAt,0),r:Te.glade}],Zy=[{at:ue(Bi("arch"),0,0),r:7.5},{at:rs,r:9.5},{at:Ff,r:12.5},{at:ue(Bi("wardrobe"),-1.2,0),r:3.6}],Jy=[{at:ue(Bi("wardrobe"),-1.5,0),r:4,fade:4},{at:ue(Bi("arch"),-.8,0),r:5,fade:4},{at:rs,r:7,fade:4},{at:Ff,r:11,fade:4}],Of=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function $y(i,t){let e=1;for(let n of Jy)e=Math.min(e,Of(n.r,n.r+n.fade,Math.hypot(i-n.at[0],t-n.at[1])));return e}function tc(i,t,e){let n=Math.hypot(i,t),s=Math.sin(i*.35)*Math.cos(t*.29)+Math.sin(i*.11+t*.17)*1.6,r=Math.hypot(i-Mr[0],t-Mr[1]),o=r<2.6?1.1*(1-Of(.6,2.6,r)):0;return s*e*Math.min(1,Math.max(0,(n-7+1)/6))*$y(i,t)-o}function Bf(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Hf(i,t){let e=Sr(Zh(i)),n=Bf(e),s=n[n.length-1];t=Math.max(0,Math.min(s,t));let r=1;for(;r<n.length-1&&n[r]<t;)r++;let o=(t-n[r-1])/(n[r]-n[r-1]||1),[a,l]=e[r-1],[c,h]=e[r],d=Math.hypot(c-a,h-l)||1;return{x:a+(c-a)*o,z:l+(h-l)*o,dx:(c-a)/d,dz:(h-l)/d,total:s}}var zf=i=>{let t=Bf(Sr(Zh(i)));return t[t.length-1]};function kf({gap:i=.42,side:t=.95}={}){let e=zf("wardrobe"),n=[];for(let s=e-8;s<=e-.25;s+=i){let r=Hf("wardrobe",s),o=(s-(e-8))/8;for(let a of[-1,1])n.push({x:r.x-r.dz*t*a,z:r.z+r.dx*t*a,t:o,side:a,dx:r.dx,dz:r.dz})}return n}function Ky(){let i=zf("wardrobe"),t=[],e=0;for(let n=i-8-1.5;n<=i-8*.42;n+=1.25,e++){let s=Hf("wardrobe",n);for(let r of[-1,1]){let o=2.75+(e*7+(r>0?3:0))%5*.06;t.push({x:s.x-s.dz*o*r,z:s.z+s.dx*o*r,s:.66+(e*3+(r>0?1:0))%4*.03,r:e*1.7+r,lane:!0})}}return t}function Qy(){let[i,t]=ne.wardrobe.o,e=Math.hypot(i,t),n=[i/e,t/e],s=[-n[1],n[0]],r=[],o=0;for(let[a,l,c,h]of[[12.5,2.3,9,0],[16,2.3,9,1.15]])for(let d=-c+h;d<=c;d+=l,o++)r.push({x:n[0]*a+s[0]*d,z:n[1]*a+s[1]*d,s:.9+o%4*.05,r:o*2.3});return r}var Yh=[[15.8,-1],[18.2,1.5],[19,5.5],[17.4,9.6],[13.6,12.6],[8.6,14.2],[3.8,14.8],[.6,15.4]];function Jh(i=.5){let t=ne.slide;return Uf(Yh.map(([e,n])=>ue(t,e,n)),{from:1/0,extra:0,step:i})}var Mr=(()=>{let[i,t]=Yh[Yh.length-1];return ue(ne.slide,i,t)})();function Vf({seed:i=7,count:t=260,spacing:e=2.6,size:n=1,pathWidth:s=1.8}={}){let r=qe(i),o=No.map(d=>({id:d.id,pts:Sr(d,{to:d.id==="wardrobe"?33:36})})),a=Ky(),l=Jh(1);for(let d of Qy())jl(d.x,d.z,o).d<s/2+2*d.s||Math.hypot(d.x,d.z)<7+1.9*d.s||a.push(d);let c=a.length,h=0;for(;a.length<t+c&&h<t*60;){h++;let d=8+Math.pow(r(),.8)*36,u=r()*Math.PI*2,f=Math.cos(u)*d,x=Math.sin(u)*d,y=n*(.7+r()*.6)*(d<11?1.12:1);d<7+1.9*y||jl(f,x,o).d<s/2+2*y||Zy.some(p=>Math.hypot(f-p.at[0],x-p.at[1])<p.r+1.2*y)||vr.some(p=>Math.hypot(f-p.at[0],x-p.at[1])<p.r+2*y)||jl(f,x,[{pts:l}]).d<1.1+1.5*y||Math.hypot(f-Mr[0],x-Mr[1])<2.4+1.5*y||a.some(p=>Math.hypot(p.x-f,p.z-x)<e*(p.s+y)/2)||a.push({x:f,z:x,s:y,r:r()*Math.PI*2})}return a}var jy=i=>1.7*i,tv=.35,Ei=.28;function ev(i,t,{trees:e,paths:n,pathWidth:s=1.8}){let r=Math.hypot(i,t);if(r<tv+Ei)return!1;for(let a of e)if(Math.hypot(a.x-i,a.z-t)<jy(a.s)+Ei)return!1;{let[a,l]=Re(ne.wardrobe,i,t);if(a>-.3&&a<3&&Math.abs(l)<3||a>-cn.depth-.1&&a<=-.3&&Math.abs(l)>cn.inner&&Math.abs(l)<cn.half+.6)return!1}{let[a,l]=Re(ne.arch,i,t);if(a>-.32&&a<6&&Math.abs(l)<6)return!1}if(Math.hypot(i-rs[0],t-rs[1])<hn.radius+Ei)return!1;{let[a,l]=Re(ne.slide,i,t);if(a>Te.front-Ei&&a<Te.front+Te.depth+Ei&&Math.abs(l)<Te.width/2+Ei)return!1}return r<=7||vr.some(a=>Math.hypot(i-a.at[0],t-a.at[1])<=a.r)?!0:jl(i,t,n).d<=s/2+.25}function Gf(i,t,e){let n=[[i[0]+t[0],i[1]+t[1]],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]];for(let s of n)if(ev(s[0],s[1],e))return s;return i}function Nf(i,t){let e=ne[i],[n,s]=ue(e,t,0);return{x:n,z:s,yaw:Er(-e.d[0],-e.d[1])}}var bs={lamppost:{x:0,z:3.2,yaw:0},wardrobe:Nf("wardrobe",-2.2),arch:Nf("arch",-.9)};function $h(i,t){{let[e,n]=Re(ne.wardrobe,i,t);if(e>-.5&&e<.5&&Math.abs(n)<cn.inner+.05)return{id:"wardrobe",kind:"portal"}}{let[e,n]=Re(ne.arch,i,t);if(e>-.5&&e<.5&&Math.abs(n)<Do.opening-.1)return{id:"arch",kind:"portal"}}{let[e,n]=Re(ne["tree-door"],i,t);if(Math.hypot(i-rs[0],t-rs[1])<hn.radius+Ei+.25&&Math.abs(n)<hn.mouth&&e<hn.at)return{id:"tree-door",kind:"mouth"}}{let[e,n]=Re(ne.slide,i,t);if(e>Te.front-Ei-.25&&e<Te.front&&Math.abs(n)<Te.door)return{id:"slide",kind:"door"}}return null}function Wf(i,t){if(Math.hypot(i,t)<=7+.5)return"the clearing";{let[n,s]=Re(ne.wardrobe,i,t);if(n>-8+2.5&&n<.5&&Math.abs(s)<3)return"among the coats"}return Math.hypot(...[0,1].map(n=>[i,t][n]-vr[0].at[n]))<=vr[0].r+1.5?"the stone arch":Math.hypot(i-rs[0],t-rs[1])<=hn.radius+4.5?"the great tree":Math.hypot(...[0,1].map(n=>[i,t][n]-vr[2].at[n]))<=vr[2].r+1.5?"the library":"in the woods"}var Ut=i=>new te(i);function Xf(i,t){let e=new ni,n=new Ye(t.fov,1,.05,600);e.fog=new Jr(Ut(t.fogColour),t.fogDensity),i.toneMapping=yo,i.toneMappingExposure=t.exposure,i.shadowMap.enabled=!0,i.shadowMap.type=_s;let s=new Ze({uniforms:{top:{value:Ut(t.skyTop)},horizon:{value:Ut(t.skyHorizon)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.55)), 1.0); }",side:Je,depthWrite:!1,fog:!1}),r=new pt(new gn(400,32,16),s);r.renderOrder=-2,e.add(r);let o=new fe;{let I=new Float32Array(4200),B=new Float32Array(1400),j=12345,ut=()=>(j=j*16807%2147483647)/2147483647;for(let tt=0;tt<1400;tt++){let it=ut(),ot=.08+ut()*.92,G=it*Math.PI*2,X=ot,nt=Math.sqrt(1-X*X);I.set([Math.cos(G)*nt*380,X*380,Math.sin(G)*nt*380],tt*3),B[tt]=.3+ut()*.7}o.setAttribute("position",new Oe(I,3)),o.setAttribute("bright",new Oe(B,1))}let a=new Ze({uniforms:{amount:{value:t.stars},time:{value:0}},vertexShader:"attribute float bright; uniform float time; varying float vB; void main(){ vB = bright * (0.75 + 0.25 * sin(time * 1.3 + position.x)); gl_PointSize = 1.0 + bright * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vec3(0.85,0.9,1.0), a * vB * amount); }",transparent:!0,depthWrite:!1,fog:!1}),l=new rr(o,a);l.renderOrder=-1,e.add(l);let c=new xs(9413848,2765638,t.ambient);e.add(c);let h=new xo(Ut(t.moonColour),t.moonlight);h.position.set(-30,40,-18),e.add(h);let d=(H,I)=>tc(H,I,t.bumps),u=116,f=new He(u,u,180,180).rotateX(-Math.PI/2);{let H=f.attributes.position;for(let I=0;I<H.count;I++)H.setY(I,d(H.getX(I),H.getZ(I)));f.computeVertexNormals()}let x=No.map(H=>({id:H.id,pts:Sr(H)})),y=document.createElement("canvas");y.width=y.height=2048;let p=(H,I)=>[(H/u+.5)*2048,(I/u+.5)*2048];{let H=y.getContext("2d");H.fillStyle=t.snowColour,H.fillRect(0,0,2048,2048);let I=(()=>{let tt=99;return()=>(tt=tt*16807%2147483647)/2147483647})();for(let tt=0;tt<900;tt++){let it=I()*2048,ot=I()*2048,G=10+I()*60,X=H.createRadialGradient(it,ot,0,it,ot,G);X.addColorStop(0,I()<.5?"rgba(255,255,255,0.10)":"rgba(120,140,180,0.07)"),X.addColorStop(1,"rgba(0,0,0,0)"),H.fillStyle=X,H.beginPath(),H.arc(it,ot,G,0,Math.PI*2),H.fill()}let B=2048/u;for(let tt of[{w:1.35,a:.4,blur:6},{w:.95,a:.85,blur:2}]){H.save(),H.filter=`blur(${tt.blur}px)`,H.strokeStyle=t.pathColour,H.globalAlpha=tt.a,H.lineWidth=t.pathWidth*B*tt.w,H.lineCap="round",H.lineJoin="round";for(let G of x)H.beginPath(),G.pts.forEach(([X,nt],ct)=>{let[mt,It]=p(X,nt);ct?H.lineTo(mt,It):H.moveTo(mt,It)}),H.stroke();let[it,ot]=p(0,0);H.lineWidth=t.pathWidth*B*tt.w*.9,H.beginPath(),H.arc(it,ot,3.2*B,0,Math.PI*2),H.stroke(),H.globalAlpha=tt.a*.45;for(let[G,X,nt]of[["arch",-1.6,2.6],["tree-door",-.8,2.4],["slide",-1,2.8]]){let[ct,mt]=p(...ue(ne[G],X,0));H.fillStyle=t.pathColour,H.beginPath(),H.arc(ct,mt,nt*B,0,Math.PI*2),H.fill()}H.restore()}let j=ne.slide,ut=[];ut.push(ue(j,Te.front-1.4,3.2));for(let tt of[4.1,8.1,12.1])ut.push(ue(j,tt,Te.width/2+1.4));H.save(),H.globalCompositeOperation="source-over";for(let[tt,it]of ut){let[ot,G]=p(tt,it),X=2.6*B,nt=H.createRadialGradient(ot,G,0,ot,G,X);nt.addColorStop(0,"rgba(255,196,120,0.55)"),nt.addColorStop(1,"rgba(255,196,120,0)"),H.fillStyle=nt,H.beginPath(),H.arc(ot,G,X,0,Math.PI*2),H.fill()}H.restore()}let m=new Yi(y);m.colorSpace=rn,m.anisotropy=4;let S=new pt(f,new kt({map:m}));S.receiveShadow=!0,e.add(S);function R(){let H=Ut(t.treeColour),I=Ut(t.snowColour),B=Ut(t.trunkColour),j=[{geo:new Ne(.2,.3,1.2,7).translate(0,.6,0),colour:B}],ut=6;for(let tt=0;tt<ut;tt++){let it=tt/(ut-1),ot=2.4-it*1.75,G=2.9-it*1,X=.45+tt*1.55;j.push({geo:new Sn(ot,G,9).translate(0,X+G/2,0),colour:H});let nt=t.treeSnow,ct=ot*(.55+.35*nt),mt=G*(.35+.25*nt);nt>0&&j.push({geo:new Sn(ct,mt,9).translate(0,X+G-mt/2+.06,0),colour:I})}return br(j)}let v=Vf({seed:t.seed,count:t.treeCount,spacing:t.treeSpacing,size:t.treeSize,pathWidth:t.pathWidth}),A=new si(R(),new kt({vertexColors:!0,flatShading:!0}),v.length);{let H=new ae,I=new pn,B=new U(0,1,0);v.forEach((j,ut)=>{I.setFromAxisAngle(B,j.r),H.compose(new U(j.x,d(j.x,j.z)-.1,j.z),I,new U(j.s,j.s*(.95+ut%5*.03),j.s)),A.setMatrixAt(ut,H)})}A.castShadow=!0,A.receiveShadow=!0,e.add(A);let T={trees:v,paths:x,pathWidth:t.pathWidth},N=new ve,g=new kt({color:1776930});for(let H of[new Ne(.28,.36,.35,10).translate(0,.17,0),new Ne(.07,.1,3,10).translate(0,1.85,0),new Ne(.2,.12,.12,8).translate(0,3.33,0),new Sn(.34,.3,4).rotateY(Math.PI/4).translate(0,4.07,0),new gn(.06,8,6).translate(0,4.27,0)])N.add(new pt(H,g));let M=new be({color:Ut(t.lampColour)});N.add(new pt(new Ne(.2,.15,.55,4).rotateY(Math.PI/4).translate(0,3.66,0),M));for(let[H,I]of[[1,1],[1,-1],[-1,1],[-1,-1]])N.add(new pt(new jt(.03,.6,.03).translate(H*.17,3.66,I*.17),g));e.add(N);let w=new ke(new Be({map:_n(),color:Ut(t.lampColour),blending:Ve,depthWrite:!1,transparent:!0,fog:!1}));w.position.set(0,3.66,0),w.scale.setScalar(t.halo),e.add(w);let P=new Xe(Ut(t.lampColour),t.lampIntensity,t.lampReach,1.6);P.position.set(0,3.5,0),P.shadow.mapSize.set(1024,1024),P.shadow.bias=-.002,P.shadow.radius=4,P.castShadow=t.shadows,e.add(P);let O=new ve,L=new pt(new so(.2,.46,6,16).translate(0,.43,0),new kt({color:16185339,emissive:2764864})),C=new pt(new gn(.17,18,12).translate(0,1,0),new kt({color:3947086})),V=new pt(new Sn(.07,.2,10).rotateX(Math.PI/2).translate(0,1,-.2),new kt({color:15773766}));for(let H of[L,C,V])H.castShadow=!0,O.add(H);e.add(O);let W=[36,16,36],z=ne.wardrobe,K=ue(z,-cn.depth/2,0),Z=ne.slide,b=ue(Z,Te.front+Te.depth/2,0),F=new Ze({uniforms:{time:{value:0},speed:{value:t.snowSpeed},drift:{value:t.snowDrift},size:{value:t.flakeSize},centre:{value:new U},box:{value:new U(...W)},scale:{value:400},fogColour:{value:Ut(t.fogColour)},fogDensity:{value:t.fogDensity},shelter:{value:new ye(K[0],K[1],z.d[0],z.d[1])},shelterSize:{value:new U(cn.depth/2+.05,cn.half+.05,cn.height)},shelter2:{value:new ye(b[0],b[1],Z.d[0],Z.d[1])},shelterSize2:{value:new U(Te.depth/2+.1,Te.width/2+.1,8)}},vertexShader:`
      attribute float seed; uniform float time, speed, drift, size, scale; uniform vec3 centre, box; uniform vec4 shelter, shelter2; uniform vec3 shelterSize, shelterSize2;
      varying float vD; varying float vHide;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - time * speed * (0.7 + seed * 0.6), box.y);
        p.x += sin(time * 0.6 + seed * 6.283) * drift; p.z += cos(time * 0.5 + seed * 4.0) * drift * 0.7;
        vec3 w = vec3(centre.x + mod(p.x - centre.x + box.x * 0.5, box.x) - box.x * 0.5, p.y - 2.0, centre.z + mod(p.z - centre.z + box.z * 0.5, box.z) - box.z * 0.5);
        vec2 q = w.xz - shelter.xy;
        float u = dot(q, shelter.zw), v = dot(q, vec2(-shelter.w, shelter.z));
        vHide = (abs(u) < shelterSize.x && abs(v) < shelterSize.y && w.y < shelterSize.z) ? 1.0 : 0.0;
        vec2 q2 = w.xz - shelter2.xy;
        float u2 = dot(q2, shelter2.zw), v2 = dot(q2, vec2(-shelter2.w, shelter2.z));
        if (abs(u2) < shelterSize2.x && abs(v2) < shelterSize2.y && w.y < shelterSize2.z) vHide = 1.0;
        vec4 mv = modelViewMatrix * vec4(w, 1.0);
        vD = -mv.z;
        gl_PointSize = size * (0.6 + seed * 0.8) * scale * 0.045 / max(0.5, -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 fogColour; uniform float fogDensity; varying float vD; varying float vHide;
      void main() {
        if (vHide > 0.5) discard;
        float a = smoothstep(0.5, 0.15, length(gl_PointCoord - 0.5));
        float f = 1.0 - exp(-fogDensity * fogDensity * vD * vD);
        gl_FragColor = vec4(mix(vec3(0.95, 0.97, 1.0), fogColour, f), a * 0.9 * (1.0 - f * 0.8));
      }`,transparent:!0,depthWrite:!1}),J=(()=>{let H=Math.max(1,Math.round(t.snowAmount)),I=new Float32Array(H*3),B=new Float32Array(H);for(let tt=0;tt<H;tt++)I.set([(Math.random()-.5)*W[0],Math.random()*W[1],(Math.random()-.5)*W[2]],tt*3),B[tt]=Math.random();let j=new fe;j.setAttribute("position",new Oe(I,3)),j.setAttribute("seed",new Oe(B,1));let ut=new rr(j,F);return ut.frustumCulled=!1,ut.visible=t.falling,ut})();e.add(J);let k={skyTop:t.skyTop,skyHorizon:t.skyHorizon,fogColour:t.fogColour,fogDensity:t.fogDensity,ambient:t.ambient,hemiSky:"#8fa4d8",moonColour:t.moonColour,snowSpeed:t.snowSpeed,lampColour:t.lampColour};function et(H){s.uniforms.top.value.set(H.skyTop),s.uniforms.horizon.value.set(H.skyHorizon),e.fog.color.set(H.fogColour),e.fog.density=H.fogDensity,F.uniforms.fogColour.value.set(H.fogColour),F.uniforms.fogDensity.value=H.fogDensity,c.intensity=H.ambient,c.color.set(H.hemiSky),h.color.set(H.moonColour),F.uniforms.speed.value=H.snowSpeed,M.color.set(H.lampColour),w.material.color.set(H.lampColour),P.color.set(H.lampColour)}function lt(H){F.uniforms.time.value=H,a.uniforms.time.value=H;let I=1-t.flicker*(.5+.5*Math.sin(H*7.3)*Math.sin(H*3.1+1.7))*.35;P.intensity=t.lampIntensity*I,w.material.opacity=.65+.35*I}return{scene:e,camera:n,groundAt:d,walkWorld:T,figure:O,snow:J,snowMat:F,halo:w,lampLight:P,setLight:et,own:k,tick:lt,groundTex:m}}function _n(i=[[0,.9],[.18,.45],[1,0]]){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[s,r]of i)n.addColorStop(s,`rgba(255,255,255,${r})`);return e.fillStyle=n,e.fillRect(0,0,128,128),new Yi(t)}function br(i){let t=i.map(({geo:l,colour:c})=>{let h=l.index?l.toNonIndexed():l;h.computeVertexNormals();let d=new Float32Array(h.attributes.position.count*3);for(let u=0;u<h.attributes.position.count;u++)d.set([c.r,c.g,c.b],u*3);return h.setAttribute("color",new Oe(d,3)),h}),e=t.reduce((l,c)=>l+c.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),s.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new fe;return a.setAttribute("position",new Oe(n,3)),a.setAttribute("normal",new Oe(s,3)),a.setAttribute("color",new Oe(r,3)),a}var li=Ei,iv=.5,Qt={u0:Te.front+.25,u1:Te.front+Te.depth-.25,v:Te.width/2-.25,ceiling:4.2,door:.7,mezz:{u0:Te.front+.25,u1:9.5,v0:-(Te.width/2-.25),v1:-2.4,h:2.3},stairs:{u0:9.5,u1:13,v0:-(Te.width/2-.25),v1:-3.55},bench:{u0:1.15,u1:2.65,v0:4.25,v1:4.75,h:.45},littleDoor:{u:1.9,half:.13,y0:.45,y1:.8},tall:[{wall:"front",at:3.2,w:2.2,sill:.8,h:2.4},...[4.1,8.1,12.1].map(i=>({wall:"right",at:i,w:2.4,sill:.8,h:2.6}))],round:[{wall:"front",at:-3.35,y:3.55,r:.5},...[4.1,8.1,12.1].map(i=>({wall:"left",at:i,y:3.55,r:.5}))],columns:[[0,-1.3],[0,1.3],[6.1,1],[10.1,1],[6.1,-1],[10.1,-1]]};Qt.mezz.u0=Qt.u0;Qt.stairs.v0=Qt.mezz.v0;var Ts=(i,t,e,n=0)=>i>e.u0-n&&i<e.u1+n&&t>e.v0-n&&t<e.v1+n,nc=[{id:"table1",u0:3.9,u1:6.1,v0:.65,v1:1.75},{id:"table2",u0:8.4,u1:10.6,v0:.65,v1:1.75},{id:"chairs1",u0:4.1,u1:5.9,v0:1.95,v1:2.5},{id:"chairs2",u0:8.6,u1:10.4,v0:1.95,v1:2.5},{id:"fireplace",u0:13.55,u1:14.4,v0:-1.35,v1:1.35},{id:"shelf-back-right",u0:13.85,u1:14.4,v0:1.5,v1:4.8},{id:"ladder",u0:13.4,u1:13.85,v0:2.85,v1:3.55},{id:"shelf-back-left",u0:13.85,u1:14.4,v0:-3.45,v1:-1.5},{id:"column-6",u0:5.65,u1:6.55,v0:4.3,v1:4.8},{id:"column-10",u0:9.65,u1:10.55,v0:4.3,v1:4.8},{id:"mezz-shelves",u0:2.7,u1:9.5,v0:-4.8,v1:-4.3,level:"mezz"},{id:"nook-chair",u0:1.55,u1:2.35,v0:-3.85,v1:-3.05,level:"mezz"},{id:"nook-table",u0:.8,u1:1.4,v0:-4.8,v1:-4.2,level:"mezz"}];function ws(i,t){let{mezz:e,stairs:n,bench:s}=Qt;return Ts(i,t,e)||Math.abs(i-e.u1)<1e-9&&t>e.v0&&t<Qt.stairs.v1?e.h:Ts(i,t,n)?e.h*Math.max(0,Math.min(1,(n.u1-i)/(n.u1-n.u0))):Ts(i,t,s)?s.h:0}function sv(i,t){if(i<Qt.u0+li||i>Qt.u1-li||Math.abs(t)>Qt.v-li)return!1;for(let e of nc)if(Ts(i,t,e,li*.6))return!1;return!0}function qf(i,t){let e=ne.slide,[n,s]=Re(e,i[0],i[1]),r=ws(n,s),o=(l,c)=>{let[h,d]=Re(e,l,c);if(!sv(h,d))return!1;for(let[u,f]of[[0,0],[.7,0],[-.7,0],[0,.7],[0,-.7]])if(Math.abs(ws(h+u*li,d+f*li)-r)>iv)return!1;return!0},a=l=>{let c=t[0]*l[0]+t[1]*l[1];return[i[0]+l[0]*c,i[1]+l[1]*c]};for(let l of[[i[0]+t[0],i[1]+t[1]],a(e.d),a(e.r)])if(o(l[0],l[1]))return l;return i}var Kh=(i,t)=>{let[e,n]=Re(ne.slide,i,t);return ws(e,n)};function Yf(i,t,e,n){let s=ne.slide,[r,o]=Re(s,i,t),[a,l]=Re(s,e,n);if(a<Qt.u0+li+.06&&Math.abs(o)<Qt.door-.1&&ws(r,o)===0)return{id:"out",kind:"door-out"};let c=Qt.littleDoor;return ws(r,o)>=Qt.bench.h-.01&&l>Qt.v-li-.03&&Math.abs(r-c.u)<.4?{id:"slide",kind:"little-door"}:null}function Qh(i,t){let[e,n]=Re(ne.slide,i,t),s=ws(e,n);return s>=Qt.mezz.h-.01?e<3.2?"the reading nook":"up on the mezzanine":s>.1&&Ts(e,n,Qt.stairs)?"on the stairs":s>.1?"on the bench":e>12.6&&Math.abs(n)<2?"by the fire":"the library"}var Zf=(i,t,e,n)=>{let s=ne.slide,[r,o]=ue(s,i,t),a=s.d[0]*e+s.r[0]*n,l=s.d[1]*e+s.r[1]*n;return{x:r,z:o,yaw:Er(a,l)}},Jf=Zf(Qt.u0+1.75,0,1,0),$f=Zf(-.75,0,-1,0);function Kf(i,t){let e=ne.slide,[n,s]=Re(e,i.x,i.z),[r,o]=Re(e,t.x,t.z),a=ws(r,o);n=Math.max(Qt.u0+.2,Math.min(Qt.u1-.2,n)),s=Math.max(-Qt.v+.2,Math.min(Qt.v-.2,s));let l=Math.min(i.y,Qt.ceiling-.25);a<Qt.mezz.h-.5&&Ts(n,s,Qt.mezz,.15)&&l<Qt.mezz.h+.2&&(s=Math.max(s,Qt.mezz.v1+.2)),a>=Qt.mezz.h-.01&&(l=Math.max(l,Qt.mezz.h+.9));let c=nc.filter(f=>rv.includes(f.id)),h=(f,x)=>c.some(y=>Ts(f,x,y,.18));if(h(n,s))for(let f=19;f>=1;f--){let x=f/20,y=r+(n-r)*x,p=o+(s-o)*x;if(!h(y,p)){n=y,s=p;break}}let[d,u]=ue(e,n,s);return{x:d,y:l,z:u}}var rv=["shelf-back-right","shelf-back-left","ladder","fireplace","column-6","column-10"],Xn={length:12,curve:16,half:.95,height:2.35,door:6.6},Wn=ne["tree-door"],ec=ue(Wn,hn.at-hn.radius-.62,0),Uo=tc(ec[0],ec[1],0);function ci(i){let t=i/Xn.curve,e=Xn.curve*Math.sin(t),n=Xn.curve*(1-Math.cos(t)),s=ec[0]+Wn.d[0]*e+Wn.r[0]*n,r=ec[1]+Wn.d[1]*e+Wn.r[1]*n,o=Wn.d[0]*Math.cos(t)+Wn.r[0]*Math.sin(t),a=Wn.d[1]*Math.cos(t)+Wn.r[1]*Math.sin(t);return{x:s,z:r,dx:o,dz:a,rx:-a,rz:o}}function As(i,t){let e={s:0,w:0,d:1/0};for(let n=-1.5;n<=Xn.length;n+=.1){let s=ci(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}for(let n=e.s-.1;n<=e.s+.1;n+=.005){let s=ci(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}return e}function ov(i,t){let{s:e,w:n}=As(i,t);return e>.05&&e<Xn.door-li-.12&&Math.abs(n)<Xn.half-li-.12}function Qf(i,t){let e=ci(As(i[0],i[1]).s),n=t[0]*e.dx+t[1]*e.dz;for(let s of[[i[0]+t[0],i[1]+t[1]],[i[0]+e.dx*n,i[1]+e.dz*n],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]])if(ov(s[0],s[1]))return s;return i}function jf(i,t,e,n){let s=As(e,n);return s.s<.25?{id:"out",kind:"mouth-out"}:s.s>Xn.door-li-.2&&Math.abs(s.w)<Xn.half?{id:"tree-door",kind:"portal"}:null}var tp=(i,t)=>{let e=ci(i);return{x:e.x,z:e.z,yaw:t?Er(-e.dx,-e.dz):Er(e.dx,e.dz)}},ep=tp(1.7,!1),np=tp(Xn.door-1.9,!0),ip=(()=>{let[i,t]=ue(Wn,hn.at-hn.radius-1.45,0);return{x:i,z:t,yaw:Er(-Wn.d[0],-Wn.d[1])}})();function sp(i,t,e){let n=As(t.x,t.z),s=e?Math.max(.1,n.s-1.7):Math.min(Xn.door-.25,n.s+1.7),r=Math.max(-.45,Math.min(.45,n.w*.5+.2)),o=ci(s);return{x:o.x+o.rx*r,y:Math.min(i.y,Uo+1.75),z:o.z+o.rz*r}}function On(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new Yi(r);return s&&(o.colorSpace=rn),n&&(o.wrapS=o.wrapT=ei,o.repeat.set(...n)),o.anisotropy=4,o}var sn=(i="#5a3a24",t="rgba(30,16,8,0.35)",e=4)=>On(256,256,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=qe(5);for(let a=0;a<120;a++){n.strokeStyle=t,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*s;n.moveTo(l,0),n.bezierCurveTo(l+o()*8-4,r/3,l+o()*8-4,2*r/3,l+o()*6-3,r),n.stroke()}n.fillStyle="rgba(15,8,4,0.6)";for(let a=1;a<e;a++)n.fillRect(a*s/e-1,0,2,r)}),os=()=>On(256,512,(i,t,e)=>{i.fillStyle="#4b3a2e",i.fillRect(0,0,t,e);let n=qe(11);for(let s=0;s<90;s++){let r=n()*t,o=3+n()*9;i.fillStyle=n()<.5?"rgba(20,14,10,0.55)":"rgba(120,100,82,0.25)",i.beginPath(),i.moveTo(r,0);for(let a=0;a<=e;a+=32)i.lineTo(r+Math.sin(a*.03+s)*6,a);for(let a=e;a>=0;a-=32)i.lineTo(r+o+Math.sin(a*.03+s)*6,a);i.fill()}},{repeat:[3,2]}),ic=(i=3)=>On(256,256,(t,e,n)=>{t.fillStyle="#d2ccc0",t.fillRect(0,0,e,n);let s=qe(i);for(let r=0;r<1600;r++){let o=150+s()*80;t.fillStyle=`rgba(${o},${o-4},${o-12},0.35)`,t.fillRect(s()*e,s()*n,2+s()*6,2+s()*6)}}),rp=()=>On(512,512,(i,t,e)=>{i.fillStyle="#3d3a36",i.fillRect(0,0,t,e);let n=qe(21);for(let s=0,r=0;r<e+40;s++){let o=34+n()*14;for(let a=s%2*-20;a<t+40;){let l=42+n()*26,c=105+n()*60,h=n()*18;i.fillStyle=`rgb(${c+h},${c+h*.6},${c-8})`,i.beginPath(),i.ellipse(a+l/2,r+o/2,l/2-3,o/2-3,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.08)",i.beginPath(),i.ellipse(a+l/2-4,r+o/2-5,l/3,o/5,0,0,Math.PI*2),i.fill(),a+=l}r+=o}},{repeat:[2.5,1.2]}),op=()=>On(256,256,(i,t,e)=>{i.fillStyle="#e8eef7",i.fillRect(0,0,t,e);let n=qe(31);for(let r=0;r<140;r++){let o=e*(.45+n()*.6),a=n()*t,l=6+n()*22;i.fillStyle=n()<.6?"rgba(62,92,52,0.85)":"rgba(92,118,66,0.8)",i.beginPath(),i.ellipse(a,o,l,l*.6,0,0,Math.PI*2),i.fill()}let s=i.createLinearGradient(0,e*.85,0,e);s.addColorStop(0,"rgba(232,238,247,0)"),s.addColorStop(1,"rgba(232,238,247,0.95)"),i.fillStyle=s,i.fillRect(0,0,t,e)}),jh=()=>On(128,160,(i,t,e)=>{let n=i.createRadialGradient(t/2,e*.55,6,t/2,e*.55,e*.75);n.addColorStop(0,"#ffd9a0"),n.addColorStop(.6,"#e99a4c"),n.addColorStop(1,"#a8582a"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(90,45,20,0.35)";for(let r=0;r<4;r++)i.fillRect(8,30+r*30,t*.35,6);i.fillStyle="rgba(255,240,200,0.5)",i.beginPath(),i.arc(t*.72,e*.5,9,0,Math.PI*2),i.fill();let s=qe(41);for(let r=0;r<260;r++){let o=s()<.5,a=o?s()<.5?s()*22:t-s()*22:s()*t,l=o?s()*e:s()<.5?s()*22:e-s()*22;i.fillStyle=`rgba(235,242,255,${.12+s()*.3})`,i.beginPath(),i.arc(a,l,1+s()*4,0,Math.PI*2),i.fill()}}),ap=()=>On(256,256,(i,t,e)=>{i.fillStyle="#6b4a30",i.fillRect(0,0,t,e);let n=qe(51);for(let s=0;s<8;s++)i.fillStyle=`rgba(${110+n()*30},${74+n()*18},${44+n()*12},0.55)`,i.fillRect(s*t/8,0,t/8-3,e),i.fillStyle="rgba(25,14,6,0.65)",i.fillRect((s+1)*t/8-3,0,3,e);for(let s=0;s<160;s++){i.strokeStyle="rgba(40,22,10,0.18)",i.lineWidth=.6+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.lineTo(r+n()*4-2,e),i.stroke()}},{repeat:[1,1]}),lp=()=>On(128,160,(i,t,e)=>{i.fillStyle="#efe6d2",i.fillRect(0,0,t,e);let n=qe(61);i.fillStyle="rgba(70,55,40,0.45)";for(let s=18;s<e-14;s+=7){let r=12;for(;r<t-14;){let o=4+n()*16;i.fillRect(r,s,Math.min(o,t-14-r),2),r+=o+3}}}),tu=(i=!1)=>On(128,128,(t,e,n)=>{t.clearRect(0,0,e,n);let s=qe(i?73:71);t.fillStyle="rgba(170,195,230,0.10)",t.fillRect(0,0,e,n);for(let r=0;r<700;r++){let o=Math.pow(s(),2.2)*.22,a=Math.floor(s()*4),l=s(),[c,h]=i?[e/2+Math.cos(l*6.283)*(.5-o)*e,n/2+Math.sin(l*6.283)*(.5-o)*n]:a===0?[l*e,o*n]:a===1?[l*e,n-o*n]:a===2?[o*e,l*n]:[e-o*e,l*n];t.fillStyle=`rgba(230,240,255,${.15+s()*.35})`,t.beginPath(),t.arc(c,h,.8+s()*3,0,Math.PI*2),t.fill()}}),eu=()=>On(256,512,(i,t,e)=>{i.fillStyle="#7a5434",i.fillRect(0,0,t,e);let n=qe(81);for(let s=0;s<26;s++){let r=n()*e,o=6+n()*18;i.strokeStyle=n()<.5?"rgba(60,34,16,0.45)":"rgba(160,118,78,0.3)",i.lineWidth=1.5+n()*4,i.beginPath();for(let a=0;a<=t;a+=8)i.lineTo(a,r+Math.sin(a*.02+s)*o);i.stroke()}for(let s=0;s<300;s++){i.strokeStyle="rgba(40,22,10,0.2)",i.lineWidth=.5+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.bezierCurveTo(r+n()*10-5,e/3,r+n()*10-5,2*e/3,r,e),i.stroke()}},{repeat:[2,3]});var Rt=(i,t,e)=>new U(-e,t,i);function Tr(i){let t=ne[i],e=new ve,n=new U(t.d[0],0,t.d[1]),s=new U(t.r[0],0,t.r[1]);return e.quaternion.setFromRotationMatrix(new ae().makeBasis(s.clone().negate(),new U(0,1,0),n)),e.position.set(t.o[0],0,t.o[1]),e}function cp({scene:i,renderer:t,sceneParts:e,look:n,other:s}){let r={},o={value:0};{let a=Tr("wardrobe"),l=ne.wardrobe,c=(k,et)=>{let lt=k-l.o[0],H=et-l.o[1];return[lt*l.d[0]+H*l.d[1],lt*l.r[0]+H*l.r[1]]},h=kf(),d=qe(17),u=Ut(n.treeColour),f=Ut(n.snowColour),x=br([{geo:new Sn(.36,1.1,7).rotateZ(Math.PI/2).scale(1,.38,1).translate(-.55,0,0),colour:u},{geo:new Sn(.26,.95,7).rotateZ(Math.PI/2).scale(1,.16,.7).translate(-.5,.09,0),colour:f}]),y=[[0,-1],[.27,-.98],[.29,-.8],[.25,-.45],[.22,-.15],[.24,-.06],[.2,0],[.06,.04],[0,.04]].map(([k,et])=>new vt(k,et)),p=new lr(y,12).scale(1,1,.5);{let k=p.attributes.position,et=qe(23);for(let lt=0;lt<k.count;lt++){let H=1+(et()-.5)*.12;k.setX(lt,k.getX(lt)*H),k.setZ(lt,k.getZ(lt)*H)}p.computeVertexNormals()}let m=br([{geo:new jt(.44,.025,.025).translate(0,.02,0),colour:Ut("#6b4a2c")},{geo:new An(.05,.008,4,10,Math.PI*1.4).translate(0,.1,0),colour:Ut("#9a9aa2")}]),S=["#7a5a40","#5c4a3e","#8a6a4c","#4e4a52","#9a7552","#6a4a52","#7c6a58","#3e3632","#a08a72"].map(Ut),R=[],v=[],A=[];for(let k of h){let[et,lt]=c(k.x,k.z),I=.3+d()*.32,B=k.t>=.6,j=k.t<.66,ut=k.t>=I,tt=B?1.62:1.5+d()*.35;j&&R.push({u:et,v:lt+k.side*.75,y:tt+.08,side:k.side,droop:.15+d()*.2,tw:d()}),ut&&(v.push({u:et,v:lt,y:tt-.04,side:k.side,c:S[Math.floor(d()*S.length)],sway:d()*6}),B&&A.push({u:et,v:lt,y:tt}))}let T=new si(x,new kt({vertexColors:!0,flatShading:!0}),R.length),N=new ae,g=new pn;R.forEach((k,et)=>{g.setFromEuler(new an(0,k.side>0?Math.PI:0,k.droop)),N.compose(Rt(k.u,k.y,k.v),g,new U(1,1,.9+k.tw*.3)),T.setMatrixAt(et,N)}),T.castShadow=!0,a.add(T);let M=new si(p,new kt({color:16777215,emissive:1380621}),v.length);v.forEach((k,et)=>{g.setFromEuler(new an(0,Math.PI/2,0)),N.compose(Rt(k.u,k.y,k.v),g,new U(1,1,1)),M.setMatrixAt(et,N),M.setColorAt(et,k.c)}),M.castShadow=!0,M.receiveShadow=!0,a.add(M);let w=new si(m,new kt({vertexColors:!0}),Math.max(1,A.length));A.forEach((k,et)=>{g.setFromEuler(new an(0,Math.PI/2,0)),N.compose(Rt(k.u,k.y,k.v),g,new U(1,1,1)),w.setMatrixAt(et,N)}),w.count=A.length,a.add(w);let P=new kt({map:sn("#6b4a2c","rgba(30,16,8,0.3)",1)});for(let k of[-1,1]){let et=h.filter(I=>I.side===k&&I.t>=.56).map(I=>{let[B,j]=c(I.x,I.z);return Rt(B,1.66,j)});et.push(Rt(-.05,1.66,k*.95));let lt=new wn(et),H=new pt(new ri(lt,40,.035,6,!1),P);a.add(H)}{let et=h.filter(it=>it.side===1&&it.t>=.48).map(it=>c(it.x,it.z)).map(([it,ot])=>[it,ot-.95]);et.push([0,0]);let lt=[],H=[],I=[],B=et.length-1;et.forEach(([it,ot],G)=>{let X=G<B?et[G+1]:et[G],nt=G>0?et[G-1]:et[G],ct=X[0]-nt[0],mt=X[1]-nt[1],It=Math.hypot(ct,mt)||1;ct/=It,mt/=It;for(let St of[-1,1]){let Gt=Rt(it-mt*1.05*St*0,.02,ot+St*1.05);lt.push(Gt.x,Gt.y,Gt.z),H.push(St<0?0:1,G/B)}if(G<B){let St=G*2;I.push(St,St+1,St+2,St+1,St+3,St+2)}});let j=new fe;j.setAttribute("position",new Jt(lt,3)),j.setAttribute("uv",new Jt(H,2)),j.setIndex(I),j.computeVertexNormals();let ut=On(128,512,(it,ot,G)=>{it.fillStyle="#6a4a30",it.fillRect(0,0,ot,G);let X=qe(9);for(let ct=0;ct<6;ct++)it.fillStyle=`rgba(${90+X()*30},${60+X()*20},${36+X()*10},0.6)`,it.fillRect(ct*ot/6,0,ot/6-2,G),it.fillStyle="rgba(20,10,4,0.7)",it.fillRect((ct+1)*ot/6-2,0,2,G);for(let ct=0;ct<1800;ct++){let mt=Math.pow(X(),1.8)*G*.75,It=1-mt/(G*.75);it.fillStyle=`rgba(232,238,246,${.5*It+.1})`,it.beginPath(),it.arc(X()*ot,mt,1+X()*4*It,0,Math.PI*2),it.fill()}let nt=it.createLinearGradient(0,0,0,G*.28);nt.addColorStop(0,"rgba(0,0,0,1)"),nt.addColorStop(1,"rgba(0,0,0,0)"),it.globalCompositeOperation="destination-out",it.fillStyle=nt,it.fillRect(0,0,ot,G*.28)}),tt=new pt(j,new kt({map:ut,transparent:!0,depthWrite:!1}));tt.receiveShadow=!0,tt.renderOrder=1,a.add(tt)}let O=new kt({map:sn("#4e321f"),side:Ie}),L=cn;for(let k of[-1,1])a.add(new pt(new jt(.08,L.height,L.depth).translate(...Rt(-L.depth/2,L.height/2,k*(L.half+.04)).toArray()),O));a.add(new pt(new jt(2*L.half+.24,.1,L.depth+.1).translate(...Rt(-L.depth/2,L.height+.05,0).toArray()),O)),a.add(new pt(new jt(2*L.half+.4,.14,L.depth+.25).translate(...Rt(-L.depth/2,L.height+.17,0).toArray()),O)),a.add(new pt(new jt(2*L.half+.3,.1,L.depth+.1).translate(...Rt(-L.depth/2,L.height+.28,0).toArray()),new kt({color:Ut(n.snowColour)}))),a.add(new pt(new jt(2*L.half+.2,.1,.12).translate(...Rt(.02,L.height-.05,0).toArray()),O)),a.add(new pt(new jt(2*L.half+.2,.12,.12).translate(...Rt(.02,.06,0).toArray()),O));let C=new kt({map:sn("#5d3c24","rgba(30,16,8,0.3)",2)}),V=new kt({color:11569738,emissive:1708038}),W=[];for(let k of[-1,1]){let et=new ve;et.position.copy(Rt(.04,0,k*L.half));let lt=new pt(new jt(L.half-.01,L.height-.2,.05),C);lt.position.set(k*(L.half/2),(L.height-.2)/2+.1,0),lt.castShadow=!0,et.add(lt);let H=new pt(new gn(.045,10,8),V);H.position.set(k*(L.half-.12),1.12,-.05),et.add(H);for(let I of[.75,1.65]){let B=new pt(new jt(L.half-.3,.6,.02),new kt({map:sn("#553620","rgba(30,16,8,0.25)",1)}));B.position.set(k*(L.half/2),I,-.035),et.add(B)}a.add(et),W.push({hinge:et,s:k})}let z=new be({color:Ut("#ffd28a"),transparent:!0,opacity:0,fog:!1}),K=new pt(new He(.035,L.height-.3).translate(0,(L.height-.3)/2+.15,0),z);K.position.copy(Rt(-.01,0,0)),K.rotation.y=Math.PI,a.add(K);let Z=new ke(new Be({map:_n([[0,.8],[.3,.25],[1,0]]),color:Ut("#ffcc80"),blending:Ve,depthWrite:!1,transparent:!0,opacity:0}));Z.position.copy(Rt(-.1,1.15,0)),Z.scale.set(.9,2.4,1),a.add(Z);let b=new Xe(Ut("#ffc98a"),1.2,7,1.4);b.position.copy(Rt(-.35,1.6,0)),a.add(b);let F=new be({color:16777215,transparent:!0,opacity:0,fog:!1,side:Ie}),J=new pt(new He(2*L.half+.6,L.height+.4),F);J.position.copy(Rt(.45,L.height/2,0)),a.add(J),i.add(a),r.wardrobe={group:a,doors:W,lineMat:z,lineGlow:Z,beyondMat:F,inside:b,setOpen(k){for(let et of W)et.hinge.rotation.y=-et.s*k*1.75},setGlow(k){z.opacity=k,Z.material.opacity=k*.55,b.intensity=1.2+k*3.2},setBeyond(k){F.opacity=k}}}{let a=Tr("tree-door"),l=hn.at,c=hn.radius,h=new kt({map:os(),color:12563110}),d=[[c+.55,0],[c+.2,.5],[c,1.3],[c-.25,4],[c-.6,8],[c-1,13],[c-1.6,20],[.4,28],[0,28.2]].map(([O,L])=>new vt(O,L)),u=new pt(new lr(d,22),h);u.position.copy(Rt(l,0,0)),u.castShadow=!0,u.receiveShadow=!0,a.add(u);let f=qe(13);for(let O=0;O<8;O++){let L=O/8*Math.PI*2+f()*.4;if(Math.abs(Math.atan2(Math.sin(L-Math.PI),Math.cos(L-Math.PI)))<.55)continue;let C=2.2+f()*1.6,V=[];for(let z=0;z<=5;z++){let K=z/5,Z=c-.2+K*C;V.push(new U(Math.sin(L+K*(f()-.5)*.4)*Z,.55*(1-K)-.1*K,Math.cos(L+K*(f()-.5)*.4)*Z))}let W=new pt(new ri(new wn(V),16,.32,7,!1),h);W.position.copy(Rt(l,0,0)),W.scale.set(1,1,1),a.add(W)}let x=Ut(n.treeColour).multiplyScalar(.9),y=Ut(n.snowColour),p=[];for(let O=0;O<7;O++){let L=O/6,C=6.2-L*4.6,V=4.4-L*1.6,W=8.5+O*2.7;p.push({geo:new Sn(C,V,12).translate(0,W+V/2,0),colour:x}),p.push({geo:new Sn(C*.8,V*.5,12).translate(0,W+V-V*.25+.08,0),colour:y})}let m=new pt(br(p),new kt({vertexColors:!0,flatShading:!0}));m.position.copy(Rt(l,0,0)),m.castShadow=!0,a.add(m);let S=hn.mouth,R=2.35,v=new ln;v.moveTo(-S,0),v.lineTo(-S,R-S),v.absarc(0,R-S,S,Math.PI,0,!0),v.lineTo(S,0),v.lineTo(-S,0);let A=On(128,128,(O,L,C)=>{let V=O.createRadialGradient(L/2,C*.62,2,L/2,C*.62,L*.62);V.addColorStop(0,"#a5642c"),V.addColorStop(.18,"#4a2a14"),V.addColorStop(.55,"#140b06"),V.addColorStop(1,"#050302"),O.fillStyle=V,O.fillRect(0,0,L,C)}),T=new Ji(v,16);{let O=T.attributes.position,L=T.attributes.uv;for(let C=0;C<O.count;C++)L.setXY(C,(O.getX(C)+S)/(2*S),O.getY(C)/R)}let N=new pt(T,new be({map:A}));N.rotation.y=Math.PI,N.position.copy(Rt(l-c-.62,.02,0)),a.add(N);let g=new ln,M=S+.22,w=R+.22;g.moveTo(-M,0),g.lineTo(-M,w-M),g.absarc(0,w-M,M,Math.PI,0,!0),g.lineTo(M,0),g.lineTo(S,0),g.lineTo(S,R-S),g.absarc(0,R-S,S,0,Math.PI,!1),g.lineTo(-S,0),g.lineTo(-M,0);let P=new pt(new kn(g,{depth:.5,bevelEnabled:!1,curveSegments:16}),new kt({map:sn("#8a6440","rgba(60,36,18,0.3)",1)}));P.rotation.y=Math.PI,P.position.copy(Rt(l-c-.66,0,0)),a.add(P),i.add(a),r.trunk={group:a}}{let a=Tr("arch"),l=Do,c=new kt({map:ic(),vertexColors:!0,flatShading:!0}),h=[],d=qe(19),u=()=>Ut("#c4beb2").multiplyScalar(.85+d()*.25),f=Ut("#5f7a46");for(let C of[-1,1]){let V=0;for(let W=0;W<4;W++){let z=.55+d()*.12,K=2*l.pillar+.1+d()*.12,Z=W===0?u().lerp(f,.45):d()<.3?u().lerp(f,.3):u();h.push({geo:new jt(K,z-.03,.95+d()*.1).translate(...Rt(d()*.04,V+z/2,C*(l.opening+l.pillar)+(d()-.5)*.06).toArray()),colour:Z}),V+=z}h.push({geo:new jt(2*l.pillar+.35,.18,1.15).translate(...Rt(0,V+.09,C*(l.opening+l.pillar)).toArray()),colour:u()})}let x=l.height-l.opening,y=l.opening,p=l.opening+2*l.pillar,m=9;for(let C=0;C<m;C++){let V=Math.PI-C/m*Math.PI,W=Math.PI-(C+1)/m*Math.PI,z=C===Math.floor(m/2),K=new ln,Z=z?p+.18:p,b=.012;K.moveTo(Math.cos(V-b)*y,Math.sin(V-b)*y),K.lineTo(Math.cos(V-b)*Z,Math.sin(V-b)*Z),K.lineTo(Math.cos(W+b)*Z,Math.sin(W+b)*Z),K.lineTo(Math.cos(W+b)*y,Math.sin(W+b)*y);let F=new kn(K,{depth:z?1.05:.95,bevelEnabled:!1}).translate(0,0,z?-.525:-.475);F.translate(0,x,0),h.push({geo:F,colour:d()<.25?u().lerp(f,.25):u()})}let S=[];for(let C=0;C<12;C++){let V=Math.PI*.18+C/12*Math.PI*.64,W=Math.PI*.18+(C+1)/12*Math.PI*.64,z=new ln;z.moveTo(Math.cos(V)*p,Math.sin(V)*p),z.lineTo(Math.cos(V)*(p+.12),Math.sin(V)*(p+.12)),z.lineTo(Math.cos(W)*(p+.12),Math.sin(W)*(p+.12)),z.lineTo(Math.cos(W)*p,Math.sin(W)*p),S.push({geo:new kn(z,{depth:.9,bevelEnabled:!1}).translate(0,x,-.45),colour:Ut(n.snowColour)})}for(let C of[-1,1])S.push({geo:new jt(2*l.pillar+.3,.1,1.05).translate(...Rt(0,2.42,C*(l.opening+l.pillar)).toArray()),colour:Ut(n.snowColour)});let R=new pt(br(h.concat(S)),c);R.castShadow=!0,R.receiveShadow=!0,a.add(R);let v=new ln;v.moveTo(-y,0),v.lineTo(-y,x),v.absarc(0,x,y,Math.PI,0,!0),v.lineTo(y,0),v.lineTo(-y,0);let A=new Ji(v,24);{let C=A.attributes.position,V=A.attributes.uv;for(let W=0;W<C.count;W++)V.setXY(W,(C.getX(W)+y)/(2*y),C.getY(W)/l.height)}let T=new mn(16,16,{type:Fn}),N=new Ze({uniforms:{view:{value:T.texture},res:{value:new vt(1,1)},time:o,open:{value:0},ripple:{value:1},boost:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform sampler2D view; uniform vec2 res; uniform float time, open, ripple, boost; varying vec2 vUv;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          vec2 sc = gl_FragCoord.xy / res;
          float amp = (0.0035 + boost * 0.03) * ripple;
          vec2 off = vec2(sin(vUv.y * 22.0 + time * 1.9) + 0.5 * sin(vUv.y * 41.0 - time * 2.7), cos(vUv.x * 18.0 + time * 1.6) + 0.5 * cos(vUv.x * 37.0 + time * 2.3)) * amp;
          vec3 c = texture2D(view, sc + off).rgb;
          // The edge glimmers a little.
          vec2 e = min(vUv, 1.0 - vUv);
          float edge = 1.0 - smoothstep(0.0, 0.06, min(e.x * 2.0, e.y * 1.2));
          // Sparkles drifting slowly upwards (the dormant shimmer; faint over the open view too).
          vec2 g = vec2(vUv.x * 40.0, vUv.y * 60.0 - time * 1.2);
          float sp = step(0.985, hash(floor(g))) * (0.5 + 0.5 * sin(time * 3.0 + hash(floor(g) + 3.1) * 6.28));
          vec3 shimmer = vec3(0.75, 0.88, 1.0) * (sp * 0.5 + edge * 0.25);
          vec3 col = mix(vec3(0.0), c, open) + shimmer * (open > 0.5 ? 0.35 : 1.0);
          float a = mix(sp * 0.45 + edge * 0.18, 1.0, open);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,toneMapped:!0}),g=new pt(A,N);g.rotation.y=Math.PI,g.position.copy(Rt(-.02,0,0)),a.add(g),i.add(a);let M=new Ye,w=new ae,P=new ae,O=new ae;{let C=ne.arch,V=new U(C.d[0],0,C.d[1]),W=new U(C.r[0],0,C.r[1]);w.makeBasis(W.clone().negate(),new U(0,1,0),V).setPosition(C.o[0],0,C.o[1]);let z=new U(0,0,-1),K=new U(1,0,0);P.makeBasis(K.clone().negate(),new U(0,1,0),z).setPosition(0,0,5.2),O.copy(P).multiply(w.clone().invert())}let L=new Ln(new U(0,0,-1),5.2);r.arch={group:a,faceMat:N,faceMesh:g,target:T,vcam:M,draw(C,V,W){let z=C.getDrawingBufferSize(new vt),K=Math.max(16,Math.round(z.x*.5)),Z=Math.max(16,Math.round(z.y*.5));(T.width!==K||T.height!==Z)&&T.setSize(K,Z),N.uniforms.res.value.set(z.x,z.y),V.updateMatrixWorld(),M.copy(V,!1),M.matrixWorld.copy(O).multiply(V.matrixWorld),M.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(V.projectionMatrix);let b=L.clone().applyMatrix4(M.matrixWorldInverse),F=new ye(b.normal.x,b.normal.y,b.normal.z,b.constant),J=M.projectionMatrix.elements,k=new ye((Math.sign(F.x)+J[8])/J[0],(Math.sign(F.y)+J[9])/J[5],-1,(1+J[10])/J[14]);F.multiplyScalar(2/F.dot(k)),J[2]=F.x,J[6]=F.y,J[10]=F.z+1,J[14]=F.w,M.projectionMatrixInverse.copy(M.projectionMatrix).invert();let{setLight:et,own:lt,snowMat:H,figure:I}=W,B=H.uniforms.centre.value.clone();et(s),H.uniforms.centre.value.copy(M.position);let j=C.shadowMap.autoUpdate;C.shadowMap.autoUpdate=!1,g.visible=!1;let ut=I.visible;I.visible=!1,C.setRenderTarget(T),C.clear(),C.render(i,M),C.setRenderTarget(null),g.visible=!0,I.visible=ut,C.shadowMap.autoUpdate=j,H.uniforms.centre.value.copy(B),et(lt)}}}{let a=Tr("slide"),l=Te,c=4.2,h=3.2,d=l.front,u=d+l.depth,f=l.width/2,x=rp(),y=new kt({map:x}),p=(P,O,L,C,V,W)=>{let z=Math.hypot(L-P,C-O),K=new pt(new jt(z,V,.5),y),Z=Rt((P+L)/2,V/2,(O+C)/2);return K.position.copy(Z),K.rotation.y=Math.atan2(-(L-P),-(C-O)),K.castShadow=!0,K.receiveShadow=!0,a.add(K),K};p(d,-f,d,f,c),p(u,-f,u,f,c),p(d,-f,u,-f,c),p(d,f,u,f,c);for(let P of[d,u]){let O=new ln;O.moveTo(-f-.25,0),O.lineTo(f+.25,0),O.lineTo(0,h),O.lineTo(-f-.25,0);let L=new pt(new kn(O,{depth:.5,bevelEnabled:!1}),y);L.position.copy(Rt(P-.25,c,0)),a.add(L)}let m=op();m.wrapS=ei,m.repeat.set(3,1);let S=new kt({map:m,side:Ie});for(let P of[-1,1]){let O=d-.5,L=u+.5,C=c+h,V=P*(f+.6),W=c-.2,z=new fe;z.setAttribute("position",new Jt([0,C,O,V,W,O,V,W,L,0,C,L],3)),z.setAttribute("uv",new Jt([0,1,0,0,1,0,1,1],2)),z.setIndex([0,1,2,0,2,3]),z.computeVertexNormals();let K=new pt(z,S);K.castShadow=!0,K.receiveShadow=!0,a.add(K);let Z=new pt(new jt(.16,.14,L-O),new kt({color:Ut(n.snowColour)}));Z.position.set(V,W+.02,(O+L)/2),a.add(Z)}let R=new kt({map:os(),color:12036506}),v=[[d,-f],[d,f],[u,-f],[u,f],[d,-1.3],[d,1.3],...[6.1,10.1].flatMap(P=>[[P,-f],[P,f]])];for(let[P,O]of v){let L=new pt(new Ne(.34,.42,c+.5,9),R);L.position.copy(Rt(P,(c+.5)/2-.1,O)),L.castShadow=!0,a.add(L)}let A=new be({map:jh()}),T=new kt({color:3023127}),N=_n([[0,.5],[.4,.18],[1,0]]),g=(P,O,L,C,V,W)=>{let z=new ve;z.position.copy(Rt(P,V,O)),z.rotation.y=W;let K=new pt(new He(L,C).translate(0,C/2,0),A);z.add(K);for(let[b,F,J,k]of[[L+.2,.14,0,0],[L+.2,.14,0,C],[.12,C,-L/2,C/2],[.12,C,L/2,C/2],[.07,C,0,C/2],[L,.07,0,C*.55]]){let et=new pt(new jt(b,F,.1),T);et.position.set(J,k,.03),z.add(et)}let Z=new ke(new Be({map:N,color:Ut("#ffb870"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.6}));Z.position.set(0,C/2,.6),Z.scale.set(L*2.2,C*1.8,1),z.add(Z),a.add(z)};for(let P of Qt.tall)P.wall==="front"?g(d-.27,P.at,P.w,P.h,P.sill,Math.PI):g(P.at,f+.27,P.w,P.h,P.sill,-Math.PI/2);let M=new be({map:jh()});for(let P of Qt.round){let O=new ve;P.wall==="front"?(O.position.copy(Rt(d-.27,P.y,P.at)),O.rotation.y=Math.PI):(O.position.copy(Rt(P.at,P.y,-f-.27)),O.rotation.y=Math.PI/2),O.add(new pt(new Dn(P.r,24),M));let L=new pt(new An(P.r+.04,.07,6,24),T);L.position.z=.03,O.add(L);for(let V of[0,Math.PI/2]){let W=new pt(new jt(2*P.r,.05,.06),T);W.rotation.z=V,W.position.z=.03,O.add(W)}let C=new ke(new Be({map:N,color:Ut("#ffb870"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.45}));C.position.set(0,0,.5),C.scale.setScalar(P.r*4),O.add(C),a.add(O)}{let L=new ln;L.moveTo(-.75,0),L.lineTo(-.75,2.4-.75),L.absarc(0,2.4-.75,.75,Math.PI,0,!0),L.lineTo(.75,0),L.lineTo(-.75,0);let C=new pt(new kn(L,{depth:.12,bevelEnabled:!1,curveSegments:14}),new kt({map:sn("#5a3a22","rgba(30,16,8,0.35)",4)}));C.geometry.computeBoundingBox();{let z=C.geometry.attributes.position,K=C.geometry.attributes.uv;for(let Z=0;Z<z.count;Z++)K.setXY(Z,(z.getX(Z)+.75)/(2*.75),z.getY(Z)/2.4)}C.rotation.y=Math.PI,C.position.copy(Rt(d-.2,0,0)),a.add(C);let V=new ke(new Be({map:_n(),color:Ut("#ffc276"),blending:Ve,depthWrite:!1,transparent:!0}));V.position.copy(Rt(d-.45,2.3,1.15)),V.scale.setScalar(.9),a.add(V);let W=new pt(new jt(.16,.24,.16),new be({color:Ut("#ffd59a")}));W.position.copy(Rt(d-.4,2.3,1.15)),a.add(W)}let w=new pt(new jt(1.1,3.2,1.1),y);w.position.copy(Rt(u-.55,c+h-.2,0)),a.add(w),i.add(a),r.library={group:a}}return{parts:r,shimmerTime:o,setLook(a,l){let c=l==="open";a==="wardrobe"&&r.wardrobe.setGlow(c?1:0),a==="arch"&&(r.arch.faceMat.uniforms.open.value=c?1:0)}}}var pe=(i,t,e,n,s,r,o)=>{let a=new pt(new jt(Math.abs(n-e),Math.abs(r-s),Math.abs(t-i)),o);return a.position.copy(Rt((i+t)/2,(s+r)/2,(e+n)/2)),a},bi=i=>nc.find(t=>t.id===i);function hp(){let i=new ni,t=Tr("slide");i.add(t);let{u0:e,u1:n,v:s,ceiling:r}=Qt,o=qe(91),a=ap();a.wrapS=a.wrapT=ei;let l=new kt({map:a,side:Ie}),c=new kt({map:sn("#3e2716","rgba(20,10,4,0.4)",1)}),h=new kt({map:sn("#6a4428","rgba(30,16,8,0.3)",1)}),d=sn("#5b3b22","rgba(25,12,5,0.35)",6);d.wrapS=d.wrapT=ei,d.repeat.set(3,5);let u=new kt({map:d}),f=new kt({map:os(),color:12036506}),x=new kt({map:ic(7),color:10130570}),y=new kt({color:2369068}),p=new kt({color:11569738,emissive:1708038});{let b=new pt(new He(2*s,n-e).rotateX(-Math.PI/2),u);b.position.copy(Rt((e+n)/2,.01,0)),t.add(b);let F=new pt(new He(2*s,n-e).rotateX(Math.PI/2),c);F.position.copy(Rt((e+n)/2,r,0)),t.add(F);for(let J=e+1.4;J<n;J+=2.2)t.add(pe(J-.12,J+.12,-s,s,r-.26,r,c))}function m(b,F){let J=b==="front"||b==="back"?[-s,s]:[e,n],k=new Set([J[0],J[1]]),et=new Set([0,r]);for(let I of F)k.add(I.a0),k.add(I.a1),et.add(I.y0),et.add(I.y1);let lt=[...k].sort((I,B)=>I-B),H=[...et].sort((I,B)=>I-B);for(let I=0;I<lt.length-1;I++)for(let B=0;B<H.length-1;B++){let j=(lt[I]+lt[I+1])/2,ut=(H[B]+H[B+1])/2;if(F.some(X=>j>X.a0&&j<X.a1&&ut>X.y0&&ut<X.y1))continue;let tt=lt[I+1]-lt[I],it=H[B+1]-H[B],ot=new He(tt,it);{let X=ot.attributes.uv;for(let nt=0;nt<X.count;nt++)X.setXY(nt,(lt[I]+X.getX(nt)*tt)/2,(H[B]+X.getY(nt)*it)/2)}let G=new pt(ot,l);b==="front"?G.position.copy(Rt(e,ut,j)):b==="back"?(G.position.copy(Rt(n,ut,j)),G.rotation.y=Math.PI):b==="left"?(G.position.copy(Rt(j,ut,-s)),G.rotation.y=-Math.PI/2):(G.position.copy(Rt(j,ut,s)),G.rotation.y=Math.PI/2),t.add(G)}}let S={front:[],back:[],left:[],right:[]};for(let b of Qt.tall)S[b.wall].push({a0:b.at-b.w/2,a1:b.at+b.w/2,y0:b.sill,y1:b.sill+b.h});for(let b of Qt.round)S[b.wall].push({a0:b.at-b.r-.02,a1:b.at+b.r+.02,y0:b.y-b.r-.02,y1:b.y+b.r+.02});for(let b of Object.keys(S))m(b,S[b]);let R=new be({map:tu(!1),transparent:!0,depthWrite:!1,side:Ie}),v=new be({map:tu(!0),transparent:!0,depthWrite:!1,side:Ie}),A=new kt({color:3811352}),T=(b,F,J,k)=>{b==="front"?k.position.copy(Rt(e,J,F)):b==="left"?(k.position.copy(Rt(F,J,-s)),k.rotation.y=-Math.PI/2):(k.position.copy(Rt(F,J,s)),k.rotation.y=Math.PI/2),t.add(k)};for(let b of Qt.tall){let F=new ve,J=new pt(new He(b.w,b.h),R);J.renderOrder=2,F.add(J);for(let[et,lt,H,I]of[[b.w+.16,.12,0,-b.h/2],[b.w+.16,.12,0,b.h/2],[.12,b.h,-b.w/2,0],[.12,b.h,b.w/2,0],[.06,b.h,0,0],[b.w,.06,0,b.h*.05]]){let B=new pt(new jt(et,lt,.12),A);B.position.set(H,I,.02),F.add(B)}let k=new pt(new jt(b.w+.3,.06,.3),h);k.position.set(0,-b.h/2-.03,.15),F.add(k),T(b.wall,b.at,b.sill+b.h/2,F)}for(let b of Qt.round){let F=new ve,J=new ln,k=b.r+.02;J.moveTo(-k,-k),J.lineTo(k,-k),J.lineTo(k,k),J.lineTo(-k,k),J.lineTo(-k,-k);let et=new ps;et.absarc(0,0,b.r,0,Math.PI*2,!0),J.holes.push(et),F.add(new pt(new Ji(J,24),l));let lt=new pt(new Dn(b.r,24),v);lt.renderOrder=2,F.add(lt);let H=new pt(new An(b.r,.06,6,28),A);H.position.z=.02,F.add(H);for(let I of[0,Math.PI/2]){let B=new pt(new jt(2*b.r,.04,.05),A);B.rotation.z=I,B.position.z=.02,F.add(B)}T(b.wall,b.at,b.y,F)}{let b=Qt.door,F=2.4,J=new ln;J.moveTo(-b,0),J.lineTo(-b,F-b),J.absarc(0,F-b,b,Math.PI,0,!0),J.lineTo(b,0),J.lineTo(-b,0);let k=new kn(J,{depth:.08,bevelEnabled:!1,curveSegments:14});{let H=k.attributes.position,I=k.attributes.uv;for(let B=0;B<H.count;B++)I.setXY(B,(H.getX(B)+b)/(2*b),H.getY(B)/F)}let et=new pt(k,new kt({map:sn("#5a3a22","rgba(30,16,8,0.35)",4)}));et.position.copy(Rt(e+.01,0,0)),t.add(et);let lt=new pt(new jt(.2,.05,.05),y);lt.position.copy(Rt(e+.12,1.1,.45)),t.add(lt)}for(let[b,F]of Qt.columns){let J=new Ne(.42,.48,r,10,1,!0,0,Math.PI),k=new pt(J,f);b===0?(k.position.copy(Rt(e,r/2,F)),k.rotation.y=-Math.PI/2):(k.position.copy(Rt(b,r/2,F*s)),k.rotation.y=F>0?0:Math.PI),t.add(k)}for(let[b,F]of[[e,-s],[e,s],[n,-s],[n,s]]){let J=new pt(new Ne(.42,.48,r,10),f);J.position.copy(Rt(b,r/2,F)),t.add(J)}let N=[],g=["#6b1f1f","#2f4a2c","#3a2c1e","#1f3550","#7a5a1e","#4a1f3a","#5a4632","#2c3a3f","#8a3a24","#3d4a1f","#a08050","#232a3a"].map(Ut);function M({axis:b,a0:F,a1:J,at:k,back:et,y0:lt=0,height:H,levels:I,depth:B=.42,twoSided:j=!1}){let ut=new ve,tt=(ot,G,X,nt)=>b==="u"?pe(ot,G,k-B/2,k+B/2,X,nt,c):pe(k-B/2,k+B/2,ot,G,X,nt,c);ut.add(tt(F,F+.06,lt,lt+H)),ut.add(tt(J-.06,J,lt,lt+H));let it=H/I;for(let ot=0;ot<=I;ot++)ut.add(tt(F,J,lt+ot*it,lt+ot*it+.04));if(!j){let ot=b==="u"?pe(F,J,k+et*(B/2-.02),k+et*(B/2),lt,lt+H,c):pe(k+et*(B/2-.02),k+et*(B/2),F,J,lt,lt+H,c);ut.add(ot)}t.add(ut);for(let ot=0;ot<I;ot++){let G=lt+ot*it+.04,X=it-.08;for(let nt of j?[-1,1]:[-et]){let ct=F+.08;for(;ct<J-.12;){let mt=.04+o()*.06,It=Math.min(X,X*(.62+o()*.34)),St=B*(.5+o()*.25)/(j?2:1);if(o()<.06){ct+=.1+o()*.15;continue}let Bt=o()<.05?o()<.5?.25:-.25:0,Gt=j?nt*(St/2+.02):nt*(B/2-St/2-.04);N.push({axis:b,a:ct+mt/2,at:k+Gt,y:G+It/2,w:mt,h:It,d:St,lean:Bt,c:g[Math.floor(o()*g.length)].clone().multiplyScalar(.8+o()*.4)}),ct+=mt+.004}}}}let{mezz:w,stairs:P}=Qt;for(let b of[2.3,4.1,5.9,7.7])M({axis:"v",a0:w.v0+.45,a1:w.v1-.2,at:b,back:1,height:w.h-.12,levels:5,depth:.5,twoSided:!0});M({axis:"u",a0:e+.5,a1:w.u1-.1,at:w.v0+.21,back:-1,height:w.h-.12,levels:5});{let b=bi("mezz-shelves");M({axis:"u",a0:b.u0,a1:b.u1,at:w.v0+.22,back:-1,y0:w.h,height:.78,levels:2})}{let b=bi("shelf-back-right");M({axis:"v",a0:b.v0,a1:s-.1,at:n-.24,back:1,height:r-.3,levels:8})}{let b=bi("shelf-back-left");M({axis:"v",a0:b.v0,a1:b.v1,at:n-.24,back:1,height:2.4,levels:5})}for(let b of Qt.tall.filter(F=>F.wall==="right"))M({axis:"u",a0:b.at-b.w/2+.05,a1:b.at+b.w/2-.05,at:s-.17,back:1,height:b.sill-.08,levels:2,depth:.3});{let b=new jt(1,1,1),F=new si(b,new kt({color:16777215}),N.length),J=new ae,k=new pn;N.forEach((et,lt)=>{let H=et.axis==="u"?Rt(et.a,et.y,et.at):Rt(et.at,et.y,et.a),I=et.axis==="u"?new U(et.d,et.h,et.w):new U(et.w,et.h,et.d);k.setFromEuler(et.axis==="u"?new an(et.lean,0,0):new an(0,0,et.lean)),J.compose(H,k,I),F.setMatrixAt(lt,J),F.setColorAt(lt,et.c)}),t.add(F)}t.add(pe(w.u0,w.u1,w.v0,w.v1,w.h-.16,w.h,h)),t.add(pe(w.u0,w.u1,w.v1-.1,w.v1+.02,w.h-.36,w.h,c));for(let b of[3.2,6.8,w.u1-.1])t.add(pe(b-.09,b+.09,w.v1-.18,w.v1,0,w.h-.16,c));let O=(b,F,J,k)=>{let et=Rt(b[0],J,b[1]),lt=Rt(F[0],k,F[1]),H=et.distanceTo(lt),I=et.clone().add(lt).multiplyScalar(.5),B=new pt(new jt(.07,.06,H),c);B.position.copy(I).add(new U(0,.9,0)),B.lookAt(lt.clone().add(new U(0,.9,0))),t.add(B);let j=Math.max(2,Math.round(H/.32));for(let ut=0;ut<=j;ut++){let tt=et.clone().lerp(lt,ut/j),it=new pt(new jt(.035,.9,.035),c);it.position.copy(tt).add(new U(0,.45,0)),t.add(it)}};O([w.u0+.1,w.v1-.05],[w.u1,w.v1-.05],w.h,w.h);{let F=(P.u1-P.u0)/10;for(let J=0;J<10;J++){let k=w.h*(J+1)/10;t.add(pe(P.u1-(J+1)*F,P.u1-J*F,P.v0,P.v1,0,k,J%2?h:c))}O([P.u1,P.v1+.02],[P.u0,P.v1+.02],.05,w.h)}let L={};{let b=bi("fireplace");t.add(pe(b.u0+.25,n,b.v0,b.v0+.4,0,1.6,x)),t.add(pe(b.u0+.25,n,b.v1-.4,b.v1,0,1.6,x)),t.add(pe(b.u0+.25,n,b.v0,b.v1,1.25,1.6,x)),t.add(pe(b.u0+.05,n,b.v0-.15,b.v1+.15,1.6,1.72,c)),t.add(pe(n-.08,n,b.v0+.4,b.v1-.4,0,1.25,new kt({color:1708556}))),t.add(pe(b.u0-.1,n,b.v0-.1,b.v1+.1,0,.06,x)),t.add(pe(n-.05,n,-.55,.55,1.72,r,x));for(let[k,et]of[[-.15,.25],[.15,-.3],[0,0]]){let lt=new pt(new Ne(.08,.09,.75,7).rotateZ(Math.PI/2),f);lt.position.copy(Rt(b.u0+.45,.14+(k===0?.13:0),k)),lt.rotation.y=et,t.add(lt)}let F=new Be({map:_n([[0,1],[.25,.6],[1,0]]),color:Ut("#ff9a3c"),blending:Ve,depthWrite:!1,transparent:!0});L.flames=[-.18,.02,.2].map((k,et)=>{let lt=new ke(F.clone());return lt.position.copy(Rt(b.u0+.45,.42,k)),lt.scale.set(.35,.6,1),lt.userData.k=et,t.add(lt),lt});let J=new ke(new Be({map:_n(),color:Ut("#ff8a2c"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.55}));J.position.copy(Rt(b.u0+.3,.5,0)),J.scale.set(2.2,1.4,1),t.add(J),L.glow=J,L.light=new Xe(Ut("#ff9a4a"),12,14,1.3),L.light.position.copy(Rt(b.u0-.2,.7,0)),t.add(L.light)}let C=[];function V(b,F,J){let k=new ve;k.add(pe(b-.08,b+.08,F-.08,F+.08,J,J+.03,p)),k.add(pe(b-.015,b+.015,F-.015,F+.015,J,J+.36,p));let et=new pt(new Ne(.1,.17,.14,14,1,!0),new be({color:Ut("#ffcf8a"),side:Ie}));et.position.copy(Rt(b,J+.36,F)),k.add(et);let lt=new ke(new Be({map:_n(),color:Ut("#ffc27a"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.8}));lt.position.copy(Rt(b,J+.33,F)),lt.scale.setScalar(.8),k.add(lt);let H=new Xe(Ut("#ffbf78"),7,9,1.4);H.position.copy(Rt(b,J+.3,F)),k.add(H),t.add(k),C.push(H)}for(let b of["table1","table2"]){let F=bi(b),J=.76;t.add(pe(F.u0,F.u1,F.v0,F.v1,J-.06,J,h));for(let[et,lt]of[[F.u0+.12,F.v0+.12],[F.u1-.12,F.v0+.12],[F.u0+.12,F.v1-.12],[F.u1-.12,F.v1-.12]])t.add(pe(et-.05,et+.05,lt-.05,lt+.05,0,J-.06,c));V(F.u1-.35,F.v1-.3,J);let k=bi(b==="table1"?"chairs1":"chairs2");for(let et of[k.u0+.3,k.u1-.3]){t.add(pe(et-.24,et+.24,k.v0,k.v0+.45,.44,.49,h)),t.add(pe(et-.24,et+.24,k.v0+.42,k.v0+.47,.49,1.05,h));for(let[lt,H]of[[-.2,.04],[.2,.04],[-.2,.42],[.2,.42]])t.add(pe(et+lt-.03,et+lt+.03,k.v0+H-.03,k.v0+H+.03,0,.44,c))}}let W={};{let b=bi("table1"),F=.76,J=new kt({map:lp(),side:Ie});for(let[B,j,ut]of[[b.u0+.55,b.v0+.45,.3],[b.u0+1.15,b.v0+.55,-.5]]){let tt=new ve;for(let it of[-1,1]){let ot=new pt(new jt(.2,.012,.28),new kt({color:(it<0,7020319)}));ot.position.set(it*.1,.006,0),ot.rotation.z=it*-.06,tt.add(ot);let G=new pt(new He(.19,.26).rotateX(-Math.PI/2),J);G.position.set(it*.1,.03,0),G.rotation.z=it*-.08,tt.add(G)}tt.position.copy(Rt(B,F,j)),tt.rotation.y=ut,t.add(tt)}let k=new pt(new Ne(.045,.038,.09,12),new kt({color:15262422}));k.position.copy(Rt(b.u0+1.55,F+.045,b.v0+.3)),t.add(k);let et=new pt(new An(.025,.007,6,10),k.material);et.position.copy(Rt(b.u0+1.55,F+.05,b.v0+.36)),et.rotation.y=Math.PI/2,t.add(et);let lt=Rt(b.u0+.9,F,b.v0+.2),H=new pt(new Ne(.06,.07,.02,12),p);H.position.copy(lt).add(new U(0,.01,0)),t.add(H);let I=new pt(new Ne(.022,.024,.16,10),new kt({color:15919832,emissive:2760720}));I.position.copy(lt).add(new U(0,.1,0)),t.add(I),W.flame=new ke(new Be({map:_n([[0,1],[.3,.55],[1,0]]),color:Ut("#ffcf7a"),blending:Ve,depthWrite:!1,transparent:!0})),W.flame.position.copy(lt).add(new U(0,.22,0)),W.flame.scale.set(.07,.13,1),t.add(W.flame),W.light=new Xe(Ut("#ffc070"),1.2,2.5,1.6),W.light.position.copy(lt).add(new U(0,.26,0)),t.add(W.light)}{let b=bi("nook-chair"),F=w.h,J=new kt({color:8010282});t.add(pe(b.u0,b.u1,b.v0,b.v1,F,F+.42,J)),t.add(pe(b.u0-.05,b.u0+.12,b.v0,b.v1,F,F+1,J));for(let et of[b.v0,b.v1-.14])t.add(pe(b.u0,b.u1,et,et+.14,F,F+.62,J));let k=bi("nook-table");t.add(pe(k.u0,k.u1,k.v0,k.v1,F+.55,F+.6,h)),t.add(pe((k.u0+k.u1)/2-.04,(k.u0+k.u1)/2+.04,(k.v0+k.v1)/2-.04,(k.v0+k.v1)/2+.04,F,F+.55,c)),V((k.u0+k.u1)/2,(k.v0+k.v1)/2,F+.6),t.add(pe(b.u0+.3,b.u0+.52,b.v1-.13,b.v1-.01,F+.62,F+.66,new kt({color:2045264})))}{let b=bi("ladder"),F=(b.v0+b.v1)/2,J=new pt(new Ne(.02,.02,Qt.v-1.5,8).rotateX(Math.PI/2),p);J.position.copy(Rt(n-.5,r-.45,(1.5+Qt.v)/2)),J.rotation.y=Math.PI/2,t.add(J);for(let k of[-1,1]){let et=Rt(b.u0+.05,0,F+k*.22),lt=Rt(n-.5,r-.45,F+k*.22),H=et.distanceTo(lt),I=new pt(new jt(.05,.05,H),h);I.position.copy(et.clone().add(lt).multiplyScalar(.5)),I.lookAt(lt),t.add(I);let B=new pt(new Ne(.04,.04,.03,10).rotateX(Math.PI/2),p);B.position.copy(et).add(new U(0,.04,0)),t.add(B)}for(let k=1;k<11;k++){let et=k/11,lt=Rt(b.u0+.05,0,F),H=Rt(n-.5,r-.45,F),I=lt.clone().lerp(H,et),B=new pt(new Ne(.018,.018,.44,6).rotateZ(Math.PI/2),h);B.position.copy(I),t.add(B)}}let z={};{let b=Qt.bench;t.add(pe(b.u0,b.u1,b.v0,b.v1,b.h-.06,b.h,h));for(let ot of[b.u0+.1,b.u1-.1])t.add(pe(ot-.04,ot+.04,b.v0+.05,b.v1-.03,0,b.h-.06,c));let F=Qt.littleDoor,J=F.half,k=F.y1-F.y0,et=new pt(new He(2*J,k),new be({color:1707270}));et.position.copy(Rt(F.u,F.y0+k/2,s-.005)),et.rotation.y=Math.PI/2,t.add(et),t.add(pe(F.u-J-.03,F.u+J+.03,s-.04,s,F.y1,F.y1+.03,c));for(let ot of[-1,1])t.add(pe(F.u+ot*(J+.015)-.015,F.u+ot*(J+.015)+.015,s-.04,s,F.y0,F.y1,c));let lt=new ln;lt.moveTo(-J,0),lt.lineTo(-J,k-J),lt.absarc(0,k-J,J,Math.PI,0,!0),lt.lineTo(J,0),lt.lineTo(-J,0);let H=new kn(lt,{depth:.02,bevelEnabled:!1,curveSegments:10}).translate(J,0,0);{let ot=H.attributes.position,G=H.attributes.uv;for(let X=0;X<ot.count;X++)G.setXY(X,ot.getX(X)/(2*J),ot.getY(X)/k)}let I=new ve;I.position.copy(Rt(F.u+J,F.y0,s-.03)),I.rotation.y=Math.PI/2;let B=new pt(H,new kt({map:sn("#7a5030","rgba(30,16,8,0.4)",3)}));I.add(B);let j=new pt(new gn(.012,8,6),p);j.position.set(2*J-.04,k*.45,.025),I.add(j);let ut=new ve,tt=new pt(new Dn(.009,10),new be({color:328450}));tt.position.set(2*J-.04,k*.3,.021);let it=new pt(new He(.007,.02),tt.material);it.position.set(2*J-.04,k*.3-.012,.021),ut.add(tt,it),I.add(ut),t.add(I),z.hinge=I,z.keyhole=ut,z.glow=new ke(new Be({map:_n(),color:Ut("#ffb060"),blending:Ve,depthWrite:!1,transparent:!0,opacity:0})),z.glow.position.copy(Rt(F.u,F.y0+k*.45,s-.08)),z.glow.scale.setScalar(.35),t.add(z.glow)}i.add(new Fi(Ut("#7d8db5"),.55)),i.add(new xs(Ut("#93a4d0"),Ut("#4a3424"),.45));let K=new Xe(Ut("#ffb070"),3.5,18,1.2);K.position.copy(Rt((e+n)/2,r-.6,.5)),t.add(K);let Z=!1;return{scene:i,group:t,setLook(b){Z=b==="open",z.keyhole.visible=!Z},setLittleDoor(b){z.hinge.rotation.y=Math.PI/2+b*1.7},tick(b){let F=(et,lt)=>.5+.5*Math.sin(b*et+lt),J=.75+.25*F(8.3,0)*F(5.1,1.3)+.1*F(17,2);L.light.intensity=12*J,L.glow.material.opacity=.4+.25*J;for(let et of L.flames){let lt=et.userData.k;et.scale.set(.3+.08*F(6+lt,lt),.5+.2*F(9+lt*2,lt*1.7),1)}let k=.85+.15*F(11,.4)*F(7,2);W.light.intensity=1.2*k,W.flame.scale.set(.07,.12+.03*k,1),z.glow.material.opacity=Z?.25+.1*F(2,0):0}}}var Rs=(i,t,e)=>{let n=ci(i);return new U(n.x+n.rx*t,Uo+e,n.z+n.rz*t)};function up(){let i=new ni,{half:t,height:e,door:n}=Xn,s=e-t,r=eu(),o=new kt({map:r,side:Ie});{let z=[];for(let ot=0;ot<=4;ot++)z.push([-t,ot/4*s]);for(let ot=1;ot<16;ot++){let G=Math.PI-ot/16*Math.PI;z.push([Math.cos(G)*t,s+Math.sin(G)*t])}for(let ot=4;ot>=0;ot--)z.push([t,ot/4*s]);let K=[0];for(let ot=1;ot<z.length;ot++)K.push(K[ot-1]+Math.hypot(z[ot][0]-z[ot-1][0],z[ot][1]-z[ot-1][1]));let Z=[],b=n+1.2;for(let ot=0;ot<=b+1e-9;ot+=.25)Z.push(ot);let F=[],J=[],k=[];Z.forEach((ot,G)=>z.forEach(([X,nt],ct)=>{let mt=Rs(ot,X,nt);F.push(mt.x,mt.y,mt.z),J.push(K[ct]/2.4,ot/3)}));let et=z.length;for(let ot=0;ot<Z.length-1;ot++)for(let G=0;G<et-1;G++){let X=ot*et+G;k.push(X,X+et,X+1,X+1,X+et,X+et+1)}let lt=new fe;lt.setAttribute("position",new Jt(F,3)),lt.setAttribute("uv",new Jt(J,2)),lt.setIndex(k),lt.computeVertexNormals(),i.add(new pt(lt,o));let H=eu();H.repeat.set(1,4);let I=[],B=[],j=[];Z.forEach((ot,G)=>{for(let X of[-t,t]){let nt=Rs(ot,X,.005);I.push(nt.x,nt.y,nt.z),B.push((X+t)/2,ot/3)}if(G){let X=(G-1)*2;j.push(X,X+2,X+1,X+1,X+2,X+3)}});let ut=new fe;ut.setAttribute("position",new Jt(I,3)),ut.setAttribute("uv",new Jt(B,2)),ut.setIndex(j),ut.computeVertexNormals(),i.add(new pt(ut,new kt({map:H,color:10127994,side:Ie})));let tt=new kt({color:15265527,transparent:!0,opacity:.55,depthWrite:!1});for(let ot=0;ot<9;ot++){let G=.1+Math.pow(ot/9,1.4)*1.8,X=Math.sin(ot*2.1)*.55,nt=.18+ot%3*.08,ct=new pt(new Dn(nt*(1-G/2.4),10).rotateX(-Math.PI/2),tt);ct.position.copy(Rs(G,X,.012)),i.add(ct)}let it=new pt(new ri(new wn(z.map(([ot,G])=>Rs(.02,ot*1.02,G+.01))),40,.06,6,!1),new kt({map:sn("#9a7248","rgba(60,36,18,0.3)",1)}));i.add(it)}let a=new kt({color:1513500}),l=ci(n),c=new ve;c.position.copy(Rs(n,0,0)),c.rotation.y=Math.atan2(-l.dx,-l.dz),i.add(c);let h=2*t-.06,d=e-.04,u=new ve;u.position.set(h/2,0,0),c.add(u);let f=new kt({map:sn("#5a3a22","rgba(25,12,5,0.4)",1)}),x=z=>{let K=t-.03,Z=Math.abs(z);return Z<K?s+Math.sqrt(K*K-Z*Z)-.02:s},y=[],p=5,m=h/p;for(let z=0;z<p;z++){let K=-h/2+z*m+.012,Z=K+m-.024,b=(K+Z)/2,F=Math.min(x(K),x(Z)),J=new pt(new jt(Z-K,F,.09),f);J.position.set(-b-h/2,F/2,0),u.add(J),z&&y.push(-(K-.012)-h/2)}let S=new be({color:Ut("#ffc27a"),transparent:!0,opacity:0,depthWrite:!1});for(let z of y){let K=new pt(new He(.02,s+.4),S);K.position.set(z,(s+.4)/2+.05,-.06),u.add(K)}for(let z of[.35,1.15,1.9]){let K=h*.78,Z=new pt(new jt(K,.07,.02),a);Z.position.set(-K/2-.08,z,.056),u.add(Z);let b=new pt(new An(.07,.016,6,16,Math.PI*1.5),a);b.position.set(-K-.08,z+.07,.06),b.rotation.z=Math.PI*.25,u.add(b);let F=b.clone();F.scale.setScalar(.6),F.position.set(-K*.55,z-.07,.06),F.rotation.z=Math.PI*1.25,u.add(F);for(let J=0;J<5;J++){let k=new pt(new gn(.025,8,6),a);k.position.set(-.15-J*(K/5),z,.07),u.add(k)}}let R=new pt(new An(.08,.014,6,16),a);R.position.set(-h+.25,1.05,.08),u.add(R);let v=new pt(new jt(h+.3,.11,.08),a);c.add(v);for(let z of[-h/2-.05,h/2+.05]){let K=new pt(new jt(.1,.2,.16),a);K.position.set(z,1.15,.1),c.add(K)}let A=z=>{v.position.set(-h/2*z*1.1+(1-z)*0,1.15+z*.05,.16+z*.06),v.rotation.z=z*(Math.PI/2-.12),z>.99&&v.position.set(-t+.12,(h+.3)/2,.25)},T=new be({color:Ut("#ffb45a"),transparent:!0,opacity:0,fog:!1,depthWrite:!1}),N=new pt(new He(2*t+.4,e+.3),T);N.position.set(0,e/2,-.7),c.add(N);let g=new Xe(Ut("#ffb45a"),0,6,1.4);g.position.set(0,1.4,-.4),c.add(g);let M=(z,K,Z,b)=>(z.position.set(K,Z,b),z),w=new ve;w.position.copy(Rs(n-.45,-t+.2,1.55)),i.add(w),w.add(M(new pt(new jt(.03,.03,.22),a),0,.24,0));for(let[z,K]of[[1,1],[1,-1],[-1,1],[-1,-1]])w.add(M(new pt(new jt(.02,.24,.02),a),z*.07,0,K*.07));w.add(M(new pt(new Sn(.11,.1,4).rotateY(Math.PI/4),a),0,.17,0));let P=new pt(new jt(.12,.2,.12),new be({color:Ut("#ffcf86")}));w.add(P);let O=new ke(new Be({map:_n(),color:Ut("#ffbf70"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.8}));O.scale.setScalar(.9),w.add(O);let L=new Xe(Ut("#ffb86a"),4,7,1.4);w.add(L);let C=new Xe(Ut("#9fb6ff"),1.6,4.5,1.5);C.position.copy(Rs(.4,0,1.5)),i.add(C),i.add(new Fi(Ut("#6a5a50"),.35));let V="dormant",W={scene:i,setLook(z){V=z==="open"?"open":"dormant",A(V==="open"?1:0),S.opacity=V==="open"?.85:0},setDoor(z){u.rotation.y=-z*1.6},setBeyond(z){T.opacity=z,g.intensity=6*z},tick(z){let K=.85+.15*Math.sin(z*7.1)*Math.sin(z*3.3+1);L.intensity=4*K,O.material.opacity=.65+.2*K,V==="open"&&(S.opacity=.7+.2*Math.sin(z*1.7))}};return W.setLook("dormant"),W}var qn={wood:3,ice:3.6,blue:1.5},nu="#4260b0";function dp(i,t,e,n=.12){let s=i.computeFrenetFrames(t,!1),r=[],o=[],a=[],l=14,c=new U(0,1,0);for(let d=0;d<=t;d++){let u=i.getPointAt(d/t),f=s.tangents[d],x=new U().crossVectors(f,c).normalize(),y=new U().crossVectors(f,x).normalize();y.y>0&&y.negate();for(let p=0;p<=l;p++){let m=-n+p/l*(Math.PI+2*n),S=u.clone().addScaledVector(x,Math.cos(m)*e).addScaledVector(y,Math.sin(m)*e);r.push(S.x,S.y,S.z),o.push(p/l,d/6)}if(d)for(let p=0;p<l;p++){let m=(d-1)*(l+1)+p;a.push(m,m+l+1,m+1,m+1,m+l+1,m+l+2)}}let h=new fe;return h.setAttribute("position",new Jt(r,3)),h.setAttribute("uv",new Jt(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function fp({forest:i,groundAt:t}){let e=new ni;e.background=Ut("#080503");let n=3.2,s=1.1,r=7.5,o=new wn(Array.from({length:80},(g,M)=>{let w=M/79,P=w*n*Math.PI*2;return new U(Math.cos(P)*s,-w*r,Math.sin(P)*s)})),a=new cr({map:sn("#8a5a30","rgba(40,20,8,0.3)",1),shininess:70,specular:5583650,emissive:2757640,side:Ie});e.add(new pt(dp(o,360,.16),a));let l=os();l.repeat.set(4,3);let c=new pt(new Ne(2.1,2.1,r+3,24,1,!0),new kt({map:l,color:9071188,side:Je}));c.position.y=-r/2+.5,e.add(c);let h=new kt({map:os(),color:6967360});for(let g=0;g<16;g++){let M=-2.5-g/16*(r-2),w=g*2.4,P=[new U(Math.cos(w)*2.2,M+.4,Math.sin(w)*2.2),new U(Math.cos(w+.5)*1.5,M,Math.sin(w+.5)*1.5),new U(Math.cos(w+1.1)*2.2,M-.5,Math.sin(w+1.1)*2.2)];e.add(new pt(new ri(new wn(P),12,.05+g%3*.03,6,!1),h))}let d=new Be({map:_n(),color:Ut("#ffb860"),blending:Ve,depthWrite:!1,transparent:!0});for(let g=0;g<18;g++){let M=(g+.5)/18,w=o.getPointAt(M),P=new U(w.x,0,w.z).normalize(),O=new ke(d);O.position.copy(w).addScaledVector(P,.55).add(new U(0,.3,0)),O.scale.setScalar(.45),e.add(O);let L=new pt(new gn(.035,8,6),new be({color:Ut("#ffd59a")}));L.position.copy(O.position),e.add(L)}let u=new Xe(Ut("#ffbe78"),4,4,1.4);e.add(u);for(let g=0;g<4;g++){let M=new Xe(Ut("#ffaa60"),5,5,1.3);M.position.set(0,-.6-g*2.1,0),e.add(M)}e.add(new Fi(Ut("#6a4a34"),.9));let f=Jh(.5).map(([g,M],w,P)=>{let O=w/(P.length-1),L=Math.max(0,(O-.86)/.14);return new U(g,t(g,M)+.22+(1-O)*.25-L*L*1.6,M)}),x=new wn(f),y=new ve,p=new cr({color:Ut("#a8dcf0"),emissive:Ut("#24506a"),specular:16777215,shininess:110,transparent:!0,opacity:.82,side:Ie,depthWrite:!1}),m=new pt(dp(x,420,.24,.25),p);m.renderOrder=1,y.add(m);let S=new kt({color:Ut("#e6ecf6")});for(let g of[-1,1]){let M=[];for(let P=0;P<=80;P++){let O=P/80*.86,L=x.getPointAt(O),C=x.getTangentAt(O),V=new U(-C.z,0,C.x).normalize(),W=L.clone().addScaledVector(V,g*.4);W.y=t(W.x,W.z)+.06,M.push(W)}let w=new pt(new ri(new wn(M),200,.2,7,!1),S);w.scale.y=1,y.add(w)}{let g=x.getPointAt(0),M=new pt(new gn(1.2,14,8).scale(1.3,.6,1.3),S);M.position.set(g.x,t(g.x,g.z),g.z),y.add(M);let w=new pt(new Dn(.26,14),new be({color:656900})),P=x.getTangentAt(.01);w.position.copy(x.getPointAt(.004)),w.lookAt(w.position.clone().add(P)),y.add(w)}let[R,v]=Mr,A=new U(R,t(R,v)-1.2,v);{let g=new pt(new An(2.3,.45,8,28).rotateX(Math.PI/2).scale(1,.5,1),S);g.position.set(R,t(R+2.7,v)+.05,v),y.add(g);let M=new pt(new Dn(1.5,24).rotateX(-Math.PI/2),new be({color:Ut("#8aa0e0")}));M.position.set(R,t(R,v)-.02,v),y.add(M);let w=new ke(new Be({map:_n(),color:Ut("#6f8ce0"),blending:Ve,depthWrite:!1,transparent:!0,opacity:.85}));w.position.set(R,t(R,v)+.6,v),w.scale.set(4.5,2.6,1),y.add(w);let P=new Xe(Ut("#6f8ce0"),5,9,1.5);P.position.set(R,t(R,v)+.8,v),y.add(P)}i.add(y);let T=qn.wood+qn.ice+qn.blue;function N(g){if(g<qn.wood){let L=g/qn.wood,C=L*L*(3-2*L)*.25+L*.75,V=o.getPointAt(Math.min(1,C)),W=o.getPointAt(Math.min(1,C+.03)),z=o.getPointAt(Math.max(0,C-.025));return u.position.copy(W).add(new U(0,.25,0)),{part:"wood",scene:"ride",rider:W.clone().add(new U(0,-.1,0)),cam:z.clone().add(new U(0,.12,0)),look:o.getPointAt(Math.min(1,C+.07)),k:L}}if(g<qn.wood+qn.ice){let L=(g-qn.wood)/qn.ice,C=Math.min(.9,L*.9),V=x.getPointAt(C+.012),W=x.getPointAt(Math.max(0,C-.004));return{part:"ice",scene:"forest",rider:V.clone().add(new U(0,-.12,0)),cam:W.clone().add(new U(0,.16,0)),look:x.getPointAt(Math.min(1,C+.05)).add(new U(0,.05,0)),k:L}}let M=Math.min(1,(g-qn.wood-qn.ice)/qn.blue),w=.9+M*.1,P=x.getPointAt(Math.min(1,w)),O=x.getPointAt(Math.max(0,w-.01));return{part:"blue",scene:"forest",rider:P.clone(),cam:O.clone().add(new U(0,.25-M*.2,0)),look:A.clone().lerp(P,.3*(1-M)),k:M}}return{scene:e,woodCurve:o,iceCurve:x,iceGroup:y,blueAt:A,rideAt:N,total:T}}var Fo={v:1,tile:"winter-forest",place:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.place/winter-forest",entry:"ways-only",exits:[{id:"wardrobe",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.wardrobe",fallback:"https://thunderbird.cafe/way/winter-forest/wardrobe"},{id:"tree-door",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.tree-door",fallback:"https://thunderbird.cafe/way/winter-forest/tree-door"},{id:"arch",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.arch",fallback:"https://thunderbird.cafe/way/winter-forest/arch"},{id:"slide",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.slide",fallback:"https://thunderbird.cafe/way/winter-forest/slide"}],entrances:[{id:"lamppost"},{id:"wardrobe"},{id:"tree-door"},{id:"arch"}]};var lv="tiles-protocol-up-way-payload",cv="tiles-protocol-down-way-payload",pp=1,hv=1e3,uv=["n","ne","e","se","s","sw","w","nw"];function dv(i){let t=(-i/(Math.PI*2)%1+1)%1;return uv[Math.round(t*8)%8]}function mp({ways:i=Fo,win:t=window,onStatus:e=()=>{},onArrive:n=()=>{},timers:s={setTimeout:(r,o)=>setTimeout(r,o)}}={}){let r=t.parent&&t.parent!==t,o=f=>i.exits.find(x=>x.id===f)||null,a=f=>i.entrances.some(x=>x.id===f),l="waiting",c=new Map,h=f=>{r&&t.parent.postMessage({action:lv,payload:{v:pp,...f}},"*")};t.addEventListener("message",f=>{if(!r||f.source!==t.parent)return;let x=f.data;if(!x||x.action!==cv||!x.payload||x.payload.v!==pp)return;let y=x.payload;if(y.kind==="status"){if(!y.exits||typeof y.exits!="object")return;l="host";for(let p of i.exits)c.set(p.id,y.exits[p.id]==="open"?"open":"dormant");e()}else if(y.kind==="arrive"){if(typeof y.entrance!="string"||!a(y.entrance))return;l="host",n(y.entrance)}});let d=()=>h({kind:"hello",tile:i.tile,ways:"/ways.json"});r&&(d(),s.setTimeout(()=>{l==="waiting"&&d()},500));let u=()=>{l==="waiting"&&(l="plain",e())};return s.setTimeout(u,r?hv:0),{state(f){return l==="host"?c.get(f)||"dormant":l},leave(f,x=0){return l!=="host"||!o(f)?!1:(h({kind:"leave",exit:f,facing:dv(x)}),!0)},get host(){return l==="host"},get mode(){return l}}}var sc=0,iu=0;function su({inFrame:i=!0}={}){let t=document.getElementById("postcard"),e=document.getElementById("pcsnow"),n=document.getElementById("pcline");if(!t)return;t.hidden=!1,n.classList.remove("show"),clearTimeout(iu),iu=setTimeout(()=>n.classList.add("show"),i?1400:600);let s=e.getContext("2d"),r=[],o=0,a=0,l=performance.now(),c=()=>{let u=Math.min(2,window.devicePixelRatio||1);o=t.clientWidth,a=t.clientHeight,e.width=Math.max(1,Math.round(o*u)),e.height=Math.max(1,Math.round(a*u)),s.setTransform(u,0,0,u,0,0);let f=Math.round(o*a/2600);for(;r.length<f;)r.push({x:Math.random()*o,y:Math.random()*a,r:.6+Math.random()*1.8,s:12+Math.random()*26,p:Math.random()*6.28});r.length=f};c(),window.addEventListener("resize",c);let h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=u=>{let f=Math.min(.1,(u-l)/1e3);l=u,s.clearRect(0,0,o,a);for(let x of r)h||(x.y+=x.s*f,x.x+=Math.sin(u/1400+x.p)*6*f),x.y>a+4&&(x.y=-4,x.x=Math.random()*o),s.globalAlpha=.45+x.r*.2,s.fillStyle="#f2f6ff",s.beginPath(),s.arc(x.x,x.y,x.r,0,Math.PI*2),s.fill();sc=requestAnimationFrame(d)};cancelAnimationFrame(sc),sc=requestAnimationFrame(d)}function ru(){let i=document.getElementById("postcard");i&&(i.hidden=!0),cancelAnimationFrame(sc),clearTimeout(iu)}var Yn=If,Jn=i=>document.getElementById(i),Ar=Jn("stage"),Mp="winter-forest",uu=(()=>{try{return JSON.parse(localStorage.getItem(Mp)||"{}")}catch{return{}}})(),Sp=()=>{try{localStorage.setItem(Mp,JSON.stringify({sound:Rr.sound,reduce:dc?hi:void 0}))}catch{}},Rr={...Df(),sound:uu.sound!==!1},au=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},dc=typeof uu.reduce=="boolean",hi=dc?uu.reduce:!!au.matches,je=new $l({antialias:!0,preserveDrawingBuffer:!1});je.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Ar.appendChild(je.domElement);var Ps=Xf(je,Yn),{scene:Vo,camera:Qe,groundAt:du,walkWorld:fv,figure:wi}=Ps,Cn=cp({scene:Vo,renderer:je,sceneParts:Ps,look:Yn,other:Lf}),Go=hp(),Bn=up(),Ho=fp({forest:Vo,groundAt:du}),Tn=Pf(Rr),Ep={forest:Vo,library:Go.scene,tunnel:Bn.scene,ride:Ho.scene};{let[i,t]=ue(ne.slide,Qt.u1-.5,0);Tn.setFirePos(i,.6,t)}var fu={lamppost:{...bs.lamppost,place:"forest"},wardrobe:{...bs.wardrobe,place:"forest"},"tree-door":{...np,place:"tunnel"},arch:{...bs.arch,place:"forest"}},_t={x:bs.lamppost.x,z:bs.lamppost.z,yaw:bs.lamppost.yaw,y:0,bob:0,steps:0,size:1},Me="forest",bn="postcard",Is=!1,we=null,zo=null,bp=0,wr=null,lu="",Ue={pos:new U,look:new U,ready:!1,override:null},Zn={forward:!1,back:!1,left:!1,right:!1},cc={x:0,y:0},ac=0,pv=Jn("where"),ou=Jn("note"),rc=Jn("fade"),Tp=Jn("fadetext"),wp=Jn("hint"),hc=Jn("soundbtn"),Cr=Jn("gearbtn"),Cs=Jn("menu"),cu=Jn("reduce"),gp=0;function Ap(i,t=2600){ou.textContent=i,ou.classList.add("show"),clearTimeout(gp),gp=setTimeout(()=>ou.classList.remove("show"),t)}function ko(i){i!==lu&&(lu=i,pv.textContent=`Winter Forest · ${i}`)}var mv=["#2a1a0c","#0b1020","#05070c","#1c1209",nu];function En(i,t,e=0,n=""){rc.style.transition=e?`opacity ${e}ms ease`:"none",i&&(rc.style.background=i),rc.style.opacity=String(t),Tp.textContent=n,i&&rc.classList.toggle("dark",mv.includes(i))}function Rp(){hc.textContent=Rr.sound?"Sound on":"Sound off",hc.setAttribute("aria-pressed",String(Rr.sound))}hc.addEventListener("click",()=>{Rr.sound=!Rr.sound,Sp(),Tn.start(),Tn.apply(),Rp(),hc.blur()});Rp();var Cp=()=>{Is&&Tn.start()};addEventListener("keydown",Cp,{capture:!0});addEventListener("pointerdown",Cp,{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden?Tn.pause():Is&&Tn.resume()});Cr.addEventListener("click",()=>{let i=Cs.hidden;Cs.hidden=!i,Cr.setAttribute("aria-expanded",String(i)),i&&Pp()});Jn("menuclose").addEventListener("click",()=>{Cs.hidden=!0,Cr.setAttribute("aria-expanded","false"),Cr.focus()});Jn("tolamp").addEventListener("click",()=>{Cs.hidden=!0,Cr.setAttribute("aria-expanded","false"),bn==="walking"&&pu("lamppost",{quick:!0})});cu.addEventListener("change",()=>{hi=cu.checked,dc=!0,Sp()});function Pp(){cu.checked=hi}au.addEventListener&&au.addEventListener("change",i=>{dc||(hi=i.matches),Pp()});var gv=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;wp.textContent=gv?"Left thumb down in the lower left to walk · drag on the right to turn":"Hold ↑ or W to walk · ← → or A D to turn · or drag across the view";var xp=!1,xv=()=>{!xp&&Is&&(xp=!0,wp.classList.add("gone"))};wf({canvas:je.domElement,held:Zn,stick:cc,isFree:()=>!0,onCommand:()=>{},onDrag:i=>{ac+=i},onMoved:xv,blocked:()=>bn!=="walking"||!Cs.hidden,onKey:i=>i.code==="Escape"&&!Cs.hidden?(Cs.hidden=!0,Cr.setAttribute("aria-expanded","false"),!0):!1}).setMovement("free");var as=mp({onStatus:()=>{for(let i of Fo.exits)Cn.setLook(i.id,as.state(i.id));Bn.setLook(as.state("tree-door")),Go.setLook(as.state("slide"))},onArrive:i=>_v(i)});su({inFrame:window.parent!==window});function uc(i){Me=i;let t=Ep[i]||Vo;wi.parent!==t&&t.add(wi),Cn.parts.library.group.visible=i!=="library",Cn.parts.trunk.group.visible=i!=="tunnel",Tn.setPlace(i),Ue.ready=!1}function Ip(i){Object.assign(_t,{x:i.x,z:i.z,yaw:i.yaw}),_t.y=Bo(_t.x,_t.z)}function Bo(i,t){return Me==="library"?Kh(i,t):Me==="tunnel"?Uo:du(i,t)}var _p={lamppost:"#0b1020",wardrobe:"#ffffff","tree-door":"#c98a3e",arch:"#cfe2ee"};function _v(i){if(fu[i]){Is||(Is=!0,ru(),Ar.hidden=!1,pc(),requestAnimationFrame(Fp),Tn.start()),zo=null;for(let t in Zn)Zn[t]=!1;pu(i,{quick:!1})}}function yv(){Cn.parts.wardrobe.setOpen(0),Cn.parts.wardrobe.setBeyond(0),Cn.parts.arch.faceMat.uniforms.boost.value=0,Bn.setDoor(0),Bn.setBeyond(0),Go.setLittleDoor(0),_t.size=1,wi.scale.setScalar(1),wi.visible=!0}function pu(i,{quick:t}){let e=fu[i];yv(),uc(e.place),Ip(e),Ue.ready=!1,Ue.override=null,wr=null,t||hi?(En(_p[i],1,0),requestAnimationFrame(()=>En(null,0,450)),bn="walking",we=null):(En(_p[i],1,0),bn="arriving",we={kind:`arrive-${i}`,t:0},i==="wardrobe"&&Cn.parts.wardrobe.setOpen(1),i==="tree-door"&&(Bn.setDoor(1),Bn.setBeyond(1)),requestAnimationFrame(()=>En(null,0,i==="lamppost"?1400:900))),ko(fc())}function oc(i,t){bn="passing";for(let e in Zn)Zn[e]=!1;we={kind:"pass",t:0,to:i,spot:t,swapped:!1},En("#05070c",1,hi?200:330),Tn.door()}var vv="This doesn't lead anywhere yet.";function Mv(i){if(i.kind==="mouth"){oc("tunnel",ep);return}if(i.kind==="door"&&i.id==="slide"){oc("library",Jf);return}if(i.kind==="door-out"){oc("forest",$f);return}if(i.kind==="mouth-out"){oc("forest",ip);return}let t=i.id;if(as.state(t)!=="open"){Ap(vv);return}Ev(t)}var Sv={wardrobe:"#ffffff",arch:"#cfe2ee","tree-door":"#c98a3e",slide:"#1c1209"};function Ev(i){bn="going";for(let t in Zn)Zn[t]=!1;if(Tn.portal(i),hi){we={kind:"fade-out",t:0,id:i},En(Sv[i],1,500);return}we={kind:i==="slide"?"shrink":`through-${i}`,t:0,id:i,from:{x:_t.x,z:_t.z}}}function Oo(i){if(bn="leaving",zo=i,bp=performance.now(),we=null,Tn.ride(null),!as.leave(i,_t.yaw)){Lp();return}Tp.textContent="On your way…"}function Lp(){let i=zo;zo=null,pu(fu[i]?i:"lamppost",{quick:!0}),setTimeout(()=>Ap("The way is blocked."),300)}var bv=8e3,Ti=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)};function Tv(i){if(!we)return;we.t+=i;let t=we,e=t.t,n=Cn.parts.wardrobe,s=Cn.parts.arch;if(t.kind==="pass"){!t.swapped&&e>(hi?.22:.36)&&(t.swapped=!0,uc(t.to),Ip(t.spot),wr=null,Ue.ready=!1,ko(fc()),En(null,0,hi?200:360)),e>(hi?.45:.75)&&(we=null,bn="walking");return}if(t.kind==="fade-out"){e>.55&&Oo(t.id);return}if(t.kind==="through-wardrobe"){let r=ne.wardrobe;n.setOpen(Ti(e/1)),n.setBeyond(Math.min(1,e/.9));let o=Math.min(1,Math.max(0,(e-.5)/1.1)),[a,l]=ue(r,-.5+o*1.2,Re(r,t.from.x,t.from.z)[1]*(1-o));_t.x=a,_t.z=l,_t.bob+=i*9*(o>0&&o<1?1:0);let[c,h]=ue(r,-2.2+Ti(o)*2.3,0),[d,u]=ue(r,2,0);Ue.override={pos:new U(c,1.45,h),look:new U(d,1.2,u)},e>.9&&!t.faded&&(t.faded=!0,En("#ffffff",1,700)),e>1.7&&Oo("wardrobe");return}if(t.kind==="through-arch"){let r=ne.arch,o=Math.min(1,e/1.5),[a,l]=ue(r,-.6+o*.7,Re(r,t.from.x,t.from.z)[1]*(1-o));_t.x=a,_t.z=l,_t.bob+=i*7,o>.55&&(wi.visible=!1);let[c,h]=ue(r,-3+Ti(o)*2.95,0),[d,u]=ue(r,3,0);Ue.override={pos:new U(c,1.55-o*.2,h),look:new U(d,1.45,u)},s.faceMat.uniforms.boost.value=Math.min(1,e/1.4),e>1.2&&!t.faded&&(t.faded=!0,En("#cfe2ee",1,700)),e>2&&Oo("arch");return}if(t.kind==="through-tree-door"){Bn.setDoor(Ti(e/1.1)),Bn.setBeyond(Math.min(1,e/1));let r=As(t.from.x,t.from.z),o=Math.min(1,Math.max(0,(e-.6)/1)),a=ci(r.s+o*1.4),l=r.w*(1-Ti(o));_t.x=a.x+a.rx*l,_t.z=a.z+a.rz*l,_t.bob+=i*8*(o>0&&o<1?1:0),e>.9&&!t.faded&&(t.faded=!0,En("#c98a3e",1,700)),e>1.8&&Oo("tree-door");return}if(t.kind==="shrink"){let r=Ti(e/1);if(_t.size=1-r*.82,wi.scale.setScalar(_t.size),e>1&&Go.setLittleDoor(Ti((e-1)/.45)),e>1.35){let[o,a]=Re(ne.slide,_t.x,_t.z),l=Math.min(1,(e-1.35)/.5),[c,h]=ue(ne.slide,o+(Qt.littleDoor.u-o)*l,a+(Qt.v+.15-a)*l);_t.x=c,_t.z=h,_t.bob+=i*10}e>1.85&&!t.faded&&(t.faded=!0,En("#1c1209",1,160)),e>2.05&&(we={kind:"ride",t:0,id:"slide",part:null},_t.size=.18);return}if(t.kind==="ride"){let r=Ho.rideAt(e);r.part!==t.part&&(t.part=r.part,r.scene!==Me&&uc(r.scene),ko("down the slide"),Tn.ride(r.part),r.part==="wood"&&En(null,0,220),r.part==="ice"&&(En("#e8f0ff",.85,0),requestAnimationFrame(()=>En(null,0,260)))),_t.x=r.rider.x,_t.z=r.rider.z,_t.y=r.rider.y;let o=r.look.clone().sub(r.rider);_t.yaw=Math.atan2(-o.x,-o.z),Ue.override={pos:r.cam,look:r.look},r.part==="blue"&&r.k>.35&&!t.faded&&(t.faded=!0,En(nu,1,700)),e>Ho.total+.1&&Oo("slide");return}if(t.kind==="arrive-wardrobe"){e>.35&&n.setOpen(1-Ti((e-.35)/.9)),e>1.3&&(n.setOpen(0),we=null,bn="walking");return}if(t.kind==="arrive-tree-door"){e>.3&&(Bn.setDoor(1-Ti((e-.3)/.9)),Bn.setBeyond(1-Ti((e-.3)/.8))),e>1.3&&(Bn.setDoor(0),Bn.setBeyond(0),we=null,bn="walking");return}if(t.kind==="arrive-arch"){s.faceMat.uniforms.boost.value=Math.max(0,1-e/1.2),e>1.2&&(s.faceMat.uniforms.boost.value=0,we=null,bn="walking");return}t.kind.startsWith("arrive-")&&e>.9&&(we=null,bn="walking")}function fc(){return Me==="library"?Qh(_t.x,_t.z):Me==="tunnel"?"inside the great tree":Me==="ride"||we&&we.kind==="ride"?"down the slide":Wf(_t.x,_t.z)}function wv(){if(Me==="tunnel")return"hollow";if(Me==="library")return"wood";let[i,t]=Re(ne.wardrobe,_t.x,_t.z);if(i>-8*.52&&i<.3&&Math.abs(t)<1.3)return"boards";let e=Math.hypot(_t.x,_t.z);return e>7-.3||Math.abs(e-3.2)<.6?"path":"snow"}function Av(i){if(bn!=="walking")return;let t=(Zn.right?1:0)-(Zn.left?1:0)+cc.x;_t.yaw-=Math.max(-1,Math.min(1,t))*Yn.turnSpeed*Math.PI/180*i+(Yn.mouseTurn?ac*.006:0),ac=0;let e=Math.max(-1,Math.min(1,(Zn.forward?1:0)-(Zn.back?1:0)-cc.y)),n=[-Math.sin(_t.yaw),-Math.cos(_t.yaw)];if(e){let s=[_t.x+n[0]*e*Yn.walkSpeed*i,_t.z+n[1]*e*Yn.walkSpeed*i],r=[s[0]-_t.x,s[1]-_t.z],o=_t.y,[a,l]=Me==="library"?qf([_t.x,_t.z],r):Me==="tunnel"?Qf([_t.x,_t.z],r):Gf([_t.x,_t.z],r,fv);_t.x=a,_t.z=l,_t.bob+=i*9*Math.abs(e);let c=Math.floor(_t.bob/Math.PI);if(c!==_t.steps){_t.steps=c;let d=Me==="library"&&Qh(_t.x,_t.z)==="on the stairs";Tn.step({surface:wv(),creak:d&&Math.random()<.35})}let h=null;e>0&&(Me==="library"?h=Yf(_t.x,_t.z,s[0],s[1]):Me==="tunnel"?h=jf(_t.x,_t.z,s[0],s[1]):h=$h(s[0],s[1])||$h(_t.x,_t.z)),h&&wr!==h.id+h.kind?(wr=h.id+h.kind,Mv(h)):h||(wr=null),Me==="library"&&Kh(_t.x,_t.z)-o>.3&&Tn.hop()}ac=0,ko(fc())}function Dp(i){if(!(we&&we.kind==="ride")){let e=Bo(_t.x,_t.z);_t.y+=(e-_t.y)*Math.min(1,i*14),Math.abs(e-_t.y)<.002&&(_t.y=e)}let t=Me==="library"&&Math.abs(Bo(_t.x,_t.z)-_t.y)>.05?Math.sin(Math.min(1,Math.abs(Bo(_t.x,_t.z)-_t.y)/.45)*Math.PI)*.12:0;wi.position.set(_t.x,_t.y+t+Math.abs(Math.sin(_t.bob))*.04*_t.size,_t.z),wi.rotation.y=_t.yaw}function Np(i){let t,e;if(Ue.override)t=Ue.override.pos,e=Ue.override.look;else{let s=_t.size,r=new U(-Math.sin(_t.yaw),0,-Math.cos(_t.yaw)),o=new U(-r.z,0,r.x),a=new U(_t.x,_t.y,_t.z);if(t=a.clone().addScaledVector(r,-Yn.distance*s).addScaledVector(o,Yn.shoulder*s),t.y=a.y+Yn.height*s,Me==="forest"){t.y=Math.max(t.y,du(t.x,t.z)+.4);let[l,c]=Re(ne.wardrobe,t.x,t.z),[h]=Re(ne.wardrobe,_t.x,_t.z);if(h>-8&&l>-.35&&Math.abs(c)<3){l=-.35,c=Math.max(-cn.inner,Math.min(cn.inner,c));let[d,u]=ue(ne.wardrobe,l,c);t.x=d,t.z=u}l>-cn.depth-.4&&l<.2&&Math.abs(c)<cn.half+.4&&(t.y=Math.min(t.y,cn.height-.3))}else if(Me==="library"&&s>.9){let l=Kf(t,_t);t.set(l.x,l.y,l.z)}else if(Me==="tunnel"){let l=ci(As(_t.x,_t.z).s),c=r.x*l.dx+r.z*l.dz>0,h=sp(t,_t,c);t.set(h.x,h.y,h.z)}e=a.clone().addScaledVector(r,Yn.lookAhead*s),e.y=a.y+Yn.lookHeight*s}let n=Ue.ready?1-Math.exp(-(Ue.override?we&&we.kind==="ride"?30:5:Yn.follow)*i):1;Ue.pos.lerp(t,n),Ue.look.lerp(e,n),Ue.ready=!0,Qe.position.copy(Ue.pos),Qe.lookAt(Ue.look),Qe.near=_t.size<.5?.01:.05,Qe.updateProjectionMatrix(),Ps.snowMat.uniforms.centre.value.copy(Ue.pos)}var yp=performance.now(),hu=!1,Rv=new U(...(()=>{let[i,t]=ue(ne.arch,0,0);return[i,1.8,t]})());function Up(i){let t=i/1e3;if(Ps.tick(t),Go.tick(t),Bn.tick(t),Cn.shimmerTime.value=t,Me==="ride"){je.render(Ho.scene,Qe);return}let e=Cn.parts.arch;if(Me==="forest"&&e.faceMat.uniforms.open.value>.5){let n=Rv.clone().sub(Qe.position),s=new U;Qe.getWorldDirection(s);let[r]=Re(ne.arch,Qe.position.x,Qe.position.z);n.length()<34&&n.normalize().dot(s)>.2&&r<.2&&e.draw(je,Qe,Ps)}je.render(Vo,Qe),(Me==="library"||Me==="tunnel")&&(je.autoClear=!1,je.clearDepth(),je.render(Ep[Me],Qe),je.autoClear=!0)}function Fp(i){let t=Math.min(.1,(i-yp)/1e3)*(window.__forest.timeScale||1);if(yp=i,!hu){Av(t),Tv(t),Dp(t),Np(t),bn==="leaving"&&i-bp>bv&&Lp();let e=Math.hypot(_t.x,_t.z),[n,s]=Re(ne.wardrobe,_t.x,_t.z),r=Me==="forest"&&n>-9&&n<.5&&Math.abs(s)<3?Math.min(1,(n+8+1)/4):0,[o,a]=Re(ne.arch,_t.x,_t.z),l=Me==="forest"&&as.state("arch")==="open"?Math.max(0,1-Math.hypot(o,a)/9):0;Tn.update({camPos:Ue.pos,camFwd:new U().subVectors(Ue.look,Ue.pos).normalize(),outside:Me==="forest"?Math.min(1,Math.max(0,(e-7+1)/5)):0,lane:r,archNear:Math.max(l,Cn.parts.arch.faceMat.uniforms.boost.value),ride:we&&we.kind==="ride"?Ho.rideAt(we.t):null}),Up(i)}requestAnimationFrame(Fp)}function pc(){let i=Ar.clientWidth||innerWidth,t=Ar.clientHeight||innerHeight;je.setSize(i,t),Qe.aspect=i/t,Qe.updateProjectionMatrix(),Ps.snowMat.uniforms.scale.value=t*je.getPixelRatio()}addEventListener("resize",pc);pc();window.__forest={state:()=>({phase:bn,place:Me,entered:Is,x:_t.x,z:_t.z,y:_t.y,yaw:_t.yaw,size:_t.size,area:lu,ways:as.mode,exits:Object.fromEntries(Fo.exits.map(i=>[i.id,as.state(i.id)])),anim:we&&we.kind,part:we&&we.part,leftBy:zo,reduceMotion:hi,archOpen:Cn.parts.arch.faceMat.uniforms.open.value,wardrobeGlow:Cn.parts.wardrobe.lineMat.opacity,cam:[Qe.position.x,Qe.position.z,Qe.position.y]}),jump(i,t,e,n){n&&n!==Me&&uc(n),Object.assign(_t,{x:i,z:t,yaw:e}),_t.y=Bo(i,t),Ue.ready=!1,wr=null,ko(fc())},held:Zn,stick:cc,timeScale:1,snapshot(i,t,e){hu=!0,ru(),Ar.hidden=!1;let n=je.getPixelRatio();je.setPixelRatio(1),je.setSize(i,t,!1),Qe.aspect=i/t,Qe.updateProjectionMatrix(),Ps.snowMat.uniforms.scale.value=t,wi.visible=!!e.figure,Object.assign(_t,{x:e.x,z:e.z,yaw:e.yaw}),Dp(1),Ue.override=e.camera?{pos:new U(...e.camera),look:new U(...e.look)}:null,Ue.ready=!1,Np(1),Up(performance.now());let s=je.domElement.toDataURL("image/png");return wi.visible=!0,Ue.override=null,je.setPixelRatio(n),pc(),hu=!1,Is||(Ar.hidden=!0,su({inFrame:window.parent!==window})),s}};})();
