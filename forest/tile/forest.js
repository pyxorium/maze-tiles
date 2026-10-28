/* Winter Forest (thunderbird.cafe). Includes three.js (MIT licence, three.js authors). */
(()=>{var ad=0,rh=1,ld=2;var Ms=1,cd=2,dr=3,is=0,Qe=1,Pe=2,Ei=0,fr=1,Ge=2,oh=3,ah=4,hd=5;var Es=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,_d=203,lh=204,ch=205,yd=206,vd=207,Md=208,Ed=209,Sd=210,bd=211,Td=212,wd=213,Ad=214,Sa=0,ba=1,Ta=2,nr=3,wa=4,Aa=5,Ra=6,Ca=7,vo=0,Rd=1,Cd=2,ai=0,hh=1,uh=2,dh=3,Mo=4,fh=5,ph=6,mh=7;var gh=300,ss=301,Ss=302,ol=303,al=304,Eo=306,ni=1e3,xi=1001,Pa=1002,rn=1003,Pd=1004;var So=1005;var cn=1006,ll=1007;var rs=1008;var Rn=1009,xh=1010,_h=1011,pr=1012,cl=1013,li=1014,Gn=1015,Fn=1016,hl=1017,ul=1018,mr=1020,yh=35902,vh=35899,Mh=1021,Eh=1022,Vn=1023,yi=1026,os=1027,dl=1028,fl=1029,as=1030,pl=1031;var ml=1033,bo=33776,To=33777,wo=33778,Ao=33779,gl=35840,xl=35841,_l=35842,yl=35843,vl=36196,Ml=37492,El=37496,Sl=37488,bl=37489,Ro=37490,Tl=37491,wl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Nl=37816,Ul=37817,Fl=37818,Bl=37819,Ol=37820,Hl=37821,zl=36492,kl=36494,Gl=36495,Vl=36283,Wl=36284,Co=36285,Xl=36286;var Wr=2300,Ia=2301,Ma=2302,Yc=2303,Zc=2400,Jc=2401,$c=2402;var Id=3200;var Po=0,Ld=1,Oi="",ln="srgb",Xr="srgb-linear",qr="linear",Ee="srgb";var Ea=7680;var Dd=519,Nd=512,Ud=513,Fd=514,ql=515,Bd=516,Od=517,Yl=518,Hd=519,Sh=35044;var bh="300 es",ei=2e3,ir=2001;function Kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){let i=Yr("canvas");return i.style.display="block",i}var Ru={},sr=null;function Zr(...i){let t="THREE."+i.shift();sr?sr("log",t,...i):console.log(t,...i)}function kd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=kd(i);let t="THREE."+i.shift();if(sr)sr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=kd(i);let t="THREE."+i.shift();if(sr)sr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in Ru||(Ru[t]=!0,jt(...i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Sa]:ba,[Ta]:Ra,[wa]:Ca,[nr]:Aa,[ba]:Sa,[Ra]:Ta,[Ca]:wa,[Aa]:nr},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vc=Math.PI/180,La=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function jp(i,t){return(i%t+t)%t}function Mc(i,t,e){return(1-e)*i+e*t}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var vt=Ph,xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let M=Math.acos(p),C=Math.sin(M);m=Math.sin(m*M)/C,a=Math.sin(a*M)/C,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+y*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var U=Ih,Ec=new U,Cu=new xn,Lh=class Lh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],M=s[1],C=s[4],v=s[7],A=s[2],w=s[5],N=s[8];return r[0]=o*y+a*M+l*A,r[3]=o*p+a*C+l*w,r[6]=o*m+a*v+l*N,r[1]=c*y+h*M+d*A,r[4]=c*p+h*C+d*w,r[7]=c*m+h*v+d*N,r[2]=u*y+f*M+g*A,r[5]=u*p+f*C+g*w,r[8]=u*m+f*v+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;var ne=Lh,Sc=new ne,Pu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ee&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var de=tm();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Yr("canvas")),Bs.width=t.width,Bs.height=t.height;let s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},em=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bc(s[o].image)):r.push(bc(s[o]))}else r=bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var nm=0,Tc=new U,Sn=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=cn,o=rs,a=Vn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ni(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ni:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ni:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=gh;Sn.DEFAULT_ANISOTROPY=1;var Dh=class Dh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,v=(f+1)/2,A=(m+1)/2,w=(h+u)/4,N=(d+y)/4,x=(g+p)/4;return C>v&&C>A?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=N/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=N/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;var Se=Dh,Na=class extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Wi.crossVectors(n,Pn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Wi.crossVectors(n,Pn)),Wi.normalize(),Zo.crossVectors(Pn,Wi),s[0]=Wi.x,s[4]=Zo.x,s[8]=Pn.x,s[1]=Wi.y,s[5]=Zo.y,s[9]=Pn.y,s[2]=Wi.z,s[6]=Zo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],M=n[3],C=n[7],v=n[11],A=n[15],w=s[0],N=s[4],x=s[8],S=s[12],B=s[1],z=s[5],L=s[9],k=s[13],P=s[2],O=s[6],q=s[10],H=s[14],J=s[3],$=s[7],it=s[11],st=s[15];return r[0]=o*w+a*B+l*P+c*J,r[4]=o*N+a*z+l*O+c*$,r[8]=o*x+a*L+l*q+c*it,r[12]=o*S+a*k+l*H+c*st,r[1]=h*w+d*B+u*P+f*J,r[5]=h*N+d*z+u*O+f*$,r[9]=h*x+d*L+u*q+f*it,r[13]=h*S+d*k+u*H+f*st,r[2]=g*w+y*B+p*P+m*J,r[6]=g*N+y*z+p*O+m*$,r[10]=g*x+y*L+p*q+m*it,r[14]=g*S+y*k+p*H+m*st,r[3]=M*w+C*B+v*P+A*J,r[7]=M*N+C*z+v*O+A*$,r[11]=M*x+C*L+v*q+A*it,r[15]=M*S+C*k+v*H+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],M=l*f-c*u,C=a*f-c*d,v=a*u-l*d,A=o*f-c*h,w=o*u-l*h,N=o*d-a*h;return e*(y*M-p*C+m*v)-n*(g*M-p*A+m*w)+s*(g*C-y*A+m*N)-r*(g*v-y*w+p*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],M=e*a-n*o,C=e*l-s*o,v=e*c-r*o,A=n*l-s*a,w=n*c-r*a,N=s*c-r*l,x=h*y-d*g,S=h*p-u*g,B=h*m-f*g,z=d*p-u*y,L=d*m-f*y,k=u*m-f*p,P=M*k-C*L+v*z+A*B-w*S+N*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return t[0]=(a*k-l*L+c*z)*O,t[1]=(s*L-n*k-r*z)*O,t[2]=(y*N-p*w+m*A)*O,t[3]=(u*w-d*N-f*A)*O,t[4]=(l*B-o*k-c*S)*O,t[5]=(e*k-s*B+r*S)*O,t[6]=(p*v-g*N-m*C)*O,t[7]=(h*N-u*v+f*C)*O,t[8]=(o*L-a*B+c*x)*O,t[9]=(n*B-e*L-r*x)*O,t[10]=(g*w-y*v+m*M)*O,t[11]=(d*v-h*w-f*M)*O,t[12]=(a*S-o*z-l*x)*O,t[13]=(e*z-n*S+s*x)*O,t[14]=(y*C-g*A-p*M)*O,t[15]=(h*A-d*C+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,p=o*d,m=a*d,M=l*c,C=l*h,v=l*d,A=n.x,w=n.y,N=n.z;return s[0]=(1-(y+m))*A,s[1]=(f+v)*A,s[2]=(g-C)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+m))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(g+C)*N,s[9]=(p-M)*N,s[10]=(1-(u+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let c=1/o,h=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===ei)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ir)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===ei)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ir)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var le=rl,Os=new U,Qn=new le,im=new U(0,0,0),sm=new U(1,1,1),Wi=new U,Zo=new U,Pn=new U,Lu=new le,Du=new xn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rm=0,Nu=new U,Hs=new xn,Ri=new le,Jo=new U,Lr=new U,om=new U,am=new xn,Uu=new U(1,0,0),Fu=new U(0,1,0),Bu=new U(0,0,1),Ou={type:"added"},lm={type:"removed"},zs={type:"childadded",child:null},wc={type:"childremoved",child:null},on=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new hn,n=new xn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new ne}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Lr,Jo,this.up):Ri.lookAt(Jo,Lr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),zs.child=t,this.dispatchEvent(zs),zs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new U(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},cm={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=jp(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ac(o,r,t+1/3),this.g=Ac(o,r,t),this.b=Ac(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return de.workingToColorSpace(gn.copy(this),t),Math.round(ce(gn.r*255,0,255))*65536+Math.round(ce(gn.g*255,0,255))*256+Math.round(ce(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){de.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL($o);let n=Mc(Xi.h,$o.h,e),s=Mc(Xi.s,$o.s,e),r=Mc(Xi.l,$o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ee;ee.NAMES=Wd;var Kr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ii=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new U,Ci=new U,Rc=new U,Pi=new U,ks=new U,Gs=new U,Hu=new U,Cc=new U,Pc=new U,Ic=new U,Lc=new Se,Dc=new Se,Nc=new Se,Di=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),Ci.subVectors(n,e),Rc.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ci),l=jn.dot(Rc),c=Ci.dot(Ci),h=Ci.dot(Rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lc,r.x),o.addScaledVector(Dc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),Ci.subVectors(t,e),jn.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,n),Gs.subVectors(r,n),Cc.subVectors(t,n);let l=ks.dot(Cc),c=Gs.dot(Cc);if(l<=0&&c<=0)return e.copy(n);Pc.subVectors(t,s);let h=ks.dot(Pc),d=Gs.dot(Pc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ks,o);Ic.subVectors(t,r);let f=ks.dot(Ic),g=Gs.dot(Ic);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gs,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Hu.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Hu,a);let m=1/(p+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(ks,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Qo.subVectors(this.max,Dr),Vs.subVectors(t.a,Dr),Ws.subVectors(t.b,Dr),Xs.subVectors(t.c,Dr),qi.subVectors(Ws,Vs),Yi.subVectors(Xs,Ws),ds.subVectors(Vs,Xs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ds.z,ds.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ds.z,0,-ds.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ds.y,ds.x,0];return!Uc(e,Vs,Ws,Xs,Qo)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Vs,Ws,Xs,Qo))?!1:(jo.crossVectors(qi,Yi),e=[jo.x,jo.y,jo.z],Uc(e,Vs,Ws,Xs,Qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,Ko=new Mi,Vs=new U,Ws=new U,Xs=new U,qi=new U,Yi=new U,ds=new U,Dr=new U,Qo=new U,jo=new U,fs=new U;function Uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fs.fromArray(i,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qe=new U,ta=new vt,hm=0,Be=class extends vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},um=new Mi,Nr=new U,Fc=new U,Fi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Fc)),this.expandByPoint(Nr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dm=0,zn=new le,Bc=new on,qs=new U,In=new Mi,Ur=new Mi,sn=new U,fe=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kp(t)?jr:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(In.min,Ur.min),In.expandByPoint(sn),sn.addVectors(In.max,Ur.max),In.expandByPoint(sn)):(In.expandByPoint(Ur.min),In.expandByPoint(Ur.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),sn.add(qs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new U,l[x]=new U;let c=new U,h=new U,d=new U,u=new vt,f=new vt,g=new vt,y=new U,p=new U;function m(x,S,B){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,B),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(z),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(z),a[x].add(y),a[S].add(y),a[B].add(y),l[x].add(p),l[S].add(p),l[B].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,S=M.length;x<S;++x){let B=M[x],z=B.start,L=B.count;for(let k=z,P=z+L;k<P;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let C=new U,v=new U,A=new U,w=new U;function N(x){A.fromBufferAttribute(s,x),w.copy(A);let S=a[x];C.copy(S),C.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);let z=v.dot(l[x])<0?-1:1;o.setXYZW(x,C.x,C.y,C.z,z)}for(let x=0,S=M.length;x<S;++x){let B=M[x],z=B.start,L=B.count;for(let k=z,P=z+L;k<P;k+=3)N(t.getX(k+0)),N(t.getX(k+1)),N(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new U,to=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oc=new U,fm=new U,pm=new ne,Ln=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oc.subVectors(n,e).cross(fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pm.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mm=0,si=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=fr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oe=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Fr=new U,Zs=new U,Js=new U,$s=new vt,Br=new vt,Xd=new le,ea=new U,Or=new U,na=new U,zu=new vt,Hc=new vt,ku=new vt,He=class extends on{constructor(t=new Oe){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fa(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new to(n,3,0,!1)),Ys.setAttribute("uv",new to(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ia(ea.set(-.5,-.5,0),Js,o,Zs,s,r),ia(Or.set(.5,-.5,0),Js,o,Zs,s,r),ia(na.set(.5,.5,0),Js,o,Zs,s,r),zu.set(0,0),Hc.set(1,0),ku.set(1,1);let a=t.ray.intersectTriangle(ea,Or,na,!1,Fr);if(a===null&&(ia(Or.set(-.5,.5,0),Js,o,Zs,s,r),Hc.set(0,1),a=t.ray.intersectTriangle(ea,na,Or,!1,Fr),a===null))return;let l=t.ray.origin.distanceTo(Fr);l<t.near||l>t.far||e.push({distance:l,point:Fr.clone(),uv:Di.getInterpolation(Fr,ea,Or,na,zu,Hc,ku,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(i,t,e,n,s,r){$s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*$s.x-s*$s.y,Br.y=s*$s.x+r*$s.y):Br.copy($s),i.copy(t),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(Xd)}var Li=new U,zc=new U,sa=new U,ra=new U,eo=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(sa,u),f}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,C=n.z-o.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),N,x,S,B,z,L,k,P,O,q,H,J;if(v>=A&&v>=w?(S=l,L=d,O=g,J=m,l>=0?(N=c,x=h,B=u,z=f,k=y,P=p,q=M,H=C):(N=h,x=c,B=f,z=u,k=p,P=y,q=C,H=M)):A>=w?(S=c,L=u,O=y,J=M,c>=0?(N=h,x=l,B=f,z=d,k=p,P=g,q=C,H=m):(N=l,x=h,B=d,z=f,k=g,P=p,q=m,H=C)):(S=h,L=f,O=p,J=C,h>=0?(N=l,x=c,B=d,z=u,k=g,P=y,q=m,H=M):(N=c,x=l,B=u,z=d,k=y,P=g,q=M,H=m)),S===0)return null;let $=N/S,it=x/S,st=1/S,yt=B-$*L,ct=z-it*L,St=k-$*O,I=P-it*O,G=q-$*J,R=H-it*J,E=G*I-R*St,T=yt*R-ct*G,X=St*ct-I*yt;if(s){if(E<0||T<0||X<0)return null}else if((E<0||T<0||X<0)&&(E>0||T>0||X>0))return null;let V=E+T+X;if(V===0)return null;let K=st*(E*L+T*O+X*J);return(V>0?K<0:K>0)?null:this.at(K/V,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new le,ps=new eo,oa=new Fi,Vu=new U,aa=new U,la=new U,ca=new U,kc=new U,ha=new U,Wu=new U,ua=new U,ut=class extends on{constructor(t=new fe,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(kc.fromBufferAttribute(d,t),o?ha.addScaledVector(kc,h):ha.addScaledVector(kc.sub(e),h))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(oa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(oa,Vu)===null||ps.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),C=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,A=C;v<A;v+=3){let w=a.getX(v),N=a.getX(v+1),x=a.getX(v+2);s=da(this,m,t,n,c,h,d,w,N,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let M=a.getX(p),C=a.getX(p+1),v=a.getX(p+2);s=da(this,o,t,n,c,h,d,M,C,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),C=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,A=C;v<A;v+=3){let w=v,N=v+1,x=v+2;s=da(this,m,t,n,c,h,d,w,N,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let M=p,C=p+1,v=p+2;s=da(this,o,t,n,c,h,d,M,C,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function gm(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===is,a),l===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,aa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=gm(i,t,e,n,aa,la,ca,Wu);if(h){let d=new U;Di.getBarycoord(Wu,aa,la,ca,d),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Di.getNormal(aa,la,ca,u.normal),h.face=u,h.barycoord=d}return h}var no=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,h=rn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var io=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new le,Xu=new le,fa=[],qu=new Mi,xm=new le,Hr=new ut,zr=new Fi,ri=class extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),qu.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),zr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),t.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Xu.multiplyMatrices(n,Ks),Hr.matrixWorld=Xu,Hr.raycast(t,fa);for(let o=0,a=fa.length;o<a;o++){let l=fa[o];l.instanceId=r,l.object=this,e.push(l)}fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new no(new Float32Array(s*this.count),s,this.count,dl,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Fi,_m=new vt(.5,.5),pa=new U,ar=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],C=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,m-g,A-M).normalize(),s[1].setComponents(c+o,f+h,m+g,A+M).normalize(),s[2].setComponents(c+a,f+d,m+y,A+C).normalize(),s[3].setComponents(c-a,f-d,m-y,A-C).normalize(),n)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,m-p,A-v).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-v).normalize(),e===ei)s[5].setComponents(c+l,f+u,m+p,A+v).normalize();else if(e===ir)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=_m.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ba=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new le,Kc=new eo,ma=new Fi,ga=new U,lr=class extends on{constructor(t=new fe,e=new Ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Yu.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let p=c.getX(g);ga.fromBufferAttribute(d,p),Zu(ga,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)ga.fromBufferAttribute(d,g),Zu(ga,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zu(i,t,e,n,s,r,o){let a=Kc.distanceSqToPoint(i);if(a<e){let l=new U;Kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var so=class extends Sn{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ji=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Sn{constructor(t,e,n=li,s,r,o,a=rn,l=rn,c,h=yi,d=1){if(h!==yi&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oa=class extends $i{constructor(t,e=li,n=ss,s,r,o=rn,a=rn,l,c=yi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$t=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(y,p,m,M,C,v,A,w,N,x,S){let B=v/N,z=A/x,L=v/2,k=A/2,P=w/2,O=N+1,q=x+1,H=0,J=0,$=new U;for(let it=0;it<q;it++){let st=it*z-k;for(let yt=0;yt<O;yt++){let ct=yt*B-L;$[y]=ct*M,$[p]=st*C,$[m]=P,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[m]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(yt/N),d.push(1-it/x),H+=1}}for(let it=0;it<x;it++)for(let st=0;st<N;st++){let yt=u+st+O*it,ct=u+st+O*(it+1),St=u+(st+1)+O*(it+1),I=u+(st+1)+O*it;l.push(yt,ct,I),l.push(ct,St,I),J+=6}a.addGroup(f,J,S),f+=J,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oo=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,y=s+1,p=new U,m=new U;for(let M=0;M<=g;M++){let C=0,v=0,A=0,w=0;if(M<=n){let S=M/n,B=S*Math.PI/2;v=-h-t*Math.cos(B),A=t*Math.sin(B),w=-t*Math.cos(B),C=S*d}else if(M<=n+r){let S=(M-n)/r;v=-h+S*e,A=t,w=0,C=d+S*u}else{let S=(M-n-r)/n,B=S*Math.PI/2;v=h+t*Math.sin(B),A=t*Math.cos(B),w=t*Math.sin(B),C=d+u+S*d}let N=Math.max(0,Math.min(1,C/f)),x=0;M===0?x=.5/s:M===g&&(x=-.5/s);for(let S=0;S<=s;S++){let B=S/s,z=B*Math.PI*2,L=Math.sin(z),k=Math.cos(z);m.x=-A*k,m.y=v,m.z=A*L,a.push(m.x,m.y,m.z),p.set(-A*k,w,A*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(B+x,N)}if(M>0){let S=(M-1)*y;for(let B=0;B<s;B++){let z=S+B,L=S+B+1,k=M*y+B,P=M*y+B+1;o.push(z,L,k),o.push(L,P,k)}}}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Dn=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ae=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],p=n/2,m=0;M(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function M(){let v=new U,A=new U,w=0,N=(e-t)/n;for(let x=0;x<=r;x++){let S=[],B=x/r,z=B*(e-t)+t;for(let L=0;L<=s;L++){let k=L/s,P=k*l+a,O=Math.sin(P),q=Math.cos(P);A.x=z*O,A.y=-B*n+p,A.z=z*q,d.push(A.x,A.y,A.z),v.set(O,N,q).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-B),S.push(g++)}y.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let B=y[S][x],z=y[S+1][x],L=y[S+1][x+1],k=y[S][x+1];(t>0||S!==0)&&(h.push(B,z,k),w+=3),(e>0||S!==r-1)&&(h.push(z,L,k),w+=3)}c.addGroup(m,w,0),m+=w}function C(v){let A=g,w=new vt,N=new U,x=0,S=v===!0?t:e,B=v===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*B,0),u.push(0,B,0),f.push(.5,.5),g++;let z=g;for(let L=0;L<=s;L++){let P=L/s*l+a,O=Math.cos(P),q=Math.sin(P);N.x=S*q,N.y=p*B,N.z=S*O,d.push(N.x,N.y,N.z),u.push(0,B,0),w.x=O*.5+.5,w.y=q*.5*B+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){let k=A+L,P=z+L;v===!0?h.push(P,P+1,k):h.push(P+1,P,k),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ye=class i extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ha=class extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ju=new U,$u=new U,Gc=new Th,Vc=new Th,Wc=new Th,wn=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($u.subVectors(s[0],s[1]).add(s[0]),c=$u);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Gc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),Vc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),Wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Gc.calc(l),Vc.calc(l),Wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ku(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ym(i,t){let e=1-i;return e*e*t}function vm(i,t){return 2*(1-i)*i*t}function Mm(i,t){return i*i*t}function Gr(i,t,e,n){return ym(i,t)+vm(i,e)+Mm(i,n)}function Em(i,t){let e=1-i;return e*e*e*t}function Sm(i,t){let e=1-i;return 3*e*e*i*t}function bm(i,t){return 3*(1-i)*i*i*t}function Tm(i,t){return i*i*i*t}function Vr(i,t,e,n,s){return Em(i,t)+Sm(i,e)+bm(i,n)+Tm(i,s)}var ao=class extends Nn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Nn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y),Vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends Nn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends Nn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Nn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends Nn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y),Gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ku(a,l.x,c.x,h.x,d.x),Ku(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:wn,CubicBezierCurve:ao,CubicBezierCurve3:za,EllipseCurve:cr,LineCurve:lo,LineCurve3:ka,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),Va=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this}},xs=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new co(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ao(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new cr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends xs{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xs().fromJSON(s))}return this}};function wm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Im(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return fo(r,o,e,a,l,c,0),o}function qd(i,t,e,n,s){let r;if(s===Gm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qu(o/n|0,i[o],i[o+1],r);return r&&hr(r,r.next)&&(mo(r),r=r.next),r}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Fm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Rm(i,n,s,r):Am(i)){t.push(l.i,i.i,c.i),mo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Cm(_s(i),t),fo(i,t,e,n,s,r,2)):o===2&&Pm(i,t,e,n,s,r):fo(_s(i),t,e,n,s,r,1);break}}}function Am(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&kr(s,a,r,l,o,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),y=Math.max(a,l,c),p=Math.max(h,d,u),m=Qc(f,g,t,e,n),M=Qc(y,p,t,e,n),C=i.prevZ,v=i.nextZ;for(;C&&C.z>=m&&v&&v.z<=M;){if(C.x>=f&&C.x<=y&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&kr(a,h,l,d,c,u,C.x,C.y)&&Fe(C.prev,C,C.next)>=0||(C=C.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&kr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;C&&C.z>=m;){if(C.x>=f&&C.x<=y&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&kr(a,h,l,d,c,u,C.x,C.y)&&Fe(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&kr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!hr(n,s)&&Zd(n,e,e.next,s)&&po(n,s)&&po(s,n)&&(t.push(n.i,e.i,s.i),mo(e),mo(e.next),e=i=s),e=e.next}while(e!==i);return _s(e)}function Pm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hm(o,a)){let l=Jd(o,a);o=_s(o,o.next),l=_s(l,l.next),fo(o,t,e,n,s,r,0),fo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Im(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=qd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Om(c))}s.sort(Lm);for(let r=0;r<s.length;r++)e=Dm(s[r],e);return e}function Lm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Dm(i,t){let e=Nm(i,t);if(!e)return t;let n=Jd(e,i);return _s(n,n.next),_s(e,e.next)}function Nm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(hr(i,e))return e;do{if(hr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);po(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Um(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Um(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Fm(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bm(s)}function Bm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Om(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yd(i,t,e,n,s,r,o,a)}function Hm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zm(i,t)&&(po(i,t)&&po(t,i)&&km(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||hr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function Zd(i,t,e,n){let s=_a(Fe(i,t,e)),r=_a(Fe(i,t,n)),o=_a(Fe(e,n,i)),a=_a(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&xa(i,e,t)||r===0&&xa(i,n,t)||o===0&&xa(e,i,n)||a===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function zm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function po(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function km(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jd(i,t){let e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qu(i,t,e,n){let s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var th=class{static triangulate(t,e,n=2){return wm(t,e,n)}},_i=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ju(t),td(n,t);let o=t.length;e.forEach(ju);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,td(n,e[l]);let a=th.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kn=class i extends fe{constructor(t=new un([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Vm,C,v=!1,A,w,N,x;if(m){C=m.getSpacedPoints(h),v=!0,u=!1;let F=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,F),w=new U,N=new U,x=new U}u||(p=0,f=0,g=0,y=0);let S=a.extractPoints(c),B=S.shape,z=S.holes;if(!_i.isClockWise(B)){B=B.reverse();for(let F=0,Z=z.length;F<Z;F++){let et=z[F];_i.isClockWise(et)&&(z[F]=et.reverse())}}function k(F){let et=10000000000000001e-36,tt=F[0];for(let lt=1;lt<=F.length;lt++){let mt=lt%F.length,Mt=F[mt],wt=Mt.x-tt.x,Ot=Mt.y-tt.y,Y=wt*wt+Ot*Ot,se=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(tt.x),Math.abs(tt.y)),ie=et*se*se;if(Y<=ie){F.splice(mt,1),lt--;continue}tt=Mt}}k(B),z.forEach(k);let P=z.length,O=B;for(let F=0;F<P;F++){let Z=z[F];B=B.concat(Z)}function q(F,Z,et){return Z||Qt("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(Z,et)}let H=B.length;function J(F,Z,et){let tt,lt,mt,Mt=F.x-Z.x,wt=F.y-Z.y,Ot=et.x-F.x,Y=et.y-F.y,se=Mt*Mt+wt*wt,ie=Mt*Y-wt*Ot;if(Math.abs(ie)>Number.EPSILON){let D=Math.sqrt(se),_=Math.sqrt(Ot*Ot+Y*Y),nt=Z.x-wt/D,rt=Z.y+Mt/D,dt=et.x-Y/_,bt=et.y+Ot/_,Tt=((dt-nt)*Y-(bt-rt)*Ot)/(Mt*Y-wt*Ot);tt=nt+Mt*Tt-F.x,lt=rt+wt*Tt-F.y;let pt=tt*tt+lt*lt;if(pt<=2)return new vt(tt,lt);mt=Math.sqrt(pt/2)}else{let D=!1;Mt>Number.EPSILON?Ot>Number.EPSILON&&(D=!0):Mt<-Number.EPSILON?Ot<-Number.EPSILON&&(D=!0):Math.sign(wt)===Math.sign(Y)&&(D=!0),D?(tt=-wt,lt=Mt,mt=Math.sqrt(se)):(tt=Mt,lt=wt,mt=Math.sqrt(se/2))}return new vt(tt/mt,lt/mt)}let $=[];for(let F=0,Z=O.length,et=Z-1,tt=F+1;F<Z;F++,et++,tt++)et===Z&&(et=0),tt===Z&&(tt=0),$[F]=J(O[F],O[et],O[tt]);let it=[],st,yt=$.concat();for(let F=0,Z=P;F<Z;F++){let et=z[F];st=[];for(let tt=0,lt=et.length,mt=lt-1,Mt=tt+1;tt<lt;tt++,mt++,Mt++)mt===lt&&(mt=0),Mt===lt&&(Mt=0),st[tt]=J(et[tt],et[mt],et[Mt]);it.push(st),yt=yt.concat(st)}let ct;if(p===0)ct=_i.triangulateShape(O,z);else{let F=[],Z=[];for(let et=0;et<p;et++){let tt=et/p,lt=f*Math.cos(tt*Math.PI/2),mt=g*Math.sin(tt*Math.PI/2)+y;for(let Mt=0,wt=O.length;Mt<wt;Mt++){let Ot=q(O[Mt],$[Mt],mt);T(Ot.x,Ot.y,-lt),tt===0&&F.push(Ot)}for(let Mt=0,wt=P;Mt<wt;Mt++){let Ot=z[Mt];st=it[Mt];let Y=[];for(let se=0,ie=Ot.length;se<ie;se++){let D=q(Ot[se],st[se],mt);T(D.x,D.y,-lt),tt===0&&Y.push(D)}tt===0&&Z.push(Y)}}ct=_i.triangulateShape(F,Z)}let St=ct.length,I=g+y;for(let F=0;F<H;F++){let Z=u?q(B[F],yt[F],I):B[F];v?(N.copy(A.normals[0]).multiplyScalar(Z.x),w.copy(A.binormals[0]).multiplyScalar(Z.y),x.copy(C[0]).add(N).add(w),T(x.x,x.y,x.z)):T(Z.x,Z.y,0)}for(let F=1;F<=h;F++)for(let Z=0;Z<H;Z++){let et=u?q(B[Z],yt[Z],I):B[Z];v?(N.copy(A.normals[F]).multiplyScalar(et.x),w.copy(A.binormals[F]).multiplyScalar(et.y),x.copy(C[F]).add(N).add(w),T(x.x,x.y,x.z)):T(et.x,et.y,d/h*F)}for(let F=p-1;F>=0;F--){let Z=F/p,et=f*Math.cos(Z*Math.PI/2),tt=g*Math.sin(Z*Math.PI/2)+y;for(let lt=0,mt=O.length;lt<mt;lt++){let Mt=q(O[lt],$[lt],tt);T(Mt.x,Mt.y,d+et)}for(let lt=0,mt=z.length;lt<mt;lt++){let Mt=z[lt];st=it[lt];for(let wt=0,Ot=Mt.length;wt<Ot;wt++){let Y=q(Mt[wt],st[wt],tt);v?T(Y.x,Y.y+C[h-1].y,C[h-1].x+et):T(Y.x,Y.y,d+et)}}}G(),R();function G(){let F=s.length/3;if(u){let Z=0,et=H*Z;for(let tt=0;tt<St;tt++){let lt=ct[tt];X(lt[2]+et,lt[1]+et,lt[0]+et)}Z=h+p*2,et=H*Z;for(let tt=0;tt<St;tt++){let lt=ct[tt];X(lt[0]+et,lt[1]+et,lt[2]+et)}}else{for(let Z=0;Z<St;Z++){let et=ct[Z];X(et[2],et[1],et[0])}for(let Z=0;Z<St;Z++){let et=ct[Z];X(et[0]+H*h,et[1]+H*h,et[2]+H*h)}}n.addGroup(F,s.length/3-F,0)}function R(){let F=s.length/3,Z=0;E(O,Z),Z+=O.length;for(let et=0,tt=z.length;et<tt;et++){let lt=z[et];E(lt,Z),Z+=lt.length}n.addGroup(F,s.length/3-F,1)}function E(F,Z){let et=F.length;for(;--et>=0;){let tt=et,lt=et-1;lt<0&&(lt=F.length-1);for(let mt=0,Mt=h+p*2;mt<Mt;mt++){let wt=H*mt,Ot=H*(mt+1),Y=Z+tt+wt,se=Z+lt+wt,ie=Z+lt+Ot,D=Z+tt+Ot;V(Y,se,ie,D)}}}function T(F,Z,et){l.push(F),l.push(Z),l.push(et)}function X(F,Z,et){K(F),K(Z),K(et);let tt=s.length/3,lt=M.generateTopUV(n,s,tt-3,tt-2,tt-1);W(lt[0]),W(lt[1]),W(lt[2])}function V(F,Z,et,tt){K(F),K(Z),K(tt),K(Z),K(et),K(tt);let lt=s.length/3,mt=M.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);W(mt[0]),W(mt[1]),W(mt[3]),W(mt[1]),W(mt[2]),W(mt[3])}function K(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function W(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ga[s.type]().fromJSON(s)),new i(n,t.options)}},Vm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-d),new vt(u,1-g),new vt(y,1-m)]:[new vt(a,1-l),new vt(h,1-d),new vt(f,1-g),new vt(p,1-m)]}};function Wm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ki=class i extends fe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new U,u=new vt,f=new U,g=new U,y=new U,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=e;M++){let C=n+M*h*s,v=Math.sin(C),A=Math.cos(C);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*A,o.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),a.push(u.x,u.y);let N=l[3*w+0]*v,x=l[3*w+1],S=l[3*w+0]*A;c.push(N,x,S)}}for(let M=0;M<e;M++)for(let C=0;C<t.length-1;C++){let v=C+M*t.length,A=v,w=v+t.length,N=v+t.length+1,x=v+1;r.push(A,w,x),r.push(N,x,w)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ze=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let M=m*u-o;for(let C=0;C<c;C++){let v=C*d-r;g.push(v,-M,0),y.push(0,0,1),p.push(C/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let C=M+c*m,v=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;f.push(C,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qi=class i extends fe{constructor(t=new un([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];_i.isClockWise(M)===!0&&(g[p]=M.reverse())}let y=_i.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){let M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=y.length;p<m;p++){let M=y[p],C=M[0]+d,v=M[1]+d,A=M[2]+d;n.push(C,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Xm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var We=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,u=new U,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let M=[],C=m/n,v=o+C*a,A=t*Math.cos(v),w=Math.sqrt(t*t-A*A),N=0;m===0&&o===0?N=.5/e:m===n&&l===Math.PI&&(N=-.5/e);for(let x=0;x<=e;x++){let S=x/e,B=s+S*r;d.x=-w*Math.cos(B),d.y=A,d.z=w*Math.sin(B),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(S+N,1-C),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let C=h[m][M+1],v=h[m][M],A=h[m+1][M],w=h[m+1][M+1];(m!==0||o>0)&&f.push(C,v,w),(m!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,g=new U;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,M=(s+1)*(y-1)+p-1,C=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,M,v),l.push(M,C,v)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var oi=class i extends fe{constructor(t=new ho(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new vt,h=new U,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function y(){for(let C=0;C<e;C++)p(C);p(r===!1?e:0),M(),m()}function p(C){h=t.getPointAt(C/e,h);let v=o.normals[C],A=o.binormals[C];for(let w=0;w<=s;w++){let N=w/s*Math.PI*2,x=Math.sin(N),S=-Math.cos(N);l.x=S*v.x+x*A.x,l.y=S*v.y+x*A.y,l.z=S*v.z+x*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let C=1;C<=e;C++)for(let v=1;v<=s;v++){let A=(s+1)*(C-1)+(v-1),w=(s+1)*C+(v-1),N=(s+1)*C+v,x=(s+1)*(C-1)+v;g.push(A,w,x),g.push(w,N,x)}}function M(){for(let C=0;C<=e;C++)for(let v=0;v<=s;v++)c.x=C/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ed(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function yn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function ed(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var $d={clone:bs,merge:yn},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ji=class extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ee(16777215),this.specular=new ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bt=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case $c:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,l=2*n-e;break;case $c:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,C=(-1-f)*p+(1.5+f)*y+.5*g,v=f*p-f*y;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+M*o[c+A]+C*o[l+A]+v*o[d+A];return r}},Za=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[c+g],p=o[l+g],m=f*u+g*2,M=d[m],C=d[m+1],v=t*u+g*2,A=h[v],w=h[v+1],N=$m(n,e,M,A,s);r[g]=Kd(N,y,C,w,p)}return r}};function Kd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Jm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function $m(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Kd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Jm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xc(t.settings)&&(n.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xc(this.settings)&&(nd(this.settings.inTangents,t),nd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Qp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ia;var es=class extends Un{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Wr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="color";var Qa=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Un{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Wr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new el,nl=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vs=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qc=new le,id=new U,sd=new U,xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ir||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ya=new U,va=new xn,mi=new U,_o=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ya,va,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ya,va,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new U,rd=new vt,od=new vt,$e=class extends _o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,rd,od),e.subVectors(od,rd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eh=class extends xo{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},ke=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ur=class extends _o{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends xo{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Bi=class extends ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var js=-90,tr=1,il=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(js,tr,t,e);s.layers=this.layers,this.add(s);let r=new $e(js,tr,t,e);r.layers=this.layers,this.add(r);let o=new $e(js,tr,t,e);o.layers=this.layers,this.add(o);let a=new $e(js,tr,t,e);a.layers=this.layers,this.add(a);let l=new $e(js,tr,t,e);l.layers=this.layers,this.add(l);let c=new $e(js,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ah="\\[\\]\\.:\\/",Km=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Qm="[^"+Ah.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",Rh),t0=/(WCOD+)?/.source.replace("WCOD",Qm),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),i0=new RegExp("^"+jm+t0+e0+n0+"$"),s0=["material","materials","bones","map"],ih=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(t){let e=i0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=ih;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var Nh=class Nh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Nh.prototype.isMatrix2=!0;var sh=Nh;function Ch(i,t,e,n){let s=r0(n);switch(e){case Mh:return i*t;case dl:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:case yl:return Math.max(i,16)*Math.max(t,8)/4;case gl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case vl:case Ml:case Sl:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Ro:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case kl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Co:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(i){switch(i){case Rn:case xh:return{byteLength:1,components:1};case pr:case _h:case Fn:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case li:case cl:case Gn:return{byteLength:4,components:1};case yh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function a0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Ix=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Hx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:d0,alphatest_pars_fragment:f0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:_0,beginnormal_vertex:y0,bsdfs:v0,iridescence_fragment:M0,bumpmap_pars_fragment:E0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:D0,displacementmap_pars_vertex:N0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:O0,colorspace_pars_fragment:H0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:tg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:$0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Q0,lights_pars_begin:j0,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Eg,morphnormal_vertex:Sg,morphtarget_pars_vertex:bg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:Hg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Kg,specularmap_fragment:Qg,specularmap_pars_fragment:jg,tonemapping_fragment:tx,tonemapping_pars_fragment:ex,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:hx,backgroundCube_frag:ux,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:xx,equirect_vert:_x,equirect_frag:yx,linedashed_vert:vx,linedashed_frag:Mx,meshbasic_vert:Ex,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:Tx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Ix,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Fx,points_frag:Bx,shadow_vert:Ox,shadow_frag:Hx,sprite_vert:zx,sprite_frag:kx},Lt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},bi={basic:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:yn([Lt.points,Lt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:yn([Lt.common,Lt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:yn([Lt.sprite,Lt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:yn([Lt.lights,Lt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};bi.physical={uniforms:yn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Zl={r:0,b:0,g:0},Gx=new le,Ef=new ne;Ef.set(-1,0,0,0,1,0,0,0,1);function Vx(i,t,e,n,s,r){let o=new ee(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let v=M.backgroundBlurriness>0;C=t.get(C,v)}return C}function g(M){let C=!1,v=f(M);v===null?p(o,a):v&&v.isColor&&(p(v,1),C=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,C){let v=f(C);v&&(v.isCubeTexture||v.mapping===Eo)?(c===void 0&&(c=new ut(new $t(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:bs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=de.getTransfer(v.colorSpace)!==Ee,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new ze(2,2),new Ke({name:"BackgroundMaterial",uniforms:bs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,C){M.getRGB(Zl,wh(i)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,C=1){o.set(M),a=C,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:y,dispose:m}}function Wx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(z,L,k,P,O){let q=!1,H=d(z,P,k,L);r!==H&&(r=H,c(r.object)),q=f(z,P,k,O),q&&g(z,P,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(z,L,k,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function d(z,L,k,P){let O=P.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let H=z.isInstancedMesh===!0?z.id:0,J=q[H];J===void 0&&(J={},q[H]=J);let $=J[k.id];$===void 0&&($={},J[k.id]=$);let it=$[O];return it===void 0&&(it=u(l()),$[O]=it),it}function u(z){let L=[],k=[],P=[];for(let O=0;O<e;O++)L[O]=0,k[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:P,object:z,attributes:{},index:null}}function f(z,L,k,P){let O=r.attributes,q=L.attributes,H=0,J=k.getAttributes();for(let $ in J)if(J[$].location>=0){let st=O[$],yt=q[$];if(yt===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(yt=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(yt=z.instanceColor)),st===void 0||st.attribute!==yt||yt&&st.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(z,L,k,P){let O={},q=L.attributes,H=0,J=k.getAttributes();for(let $ in J)if(J[$].location>=0){let st=q[$];st===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(st=z.instanceColor));let yt={};yt.attribute=st,st&&st.data&&(yt.data=st.data),O[$]=yt,H++}r.attributes=O,r.attributesNum=H,r.index=P}function y(){let z=r.newAttributes;for(let L=0,k=z.length;L<k;L++)z[L]=0}function p(z){m(z,0)}function m(z,L){let k=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;k[z]=1,P[z]===0&&(i.enableVertexAttribArray(z),P[z]=1),O[z]!==L&&(i.vertexAttribDivisor(z,L),O[z]=L)}function M(){let z=r.newAttributes,L=r.enabledAttributes;for(let k=0,P=L.length;k<P;k++)L[k]!==z[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function C(z,L,k,P,O,q,H){H===!0?i.vertexAttribIPointer(z,L,k,O,q):i.vertexAttribPointer(z,L,k,P,O,q)}function v(z,L,k,P){y();let O=P.attributes,q=k.getAttributes(),H=L.defaultAttributeValues;for(let J in q){let $=q[J];if($.location>=0){let it=O[J];if(it===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(it=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(it=z.instanceColor)),it!==void 0){let st=it.normalized,yt=it.itemSize,ct=t.get(it);if(ct===void 0)continue;let St=ct.buffer,I=ct.type,G=ct.bytesPerElement,R=I===i.INT||I===i.UNSIGNED_INT||it.gpuType===cl;if(it.isInterleavedBufferAttribute){let E=it.data,T=E.stride,X=it.offset;if(E.isInstancedInterleavedBuffer){for(let V=0;V<$.locationSize;V++)m($.location+V,E.meshPerAttribute);z.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let V=0;V<$.locationSize;V++)p($.location+V);i.bindBuffer(i.ARRAY_BUFFER,St);for(let V=0;V<$.locationSize;V++)C($.location+V,yt/$.locationSize,I,st,T*G,(X+yt/$.locationSize*V)*G,R)}else{if(it.isInstancedBufferAttribute){for(let E=0;E<$.locationSize;E++)m($.location+E,it.meshPerAttribute);z.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let E=0;E<$.locationSize;E++)p($.location+E);i.bindBuffer(i.ARRAY_BUFFER,St);for(let E=0;E<$.locationSize;E++)C($.location+E,yt/$.locationSize,I,st,yt*G,yt/$.locationSize*E*G,R)}}else if(H!==void 0){let st=H[J];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv($.location,st);break;case 3:i.vertexAttrib3fv($.location,st);break;case 4:i.vertexAttrib4fv($.location,st);break;default:i.vertexAttrib1fv($.location,st)}}}}M()}function A(){S();for(let z in n){let L=n[z];for(let k in L){let P=L[k];for(let O in P){let q=P[O];for(let H in q)h(q[H].object),delete q[H];delete P[O]}}delete n[z]}}function w(z){if(n[z.id]===void 0)return;let L=n[z.id];for(let k in L){let P=L[k];for(let O in P){let q=P[O];for(let H in q)h(q[H].object),delete q[H];delete P[O]}}delete n[z.id]}function N(z){for(let L in n){let k=n[L];for(let P in k){let O=k[P];if(O[z.id]===void 0)continue;let q=O[z.id];for(let H in q)h(q[H].object),delete q[H];delete O[z.id]}}}function x(z){for(let L in n){let k=n[L],P=z.isInstancedMesh===!0?z.id:0,O=k[P];if(O!==void 0){for(let q in O){let H=O[q];for(let J in H)h(H[J].object),delete H[J];delete O[q]}delete k[P],Object.keys(k).length===0&&delete n[L]}}}function S(){B(),o=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Xx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let x=N===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Rn&&N!==Gn&&!x&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:v,maxSamples:A,samples:w}}function Yx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,C=M*4,v=m.clippingState||null;l.value=v,v=h(g,u,C,f);for(let A=0;A!==C;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,v=f;C!==y;++C,v+=4)o.copy(d[C]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var xr=4,Zx=6,Jx=20,$x=256,Io=new ur,jd=new ee,Uh=null,Fh=0,Bh=0,Oh=!1,Kx=new U,Ts=new U,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kx}=r;Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Fh,Bh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Fn,format:Vn,colorSpace:Xr,depthBuffer:!1},s=tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qx(r)),this._blurMaterial=t_(r,t,e),this._ggxMaterial=jx(r,t,e)}return s}_compileMaterial(t){let e=new ut(new fe,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jd),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new $t,new ye({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(jd),m=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):v===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let A=this._cubeSize;gr(s,v*A,C>2?A:0,A,A),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-xr?n-g+xr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,gr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,gr(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,Io)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-xr?s-this._lodMax+xr:0),u=4*(this._cubeSize-h);gr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Io)}};function Qx(i){let t=[],e=[],n=i,s=i-xr+1+Zx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,C=m>2?0:-1,v=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];g.set(v,f*u*m);for(let A=0;A<u;A++){let w=h[A*2]*2-1,N=h[A*2+1]*2-1;m===0?Ts.set(1,N,w):m===1?Ts.set(-w,1,-N):m===2?Ts.set(-w,N,1):m===3?Ts.set(-1,N,-w):m===4?Ts.set(-w,-1,N):Ts.set(w,N,-1),Ts.toArray(y,(m*u+A)*f)}}let p=new fe;p.setAttribute("position",new Be(g,f)),p.setAttribute("outputDirection",new Be(y,f)),e.push(new ut(p,null)),n>xr&&n--}return{lodMeshes:e,sizeLods:t}}function tf(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jx(i,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function t_(i,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ef(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function nf(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kl=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new so(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ei});r.uniforms.tEquirect.value=e;let o=new ut(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=cn),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function e_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ol||f===al)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Kl(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===ol||f===al,y=f===ss||f===Ss;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new $l(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new $l(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ol?u.mapping=ss:f===al&&(u.mapping=Ss),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function n_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let C=0,v=M.length;C<v;C+=3){let A=M[C+0],w=M[C+1],N=M[C+2];u.push(A,w,w,N,N,A)}}else{let M=g.array;y=g.version;for(let C=0,v=M.length/3-1;C<v;C+=3){let A=C+0,w=C+1,N=C+2;u.push(A,w,w,N,N,A)}}let p=new(g.count>=65535?jr:Qr)(u,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function s_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function r_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),y===!0&&(C=3);let v=a.attributes.position.count*C,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*d),N=new Jr(w,v,A,d);N.type=Gn,N.needsUpdate=!0;let x=C*4;for(let B=0;B<d;B++){let z=p[B],L=m[B],k=M[B],P=v*A*4*B;for(let O=0;O<z.count;O++){let q=O*x;f===!0&&(s.fromBufferAttribute(z,O),w[P+q+0]=s.x,w[P+q+1]=s.y,w[P+q+2]=s.z,w[P+q+3]=0),g===!0&&(s.fromBufferAttribute(L,O),w[P+q+4]=s.x,w[P+q+5]=s.y,w[P+q+6]=s.z,w[P+q+7]=0),y===!0&&(s.fromBufferAttribute(k,O),w[P+q+8]=s.x,w[P+q+9]=s.y,w[P+q+10]=s.z,w[P+q+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new vt(v,A)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function a_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var l_={[hh]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function c_(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ut(c,h),u=new ur(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,M=[],C=!1;this.setSize=function(v,A){o.setSize(v,A),a!==null&&a.setSize(v,A),l!==null&&l.setSize(v,A);for(let w=0;w<M.length;w++){let N=M[w];N.setSize&&N.setSize(v,A)}},this.setEffects=function(v){M=v,C=M.length>0&&M[0].isRenderPass===!0;let A=o.width,w=o.height;M.length>0&&a===null&&(a=new _n(A,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(A,w,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<M.length;N++){let x=M[N];x.setSize&&x.setSize(A,w)}},this.begin=function(v,A){if(y||v.toneMapping===ai&&M.length===0)return!1;if(m=A,A!==null){let w=A.width,N=A.height;(o.width!==w||o.height!==N)&&this.setSize(w,N)}return C===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=ai,!0},this.hasRenderPass=function(){return C},this.end=function(v,A){v.toneMapping=p,y=!0;let w=o,N=a;for(let x=0;x<M.length;x++){let S=M[x];S.enabled!==!1&&(S.render(v,N,w,A),S.needsSwap!==!1&&(w=N,N=N===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},de.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");let x=l_[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sf=new Sn,kh=new $i(1,1),bf=new Jr,Tf=new Ua,wf=new so,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tc(i,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function h_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function p_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),tn(e,n)}}function m_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),tn(e,n)}}function g_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),tn(e,n)}}function x_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function M_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function T_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=e.isReversedDepthBuffer()?Yl:ql,r=kh):r=Sf,e.setTexture2D(t||r,s)}function w_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tf,s)}function A_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wf,s)}function R_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bf,s)}function C_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return E_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function P_(i,t){i.uniform1fv(this.addr,t)}function I_(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function L_(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function D_(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function N_(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function U_(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F_(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function B_(i,t){i.uniform1iv(this.addr,t)}function O_(i,t){i.uniform2iv(this.addr,t)}function H_(i,t){i.uniform3iv(this.addr,t)}function z_(i,t){i.uniform4iv(this.addr,t)}function k_(i,t){i.uniform1uiv(this.addr,t)}function G_(i,t){i.uniform2uiv(this.addr,t)}function V_(i,t){i.uniform3uiv(this.addr,t)}function W_(i,t){i.uniform4uiv(this.addr,t)}function X_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=kh:o=Sf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function q_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tf,r[o])}function Y_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wf,r[o])}function Z_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bf,r[o])}function J_(i){switch(i){case 5126:return P_;case 35664:return I_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return O_;case 35668:case 35672:return H_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return G_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var Gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}},Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J_(e.type)}},Wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function $_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(e,c===void 0?new Gh(a,i,t):new Vh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Wh(a),cf(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K_=37297,Q_=0;function j_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uf=new ne;function ty(i){de._getMatrix(uf,de.workingColorSpace,i);let t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+j_(i.getShaderSource(t),a)}else return r}function ey(i,t){let e=ty(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ny={[hh]:"Linear",[uh]:"Reinhard",[dh]:"Cineon",[Mo]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function iy(i,t){let e=ny[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jl=new U;function sy(){de.getLuminanceCoefficients(Jl);let i=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function oy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ay(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Do(i){return i!==""}function ff(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(ly,hy)}var cy=new Map;function hy(i,t){let e=ae[t];if(e===void 0){let n=cy.get(t);if(n!==void 0)e=ae[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xh(e)}var uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(uy,dy)}function dy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var fy={[Ms]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function py(i){return fy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var my={[ss]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function gy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":my[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xy={[Ss]:"ENVMAP_MODE_REFRACTION"};function _y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yy={[vo]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yy[i.combine]||"ENVMAP_BLENDING_NONE"}function My(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ey(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=py(e),c=gy(e),h=_y(e),d=vy(e),u=My(e),f=ry(e),g=oy(r),y=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Do).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Do).join(`
`),m.length>0&&(m+=`
`)):(p=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ae.tonemapping_pars_fragment:"",e.toneMapping!==ai?iy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,ey("linearToOutputTexel",e.outputColorSpace),sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=Xh(o),o=ff(o,e),o=pf(o,e),a=Xh(a),a=ff(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=M+p+o,v=M+m+a,A=hf(s,s.VERTEX_SHADER,C),w=hf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(z){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(A)||"",P=s.getShaderInfoLog(w)||"",O=L.trim(),q=k.trim(),H=P.trim(),J=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,w);else{let it=df(s,A,"vertex"),st=df(s,w,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+O+`
`+it+`
`+st)}else O!==""?jt("WebGLProgram: Program Info Log:",O):(q===""||H==="")&&($=!1);$&&(z.diagnostics={runnable:J,programLog:O,vertexShader:{log:q,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(A),s.deleteShader(w),x=new _r(s,y),S=ay(s,y)}let x;this.getUniforms=function(){return x===void 0&&N(this),x};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(y,K_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}var Sy=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yh(t),e.set(t,n)),n}},Yh=class{constructor(t){this.id=Sy++,this.code=t,this.usedTimes=0}};function by(i){return i===as||i===Ro||i===Co}function Ty(i,t,e,n,s,r){let o=new $r,a=new qh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,S,B,z,L,k){let P=z.fog,O=L.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?z.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||q,H),$=J&&J.mapping===Eo?J.image.height:null,it=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,yt=st!==void 0?st.length:0,ct=0;O.morphAttributes.position!==void 0&&(ct=1),O.morphAttributes.normal!==void 0&&(ct=2),O.morphAttributes.color!==void 0&&(ct=3);let St,I,G,R;if(it){let Ie=bi[it];St=Ie.vertexShader,I=Ie.fragmentShader}else{St=x.vertexShader,I=x.fragmentShader;let Ie=a.getVertexShaderStage(x),ve=a.getFragmentShaderStage(x);a.update(x,Ie,ve),G=Ie.id,R=ve.id}let E=i.getRenderTarget(),T=i.state.buffers.depth.getReversed(),X=L.isInstancedMesh===!0,V=L.isBatchedMesh===!0,K=!!x.map,W=!!x.matcap,F=!!J,Z=!!x.aoMap,et=!!x.lightMap,tt=!!x.bumpMap&&x.wireframe===!1,lt=!!x.normalMap,mt=!!x.displacementMap,Mt=!!x.emissiveMap,wt=!!x.metalnessMap,Ot=!!x.roughnessMap,Y=x.anisotropy>0,se=x.clearcoat>0,ie=x.dispersion>0,D=x.retroreflectivity>0,_=x.iridescence>0,nt=x.sheen>0,rt=x.transmission>0,dt=Y&&!!x.anisotropyMap,bt=se&&!!x.clearcoatMap,Tt=se&&!!x.clearcoatNormalMap,pt=se&&!!x.clearcoatRoughnessMap,xt=_&&!!x.iridescenceMap,At=_&&!!x.iridescenceThicknessMap,qt=nt&&!!x.sheenColorMap,It=nt&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,Yt=!!x.specularColorMap,Kt=!!x.specularIntensityMap,re=rt&&!!x.transmissionMap,j=rt&&!!x.thicknessMap,Ct=!!x.gradientMap,gt=!!x.alphaMap,Pt=x.alphaTest>0,Ft=!!x.alphaHash,_t=!!x.extensions,Zt=ai;x.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Vt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:St,fragmentShader:I,defines:x.defines,customVertexShaderID:G,customFragmentShaderID:R,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:V,batchingColor:V&&L._colorsTexture!==null,instancing:X,instancingColor:X&&L.instanceColor!==null,instancingMorph:X&&L.morphTexture!==null,outputColorSpace:E===null?i.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:K,matcap:W,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:$,aoMap:Z,lightMap:et,bumpMap:tt,normalMap:lt,displacementMap:mt,emissiveMap:Mt,normalMapObjectSpace:lt&&x.normalMapType===Ld,normalMapTangentSpace:lt&&x.normalMapType===Po,packedNormalMap:lt&&x.normalMapType===Po&&by(x.normalMap.format),metalnessMap:wt,roughnessMap:Ot,anisotropy:Y,anisotropyMap:dt,clearcoat:se,clearcoatMap:bt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:pt,dispersion:ie,retroreflection:D,iridescence:_,iridescenceMap:xt,iridescenceThicknessMap:At,sheen:nt,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:Yt,specularIntensityMap:Kt,transmission:rt,transmissionMap:re,thicknessMap:j,gradientMap:Ct,opaque:x.transparent===!1&&x.blending===fr&&x.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Ft,combine:x.combine,mapUv:K&&g(x.map.channel),aoMapUv:Z&&g(x.aoMap.channel),lightMapUv:et&&g(x.lightMap.channel),bumpMapUv:tt&&g(x.bumpMap.channel),normalMapUv:lt&&g(x.normalMap.channel),displacementMapUv:mt&&g(x.displacementMap.channel),emissiveMapUv:Mt&&g(x.emissiveMap.channel),metalnessMapUv:wt&&g(x.metalnessMap.channel),roughnessMapUv:Ot&&g(x.roughnessMap.channel),anisotropyMapUv:dt&&g(x.anisotropyMap.channel),clearcoatMapUv:bt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(x.sheenRoughnessMap.channel),specularMapUv:Rt&&g(x.specularMap.channel),specularColorMapUv:Yt&&g(x.specularColorMap.channel),specularIntensityMapUv:Kt&&g(x.specularIntensityMap.channel),transmissionMapUv:re&&g(x.transmissionMap.channel),thicknessMapUv:j&&g(x.thicknessMap.channel),alphaMapUv:gt&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(lt||Y),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(K||gt),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:T,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:K&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===Ee,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&de.getTransfer(x.emissiveMap.colorSpace)===Ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)S.push(B),S.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(m(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function C(x){let S=f[x.type],B;if(S){let z=bi[S];B=$d.clone(z.uniforms)}else B=x.uniforms;return B}function v(x,S){let B=h.get(S);return B!==void 0?++B.usedTimes:(B=new Ey(i,S,x,s),c.push(B),h.set(S,B)),B}function A(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:C,acquireProgram:v,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:N}}function wy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ay(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,y,p,m,M){M.reversedDepth===!0&&(p=-p);let C=a(u,f,g,y,p,m);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,f,g,y,p,m){let M=a(u,f,g,y,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Ay),n.length>1&&n.sort(f||xf),s.length>1&&s.sort(f||xf)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ry(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ee};break;case"SpotLight":e={position:new U,direction:new U,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Py(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Iy=0;function Ly(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dy(i){let t=new Cy,e=Py(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new le,o=new le;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,M=0,C=0,v=0,A=0,w=0,N=0,x=0,S=0,B=0;c.sort(Ly);for(let L=0,k=c.length;L<k;L++){let P=c[L],O=P.color,q=P.intensity,H=P.distance,J=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===as?J=P.shadow.map.texture:J=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],q);B++}else if(P.isSunLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=st,n.sunShadowMap[g]=J;let yt=it.getViewportCount();for(let ct=0;ct<yt;ct++)n.sunShadowMatrix[y+ct]=it.getMatrix(ct),n.sunShadowCascade[y+ct]=it._cascadeData[ct];y+=yt,g++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.directionalShadow[p]=st,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=$,p++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(O).multiplyScalar(q),$.distance=H,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[M]=$;let it=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,it.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[M]=it.matrix,P.castShadow){let st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.spotShadow[M]=st,n.spotShadowMap[M]=J,N++}M++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(O).multiplyScalar(q),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[C]=$,C++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,st.shadowCameraNear=it.camera.near,st.shadowCameraFar=it.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=$,m++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(q),$.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[v]=$,v++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let z=n.hash;(z.sunLength!==f||z.directionalLength!==p||z.pointLength!==m||z.spotLength!==M||z.rectAreaLength!==C||z.hemiLength!==v||z.numSunShadows!==g||z.numDirectionalShadows!==A||z.numPointShadows!==w||z.numSpotShadows!==N||z.numSpotMaps!==x||z.numLightProbes!==B)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=C,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=B,z.sunLength=f,z.directionalLength=p,z.pointLength=m,z.spotLength=M,z.rectAreaLength=C,z.hemiLength=v,z.numSunShadows=g,z.numDirectionalShadows=A,z.numPointShadows=w,z.numSpotShadows=N,z.numSpotMaps=x,z.numLightProbes=B,n.version=Iy++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){let v=c[M];if(v.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(v.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function yf(i){let t=new Dy(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ny(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yf(i),t.set(s,[a])):r>=o.length?(a=new yf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,By=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Oy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vf=new le,Lo=new U,zh=new U;function Hy(i,t,e){let n=new ar,s=new vt,r=new vt,o=new Se,a=new Xa,l=new qa,c={},h=e.maxTextureSize,d={[is]:Qe,[Qe]:is,[Pe]:Pe},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ut(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let m=this.type;this.render=function(w,N,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===cd&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let S=i.getRenderTarget(),B=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ei),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&N.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=w.length;P<O;P++){let q=w[P],H=q.shadow;if(H===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===dr){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _n(s.x,s.y,{format:as,type:Fn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new $i(s.x,s.y,Gn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=yi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn}else q.isPointLight?(H.map=new Kl(s.x),H.map.depthTexture=new Oa(s.x,li)):(H.map=new _n(s.x,s.y),H.map.depthTexture=new $i(s.x,s.y,li)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=yi,this.type===Ms?(H.map.depthTexture.compareFunction=$?Yl:ql,H.map.depthTexture.minFilter=cn,H.map.depthTexture.magFilter=cn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let it=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,x);for(let st=0;st<it;st++){let yt=H.getCamera(st);if(q.isPointLight){let ct=H.camera,St=H.matrix,I=q.distance||ct.far;I!==ct.far&&(ct.far=I,ct.updateProjectionMatrix()),Lo.setFromMatrixPosition(q.matrixWorld),ct.position.copy(Lo),zh.copy(ct.position),zh.add(By[st]),ct.up.copy(Oy[st]),ct.lookAt(zh),ct.updateMatrixWorld(),St.makeTranslation(-Lo.x,-Lo.y,-Lo.z),vf.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),H._frustum.setFromProjectionMatrix(vf,ct.coordinateSystem,ct.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,st),i.clear();else{st===0&&(i.setRenderTarget(H.map),i.clear());let ct=H.getViewport(st);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),L.viewport(o)}n=H.getFrustum(st),v(N,x,yt,q,this.type)}H.isPointLightShadow!==!0&&this.type===dr&&M(H,x),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,B,z)};function M(w,N){let x=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(s.x,s.y,{format:as,type:Fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,x,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,x,f,y,null)}function C(w,N,x,S){let B=null,z=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)B=z;else if(B=x.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let L=B.uuid,k=N.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let O=P[k];O===void 0&&(O=B.clone(),P[k]=O,N.addEventListener("dispose",A)),B=O}if(B.visible=N.visible,B.wireframe=N.wireframe,S===dr?B.side=N.shadowSide!==null?N.shadowSide:N.side:B.side=N.shadowSide!==null?N.shadowSide:d[N.side],B.alphaMap=N.alphaMap,B.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,B.map=N.map,B.clipShadows=N.clipShadows,B.clippingPlanes=N.clippingPlanes,B.clipIntersection=N.clipIntersection,B.displacementMap=N.displacementMap,B.displacementScale=N.displacementScale,B.displacementBias=N.displacementBias,B.wireframeLinewidth=N.wireframeLinewidth,B.linewidth=N.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let L=i.properties.get(B);L.light=x}return B}function v(w,N,x,S,B){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===dr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=t.update(w),P=w.material;if(Array.isArray(P)){let O=k.groups;for(let q=0,H=O.length;q<H;q++){let J=O[q],$=P[J.materialIndex];if($&&$.visible){let it=C(w,$,S,B);w.onBeforeShadow(i,w,N,x,k,it,J),i.renderBufferDirect(x,null,k,it,w,J),w.onAfterShadow(i,w,N,x,k,it,J)}}}else if(P.visible){let O=C(w,P,S,B);w.onBeforeShadow(i,w,N,x,k,O,null),i.renderBufferDirect(x,null,k,O,w,null),w.onAfterShadow(i,w,N,x,k,O,null)}}let L=w.children;for(let k=0,P=L.length;k<P;k++)v(L[k],N,x,S,B)}function A(w){w.target.removeEventListener("dispose",A);for(let x in c){let S=c[x],B=w.target.uuid;B in S&&(S[B].dispose(),delete S[B])}}}function zy(i,t){function e(){let j=!1,Ct=new Se,gt=null,Pt=new Se(0,0,0,0);return{setMask:function(Ft){gt!==Ft&&!j&&(i.colorMask(Ft,Ft,Ft,Ft),gt=Ft)},setLocked:function(Ft){j=Ft},setClear:function(Ft,_t,Zt,Vt,Ie){Ie===!0&&(Ft*=Vt,_t*=Vt,Zt*=Vt),Ct.set(Ft,_t,Zt,Vt),Pt.equals(Ct)===!1&&(i.clearColor(Ft,_t,Zt,Vt),Pt.copy(Ct))},reset:function(){j=!1,gt=null,Pt.set(-1,0,0,0)}}}function n(){let j=!1,Ct=!1,gt=null,Pt=null,Ft=null;return{setReversed:function(_t){if(Ct!==_t){let Zt=t.get("EXT_clip_control");_t?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=_t;let Vt=Ft;Ft=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(_t){_t?E(i.DEPTH_TEST):T(i.DEPTH_TEST)},setMask:function(_t){gt!==_t&&!j&&(i.depthMask(_t),gt=_t)},setFunc:function(_t){if(Ct&&(_t=Vd[_t]),Pt!==_t){switch(_t){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=_t}},setLocked:function(_t){j=_t},setClear:function(_t){Ft!==_t&&(Ft=_t,Ct&&(_t=1-_t),i.clearDepth(_t))},reset:function(){j=!1,gt=null,Pt=null,Ft=null,Ct=!1}}}function s(){let j=!1,Ct=null,gt=null,Pt=null,Ft=null,_t=null,Zt=null,Vt=null,Ie=null;return{setTest:function(ve){j||(ve?E(i.STENCIL_TEST):T(i.STENCIL_TEST))},setMask:function(ve){Ct!==ve&&!j&&(i.stencilMask(ve),Ct=ve)},setFunc:function(ve,Kn,fi){(gt!==ve||Pt!==Kn||Ft!==fi)&&(i.stencilFunc(ve,Kn,fi),gt=ve,Pt=Kn,Ft=fi)},setOp:function(ve,Kn,fi){(_t!==ve||Zt!==Kn||Vt!==fi)&&(i.stencilOp(ve,Kn,fi),_t=ve,Zt=Kn,Vt=fi)},setLocked:function(ve){j=ve},setClear:function(ve){Ie!==ve&&(i.clearStencil(ve),Ie=ve)},reset:function(){j=!1,Ct=null,gt=null,Pt=null,Ft=null,_t=null,Zt=null,Vt=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,M=null,C=null,v=null,A=null,w=null,N=null,x=new ee(0,0,0),S=0,B=!1,z=null,L=null,k=null,P=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),H=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=J>=2);let it=null,st={},yt=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),St=new Se().fromArray(yt),I=new Se().fromArray(ct);function G(j,Ct,gt,Pt){let Ft=new Uint8Array(4),_t=i.createTexture();i.bindTexture(j,_t),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<gt;Zt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Ct+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return _t}let R={};R[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),E(i.DEPTH_TEST),o.setFunc(nr),tt(!1),lt(rh),E(i.CULL_FACE),Z(Ei);function E(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function T(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function X(j,Ct){return u[j]!==Ct?(i.bindFramebuffer(j,Ct),u[j]=Ct,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function V(j,Ct){let gt=g,Pt=!1;if(j){gt=f.get(Ct),gt===void 0&&(gt=[],f.set(Ct,gt));let Ft=j.textures;if(gt.length!==Ft.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Zt=Ft.length;_t<Zt;_t++)gt[_t]=i.COLOR_ATTACHMENT0+_t;gt.length=Ft.length,Pt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(gt)}function K(j){return y!==j?(i.useProgram(j),y=j,!0):!1}let W={[Es]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};W[fd]=i.MIN,W[pd]=i.MAX;let F={[md]:i.ZERO,[gd]:i.ONE,[xd]:i.SRC_COLOR,[lh]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(j,Ct,gt,Pt,Ft,_t,Zt,Vt,Ie,ve){if(j===Ei){p===!0&&(T(i.BLEND),p=!1);return}if(p===!1&&(E(i.BLEND),p=!0),j!==hd){if(j!==m||ve!==B){if((M!==Es||A!==Es)&&(i.blendEquation(i.FUNC_ADD),M=Es,A=Es),ve)switch(j){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",j);break}else switch(j){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",j);break}C=null,v=null,w=null,N=null,x.set(0,0,0),S=0,m=j,B=ve}return}Ft=Ft||Ct,_t=_t||gt,Zt=Zt||Pt,(Ct!==M||Ft!==A)&&(i.blendEquationSeparate(W[Ct],W[Ft]),M=Ct,A=Ft),(gt!==C||Pt!==v||_t!==w||Zt!==N)&&(i.blendFuncSeparate(F[gt],F[Pt],F[_t],F[Zt]),C=gt,v=Pt,w=_t,N=Zt),(Vt.equals(x)===!1||Ie!==S)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ie),x.copy(Vt),S=Ie),m=j,B=!1}function et(j,Ct){j.side===Pe?T(i.CULL_FACE):E(i.CULL_FACE);let gt=j.side===Qe;Ct&&(gt=!gt),tt(gt),j.blending===fr&&j.transparent===!1?Z(Ei):Z(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);let Pt=j.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Mt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?E(i.SAMPLE_ALPHA_TO_COVERAGE):T(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(j){z!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),z=j)}function lt(j){j!==ad?(E(i.CULL_FACE),j!==L&&(j===rh?i.cullFace(i.BACK):j===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):T(i.CULL_FACE),L=j}function mt(j){j!==k&&(H&&i.lineWidth(j),k=j)}function Mt(j,Ct,gt){j?(E(i.POLYGON_OFFSET_FILL),(P!==Ct||O!==gt)&&(P=Ct,O=gt,o.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,gt))):T(i.POLYGON_OFFSET_FILL)}function wt(j){j?E(i.SCISSOR_TEST):T(i.SCISSOR_TEST)}function Ot(j){j===void 0&&(j=i.TEXTURE0+q-1),it!==j&&(i.activeTexture(j),it=j)}function Y(j,Ct,gt){gt===void 0&&(it===null?gt=i.TEXTURE0+q-1:gt=it);let Pt=st[gt];Pt===void 0&&(Pt={type:void 0,texture:void 0},st[gt]=Pt),(Pt.type!==j||Pt.texture!==Ct)&&(it!==gt&&(i.activeTexture(gt),it=gt),i.bindTexture(j,Ct||R[j]),Pt.type=j,Pt.texture=Ct)}function se(){let j=st[it];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function _(){try{i.texSubImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function nt(){try{i.texSubImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function bt(){try{i.texStorage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function Tt(){try{i.texStorage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function pt(){try{i.texImage2D(...arguments)}catch(j){Qt("WebGLState:",j)}}function xt(){try{i.texImage3D(...arguments)}catch(j){Qt("WebGLState:",j)}}function At(j){return d[j]!==void 0?d[j]:i.getParameter(j)}function qt(j,Ct){d[j]!==Ct&&(i.pixelStorei(j,Ct),d[j]=Ct)}function It(j){St.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),St.copy(j))}function Rt(j){I.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),I.copy(j))}function Yt(j,Ct){let gt=c.get(Ct);gt===void 0&&(gt=new WeakMap,c.set(Ct,gt));let Pt=gt.get(j);Pt===void 0&&(Pt=i.getUniformBlockIndex(Ct,j.name),gt.set(j,Pt))}function Kt(j,Ct){let Pt=c.get(Ct).get(j);l.get(Ct)!==Pt&&(i.uniformBlockBinding(Ct,Pt,j.__bindingPointIndex),l.set(Ct,Pt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,st={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,M=null,C=null,v=null,A=null,w=null,N=null,x=new ee(0,0,0),S=0,B=!1,z=null,L=null,k=null,P=null,O=null,St.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:E,disable:T,bindFramebuffer:X,drawBuffers:V,useProgram:K,setBlending:Z,setMaterial:et,setFlipSided:tt,setCullFace:lt,setLineWidth:mt,setPolygonOffset:Mt,setScissorTest:wt,activeTexture:Ot,bindTexture:Y,unbindTexture:se,compressedTexImage2D:ie,compressedTexImage3D:D,texImage2D:pt,texImage3D:xt,pixelStorei:qt,getParameter:At,updateUBOMapping:Yt,uniformBlockBinding:Kt,texStorage2D:bt,texStorage3D:Tt,texSubImage2D:_,texSubImage3D:nt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:It,viewport:Rt,reset:re}}function ky(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,_){return g?new OffscreenCanvas(D,_):Yr("canvas")}function p(D,_,nt){let rt=1,dt=ie(D);if((dt.width>nt||dt.height>nt)&&(rt=nt/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let bt=Math.floor(rt*dt.width),Tt=Math.floor(rt*dt.height);u===void 0&&(u=y(bt,Tt));let pt=_?y(bt,Tt):u;return pt.width=bt,pt.height=Tt,pt.getContext("2d").drawImage(D,0,0,bt,Tt),jt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+bt+"x"+Tt+")."),pt}else return"data"in D&&jt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),D;return D}function m(D){return D.generateMipmaps}function M(D){i.generateMipmap(D)}function C(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,_,nt,rt,dt,bt=!1){if(D!==null){if(i[D]!==void 0)return i[D];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Tt;rt&&(Tt=t.get("EXT_texture_norm16"),Tt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=_;if(_===i.RED&&(nt===i.FLOAT&&(pt=i.R32F),nt===i.HALF_FLOAT&&(pt=i.R16F),nt===i.UNSIGNED_BYTE&&(pt=i.R8),nt===i.UNSIGNED_SHORT&&Tt&&(pt=Tt.R16_EXT),nt===i.SHORT&&Tt&&(pt=Tt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(pt=i.R8UI),nt===i.UNSIGNED_SHORT&&(pt=i.R16UI),nt===i.UNSIGNED_INT&&(pt=i.R32UI),nt===i.BYTE&&(pt=i.R8I),nt===i.SHORT&&(pt=i.R16I),nt===i.INT&&(pt=i.R32I)),_===i.RG&&(nt===i.FLOAT&&(pt=i.RG32F),nt===i.HALF_FLOAT&&(pt=i.RG16F),nt===i.UNSIGNED_BYTE&&(pt=i.RG8),nt===i.UNSIGNED_SHORT&&Tt&&(pt=Tt.RG16_EXT),nt===i.SHORT&&Tt&&(pt=Tt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(pt=i.RG8UI),nt===i.UNSIGNED_SHORT&&(pt=i.RG16UI),nt===i.UNSIGNED_INT&&(pt=i.RG32UI),nt===i.BYTE&&(pt=i.RG8I),nt===i.SHORT&&(pt=i.RG16I),nt===i.INT&&(pt=i.RG32I)),_===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),nt===i.UNSIGNED_INT&&(pt=i.RGB32UI),nt===i.BYTE&&(pt=i.RGB8I),nt===i.SHORT&&(pt=i.RGB16I),nt===i.INT&&(pt=i.RGB32I)),_===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),nt===i.UNSIGNED_INT&&(pt=i.RGBA32UI),nt===i.BYTE&&(pt=i.RGBA8I),nt===i.SHORT&&(pt=i.RGBA16I),nt===i.INT&&(pt=i.RGBA32I)),_===i.RGB&&(nt===i.UNSIGNED_SHORT&&Tt&&(pt=Tt.RGB16_EXT),nt===i.SHORT&&Tt&&(pt=Tt.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),_===i.RGBA){let xt=bt?qr:de.getTransfer(dt);nt===i.FLOAT&&(pt=i.RGBA32F),nt===i.HALF_FLOAT&&(pt=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(pt=xt===Ee?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&Tt&&(pt=Tt.RGBA16_EXT),nt===i.SHORT&&Tt&&(pt=Tt.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function A(D,_){let nt;return D?_===null||_===li||_===mr?nt=i.DEPTH24_STENCIL8:_===Gn?nt=i.DEPTH32F_STENCIL8:_===pr&&(nt=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===mr?nt=i.DEPTH_COMPONENT24:_===Gn?nt=i.DEPTH_COMPONENT32F:_===pr&&(nt=i.DEPTH_COMPONENT16),nt}function w(D,_){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==rn&&D.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function N(D){let _=D.target;_.removeEventListener("dispose",N),S(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(D){let _=D.target;_.removeEventListener("dispose",x),z(_)}function S(D){let _=n.get(D);if(_.__webglInit===void 0)return;let nt=D.source,rt=f.get(nt);if(rt){let dt=rt[_.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&B(D),Object.keys(rt).length===0&&f.delete(nt)}n.remove(D)}function B(D){let _=n.get(D);i.deleteTexture(_.__webglTexture);let nt=D.source,rt=f.get(nt);delete rt[_.__cacheKey],o.memory.textures--}function z(D){let _=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(_.__webglFramebuffer[rt]))for(let dt=0;dt<_.__webglFramebuffer[rt].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[rt][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[rt]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[rt])}else{if(Array.isArray(_.__webglFramebuffer))for(let rt=0;rt<_.__webglFramebuffer.length;rt++)i.deleteFramebuffer(_.__webglFramebuffer[rt]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let rt=0;rt<_.__webglColorRenderbuffer.length;rt++)_.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[rt]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let nt=D.textures;for(let rt=0,dt=nt.length;rt<dt;rt++){let bt=n.get(nt[rt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(nt[rt])}n.remove(D)}let L=0;function k(){L=0}function P(){return L}function O(D){L=D}function q(){let D=L;return D>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function H(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function J(D,_){let nt=n.get(D);if(D.isVideoTexture&&Y(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&nt.__version!==D.version){let rt=D.image;if(rt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{T(nt,D,_);return}}else D.isExternalTexture&&(nt.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+_)}function $(D,_){let nt=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&nt.__version!==D.version){T(nt,D,_);return}else D.isExternalTexture&&(nt.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+_)}function it(D,_){let nt=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&nt.__version!==D.version){T(nt,D,_);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+_)}function st(D,_){let nt=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&nt.__version!==D.version){X(nt,D,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+_)}let yt={[ni]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},ct={[rn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},St={[Nd]:i.NEVER,[Hd]:i.ALWAYS,[Ud]:i.LESS,[ql]:i.LEQUAL,[Fd]:i.EQUAL,[Yl]:i.GEQUAL,[Bd]:i.GREATER,[Od]:i.NOTEQUAL};function I(D,_){if(_.type===Gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===ll||_.magFilter===So||_.magFilter===rs||_.minFilter===cn||_.minFilter===ll||_.minFilter===So||_.minFilter===rs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,yt[_.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,yt[_.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,yt[_.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ct[_.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==So&&_.minFilter!==rs||_.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function G(D,_){let nt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",N));let rt=_.source,dt=f.get(rt);dt===void 0&&(dt={},f.set(rt,dt));let bt=H(_);if(bt!==D.__cacheKey){dt[bt]===void 0&&(dt[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),dt[bt].usedTimes++;let Tt=dt[D.__cacheKey];Tt!==void 0&&(dt[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&B(_)),D.__cacheKey=bt,D.__webglTexture=dt[bt].texture}return nt}function R(D,_,nt){return Math.floor(Math.floor(D/nt)/_)}function E(D,_,nt,rt){let bt=D.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,nt,rt,_.data);else{bt.sort((qt,It)=>qt.start-It.start);let Tt=0;for(let qt=1;qt<bt.length;qt++){let It=bt[Tt],Rt=bt[qt],Yt=It.start+It.count,Kt=R(Rt.start,_.width,4),re=R(It.start,_.width,4);Rt.start<=Yt+1&&Kt===re&&R(Rt.start+Rt.count-1,_.width,4)===Kt?It.count=Math.max(It.count,Rt.start+Rt.count-It.start):(++Tt,bt[Tt]=Rt)}bt.length=Tt+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let qt=0,It=bt.length;qt<It;qt++){let Rt=bt[qt],Yt=Math.floor(Rt.start/4),Kt=Math.ceil(Rt.count/4),re=Yt%_.width,j=Math.floor(Yt/_.width),Ct=Kt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,re,j,Ct,gt,nt,rt,_.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function T(D,_,nt){let rt=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(rt=i.TEXTURE_3D);let dt=G(D,_),bt=_.source;e.bindTexture(rt,D.__webglTexture,i.TEXTURE0+nt);let Tt=n.get(bt);if(bt.version!==Tt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let gt=de.getPrimaries(de.workingColorSpace),Pt=_.colorSpace===Oi?null:de.getPrimaries(_.colorSpace),Ft=_.colorSpace===Oi||gt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let xt=p(_.image,!1,s.maxTextureSize);xt=se(_,xt);let At=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),It=v(_.internalFormat,At,qt,_.normalized,_.colorSpace,_.isVideoTexture);I(rt,_);let Rt,Yt=_.mipmaps,Kt=_.isVideoTexture!==!0,re=Tt.__version===void 0||dt===!0,j=bt.dataReady,Ct=w(_,xt);if(_.isDepthTexture)It=A(_.format===os,_.type),re&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,It,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,It,xt.width,xt.height,0,At,qt,null));else if(_.isDataTexture)if(Yt.length>0){Kt&&re&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Yt[0].width,Yt[0].height);for(let gt=0,Pt=Yt.length;gt<Pt;gt++)Rt=Yt[gt],Kt?j&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Rt.width,Rt.height,At,qt,Rt.data):e.texImage2D(i.TEXTURE_2D,gt,It,Rt.width,Rt.height,0,At,qt,Rt.data);_.generateMipmaps=!1}else Kt?(re&&e.texStorage2D(i.TEXTURE_2D,Ct,It,xt.width,xt.height),j&&E(_,xt,At,qt)):e.texImage2D(i.TEXTURE_2D,0,It,xt.width,xt.height,0,At,qt,xt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,Yt[0].width,Yt[0].height,xt.depth);for(let gt=0,Pt=Yt.length;gt<Pt;gt++)if(Rt=Yt[gt],_.format!==Vn)if(At!==null)if(Kt){if(j)if(_.layerUpdates.size>0){let Ft=Ch(Rt.width,Rt.height,_.format,_.type);for(let _t of _.layerUpdates){let Zt=Rt.data.subarray(_t*Ft/Rt.data.BYTES_PER_ELEMENT,(_t+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,_t,Rt.width,Rt.height,1,At,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Rt.width,Rt.height,xt.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,It,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Rt.width,Rt.height,xt.depth,At,qt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,It,Rt.width,Rt.height,xt.depth,0,At,qt,Rt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Kt&&re&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Yt[0].width,Yt[0].height);for(let gt=0,Pt=Yt.length;gt<Pt;gt++)Rt=Yt[gt],_.format!==Vn?At!==null?Kt?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,It,Rt.width,Rt.height,0,Rt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?j&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Rt.width,Rt.height,At,qt,Rt.data):e.texImage2D(i.TEXTURE_2D,gt,It,Rt.width,Rt.height,0,At,qt,Rt.data)}else if(_.isDataArrayTexture)if(Kt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,xt.width,xt.height,xt.depth),j)if(_.layerUpdates.size>0){let gt=Ch(xt.width,xt.height,_.format,_.type);for(let Pt of _.layerUpdates){let Ft=xt.data.subarray(Pt*gt/xt.data.BYTES_PER_ELEMENT,(Pt+1)*gt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,xt.width,xt.height,1,At,qt,Ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,At,qt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,xt.width,xt.height,xt.depth,0,At,qt,xt.data);else if(_.isData3DTexture)Kt?(re&&e.texStorage3D(i.TEXTURE_3D,Ct,It,xt.width,xt.height,xt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,At,qt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,It,xt.width,xt.height,xt.depth,0,At,qt,xt.data);else if(_.isFramebufferTexture){if(re)if(Kt)e.texStorage2D(i.TEXTURE_2D,Ct,It,xt.width,xt.height);else{let gt=xt.width,Pt=xt.height;for(let Ft=0;Ft<Ct;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,It,gt,Pt,0,At,qt,null),gt>>=1,Pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),xt.parentNode!==gt){gt.appendChild(xt),d.add(_),gt.onpaint=Pt=>{let Ft=Pt.changedElements;for(let _t of d)Ft.includes(_t.image)&&(_t.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{let Ft=i.RGBA,_t=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,_t,Zt,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Kt&&re){let gt=ie(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height)}for(let gt=0,Pt=Yt.length;gt<Pt;gt++)Rt=Yt[gt],Kt?j&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,At,qt,Rt):e.texImage2D(i.TEXTURE_2D,gt,It,At,qt,Rt);_.generateMipmaps=!1}else if(Kt){if(re){let gt=ie(xt);e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,qt,xt)}else e.texImage2D(i.TEXTURE_2D,0,It,At,qt,xt);m(_)&&M(rt),Tt.__version=bt.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function X(D,_,nt){if(_.image.length!==6)return;let rt=G(D,_),dt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+nt);let bt=n.get(dt);if(dt.version!==bt.__version||rt===!0){e.activeTexture(i.TEXTURE0+nt);let Tt=de.getPrimaries(de.workingColorSpace),pt=_.colorSpace===Oi?null:de.getPrimaries(_.colorSpace),xt=_.colorSpace===Oi||Tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let At=_.isCompressedTexture||_.image[0].isCompressedTexture,qt=_.image[0]&&_.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!At&&!qt?It[_t]=p(_.image[_t],!0,s.maxCubemapSize):It[_t]=qt?_.image[_t].image:_.image[_t],It[_t]=se(_,It[_t]);let Rt=It[0],Yt=r.convert(_.format,_.colorSpace),Kt=r.convert(_.type),re=v(_.internalFormat,Yt,Kt,_.normalized,_.colorSpace),j=_.isVideoTexture!==!0,Ct=bt.__version===void 0||rt===!0,gt=dt.dataReady,Pt=w(_,Rt);I(i.TEXTURE_CUBE_MAP,_);let Ft;if(At){j&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,re,Rt.width,Rt.height);for(let _t=0;_t<6;_t++){Ft=It[_t].mipmaps;for(let Zt=0;Zt<Ft.length;Zt++){let Vt=Ft[Zt];_.format!==Vn?Yt!==null?j?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,re,Vt.width,Vt.height,0,Vt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,Vt.width,Vt.height,Yt,Kt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,re,Vt.width,Vt.height,0,Yt,Kt,Vt.data)}}}else{if(Ft=_.mipmaps,j&&Ct){Ft.length>0&&Pt++;let _t=ie(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(qt){j?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Yt,Kt,It[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,It[_t].width,It[_t].height,0,Yt,Kt,It[_t].data);for(let Zt=0;Zt<Ft.length;Zt++){let Ie=Ft[Zt].image[_t].image;j?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Ie.width,Ie.height,Yt,Kt,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,re,Ie.width,Ie.height,0,Yt,Kt,Ie.data)}}else{j?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Kt,It[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Yt,Kt,It[_t]);for(let Zt=0;Zt<Ft.length;Zt++){let Vt=Ft[Zt];j?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Yt,Kt,Vt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,re,Yt,Kt,Vt.image[_t])}}}m(_)&&M(i.TEXTURE_CUBE_MAP),bt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function V(D,_,nt,rt,dt,bt){let Tt=r.convert(nt.format,nt.colorSpace),pt=r.convert(nt.type),xt=v(nt.internalFormat,Tt,pt,nt.normalized,nt.colorSpace),At=n.get(_),qt=n.get(nt);if(qt.__renderTarget=_,!At.__hasExternalTextures){let It=Math.max(1,_.width>>bt),Rt=Math.max(1,_.height>>bt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,bt,xt,It,Rt,_.depth,0,Tt,pt,null):e.texImage2D(dt,bt,xt,It,Rt,0,Tt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,dt,qt.__webglTexture,0,wt(_)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,dt,qt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(D,_,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,D),_.depthBuffer){let rt=_.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,bt=A(_.stencilBuffer,dt),Tt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),bt,_.width,_.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),bt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,bt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,D)}else{let rt=_.textures;for(let dt=0;dt<rt.length;dt++){let bt=rt[dt],Tt=r.convert(bt.format,bt.colorSpace),pt=r.convert(bt.type),xt=v(bt.internalFormat,Tt,pt,bt.normalized,bt.colorSpace);Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt(_),xt,_.width,_.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt(_),xt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(D,_,nt){let rt=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(_.depthTexture);if(dt.__renderTarget=_,(!dt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),rt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),I(i.TEXTURE_CUBE_MAP,_.depthTexture);let At=r.convert(_.depthTexture.format),qt=r.convert(_.depthTexture.type),It;_.depthTexture.format===yi?It=i.DEPTH_COMPONENT24:_.depthTexture.format===os&&(It=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,It,_.width,_.height,0,At,qt,null)}}else J(_.depthTexture,0);let bt=dt.__webglTexture,Tt=wt(_),pt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,xt=_.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===yi)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,pt,bt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,pt,bt,0);else if(_.depthTexture.format===os)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,pt,bt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,pt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(D){let _=n.get(D),nt=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let rt=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),rt){let dt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),_.__depthDisposeCallback=dt}_.__boundDepthTexture=rt}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(nt)for(let rt=0;rt<6;rt++)W(_.__webglFramebuffer[rt],D,rt);else{let rt=D.texture.mipmaps;rt&&rt.length>0?W(_.__webglFramebuffer[0],D,0):W(_.__webglFramebuffer,D,0)}else if(nt){_.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[rt]),_.__webglDepthbuffer[rt]===void 0)_.__webglDepthbuffer[rt]=i.createRenderbuffer(),K(_.__webglDepthbuffer[rt],D,!1);else{let dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}else{let rt=D.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),K(_.__webglDepthbuffer,D,!1);else{let dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(D,_,nt){let rt=n.get(D);_!==void 0&&V(rt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&F(D)}function et(D){let _=D.texture,nt=n.get(D),rt=n.get(_);D.addEventListener("dispose",x);let dt=D.textures,bt=D.isWebGLCubeRenderTarget===!0,Tt=dt.length>1;if(Tt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=_.version,o.memory.textures++),bt){nt.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){nt.__webglFramebuffer[pt]=[];for(let xt=0;xt<_.mipmaps.length;xt++)nt.__webglFramebuffer[pt][xt]=i.createFramebuffer()}else nt.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){nt.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)nt.__webglFramebuffer[pt]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let pt=0,xt=dt.length;pt<xt;pt++){let At=n.get(dt[pt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Ot(D)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){let xt=dt[pt];nt.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[pt]);let At=r.convert(xt.format,xt.colorSpace),qt=r.convert(xt.type),It=v(xt.internalFormat,At,qt,xt.normalized,xt.colorSpace,D.isXRRenderTarget===!0),Rt=wt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,It,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,nt.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),K(nt.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),I(i.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)V(nt.__webglFramebuffer[pt][xt],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else V(nt.__webglFramebuffer[pt],D,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,xt=dt.length;pt<xt;pt++){let At=dt[pt],qt=n.get(At),It=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(It=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,qt.__webglTexture),I(It,At),V(nt.__webglFramebuffer,D,At,i.COLOR_ATTACHMENT0+pt,It,0),m(At)&&M(It)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,rt.__webglTexture),I(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)V(nt.__webglFramebuffer[xt],D,_,i.COLOR_ATTACHMENT0,pt,xt);else V(nt.__webglFramebuffer,D,_,i.COLOR_ATTACHMENT0,pt,0);m(_)&&M(pt),e.unbindTexture()}D.depthBuffer&&F(D)}function tt(D){let _=D.textures;for(let nt=0,rt=_.length;nt<rt;nt++){let dt=_[nt];if(m(dt)){let bt=C(D),Tt=n.get(dt).__webglTexture;e.bindTexture(bt,Tt),M(bt),e.unbindTexture()}}}let lt=[],mt=[];function Mt(D){if(D.samples>0){if(Ot(D)===!1){let _=D.textures,nt=D.width,rt=D.height,dt=i.COLOR_BUFFER_BIT,bt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(D),pt=_.length>1;if(pt)for(let At=0;At<_.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let xt=D.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<_.length;At++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let qt=n.get(_[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,nt,rt,0,0,nt,rt,dt,i.NEAREST),l===!0&&(lt.length=0,mt.length=0,lt.push(i.COLOR_ATTACHMENT0+At),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(lt.push(bt),mt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<_.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);let qt=n.get(_[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let _=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function wt(D){return Math.min(s.maxSamples,D.samples)}function Ot(D){let _=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(D){let _=o.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())}function se(D,_){let nt=D.colorSpace,rt=D.format,dt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||nt!==Xr&&nt!==Oi&&(de.getTransfer(nt)===Ee?(rt!==Vn||dt!==Rn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",nt)),_}function ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=st,this.rebindTextures=Z,this.setupRenderTarget=et,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gy(i,t){function e(n,s=Oi){let r,o=de.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===Vn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===bo||n===To||n===wo||n===Ao)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===_l||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===Ml||n===El||n===Sl||n===bl||n===Ro||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===Ml)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sl)return r.COMPRESSED_R11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Bl||n===Ol||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===kl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Wl||n===Co||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:Vy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new Zh,m={},M=e.getContextAttributes(),C=null,v=null,A=[],w=[],N=new vt,x=null,S=null,B=new $e;B.viewport=new Se;let z=new $e;z.viewport=new Se;let L=[B,z],k=new sl,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let E=A[R];return E===void 0&&(E=new or,A[R]=E),E.getTargetRaySpace()},this.getControllerGrip=function(R){let E=A[R];return E===void 0&&(E=new or,A[R]=E),E.getGripSpace()},this.getHand=function(R){let E=A[R];return E===void 0&&(E=new or,A[R]=E),E.getHandSpace()};function q(R){let E=w.indexOf(R.inputSource);if(E===-1)return;let T=A[E];T!==void 0&&(T.update(R.inputSource,R.frame,c||o),T.dispatchEvent({type:R.type,data:R.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let R=0;R<A.length;R++){let E=w[R];E!==null&&(w[R]=null,A[R].disconnect(E))}P=null,O=null,p.reset();for(let R in m)delete m[R];if(t.setRenderTarget(C),f=null,u=null,d=null,s=null,v=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(N.width,N.height,!1),S!==null){let R=S.camera;R.fov=S.fov,R.zoom=S.zoom,R.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let T=null,X=null,V=null;M.depth&&(V=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,T=M.stencil?os:yi,X=M.stencil?mr:li);let K={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(K),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new _n(u.textureWidth,u.textureHeight,{format:Vn,type:Rn,depthTexture:new $i(u.textureWidth,u.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let T={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,T),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _n(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(R){for(let E=0;E<R.removed.length;E++){let T=R.removed[E],X=w.indexOf(T);X>=0&&(w[X]=null,A[X].disconnect(T))}for(let E=0;E<R.added.length;E++){let T=R.added[E],X=w.indexOf(T);if(X===-1){for(let K=0;K<A.length;K++)if(K>=w.length){w.push(T),X=K;break}else if(w[K]===null){w[K]=T,X=K;break}if(X===-1)break}let V=A[X];V&&V.connect(T)}}let $=new U,it=new U;function st(R,E,T){$.setFromMatrixPosition(E.matrixWorld),it.setFromMatrixPosition(T.matrixWorld);let X=$.distanceTo(it),V=E.projectionMatrix.elements,K=T.projectionMatrix.elements,W=V[14]/(V[10]-1),F=V[14]/(V[10]+1),Z=(V[9]+1)/V[5],et=(V[9]-1)/V[5],tt=(V[8]-1)/V[0],lt=(K[8]+1)/K[0],mt=W*tt,Mt=W*lt,wt=X/(-tt+lt),Ot=wt*-tt;if(E.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ot),R.translateZ(wt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),V[10]===-1)R.projectionMatrix.copy(E.projectionMatrix),R.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let Y=W+wt,se=F+wt,ie=mt-Ot,D=Mt+(X-Ot),_=Z*F/se*Y,nt=et*F/se*Y;R.projectionMatrix.makePerspective(ie,D,_,nt,Y,se),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function yt(R,E){E===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(E.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let E=R.near,T=R.far;p.texture!==null&&(p.depthNear>0&&(E=p.depthNear),p.depthFar>0&&(T=p.depthFar)),k.near=z.near=B.near=E,k.far=z.far=B.far=T,(P!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,O=k.far),k.layers.mask=R.layers.mask|6,B.layers.mask=k.layers.mask&-5,z.layers.mask=k.layers.mask&-3;let X=R.parent,V=k.cameras;yt(k,X);for(let K=0;K<V.length;K++)yt(V[K],X);V.length===2?st(k,B,z):k.projectionMatrix.copy(B.projectionMatrix),S===null&&R.isPerspectiveCamera&&(S={camera:R,fov:R.fov,zoom:R.zoom}),ct(R,k,X)};function ct(R,E,T){T===null?R.matrix.copy(E.matrixWorld):(R.matrix.copy(T.matrixWorld),R.matrix.invert(),R.matrix.multiply(E.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(E.projectionMatrix),R.projectionMatrixInverse.copy(E.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=La*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(R){l=R,u!==null&&(u.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(R){return m[R]};let St=null;function I(R,E){if(h=E.getViewerPose(c||o),g=E,h!==null){let T=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let X=!1;T.length!==k.cameras.length&&(k.cameras.length=0,X=!0);for(let F=0;F<T.length;F++){let Z=T[F],et=null;if(f!==null)et=f.getViewport(Z);else{let lt=d.getViewSubImage(u,Z);et=lt.viewport,F===0&&(t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v))}let tt=L[F];tt===void 0&&(tt=new $e,tt.layers.enable(F),tt.viewport=new Se,L[F]=tt),tt.matrix.fromArray(Z.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Z.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(et.x,et.y,et.width,et.height),F===0&&(k.matrix.copy(tt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),X===!0&&k.cameras.push(tt)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let F=d.getDepthInformation(T[0]);F&&F.isValid&&F.texture&&p.init(F,s.renderState)}if(V&&V.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let F=0;F<T.length;F++){let Z=T[F].camera;if(Z){let et=m[Z];et||(et=new ro,m[Z]=et);let tt=d.getCameraImage(Z);et.sourceTexture=tt}}}}for(let T=0;T<A.length;T++){let X=w[T],V=A[T];X!==null&&V!==void 0&&V.update(X,E,c||o)}St&&St(R,E),E.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:E}),g=null}let G=new Mf;G.setAnimationLoop(I),this.setAnimationLoop=function(R){St=R},this.dispose=function(){}}},Xy=new le,Af=new ne;Af.set(-1,0,0,0,1,0,0,0,1);function qy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,C,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),C=M.envMap,v=M.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Af),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=C*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let w=A.program;n.uniformBlockBinding(v,w)}function c(v,A){let w=s[v.id];w===void 0&&(p(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",M));let N=A.program;n.updateUBOMapping(v,N);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let A=d();v.__bindingPointIndex=A;let w=i.createBuffer(),N=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],w=v.uniforms,N=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,S=w.length;x<S;x++){let B=w[x];if(Array.isArray(B))for(let z=0,L=B.length;z<L;z++)f(B[z],x,z,N);else f(B,x,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,A,w,N){if(y(v,A,w,N)===!0){let x=v.__offset,S=v.value;if(Array.isArray(S)){let B=0;for(let z=0;z<S.length;z++){let L=S[z],k=m(L);g(L,v.__data,B),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,A,w){typeof v=="number"||typeof v=="boolean"?A[0]=v:v.isMatrix3?(A[0]=v.elements[0],A[1]=v.elements[1],A[2]=v.elements[2],A[3]=0,A[4]=v.elements[3],A[5]=v.elements[4],A[6]=v.elements[5],A[7]=0,A[8]=v.elements[6],A[9]=v.elements[7],A[10]=v.elements[8],A[11]=0):ArrayBuffer.isView(v)?A.set(new v.constructor(v.buffer,v.byteOffset,A.length)):v.toArray(A,w)}function y(v,A,w,N){let x=v.value,S=A+"_"+w;if(N[S]===void 0)return typeof x=="number"||typeof x=="boolean"?N[S]=x:ArrayBuffer.isView(x)?N[S]=x.slice():N[S]=x.clone(),!0;{let B=N[S];if(typeof x=="number"||typeof x=="boolean"){if(B!==x)return N[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(B.equals(x)===!1)return B.copy(x),!0}}return!1}function p(v){let A=v.uniforms,w=0,N=16;for(let S=0,B=A.length;S<B;S++){let z=Array.isArray(A[S])?A[S]:[A[S]];for(let L=0,k=z.length;L<k;L++){let P=z[L],O=Array.isArray(P.value)?P.value:[P.value];for(let q=0,H=O.length;q<H;q++){let J=O[q],$=m(J),it=w%N,st=it%$.boundary,yt=it+st;w+=st,yt!==0&&N-yt<$.storage&&(w+=N-yt),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=$.storage}}}let x=w%N;return x>0&&(w+=N-x),v.__size=w,v.__cache={},this}function m(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(A.boundary=16,A.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),A}function M(v){let A=v.target;A.removeEventListener("dispose",M);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function C(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var Zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Jy(){return Si===null&&(Si=new no(Zy,16,16,as,Fn),Si.name="DFG_LUT",Si.minFilter=cn,Si.magFilter=cn,Si.wrapS=xi,Si.wrapT=xi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var Ql=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,p=new Set([ml,pl,fl]),m=new Set([Rn,li,pr,mr,hl,ul]),M=new Uint32Array(4),C=new Int32Array(4),v=new U,A=null,w=null,N=[],x=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,z=!1,L=null,k=null,P=null,O=null;this._outputColorSpace=ln;let q=0,H=0,J=null,$=-1,it=null,st=new Se,yt=new Se,ct=null,St=new ee(0),I=0,G=e.width,R=e.height,E=1,T=null,X=null,V=new Se(0,0,G,R),K=new Se(0,0,G,R),W=!1,F=new ar,Z=!1,et=!1,tt=new le,lt=new U,mt=new Se,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Ot(){return J===null?E:1}let Y=n;function se(b,Q){return e.getContext(b,Q)}let ie,D,_,nt,rt,dt,bt,Tt,pt,xt,At,qt,It,Rt,Yt,Kt,re,j,Ct,gt,Pt,Ft,_t;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),Y===null){let Q="webgl2";if(Y=se(Q,b),Y===null)throw se(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(b){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),Qt("WebGLRenderer: "+b.message),b}function Zt(){ie=new n_(Y),ie.init(),Pt=new Gy(Y,ie),D=new qx(Y,ie,t,Pt),_=new zy(Y,ie),D.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),k=Y.createFramebuffer(),P=Y.createFramebuffer(),O=Y.createFramebuffer(),nt=new r_(Y),rt=new wy,dt=new ky(Y,ie,_,rt,D,Pt,nt),bt=new e_(B),Tt=new a0(Y),Ft=new Wx(Y,Tt),pt=new i_(Y,Tt,nt,Ft),xt=new a_(Y,pt,Tt,Ft,nt),j=new o_(Y,D,dt),Yt=new Yx(rt),At=new Ty(B,bt,ie,D,Ft,Yt),qt=new qy(B,rt),It=new Ry,Rt=new Ny(ie),re=new Vx(B,bt,_,xt,g,l),Kt=new Hy(B,xt,D),_t=new Yy(Y,nt,D,_),Ct=new Xx(Y,ie,nt),gt=new s_(Y,ie,nt),nt.programs=At.programs,B.capabilities=D,B.extensions=ie,B.properties=rt,B.renderLists=It,B.shadowMap=Kt,B.state=_,B.info=nt}y!==Rn&&(S=new c_(y,e.width,e.height,a,s,r));let Vt=new Jh(B,Y);this.xr=Vt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return E},this.setPixelRatio=function(b){b!==void 0&&(E=b,this.setSize(G,R,!1))},this.getSize=function(b){return b.set(G,R)},this.setSize=function(b,Q,ht=!0){if(Vt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,R=Q,e.width=Math.floor(b*E),e.height=Math.floor(Q*E),ht===!0&&(e.style.width=b+"px",e.style.height=Q+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,Q)},this.getDrawingBufferSize=function(b){return b.set(G*E,R*E).floor()},this.setDrawingBufferSize=function(b,Q,ht){G=b,R=Q,E=ht,e.width=Math.floor(b*ht),e.height=Math.floor(Q*ht),this.setViewport(0,0,b,Q)},this.setEffects=function(b){if(y===Rn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Q=0;Q<b.length;Q++)if(b[Q].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(V)},this.setViewport=function(b,Q,ht,ot){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,Q,ht,ot),_.viewport(st.copy(V).multiplyScalar(E).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,Q,ht,ot){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,Q,ht,ot),_.scissor(yt.copy(K).multiplyScalar(E).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){_.setScissorTest(W=b)},this.setOpaqueSort=function(b){T=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(b=!0,Q=!0,ht=!0){let ot=0;if(b){let at=!1;if(J!==null){let Nt=J.texture.format;at=p.has(Nt)}if(at){let Nt=J.texture.type,zt=m.has(Nt),Dt=re.getClearColor(),kt=re.getClearAlpha(),Xt=Dt.r,oe=Dt.g,ue=Dt.b;zt?(M[0]=Xt,M[1]=oe,M[2]=ue,M[3]=kt,Y.clearBufferuiv(Y.COLOR,0,M)):(C[0]=Xt,C[1]=oe,C[2]=ue,C[3]=kt,Y.clearBufferiv(Y.COLOR,0,C))}else ot|=Y.COLOR_BUFFER_BIT}Q&&(ot|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(ot|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Y.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),re.dispose(),It.dispose(),Rt.dispose(),rt.dispose(),bt.dispose(),xt.dispose(),Ft.dispose(),_t.dispose(),At.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",yu),Vt.removeEventListener("sessionend",vu),us.stop()};function Ie(b){b.preventDefault(),Zr("WebGLRenderer: Context Lost."),z=!0}function ve(){Zr("WebGLRenderer: Context Restored."),z=!1;let b=nt.autoReset,Q=Kt.enabled,ht=Kt.autoUpdate,ot=Kt.needsUpdate,at=Kt.type;Zt(),nt.autoReset=b,Kt.enabled=Q,Kt.autoUpdate=ht,Kt.needsUpdate=ot,Kt.type=at}function Kn(b){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fi(b){let Q=b.target;Q.removeEventListener("dispose",fi),Wp(Q)}function Wp(b){Xp(b),rt.remove(b)}function Xp(b){let Q=rt.get(b).programs;Q!==void 0&&(Q.forEach(function(ht){At.releaseProgram(ht)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,Q,ht,ot,at,Nt){Q===null&&(Q=Mt);let zt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Dt=Zp(b,Q,ht,ot,at);_.setMaterial(ot,zt);let kt=ht.index,Xt=1;if(ot.wireframe===!0){if(kt=pt.getWireframeAttribute(ht),kt===void 0)return;Xt=2}let oe=ht.drawRange,ue=ht.attributes.position,Gt=oe.start*Xt,Me=(oe.start+oe.count)*Xt;Nt!==null&&(Gt=Math.max(Gt,Nt.start*Xt),Me=Math.min(Me,(Nt.start+Nt.count)*Xt)),kt!==null?(Gt=Math.max(Gt,0),Me=Math.min(Me,kt.count)):ue!=null&&(Gt=Math.max(Gt,0),Me=Math.min(Me,ue.count));let Xe=Me-Gt;if(Xe<0||Xe===1/0)return;Ft.setup(at,ot,Dt,ht,kt);let De,Ce=Ct;if(kt!==null&&(De=Tt.get(kt),Ce=gt,Ce.setIndex(De)),at.isMesh)ot.wireframe===!0?(_.setLineWidth(ot.wireframeLinewidth*Ot()),Ce.setMode(Y.LINES)):Ce.setMode(Y.TRIANGLES);else if(at.isLine){let pn=ot.linewidth;pn===void 0&&(pn=1),_.setLineWidth(pn*Ot()),at.isLineSegments?Ce.setMode(Y.LINES):at.isLineLoop?Ce.setMode(Y.LINE_LOOP):Ce.setMode(Y.LINE_STRIP)}else at.isPoints?Ce.setMode(Y.POINTS):at.isSprite&&Ce.setMode(Y.TRIANGLES);if(at.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Ce.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let pn=at._multiDrawStarts,Ht=at._multiDrawCounts,Mn=at._multiDrawCount,me=kt?Tt.get(kt).bytesPerElement:1,Hn=rt.get(ot).currentProgram.getUniforms();for(let pi=0;pi<Mn;pi++)Hn.setValue(Y,"_gl_DrawID",pi),Ce.render(pn[pi]/me,Ht[pi])}else if(at.isInstancedMesh)Ce.renderInstances(Gt,Xe,at.count);else if(ht.isInstancedBufferGeometry){let pn=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ht=Math.min(ht.instanceCount,pn);Ce.renderInstances(Gt,Xe,Ht)}else Ce.render(Gt,Xe)};function _u(b,Q,ht,ot){L!==null&&b.isNodeMaterial&&L.setObject(ot,b),Z===!0&&Yt.setState(b,ht,!1),b.transparent===!0&&b.side===Pe&&b.forceSinglePass===!1?(b.side=Qe,b.needsUpdate=!0,Yo(b,Q,ot),b.side=is,b.needsUpdate=!0,Yo(b,Q,ot),b.side=Pe):Yo(b,Q,ot)}this.compile=function(b,Q,ht=null){ht===null&&(ht=b),L!==null&&L.renderStart(b,Q,ht),w=Rt.get(ht),w.init(Q),x.push(w),ht.traverseVisible(function(at){at.isLight&&at.layers.test(Q.layers)&&(w.pushLight(at),at.castShadow&&w.pushShadow(at))}),b!==ht&&b.traverseVisible(function(at){at.isLight&&at.layers.test(Q.layers)&&(w.pushLight(at),at.castShadow&&w.pushShadow(at))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),et=this.localClippingEnabled,Z=Yt.init(this.clippingPlanes,et),Z===!0&&Yt.setGlobalState(this.clippingPlanes,Q),L!==null&&Kt.render(w.state.shadowsArray,ht,Q);let ot=new Set;return b.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Nt=at.material;if(Nt)if(Array.isArray(Nt))for(let zt=0;zt<Nt.length;zt++){let Dt=Nt[zt];_u(Dt,ht,Q,at),ot.add(Dt)}else _u(Nt,ht,Q,at),ot.add(Nt)}),w=x.pop(),L!==null&&L.renderEnd(),ot},this.compileAsync=function(b,Q,ht=null){let ot=this.compile(b,Q,ht);return new Promise(at=>{function Nt(){if(ot.forEach(function(zt){let kt=rt.get(zt).currentProgram;(kt===void 0||kt.isReady())&&ot.delete(zt)}),ot.size===0){at(b);return}setTimeout(Nt,10)}ie.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let _c=null;function qp(b){_c&&_c(b)}function yu(){us.stop()}function vu(){us.start()}let us=new Mf;us.setAnimationLoop(qp),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(b){_c=b,Vt.setAnimationLoop(b),b===null?us.stop():us.start()},Vt.addEventListener("sessionstart",yu),Vt.addEventListener("sessionend",vu),this.render=function(b,Q){if(Q!==void 0&&Q.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;L!==null&&L.renderStart(b,Q);let ht=Vt.enabled===!0&&Vt.isPresenting===!0,ot=S!==null&&(J===null||ht)&&S.begin(B,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Q),Q=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,Q,J),w=Rt.get(b,x.length),w.init(Q),w.state.textureUnits=dt.getTextureUnits(),x.push(w),tt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F.setFromProjectionMatrix(tt,ei,Q.reversedDepth),et=this.localClippingEnabled,Z=Yt.init(this.clippingPlanes,et),A=It.get(b,N.length),A.init(),N.push(A),Vt.enabled===!0&&Vt.isPresenting===!0){let zt=B.xr.getDepthSensingMesh();zt!==null&&yc(zt,Q,-1/0,B.sortObjects)}yc(b,Q,0,B.sortObjects),A.finish(),L!==null&&L.updateLights(w.state.lightsArray),B.sortObjects===!0&&A.sort(T,X),wt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,wt&&re.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Z===!0&&Yt.beginShadows();let at=w.state.shadowsArray;if(Kt.render(at,b,Q),Z===!0&&Yt.endShadows(),(ot&&S.hasRenderPass())===!1){let zt=A.opaque,Dt=A.transmissive;if(w.setupLights(),Q.isArrayCamera){let kt=Q.cameras;if(Dt.length>0)for(let Xt=0,oe=kt.length;Xt<oe;Xt++){let ue=kt[Xt];Eu(zt,Dt,b,ue)}wt&&re.render(b);for(let Xt=0,oe=kt.length;Xt<oe;Xt++){let ue=kt[Xt];Mu(A,b,ue,ue.viewport)}}else Dt.length>0&&Eu(zt,Dt,b,Q),wt&&re.render(b),Mu(A,b,Q)}J!==null&&H===0&&(dt.updateMultisampleRenderTarget(J),dt.updateRenderTargetMipmap(J)),ot&&S.end(B),b.isScene===!0&&b.onAfterRender(B,b,Q),Ft.resetDefaultState(),$=-1,it=null,x.pop(),x.length>0?(w=x[x.length-1],dt.setTextureUnits(w.state.textureUnits),Z===!0&&Yt.setGlobalState(B.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,L!==null&&L.renderEnd()};function yc(b,Q,ht,ot){if(b.visible===!1)return;if(b.layers.test(Q.layers)){if(b.isGroup)ht=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Q);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(F)){ot&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let zt=xt.update(b),Dt=b.material;Dt.visible&&A.push(b,zt,Dt,ht,mt.z,null,Q)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(F))){let zt=xt.update(b),Dt=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),mt.copy(zt.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Dt)){let kt=zt.groups;for(let Xt=0,oe=kt.length;Xt<oe;Xt++){let ue=kt[Xt],Gt=Dt[ue.materialIndex];Gt&&Gt.visible&&A.push(b,zt,Gt,ht,mt.z,ue,Q)}}else Dt.visible&&A.push(b,zt,Dt,ht,mt.z,null,Q)}}let Nt=b.children;for(let zt=0,Dt=Nt.length;zt<Dt;zt++)yc(Nt[zt],Q,ht,ot)}function Mu(b,Q,ht,ot){let{opaque:at,transmissive:Nt,transparent:zt}=b;w.setupLightsView(ht),Z===!0&&Yt.setGlobalState(B.clippingPlanes,ht),ot&&_.viewport(st.copy(ot)),at.length>0&&qo(at,Q,ht),Nt.length>0&&qo(Nt,Q,ht),zt.length>0&&qo(zt,Q,ht),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Eu(b,Q,ht,ot){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ot.id]===void 0){let Gt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ot.id]=new _n(1,1,{generateMipmaps:!0,type:Gt?Fn:Rn,minFilter:rs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Nt=w.state.transmissionRenderTarget[ot.id],zt=ot.viewport||st;Nt.setSize(zt.z*B.transmissionResolutionScale,zt.w*B.transmissionResolutionScale);let Dt=B.getRenderTarget(),kt=B.getActiveCubeFace(),Xt=B.getActiveMipmapLevel();B.setRenderTarget(Nt),B.getClearColor(St),I=B.getClearAlpha(),I<1&&B.setClearColor(16777215,.5),B.clear(),wt&&re.render(ht);let oe=B.toneMapping;B.toneMapping=ai;let ue=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),w.setupLightsView(ot),Z===!0&&Yt.setGlobalState(B.clippingPlanes,ot),qo(b,ht,ot),dt.updateMultisampleRenderTarget(Nt),dt.updateRenderTargetMipmap(Nt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Me=0,Xe=Q.length;Me<Xe;Me++){let De=Q[Me],{object:Ce,geometry:pn,material:Ht,group:Mn}=De;if(Ht.side===Pe&&Ce.layers.test(ot.layers)){let me=Ht.side;Ht.side=Qe,Ht.needsUpdate=!0,Su(Ce,ht,ot,pn,Ht,Mn),Ht.side=me,Ht.needsUpdate=!0,Gt=!0}}Gt===!0&&(dt.updateMultisampleRenderTarget(Nt),dt.updateRenderTargetMipmap(Nt))}B.setRenderTarget(Dt,kt,Xt),B.setClearColor(St,I),ue!==void 0&&(ot.viewport=ue),B.toneMapping=oe}function qo(b,Q,ht){let ot=Q.isScene===!0?Q.overrideMaterial:null;for(let at=0,Nt=b.length;at<Nt;at++){let zt=b[at],{object:Dt,geometry:kt,group:Xt}=zt,oe=zt.material;oe.allowOverride===!0&&ot!==null&&(oe=ot),Dt.layers.test(ht.layers)&&Su(Dt,Q,ht,kt,oe,Xt)}}function Su(b,Q,ht,ot,at,Nt){L!==null&&at.isNodeMaterial&&L.setObject(b,at),b.onBeforeRender(B,Q,ht,ot,at,Nt),b.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),at.onBeforeRender(B,Q,ht,ot,b,Nt),at.transparent===!0&&at.side===Pe&&at.forceSinglePass===!1?(at.side=Qe,at.needsUpdate=!0,B.renderBufferDirect(ht,Q,ot,at,b,Nt),at.side=is,at.needsUpdate=!0,B.renderBufferDirect(ht,Q,ot,at,b,Nt),at.side=Pe):B.renderBufferDirect(ht,Q,ot,at,b,Nt),b.onAfterRender(B,Q,ht,ot,at,Nt)}function Yo(b,Q,ht){Q.isScene!==!0&&(Q=Mt);let ot=rt.get(b),at=w.state.lights,Nt=w.state.shadowsArray,zt=at.state.version,Dt=At.getParameters(b,at.state,Nt,Q,ht,w.state.lightProbeGridArray),kt=At.getProgramCacheKey(Dt),Xt=ot.programs;ot.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Q.environment:null,ot.fog=Q.fog;let oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ot.envMap=bt.get(b.envMap||ot.environment,oe),ot.envMapRotation=ot.environment!==null&&b.envMap===null?Q.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",fi),Xt=new Map,ot.programs=Xt);let ue=Xt.get(kt);if(ue!==void 0){if(ot.currentProgram===ue&&ot.lightsStateVersion===zt)return Tu(b,Dt),ue}else Dt.uniforms=At.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,ht,Dt),b.onBeforeCompile(Dt,B),ue=At.acquireProgram(Dt,kt),Xt.set(kt,ue),ot.uniforms=Dt.uniforms;let Gt=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Yt.uniform),Tu(b,Dt),ot.needsLights=$p(b),ot.lightsStateVersion=zt,ot.needsLights&&(Gt.ambientLightColor.value=at.state.ambient,Gt.lightProbe.value=at.state.probe,Gt.sunLights.value=at.state.sun,Gt.sunLightShadows.value=at.state.sunShadow,Gt.directionalLights.value=at.state.directional,Gt.directionalLightShadows.value=at.state.directionalShadow,Gt.spotLights.value=at.state.spot,Gt.spotLightShadows.value=at.state.spotShadow,Gt.rectAreaLights.value=at.state.rectArea,Gt.ltc_1.value=at.state.rectAreaLTC1,Gt.ltc_2.value=at.state.rectAreaLTC2,Gt.pointLights.value=at.state.point,Gt.pointLightShadows.value=at.state.pointShadow,Gt.hemisphereLights.value=at.state.hemi,Gt.sunShadowMatrix.value=at.state.sunShadowMatrix,Gt.sunShadowCascade.value=at.state.sunShadowCascade,Gt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Gt.spotLightMatrix.value=at.state.spotLightMatrix,Gt.spotLightMap.value=at.state.spotLightMap,Gt.pointShadowMatrix.value=at.state.pointShadowMatrix),ot.lightProbeGrid=w.state.lightProbeGridArray.length>0,ot.currentProgram=ue,ot.uniformsList=null,ue}function bu(b){if(b.uniformsList===null){let Q=b.currentProgram.getUniforms();b.uniformsList=_r.seqWithValue(Q.seq,b.uniforms)}return b.uniformsList}function Tu(b,Q){let ht=rt.get(b);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.batchingColor=Q.batchingColor,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function Yp(b,Q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(Q.matrixWorld);for(let ht=0,ot=b.length;ht<ot;ht++){let at=b[ht];if(at.texture!==null&&at.boundingBox.containsPoint(v))return at}return null}function Zp(b,Q,ht,ot,at){Q.isScene!==!0&&(Q=Mt),dt.resetTextureUnits();let Nt=Q.fog,zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Q.environment:null,Dt=J===null?B.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:de.workingColorSpace,kt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Xt=bt.get(ot.envMap||zt,kt),oe=ot.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,ue=!!ht.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Gt=!!ht.morphAttributes.position,Me=!!ht.morphAttributes.normal,Xe=!!ht.morphAttributes.color,De=ai;ot.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=B.toneMapping);let Ce=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,pn=Ce!==void 0?Ce.length:0,Ht=rt.get(ot),Mn=w.state.lights;if(Z===!0&&(et===!0||b!==it)){let Le=b===it&&ot.id===$;Yt.setState(ot,b,Le)}let me=!1;ot.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Mn.state.version||Ht.outputColorSpace!==Dt||at.isBatchedMesh&&Ht.batching===!1||!at.isBatchedMesh&&Ht.batching===!0||at.isBatchedMesh&&Ht.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Ht.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Ht.instancing===!1||!at.isInstancedMesh&&Ht.instancing===!0||at.isSkinnedMesh&&Ht.skinning===!1||!at.isSkinnedMesh&&Ht.skinning===!0||at.isInstancedMesh&&Ht.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Ht.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Ht.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Ht.instancingMorph===!1&&at.morphTexture!==null||Ht.envMap!==Xt||ot.fog===!0&&Ht.fog!==Nt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Yt.numPlanes||Ht.numIntersection!==Yt.numIntersection)||Ht.vertexAlphas!==oe||Ht.vertexTangents!==ue||Ht.morphTargets!==Gt||Ht.morphNormals!==Me||Ht.morphColors!==Xe||Ht.toneMapping!==De||Ht.morphTargetsCount!==pn||!!Ht.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ht.__version=ot.version);let Hn=Ht.currentProgram;me===!0&&(Hn=Yo(ot,Q,at),L&&ot.isNodeMaterial&&L.onUpdateProgram(ot,Hn,Ht));let pi=!1,ki=!1,Us=!1,Te=Hn.getUniforms(),Ve=Ht.uniforms;if(_.useProgram(Hn.program)&&(pi=!0,ki=!0,Us=!0),ot.id!==$&&($=ot.id,ki=!0),Ht.needsLights){let Le=Yp(w.state.lightProbeGridArray,at);Ht.lightProbeGrid!==Le&&(Ht.lightProbeGrid=Le,ki=!0)}if(pi||it!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(Y,"projectionMatrix",b.projectionMatrix),Te.setValue(Y,"viewMatrix",b.matrixWorldInverse);let Vi=Te.map.cameraPosition;Vi!==void 0&&Vi.setValue(Y,lt.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&Te.setValue(Y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Te.setValue(Y,"isOrthographic",b.isOrthographicCamera===!0),it!==b&&(it=b,ki=!0,Us=!0)}if(Ht.needsLights&&(Mn.state.sunShadowMap.length>0&&Te.setValue(Y,"sunShadowMap",Mn.state.sunShadowMap,dt),Mn.state.directionalShadowMap.length>0&&Te.setValue(Y,"directionalShadowMap",Mn.state.directionalShadowMap,dt),Mn.state.spotShadowMap.length>0&&Te.setValue(Y,"spotShadowMap",Mn.state.spotShadowMap,dt),Mn.state.pointShadowMap.length>0&&Te.setValue(Y,"pointShadowMap",Mn.state.pointShadowMap,dt)),at.isSkinnedMesh){Te.setOptional(Y,at,"bindMatrix"),Te.setOptional(Y,at,"bindMatrixInverse");let Le=at.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Te.setValue(Y,"boneTexture",Le.boneTexture,dt))}at.isBatchedMesh&&(Te.setOptional(Y,at,"batchingTexture"),Te.setValue(Y,"batchingTexture",at._matricesTexture,dt),Te.setOptional(Y,at,"batchingIdTexture"),Te.setValue(Y,"batchingIdTexture",at._indirectTexture,dt),Te.setOptional(Y,at,"batchingColorTexture"),at._colorsTexture!==null&&Te.setValue(Y,"batchingColorTexture",at._colorsTexture,dt));let Gi=ht.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&j.update(at,ht,Hn),(ki||Ht.receiveShadow!==at.receiveShadow)&&(Ht.receiveShadow=at.receiveShadow,Te.setValue(Y,"receiveShadow",at.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Q.environment!==null&&(Ve.envMapIntensity.value=Q.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Jy()),ki){if(Te.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Ht.needsLights&&Jp(Ve,Us),Nt&&ot.fog===!0&&qt.refreshFogUniforms(Ve,Nt),qt.refreshMaterialUniforms(Ve,ot,E,R,w.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){let Le=Ht.lightProbeGrid;Ve.probesSH.value=Le.texture,Ve.probesMin.value.copy(Le.boundingBox.min),Ve.probesMax.value.copy(Le.boundingBox.max),Ve.probesResolution.value.copy(Le.resolution)}_r.upload(Y,bu(Ht),Ve,dt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(_r.upload(Y,bu(Ht),Ve,dt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Te.setValue(Y,"center",at.center),Te.setValue(Y,"modelViewMatrix",at.modelViewMatrix),Te.setValue(Y,"normalMatrix",at.normalMatrix),Te.setValue(Y,"modelMatrix",at.matrixWorld),ot.uniformsGroups!==void 0){let Le=ot.uniformsGroups;for(let Vi=0,Fs=Le.length;Vi<Fs;Vi++){let Au=Le[Vi];_t.update(Au,Hn),_t.bind(Au,Hn)}}return Hn}function Jp(b,Q){b.ambientLightColor.needsUpdate=Q,b.lightProbe.needsUpdate=Q,b.sunLights.needsUpdate=Q,b.sunLightShadows.needsUpdate=Q,b.directionalLights.needsUpdate=Q,b.directionalLightShadows.needsUpdate=Q,b.pointLights.needsUpdate=Q,b.pointLightShadows.needsUpdate=Q,b.spotLights.needsUpdate=Q,b.spotLightShadows.needsUpdate=Q,b.rectAreaLights.needsUpdate=Q,b.hemisphereLights.needsUpdate=Q}function $p(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,Q,ht){let ot=rt.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),rt.get(b.texture).__webglTexture=Q,rt.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ht,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Q){let ht=rt.get(b);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(b,Q=0,ht=0){J=b,q=Q,H=ht;let ot=null,at=!1,Nt=!1;if(b){let Dt=rt.get(b);if(Dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(Y.FRAMEBUFFER,Dt.__webglFramebuffer),st.copy(b.viewport),yt.copy(b.scissor),ct=b.scissorTest,_.viewport(st),_.scissor(yt),_.setScissorTest(ct),$=-1;return}else if(Dt.__webglFramebuffer===void 0)dt.setupRenderTarget(b);else if(Dt.__hasExternalTextures)dt.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let oe=b.depthTexture;if(Dt.__boundDepthTexture!==oe){if(oe!==null&&rt.has(oe)&&(b.width!==oe.image.width||b.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(b)}}let kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);let Xt=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[Q])?ot=Xt[Q][ht]:ot=Xt[Q],at=!0):b.samples>0&&dt.useMultisampledRTT(b)===!1?ot=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?ot=Xt[ht]:ot=Xt,st.copy(b.viewport),yt.copy(b.scissor),ct=b.scissorTest}else st.copy(V).multiplyScalar(E).floor(),yt.copy(K).multiplyScalar(E).floor(),ct=W;if(ht!==0&&(ot=k),_.bindFramebuffer(Y.FRAMEBUFFER,ot)&&_.drawBuffers(b,ot),_.viewport(st),_.scissor(yt),_.setScissorTest(ct),at){let Dt=rt.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Dt.__webglTexture,ht)}else if(Nt){let Dt=Q;for(let kt=0;kt<b.textures.length;kt++){let Xt=rt.get(b.textures[kt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+kt,Xt.__webglTexture,ht,Dt)}}else if(b!==null&&ht!==0){let Dt=rt.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Dt.__webglTexture,ht)}$=-1};function wu(b){let Q=rt.get(b);return(Q.__readFormat!==b.format||Q.__readType!==b.type)&&(Q.__readFormat=b.format,Q.__readType=b.type,Q.__formatReadable=D.textureFormatReadable(b.format),Q.__typeReadable=D.textureTypeReadable(b.type)),Q}this.readRenderTargetPixels=function(b,Q,ht,ot,at,Nt,zt,Dt=0){if(!(b&&b.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt){_.bindFramebuffer(Y.FRAMEBUFFER,kt);try{let Xt=b.textures[Dt],oe=Xt.format,ue=Xt.type;b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Dt);let Gt=wu(Xt);if(Gt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=b.width-ot&&ht>=0&&ht<=b.height-at&&Y.readPixels(Q,ht,ot,at,Pt.convert(oe),Pt.convert(ue),Nt)}finally{let Xt=J!==null?rt.get(J).__webglFramebuffer:null;_.bindFramebuffer(Y.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,Q,ht,ot,at,Nt,zt,Dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt)if(Q>=0&&Q<=b.width-ot&&ht>=0&&ht<=b.height-at){_.bindFramebuffer(Y.FRAMEBUFFER,kt);let Xt=b.textures[Dt],oe=Xt.format,ue=Xt.type;b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Dt);let Gt=wu(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Me),Y.bufferData(Y.PIXEL_PACK_BUFFER,Nt.byteLength,Y.STREAM_READ),Y.readPixels(Q,ht,ot,at,Pt.convert(oe),Pt.convert(ue),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Xe=J!==null?rt.get(J).__webglFramebuffer:null;_.bindFramebuffer(Y.FRAMEBUFFER,Xe);let De=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Gd(Y,De,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Me),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Nt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Me),Y.deleteSync(De),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Q=null,ht=0){let ot=Math.pow(2,-ht),at=Math.floor(b.image.width*ot),Nt=Math.floor(b.image.height*ot),zt=Q!==null?Q.x:0,Dt=Q!==null?Q.y:0;dt.setTexture2D(b,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ht,0,0,zt,Dt,at,Nt),_.unbindTexture()},this.copyTextureToTexture=function(b,Q,ht=null,ot=null,at=0,Nt=0){let zt,Dt,kt,Xt,oe,ue,Gt,Me,Xe,De=b.isCompressedTexture?b.mipmaps[Nt]:b.image;if(ht!==null)zt=ht.max.x-ht.min.x,Dt=ht.max.y-ht.min.y,kt=ht.isBox3?ht.max.z-ht.min.z:1,Xt=ht.min.x,oe=ht.min.y,ue=ht.isBox3?ht.min.z:0;else{let Ve=Math.pow(2,-at);zt=Math.floor(De.width*Ve),Dt=Math.floor(De.height*Ve),b.isDataArrayTexture?kt=De.depth:b.isData3DTexture?kt=Math.floor(De.depth*Ve):kt=1,Xt=0,oe=0,ue=0}ot!==null?(Gt=ot.x,Me=ot.y,Xe=ot.z):(Gt=0,Me=0,Xe=0);let Ce=Pt.convert(Q.format),pn=Pt.convert(Q.type),Ht;Q.isData3DTexture?(dt.setTexture3D(Q,0),Ht=Y.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(dt.setTexture2DArray(Q,0),Ht=Y.TEXTURE_2D_ARRAY):(dt.setTexture2D(Q,0),Ht=Y.TEXTURE_2D),_.activeTexture(Y.TEXTURE0),_.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),_.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),_.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment);let Mn=_.getParameter(Y.UNPACK_ROW_LENGTH),me=_.getParameter(Y.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(Y.UNPACK_SKIP_PIXELS),pi=_.getParameter(Y.UNPACK_SKIP_ROWS),ki=_.getParameter(Y.UNPACK_SKIP_IMAGES);_.pixelStorei(Y.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(Y.UNPACK_SKIP_ROWS,oe),_.pixelStorei(Y.UNPACK_SKIP_IMAGES,ue);let Us=b.isDataArrayTexture||b.isData3DTexture,Te=Q.isDataArrayTexture||Q.isData3DTexture;if(b.isDepthTexture){let Ve=rt.get(b),Gi=rt.get(Q),Le=rt.get(Ve.__renderTarget),Vi=rt.get(Gi.__renderTarget);_.bindFramebuffer(Y.READ_FRAMEBUFFER,Le.__webglFramebuffer),_.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Fs=0;Fs<kt;Fs++)Us&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(b).__webglTexture,at,ue+Fs),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(Q).__webglTexture,Nt,Xe+Fs)),Y.blitFramebuffer(Xt,oe,zt,Dt,Gt,Me,zt,Dt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);_.bindFramebuffer(Y.READ_FRAMEBUFFER,null),_.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(at!==0||b.isRenderTargetTexture||rt.has(b)){let Ve=rt.get(b),Gi=rt.get(Q);_.bindFramebuffer(Y.READ_FRAMEBUFFER,P),_.bindFramebuffer(Y.DRAW_FRAMEBUFFER,O);for(let Le=0;Le<kt;Le++)Us?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.__webglTexture,at,ue+Le):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ve.__webglTexture,at),Te?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Gi.__webglTexture,Nt,Xe+Le):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Gi.__webglTexture,Nt),at!==0?Y.blitFramebuffer(Xt,oe,zt,Dt,Gt,Me,zt,Dt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Te?Y.copyTexSubImage3D(Ht,Nt,Gt,Me,Xe+Le,Xt,oe,zt,Dt):Y.copyTexSubImage2D(Ht,Nt,Gt,Me,Xt,oe,zt,Dt);_.bindFramebuffer(Y.READ_FRAMEBUFFER,null),_.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?Y.texSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,pn,De.data):Q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,De.data):Y.texSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,pn,De):b.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Nt,Gt,Me,zt,Dt,Ce,pn,De.data):b.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Nt,Gt,Me,De.width,De.height,Ce,De.data):Y.texSubImage2D(Y.TEXTURE_2D,Nt,Gt,Me,zt,Dt,Ce,pn,De);_.pixelStorei(Y.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(Y.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(Y.UNPACK_SKIP_ROWS,pi),_.pixelStorei(Y.UNPACK_SKIP_IMAGES,ki),Nt===0&&Q.generateMipmaps&&Y.generateMipmap(Ht),_.unbindTexture()},this.initRenderTarget=function(b){rt.get(b).__webglFramebuffer===void 0&&dt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?dt.setTextureCube(b,0):b.isData3DTexture?dt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?dt.setTexture2DArray(b,0):dt.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){q=0,H=0,J=null,_.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Rf={ArrowUp:"forward",KeyW:"forward",ArrowDown:"back",KeyS:"back",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"},No=56,vr=.14;function Cf({canvas:i,held:t,stick:e,isFree:n,onCommand:s,onDrag:r,onMoved:o,blocked:a,onKey:l,repeat:c=()=>!0}){let h=document.body,d=document.getElementById("stick"),u=document.getElementById("knob"),f=x=>x.target&&/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(x.target.tagName)&&x.target.closest("#menu"),g=()=>{for(let x in t)t[x]=!1;e.x=0,e.y=0};window.addEventListener("keydown",x=>{if(x.altKey||x.ctrlKey||x.metaKey)return;if(l(x)){x.preventDefault();return}if(f(x)||a())return;let S=Rf[x.code];S&&(x.preventDefault(),o(),n()?t[S]=!0:(!x.repeat||c())&&s(S))}),window.addEventListener("keyup",x=>{let S=Rf[x.code];S&&(t[S]=!1)}),window.addEventListener("blur",g),document.addEventListener("visibilitychange",()=>{document.hidden&&g()}),window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&h.classList.add("touch");let p=null,m=[0,0],M=null,C=0,v=x=>{let S=i.getBoundingClientRect();return x.clientX-S.left<S.width*.5&&x.clientY-S.top>S.height*.4},A=(x,S)=>{let B=i.getBoundingClientRect();d.style.left=`${x-B.left}px`,d.style.top=`${S-B.top}px`,d.hidden=!1,w(0,0)},w=(x,S)=>{u.style.transform=`translate(${x}px, ${S}px)`};i.addEventListener("pointerdown",x=>{if(!a()){if(x.pointerType==="touch"&&h.classList.add("touch"),x.pointerType==="touch"&&n()&&p===null&&v(x))p=x.pointerId,m=[x.clientX,x.clientY],A(x.clientX,x.clientY);else if(M===null)M=x.pointerId,C=x.clientX;else return;try{i.setPointerCapture(x.pointerId)}catch{}o()}}),i.addEventListener("pointermove",x=>{if(x.pointerId===p){let S=x.clientX-m[0],B=x.clientY-m[1],z=Math.hypot(S,B);z>No&&(S*=No/z,B*=No/z),w(S,B);let L=S/No,k=B/No;e.x=Math.abs(L)<vr?0:(L-Math.sign(L)*vr)/(1-vr),e.y=Math.abs(k)<vr?0:(k-Math.sign(k)*vr)/(1-vr)}else x.pointerId===M&&(n()&&r(x.clientX-C),C=x.clientX)});let N=x=>{x.pointerId===p&&(p=null,e.x=0,e.y=0,d.hidden=!0),x.pointerId===M&&(M=null)};for(let x of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(x,N);for(let x of document.querySelectorAll("#pad [data-cmd]"))x.addEventListener("pointerdown",S=>{S.preventDefault(),o(),s(x.dataset.cmd)}),x.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),s(x.dataset.cmd))});return{setMovement(x){g(),p=null,d.hidden=!0,h.classList.toggle("step",x==="step"),h.classList.toggle("free",x!=="step")}}}var $y={sound:!0,volume:.8,footsteps:.8,footTone:1,footCrisp:.6,wind:.5,lampHum:.35,music:.5,bells:.5,reverb:.5},Lf=$y,ls=i=>440*Math.pow(2,(i-69)/12),Pf=[62,64,65,67,69,71,72,74,76,77,79,81,83,84,86],If=[[50,57,62,65,69],[46,53,58,62,65],[41,48,53,57,64],[48,55,60,64,67]];function Df(i){let t=null,e,n,s,r,o,a,l,c,h=[],d=0,u=0,f=0,g,y,p,m,M,C,v=0,A=0,w=[0,1,0],N="forest",x=i;function S(E){let T=t.createBuffer(1,Math.round(t.sampleRate*E),t.sampleRate),X=T.getChannelData(0);for(let V=0;V<X.length;V++)X[V]=Math.random()*2-1;return T}function B(E=4.2){let T=Math.round(t.sampleRate*E),X=t.createBuffer(2,T,t.sampleRate);for(let V=0;V<2;V++){let K=X.getChannelData(V);for(let W=0;W<T;W++)K[W]=(Math.random()*2-1)*Math.pow(1-W/T,2.6)}return X}function z(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.connect(t.destination),a=S(2.5),s=t.createConvolver(),s.buffer=B(),r=t.createGain(),o=t.createGain(),n=t.createGain(),n.connect(o),n.connect(s),s.connect(r),o.connect(e),r.connect(e),g=t.createGain(),y=t.createBiquadFilter(),y.type="lowpass",y.frequency.value=9e3,g.connect(y),y.connect(e),p=t.createGain(),p.gain.value=0;{let tt=t.createDelay(1);tt.delayTime.value=.085;let lt=t.createGain();lt.gain.value=.38;let mt=t.createBiquadFilter();mt.type="lowpass",mt.frequency.value=1400,p.connect(tt),tt.connect(mt),mt.connect(lt),lt.connect(tt),mt.connect(e)}l=[{f:420,q:.6,g:.55,rate:.07},{f:1700,q:2.5,g:.12,rate:.11}].map(tt=>{let lt=t.createBufferSource();lt.buffer=a,lt.loop=!0;let mt=t.createBiquadFilter();mt.type="bandpass",mt.frequency.value=tt.f,mt.Q.value=tt.q;let Mt=t.createGain();return Mt.gain.value=0,lt.connect(mt),mt.connect(Mt),Mt.connect(g),lt.start(0,Math.random()*2),{...tt,filt:mt,gain:Mt,phase:Math.random()*10}});let E=t.createPanner();Object.assign(E,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.5,rolloffFactor:1.6,maxDistance:60}),L(E,0,3.6,0);let T=t.createGain();T.gain.value=0;let X=t.createOscillator();X.frequency.value=98;let V=t.createOscillator();V.frequency.value=196.6;let K=t.createGain();K.gain.value=.18;let W=t.createGain();W.gain.value=.05;let F=t.createBufferSource();F.buffer=a,F.loop=!0;let Z=t.createBiquadFilter();Z.type="highpass",Z.frequency.value=3500;let et=t.createGain();et.gain.value=.05,X.connect(K),V.connect(W),F.connect(Z),Z.connect(et);for(let tt of[K,W,et])tt.connect(T);T.connect(E),E.connect(e),X.start(),V.start(),F.start(0,1),c={lampGain:T};{let tt=t.createPanner();Object.assign(tt,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.2,rolloffFactor:1.4,maxDistance:30}),L(tt,...w);let lt=t.createGain();lt.gain.value=0;let mt=t.createBufferSource();mt.buffer=a,mt.loop=!0;let Mt=t.createBiquadFilter();Mt.type="bandpass",Mt.frequency.value=2200,Mt.Q.value=.6;let wt=t.createGain();wt.gain.value=.02;let Ot=t.createBufferSource();Ot.buffer=a,Ot.loop=!0;let Y=t.createBiquadFilter();Y.type="lowpass",Y.frequency.value=180;let se=t.createGain();se.gain.value=.35,mt.connect(Mt),Mt.connect(wt),wt.connect(lt),Ot.connect(Y),Y.connect(se),se.connect(lt),lt.connect(tt),tt.connect(e),mt.start(0,.3),Ot.start(0,1.1),m={gain:lt,pop:wt,pan:tt}}{let tt=t.createGain();tt.gain.value=0,tt.connect(e);let lt=t.createOscillator();lt.frequency.value=.7;let mt=t.createGain();mt.gain.value=.3,lt.connect(mt);for(let[Mt,wt]of[[ls(86),.5],[ls(90)*1.002,.35],[ls(93),.25]]){let Ot=t.createOscillator();Ot.frequency.value=Mt;let Y=t.createGain();Y.gain.value=wt,mt.connect(Y.gain),Ot.connect(Y),Y.connect(tt),Ot.start()}lt.start(),M={gain:tt}}{let tt=(ie,D,_)=>{let nt=t.createBufferSource();nt.buffer=a,nt.loop=!0;let rt=t.createBiquadFilter();rt.type=ie,rt.frequency.value=D,rt.Q.value=_;let dt=t.createGain();return dt.gain.value=0,nt.connect(rt),rt.connect(dt),dt.connect(e),nt.start(0,Math.random()*2),{g:dt,fl:rt}},lt=tt("bandpass",700,.8),mt=tt("highpass",3800,.5),Mt=tt("lowpass",200,.7),wt=t.createOscillator();wt.frequency.value=12;let Ot=t.createGain();Ot.gain.value=0,wt.connect(Ot),Ot.connect(lt.g.gain),wt.start();let Y=t.createOscillator();Y.frequency.value=ls(38);let se=t.createGain();se.gain.value=0,Y.connect(se),se.connect(e),Y.start(),C={rattle:lt,hiss:mt,swellN:Mt,fg:Ot,dg:se}}u=t.currentTime+.5,d=t.currentTime+3,G()}function L(E,T,X,V){E.positionX?(E.positionX.value=T,E.positionY.value=X,E.positionZ.value=V):E.setPosition(T,X,V)}function k(E,T){let X=t.listener;X.positionX?(X.positionX.value=E.x,X.positionY.value=E.y,X.positionZ.value=E.z,X.forwardX.value=T.x,X.forwardY.value=T.y,X.forwardZ.value=T.z,X.upX.value=0,X.upY.value=1,X.upZ.value=0):(X.setPosition(E.x,E.y,E.z),X.setOrientation(T.x,T.y,T.z,0,1,0))}function P({surface:E="snow",creak:T=!1}={}){if(!t||!x.sound||x.footsteps<=0)return;if(E==="boards"||E==="wood"||E==="hollow"){O(E),T&&q(380,.25,.05);return}let X=E==="path",V=t.currentTime,K=t.createBufferSource();K.buffer=a;let W=t.createBiquadFilter();W.type="bandpass";let F=(X?1200:2100)*x.footTone*(.85+Math.random()*.3);W.frequency.value=F,W.Q.value=.7;let Z=t.createBiquadFilter();Z.type="lowpass",Z.frequency.value=F*2.6;let et=t.createGain(),tt=.16+Math.random()*.07,lt=x.footsteps*(X?.5:.75)*(.8+Math.random()*.4);et.gain.setValueAtTime(0,V),et.gain.linearRampToValueAtTime(lt,V+.008);for(let mt=.012;mt<tt;mt+=.006+Math.random()*.01){let Mt=Math.pow(1-mt/tt,1.6);et.gain.setValueAtTime(lt*Mt*(1-x.footCrisp*Math.random()),V+mt)}et.gain.linearRampToValueAtTime(0,V+tt+.02),K.connect(W),W.connect(Z),Z.connect(et),et.connect(e),K.start(V,Math.random()*2,tt+.05)}function O(E,T=1){let X=t.currentTime,V=E==="hollow",K=(V?105:E==="boards"?150:135)*(.9+Math.random()*.2),W=t.createOscillator();W.frequency.setValueAtTime(K*1.6,X),W.frequency.exponentialRampToValueAtTime(K,X+.04);let F=t.createGain(),Z=x.footsteps*.32*T*(.8+Math.random()*.4);F.gain.setValueAtTime(0,X),F.gain.linearRampToValueAtTime(Z,X+.004),F.gain.exponentialRampToValueAtTime(5e-4,X+(V?.16:.1));let et=t.createBufferSource();et.buffer=a;let tt=t.createBiquadFilter();tt.type="bandpass",tt.frequency.value=V?700:1300,tt.Q.value=1.2;let lt=t.createGain();lt.gain.setValueAtTime(Z*.5,X),lt.gain.exponentialRampToValueAtTime(5e-4,X+.05),W.connect(F),et.connect(tt),tt.connect(lt);for(let mt of[F,lt])mt.connect(e),V&&mt.connect(p);W.start(X),W.stop(X+.2),et.start(X,Math.random()*2,.07)}function q(E,T,X,V=!1){let K=t.currentTime,W=t.createOscillator();W.type="sawtooth",W.frequency.setValueAtTime(E,K),W.frequency.linearRampToValueAtTime(E*.78,K+T);let F=t.createBiquadFilter();F.type="bandpass",F.frequency.value=E*2.2,F.Q.value=6;let Z=t.createGain();Z.gain.setValueAtTime(0,K),Z.gain.linearRampToValueAtTime(X,K+T*.25),Z.gain.linearRampToValueAtTime(0,K+T),W.connect(F),F.connect(Z),Z.connect(e),V&&Z.connect(p),W.start(K),W.stop(K+T+.05)}function H(E){if(!t||!x.sound)return;let T=t.currentTime,X={wardrobe:62,"tree-door":57,arch:65,slide:69}[E]||62;[0,7,14].forEach((V,K)=>{let W=t.createOscillator();W.frequency.value=ls(X+V);let F=t.createGain(),Z=.05/(1+K*.4);F.gain.setValueAtTime(0,T+K*.06),F.gain.linearRampToValueAtTime(Z,T+K*.06+.02),F.gain.exponentialRampToValueAtTime(3e-4,T+3),W.connect(F),F.connect(n),W.start(T+K*.06),W.stop(T+3.1)})}function J(){!t||!x.sound||(O("wood",1.4),setTimeout(()=>{t&&O("boards",.5)},140))}function $(){!t||!x.sound||O("wood",.9)}function it(){if(!t||!x.sound)return;let E=t.currentTime,T=t.createBufferSource();T.buffer=a;let X=t.createBiquadFilter();X.type="bandpass",X.frequency.value=3200,X.Q.value=.9;let V=t.createGain();V.gain.setValueAtTime(0,E);for(let[K,W]of[[.01,.05],[.05,.02],[.08,.04],[.14,.015],[.22,0]])V.gain.linearRampToValueAtTime(W,E+K);T.connect(X),X.connect(V),V.connect(e),T.start(E,Math.random()*2,.25)}let st={from:.06,to:.14};function yt(E){if(!t)return;let T=t.currentTime,X=C;X.rattle.g.gain.setTargetAtTime(E==="wood"?.19:0,T,.08),X.fg.gain.setTargetAtTime(E==="wood"?.1:0,T,.08),X.hiss.g.gain.setTargetAtTime(E==="ice"?st.from:0,T,.1),X.swellN.g.gain.setTargetAtTime(E==="blue"?.4:0,T,E==="blue"?.5:.2),X.dg.gain.setTargetAtTime(E==="blue"?.12:0,T,E==="blue"?.4:.2),E==="blue"?X.swellN.fl.frequency.setTargetAtTime(900,T,.6):X.swellN.fl.frequency.setTargetAtTime(200,T,.1)}function ct(E){N=E,t&&G()}function St(E){let T=If[f++%If.length],X=13;for(let V of T){let K=t.createOscillator(),W=t.createOscillator();K.type="triangle",W.type="sawtooth",K.frequency.value=ls(V),W.frequency.value=ls(V)*1.004;let F=t.createBiquadFilter();F.type="lowpass",F.frequency.value=650,F.Q.value=.4;let Z=t.createGain();Z.gain.value=.25;let et=t.createGain();et.gain.setValueAtTime(0,E),et.gain.linearRampToValueAtTime(.045,E+4.5),et.gain.setValueAtTime(.045,E+X-5),et.gain.linearRampToValueAtTime(0,E+X),K.connect(F),W.connect(Z),Z.connect(F),F.connect(et),et.connect(n),K.start(E),W.start(E),K.stop(E+X+.1),W.stop(E+X+.1)}}function I(E){let T=Pf[Math.floor(Math.random()*Pf.length)]+(Math.random()<.3?12:0),X=t.createStereoPanner();X.pan.value=Math.random()*1.4-.7;let V=t.createGain();V.connect(X),X.connect(n);let K=.06+Math.random()*.04,W=3.5+Math.random()*2;V.gain.setValueAtTime(0,E),V.gain.linearRampToValueAtTime(K,E+.01),V.gain.exponentialRampToValueAtTime(5e-4,E+W);for(let[F,Z]of[[1,1],[2.76,.25],[5.4,.08]]){let et=t.createOscillator();et.frequency.value=ls(T)*F;let tt=t.createGain();tt.gain.value=Z,et.connect(tt),tt.connect(V),et.start(E),et.stop(E+W+.1)}}function G(){if(!t)return;let E=t.currentTime;e.gain.setTargetAtTime(x.sound?x.volume:0,E,.08);let T=N==="library"?.4:N==="tunnel"?.7:1;n.gain.setTargetAtTime(x.music*(N==="library"?.7:N==="ride"?.6:1),E,.3),r.gain.setTargetAtTime(x.reverb*.9*T,E,.2),o.gain.setTargetAtTime(1-x.reverb*.55*T,E,.2),c.lampGain.gain.setTargetAtTime(N==="forest"?x.lampHum:0,E,.2),p.gain.setTargetAtTime(N==="tunnel"?.55:0,E,.1),m.gain.gain.setTargetAtTime(N==="library"?.5:0,E,.3),y.frequency.setTargetAtTime(N==="library"?700:9e3,E,.3)}function R({camPos:E,camFwd:T,outside:X,lane:V=0,archNear:K=0,ride:W=null}){if(!t||t.state!=="running")return;let F=t.currentTime;k(E,T);let Z=N==="forest"?1-.7*V:N==="library"?.3:N==="ride"&&W&&W.part!=="wood"?1.3:0;N==="forest"&&y.frequency.setTargetAtTime(9e3-7600*V,F,.3);for(let et of l){et.phase+=et.rate/60;let tt=.55+.45*Math.sin(et.phase)*Math.sin(et.phase*.37+1),lt=N==="forest"?.45+.55*X:1;et.gain.gain.setTargetAtTime(x.wind*et.g*tt*lt*Z,F,.3),et.filt.frequency.setTargetAtTime(et.f*(.8+.4*tt),F,.5)}M.gain.gain.setTargetAtTime(N==="forest"?.12*K*K*x.music*2:0,F,.25),W&&W.part==="ice"&&typeof W.speed=="number"&&C.hiss.g.gain.setTargetAtTime(st.from+(st.to-st.from)*Math.min(1,Math.max(0,W.speed)),F,.12),N==="library"&&F>=A&&(m.pop.gain.setValueAtTime(.25+Math.random()*.5,F),m.pop.gain.setTargetAtTime(.02,F+.01,.02),A=F+.04+Math.random()*Math.random()*.45),N==="tunnel"&&F>=v?(v&&q(62+Math.random()*18,1.2+Math.random()*.6,.07,!0),v=F+6+Math.random()*9):N!=="tunnel"&&(v=0),x.music>0?(F>=u-.2&&(St(Math.max(F,u)),u+=9),x.bells>0&&F>=d&&(I(F+.05),d=F+(2+Math.random()*6)/Math.max(.15,x.bells))):(u=F+1,d=F+2)}return{start(){t||z(),t.state==="suspended"&&!document.hidden&&t.resume()},step:P,update:R,apply:G,portal:H,door:J,hop:$,rustle:it,ride:yt,setPlace:ct,setFirePos(E,T,X){w=[E,T,X],m&&L(m.pan,E,T,X)},pause(){t&&t.state==="running"&&t.suspend()},resume(){t&&t.state==="suspended"&&t.resume()},get running(){return!!t&&t.state==="running"},get started(){return!!t}}}var Nf=Object.freeze({skyTop:"#04060d",skyHorizon:"#1a2640",stars:.7,moonlight:.8,moonColour:"#9fb6ff",ambient:.6,exposure:1,lampColour:"#ffbf6e",lampIntensity:14,lampReach:18,halo:1.6,shadows:!0,flicker:.15,snowAmount:6e3,snowSpeed:.8,flakeSize:1,snowDrift:.5,falling:!0,snowColour:"#e6ecf6",pathColour:"#8592ab",pathWidth:1.8,bumps:.5,treeCount:260,treeSize:1,treeSpacing:2.6,treeSnow:.75,treeColour:"#2c5341",trunkColour:"#4a3527",seed:7,fogColour:"#141c2e",fogDensity:.03,distance:3.2,height:2.1,shoulder:.35,lookAhead:1.6,lookHeight:.75,fov:62,follow:7,walkSpeed:2.6,turnSpeed:150,mouseTurn:!0}),Uf=Object.freeze({skyTop:"#06121c",skyHorizon:"#1f4152",fogColour:"#10242e",fogDensity:.026,ambient:.75,hemiSky:"#9fd0d8",moonColour:"#b8e2e6",snowSpeed:.35,lampColour:"#ffd9a0"}),Ff=()=>({...Lf});function Ze(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ky=[[.2,-5.5],[-.5,-10.5],[.5,-15.5],[1.3,-19.5],[3.6,-22.2],[7.5,-23.4],[12,-23],[16.5,-23.7],[21,-23.3],[25,-23.5]],Fo=[{id:"wardrobe",route:Ky},{id:"tree-door",angle:.15,bend:-1.2},{id:"arch",angle:Math.PI/2-.2,bend:.9},{id:"slide",angle:Math.PI+.1,bend:-.8}],Qy=.82;function jy(i,t){let e=Math.max(0,Math.min(Qy,(t-7)/23));return i.angle+e*i.bend*.55+Math.sin(e*Math.PI*1.6)*.16*i.bend}function Sr(i,{from:t=7-1.5,to:e=30,step:n=.5}={}){if(i.route)return Of(i.route,{from:t,extra:Math.max(0,e-30),step:n});let s=[];for(let r=t;r<=e+1e-9;r+=n){let o=jy(i,r);s.push([Math.cos(o)*r,Math.sin(o)*r])}return s}var Kh=i=>Fo.find(t=>t.id===i);function Of(i,{from:t,extra:e,step:n}){let s=[...i];if(t<Math.hypot(...i[0])-.25){let[h,d]=i[0],u=Math.hypot(h,d),f=Math.max(0,t)/u;s.unshift([h*f,d*f])}let r=[],o=[s[0],...s,s[s.length-1]];for(let h=1;h<o.length-2;h++){let[d,u,f,g]=[o[h-1],o[h],o[h+1],o[h+2]];for(let y=0;y<1;y+=.05){let p=y*y,m=p*y;r.push([0,1].map(M=>.5*(2*u[M]+(-d[M]+f[M])*y+(2*d[M]-5*u[M]+4*f[M]-g[M])*p+(-d[M]+3*u[M]-3*f[M]+g[M])*m)))}}r.push(s[s.length-1]);let a=[r[0]],l=0;for(let h=1;h<r.length;h++){let[d,u]=r[h-1],[f,g]=r[h],y=Math.hypot(f-d,g-u);for(;l+y>=n;){let p=(n-l)/y;d+=(f-d)*p,u+=(g-u)*p,y=Math.hypot(f-d,g-u),a.push([d,u]),l=0}l+=y}let c=s[s.length-1];if(Math.hypot(a.at(-1)[0]-c[0],a.at(-1)[1]-c[1])>.05&&a.push(c),e>0){let[h,d]=a.at(-2),[u,f]=a.at(-1),g=Math.hypot(u-h,f-d);for(let y=n;y<=e+1e-9;y+=n)a.push([u+(u-h)/g*y,f+(f-d)/g*y])}return a}function ec(i,t,e){let n=1/0,s=null;for(let r of e){let o=r.pts;for(let a=1;a<o.length;a++){let[l,c]=o[a-1],[h,d]=o[a],u=h-l,f=d-c,g=Math.max(0,Math.min(1,((i-l)*u+(t-c)*f)/(u*u+f*f))),y=Math.hypot(i-(l+u*g),t-(c+f*g));y<n&&(n=y,s=r.id)}}return{d:n,id:s}}function tv(i){let t=Sr(Kh(i)),[e,n]=t[t.length-1],[s,r]=t[t.length-3],o=Math.hypot(e-s,n-r),a=[(e-s)/o,(n-r)/o];return{id:i,o:[e,n],d:a,r:[-a[1],a[0]]}}var te=Object.fromEntries(Fo.map(i=>[i.id,tv(i.id)]));function be(i,t,e){let n=t-i.o[0],s=e-i.o[1];return[n*i.d[0]+s*i.d[1],n*i.r[0]+s*i.r[1]]}function ge(i,t,e){return[i.o[0]+i.d[0]*t+i.r[0]*e,i.o[1]+i.d[1]*t+i.r[1]*e]}var br=(i,t)=>Math.atan2(-i,-t),dn={depth:2.6,half:1.1,height:2.45,inner:.8},Uo={opening:1.2,pillar:.45,height:3.6,glade:3.4,gladeAt:-1.6},en={radius:2.5,at:3.2,mouth:.95,glade:3,gladeAt:-1},pe={width:10,depth:14,front:.6,door:.7,glade:3.6,gladeAt:-1.2},Hi=i=>te[i],ci=ge(Hi("tree-door"),en.at,0),Hf=ge(Hi("slide"),pe.front+pe.depth/2,0),Mr=[{id:"arch",at:ge(Hi("arch"),Uo.gladeAt,0),r:Uo.glade},{id:"tree-door",at:ge(Hi("tree-door"),en.gladeAt,0),r:en.glade},{id:"slide",at:ge(Hi("slide"),pe.gladeAt,0),r:pe.glade}],ev=[{at:ge(Hi("arch"),0,0),r:7.5},{at:ci,r:9.5},{at:Hf,r:12.5},{at:ge(Hi("wardrobe"),-1.2,0),r:3.6}],nv=[{at:ge(Hi("wardrobe"),-1.5,0),r:4,fade:4},{at:ge(Hi("arch"),-.8,0),r:5,fade:4},{at:ci,r:7,fade:4},{at:Hf,r:11,fade:4}],zf=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function iv(i,t){let e=1;for(let n of nv)e=Math.min(e,zf(n.r,n.r+n.fade,Math.hypot(i-n.at[0],t-n.at[1])));return e}function nc(i,t,e){let n=Math.hypot(i,t),s=Math.sin(i*.35)*Math.cos(t*.29)+Math.sin(i*.11+t*.17)*1.6,r=Math.hypot(i-Er[0],t-Er[1]),o=r<2.6?1.1*(1-zf(.6,2.6,r)):0;return s*e*Math.min(1,Math.max(0,(n-7+1)/6))*iv(i,t)-o}function kf(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Gf(i,t){let e=Sr(Kh(i)),n=kf(e),s=n[n.length-1];t=Math.max(0,Math.min(s,t));let r=1;for(;r<n.length-1&&n[r]<t;)r++;let o=(t-n[r-1])/(n[r]-n[r-1]||1),[a,l]=e[r-1],[c,h]=e[r],d=Math.hypot(c-a,h-l)||1;return{x:a+(c-a)*o,z:l+(h-l)*o,dx:(c-a)/d,dz:(h-l)/d,total:s}}var Vf=i=>{let t=kf(Sr(Kh(i)));return t[t.length-1]};function Wf({gap:i=.42,side:t=.95}={}){let e=Vf("wardrobe"),n=[];for(let s=e-8;s<=e-.25;s+=i){let r=Gf("wardrobe",s),o=(s-(e-8))/8;for(let a of[-1,1])n.push({x:r.x-r.dz*t*a,z:r.z+r.dx*t*a,t:o,side:a,dx:r.dx,dz:r.dz})}return n}function sv(){let i=Vf("wardrobe"),t=[],e=0;for(let n=i-8-1.5;n<=i-8*.42;n+=1.25,e++){let s=Gf("wardrobe",n);for(let r of[-1,1]){let o=2.75+(e*7+(r>0?3:0))%5*.06;t.push({x:s.x-s.dz*o*r,z:s.z+s.dx*o*r,s:.66+(e*3+(r>0?1:0))%4*.03,r:e*1.7+r,lane:!0})}}return t}function rv(){let[i,t]=te.wardrobe.o,e=Math.hypot(i,t),n=[i/e,t/e],s=[-n[1],n[0]],r=[],o=0;for(let[a,l,c,h]of[[12.5,2.3,9,0],[16,2.3,9,1.15]])for(let d=-c+h;d<=c;d+=l,o++)r.push({x:n[0]*a+s[0]*d,z:n[1]*a+s[1]*d,s:.9+o%4*.05,r:o*2.3});return r}var $h=[[15.8,-1],[18.2,1.5],[19,5.5],[17.4,9.6],[13.6,12.6],[8.6,14.2],[3.8,14.8],[.6,15.4]];function Qh(i=.5){let t=te.slide;return Of($h.map(([e,n])=>ge(t,e,n)),{from:1/0,extra:0,step:i})}var Er=(()=>{let[i,t]=$h[$h.length-1];return ge(te.slide,i,t)})();function Xf({seed:i=7,count:t=260,spacing:e=2.6,size:n=1,pathWidth:s=1.8}={}){let r=Ze(i),o=Fo.map(d=>({id:d.id,pts:Sr(d,{to:d.id==="wardrobe"?33:36})})),a=sv(),l=Qh(1);for(let d of rv())ec(d.x,d.z,o).d<s/2+2*d.s||Math.hypot(d.x,d.z)<7+1.9*d.s||a.push(d);let c=a.length,h=0;for(;a.length<t+c&&h<t*60;){h++;let d=8+Math.pow(r(),.8)*36,u=r()*Math.PI*2,f=Math.cos(u)*d,g=Math.sin(u)*d,y=n*(.7+r()*.6)*(d<11?1.12:1);d<7+1.9*y||ec(f,g,o).d<s/2+2*y||ev.some(p=>Math.hypot(f-p.at[0],g-p.at[1])<p.r+1.2*y)||Mr.some(p=>Math.hypot(f-p.at[0],g-p.at[1])<p.r+2*y)||ec(f,g,[{pts:l}]).d<1.1+1.5*y||Math.hypot(f-Er[0],g-Er[1])<2.4+1.5*y||a.some(p=>Math.hypot(p.x-f,p.z-g)<e*(p.s+y)/2)||a.push({x:f,z:g,s:y,r:r()*Math.PI*2})}return a}var ov=i=>1.7*i,av=.35,Ti=.28;function lv(i,t,{trees:e,paths:n,pathWidth:s=1.8}){let r=Math.hypot(i,t);if(r<av+Ti)return!1;for(let a of e)if(Math.hypot(a.x-i,a.z-t)<ov(a.s)+Ti)return!1;{let[a,l]=be(te.wardrobe,i,t);if(a>-.3&&a<3&&Math.abs(l)<3||a>-dn.depth-.1&&a<=-.3&&Math.abs(l)>dn.inner&&Math.abs(l)<dn.half+.6)return!1}{let[a,l]=be(te.arch,i,t);if(a>-.32&&a<6&&Math.abs(l)<6)return!1}if(Math.hypot(i-ci[0],t-ci[1])<en.radius+Ti)return!1;{let[a,l]=be(te.slide,i,t);if(a>pe.front-Ti&&a<pe.front+pe.depth+Ti&&Math.abs(l)<pe.width/2+Ti)return!1}return r<=7||Mr.some(a=>Math.hypot(i-a.at[0],t-a.at[1])<=a.r)?!0:ec(i,t,n).d<=s/2+.25}function qf(i,t,e){let n=[[i[0]+t[0],i[1]+t[1]],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]];for(let s of n)if(lv(s[0],s[1],e))return s;return i}function Bf(i,t){let e=te[i],[n,s]=ge(e,t,0);return{x:n,z:s,yaw:br(-e.d[0],-e.d[1])}}var As={lamppost:{x:0,z:3.2,yaw:0},wardrobe:Bf("wardrobe",-2.2),arch:Bf("arch",-.9)};function jh(i,t){{let[e,n]=be(te.wardrobe,i,t);if(e>-.5&&e<.5&&Math.abs(n)<dn.inner+.05)return{id:"wardrobe",kind:"portal"}}{let[e,n]=be(te.arch,i,t);if(e>-.5&&e<.5&&Math.abs(n)<Uo.opening-.1)return{id:"arch",kind:"portal"}}{let[e,n]=be(te["tree-door"],i,t);if(Math.hypot(i-ci[0],t-ci[1])<en.radius+Ti+.25&&Math.abs(n)<en.mouth&&e<en.at)return{id:"tree-door",kind:"mouth"}}{let[e,n]=be(te.slide,i,t);if(e>pe.front-Ti-.25&&e<pe.front&&Math.abs(n)<pe.door)return{id:"slide",kind:"door"}}return null}function Yf(i,t){if(Math.hypot(i,t)<=7+.5)return"the clearing";{let[n,s]=be(te.wardrobe,i,t);if(n>-8+2.5&&n<.5&&Math.abs(s)<3)return"among the coats"}return Math.hypot(...[0,1].map(n=>[i,t][n]-Mr[0].at[n]))<=Mr[0].r+1.5?"the stone arch":Math.hypot(i-ci[0],t-ci[1])<=en.radius+4.5?"the great tree":Math.hypot(...[0,1].map(n=>[i,t][n]-Mr[2].at[n]))<=Mr[2].r+1.5?"the library":"in the woods"}var Ut=i=>new ee(i);function Zf(i,t){let e=new ii,n=new $e(t.fov,1,.05,600);e.fog=new Kr(Ut(t.fogColour),t.fogDensity),i.toneMapping=Mo,i.toneMappingExposure=t.exposure,i.shadowMap.enabled=!0,i.shadowMap.type=Ms;let s=new Ke({uniforms:{top:{value:Ut(t.skyTop)},horizon:{value:Ut(t.skyHorizon)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.55)), 1.0); }",side:Qe,depthWrite:!1,fog:!1}),r=new ut(new We(400,32,16),s);r.renderOrder=-2,e.add(r);let o=new fe;{let R=new Float32Array(4200),E=new Float32Array(1400),T=12345,X=()=>(T=T*16807%2147483647)/2147483647;for(let V=0;V<1400;V++){let K=X(),W=.08+X()*.92,F=K*Math.PI*2,Z=W,et=Math.sqrt(1-Z*Z);R.set([Math.cos(F)*et*380,Z*380,Math.sin(F)*et*380],V*3),E[V]=.3+X()*.7}o.setAttribute("position",new Be(R,3)),o.setAttribute("bright",new Be(E,1))}let a=new Ke({uniforms:{amount:{value:t.stars},time:{value:0}},vertexShader:"attribute float bright; uniform float time; varying float vB; void main(){ vB = bright * (0.75 + 0.25 * sin(time * 1.3 + position.x)); gl_PointSize = 1.0 + bright * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vec3(0.85,0.9,1.0), a * vB * amount); }",transparent:!0,depthWrite:!1,fog:!1}),l=new lr(o,a);l.renderOrder=-1,e.add(l);let c=new vs(9413848,2765638,t.ambient);e.add(c);let h=new yo(Ut(t.moonColour),t.moonlight);h.position.set(-30,40,-18),e.add(h);let d=(G,R)=>nc(G,R,t.bumps),u=116,f=new ze(u,u,180,180).rotateX(-Math.PI/2);{let G=f.attributes.position;for(let R=0;R<G.count;R++)G.setY(R,d(G.getX(R),G.getZ(R)));f.computeVertexNormals()}let g=Fo.map(G=>({id:G.id,pts:Sr(G)})),y=document.createElement("canvas");y.width=y.height=2048;let p=(G,R)=>[(G/u+.5)*2048,(R/u+.5)*2048];{let G=y.getContext("2d");G.fillStyle=t.snowColour,G.fillRect(0,0,2048,2048);let R=(()=>{let V=99;return()=>(V=V*16807%2147483647)/2147483647})();for(let V=0;V<900;V++){let K=R()*2048,W=R()*2048,F=10+R()*60,Z=G.createRadialGradient(K,W,0,K,W,F);Z.addColorStop(0,R()<.5?"rgba(255,255,255,0.10)":"rgba(120,140,180,0.07)"),Z.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=Z,G.beginPath(),G.arc(K,W,F,0,Math.PI*2),G.fill()}let E=2048/u;for(let V of[{w:1.35,a:.4,blur:6},{w:.95,a:.85,blur:2}]){G.save(),G.filter=`blur(${V.blur}px)`,G.strokeStyle=t.pathColour,G.globalAlpha=V.a,G.lineWidth=t.pathWidth*E*V.w,G.lineCap="round",G.lineJoin="round";for(let F of g)G.beginPath(),F.pts.forEach(([Z,et],tt)=>{let[lt,mt]=p(Z,et);tt?G.lineTo(lt,mt):G.moveTo(lt,mt)}),G.stroke();let[K,W]=p(0,0);G.lineWidth=t.pathWidth*E*V.w*.9,G.beginPath(),G.arc(K,W,3.2*E,0,Math.PI*2),G.stroke(),G.globalAlpha=V.a*.45;for(let[F,Z,et]of[["arch",-1.6,2.6],["tree-door",-.8,2.4],["slide",-1,2.8]]){let[tt,lt]=p(...ge(te[F],Z,0));G.fillStyle=t.pathColour,G.beginPath(),G.arc(tt,lt,et*E,0,Math.PI*2),G.fill()}G.restore()}let T=te.slide,X=[];for(let V of[4.1,8.1,12.1])X.push(ge(T,V,pe.width/2+1.4));G.save(),G.globalCompositeOperation="source-over";for(let[V,K]of X){let[W,F]=p(V,K),Z=2.6*E,et=G.createRadialGradient(W,F,0,W,F,Z);et.addColorStop(0,"rgba(255,196,120,0.55)"),et.addColorStop(1,"rgba(255,196,120,0)"),G.fillStyle=et,G.beginPath(),G.arc(W,F,Z,0,Math.PI*2),G.fill()}G.restore()}let m=new Ji(y);m.colorSpace=ln,m.anisotropy=4;let M=new ut(f,new Bt({map:m}));M.receiveShadow=!0,e.add(M);function C(){let G=Ut(t.treeColour),R=Ut(t.snowColour),E=Ut(t.trunkColour),T=[{geo:new Ae(.2,.3,1.2,7).translate(0,.6,0),colour:E}],X=6;for(let V=0;V<X;V++){let K=V/(X-1),W=2.4-K*1.75,F=2.9-K*1,Z=.45+V*1.55;T.push({geo:new Ye(W,F,9).translate(0,Z+F/2,0),colour:G});let et=t.treeSnow,tt=W*(.55+.35*et),lt=F*(.35+.25*et);et>0&&T.push({geo:new Ye(tt,lt,9).translate(0,Z+F-lt/2+.06,0),colour:R})}return Tr(T)}let v=Xf({seed:t.seed,count:t.treeCount,spacing:t.treeSpacing,size:t.treeSize,pathWidth:t.pathWidth}),A=new ri(C(),new Bt({vertexColors:!0,flatShading:!0}),v.length);{let G=new le,R=new xn,E=new U(0,1,0);v.forEach((T,X)=>{R.setFromAxisAngle(E,T.r),G.compose(new U(T.x,d(T.x,T.z)-.1,T.z),R,new U(T.s,T.s*(.95+X%5*.03),T.s)),A.setMatrixAt(X,G)})}A.castShadow=!0,A.receiveShadow=!0,e.add(A);let w={trees:v,paths:g,pathWidth:t.pathWidth},N=new _e,x=new Bt({color:1776930});for(let G of[new Ae(.28,.36,.35,10).translate(0,.17,0),new Ae(.07,.1,3,10).translate(0,1.85,0),new Ae(.2,.12,.12,8).translate(0,3.33,0),new Ye(.34,.3,4).rotateY(Math.PI/4).translate(0,4.07,0),new We(.06,8,6).translate(0,4.27,0)])N.add(new ut(G,x));let S=new ye({color:Ut(t.lampColour)});N.add(new ut(new Ae(.2,.15,.55,4).rotateY(Math.PI/4).translate(0,3.66,0),S));for(let[G,R]of[[1,1],[1,-1],[-1,1],[-1,-1]])N.add(new ut(new $t(.03,.6,.03).translate(G*.17,3.66,R*.17),x));e.add(N);let B=new He(new Oe({map:fn(),color:Ut(t.lampColour),blending:Ge,depthWrite:!1,transparent:!0,fog:!1}));B.position.set(0,3.66,0),B.scale.setScalar(t.halo),e.add(B);let z=new ke(Ut(t.lampColour),t.lampIntensity,t.lampReach,1.6);z.position.set(0,3.5,0),z.shadow.mapSize.set(1024,1024),z.shadow.bias=-.002,z.shadow.radius=4,z.castShadow=t.shadows,e.add(z);let L=new _e,k=new ut(new oo(.2,.46,6,16).translate(0,.43,0),new Bt({color:16185339,emissive:2764864})),P=new ut(new We(.17,18,12).translate(0,1,0),new Bt({color:3947086})),O=new ut(new Ye(.07,.2,10).rotateX(Math.PI/2).translate(0,1,-.2),new Bt({color:15773766}));for(let G of[k,P,O])G.castShadow=!0,L.add(G);e.add(L);let q=[36,16,36],H=te.wardrobe,J=ge(H,-dn.depth/2,0),$=te.slide,it=ge($,pe.front+pe.depth/2,0),st=new Ke({uniforms:{time:{value:0},speed:{value:t.snowSpeed},drift:{value:t.snowDrift},size:{value:t.flakeSize},centre:{value:new U},box:{value:new U(...q)},scale:{value:400},fogColour:{value:Ut(t.fogColour)},fogDensity:{value:t.fogDensity},shelter:{value:new Se(J[0],J[1],H.d[0],H.d[1])},shelterSize:{value:new U(dn.depth/2+.05,dn.half+.05,dn.height)},shelter2:{value:new Se(it[0],it[1],$.d[0],$.d[1])},shelterSize2:{value:new U(pe.depth/2+.1,pe.width/2+.1,8)}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),yt=(()=>{let G=Math.max(1,Math.round(t.snowAmount)),R=new Float32Array(G*3),E=new Float32Array(G);for(let V=0;V<G;V++)R.set([(Math.random()-.5)*q[0],Math.random()*q[1],(Math.random()-.5)*q[2]],V*3),E[V]=Math.random();let T=new fe;T.setAttribute("position",new Be(R,3)),T.setAttribute("seed",new Be(E,1));let X=new lr(T,st);return X.frustumCulled=!1,X.visible=t.falling,X})();e.add(yt);let ct={skyTop:t.skyTop,skyHorizon:t.skyHorizon,fogColour:t.fogColour,fogDensity:t.fogDensity,ambient:t.ambient,hemiSky:"#8fa4d8",moonColour:t.moonColour,snowSpeed:t.snowSpeed,lampColour:t.lampColour};function St(G){s.uniforms.top.value.set(G.skyTop),s.uniforms.horizon.value.set(G.skyHorizon),e.fog.color.set(G.fogColour),e.fog.density=G.fogDensity,st.uniforms.fogColour.value.set(G.fogColour),st.uniforms.fogDensity.value=G.fogDensity,c.intensity=G.ambient,c.color.set(G.hemiSky),h.color.set(G.moonColour),st.uniforms.speed.value=G.snowSpeed,S.color.set(G.lampColour),B.material.color.set(G.lampColour),z.color.set(G.lampColour)}function I(G){st.uniforms.time.value=G,a.uniforms.time.value=G;let R=1-t.flicker*(.5+.5*Math.sin(G*7.3)*Math.sin(G*3.1+1.7))*.35;z.intensity=t.lampIntensity*R,B.material.opacity=.65+.35*R}return{scene:e,camera:n,groundAt:d,walkWorld:w,figure:L,snow:yt,snowMat:st,halo:B,lampLight:z,setLight:St,own:ct,tick:I,groundTex:m}}function fn(i=[[0,.9],[.18,.45],[1,0]]){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[s,r]of i)n.addColorStop(s,`rgba(255,255,255,${r})`);return e.fillStyle=n,e.fillRect(0,0,128,128),new Ji(t)}function Tr(i){let t=i.map(({geo:l,colour:c})=>{let h=l.index?l.toNonIndexed():l;h.computeVertexNormals();let d=new Float32Array(h.attributes.position.count*3);for(let u=0;u<h.attributes.position.count;u++)d.set([c.r,c.g,c.b],u*3);return h.setAttribute("color",new Be(d,3)),h}),e=t.reduce((l,c)=>l+c.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),s.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new fe;return a.setAttribute("position",new Be(n,3)),a.setAttribute("normal",new Be(s,3)),a.setAttribute("color",new Be(r,3)),a}var hi=Ti,hv=.5,Wt={u0:pe.front+.25,u1:pe.front+pe.depth-.25,v:pe.width/2-.25,ceiling:5.4,door:.7,mezz:{u0:pe.front+.25,u1:9.5,v0:-(pe.width/2-.25),v1:-2.4,h:2.3},stairs:{u0:9.5,u1:13,v0:-(pe.width/2-.25),v1:-3.55},walk:{u0:pe.front+.25,u1:2.45,v0:-2.4,v1:pe.width/2-.25,h0:2.3,h1:3,level:.2,top:7},bench:{u0:1.1,u1:2.3,v0:4.25,v1:4.75,h:.45},littleDoor:{u:1.7,half:.13,y0:3.45,y1:3.8},tall:[4.1,8.1,12.1].map(i=>({wall:"right",at:i,w:2.4,sill:.8,h:2.6})),round:[{wall:"front",at:-3.35,y:3.9,r:.5},{wall:"front",at:3.35,y:3.9,r:.5},...[4.1,8.1,12.1].map(i=>({wall:"left",at:i,y:3.55,r:.5}))],columns:[[0,-1.3],[0,1.3],[6.1,1],[10.1,1],[6.1,-1],[10.1,-1]]};Wt.mezz.u0=Wt.u0;Wt.stairs.v0=Wt.mezz.v0;var zi=(i,t,e,n=0)=>i>e.u0-n&&i<e.u1+n&&t>e.v0-n&&t<e.v1+n,Bo=1,wr=[{id:"table1",u0:3.9,u1:6.1,v0:.65,v1:1.75},{id:"table2",u0:8.4,u1:10.6,v0:.65,v1:1.75},{id:"chairs1",u0:4.1,u1:5.9,v0:1.95,v1:2.5},{id:"chairs2",u0:8.6,u1:10.4,v0:1.95,v1:2.5},{id:"fireplace",u0:13.55,u1:14.4,v0:-1.35,v1:1.35},{id:"shelf-back-right",u0:13.85,u1:14.4,v0:1.5,v1:4.8},{id:"ladder",u0:13.4,u1:13.85,v0:2.85,v1:3.55},{id:"shelf-back-left",u0:13.85,u1:14.4,v0:-3.45,v1:-1.5},{id:"column-6",u0:5.65,u1:6.55,v0:4.3,v1:4.8},{id:"column-10",u0:9.65,u1:10.55,v0:4.3,v1:4.8},{id:"column-front-left",u0:.8,u1:1.33,v0:-1.75,v1:-.85,level:"both"},{id:"column-front-right",u0:.8,u1:1.33,v0:.85,v1:1.75,level:"both"},{id:"coat-stand",u0:.95,u1:1.6,v0:3.95,v1:4.8},{id:"walk-posts",u0:2.2,u1:2.5,v0:1.45,v1:1.75},{id:"mezz-shelves",u0:2.7,u1:9.5,v0:-4.8,v1:-4.3,level:"up"},{id:"nook-chair",u0:1.55,u1:2.35,v0:-3.85,v1:-3.05,level:"up"},{id:"nook-table",u0:.8,u1:1.4,v0:-4.8,v1:-4.2,level:"up"}];function Rs(i){let t=Wt.walk;return t.h0+(t.h1-t.h0)*Math.max(0,Math.min(1,(i-t.v0)/(t.level-t.v0)))}function sc(i,t){let e=Wt.walk;return i>e.u1?Wt.ceiling:Wt.ceiling+(e.top-Wt.ceiling)*Math.max(0,Math.min(1,(t-e.v0)/(e.v1-e.v0)))}function Jf(i,t){let{mezz:e,stairs:n,bench:s,walk:r}=Wt;return zi(i,t,e)||Math.abs(i-e.u1)<1e-9&&t>e.v0&&t<Wt.stairs.v1?[e.h]:zi(i,t,n)?[e.h*Math.max(0,Math.min(1,(n.u1-i)/(n.u1-n.u0)))]:i>r.u0&&i<r.u1&&t>=r.v0-1e-9&&t<r.v1?[0,Rs(t)+(zi(i,t,s)?s.h:0)]:[0]}function tu(i,t,e=0){let n=null;for(let s of Jf(i,t))Math.abs(s-e)<=hv+1e-9&&(n===null||Math.abs(s-e)<Math.abs(n-e))&&(n=s);return n}function uv(i,t,e=0){if(i<Wt.u0+hi||i>Wt.u1-hi||Math.abs(t)>Wt.v-hi)return!1;for(let n of wr)if((n.level==="both"||(n.level==="up"?e>Bo:e<=Bo))&&zi(i,t,n,hi*.6))return!1;return!0}function $f(i,t,e){let n=te.slide,s=(o,a)=>{let[l,c]=be(n,o,a),h=tu(l,c,e);if(h===null||!uv(l,c,h))return null;for(let[d,u]of[[.7,0],[-.7,0],[0,.7],[0,-.7]])if(tu(l+d*hi,c+u*hi,h)===null)return null;return h},r=o=>{let a=t[0]*o[0]+t[1]*o[1];return[i[0]+o[0]*a,i[1]+o[1]*a]};for(let o of[[i[0]+t[0],i[1]+t[1]],r(n.d),r(n.r)]){let a=s(o[0],o[1]);if(a!==null)return[o[0],o[1],a]}return null}var rc=(i,t,e)=>{let[n,s]=be(te.slide,i,t);if(e===void 0)return Math.max(...Jf(n,s));let r=tu(n,s,e);return r===null?e:r};function Kf(i,t,e,n,s=0){let r=te.slide,[o,a]=be(r,i,t),[l,c]=be(r,e,n);if(s<.1&&l<Wt.u0+hi+.06&&Math.abs(a)<Wt.door-.1)return{id:"out",kind:"door-out"};let h=Wt.littleDoor;return Math.abs(s-(Wt.walk.h1+Wt.bench.h))<.02&&c>Wt.v-hi-.03&&Math.abs(o-h.u)<.4?{id:"slide",kind:"little-door"}:null}function eu(i,t,e=0){let[n,s]=be(te.slide,i,t);return Math.abs(e-(Wt.walk.h1+Wt.bench.h))<.02?"on the bench":e>Bo&&zi(n,s,Wt.walk)?"over the entrance":e>=Wt.mezz.h-.01?n<3.2?"the reading nook":"up on the mezzanine":e>.1&&zi(n,s,Wt.stairs)?"on the stairs":n>12.6&&Math.abs(s)<2?"by the fire":"the library"}var Qf=(i,t,e,n)=>{let s=te.slide,[r,o]=ge(s,i,t),a=s.d[0]*e+s.r[0]*n,l=s.d[1]*e+s.r[1]*n;return{x:r,z:o,yaw:br(a,l)}},jf=Qf(Wt.u0+2.4,0,1,0),tp=Qf(-1.6,0,-1,0);function ep(i,t,e=0){let n=te.slide,[s,r]=be(n,i.x,i.z),[o,a]=be(n,t.x,t.z);s=Math.max(Wt.u0+.2,Math.min(Wt.u1-.2,s)),r=Math.max(-Wt.v+.2,Math.min(Wt.v-.2,r));let l=i.y;e<Wt.mezz.h-.5&&zi(s,r,Wt.mezz,.15)&&l<Wt.mezz.h+.2&&(r=Math.max(r,Wt.mezz.v1+.2)),e>Bo&&(l=Math.max(l,e+.9));let c=wr.filter(f=>dv.includes(f.id)),h=(f,g)=>c.some(y=>zi(f,g,y,.18));if(h(s,r))for(let f=19;f>=1;f--){let g=f/20,y=o+(s-o)*g,p=a+(r-a)*g;if(!h(y,p)){s=y,r=p;break}}if(l=Math.min(l,sc(s,r)-.25),e<=Bo&&zi(s,r,Wt.walk,.15)){let f=Rs(r)-.16-.2;l>f&&(o>Wt.walk.u1?s=Math.max(s,Wt.walk.u1+.25):l=f)}let[d,u]=ge(n,s,r);return{x:d,y:l,z:u}}var dv=["shelf-back-right","shelf-back-left","ladder","fireplace","column-6","column-10","column-front-left","column-front-right","coat-stand"],Xn={length:12,curve:16,half:.95,height:2.35,door:6.6},Wn=te["tree-door"],ic=ge(Wn,en.at-en.radius-.62,0),Oo=nc(ic[0],ic[1],0);function ui(i){let t=i/Xn.curve,e=Xn.curve*Math.sin(t),n=Xn.curve*(1-Math.cos(t)),s=ic[0]+Wn.d[0]*e+Wn.r[0]*n,r=ic[1]+Wn.d[1]*e+Wn.r[1]*n,o=Wn.d[0]*Math.cos(t)+Wn.r[0]*Math.sin(t),a=Wn.d[1]*Math.cos(t)+Wn.r[1]*Math.sin(t);return{x:s,z:r,dx:o,dz:a,rx:-a,rz:o}}function Cs(i,t){let e={s:0,w:0,d:1/0};for(let n=-1.5;n<=Xn.length;n+=.1){let s=ui(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}for(let n=e.s-.1;n<=e.s+.1;n+=.005){let s=ui(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}return e}function fv(i,t){let{s:e,w:n}=Cs(i,t);return e>.05&&e<Xn.door-hi-.12&&Math.abs(n)<Xn.half-hi-.12}function np(i,t){let e=ui(Cs(i[0],i[1]).s),n=t[0]*e.dx+t[1]*e.dz;for(let s of[[i[0]+t[0],i[1]+t[1]],[i[0]+e.dx*n,i[1]+e.dz*n],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]])if(fv(s[0],s[1]))return s;return i}function ip(i,t,e,n){let s=Cs(e,n);return s.s<.25?{id:"out",kind:"mouth-out"}:s.s>Xn.door-hi-.2&&Math.abs(s.w)<Xn.half?{id:"tree-door",kind:"portal"}:null}var sp=(i,t)=>{let e=ui(i);return{x:e.x,z:e.z,yaw:t?br(-e.dx,-e.dz):br(e.dx,e.dz)}},rp=sp(1.7,!1),op=sp(Xn.door-1.9,!0),ap=(()=>{let[i,t]=ge(Wn,en.at-en.radius-2.1,0);return{x:i,z:t,yaw:br(-Wn.d[0],-Wn.d[1])}})();function lp(i,t,e){let n=Cs(t.x,t.z),s=e?Math.max(.1,n.s-1.7):Math.min(Xn.door-.25,n.s+1.7),r=Math.max(-.45,Math.min(.45,n.w*.5+.2)),o=ui(s);return{x:o.x+o.rx*r,y:Math.min(i.y,Oo+1.75),z:o.z+o.rz*r}}function Bn(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new Ji(r);return s&&(o.colorSpace=ln),n&&(o.wrapS=o.wrapT=ni,o.repeat.set(...n)),o.anisotropy=4,o}var an=(i="#5a3a24",t="rgba(30,16,8,0.35)",e=4)=>Bn(256,256,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=Ze(5);for(let a=0;a<120;a++){n.strokeStyle=t,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*s;n.moveTo(l,0),n.bezierCurveTo(l+o()*8-4,r/3,l+o()*8-4,2*r/3,l+o()*6-3,r),n.stroke()}n.fillStyle="rgba(15,8,4,0.6)";for(let a=1;a<e;a++)n.fillRect(a*s/e-1,0,2,r)}),cs=()=>Bn(256,512,(i,t,e)=>{i.fillStyle="#4b3a2e",i.fillRect(0,0,t,e);let n=Ze(11);for(let s=0;s<90;s++){let r=n()*t,o=3+n()*9;i.fillStyle=n()<.5?"rgba(20,14,10,0.55)":"rgba(120,100,82,0.25)",i.beginPath(),i.moveTo(r,0);for(let a=0;a<=e;a+=32)i.lineTo(r+Math.sin(a*.03+s)*6,a);for(let a=e;a>=0;a-=32)i.lineTo(r+o+Math.sin(a*.03+s)*6,a);i.fill()}},{repeat:[3,2]}),oc=(i=3)=>Bn(256,256,(t,e,n)=>{t.fillStyle="#d2ccc0",t.fillRect(0,0,e,n);let s=Ze(i);for(let r=0;r<1600;r++){let o=150+s()*80;t.fillStyle=`rgba(${o},${o-4},${o-12},0.35)`,t.fillRect(s()*e,s()*n,2+s()*6,2+s()*6)}}),cp=()=>Bn(512,512,(i,t,e)=>{i.fillStyle="#3d3a36",i.fillRect(0,0,t,e);let n=Ze(21);for(let s=0,r=0;r<e+40;s++){let o=34+n()*14;for(let a=s%2*-20;a<t+40;){let l=42+n()*26,c=105+n()*60,h=n()*18;i.fillStyle=`rgb(${c+h},${c+h*.6},${c-8})`,i.beginPath(),i.ellipse(a+l/2,r+o/2,l/2-3,o/2-3,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.08)",i.beginPath(),i.ellipse(a+l/2-4,r+o/2-5,l/3,o/5,0,0,Math.PI*2),i.fill(),a+=l}r+=o}},{repeat:[2.5,1.2]}),hp=()=>Bn(256,256,(i,t,e)=>{i.fillStyle="#e8eef7",i.fillRect(0,0,t,e);let n=Ze(31);for(let r=0;r<140;r++){let o=e*(.45+n()*.6),a=n()*t,l=6+n()*22;i.fillStyle=n()<.6?"rgba(62,92,52,0.85)":"rgba(92,118,66,0.8)",i.beginPath(),i.ellipse(a,o,l,l*.6,0,0,Math.PI*2),i.fill()}let s=i.createLinearGradient(0,e*.85,0,e);s.addColorStop(0,"rgba(232,238,247,0)"),s.addColorStop(1,"rgba(232,238,247,0.95)"),i.fillStyle=s,i.fillRect(0,0,t,e)}),nu=()=>Bn(128,160,(i,t,e)=>{let n=i.createRadialGradient(t/2,e*.55,6,t/2,e*.55,e*.75);n.addColorStop(0,"#ffd9a0"),n.addColorStop(.6,"#e99a4c"),n.addColorStop(1,"#a8582a"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(90,45,20,0.35)";for(let r=0;r<4;r++)i.fillRect(8,30+r*30,t*.35,6);i.fillStyle="rgba(255,240,200,0.5)",i.beginPath(),i.arc(t*.72,e*.5,9,0,Math.PI*2),i.fill();let s=Ze(41);for(let r=0;r<260;r++){let o=s()<.5,a=o?s()<.5?s()*22:t-s()*22:s()*t,l=o?s()*e:s()<.5?s()*22:e-s()*22;i.fillStyle=`rgba(235,242,255,${.12+s()*.3})`,i.beginPath(),i.arc(a,l,1+s()*4,0,Math.PI*2),i.fill()}}),up=()=>Bn(256,256,(i,t,e)=>{i.fillStyle="#6b4a30",i.fillRect(0,0,t,e);let n=Ze(51);for(let s=0;s<8;s++)i.fillStyle=`rgba(${110+n()*30},${74+n()*18},${44+n()*12},0.55)`,i.fillRect(s*t/8,0,t/8-3,e),i.fillStyle="rgba(25,14,6,0.65)",i.fillRect((s+1)*t/8-3,0,3,e);for(let s=0;s<160;s++){i.strokeStyle="rgba(40,22,10,0.18)",i.lineWidth=.6+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.lineTo(r+n()*4-2,e),i.stroke()}},{repeat:[1,1]}),dp=()=>Bn(128,160,(i,t,e)=>{i.fillStyle="#efe6d2",i.fillRect(0,0,t,e);let n=Ze(61);i.fillStyle="rgba(70,55,40,0.45)";for(let s=18;s<e-14;s+=7){let r=12;for(;r<t-14;){let o=4+n()*16;i.fillRect(r,s,Math.min(o,t-14-r),2),r+=o+3}}}),iu=(i=!1)=>Bn(128,128,(t,e,n)=>{t.clearRect(0,0,e,n);let s=Ze(i?73:71);t.fillStyle="rgba(170,195,230,0.10)",t.fillRect(0,0,e,n);for(let r=0;r<700;r++){let o=Math.pow(s(),2.2)*.22,a=Math.floor(s()*4),l=s(),[c,h]=i?[e/2+Math.cos(l*6.283)*(.5-o)*e,n/2+Math.sin(l*6.283)*(.5-o)*n]:a===0?[l*e,o*n]:a===1?[l*e,n-o*n]:a===2?[o*e,l*n]:[e-o*e,l*n];t.fillStyle=`rgba(230,240,255,${.15+s()*.35})`,t.beginPath(),t.arc(c,h,.8+s()*3,0,Math.PI*2),t.fill()}}),su=()=>Bn(256,512,(i,t,e)=>{i.fillStyle="#7a5434",i.fillRect(0,0,t,e);let n=Ze(81);for(let s=0;s<26;s++){let r=n()*e,o=6+n()*18;i.strokeStyle=n()<.5?"rgba(60,34,16,0.45)":"rgba(160,118,78,0.3)",i.lineWidth=1.5+n()*4,i.beginPath();for(let a=0;a<=t;a+=8)i.lineTo(a,r+Math.sin(a*.02+s)*o);i.stroke()}for(let s=0;s<300;s++){i.strokeStyle="rgba(40,22,10,0.2)",i.lineWidth=.5+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.bezierCurveTo(r+n()*10-5,e/3,r+n()*10-5,2*e/3,r,e),i.stroke()}},{repeat:[2,3]});var Et=(i,t,e)=>new U(-e,t,i);function Ar(i){let t=te[i],e=new _e,n=new U(t.d[0],0,t.d[1]),s=new U(t.r[0],0,t.r[1]);return e.quaternion.setFromRotationMatrix(new le().makeBasis(s.clone().negate(),new U(0,1,0),n)),e.position.set(t.o[0],0,t.o[1]),e}function fp({scene:i,renderer:t,sceneParts:e,look:n,other:s}){let r={},o={value:0};{let a=Ar("wardrobe"),l=te.wardrobe,c=(ct,St)=>{let I=ct-l.o[0],G=St-l.o[1];return[I*l.d[0]+G*l.d[1],I*l.r[0]+G*l.r[1]]},h=Wf(),d=Ze(17),u=Ut(n.treeColour),f=Ut(n.snowColour),g=Tr([{geo:new Ye(.36,1.1,7).rotateZ(Math.PI/2).scale(1,.38,1).translate(-.55,0,0),colour:u},{geo:new Ye(.26,.95,7).rotateZ(Math.PI/2).scale(1,.16,.7).translate(-.5,.09,0),colour:f}]),y=[[0,-1],[.27,-.98],[.29,-.8],[.25,-.45],[.22,-.15],[.24,-.06],[.2,0],[.06,.04],[0,.04]].map(([ct,St])=>new vt(ct,St)),p=new Ki(y,12).scale(1,1,.5);{let ct=p.attributes.position,St=Ze(23);for(let I=0;I<ct.count;I++){let G=1+(St()-.5)*.12;ct.setX(I,ct.getX(I)*G),ct.setZ(I,ct.getZ(I)*G)}p.computeVertexNormals()}let m=Tr([{geo:new $t(.44,.025,.025).translate(0,.02,0),colour:Ut("#6b4a2c")},{geo:new An(.05,.008,4,10,Math.PI*1.4).translate(0,.1,0),colour:Ut("#9a9aa2")}]),M=["#7a5a40","#5c4a3e","#8a6a4c","#4e4a52","#9a7552","#6a4a52","#7c6a58","#3e3632","#a08a72"].map(Ut),C=[],v=[],A=[];for(let ct of h){let[St,I]=c(ct.x,ct.z),R=.3+d()*.32,E=ct.t>=.6,T=ct.t<.66,X=ct.t>=R,V=E?1.62:1.5+d()*.35;T&&C.push({u:St,v:I+ct.side*.75,y:V+.08,side:ct.side,droop:.15+d()*.2,tw:d()}),X&&(v.push({u:St,v:I,y:V-.04,side:ct.side,c:M[Math.floor(d()*M.length)],sway:d()*6}),E&&A.push({u:St,v:I,y:V}))}let w=new ri(g,new Bt({vertexColors:!0,flatShading:!0}),C.length),N=new le,x=new xn;C.forEach((ct,St)=>{x.setFromEuler(new hn(0,ct.side>0?Math.PI:0,ct.droop)),N.compose(Et(ct.u,ct.y,ct.v),x,new U(1,1,.9+ct.tw*.3)),w.setMatrixAt(St,N)}),w.castShadow=!0,a.add(w);let S=new ri(p,new Bt({color:16777215,emissive:1380621}),v.length);v.forEach((ct,St)=>{x.setFromEuler(new hn(0,Math.PI/2,0)),N.compose(Et(ct.u,ct.y,ct.v),x,new U(1,1,1)),S.setMatrixAt(St,N),S.setColorAt(St,ct.c)}),S.castShadow=!0,S.receiveShadow=!0,a.add(S);let B=new ri(m,new Bt({vertexColors:!0}),Math.max(1,A.length));A.forEach((ct,St)=>{x.setFromEuler(new hn(0,Math.PI/2,0)),N.compose(Et(ct.u,ct.y,ct.v),x,new U(1,1,1)),B.setMatrixAt(St,N)}),B.count=A.length,a.add(B);let z=new Bt({map:an("#6b4a2c","rgba(30,16,8,0.3)",1)});for(let ct of[-1,1]){let St=h.filter(R=>R.side===ct&&R.t>=.56).map(R=>{let[E,T]=c(R.x,R.z);return Et(E,1.66,T)});St.push(Et(-.05,1.66,ct*.95));let I=new wn(St),G=new ut(new oi(I,40,.035,6,!1),z);a.add(G)}{let St=h.filter(K=>K.side===1&&K.t>=.48).map(K=>c(K.x,K.z)).map(([K,W])=>[K,W-.95]);St.push([0,0]);let I=[],G=[],R=[],E=St.length-1;St.forEach(([K,W],F)=>{let Z=F<E?St[F+1]:St[F],et=F>0?St[F-1]:St[F],tt=Z[0]-et[0],lt=Z[1]-et[1],mt=Math.hypot(tt,lt)||1;tt/=mt,lt/=mt;for(let Mt of[-1,1]){let Ot=Et(K-lt*1.05*Mt*0,.02,W+Mt*1.05);I.push(Ot.x,Ot.y,Ot.z),G.push(Mt<0?0:1,F/E)}if(F<E){let Mt=F*2;R.push(Mt,Mt+1,Mt+2,Mt+1,Mt+3,Mt+2)}});let T=new fe;T.setAttribute("position",new Jt(I,3)),T.setAttribute("uv",new Jt(G,2)),T.setIndex(R),T.computeVertexNormals();let X=Bn(128,512,(K,W,F)=>{K.fillStyle="#6a4a30",K.fillRect(0,0,W,F);let Z=Ze(9);for(let tt=0;tt<6;tt++)K.fillStyle=`rgba(${90+Z()*30},${60+Z()*20},${36+Z()*10},0.6)`,K.fillRect(tt*W/6,0,W/6-2,F),K.fillStyle="rgba(20,10,4,0.7)",K.fillRect((tt+1)*W/6-2,0,2,F);for(let tt=0;tt<1800;tt++){let lt=Math.pow(Z(),1.8)*F*.75,mt=1-lt/(F*.75);K.fillStyle=`rgba(232,238,246,${.5*mt+.1})`,K.beginPath(),K.arc(Z()*W,lt,1+Z()*4*mt,0,Math.PI*2),K.fill()}let et=K.createLinearGradient(0,0,0,F*.28);et.addColorStop(0,"rgba(0,0,0,1)"),et.addColorStop(1,"rgba(0,0,0,0)"),K.globalCompositeOperation="destination-out",K.fillStyle=et,K.fillRect(0,0,W,F*.28)}),V=new ut(T,new Bt({map:X,transparent:!0,depthWrite:!1}));V.receiveShadow=!0,V.renderOrder=1,a.add(V)}let L=new Bt({map:an("#4e321f"),side:Pe}),k=dn;for(let ct of[-1,1])a.add(new ut(new $t(.08,k.height,k.depth).translate(...Et(-k.depth/2,k.height/2,ct*(k.half+.04)).toArray()),L));a.add(new ut(new $t(2*k.half+.24,.1,k.depth+.1).translate(...Et(-k.depth/2,k.height+.05,0).toArray()),L)),a.add(new ut(new $t(2*k.half+.4,.14,k.depth+.25).translate(...Et(-k.depth/2,k.height+.17,0).toArray()),L)),a.add(new ut(new $t(2*k.half+.3,.1,k.depth+.1).translate(...Et(-k.depth/2,k.height+.28,0).toArray()),new Bt({color:Ut(n.snowColour)}))),a.add(new ut(new $t(2*k.half+.2,.1,.12).translate(...Et(.02,k.height-.05,0).toArray()),L)),a.add(new ut(new $t(2*k.half+.2,.12,.12).translate(...Et(.02,.06,0).toArray()),L));let P=new Bt({map:an("#5d3c24","rgba(30,16,8,0.3)",2)}),O=new Bt({color:11569738,emissive:1708038}),q=[];for(let ct of[-1,1]){let St=new _e;St.position.copy(Et(.04,0,ct*k.half));let I=new ut(new $t(k.half-.01,k.height-.2,.05),P);I.position.set(ct*(k.half/2),(k.height-.2)/2+.1,0),I.castShadow=!0,St.add(I);let G=new ut(new We(.045,10,8),O);G.position.set(ct*(k.half-.12),1.12,-.05),St.add(G);for(let R of[.75,1.65]){let E=new ut(new $t(k.half-.3,.6,.02),new Bt({map:an("#553620","rgba(30,16,8,0.25)",1)}));E.position.set(ct*(k.half/2),R,-.035),St.add(E)}a.add(St),q.push({hinge:St,s:ct})}let H=new ye({color:Ut("#ffd28a"),transparent:!0,opacity:0,fog:!1}),J=new ut(new ze(.035,k.height-.3).translate(0,(k.height-.3)/2+.15,0),H);J.position.copy(Et(-.01,0,0)),J.rotation.y=Math.PI,a.add(J);let $=new He(new Oe({map:fn([[0,.8],[.3,.25],[1,0]]),color:Ut("#ffcc80"),blending:Ge,depthWrite:!1,transparent:!0,opacity:0}));$.position.copy(Et(-.1,1.15,0)),$.scale.set(.9,2.4,1),a.add($);let it=new ke(Ut("#ffc98a"),1.2,7,1.4);it.position.copy(Et(-.35,1.6,0)),a.add(it);let st=new ye({color:16777215,transparent:!0,opacity:0,fog:!1,side:Pe}),yt=new ut(new ze(2*k.half+.6,k.height+.4),st);yt.position.copy(Et(.45,k.height/2,0)),a.add(yt),i.add(a),r.wardrobe={group:a,doors:q,lineMat:H,lineGlow:$,beyondMat:st,inside:it,setOpen(ct){for(let St of q)St.hinge.rotation.y=-St.s*ct*1.75},setGlow(ct){H.opacity=ct,$.material.opacity=ct*.55,it.intensity=1.2+ct*3.2},setBeyond(ct){st.opacity=ct}}}{let a=Ar("tree-door"),l=en.at,c=en.radius,h=new Bt({map:cs(),color:12563110}),d=[[c+.55,0],[c+.2,.5],[c,1.3],[c-.25,4],[c-.6,8],[c-1,13],[c-1.6,20],[.4,28],[0,28.2]].map(([L,k])=>new vt(L,k)),u=new ut(new Ki(d,22),h);u.position.copy(Et(l,0,0)),u.castShadow=!0,u.receiveShadow=!0,a.add(u);let f=Ze(13);for(let L=0;L<8;L++){let k=L/8*Math.PI*2+f()*.4;if(Math.abs(Math.atan2(Math.sin(k-Math.PI),Math.cos(k-Math.PI)))<.55)continue;let P=2.2+f()*1.6,O=[];for(let H=0;H<=5;H++){let J=H/5,$=c-.2+J*P;O.push(new U(Math.sin(k+J*(f()-.5)*.4)*$,.55*(1-J)-.1*J,Math.cos(k+J*(f()-.5)*.4)*$))}let q=new ut(new oi(new wn(O),16,.32,7,!1),h);q.position.copy(Et(l,0,0)),q.scale.set(1,1,1),a.add(q)}let g=Ut(n.treeColour).multiplyScalar(.9),y=Ut(n.snowColour),p=[];for(let L=0;L<7;L++){let k=L/6,P=6.2-k*4.6,O=4.4-k*1.6,q=8.5+L*2.7;p.push({geo:new Ye(P,O,12).translate(0,q+O/2,0),colour:g}),p.push({geo:new Ye(P*.8,O*.5,12).translate(0,q+O-O*.25+.08,0),colour:y})}let m=new ut(Tr(p),new Bt({vertexColors:!0,flatShading:!0}));m.position.copy(Et(l,0,0)),m.castShadow=!0,a.add(m);let M=en.mouth,C=2.35,v=new un;v.moveTo(-M,0),v.lineTo(-M,C-M),v.absarc(0,C-M,M,Math.PI,0,!0),v.lineTo(M,0),v.lineTo(-M,0);let A=Bn(128,128,(L,k,P)=>{let O=L.createRadialGradient(k/2,P*.62,2,k/2,P*.62,k*.62);O.addColorStop(0,"#a5642c"),O.addColorStop(.18,"#4a2a14"),O.addColorStop(.55,"#140b06"),O.addColorStop(1,"#050302"),L.fillStyle=O,L.fillRect(0,0,k,P)}),w=new Qi(v,16);{let L=w.attributes.position,k=w.attributes.uv;for(let P=0;P<L.count;P++)k.setXY(P,(L.getX(P)+M)/(2*M),L.getY(P)/C)}let N=new ut(w,new ye({map:A}));N.rotation.y=Math.PI,N.position.copy(Et(l-c-.62,.02,0)),a.add(N);let x=new un,S=M+.22,B=C+.22;x.moveTo(-S,0),x.lineTo(-S,B-S),x.absarc(0,B-S,S,Math.PI,0,!0),x.lineTo(S,0),x.lineTo(M,0),x.lineTo(M,C-M),x.absarc(0,C-M,M,0,Math.PI,!1),x.lineTo(-M,0),x.lineTo(-S,0);let z=new ut(new kn(x,{depth:.5,bevelEnabled:!1,curveSegments:16}),new Bt({map:an("#8a6440","rgba(60,36,18,0.3)",1)}));z.rotation.y=Math.PI,z.position.copy(Et(l-c-.66,0,0)),a.add(z),i.add(a),r.trunk={group:a}}{let a=Ar("arch"),l=Uo,c=new Bt({map:oc(),vertexColors:!0,flatShading:!0}),h=[],d=Ze(19),u=()=>Ut("#c4beb2").multiplyScalar(.85+d()*.25),f=Ut("#5f7a46");for(let P of[-1,1]){let O=0;for(let q=0;q<4;q++){let H=.55+d()*.12,J=2*l.pillar+.1+d()*.12,$=q===0?u().lerp(f,.45):d()<.3?u().lerp(f,.3):u();h.push({geo:new $t(J,H-.03,.95+d()*.1).translate(...Et(d()*.04,O+H/2,P*(l.opening+l.pillar)+(d()-.5)*.06).toArray()),colour:$}),O+=H}h.push({geo:new $t(2*l.pillar+.35,.18,1.15).translate(...Et(0,O+.09,P*(l.opening+l.pillar)).toArray()),colour:u()})}let g=l.height-l.opening,y=l.opening,p=l.opening+2*l.pillar,m=9;for(let P=0;P<m;P++){let O=Math.PI-P/m*Math.PI,q=Math.PI-(P+1)/m*Math.PI,H=P===Math.floor(m/2),J=new un,$=H?p+.18:p,it=.012;J.moveTo(Math.cos(O-it)*y,Math.sin(O-it)*y),J.lineTo(Math.cos(O-it)*$,Math.sin(O-it)*$),J.lineTo(Math.cos(q+it)*$,Math.sin(q+it)*$),J.lineTo(Math.cos(q+it)*y,Math.sin(q+it)*y);let st=new kn(J,{depth:H?1.05:.95,bevelEnabled:!1}).translate(0,0,H?-.525:-.475);st.translate(0,g,0),h.push({geo:st,colour:d()<.25?u().lerp(f,.25):u()})}let M=[];for(let P=0;P<12;P++){let O=Math.PI*.18+P/12*Math.PI*.64,q=Math.PI*.18+(P+1)/12*Math.PI*.64,H=new un;H.moveTo(Math.cos(O)*p,Math.sin(O)*p),H.lineTo(Math.cos(O)*(p+.12),Math.sin(O)*(p+.12)),H.lineTo(Math.cos(q)*(p+.12),Math.sin(q)*(p+.12)),H.lineTo(Math.cos(q)*p,Math.sin(q)*p),M.push({geo:new kn(H,{depth:.9,bevelEnabled:!1}).translate(0,g,-.45),colour:Ut(n.snowColour)})}for(let P of[-1,1])M.push({geo:new $t(2*l.pillar+.3,.1,1.05).translate(...Et(0,2.42,P*(l.opening+l.pillar)).toArray()),colour:Ut(n.snowColour)});let C=new ut(Tr(h.concat(M)),c);C.castShadow=!0,C.receiveShadow=!0,a.add(C);let v=new un;v.moveTo(-y,0),v.lineTo(-y,g),v.absarc(0,g,y,Math.PI,0,!0),v.lineTo(y,0),v.lineTo(-y,0);let A=new Qi(v,24);{let P=A.attributes.position,O=A.attributes.uv;for(let q=0;q<P.count;q++)O.setXY(q,(P.getX(q)+y)/(2*y),P.getY(q)/l.height)}let w=new _n(16,16,{type:Fn}),N=new Ke({uniforms:{view:{value:w.texture},res:{value:new vt(1,1)},time:o,open:{value:0},ripple:{value:1},boost:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
        }`,transparent:!0,depthWrite:!1,toneMapped:!0}),x=new ut(A,N);x.rotation.y=Math.PI,x.position.copy(Et(-.02,0,0)),a.add(x),i.add(a);let S=new $e,B=new le,z=new le,L=new le;{let P=te.arch,O=new U(P.d[0],0,P.d[1]),q=new U(P.r[0],0,P.r[1]);B.makeBasis(q.clone().negate(),new U(0,1,0),O).setPosition(P.o[0],0,P.o[1]);let H=new U(0,0,-1),J=new U(1,0,0);z.makeBasis(J.clone().negate(),new U(0,1,0),H).setPosition(0,0,5.2),L.copy(z).multiply(B.clone().invert())}let k=new Ln(new U(0,0,-1),5.2);r.arch={group:a,faceMat:N,faceMesh:x,target:w,vcam:S,draw(P,O,q){let H=P.getDrawingBufferSize(new vt),J=Math.max(16,Math.round(H.x*.5)),$=Math.max(16,Math.round(H.y*.5));(w.width!==J||w.height!==$)&&w.setSize(J,$),N.uniforms.res.value.set(H.x,H.y),O.updateMatrixWorld(),S.copy(O,!1),S.matrixWorld.copy(L).multiply(O.matrixWorld),S.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(O.projectionMatrix);let it=k.clone().applyMatrix4(S.matrixWorldInverse),st=new Se(it.normal.x,it.normal.y,it.normal.z,it.constant),yt=S.projectionMatrix.elements,ct=new Se((Math.sign(st.x)+yt[8])/yt[0],(Math.sign(st.y)+yt[9])/yt[5],-1,(1+yt[10])/yt[14]);st.multiplyScalar(2/st.dot(ct)),yt[2]=st.x,yt[6]=st.y,yt[10]=st.z+1,yt[14]=st.w,S.projectionMatrixInverse.copy(S.projectionMatrix).invert();let{setLight:St,own:I,snowMat:G,figure:R}=q,E=G.uniforms.centre.value.clone();St(s),G.uniforms.centre.value.copy(S.position);let T=P.shadowMap.autoUpdate;P.shadowMap.autoUpdate=!1,x.visible=!1;let X=R.visible;R.visible=!1,P.setRenderTarget(w),P.clear(),P.render(i,S),P.setRenderTarget(null),x.visible=!0,R.visible=X,P.shadowMap.autoUpdate=T,G.uniforms.centre.value.copy(E),St(I)}}}{let a=Ar("slide"),l=pe,c=4.2,h=3.2,d=l.front,u=d+l.depth,f=l.width/2,g=cp(),y=new Bt({map:g}),p=(z,L,k,P,O,q)=>{let H=Math.hypot(k-z,P-L),J=new ut(new $t(H,O,.5),y),$=Et((z+k)/2,O/2,(L+P)/2);return J.position.copy($),J.rotation.y=Math.atan2(-(k-z),-(P-L)),J.castShadow=!0,J.receiveShadow=!0,a.add(J),J};p(d,-f,d,f,c),p(u,-f,u,f,c),p(d,-f,u,-f,c),p(d,f,u,f,c);for(let z of[d,u]){let L=new un;L.moveTo(-f-.25,0),L.lineTo(f+.25,0),L.lineTo(0,h),L.lineTo(-f-.25,0);let k=new ut(new kn(L,{depth:.5,bevelEnabled:!1}),y);k.position.copy(Et(z-.25,c,0)),a.add(k)}let m=hp();m.wrapS=ni,m.repeat.set(3,1);let M=new Bt({map:m,side:Pe});for(let z of[-1,1]){let L=d-.5,k=u+.5,P=c+h,O=z*(f+.6),q=c-.2,H=new fe;H.setAttribute("position",new Jt([0,P,L,O,q,L,O,q,k,0,P,k],3)),H.setAttribute("uv",new Jt([0,1,0,0,1,0,1,1],2)),H.setIndex([0,1,2,0,2,3]),H.computeVertexNormals();let J=new ut(H,M);J.castShadow=!0,J.receiveShadow=!0,a.add(J);let $=new ut(new $t(.16,.14,k-L),new Bt({color:Ut(n.snowColour)}));$.position.set(O,q+.02,(L+k)/2),a.add($)}let C=new Bt({map:cs(),color:12036506}),v=[[d,-f],[d,f],[u,-f],[u,f],[d,-1.3],[d,1.3],...[6.1,10.1].flatMap(z=>[[z,-f],[z,f]])];for(let[z,L]of v){let k=new ut(new Ae(.34,.42,c+.5,9),C);k.position.copy(Et(z,(c+.5)/2-.1,L)),k.castShadow=!0,a.add(k)}let A=new ye({map:nu()}),w=new Bt({color:3023127}),N=fn([[0,.5],[.4,.18],[1,0]]),x=(z,L,k,P,O,q)=>{let H=new _e;H.position.copy(Et(z,O,L)),H.rotation.y=q;let J=new ut(new ze(k,P).translate(0,P/2,0),A);H.add(J);for(let[it,st,yt,ct]of[[k+.2,.14,0,0],[k+.2,.14,0,P],[.12,P,-k/2,P/2],[.12,P,k/2,P/2],[.07,P,0,P/2],[k,.07,0,P*.55]]){let St=new ut(new $t(it,st,.1),w);St.position.set(yt,ct,.03),H.add(St)}let $=new He(new Oe({map:N,color:Ut("#ffb870"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.6}));$.position.set(0,P/2,.6),$.scale.set(k*2.2,P*1.8,1),H.add($),a.add(H)};for(let z of Wt.tall)z.wall==="front"?x(d-.27,z.at,z.w,z.h,z.sill,Math.PI):x(z.at,f+.27,z.w,z.h,z.sill,-Math.PI/2);let S=new ye({map:nu()});for(let z of Wt.round){let L=new _e;z.wall==="front"?(L.position.copy(Et(d-.27,z.y,z.at)),L.rotation.y=Math.PI):(L.position.copy(Et(z.at,z.y,-f-.27)),L.rotation.y=Math.PI/2),L.add(new ut(new Dn(z.r,24),S));let k=new ut(new An(z.r+.04,.07,6,24),w);k.position.z=.03,L.add(k);for(let O of[0,Math.PI/2]){let q=new ut(new $t(2*z.r,.05,.06),w);q.rotation.z=O,q.position.z=.03,L.add(q)}let P=new He(new Oe({map:N,color:Ut("#ffb870"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.45}));P.position.set(0,0,.5),P.scale.setScalar(z.r*4),L.add(P),a.add(L)}{let k=new un;k.moveTo(-.75,0),k.lineTo(-.75,2.4-.75),k.absarc(0,2.4-.75,.75,Math.PI,0,!0),k.lineTo(.75,0),k.lineTo(-.75,0);let P=new ut(new kn(k,{depth:.12,bevelEnabled:!1,curveSegments:14}),new Bt({map:an("#5a3a22","rgba(30,16,8,0.35)",4)}));P.geometry.computeBoundingBox();{let q=P.geometry.attributes.position,H=P.geometry.attributes.uv;for(let J=0;J<q.count;J++)H.setXY(J,(q.getX(J)+.75)/(2*.75),q.getY(J)/2.4)}P.rotation.y=Math.PI,P.position.copy(Et(d-.2,0,0)),a.add(P);let O=new Bt({color:1776930});for(let q of[-1.15,1.15]){let H=new He(new Oe({map:fn(),color:Ut("#ffc276"),blending:Ge,depthWrite:!1,transparent:!0}));H.position.copy(Et(d-.45,2.3,q)),H.scale.setScalar(.9),a.add(H);let J=new ut(new $t(.16,.24,.16),new ye({color:Ut("#ffd59a")}));J.position.copy(Et(d-.4,2.3,q)),a.add(J);let $=new ut(new Ye(.14,.12,4).rotateY(Math.PI/4),O);$.position.copy(Et(d-.4,2.48,q)),a.add($);let it=new ut(new $t(.03,.03,.3),O);it.position.copy(Et(d-.2,2.55,q)),a.add(it);let st=new ke(Ut("#ffc276"),2.4,4.2,1.4);st.position.copy(Et(d-.75,2.2,q*.85)),a.add(st)}}let B=new ut(new $t(1.1,3.2,1.1),y);B.position.copy(Et(u-.55,c+h-.2,0)),a.add(B),i.add(a),r.library={group:a}}return{parts:r,shimmerTime:o,setLook(a,l){let c=l==="open";a==="wardrobe"&&r.wardrobe.setGlow(c?1:0),a==="arch"&&(r.arch.faceMat.uniforms.open.value=c?1:0)}}}var he=(i,t,e,n,s,r,o)=>{let a=new ut(new $t(Math.abs(n-e),Math.abs(r-s),Math.abs(t-i)),o);return a.position.copy(Et((i+t)/2,(s+r)/2,(e+n)/2)),a},wi=i=>wr.find(t=>t.id===i);function pp(){let i=new ii,t=Ar("slide");i.add(t);let{u0:e,u1:n,v:s,ceiling:r}=Wt,o=Wt.walk.top,a=Wt.walk,l=Ze(91),c=up();c.wrapS=c.wrapT=ni;let h=new Bt({map:c,side:Pe}),d=new Bt({map:an("#3e2716","rgba(20,10,4,0.4)",1)}),u=new Bt({map:an("#6a4428","rgba(30,16,8,0.3)",1)}),f=an("#5b3b22","rgba(25,12,5,0.35)",6);f.wrapS=f.wrapT=ni,f.repeat.set(3,5);let g=new Bt({map:f}),y=new Bt({map:cs(),color:12036506}),p=new Bt({map:oc(7),color:10130570}),m=new Bt({color:2369068}),M=new Bt({color:11569738,emissive:1708038});{let I=new ut(new ze(2*s,n-e).rotateX(-Math.PI/2),g);I.position.copy(Et((e+n)/2,.01,0)),t.add(I);let G=new ut(new ze(2*s,n-a.u1).rotateX(Math.PI/2),d);G.position.copy(Et((a.u1+n)/2,r,0)),t.add(G);for(let V=a.u1+1;V<n;V+=2.2)t.add(he(V-.12,V+.12,-s,s,r-.26,r,d));let R=[],E=[],T=[],X=[];for(let V=-s;V<=s+1e-9;V+=.25)X.push(V);X.forEach((V,K)=>{let W=sc(e+.01,V);for(let F of[e,a.u1]){let Z=Et(F,W,V);R.push(Z.x,Z.y,Z.z)}for(let F of[r,W]){let Z=Et(a.u1,F,V);T.push(Z.x,Z.y,Z.z)}if(K){let F=(K-1)*2;E.push(F,F+1,F+2,F+1,F+3,F+2)}});for(let[V,K]of[[R,d],[T,h]]){let W=new fe;W.setAttribute("position",new Jt(V,3)),W.setIndex(E);let F=[];for(let Z=0;Z<V.length/3;Z++)F.push(Z%2*.8,Math.floor(Z/2)*.125);W.setAttribute("uv",new Jt(F,2)),W.computeVertexNormals(),t.add(new ut(W,new Bt({map:K.map,side:Pe})))}for(let V=-1.5;V<s;V+=2){let K=sc(e+.01,V);t.add(he(e,a.u1,V-.12,V+.12,K-.24,K,d))}}function C(I,G){let R=I==="front"||I==="back"?[-s,s]:[e,n],E=new Set([R[0],R[1]]),T=new Set([0,o]);for(let K of G)E.add(K.a0),E.add(K.a1),T.add(K.y0),T.add(K.y1);let X=[...E].sort((K,W)=>K-W),V=[...T].sort((K,W)=>K-W);for(let K=0;K<X.length-1;K++)for(let W=0;W<V.length-1;W++){let F=(X[K]+X[K+1])/2,Z=(V[W]+V[W+1])/2;if(G.some(Mt=>F>Mt.a0&&F<Mt.a1&&Z>Mt.y0&&Z<Mt.y1))continue;let et=X[K+1]-X[K],tt=V[W+1]-V[W],lt=new ze(et,tt);{let Mt=lt.attributes.uv;for(let wt=0;wt<Mt.count;wt++)Mt.setXY(wt,(X[K]+Mt.getX(wt)*et)/2,(V[W]+Mt.getY(wt)*tt)/2)}let mt=new ut(lt,h);I==="front"?mt.position.copy(Et(e,Z,F)):I==="back"?(mt.position.copy(Et(n,Z,F)),mt.rotation.y=Math.PI):I==="left"?(mt.position.copy(Et(F,Z,-s)),mt.rotation.y=-Math.PI/2):(mt.position.copy(Et(F,Z,s)),mt.rotation.y=Math.PI/2),t.add(mt)}}let v={front:[],back:[],left:[],right:[]};for(let I of Wt.tall)v[I.wall].push({a0:I.at-I.w/2,a1:I.at+I.w/2,y0:I.sill,y1:I.sill+I.h});for(let I of Wt.round)v[I.wall].push({a0:I.at-I.r-.02,a1:I.at+I.r+.02,y0:I.y-I.r-.02,y1:I.y+I.r+.02});for(let I of Object.keys(v))C(I,v[I]);let A=new ye({map:iu(!1),transparent:!0,depthWrite:!1,side:Pe}),w=new ye({map:iu(!0),transparent:!0,depthWrite:!1,side:Pe}),N=new Bt({color:3811352}),x=(I,G,R,E)=>{I==="front"?E.position.copy(Et(e,R,G)):I==="left"?(E.position.copy(Et(G,R,-s)),E.rotation.y=-Math.PI/2):(E.position.copy(Et(G,R,s)),E.rotation.y=Math.PI/2),t.add(E)};for(let I of Wt.tall){let G=new _e,R=new ut(new ze(I.w,I.h),A);R.renderOrder=2,G.add(R);for(let[T,X,V,K]of[[I.w+.16,.12,0,-I.h/2],[I.w+.16,.12,0,I.h/2],[.12,I.h,-I.w/2,0],[.12,I.h,I.w/2,0],[.06,I.h,0,0],[I.w,.06,0,I.h*.05]]){let W=new ut(new $t(T,X,.12),N);W.position.set(V,K,.02),G.add(W)}let E=new ut(new $t(I.w+.3,.06,.3),u);E.position.set(0,-I.h/2-.03,.15),G.add(E),x(I.wall,I.at,I.sill+I.h/2,G)}for(let I of Wt.round){let G=new _e,R=new un,E=I.r+.02;R.moveTo(-E,-E),R.lineTo(E,-E),R.lineTo(E,E),R.lineTo(-E,E),R.lineTo(-E,-E);let T=new xs;T.absarc(0,0,I.r,0,Math.PI*2,!0),R.holes.push(T),G.add(new ut(new Qi(R,24),h));let X=new ut(new Dn(I.r,24),w);X.renderOrder=2,G.add(X);let V=new ut(new An(I.r,.06,6,28),N);V.position.z=.02,G.add(V);for(let K of[0,Math.PI/2]){let W=new ut(new $t(2*I.r,.04,.05),N);W.rotation.z=K,W.position.z=.02,G.add(W)}x(I.wall,I.at,I.y,G)}{let I=Wt.door,G=2.4,R=new un;R.moveTo(-I,0),R.lineTo(-I,G-I),R.absarc(0,G-I,I,Math.PI,0,!0),R.lineTo(I,0),R.lineTo(-I,0);let E=new kn(R,{depth:.08,bevelEnabled:!1,curveSegments:14});{let V=E.attributes.position,K=E.attributes.uv;for(let W=0;W<V.count;W++)K.setXY(W,(V.getX(W)+I)/(2*I),V.getY(W)/G)}let T=new ut(E,new Bt({map:an("#5a3a22","rgba(30,16,8,0.35)",4)}));T.position.copy(Et(e+.01,0,0)),t.add(T);let X=new ut(new $t(.2,.05,.05),m);X.position.copy(Et(e+.12,1.1,.45)),t.add(X)}for(let[I,G]of Wt.columns){let R=I===0?o:r,E=new Ae(.42,.48,R,10,1,!0,0,Math.PI),T=new ut(E,y);I===0?(T.position.copy(Et(e,R/2,G)),T.rotation.y=-Math.PI/2):(T.position.copy(Et(I,R/2,G*s)),T.rotation.y=G>0?0:Math.PI),t.add(T)}for(let[I,G]of[[e,-s],[e,s],[n,-s],[n,s]]){let R=I===e?o:r,E=new ut(new Ae(.42,.48,R,10),y);E.position.copy(Et(I,R/2,G)),t.add(E)}let S=[],B=["#6b1f1f","#2f4a2c","#3a2c1e","#1f3550","#7a5a1e","#4a1f3a","#5a4632","#2c3a3f","#8a3a24","#3d4a1f","#a08050","#232a3a"].map(Ut);function z({axis:I,a0:G,a1:R,at:E,back:T,y0:X=0,height:V,levels:K,depth:W=.42,twoSided:F=!1}){let Z=new _e,et=(lt,mt,Mt,wt)=>I==="u"?he(lt,mt,E-W/2,E+W/2,Mt,wt,d):he(E-W/2,E+W/2,lt,mt,Mt,wt,d);Z.add(et(G,G+.06,X,X+V)),Z.add(et(R-.06,R,X,X+V));let tt=V/K;for(let lt=0;lt<=K;lt++)Z.add(et(G,R,X+lt*tt,X+lt*tt+.04));if(!F){let lt=I==="u"?he(G,R,E+T*(W/2-.02),E+T*(W/2),X,X+V,d):he(E+T*(W/2-.02),E+T*(W/2),G,R,X,X+V,d);Z.add(lt)}t.add(Z);for(let lt=0;lt<K;lt++){let mt=X+lt*tt+.04,Mt=tt-.08;for(let wt of F?[-1,1]:[-T]){let Ot=G+.08;for(;Ot<R-.12;){let Y=.04+l()*.06,se=Math.min(Mt,Mt*(.62+l()*.34)),ie=W*(.5+l()*.25)/(F?2:1);if(l()<.06){Ot+=.1+l()*.15;continue}let D=l()<.05?l()<.5?.25:-.25:0,_=F?wt*(ie/2+.02):wt*(W/2-ie/2-.04);S.push({axis:I,a:Ot+Y/2,at:E+_,y:mt+se/2,w:Y,h:se,d:ie,lean:D,c:B[Math.floor(l()*B.length)].clone().multiplyScalar(.8+l()*.4)}),Ot+=Y+.004}}}}let{mezz:L,stairs:k}=Wt;for(let I of[2.3,4.1,5.9,7.7])z({axis:"v",a0:L.v0+.45,a1:L.v1-.2,at:I,back:1,height:L.h-.12,levels:5,depth:.5,twoSided:!0});z({axis:"u",a0:e+.5,a1:L.u1-.1,at:L.v0+.21,back:-1,height:L.h-.12,levels:5});{let I=wi("mezz-shelves");z({axis:"u",a0:I.u0,a1:I.u1,at:L.v0+.22,back:-1,y0:L.h,height:.78,levels:2})}{let I=wi("shelf-back-right");z({axis:"v",a0:I.v0,a1:s-.1,at:n-.24,back:1,height:r-.3,levels:8})}{let I=wi("shelf-back-left");z({axis:"v",a0:I.v0,a1:I.v1,at:n-.24,back:1,height:2.4,levels:5})}for(let I of Wt.tall.filter(G=>G.wall==="right"))z({axis:"u",a0:I.at-I.w/2+.05,a1:I.at+I.w/2-.05,at:s-.17,back:1,height:I.sill-.08,levels:2,depth:.3});{let I=new $t(1,1,1),G=new ri(I,new Bt({color:16777215}),S.length),R=new le,E=new xn;S.forEach((T,X)=>{let V=T.axis==="u"?Et(T.a,T.y,T.at):Et(T.at,T.y,T.a),K=T.axis==="u"?new U(T.d,T.h,T.w):new U(T.w,T.h,T.d);E.setFromEuler(T.axis==="u"?new hn(T.lean,0,0):new hn(0,0,T.lean)),R.compose(V,E,K),G.setMatrixAt(X,R),G.setColorAt(X,T.c)}),t.add(G)}t.add(he(L.u0,L.u1,L.v0,L.v1,L.h-.16,L.h,u)),t.add(he(L.u0,L.u1,L.v1-.1,L.v1+.02,L.h-.36,L.h,d));for(let I of[3.2,6.8,L.u1-.1])t.add(he(I-.09,I+.09,L.v1-.18,L.v1,0,L.h-.16,d));let P=(I,G,R,E)=>{let T=Et(I[0],R,I[1]),X=Et(G[0],E,G[1]),V=T.distanceTo(X),K=T.clone().add(X).multiplyScalar(.5),W=new ut(new $t(.07,.06,V),d);W.position.copy(K).add(new U(0,.9,0)),W.lookAt(X.clone().add(new U(0,.9,0))),t.add(W);let F=Math.max(2,Math.round(V/.32));for(let Z=0;Z<=F;Z++){let et=T.clone().lerp(X,Z/F),tt=new ut(new $t(.035,.9,.035),d);tt.position.copy(et).add(new U(0,.45,0)),t.add(tt)}};P([a.u1,L.v1-.05],[L.u1,L.v1-.05],L.h,L.h);{let G=(k.u1-k.u0)/10;for(let R=0;R<10;R++){let E=L.h*(R+1)/10;t.add(he(k.u1-(R+1)*G,k.u1-R*G,k.v0,k.v1,0,E,R%2?u:d))}P([k.u1,k.v1+.02],[k.u0,k.v1+.02],.05,L.h)}let O={};{let I=wi("fireplace");t.add(he(I.u0+.25,n,I.v0,I.v0+.4,0,1.6,p)),t.add(he(I.u0+.25,n,I.v1-.4,I.v1,0,1.6,p)),t.add(he(I.u0+.25,n,I.v0,I.v1,1.25,1.6,p)),t.add(he(I.u0+.05,n,I.v0-.15,I.v1+.15,1.6,1.72,d)),t.add(he(n-.08,n,I.v0+.4,I.v1-.4,0,1.25,new Bt({color:1708556}))),t.add(he(I.u0-.1,n,I.v0-.1,I.v1+.1,0,.06,p)),t.add(he(n-.05,n,-.55,.55,1.72,r,p));for(let[E,T]of[[-.15,.25],[.15,-.3],[0,0]]){let X=new ut(new Ae(.08,.09,.75,7).rotateZ(Math.PI/2),y);X.position.copy(Et(I.u0+.45,.14+(E===0?.13:0),E)),X.rotation.y=T,t.add(X)}let G=new Oe({map:fn([[0,1],[.25,.6],[1,0]]),color:Ut("#ff9a3c"),blending:Ge,depthWrite:!1,transparent:!0});O.flames=[-.18,.02,.2].map((E,T)=>{let X=new He(G.clone());return X.position.copy(Et(I.u0+.45,.42,E)),X.scale.set(.35,.6,1),X.userData.k=T,t.add(X),X});let R=new He(new Oe({map:fn(),color:Ut("#ff8a2c"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.55}));R.position.copy(Et(I.u0+.3,.5,0)),R.scale.set(2.2,1.4,1),t.add(R),O.glow=R,O.light=new ke(Ut("#ff9a4a"),12,14,1.3),O.light.position.copy(Et(I.u0-.2,.7,0)),t.add(O.light)}let q=[];function H(I,G,R){let E=new _e;E.add(he(I-.08,I+.08,G-.08,G+.08,R,R+.03,M)),E.add(he(I-.015,I+.015,G-.015,G+.015,R,R+.36,M));let T=new ut(new Ae(.1,.17,.14,14,1,!0),new ye({color:Ut("#ffcf8a"),side:Pe}));T.position.copy(Et(I,R+.36,G)),E.add(T);let X=new He(new Oe({map:fn(),color:Ut("#ffc27a"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.8}));X.position.copy(Et(I,R+.33,G)),X.scale.setScalar(.8),E.add(X);let V=new ke(Ut("#ffbf78"),7,9,1.4);V.position.copy(Et(I,R+.3,G)),E.add(V),t.add(E),q.push(V)}for(let I of["table1","table2"]){let G=wi(I),R=.76;t.add(he(G.u0,G.u1,G.v0,G.v1,R-.06,R,u));for(let[T,X]of[[G.u0+.12,G.v0+.12],[G.u1-.12,G.v0+.12],[G.u0+.12,G.v1-.12],[G.u1-.12,G.v1-.12]])t.add(he(T-.05,T+.05,X-.05,X+.05,0,R-.06,d));H(G.u1-.35,G.v1-.3,R);let E=wi(I==="table1"?"chairs1":"chairs2");for(let T of[E.u0+.3,E.u1-.3]){t.add(he(T-.24,T+.24,E.v0,E.v0+.45,.44,.49,u)),t.add(he(T-.24,T+.24,E.v0+.42,E.v0+.47,.49,1.05,u));for(let[X,V]of[[-.2,.04],[.2,.04],[-.2,.42],[.2,.42]])t.add(he(T+X-.03,T+X+.03,E.v0+V-.03,E.v0+V+.03,0,.44,d))}}let J={};{let I=wi("table1"),G=.76,R=new Bt({map:dp(),side:Pe});for(let[W,F,Z]of[[I.u0+.55,I.v0+.45,.3],[I.u0+1.15,I.v0+.55,-.5]]){let et=new _e;for(let tt of[-1,1]){let lt=new ut(new $t(.2,.012,.28),new Bt({color:(tt<0,7020319)}));lt.position.set(tt*.1,.006,0),lt.rotation.z=tt*-.06,et.add(lt);let mt=new ut(new ze(.19,.26).rotateX(-Math.PI/2),R);mt.position.set(tt*.1,.03,0),mt.rotation.z=tt*-.08,et.add(mt)}et.position.copy(Et(W,G,F)),et.rotation.y=Z,t.add(et)}let E=new ut(new Ae(.045,.038,.09,12),new Bt({color:15262422}));E.position.copy(Et(I.u0+1.55,G+.045,I.v0+.3)),t.add(E);let T=new ut(new An(.025,.007,6,10),E.material);T.position.copy(Et(I.u0+1.55,G+.05,I.v0+.36)),T.rotation.y=Math.PI/2,t.add(T);let X=Et(I.u0+.9,G,I.v0+.2),V=new ut(new Ae(.06,.07,.02,12),M);V.position.copy(X).add(new U(0,.01,0)),t.add(V);let K=new ut(new Ae(.022,.024,.16,10),new Bt({color:15919832,emissive:2760720}));K.position.copy(X).add(new U(0,.1,0)),t.add(K),J.flame=new He(new Oe({map:fn([[0,1],[.3,.55],[1,0]]),color:Ut("#ffcf7a"),blending:Ge,depthWrite:!1,transparent:!0})),J.flame.position.copy(X).add(new U(0,.22,0)),J.flame.scale.set(.07,.13,1),t.add(J.flame),J.light=new ke(Ut("#ffc070"),1.2,2.5,1.6),J.light.position.copy(X).add(new U(0,.26,0)),t.add(J.light)}{let I=wi("nook-chair"),G=L.h,R=new Bt({color:8010282});t.add(he(I.u0,I.u1,I.v0,I.v1,G,G+.42,R)),t.add(he(I.u0-.05,I.u0+.12,I.v0,I.v1,G,G+1,R));for(let T of[I.v0,I.v1-.14])t.add(he(I.u0,I.u1,T,T+.14,G,G+.62,R));let E=wi("nook-table");t.add(he(E.u0,E.u1,E.v0,E.v1,G+.55,G+.6,u)),t.add(he((E.u0+E.u1)/2-.04,(E.u0+E.u1)/2+.04,(E.v0+E.v1)/2-.04,(E.v0+E.v1)/2+.04,G,G+.55,d)),H((E.u0+E.u1)/2,(E.v0+E.v1)/2,G+.6),t.add(he(I.u0+.3,I.u0+.52,I.v1-.13,I.v1-.01,G+.62,G+.66,new Bt({color:2045264})))}{let I=wi("ladder"),G=(I.v0+I.v1)/2,R=new ut(new Ae(.02,.02,Wt.v-1.5,8).rotateX(Math.PI/2),M);R.position.copy(Et(n-.5,r-.45,(1.5+Wt.v)/2)),R.rotation.y=Math.PI/2,t.add(R);for(let E of[-1,1]){let T=Et(I.u0+.05,0,G+E*.22),X=Et(n-.5,r-.45,G+E*.22),V=T.distanceTo(X),K=new ut(new $t(.05,.05,V),u);K.position.copy(T.clone().add(X).multiplyScalar(.5)),K.lookAt(X),t.add(K);let W=new ut(new Ae(.04,.04,.03,10).rotateX(Math.PI/2),M);W.position.copy(T).add(new U(0,.04,0)),t.add(W)}for(let E=1;E<11;E++){let T=E/11,X=Et(I.u0+.05,0,G),V=Et(n-.5,r-.45,G),K=X.clone().lerp(V,T),W=new ut(new Ae(.018,.018,.44,6).rotateZ(Math.PI/2),u);W.position.copy(K),t.add(W)}}let $={};{let I=Wt.bench,G=a.h1;t.add(he(I.u0,I.u1,I.v0,I.v1,G+I.h-.06,G+I.h,u));for(let mt of[I.u0+.1,I.u1-.1])t.add(he(mt-.04,mt+.04,I.v0+.05,I.v1-.03,G,G+I.h-.06,d));let R=Wt.littleDoor,E=R.half,T=R.y1-R.y0,X=new ut(new ze(2*E,T),new ye({color:1707270}));X.position.copy(Et(R.u,R.y0+T/2,s-.005)),X.rotation.y=Math.PI/2,t.add(X),t.add(he(R.u-E-.03,R.u+E+.03,s-.04,s,R.y1,R.y1+.03,d));for(let mt of[-1,1])t.add(he(R.u+mt*(E+.015)-.015,R.u+mt*(E+.015)+.015,s-.04,s,R.y0,R.y1,d));let V=new un;V.moveTo(-E,0),V.lineTo(-E,T-E),V.absarc(0,T-E,E,Math.PI,0,!0),V.lineTo(E,0),V.lineTo(-E,0);let K=new kn(V,{depth:.02,bevelEnabled:!1,curveSegments:10}).translate(E,0,0);{let mt=K.attributes.position,Mt=K.attributes.uv;for(let wt=0;wt<mt.count;wt++)Mt.setXY(wt,mt.getX(wt)/(2*E),mt.getY(wt)/T)}let W=new _e;W.position.copy(Et(R.u+E,R.y0,s-.03)),W.rotation.y=Math.PI/2;let F=new ut(K,new Bt({map:an("#7a5030","rgba(30,16,8,0.4)",3)}));W.add(F);let Z=new ut(new We(.012,8,6),M);Z.position.set(2*E-.04,T*.45,.025),W.add(Z);let et=new _e,tt=new ut(new Dn(.009,10),new ye({color:328450}));tt.position.set(2*E-.04,T*.3,.021);let lt=new ut(new ze(.007,.02),tt.material);lt.position.set(2*E-.04,T*.3-.012,.021),et.add(tt,lt),W.add(et),t.add(W),$.hinge=W,$.keyhole=et,$.glow=new He(new Oe({map:fn(),color:Ut("#ffb060"),blending:Ge,depthWrite:!1,transparent:!0,opacity:0})),$.glow.position.copy(Et(R.u,R.y0+T*.45,s-.08)),$.glow.scale.setScalar(.35),t.add($.glow)}{let I=(R,E)=>{let T=Rs(R),X=Rs(E),V=Math.hypot(E-R,X-T),K=new ut(new $t(V,.16,a.u1-a.u0),u);K.position.copy(Et((a.u0+a.u1)/2,(T+X)/2-.08,(R+E)/2)),K.rotation.z=-Math.atan2(X-T,E-R),t.add(K);let W=new ut(new $t(V,.3,.1),d);W.position.copy(Et(a.u1-.05,(T+X)/2-.15,(R+E)/2)),W.rotation.z=K.rotation.z,t.add(W)};I(a.v0,a.level),I(a.level,a.v1);let G=wr.find(R=>R.id==="walk-posts");t.add(he(G.u0,G.u1,G.v0,G.v1,0,a.h1-.16,d));for(let R of[-.6,3]){let E=Rs(R)+1.55;t.add(he(e,e+.22,R-.02,R+.02,E+.1,E+.14,m));let T=new ut(new $t(.11,.17,.11),new ye({color:Ut("#ffd59a")}));T.position.copy(Et(e+.22,E,R)),t.add(T);let X=new ut(new Ye(.1,.08,4).rotateY(Math.PI/4),m);X.position.copy(Et(e+.22,E+.12,R)),t.add(X);let V=new He(new Oe({map:fn(),color:Ut("#ffc27a"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.7}));V.position.copy(Et(e+.24,E,R)),V.scale.setScalar(.7),t.add(V);let K=new ke(Ut("#ffbf78"),4.5,7,1.4);K.position.copy(Et(e+.45,E,R)),t.add(K)}P([a.u1-.03,a.v0],[a.u1-.03,a.level],a.h0,a.h1),P([a.u1-.03,a.level],[a.u1-.03,a.v1],a.h1,a.h1)}{let I=wr.find(W=>W.id==="coat-stand"),G=(I.u0+I.u1)/2,R=(I.v0+I.v1)/2+.1,E=new ut(new Ae(.035,.045,1.85,8),d);E.position.copy(Et(G,.925,R)),t.add(E);for(let W of[0,2.1,4.2]){let F=new ut(new $t(.04,.04,.32),d);F.position.copy(Et(G,.03,R)),F.rotation.y=W,F.translateZ(.12),t.add(F)}for(let W of[.4,2.5,4.6]){let F=new ut(new Ae(.012,.012,.18,6).rotateX(Math.PI/3),M);F.position.copy(Et(G,1.78,R)),F.rotation.y=W,F.translateZ(.06),t.add(F)}let T=[[0,-1.35],[.25,-1.33],[.27,-1.1],[.23,-.6],[.2,-.2],[.22,-.08],[.17,0],[.05,.04],[0,.04]].map(([W,F])=>new vt(W,F)),X=new ut(new Ki(T,12).scale(1,1,.55),new Bt({color:3814466}));X.position.copy(Et(G-.18,1.8,R-.02)),X.rotation.y=.5,t.add(X);let V=new Bt({color:9054756});for(let[W,F]of[[.06,.62],[.12,.5]]){let Z=new ut(new $t(.1,F,.03),V);Z.position.copy(Et(G+W,1.78-F/2,R+.1)),Z.rotation.x=.1,t.add(Z)}let K=new Bt({color:2759700});for(let W of[-.08,.08])t.add(he(G+.18,G+.3,R+W-.05,R+W+.05,0,.28,K)),t.add(he(G+.18,G+.42,R+W-.05,R+W+.05,0,.08,K))}let it={};{let I={u:a.u1-.03,v:2.1},G=Rs(I.v)+.93,R=new ji({color:1381916,specular:4872826,shininess:40}),E=new Bt({color:2763312}),T=new _e;T.position.copy(Et(I.u,G,I.v)),T.rotation.y=Math.PI;let X=new ut(new We(.1,12,9).scale(.85,.9,1.35),R);X.position.set(0,.12,0),X.rotation.x=-.35,T.add(X);let V=new ut(new Ye(.06,.2,4).scale(1,1,.3),R);V.position.set(0,.08,-.15),V.rotation.x=-2,T.add(V);let K=[-1,1].map(et=>{let tt=new ut(new We(.07,8,6).scale(.35,.8,1.6),R);return tt.position.set(et*.075,.13,-.02),tt.rotation.x=-.4,T.add(tt),tt}),W=new _e;W.position.set(0,.25,.08),T.add(W),W.add(new ut(new We(.065,12,9),R));let F=new ut(new Ye(.022,.09,6).rotateX(Math.PI/2),E);F.position.set(0,-.01,.09),W.add(F);let Z=[-1,1].map(et=>{let tt=new _e;tt.position.set(et*.042,.015,.035),tt.add(new ut(new We(.013,8,6),new ye({color:657932})));let lt=new ut(new We(.004,6,4),new ye({color:16777215}));return lt.position.set(et*.004,.005,.011),tt.add(lt),W.add(tt),tt});for(let et of[-1,1]){let tt=new ut(new Ae(.006,.006,.07,5),E);tt.position.set(et*.03,.035,.01),T.add(tt)}t.add(T),Object.assign(it,{bird:T,head:W,eyes:Z,wings:K,at:I,base:T.position.clone(),hop:null,home:!0,nextHop:6,nextLook:3,nextBlink:2,look:0,lookTo:0,blink:0})}i.add(new Bi(Ut("#7d8db5"),.55)),i.add(new vs(Ut("#93a4d0"),Ut("#4a3424"),.45));let st=new ke(Ut("#ffb070"),3.5,18,1.2);st.position.copy(Et((e+n)/2,r-.6,.5)),t.add(st);let yt=!1,ct=()=>{};function St(I,G,R,E){let T=it;if(T.hop){T.hop.t+=G;let V=Math.min(1,T.hop.t/.32),K=T.hop.from,W=T.hop.to,F=K+(W-K)*V;T.bird.position.copy(T.base).add(Et(0,0,F).sub(Et(0,0,0))),T.bird.position.y=T.base.y+Math.sin(V*Math.PI)*.07;for(let[Z,et]of T.wings.entries())et.rotation.z=(Z?-1:1)*Math.sin(V*Math.PI)*.9;if(V>=1){T.hop=null,T.bird.position.y=T.base.y;for(let Z of T.wings)Z.rotation.z=0}}else!E&&I>T.nextHop&&(T.hop={t:0,from:T.home?0:.18,to:T.home?.18:0},T.home=!T.home,T.nextHop=I+(T.home?5+Math.random()*5:1.2+Math.random()*1.8),ct());let X=!1;if(R&&R.level>1){let[V,K]=be(te.slide,R.x,R.z),W=V-T.at.u,F=K-(T.at.v+(T.home?0:.18));Math.hypot(W,F)<5&&(X=!0,T.lookTo=Math.max(-1.6,Math.min(1.6,Math.atan2(F,-W))))}!X&&I>T.nextLook&&(T.lookTo=T.lookTo!==0?0:(Math.random()<.5?-1:1)*(.3+Math.random()*.25),T.nextLook=I+(T.lookTo?1.2+Math.random()*1.5:3+Math.random()*5)),T.look+=(T.lookTo-T.look)*Math.min(1,G*(X?6:9)),T.head.rotation.y=T.look,I>T.nextBlink&&(T.blink=.14,T.nextBlink=I+2+Math.random()*4),T.blink=Math.max(0,T.blink-G);for(let V of T.eyes)V.scale.y=T.blink>0?.12:1}return{scene:i,group:t,setLook(I){yt=I==="open",$.keyhole.visible=!yt},setLittleDoor(I){$.hinge.rotation.y=Math.PI/2+I*1.7},set onHop(I){ct=I},crow:it,tick(I,{fig:G=null,dt:R=1/60,reduce:E=!1}={}){St(I,R,G,E);let T=(K,W)=>.5+.5*Math.sin(I*K+W),X=.75+.25*T(8.3,0)*T(5.1,1.3)+.1*T(17,2);O.light.intensity=12*X,O.glow.material.opacity=.4+.25*X;for(let K of O.flames){let W=K.userData.k;K.scale.set(.3+.08*T(6+W,W),.5+.2*T(9+W*2,W*1.7),1)}let V=.85+.15*T(11,.4)*T(7,2);J.light.intensity=1.2*V,J.flame.scale.set(.07,.12+.03*V,1),$.glow.material.opacity=yt?.25+.1*T(2,0):0}}}var Ps=(i,t,e)=>{let n=ui(i);return new U(n.x+n.rx*t,Oo+e,n.z+n.rz*t)};function mp(){let i=new ii,{half:t,height:e,door:n}=Xn,s=e-t,r=su(),o=new Bt({map:r,side:Pe});{let H=[];for(let W=0;W<=4;W++)H.push([-t,W/4*s]);for(let W=1;W<16;W++){let F=Math.PI-W/16*Math.PI;H.push([Math.cos(F)*t,s+Math.sin(F)*t])}for(let W=4;W>=0;W--)H.push([t,W/4*s]);let J=[0];for(let W=1;W<H.length;W++)J.push(J[W-1]+Math.hypot(H[W][0]-H[W-1][0],H[W][1]-H[W-1][1]));let $=[],it=n+1.2;for(let W=0;W<=it+1e-9;W+=.25)$.push(W);let st=[],yt=[],ct=[];$.forEach((W,F)=>H.forEach(([Z,et],tt)=>{let lt=Ps(W,Z,et);st.push(lt.x,lt.y,lt.z),yt.push(J[tt]/2.4,W/3)}));let St=H.length;for(let W=0;W<$.length-1;W++)for(let F=0;F<St-1;F++){let Z=W*St+F;ct.push(Z,Z+St,Z+1,Z+1,Z+St,Z+St+1)}let I=new fe;I.setAttribute("position",new Jt(st,3)),I.setAttribute("uv",new Jt(yt,2)),I.setIndex(ct),I.computeVertexNormals(),i.add(new ut(I,o));let G=su();G.repeat.set(1,4);let R=[],E=[],T=[];$.forEach((W,F)=>{for(let Z of[-t,t]){let et=Ps(W,Z,.005);R.push(et.x,et.y,et.z),E.push((Z+t)/2,W/3)}if(F){let Z=(F-1)*2;T.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3)}});let X=new fe;X.setAttribute("position",new Jt(R,3)),X.setAttribute("uv",new Jt(E,2)),X.setIndex(T),X.computeVertexNormals(),i.add(new ut(X,new Bt({map:G,color:10127994,side:Pe})));let V=new Bt({color:15265527,transparent:!0,opacity:.55,depthWrite:!1});for(let W=0;W<9;W++){let F=.1+Math.pow(W/9,1.4)*1.8,Z=Math.sin(W*2.1)*.55,et=.18+W%3*.08,tt=new ut(new Dn(et*(1-F/2.4),10).rotateX(-Math.PI/2),V);tt.position.copy(Ps(F,Z,.012)),i.add(tt)}let K=new ut(new oi(new wn(H.map(([W,F])=>Ps(.02,W*1.02,F+.01))),40,.06,6,!1),new Bt({map:an("#9a7248","rgba(60,36,18,0.3)",1)}));i.add(K)}let a=new Bt({color:1513500}),l=ui(n),c=new _e;c.position.copy(Ps(n,0,0)),c.rotation.y=Math.atan2(-l.dx,-l.dz),i.add(c);let h=2*t-.06,d=e-.04,u=new _e;u.position.set(h/2,0,0),c.add(u);let f=new Bt({map:an("#5a3a22","rgba(25,12,5,0.4)",1)}),g=H=>{let J=t-.03,$=Math.abs(H);return $<J?s+Math.sqrt(J*J-$*$)-.02:s},y=[],p=5,m=h/p;for(let H=0;H<p;H++){let J=-h/2+H*m+.012,$=J+m-.024,it=(J+$)/2,st=Math.min(g(J),g($)),yt=new ut(new $t($-J,st,.09),f);yt.position.set(-it-h/2,st/2,0),u.add(yt),H&&y.push(-(J-.012)-h/2)}let M=new ye({color:Ut("#ffc27a"),transparent:!0,opacity:0,depthWrite:!1});for(let H of y){let J=new ut(new ze(.02,s+.4),M);J.position.set(H,(s+.4)/2+.05,-.06),u.add(J)}for(let H of[.35,1.15,1.9]){let J=h*.78,$=new ut(new $t(J,.07,.02),a);$.position.set(-J/2-.08,H,.056),u.add($);let it=new ut(new An(.07,.016,6,16,Math.PI*1.5),a);it.position.set(-J-.08,H+.07,.06),it.rotation.z=Math.PI*.25,u.add(it);let st=it.clone();st.scale.setScalar(.6),st.position.set(-J*.55,H-.07,.06),st.rotation.z=Math.PI*1.25,u.add(st);for(let yt=0;yt<5;yt++){let ct=new ut(new We(.025,8,6),a);ct.position.set(-.15-yt*(J/5),H,.07),u.add(ct)}}let C=new ut(new An(.08,.014,6,16),a);C.position.set(-h+.25,1.05,.08),u.add(C);let v=new ut(new $t(h+.3,.11,.08),a);c.add(v);for(let H of[-h/2-.05,h/2+.05]){let J=new ut(new $t(.1,.2,.16),a);J.position.set(H,1.15,.1),c.add(J)}let A=H=>{v.position.set(-h/2*H*1.1+(1-H)*0,1.15+H*.05,.16+H*.06),v.rotation.z=H*(Math.PI/2-.12),H>.99&&v.position.set(-t+.12,(h+.3)/2,.25)},w=new ye({color:Ut("#ffb45a"),transparent:!0,opacity:0,fog:!1,depthWrite:!1}),N=new ut(new ze(2*t+.4,e+.3),w);N.position.set(0,e/2,-.7),c.add(N);let x=new ke(Ut("#ffb45a"),0,6,1.4);x.position.set(0,1.4,-.4),c.add(x);let S=(H,J,$,it)=>(H.position.set(J,$,it),H),B=new _e;B.position.copy(Ps(n-.45,-t+.2,1.55)),i.add(B),B.add(S(new ut(new $t(.03,.03,.22),a),0,.24,0));for(let[H,J]of[[1,1],[1,-1],[-1,1],[-1,-1]])B.add(S(new ut(new $t(.02,.24,.02),a),H*.07,0,J*.07));B.add(S(new ut(new Ye(.11,.1,4).rotateY(Math.PI/4),a),0,.17,0));let z=new ut(new $t(.12,.2,.12),new ye({color:Ut("#ffcf86")}));B.add(z);let L=new He(new Oe({map:fn(),color:Ut("#ffbf70"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.8}));L.scale.setScalar(.9),B.add(L);let k=new ke(Ut("#ffb86a"),4,7,1.4);B.add(k);let P=new ke(Ut("#9fb6ff"),1.6,4.5,1.5);P.position.copy(Ps(.4,0,1.5)),i.add(P),i.add(new Bi(Ut("#6a5a50"),.35));let O="dormant",q={scene:i,setLook(H){O=H==="open"?"open":"dormant",A(O==="open"?1:0),M.opacity=O==="open"?.85:0},setDoor(H){u.rotation.y=-H*1.6},setBeyond(H){w.opacity=H,x.intensity=6*H},tick(H){let J=.85+.15*Math.sin(H*7.1)*Math.sin(H*3.3+1);k.intensity=4*J,L.material.opacity=.65+.2*J,O==="open"&&(M.opacity=.7+.2*Math.sin(H*1.7))}};return q.setLook("dormant"),q}var qn={wood:4,ice:3.6,blue:1.5},pv=.12,gp=1/3,ru="#4260b0";function xp(i,t,e,n=.12){let s=i.computeFrenetFrames(t,!1),r=[],o=[],a=[],l=14,c=new U(0,1,0);for(let d=0;d<=t;d++){let u=i.getPointAt(d/t),f=s.tangents[d],g=new U().crossVectors(f,c).normalize(),y=new U().crossVectors(f,g).normalize();y.y>0&&y.negate();for(let p=0;p<=l;p++){let m=-n+p/l*(Math.PI+2*n),M=u.clone().addScaledVector(g,Math.cos(m)*e).addScaledVector(y,Math.sin(m)*e);r.push(M.x,M.y,M.z),o.push(p/l,d/6)}if(d)for(let p=0;p<l;p++){let m=(d-1)*(l+1)+p;a.push(m,m+l+1,m+1,m+1,m+l+1,m+l+2)}}let h=new fe;return h.setAttribute("position",new Jt(r,3)),h.setAttribute("uv",new Jt(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function _p({forest:i,groundAt:t}){let e=new ii;e.background=Ut("#080503");let n=3.2,s=1.1,r=7.5,o=new wn(Array.from({length:80},(O,q)=>{let H=q/79,J=H*n*Math.PI*2;return new U(Math.cos(J)*s,-H*r,Math.sin(J)*s)})),a=new ji({map:an("#8a5a30","rgba(40,20,8,0.3)",1),shininess:70,specular:5583650,emissive:2757640,side:Pe});e.add(new ut(xp(o,360,.16),a));let l=cs();l.repeat.set(4,3);let c=new ut(new Ae(2.1,2.1,r+3,24,1,!0),new Bt({map:l,color:9071188,side:Qe}));c.position.y=-r/2+.5,e.add(c);let h=new Bt({map:cs(),color:6967360});for(let O=0;O<16;O++){let q=-2.5-O/16*(r-2),H=O*2.4,J=[new U(Math.cos(H)*2.2,q+.4,Math.sin(H)*2.2),new U(Math.cos(H+.5)*1.5,q,Math.sin(H+.5)*1.5),new U(Math.cos(H+1.1)*2.2,q-.5,Math.sin(H+1.1)*2.2)];e.add(new ut(new oi(new wn(J),12,.05+O%3*.03,6,!1),h))}let d=new Oe({map:fn(),color:Ut("#ffb860"),blending:Ge,depthWrite:!1,transparent:!0});for(let O=0;O<18;O++){let q=(O+.5)/18,H=o.getPointAt(q),J=new U(H.x,0,H.z).normalize(),$=new He(d);$.position.copy(H).addScaledVector(J,.55).add(new U(0,.3,0)),$.scale.setScalar(.45),e.add($);let it=new ut(new We(.035,8,6),new ye({color:Ut("#ffd59a")}));it.position.copy($.position),e.add(it)}let u=new ke(Ut("#ffbe78"),4,4,1.4);e.add(u);for(let O=0;O<4;O++){let q=new ke(Ut("#ffaa60"),5,5,1.3);q.position.set(0,-.6-O*2.1,0),e.add(q)}e.add(new Bi(Ut("#6a4a34"),.9));let f=Qh(.5).map(([O,q],H,J)=>{let $=H/(J.length-1),it=Math.max(0,($-.86)/.14);return new U(O,t(O,q)+.22+(1-$)*.25-it*it*1.6,q)}),g=new wn(f),y=new _e,p=new ji({color:Ut("#a8dcf0"),emissive:Ut("#24506a"),specular:16777215,shininess:110,transparent:!0,opacity:.82,side:Pe,depthWrite:!1}),m=new ut(xp(g,420,.24,.25),p);m.renderOrder=1,y.add(m);let M=new Bt({color:Ut("#e6ecf6")});for(let O of[-1,1]){let q=[];for(let J=0;J<=80;J++){let $=J/80*.86,it=g.getPointAt($),st=g.getTangentAt($),yt=new U(-st.z,0,st.x).normalize(),ct=it.clone().addScaledVector(yt,O*.4);ct.y=t(ct.x,ct.z)+.06,q.push(ct)}let H=new ut(new oi(new wn(q),200,.2,7,!1),M);H.scale.y=1,y.add(H)}{let O=g.getPointAt(0),q=new ut(new We(1.2,14,8).scale(1.3,.6,1.3),M);q.position.set(O.x,t(O.x,O.z),O.z),y.add(q);let H=new ut(new Dn(.26,14),new ye({color:656900})),J=g.getTangentAt(.01);H.position.copy(g.getPointAt(.004)),H.lookAt(H.position.clone().add(J)),y.add(H)}let[C,v]=Er,A=new U(C,t(C,v)-1.2,v);{let O=new ut(new An(2.3,.45,8,28).rotateX(Math.PI/2).scale(1,.5,1),M);O.position.set(C,t(C+2.7,v)+.05,v),y.add(O);let q=new ut(new Dn(1.5,24).rotateX(-Math.PI/2),new ye({color:Ut("#8aa0e0")}));q.position.set(C,t(C,v)-.02,v),y.add(q);let H=new He(new Oe({map:fn(),color:Ut("#6f8ce0"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.85}));H.position.set(C,t(C,v)+.6,v),H.scale.set(4.5,2.6,1),y.add(H);let J=new ke(Ut("#6f8ce0"),5,9,1.5);J.position.set(C,t(C,v)+.8,v),y.add(J)}i.add(y);let w=o.getLength(),N=g.getLength(),x=.9/qn.ice,S=Math.min(x,w/qn.wood/N),B=.9/(x-(x-S)*gp/2),z=B*gp;function L(O){if(O<z){let q=O/z;return{e:S*O+(x-S)*z*(q*q*q-q*q*q*q/2),speed:(S+(x-S)*q*q*(3-2*q))/x}}return{e:Math.min(.9,S*z+(x-S)*z/2+x*(O-z)),speed:1}}let k=qn.wood+B+qn.blue;function P(O){if(O<qn.wood){let it=O/qn.wood,st=it,yt=o.getPointAt(Math.min(1,st+.03)),ct=o.getPointAt(Math.max(0,st-.025));u.position.copy(yt).add(new U(0,.25,0));let St=yt.clone().add(new U(0,-.1,0)),I=St.clone().add(new U(0,.04,0)).lerp(o.getPointAt(Math.min(1,st+.07)),pv);return{part:"wood",scene:"ride",rider:St,cam:ct.clone().add(new U(0,.12,0)),look:I,k:it}}if(O<qn.wood+B){let it=O-qn.wood,st=it/B,{e:yt,speed:ct}=L(it),St=g.getPointAt(yt+.012),I=g.getPointAt(Math.max(0,yt-.004));return{part:"ice",scene:"forest",rider:St.clone().add(new U(0,-.12,0)),cam:I.clone().add(new U(0,.16,0)),look:g.getPointAt(Math.min(1,yt+.05)).add(new U(0,.05,0)),k:st,speed:ct}}let q=Math.min(1,(O-qn.wood-B)/qn.blue),H=.9+q*.1,J=g.getPointAt(Math.min(1,H)),$=g.getPointAt(Math.max(0,H-.01));return{part:"blue",scene:"forest",rider:J.clone(),cam:$.clone().add(new U(0,.25-q*.2,0)),look:A.clone().lerp(J,.3*(1-q)),k:q}}return{scene:e,woodCurve:o,iceCurve:g,iceGroup:y,blueAt:A,rideAt:P,total:k,times:{wood:qn.wood,ice:B,blue:qn.blue},speeds:{start:S,full:x}}}var Ho={v:1,tile:"winter-forest",place:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.place/winter-forest",entry:"ways-only",exits:[{id:"wardrobe",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.wardrobe",fallback:"https://thunderbird.cafe/way/winter-forest/wardrobe"},{id:"tree-door",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.tree-door",fallback:"https://thunderbird.cafe/way/winter-forest/tree-door"},{id:"arch",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.arch",fallback:"https://thunderbird.cafe/way/winter-forest/arch"},{id:"slide",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.slide",fallback:"https://thunderbird.cafe/way/winter-forest/slide"}],entrances:[{id:"lamppost"},{id:"wardrobe"},{id:"tree-door"},{id:"arch"}]};var gv="tiles-protocol-up-way-payload",xv="tiles-protocol-down-way-payload",yp=1,_v=1e3,yv=["n","ne","e","se","s","sw","w","nw"];function vv(i){let t=(-i/(Math.PI*2)%1+1)%1;return yv[Math.round(t*8)%8]}function vp({ways:i=Ho,win:t=window,onStatus:e=()=>{},onArrive:n=()=>{},timers:s={setTimeout:(r,o)=>setTimeout(r,o)}}={}){let r=t.parent&&t.parent!==t,o=f=>i.exits.find(g=>g.id===f)||null,a=f=>i.entrances.some(g=>g.id===f),l="waiting",c=new Map,h=f=>{r&&t.parent.postMessage({action:gv,payload:{v:yp,...f}},"*")};t.addEventListener("message",f=>{if(!r||f.source!==t.parent)return;let g=f.data;if(!g||g.action!==xv||!g.payload||g.payload.v!==yp)return;let y=g.payload;if(y.kind==="status"){if(!y.exits||typeof y.exits!="object")return;l="host";for(let p of i.exits)c.set(p.id,y.exits[p.id]==="open"?"open":"dormant");e()}else if(y.kind==="arrive"){if(typeof y.entrance!="string"||!a(y.entrance))return;l="host",n(y.entrance)}});let d=()=>h({kind:"hello",tile:i.tile,ways:"/ways.json"});r&&(d(),s.setTimeout(()=>{l==="waiting"&&d()},500));let u=()=>{l==="waiting"&&(l="plain",e())};return s.setTimeout(u,r?_v:0),{state(f){return l==="host"?c.get(f)||"dormant":l},leave(f,g=0){return l!=="host"||!o(f)?!1:(h({kind:"leave",exit:f,facing:vv(g)}),!0)},get host(){return l==="host"},get mode(){return l}}}var ac=0,ou=0;function au({inFrame:i=!0}={}){let t=document.getElementById("postcard"),e=document.getElementById("pcsnow"),n=document.getElementById("pcline");if(!t)return;t.hidden=!1,n.classList.remove("show"),clearTimeout(ou),ou=setTimeout(()=>n.classList.add("show"),i?1400:600);let s=e.getContext("2d"),r=[],o=0,a=0,l=performance.now(),c=()=>{let u=Math.min(2,window.devicePixelRatio||1);o=t.clientWidth,a=t.clientHeight,e.width=Math.max(1,Math.round(o*u)),e.height=Math.max(1,Math.round(a*u)),s.setTransform(u,0,0,u,0,0);let f=Math.round(o*a/2600);for(;r.length<f;)r.push({x:Math.random()*o,y:Math.random()*a,r:.6+Math.random()*1.8,s:12+Math.random()*26,p:Math.random()*6.28});r.length=f};c(),window.addEventListener("resize",c);let h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=u=>{let f=Math.min(.1,(u-l)/1e3);l=u,s.clearRect(0,0,o,a);for(let g of r)h||(g.y+=g.s*f,g.x+=Math.sin(u/1400+g.p)*6*f),g.y>a+4&&(g.y=-4,g.x=Math.random()*o),s.globalAlpha=.45+g.r*.2,s.fillStyle="#f2f6ff",s.beginPath(),s.arc(g.x,g.y,g.r,0,Math.PI*2),s.fill();ac=requestAnimationFrame(d)};cancelAnimationFrame(ac),ac=requestAnimationFrame(d)}function lu(){let i=document.getElementById("postcard");i&&(i.hidden=!0),cancelAnimationFrame(ac),clearTimeout(ou)}var Yn=Nf,$n=i=>document.getElementById(i),Cr=$n("stage"),Ap="winter-forest",pu=(()=>{try{return JSON.parse(localStorage.getItem(Ap)||"{}")}catch{return{}}})(),Rp=()=>{try{localStorage.setItem(Ap,JSON.stringify({sound:Pr.sound,reduce:mc?Jn:void 0}))}catch{}},Pr={...Ff(),sound:pu.sound!==!1},hu=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},mc=typeof pu.reduce=="boolean",Jn=mc?pu.reduce:!!hu.matches,nn=new Ql({antialias:!0,preserveDrawingBuffer:!1});nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Cr.appendChild(nn.domElement);var Ls=Zf(nn,Yn),{scene:Xo,camera:Je,groundAt:mu,walkWorld:Mv,figure:di}=Ls,Cn=fp({scene:Xo,renderer:nn,sceneParts:Ls,look:Yn,other:Uf}),Ns=pp(),On=mp(),Go=_p({forest:Xo,groundAt:mu}),vn=Df(Pr),Cp={forest:Xo,library:Ns.scene,tunnel:On.scene,ride:Go.scene};{let[i,t]=ge(te.slide,Wt.u1-.5,0);vn.setFirePos(i,.6,t)}Ns.onHop=()=>{xe==="library"&&vn.rustle()};var gu={lamppost:{...As.lamppost,place:"forest"},wardrobe:{...As.wardrobe,place:"forest"},"tree-door":{...op,place:"tunnel"},arch:{...As.arch,place:"forest"}},ft={x:As.lamppost.x,z:As.lamppost.z,yaw:As.lamppost.yaw,y:0,level:0,bob:0,steps:0,size:1},xe="forest",Tn="postcard",Ds=!1,Re=null,Vo=null,Pp=0,Rr=null,uu="",Ue={pos:new U,look:new U,ready:!1,override:null},Zn={forward:!1,back:!1,left:!1,right:!1},dc={x:0,y:0},hc=0,Ev=$n("where"),cu=$n("note"),lc=$n("fade"),Ip=$n("fadetext"),Lp=$n("hint"),fc=$n("soundbtn"),Ir=$n("gearbtn"),Is=$n("menu"),du=$n("reduce"),Mp=0;function Dp(i,t=2600){cu.textContent=i,cu.classList.add("show"),clearTimeout(Mp),Mp=setTimeout(()=>cu.classList.remove("show"),t)}function Wo(i){i!==uu&&(uu=i,Ev.textContent=`Winter Forest · ${i}`)}var Sv=["#2a1a0c","#0b1020","#05070c","#1c1209",ru];function bn(i,t,e=0,n=""){lc.style.transition=e?`opacity ${e}ms ease`:"none",i&&(lc.style.background=i),lc.style.opacity=String(t),Ip.textContent=n,i&&lc.classList.toggle("dark",Sv.includes(i))}function Np(){fc.textContent=Pr.sound?"Sound on":"Sound off",fc.setAttribute("aria-pressed",String(Pr.sound))}fc.addEventListener("click",()=>{Pr.sound=!Pr.sound,Rp(),vn.start(),vn.apply(),Np(),fc.blur()});Np();var Up=()=>{Ds&&vn.start()};addEventListener("keydown",Up,{capture:!0});addEventListener("pointerdown",Up,{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden?vn.pause():Ds&&vn.resume()});Ir.addEventListener("click",()=>{let i=Is.hidden;Is.hidden=!i,Ir.setAttribute("aria-expanded",String(i)),i&&Fp()});$n("menuclose").addEventListener("click",()=>{Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),Ir.focus()});$n("tolamp").addEventListener("click",()=>{Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),Tn==="walking"&&xu("lamppost",{quick:!0})});du.addEventListener("change",()=>{Jn=du.checked,mc=!0,Rp()});function Fp(){du.checked=Jn}hu.addEventListener&&hu.addEventListener("change",i=>{mc||(Jn=i.matches),Fp()});var bv=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;Lp.textContent=bv?"Left thumb down in the lower left to walk · drag on the right to turn":"Hold ↑ or W to walk · ← → or A D to turn · or drag across the view";var Ep=!1,Tv=()=>{!Ep&&Ds&&(Ep=!0,Lp.classList.add("gone"))};Cf({canvas:nn.domElement,held:Zn,stick:dc,isFree:()=>!0,onCommand:()=>{},onDrag:i=>{hc+=i},onMoved:Tv,blocked:()=>Tn!=="walking"||!Is.hidden,onKey:i=>i.code==="Escape"&&!Is.hidden?(Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),!0):!1}).setMovement("free");var hs=vp({onStatus:()=>{for(let i of Ho.exits)Cn.setLook(i.id,hs.state(i.id));On.setLook(hs.state("tree-door")),Ns.setLook(hs.state("slide"))},onArrive:i=>wv(i)});au({inFrame:window.parent!==window});function pc(i){xe=i;let t=Cp[i]||Xo;di.parent!==t&&t.add(di),Cn.parts.library.group.visible=i!=="library",Cn.parts.trunk.group.visible=i!=="tunnel",vn.setPlace(i),Ue.ready=!1}function Bp(i){Object.assign(ft,{x:i.x,z:i.z,yaw:i.yaw}),ft.level=xe==="library"?rc(ft.x,ft.z):0,ft.y=ko(ft.x,ft.z)}function ko(i,t){return xe==="library"?rc(i,t,ft.level):xe==="tunnel"?Oo:mu(i,t)}var Sp={lamppost:"#0b1020",wardrobe:"#ffffff","tree-door":"#c98a3e",arch:"#cfe2ee"};function wv(i){if(gu[i]){Ds||(Ds=!0,lu(),Cr.hidden=!1,xc(),requestAnimationFrame(Vp),vn.start()),Vo=null;for(let t in Zn)Zn[t]=!1;xu(i,{quick:!1})}}function Av(){Cn.parts.wardrobe.setOpen(0),Cn.parts.wardrobe.setBeyond(0),Cn.parts.arch.faceMat.uniforms.boost.value=0,On.setDoor(0),On.setBeyond(0),Ns.setLittleDoor(0),ft.size=1,di.scale.setScalar(1),di.visible=!0}function xu(i,{quick:t}){let e=gu[i];Av(),pc(e.place),Bp(e),Ue.ready=!1,Ue.override=null,Rr=null,t||Jn?(bn(Sp[i],1,0),requestAnimationFrame(()=>bn(null,0,450)),Tn="walking",Re=null):(bn(Sp[i],1,0),Tn="arriving",Re={kind:`arrive-${i}`,t:0},i==="wardrobe"&&Cn.parts.wardrobe.setOpen(1),i==="tree-door"&&(On.setDoor(1),On.setBeyond(1)),requestAnimationFrame(()=>bn(null,0,i==="lamppost"?1400:900))),Wo(gc())}function cc(i,t){Tn="passing";for(let e in Zn)Zn[e]=!1;Re={kind:"pass",t:0,to:i,spot:t,swapped:!1},bn("#05070c",1,Jn?200:330),vn.door()}var Rv="This doesn't lead anywhere yet.";function Cv(i){if(i.kind==="mouth"){cc("tunnel",rp);return}if(i.kind==="door"&&i.id==="slide"){cc("library",jf);return}if(i.kind==="door-out"){cc("forest",tp);return}if(i.kind==="mouth-out"){cc("forest",ap);return}let t=i.id;if(hs.state(t)!=="open"){Dp(Rv);return}Iv(t)}var Pv={wardrobe:"#ffffff",arch:"#cfe2ee","tree-door":"#c98a3e",slide:"#1c1209"};function Iv(i){Tn="going";for(let t in Zn)Zn[t]=!1;if(vn.portal(i),Jn){Re={kind:"fade-out",t:0,id:i},bn(Pv[i],1,500);return}Re={kind:i==="slide"?"shrink":`through-${i}`,t:0,id:i,from:{x:ft.x,z:ft.z}}}function zo(i){if(Tn="leaving",Vo=i,Pp=performance.now(),Re=null,vn.ride(null),!hs.leave(i,ft.yaw)){Op();return}Ip.textContent="On your way…"}function Op(){let i=Vo;Vo=null,xu(gu[i]?i:"lamppost",{quick:!0}),setTimeout(()=>Dp("The way is blocked."),300)}var Lv=8e3,Ai=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)};function Dv(i){if(!Re)return;Re.t+=i;let t=Re,e=t.t,n=Cn.parts.wardrobe,s=Cn.parts.arch;if(t.kind==="pass"){!t.swapped&&e>(Jn?.22:.36)&&(t.swapped=!0,pc(t.to),Bp(t.spot),Rr=null,Ue.ready=!1,Wo(gc()),bn(null,0,Jn?200:360)),e>(Jn?.45:.75)&&(Re=null,Tn="walking");return}if(t.kind==="fade-out"){e>.55&&zo(t.id);return}if(t.kind==="through-wardrobe"){let r=te.wardrobe;n.setOpen(Ai(e/1)),n.setBeyond(Math.min(1,e/.9));let o=Math.min(1,Math.max(0,(e-.5)/1.1)),[a,l]=ge(r,-.5+o*1.2,be(r,t.from.x,t.from.z)[1]*(1-o));ft.x=a,ft.z=l,ft.bob+=i*9*(o>0&&o<1?1:0);let[c,h]=ge(r,-2.2+Ai(o)*2.3,0),[d,u]=ge(r,2,0);Ue.override={pos:new U(c,1.45,h),look:new U(d,1.2,u)},e>.9&&!t.faded&&(t.faded=!0,bn("#ffffff",1,700)),e>1.7&&zo("wardrobe");return}if(t.kind==="through-arch"){let r=te.arch,o=Math.min(1,e/1.5),[a,l]=ge(r,-.6+o*.7,be(r,t.from.x,t.from.z)[1]*(1-o));ft.x=a,ft.z=l,ft.bob+=i*7,o>.55&&(di.visible=!1);let[c,h]=ge(r,-3+Ai(o)*2.95,0),[d,u]=ge(r,3,0);Ue.override={pos:new U(c,1.55-o*.2,h),look:new U(d,1.45,u)},s.faceMat.uniforms.boost.value=Math.min(1,e/1.4),e>1.2&&!t.faded&&(t.faded=!0,bn("#cfe2ee",1,700)),e>2&&zo("arch");return}if(t.kind==="through-tree-door"){On.setDoor(Ai(e/1.1)),On.setBeyond(Math.min(1,e/1));let r=Cs(t.from.x,t.from.z),o=Math.min(1,Math.max(0,(e-.6)/1)),a=ui(r.s+o*1.4),l=r.w*(1-Ai(o));ft.x=a.x+a.rx*l,ft.z=a.z+a.rz*l,ft.bob+=i*8*(o>0&&o<1?1:0),e>.9&&!t.faded&&(t.faded=!0,bn("#c98a3e",1,700)),e>1.8&&zo("tree-door");return}if(t.kind==="shrink"){let r=Ai(e/1);if(ft.size=1-r*.82,di.scale.setScalar(ft.size),e>1&&Ns.setLittleDoor(Ai((e-1)/.45)),e>1.35){let[o,a]=be(te.slide,ft.x,ft.z),l=Math.min(1,(e-1.35)/.5),[c,h]=ge(te.slide,o+(Wt.littleDoor.u-o)*l,a+(Wt.v+.15-a)*l);ft.x=c,ft.z=h,ft.bob+=i*10}e>1.85&&!t.faded&&(t.faded=!0,bn("#1c1209",1,160)),e>2.05&&(Re={kind:"ride",t:0,id:"slide",part:null},ft.size=.18);return}if(t.kind==="ride"){let r=Go.rideAt(e);r.part!==t.part&&(t.part=r.part,r.scene!==xe&&pc(r.scene),Wo("down the slide"),vn.ride(r.part),r.part==="wood"&&bn(null,0,220),r.part==="ice"&&(bn("#e8f0ff",.85,0),requestAnimationFrame(()=>bn(null,0,260)))),ft.x=r.rider.x,ft.z=r.rider.z,ft.y=r.rider.y;let o=r.look.clone().sub(r.rider);ft.yaw=Math.atan2(-o.x,-o.z),Ue.override={pos:r.cam,look:r.look},r.part==="blue"&&r.k>.35&&!t.faded&&(t.faded=!0,bn(ru,1,700)),e>Go.total+.1&&zo("slide");return}if(t.kind==="arrive-wardrobe"){e>.35&&n.setOpen(1-Ai((e-.35)/.9)),e>1.3&&(n.setOpen(0),Re=null,Tn="walking");return}if(t.kind==="arrive-tree-door"){e>.3&&(On.setDoor(1-Ai((e-.3)/.9)),On.setBeyond(1-Ai((e-.3)/.8))),e>1.3&&(On.setDoor(0),On.setBeyond(0),Re=null,Tn="walking");return}if(t.kind==="arrive-arch"){s.faceMat.uniforms.boost.value=Math.max(0,1-e/1.2),e>1.2&&(s.faceMat.uniforms.boost.value=0,Re=null,Tn="walking");return}t.kind.startsWith("arrive-")&&e>.9&&(Re=null,Tn="walking")}function gc(){return xe==="library"?eu(ft.x,ft.z,ft.level):xe==="tunnel"?"inside the great tree":xe==="ride"||Re&&Re.kind==="ride"?"down the slide":Yf(ft.x,ft.z)}function Nv(){if(xe==="tunnel")return"hollow";if(xe==="library")return"wood";let[i,t]=be(te.wardrobe,ft.x,ft.z);if(i>-8*.52&&i<.3&&Math.abs(t)<1.3)return"boards";let e=Math.hypot(ft.x,ft.z);return e>7-.3||Math.abs(e-3.2)<.6?"path":"snow"}function Uv(i){if(Tn!=="walking")return;let t=(Zn.right?1:0)-(Zn.left?1:0)+dc.x;ft.yaw-=Math.max(-1,Math.min(1,t))*Yn.turnSpeed*Math.PI/180*i+(Yn.mouseTurn?hc*.006:0),hc=0;let e=Math.max(-1,Math.min(1,(Zn.forward?1:0)-(Zn.back?1:0)-dc.y)),n=[-Math.sin(ft.yaw),-Math.cos(ft.yaw)];if(e){let s=[ft.x+n[0]*e*Yn.walkSpeed*i,ft.z+n[1]*e*Yn.walkSpeed*i],r=[s[0]-ft.x,s[1]-ft.z],o=ft.level;if(xe==="library"){let c=$f([ft.x,ft.z],r,ft.level);c&&([ft.x,ft.z,ft.level]=c)}else{let[c,h]=xe==="tunnel"?np([ft.x,ft.z],r):qf([ft.x,ft.z],r,Mv);ft.x=c,ft.z=h}ft.bob+=i*9*Math.abs(e);let a=Math.floor(ft.bob/Math.PI);if(a!==ft.steps){ft.steps=a;let c=xe==="library"&&eu(ft.x,ft.z,ft.level)==="on the stairs";vn.step({surface:Nv(),creak:c&&Math.random()<.35})}let l=null;e>0&&(xe==="library"?l=Kf(ft.x,ft.z,s[0],s[1],ft.level):xe==="tunnel"?l=ip(ft.x,ft.z,s[0],s[1]):l=jh(s[0],s[1])||jh(ft.x,ft.z)),l&&Rr!==l.id+l.kind?(Rr=l.id+l.kind,Cv(l)):l||(Rr=null),xe==="library"&&ft.level-o>.3&&vn.hop()}hc=0,Wo(gc())}function Hp(i){if(!(Re&&Re.kind==="ride")){let e=ko(ft.x,ft.z);ft.y+=(e-ft.y)*Math.min(1,i*14),Math.abs(e-ft.y)<.002&&(ft.y=e)}let t=xe==="library"&&Math.abs(ko(ft.x,ft.z)-ft.y)>.05?Math.sin(Math.min(1,Math.abs(ko(ft.x,ft.z)-ft.y)/.45)*Math.PI)*.12:0;di.position.set(ft.x,ft.y+t+Math.abs(Math.sin(ft.bob))*.04*ft.size,ft.z),di.rotation.y=ft.yaw}function bp(i,t){let[e,n]=be(te.slide,i,t);return e>pe.front-.4&&e<pe.front+pe.depth+.4&&Math.abs(n)<pe.width/2+.4?!0:Math.hypot(i-ci[0],t-ci[1])<en.radius+.75}function zp(i){let t,e;if(Ue.override)t=Ue.override.pos,e=Ue.override.look;else{let s=ft.size,r=new U(-Math.sin(ft.yaw),0,-Math.cos(ft.yaw)),o=new U(-r.z,0,r.x),a=new U(ft.x,ft.y,ft.z);if(t=a.clone().addScaledVector(r,-Yn.distance*s).addScaledVector(o,Yn.shoulder*s),t.y=a.y+Yn.height*s,xe==="forest"){t.y=Math.max(t.y,mu(t.x,t.z)+.4);let[l,c]=be(te.wardrobe,t.x,t.z),[h]=be(te.wardrobe,ft.x,ft.z);if(h>-8&&l>-.35&&Math.abs(c)<3){l=-.35,c=Math.max(-dn.inner,Math.min(dn.inner,c));let[d,u]=ge(te.wardrobe,l,c);t.x=d,t.z=u}if(l>-dn.depth-.4&&l<.2&&Math.abs(c)<dn.half+.4&&(t.y=Math.min(t.y,dn.height-.3)),bp(t.x,t.z))for(let d=19;d>=1;d--){let u=d/20,f=ft.x+(t.x-ft.x)*u,g=ft.z+(t.z-ft.z)*u;if(!bp(f,g)){t.x=f,t.z=g;break}}}else if(xe==="library"&&s>.9){let l=ep(t,ft,ft.level);t.set(l.x,l.y,l.z)}else if(xe==="tunnel"){let l=ui(Cs(ft.x,ft.z).s),c=r.x*l.dx+r.z*l.dz>0,h=lp(t,ft,c);t.set(h.x,h.y,h.z)}e=a.clone().addScaledVector(r,Yn.lookAhead*s),e.y=a.y+Yn.lookHeight*s}let n=Ue.ready?1-Math.exp(-(Ue.override?Re&&Re.kind==="ride"?30:5:Yn.follow)*i):1;Ue.pos.lerp(t,n),Ue.look.lerp(e,n),Ue.ready=!0,Je.position.copy(Ue.pos),Je.lookAt(Ue.look),Je.near=ft.size<.5?.01:.05,Je.updateProjectionMatrix(),Ls.snowMat.uniforms.centre.value.copy(Ue.pos)}var Tp=performance.now(),fu=!1,kp=1/60,Fv=new U(...(()=>{let[i,t]=ge(te.arch,0,0);return[i,1.8,t]})());function Gp(i){let t=i/1e3;if(Ls.tick(t),On.tick(t),Ns.tick(t,{fig:xe==="library"?{x:ft.x,z:ft.z,level:ft.level}:null,dt:kp,reduce:Jn}),Cn.shimmerTime.value=t,xe==="ride"){nn.render(Go.scene,Je);return}let e=Cn.parts.arch;if(xe==="forest"&&e.faceMat.uniforms.open.value>.5){let n=Fv.clone().sub(Je.position),s=new U;Je.getWorldDirection(s);let[r]=be(te.arch,Je.position.x,Je.position.z);n.length()<34&&n.normalize().dot(s)>.2&&r<.2&&e.draw(nn,Je,Ls)}nn.render(Xo,Je),(xe==="library"||xe==="tunnel")&&(nn.autoClear=!1,nn.clearDepth(),nn.render(Cp[xe],Je),nn.autoClear=!0)}function Vp(i){let t=Math.min(.1,(i-Tp)/1e3)*(window.__forest.timeScale||1);if(Tp=i,kp=t,!fu){Uv(t),Dv(t),Hp(t),zp(t),Tn==="leaving"&&i-Pp>Lv&&Op();let e=Math.hypot(ft.x,ft.z),[n,s]=be(te.wardrobe,ft.x,ft.z),r=xe==="forest"&&n>-9&&n<.5&&Math.abs(s)<3?Math.min(1,(n+8+1)/4):0,[o,a]=be(te.arch,ft.x,ft.z),l=xe==="forest"&&hs.state("arch")==="open"?Math.max(0,1-Math.hypot(o,a)/9):0;vn.update({camPos:Ue.pos,camFwd:new U().subVectors(Ue.look,Ue.pos).normalize(),outside:xe==="forest"?Math.min(1,Math.max(0,(e-7+1)/5)):0,lane:r,archNear:Math.max(l,Cn.parts.arch.faceMat.uniforms.boost.value),ride:Re&&Re.kind==="ride"?Go.rideAt(Re.t):null}),Gp(i)}requestAnimationFrame(Vp)}function xc(){let i=Cr.clientWidth||innerWidth,t=Cr.clientHeight||innerHeight;nn.setSize(i,t),Je.aspect=i/t,Je.updateProjectionMatrix(),Ls.snowMat.uniforms.scale.value=t*nn.getPixelRatio()}addEventListener("resize",xc);xc();window.__forest={state:()=>({phase:Tn,place:xe,entered:Ds,crowLook:Ns.crow.look,x:ft.x,z:ft.z,y:ft.y,level:ft.level,yaw:ft.yaw,size:ft.size,area:uu,ways:hs.mode,exits:Object.fromEntries(Ho.exits.map(i=>[i.id,hs.state(i.id)])),anim:Re&&Re.kind,part:Re&&Re.part,leftBy:Vo,reduceMotion:Jn,archOpen:Cn.parts.arch.faceMat.uniforms.open.value,wardrobeGlow:Cn.parts.wardrobe.lineMat.opacity,cam:[Je.position.x,Je.position.z,Je.position.y],figView:(()=>{let i=new U;return di.getWorldPosition(i),i.y+=.5*ft.size,i.project(Je),[i.x,i.y]})()}),jump(i,t,e,n,s){n&&n!==xe&&pc(n),Object.assign(ft,{x:i,z:t,yaw:e}),ft.level=xe==="library"?s??rc(i,t):0,ft.y=ko(i,t),Ue.ready=!1,Rr=null,Wo(gc())},held:Zn,stick:dc,timeScale:1,snapshot(i,t,e){fu=!0,lu(),Cr.hidden=!1;let n=nn.getPixelRatio();nn.setPixelRatio(1),nn.setSize(i,t,!1),Je.aspect=i/t,Je.updateProjectionMatrix(),Ls.snowMat.uniforms.scale.value=t,di.visible=!!e.figure,Object.assign(ft,{x:e.x,z:e.z,yaw:e.yaw}),Hp(1),Ue.override=e.camera?{pos:new U(...e.camera),look:new U(...e.look)}:null,Ue.ready=!1,zp(1),Gp(performance.now());let s=nn.domElement.toDataURL("image/png");return di.visible=!0,Ue.override=null,nn.setPixelRatio(n),xc(),fu=!1,Ds||(Cr.hidden=!0,au({inFrame:window.parent!==window})),s}};})();
