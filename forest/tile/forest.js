/* Winter Forest (thunderbird.cafe). Includes three.js (MIT licence, three.js authors). */
(()=>{var ad=0,rh=1,ld=2;var Ms=1,cd=2,dr=3,is=0,Ke=1,Pe=2,Mi=0,fr=1,Ge=2,oh=3,ah=4,hd=5;var Es=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,_d=203,lh=204,ch=205,yd=206,vd=207,Md=208,Ed=209,Sd=210,bd=211,Td=212,wd=213,Ad=214,Sa=0,ba=1,Ta=2,nr=3,wa=4,Aa=5,Ra=6,Ca=7,vo=0,Rd=1,Cd=2,ai=0,hh=1,uh=2,dh=3,Mo=4,fh=5,ph=6,mh=7;var gh=300,ss=301,Ss=302,ol=303,al=304,Eo=306,ni=1e3,gi=1001,Pa=1002,rn=1003,Pd=1004;var So=1005;var cn=1006,ll=1007;var rs=1008;var Rn=1009,xh=1010,_h=1011,pr=1012,cl=1013,li=1014,Gn=1015,Fn=1016,hl=1017,ul=1018,mr=1020,yh=35902,vh=35899,Mh=1021,Eh=1022,Vn=1023,_i=1026,os=1027,dl=1028,fl=1029,as=1030,pl=1031;var ml=1033,bo=33776,To=33777,wo=33778,Ao=33779,gl=35840,xl=35841,_l=35842,yl=35843,vl=36196,Ml=37492,El=37496,Sl=37488,bl=37489,Ro=37490,Tl=37491,wl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Nl=37816,Ul=37817,Fl=37818,Bl=37819,Ol=37820,Hl=37821,zl=36492,kl=36494,Gl=36495,Vl=36283,Wl=36284,Co=36285,Xl=36286;var Wr=2300,Ia=2301,Ma=2302,Yc=2303,Zc=2400,Jc=2401,$c=2402;var Id=3200;var Po=0,Ld=1,Oi="",ln="srgb",Xr="srgb-linear",qr="linear",Ee="srgb";var Ea=7680;var Dd=519,Nd=512,Ud=513,Fd=514,ql=515,Bd=516,Od=517,Yl=518,Hd=519,Sh=35044;var bh="300 es",ei=2e3,ir=2001;function $p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){let i=Yr("canvas");return i.style.display="block",i}var Ru={},sr=null;function Zr(...i){let t="THREE."+i.shift();sr?sr("log",t,...i):console.log(t,...i)}function kd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=kd(i);let t="THREE."+i.shift();if(sr)sr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=kd(i);let t="THREE."+i.shift();if(sr)sr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in Ru||(Ru[t]=!0,jt(...i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Sa]:ba,[Ta]:Ra,[wa]:Ca,[nr]:Aa,[ba]:Sa,[Ra]:Ta,[Ca]:wa,[Aa]:nr},yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vc=Math.PI/180,La=180/Math.PI;function Ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Qp(i,t){return(i%t+t)%t}function Mc(i,t,e){return(1-e)*i+e*t}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var yt=Ph,xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==x){let p=l*u+c*f+h*x+d*y;p<0&&(u=-u,f=-f,x=-x,y=-y,p=-p);let m=1-a;if(p<.9995){let S=Math.acos(p),P=Math.sin(S);m=Math.sin(m*S)/P,a=Math.sin(a*S)/P,l=l*m+u*a,c=c*m+f*a,h=h*m+x*a,d=d*m+y*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+x*a,d=d*m+y*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*f-c*u,t[e+1]=l*x+h*u+c*d-a*f,t[e+2]=c*x+h*f+a*u-l*d,t[e+3]=h*x-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var O=Ih,Ec=new O,Cu=new xn,Lh=class Lh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],y=s[0],p=s[3],m=s[6],S=s[1],P=s[4],v=s[7],R=s[2],A=s[5],B=s[8];return r[0]=o*y+a*S+l*R,r[3]=o*p+a*P+l*A,r[6]=o*m+a*v+l*B,r[1]=c*y+h*S+d*R,r[4]=c*p+h*P+d*A,r[7]=c*m+h*v+d*B,r[2]=u*y+f*S+x*R,r[5]=u*p+f*P+x*A,r[8]=u*m+f*v+x*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;var ne=Lh,Sc=new ne,Pu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jp(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ee&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var ue=jp();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Yr("canvas")),Bs.width=t.width,Bs.height=t.height;let s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tm=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bc(s[o].image)):r.push(bc(s[o]))}else r=bc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var em=0,Tc=new O,Sn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=cn,o=rs,a=Vn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ni(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ni:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ni:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=gh;Sn.DEFAULT_ANISOTROPY=1;var Dh=class Dh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,v=(f+1)/2,R=(m+1)/2,A=(h+u)/4,B=(d+y)/4,g=(x+p)/4;return P>v&&P>R?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=A/n,r=B/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=g/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=B/r,s=g/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;var Se=Dh,Na=class extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var rl=class rl{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,x,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,x=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=x+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u+y*a,e[4]=x*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,x=a*h,y=a*d;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+x,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nm,t,im)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Wi.crossVectors(n,Pn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Wi.crossVectors(n,Pn)),Wi.normalize(),Zo.crossVectors(Pn,Wi),s[0]=Wi.x,s[4]=Zo.x,s[8]=Pn.x,s[1]=Wi.y,s[5]=Zo.y,s[9]=Pn.y,s[2]=Wi.z,s[6]=Zo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],y=n[6],p=n[10],m=n[14],S=n[3],P=n[7],v=n[11],R=n[15],A=s[0],B=s[4],g=s[8],E=s[12],I=s[1],N=s[5],L=s[9],U=s[13],C=s[2],V=s[6],Z=s[10],G=s[14],Q=s[3],$=s[7],ot=s[11],lt=s[15];return r[0]=o*A+a*I+l*C+c*Q,r[4]=o*B+a*N+l*V+c*$,r[8]=o*g+a*L+l*Z+c*ot,r[12]=o*E+a*U+l*G+c*lt,r[1]=h*A+d*I+u*C+f*Q,r[5]=h*B+d*N+u*V+f*$,r[9]=h*g+d*L+u*Z+f*ot,r[13]=h*E+d*U+u*G+f*lt,r[2]=x*A+y*I+p*C+m*Q,r[6]=x*B+y*N+p*V+m*$,r[10]=x*g+y*L+p*Z+m*ot,r[14]=x*E+y*U+p*G+m*lt,r[3]=S*A+P*I+v*C+R*Q,r[7]=S*B+P*N+v*V+R*$,r[11]=S*g+P*L+v*Z+R*ot,r[15]=S*E+P*U+v*G+R*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],y=t[7],p=t[11],m=t[15],S=l*f-c*u,P=a*f-c*d,v=a*u-l*d,R=o*f-c*h,A=o*u-l*h,B=o*d-a*h;return e*(y*S-p*P+m*v)-n*(x*S-p*R+m*A)+s*(x*P-y*R+m*B)-r*(x*v-y*A+p*B)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],y=t[13],p=t[14],m=t[15],S=e*a-n*o,P=e*l-s*o,v=e*c-r*o,R=n*l-s*a,A=n*c-r*a,B=s*c-r*l,g=h*y-d*x,E=h*p-u*x,I=h*m-f*x,N=d*p-u*y,L=d*m-f*y,U=u*m-f*p,C=S*U-P*L+v*N+R*I-A*E+B*g;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/C;return t[0]=(a*U-l*L+c*N)*V,t[1]=(s*L-n*U-r*N)*V,t[2]=(y*B-p*A+m*R)*V,t[3]=(u*A-d*B-f*R)*V,t[4]=(l*I-o*U-c*E)*V,t[5]=(e*U-s*I+r*E)*V,t[6]=(p*v-x*B-m*P)*V,t[7]=(h*B-u*v+f*P)*V,t[8]=(o*L-a*I+c*g)*V,t[9]=(n*I-e*L-r*g)*V,t[10]=(x*A-y*v+m*S)*V,t[11]=(d*v-h*A-f*S)*V,t[12]=(a*E-o*N-l*g)*V,t[13]=(e*N-n*E+s*g)*V,t[14]=(y*P-x*R-p*S)*V,t[15]=(h*R-d*P+u*S)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,x=r*d,y=o*h,p=o*d,m=a*d,S=l*c,P=l*h,v=l*d,R=n.x,A=n.y,B=n.z;return s[0]=(1-(y+m))*R,s[1]=(f+v)*R,s[2]=(x-P)*R,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(u+m))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(x+P)*B,s[9]=(p-S)*B,s[10]=(1-(u+y))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let c=1/o,h=1/a,d=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(a===ei)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ir)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(a===ei)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===ir)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};rl.prototype.isMatrix4=!0;var ae=rl,Os=new O,Qn=new ae,nm=new O(0,0,0),im=new O(1,1,1),Wi=new O,Zo=new O,Pn=new O,Lu=new ae,Du=new xn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sm=0,Nu=new O,Hs=new xn,Ri=new ae,Jo=new O,Lr=new O,rm=new O,om=new xn,Uu=new O(1,0,0),Fu=new O(0,1,0),Bu=new O(0,0,1),Ou={type:"added"},am={type:"removed"},zs={type:"childadded",child:null},wc={type:"childremoved",child:null},on=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new hn,n=new xn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new ne}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Uu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Lr,Jo,this.up):Ri.lookAt(Jo,Lr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),zs.child=t,this.dispatchEvent(zs),zs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new O(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Qp(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ac(o,r,t+1/3),this.g=Ac(o,r,t),this.b=Ac(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ue.workingToColorSpace(gn.copy(this),t),Math.round(le(gn.r*255,0,255))*65536+Math.round(le(gn.g*255,0,255))*256+Math.round(le(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){ue.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL($o);let n=Mc(Xi.h,$o.h,e),s=Mc(Xi.s,$o.s,e),r=Mc(Xi.l,$o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ee;ee.NAMES=Wd;var Kr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ii=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new O,Ci=new O,Rc=new O,Pi=new O,ks=new O,Gs=new O,Hu=new O,Cc=new O,Pc=new O,Ic=new O,Lc=new Se,Dc=new Se,Nc=new Se,Di=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),Ci.subVectors(n,e),Rc.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ci),l=jn.dot(Rc),c=Ci.dot(Ci),h=Ci.dot(Rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Nc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lc,r.x),o.addScaledVector(Dc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),Ci.subVectors(t,e),jn.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ks.subVectors(s,n),Gs.subVectors(r,n),Cc.subVectors(t,n);let l=ks.dot(Cc),c=Gs.dot(Cc);if(l<=0&&c<=0)return e.copy(n);Pc.subVectors(t,s);let h=ks.dot(Pc),d=Gs.dot(Pc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ks,o);Ic.subVectors(t,r);let f=ks.dot(Ic),x=Gs.dot(Ic);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Gs,a);let p=h*x-f*d;if(p<=0&&d-h>=0&&f-x>=0)return Hu.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(Hu,a);let m=1/(p+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(ks,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Qo.subVectors(this.max,Dr),Vs.subVectors(t.a,Dr),Ws.subVectors(t.b,Dr),Xs.subVectors(t.c,Dr),qi.subVectors(Ws,Vs),Yi.subVectors(Xs,Ws),ds.subVectors(Vs,Xs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ds.z,ds.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ds.z,0,-ds.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ds.y,ds.x,0];return!Uc(e,Vs,Ws,Xs,Qo)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,Vs,Ws,Xs,Qo))?!1:(jo.crossVectors(qi,Yi),e=[jo.x,jo.y,jo.z],Uc(e,Vs,Ws,Xs,Qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new O,new O,new O,new O,new O,new O,new O,new O],ti=new O,Ko=new vi,Vs=new O,Ws=new O,Xs=new O,qi=new O,Yi=new O,ds=new O,Dr=new O,Qo=new O,jo=new O,fs=new O;function Uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fs.fromArray(i,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qe=new O,ta=new yt,cm=0,Be=class extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},hm=new vi,Nr=new O,Fc=new O,Fi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Fc)),this.expandByPoint(Nr.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},um=0,zn=new ae,Bc=new on,qs=new O,In=new vi,Ur=new vi,sn=new O,fe=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?jr:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(In.min,Ur.min),In.expandByPoint(sn),sn.addVectors(In.max,Ur.max),In.expandByPoint(sn)):(In.expandByPoint(Ur.min),In.expandByPoint(Ur.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(t,c),sn.add(qs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new O,l[g]=new O;let c=new O,h=new O,d=new O,u=new yt,f=new yt,x=new yt,y=new O,p=new O;function m(g,E,I){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),x.sub(u);let N=1/(f.x*x.y-x.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(N),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(N),a[g].add(y),a[E].add(y),a[I].add(y),l[g].add(p),l[E].add(p),l[I].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let g=0,E=S.length;g<E;++g){let I=S[g],N=I.start,L=I.count;for(let U=N,C=N+L;U<C;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let P=new O,v=new O,R=new O,A=new O;function B(g){R.fromBufferAttribute(s,g),A.copy(R);let E=a[g];P.copy(E),P.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(A,E);let N=v.dot(l[g])<0?-1:1;o.setXYZW(g,P.x,P.y,P.z,N)}for(let g=0,E=S.length;g<E;++g){let I=S[g],N=I.start,L=I.count;for(let U=N,C=N+L;U<C;U+=3)B(t.getX(U+0)),B(t.getX(U+1)),B(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)u[x++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new O,to=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oc=new O,dm=new O,fm=new ne,Ln=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oc.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pm=0,si=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=fr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oe=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Fr=new O,Zs=new O,Js=new O,$s=new yt,Br=new yt,Xd=new ae,ea=new O,Or=new O,na=new O,zu=new yt,Hc=new yt,ku=new yt,He=class extends on{constructor(t=new Oe){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fa(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new to(n,3,0,!1)),Ys.setAttribute("uv",new to(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ia(ea.set(-.5,-.5,0),Js,o,Zs,s,r),ia(Or.set(.5,-.5,0),Js,o,Zs,s,r),ia(na.set(.5,.5,0),Js,o,Zs,s,r),zu.set(0,0),Hc.set(1,0),ku.set(1,1);let a=t.ray.intersectTriangle(ea,Or,na,!1,Fr);if(a===null&&(ia(Or.set(-.5,.5,0),Js,o,Zs,s,r),Hc.set(0,1),a=t.ray.intersectTriangle(ea,na,Or,!1,Fr),a===null))return;let l=t.ray.origin.distanceTo(Fr);l<t.near||l>t.far||e.push({distance:l,point:Fr.clone(),uv:Di.getInterpolation(Fr,ea,Or,na,zu,Hc,ku,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ia(i,t,e,n,s,r){$s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*$s.x-s*$s.y,Br.y=s*$s.x+r*$s.y):Br.copy($s),i.copy(t),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(Xd)}var Li=new O,zc=new O,sa=new O,ra=new O,eo=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),h=Math.abs(1-o*o),d,u,f,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(sa,u),f}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,x=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,S=n.y-o.y,P=n.z-o.z,v=Math.abs(l),R=Math.abs(c),A=Math.abs(h),B,g,E,I,N,L,U,C,V,Z,G,Q;if(v>=R&&v>=A?(E=l,L=d,V=x,Q=m,l>=0?(B=c,g=h,I=u,N=f,U=y,C=p,Z=S,G=P):(B=h,g=c,I=f,N=u,U=p,C=y,Z=P,G=S)):R>=A?(E=c,L=u,V=y,Q=S,c>=0?(B=h,g=l,I=f,N=d,U=p,C=x,Z=P,G=m):(B=l,g=h,I=d,N=f,U=x,C=p,Z=m,G=P)):(E=h,L=f,V=p,Q=P,h>=0?(B=l,g=c,I=d,N=u,U=x,C=y,Z=m,G=S):(B=c,g=l,I=u,N=d,U=y,C=x,Z=S,G=m)),E===0)return null;let $=B/E,ot=g/E,lt=1/E,Et=I-$*L,ut=N-ot*L,St=U-$*V,D=C-ot*V,H=Z-$*Q,M=G-ot*Q,T=H*D-M*St,w=Et*M-ut*H,Y=St*ut-D*Et;if(s){if(T<0||w<0||Y<0)return null}else if((T<0||w<0||Y<0)&&(T>0||w>0||Y>0))return null;let W=T+w+Y;if(W===0)return null;let J=lt*(T*L+w*V+Y*Q);return(W>0?J<0:J>0)?null:this.at(J/W,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new ae,ps=new eo,oa=new Fi,Vu=new O,aa=new O,la=new O,ca=new O,kc=new O,ha=new O,Wu=new O,ua=new O,ht=class extends on{constructor(t=new fe,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(kc.fromBufferAttribute(d,t),o?ha.addScaledVector(kc,h):ha.addScaledVector(kc.sub(e),h))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(oa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(oa,Vu)===null||ps.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),P=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,R=P;v<R;v+=3){let A=a.getX(v),B=a.getX(v+1),g=a.getX(v+2);s=da(this,m,t,n,c,h,d,A,B,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let S=a.getX(p),P=a.getX(p+1),v=a.getX(p+2);s=da(this,o,t,n,c,h,d,S,P,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),P=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,R=P;v<R;v+=3){let A=v,B=v+1,g=v+2;s=da(this,m,t,n,c,h,d,A,B,g),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=x,m=y;p<m;p+=3){let S=p,P=p+1,v=p+2;s=da(this,o,t,n,c,h,d,S,P,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function mm(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===is,a),l===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,aa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=mm(i,t,e,n,aa,la,ca,Wu);if(h){let d=new O;Di.getBarycoord(Wu,aa,la,ca,d),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,d,new yt)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,d,new yt)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Di.getNormal(aa,la,ca,u.normal),h.face=u,h.barycoord=d}return h}var no=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,h=rn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var io=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ks=new ae,Xu=new ae,fa=[],qu=new vi,gm=new ae,Hr=new ht,zr=new Fi,ri=class extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),qu.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),zr.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),t.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Xu.multiplyMatrices(n,Ks),Hr.matrixWorld=Xu,Hr.raycast(t,fa);for(let o=0,a=fa.length;o<a;o++){let l=fa[o];l.instanceId=r,l.object=this,e.push(l)}fa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new no(new Float32Array(s*this.count),s,this.count,dl,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Fi,xm=new yt(.5,.5),pa=new O,ar=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],y=r[9],p=r[10],m=r[11],S=r[12],P=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,m-x,R-S).normalize(),s[1].setComponents(c+o,f+h,m+x,R+S).normalize(),s[2].setComponents(c+a,f+d,m+y,R+P).normalize(),s[3].setComponents(c-a,f-d,m-y,R-P).normalize(),n)s[4].setComponents(l,u,p,v).normalize(),s[5].setComponents(c-l,f-u,m-p,R-v).normalize();else if(s[4].setComponents(c-l,f-u,m-p,R-v).normalize(),e===ei)s[5].setComponents(c+l,f+u,m+p,R+v).normalize();else if(e===ir)s[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=xm.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ba=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new ae,Kc=new eo,ma=new Fi,ga=new O,lr=class extends on{constructor(t=new fe,e=new Ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Yu.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(Yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let x=u,y=f;x<y;x++){let p=c.getX(x);ga.fromBufferAttribute(d,p),Zu(ga,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=u,y=f;x<y;x++)ga.fromBufferAttribute(d,x),Zu(ga,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zu(i,t,e,n,s,r,o){let a=Kc.distanceSqToPoint(i);if(a<e){let l=new O;Kc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var so=class extends Sn{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ji=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends Sn{constructor(t,e,n=li,s,r,o,a=rn,l=rn,c,h=_i,d=1){if(h!==_i&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oa=class extends $i{constructor(t,e=li,n=ss,s,r,o=rn,a=rn,l,c=_i){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$t=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function x(y,p,m,S,P,v,R,A,B,g,E){let I=v/B,N=R/g,L=v/2,U=R/2,C=A/2,V=B+1,Z=g+1,G=0,Q=0,$=new O;for(let ot=0;ot<Z;ot++){let lt=ot*N-U;for(let Et=0;Et<V;Et++){let ut=Et*I-L;$[y]=ut*S,$[p]=lt*P,$[m]=C,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[m]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(Et/B),d.push(1-ot/g),G+=1}}for(let ot=0;ot<g;ot++)for(let lt=0;lt<B;lt++){let Et=u+lt+V*ot,ut=u+lt+V*(ot+1),St=u+(lt+1)+V*(ot+1),D=u+(lt+1)+V*ot;l.push(Et,ut,D),l.push(ut,St,D),Q+=6}a.addGroup(f,Q,E),f+=Q,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oo=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,x=n*2+r,y=s+1,p=new O,m=new O;for(let S=0;S<=x;S++){let P=0,v=0,R=0,A=0;if(S<=n){let E=S/n,I=E*Math.PI/2;v=-h-t*Math.cos(I),R=t*Math.sin(I),A=-t*Math.cos(I),P=E*d}else if(S<=n+r){let E=(S-n)/r;v=-h+E*e,R=t,A=0,P=d+E*u}else{let E=(S-n-r)/n,I=E*Math.PI/2;v=h+t*Math.sin(I),R=t*Math.cos(I),A=t*Math.sin(I),P=d+u+E*d}let B=Math.max(0,Math.min(1,P/f)),g=0;S===0?g=.5/s:S===x&&(g=-.5/s);for(let E=0;E<=s;E++){let I=E/s,N=I*Math.PI*2,L=Math.sin(N),U=Math.cos(N);m.x=-R*U,m.y=v,m.z=R*L,a.push(m.x,m.y,m.z),p.set(-R*U,A,R*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(I+g,B)}if(S>0){let E=(S-1)*y;for(let I=0;I<s;I++){let N=E+I,L=E+I+1,U=S*y+I,C=S*y+I+1;o.push(N,L,U),o.push(L,C,U)}}}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Dn=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ae=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,y=[],p=n/2,m=0;S(),o===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function S(){let v=new O,R=new O,A=0,B=(e-t)/n;for(let g=0;g<=r;g++){let E=[],I=g/r,N=I*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,C=U*l+a,V=Math.sin(C),Z=Math.cos(C);R.x=N*V,R.y=-I*n+p,R.z=N*Z,d.push(R.x,R.y,R.z),v.set(V,B,Z).normalize(),u.push(v.x,v.y,v.z),f.push(U,1-I),E.push(x++)}y.push(E)}for(let g=0;g<s;g++)for(let E=0;E<r;E++){let I=y[E][g],N=y[E+1][g],L=y[E+1][g+1],U=y[E][g+1];(t>0||E!==0)&&(h.push(I,N,U),A+=3),(e>0||E!==r-1)&&(h.push(N,L,U),A+=3)}c.addGroup(m,A,0),m+=A}function P(v){let R=x,A=new yt,B=new O,g=0,E=v===!0?t:e,I=v===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),x++;let N=x;for(let L=0;L<=s;L++){let C=L/s*l+a,V=Math.cos(C),Z=Math.sin(C);B.x=E*Z,B.y=p*I,B.z=E*V,d.push(B.x,B.y,B.z),u.push(0,I,0),A.x=V*.5+.5,A.y=Z*.5*I+.5,f.push(A.x,A.y),x++}for(let L=0;L<s;L++){let U=R+L,C=N+L;v===!0?h.push(C,C+1,U):h.push(C+1,C,U),g+=3}c.addGroup(m,g,v===!0?1:2),m+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ye=class i extends Ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new yt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new ae;for(let f=0;f<=t;f++){let x=f/t;s[f]=this.getTangentAt(x,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ha=class extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ju=new O,$u=new O,Gc=new Th,Vc=new Th,Wc=new Th,wn=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($u.subVectors(s[0],s[1]).add(s[0]),c=$u);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ju.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),x<1e-4&&(x=y),p<1e-4&&(p=y),Gc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,y,p),Vc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,y,p),Wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,y,p)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Gc.calc(l),Vc.calc(l),Wc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ku(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function _m(i,t){let e=1-i;return e*e*t}function ym(i,t){return 2*(1-i)*i*t}function vm(i,t){return i*i*t}function Gr(i,t,e,n){return _m(i,t)+ym(i,e)+vm(i,n)}function Mm(i,t){let e=1-i;return e*e*e*t}function Em(i,t){let e=1-i;return 3*e*e*i*t}function Sm(i,t){return 3*(1-i)*i*i*t}function bm(i,t){return i*i*i*t}function Vr(i,t,e,n,s){return Mm(i,t)+Em(i,e)+Sm(i,n)+bm(i,s)}var ao=class extends Nn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Nn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y),Vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends Nn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends Nn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Nn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends Nn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,s.x,r.x,o.x),Gr(t,s.y,r.y,o.y),Gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ku(a,l.x,c.x,h.x,d.x),Ku(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:wn,CubicBezierCurve:ao,CubicBezierCurve3:za,EllipseCurve:cr,LineCurve:lo,LineCurve3:ka,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),Va=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this}},xs=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new co(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ao(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new cr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends xs{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xs().fromJSON(s))}return this}};function Tm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Pm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],x=i[u+1];f<a&&(a=f),x<l&&(l=x),f>h&&(h=f),x>d&&(d=x)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return fo(r,o,e,a,l,c,0),o}function qd(i,t,e,n,s){let r;if(s===km(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qu(o/n|0,i[o],i[o+1],r);return r&&hr(r,r.next)&&(mo(r),r=r.next),r}function _s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Um(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Am(i,n,s,r):wm(i)){t.push(l.i,i.i,c.i),mo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Rm(_s(i),t),fo(i,t,e,n,s,r,2)):o===2&&Cm(i,t,e,n,s,r):fo(_s(i),t,e,n,s,r,1);break}}}function wm(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&kr(s,a,r,l,o,c,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Am(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),x=Math.min(h,d,u),y=Math.max(a,l,c),p=Math.max(h,d,u),m=Qc(f,x,t,e,n),S=Qc(y,p,t,e,n),P=i.prevZ,v=i.nextZ;for(;P&&P.z>=m&&v&&v.z<=S;){if(P.x>=f&&P.x<=y&&P.y>=x&&P.y<=p&&P!==s&&P!==o&&kr(a,h,l,d,c,u,P.x,P.y)&&Fe(P.prev,P,P.next)>=0||(P=P.prevZ,v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&kr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;P&&P.z>=m;){if(P.x>=f&&P.x<=y&&P.y>=x&&P.y<=p&&P!==s&&P!==o&&kr(a,h,l,d,c,u,P.x,P.y)&&Fe(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&kr(a,h,l,d,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!hr(n,s)&&Zd(n,e,e.next,s)&&po(n,s)&&po(s,n)&&(t.push(n.i,e.i,s.i),mo(e),mo(e.next),e=i=s),e=e.next}while(e!==i);return _s(e)}function Cm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Om(o,a)){let l=Jd(o,a);o=_s(o,o.next),l=_s(l,l.next),fo(o,t,e,n,s,r,0),fo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=qd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Bm(c))}s.sort(Im);for(let r=0;r<s.length;r++)e=Lm(s[r],e);return e}function Im(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lm(i,t){let e=Dm(i,t);if(!e)return t;let n=Jd(e,i);return _s(n,n.next),_s(e,e.next)}function Dm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(hr(i,e))return e;do{if(hr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);po(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Nm(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Nm(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Um(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fm(s)}function Fm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yd(i,t,e,n,s,r,o,a)}function Om(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hm(i,t)&&(po(i,t)&&po(t,i)&&zm(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||hr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function Zd(i,t,e,n){let s=_a(Fe(i,t,e)),r=_a(Fe(i,t,n)),o=_a(Fe(e,n,i)),a=_a(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&xa(i,e,t)||r===0&&xa(i,n,t)||o===0&&xa(e,i,n)||a===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function Hm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function po(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jd(i,t){let e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qu(i,t,e,n){let s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var th=class{static triangulate(t,e,n=2){return Tm(t,e,n)}},xi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ju(t),td(n,t);let o=t.length;e.forEach(ju);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,td(n,e[l]);let a=th.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ju(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kn=class i extends fe{constructor(t=new un([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Gm,P,v=!1,R,A,B,g;if(m){P=m.getSpacedPoints(h),v=!0,u=!1;let z=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,z),A=new O,B=new O,g=new O}u||(p=0,f=0,x=0,y=0);let E=a.extractPoints(c),I=E.shape,N=E.holes;if(!xi.isClockWise(I)){I=I.reverse();for(let z=0,X=N.length;z<X;z++){let j=N[z];xi.isClockWise(j)&&(N[z]=j.reverse())}}function U(z){let j=10000000000000001e-36,nt=z[0];for(let at=1;at<=z.length;at++){let xt=at%z.length,Mt=z[xt],Tt=Mt.x-nt.x,Ot=Mt.y-nt.y,q=Tt*Tt+Ot*Ot,de=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(nt.x),Math.abs(nt.y)),ie=j*de*de;if(q<=ie){z.splice(xt,1),at--;continue}nt=Mt}}U(I),N.forEach(U);let C=N.length,V=I;for(let z=0;z<C;z++){let X=N[z];I=I.concat(X)}function Z(z,X,j){return X||Qt("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(X,j)}let G=I.length;function Q(z,X,j){let nt,at,xt,Mt=z.x-X.x,Tt=z.y-X.y,Ot=j.x-z.x,q=j.y-z.y,de=Mt*Mt+Tt*Tt,ie=Mt*q-Tt*Ot;if(Math.abs(ie)>Number.EPSILON){let F=Math.sqrt(de),_=Math.sqrt(Ot*Ot+q*q),et=X.x-Tt/F,it=X.y+Mt/F,dt=j.x-q/_,bt=j.y+Ot/_,wt=((dt-et)*q-(bt-it)*Ot)/(Mt*q-Tt*Ot);nt=et+Mt*wt-z.x,at=it+Tt*wt-z.y;let pt=nt*nt+at*at;if(pt<=2)return new yt(nt,at);xt=Math.sqrt(pt/2)}else{let F=!1;Mt>Number.EPSILON?Ot>Number.EPSILON&&(F=!0):Mt<-Number.EPSILON?Ot<-Number.EPSILON&&(F=!0):Math.sign(Tt)===Math.sign(q)&&(F=!0),F?(nt=-Tt,at=Mt,xt=Math.sqrt(de)):(nt=Mt,at=Tt,xt=Math.sqrt(de/2))}return new yt(nt/xt,at/xt)}let $=[];for(let z=0,X=V.length,j=X-1,nt=z+1;z<X;z++,j++,nt++)j===X&&(j=0),nt===X&&(nt=0),$[z]=Q(V[z],V[j],V[nt]);let ot=[],lt,Et=$.concat();for(let z=0,X=C;z<X;z++){let j=N[z];lt=[];for(let nt=0,at=j.length,xt=at-1,Mt=nt+1;nt<at;nt++,xt++,Mt++)xt===at&&(xt=0),Mt===at&&(Mt=0),lt[nt]=Q(j[nt],j[xt],j[Mt]);ot.push(lt),Et=Et.concat(lt)}let ut;if(p===0)ut=xi.triangulateShape(V,N);else{let z=[],X=[];for(let j=0;j<p;j++){let nt=j/p,at=f*Math.cos(nt*Math.PI/2),xt=x*Math.sin(nt*Math.PI/2)+y;for(let Mt=0,Tt=V.length;Mt<Tt;Mt++){let Ot=Z(V[Mt],$[Mt],xt);w(Ot.x,Ot.y,-at),nt===0&&z.push(Ot)}for(let Mt=0,Tt=C;Mt<Tt;Mt++){let Ot=N[Mt];lt=ot[Mt];let q=[];for(let de=0,ie=Ot.length;de<ie;de++){let F=Z(Ot[de],lt[de],xt);w(F.x,F.y,-at),nt===0&&q.push(F)}nt===0&&X.push(q)}}ut=xi.triangulateShape(z,X)}let St=ut.length,D=x+y;for(let z=0;z<G;z++){let X=u?Z(I[z],Et[z],D):I[z];v?(B.copy(R.normals[0]).multiplyScalar(X.x),A.copy(R.binormals[0]).multiplyScalar(X.y),g.copy(P[0]).add(B).add(A),w(g.x,g.y,g.z)):w(X.x,X.y,0)}for(let z=1;z<=h;z++)for(let X=0;X<G;X++){let j=u?Z(I[X],Et[X],D):I[X];v?(B.copy(R.normals[z]).multiplyScalar(j.x),A.copy(R.binormals[z]).multiplyScalar(j.y),g.copy(P[z]).add(B).add(A),w(g.x,g.y,g.z)):w(j.x,j.y,d/h*z)}for(let z=p-1;z>=0;z--){let X=z/p,j=f*Math.cos(X*Math.PI/2),nt=x*Math.sin(X*Math.PI/2)+y;for(let at=0,xt=V.length;at<xt;at++){let Mt=Z(V[at],$[at],nt);w(Mt.x,Mt.y,d+j)}for(let at=0,xt=N.length;at<xt;at++){let Mt=N[at];lt=ot[at];for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){let q=Z(Mt[Tt],lt[Tt],nt);v?w(q.x,q.y+P[h-1].y,P[h-1].x+j):w(q.x,q.y,d+j)}}}H(),M();function H(){let z=s.length/3;if(u){let X=0,j=G*X;for(let nt=0;nt<St;nt++){let at=ut[nt];Y(at[2]+j,at[1]+j,at[0]+j)}X=h+p*2,j=G*X;for(let nt=0;nt<St;nt++){let at=ut[nt];Y(at[0]+j,at[1]+j,at[2]+j)}}else{for(let X=0;X<St;X++){let j=ut[X];Y(j[2],j[1],j[0])}for(let X=0;X<St;X++){let j=ut[X];Y(j[0]+G*h,j[1]+G*h,j[2]+G*h)}}n.addGroup(z,s.length/3-z,0)}function M(){let z=s.length/3,X=0;T(V,X),X+=V.length;for(let j=0,nt=N.length;j<nt;j++){let at=N[j];T(at,X),X+=at.length}n.addGroup(z,s.length/3-z,1)}function T(z,X){let j=z.length;for(;--j>=0;){let nt=j,at=j-1;at<0&&(at=z.length-1);for(let xt=0,Mt=h+p*2;xt<Mt;xt++){let Tt=G*xt,Ot=G*(xt+1),q=X+nt+Tt,de=X+at+Tt,ie=X+at+Ot,F=X+nt+Ot;W(q,de,ie,F)}}}function w(z,X,j){l.push(z),l.push(X),l.push(j)}function Y(z,X,j){J(z),J(X),J(j);let nt=s.length/3,at=S.generateTopUV(n,s,nt-3,nt-2,nt-1);k(at[0]),k(at[1]),k(at[2])}function W(z,X,j,nt){J(z),J(X),J(nt),J(X),J(j),J(nt);let at=s.length/3,xt=S.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);k(xt[0]),k(xt[1]),k(xt[3]),k(xt[1]),k(xt[2]),k(xt[3])}function J(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function k(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ga[s.type]().fromJSON(s)),new i(n,t.options)}},Gm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,l),new yt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],x=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new yt(o,1-l),new yt(c,1-d),new yt(u,1-x),new yt(y,1-m)]:[new yt(a,1-l),new yt(h,1-d),new yt(f,1-x),new yt(p,1-m)]}};function Vm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ki=class i extends fe{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new yt,f=new O,x=new O,y=new O,p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let S=0;S<=e;S++){let P=n+S*h*s,v=Math.sin(P),R=Math.cos(P);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*R,o.push(d.x,d.y,d.z),u.x=S/e,u.y=A/(t.length-1),a.push(u.x,u.y);let B=l[3*A+0]*v,g=l[3*A+1],E=l[3*A+0]*R;c.push(B,g,E)}}for(let S=0;S<e;S++)for(let P=0;P<t.length-1;P++){let v=P+S*t.length,R=v,A=v+t.length,B=v+t.length+1,g=v+1;r.push(R,A,g),r.push(B,g,A)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ze=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],x=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*u-o;for(let P=0;P<c;P++){let v=P*d-r;x.push(v,-S,0),y.push(0,0,1),p.push(P/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let P=S+c*m,v=S+c*(m+1),R=S+1+c*(m+1),A=S+1+c*m;f.push(P,v,A),f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qi=class i extends fe{constructor(t=new un([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,x=u.holes;xi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=x.length;p<m;p++){let S=x[p];xi.isClockWise(S)===!0&&(x[p]=S.reverse())}let y=xi.triangulateShape(f,x);for(let p=0,m=x.length;p<m;p++){let S=x[p];f=f.concat(S)}for(let p=0,m=f.length;p<m;p++){let S=f[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=y.length;p<m;p++){let S=y[p],P=S[0]+d,v=S[1]+d,R=S[2]+d;n.push(P,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Wm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var We=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,u=new O,f=[],x=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],P=m/n,v=o+P*a,R=t*Math.cos(v),A=Math.sqrt(t*t-R*R),B=0;m===0&&o===0?B=.5/e:m===n&&l===Math.PI&&(B=-.5/e);for(let g=0;g<=e;g++){let E=g/e,I=s+E*r;d.x=-A*Math.cos(I),d.y=R,d.z=A*Math.sin(I),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(E+B,1-P),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let P=h[m][S+1],v=h[m][S],R=h[m+1][S],A=h[m+1][S+1];(m!==0||o>0)&&f.push(P,v,A),(m!==n-1||l<Math.PI)&&f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new O,f=new O,x=new O;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(S),f.y=(t+e*Math.cos(p))*Math.sin(S),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,S=(s+1)*(y-1)+p-1,P=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,S,v),l.push(S,P,v)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var oi=class i extends fe{constructor(t=new ho(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new yt,h=new O,d=[],u=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function y(){for(let P=0;P<e;P++)p(P);p(r===!1?e:0),S(),m()}function p(P){h=t.getPointAt(P/e,h);let v=o.normals[P],R=o.binormals[P];for(let A=0;A<=s;A++){let B=A/s*Math.PI*2,g=Math.sin(B),E=-Math.cos(B);l.x=E*v.x+g*R.x,l.y=E*v.y+g*R.y,l.z=E*v.z+g*R.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let P=1;P<=e;P++)for(let v=1;v<=s;v++){let R=(s+1)*(P-1)+(v-1),A=(s+1)*P+(v-1),B=(s+1)*P+v,g=(s+1)*(P-1)+v;x.push(R,A,g),x.push(A,B,g)}}function S(){for(let P=0;P<=e;P++)for(let v=0;v<=s;v++)c.x=P/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ed(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function yn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function ed(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var $d={clone:bs,merge:yn},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ji=class extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ee(16777215),this.specular=new ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bt=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,a=2*e-n;break;case $c:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=t,l=2*n-e;break;case $c:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,p=y*x,m=-u*p+2*u*y-u*x,S=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,P=(-1-f)*p+(1.5+f)*y+.5*x,v=f*p-f*y;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+S*o[c+R]+P*o[l+R]+v*o[d+R];return r}},Za=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends ts{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),y=1-x;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*x;return r}let u=a*2,f=t-1;for(let x=0;x!==a;++x){let y=o[c+x],p=o[l+x],m=f*u+x*2,S=d[m],P=d[m+1],v=t*u+x*2,R=h[v],A=h[v+1],B=Jm(n,e,S,R,s);r[x]=Kd(B,y,P,A,p)}return r}};function Kd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Kd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Zm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xc(t.settings)&&(n.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case Yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xc(this.settings)&&(nd(this.settings.inTangents,t),nd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Kp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let y=e[d+x];if(y!==e[u+x]||y!==e[f+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ia;var es=class extends Un{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Wr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="color";var Qa=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Un{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Wr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new el,nl=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vs=class extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qc=new ae,id=new O,sd=new O,xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ir||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ya=new O,va=new xn,pi=new O,_o=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ya,va,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ya,va,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new O,rd=new yt,od=new yt,Je=class extends _o{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,rd,od),e.subVectors(od,rd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eh=class extends xo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},ke=class extends ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ur=class extends _o{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nh=class extends xo{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Bi=class extends ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var js=-90,tr=1,il=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(js,tr,t,e);s.layers=this.layers,this.add(s);let r=new Je(js,tr,t,e);r.layers=this.layers,this.add(r);let o=new Je(js,tr,t,e);o.layers=this.layers,this.add(o);let a=new Je(js,tr,t,e);a.layers=this.layers,this.add(a);let l=new Je(js,tr,t,e);l.layers=this.layers,this.add(l);let c=new Je(js,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ah="\\[\\]\\.:\\/",$m=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Km="[^"+Ah.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",Rh),jm=/(WCOD+)?/.source.replace("WCOD",Km),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),n0=new RegExp("^"+Qm+jm+t0+e0+"$"),i0=["material","materials","bones","map"],ih=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($m,"")}static parseTrackName(t){let e=n0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=ih;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uv=new Float32Array(1);var Nh=class Nh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Nh.prototype.isMatrix2=!0;var sh=Nh;function Ch(i,t,e,n){let s=s0(n);switch(e){case Mh:return i*t;case dl:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:case yl:return Math.max(i,16)*Math.max(t,8)/4;case gl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case vl:case Ml:case Sl:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Ro:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case kl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Co:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s0(i){switch(i){case Rn:case xh:return{byteLength:1,components:1};case pr:case _h:case Fn:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case li:case cl:case Gn:return{byteLength:4,components:1};case yh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function o0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j0=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`uniform sampler2D dfgLUT;
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:_0,bsdfs:y0,iridescence_fragment:v0,bumpmap_pars_fragment:M0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:T0,color_fragment:w0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:B0,colorspace_pars_fragment:O0,envmap_fragment:H0,envmap_common_pars_fragment:z0,envmap_pars_fragment:k0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:j0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:K0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:yg,morphinstance_vertex:vg,morphcolor_vertex:Mg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Sg,morphtarget_vertex:bg,normal_fragment_begin:Tg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ng,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:Og,dithering_fragment:Hg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:$g,specularmap_fragment:Kg,specularmap_pars_fragment:Qg,tonemapping_fragment:jg,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:dx,depth_vert:fx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:xx,equirect_frag:_x,linedashed_vert:yx,linedashed_frag:vx,meshbasic_vert:Mx,meshbasic_frag:Ex,meshlambert_vert:Sx,meshlambert_frag:bx,meshmatcap_vert:Tx,meshmatcap_frag:wx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Fx,shadow_vert:Bx,shadow_frag:Ox,sprite_vert:Hx,sprite_frag:zx},Lt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Si={basic:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ee(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:yn([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:yn([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:yn([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:yn([Lt.lights,Lt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Zl={r:0,b:0,g:0},kx=new ae,Ef=new ne;Ef.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t,e,n,s,r){let o=new ee(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){let v=S.backgroundBlurriness>0;P=t.get(P,v)}return P}function x(S){let P=!1,v=f(S);v===null?p(o,a):v&&v.isColor&&(p(v,1),P=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,P){let v=f(P);v&&(v.isCubeTexture||v.mapping===Eo)?(c===void 0&&(c=new ht(new $t(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:bs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(P.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=ue.getTransfer(v.colorSpace)!==Ee,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ht(new ze(2,2),new $e({name:"BackgroundMaterial",uniforms:bs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ue.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,P){S.getRGB(Zl,wh(i)),e.buffers.color.setClear(Zl.r,Zl.g,Zl.b,P,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,P=1){o.set(S),a=P,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:x,addToRenderList:y,dispose:m}}function Vx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(N,L,U,C,V){let Z=!1,G=d(N,C,U,L);r!==G&&(r=G,c(r.object)),Z=f(N,C,U,V),Z&&x(N,C,U,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(N,L,U,C),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,L,U,C){let V=C.wireframe===!0,Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);let G=N.isInstancedMesh===!0?N.id:0,Q=Z[G];Q===void 0&&(Q={},Z[G]=Q);let $=Q[U.id];$===void 0&&($={},Q[U.id]=$);let ot=$[V];return ot===void 0&&(ot=u(l()),$[V]=ot),ot}function u(N){let L=[],U=[],C=[];for(let V=0;V<e;V++)L[V]=0,U[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,L,U,C){let V=r.attributes,Z=L.attributes,G=0,Q=U.getAttributes();for(let $ in Q)if(Q[$].location>=0){let lt=V[$],Et=Z[$];if(Et===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Et=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Et=N.instanceColor)),lt===void 0||lt.attribute!==Et||Et&&lt.data!==Et.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function x(N,L,U,C){let V={},Z=L.attributes,G=0,Q=U.getAttributes();for(let $ in Q)if(Q[$].location>=0){let lt=Z[$];lt===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(lt=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(lt=N.instanceColor));let Et={};Et.attribute=lt,lt&&lt.data&&(Et.data=lt.data),V[$]=Et,G++}r.attributes=V,r.attributesNum=G,r.index=C}function y(){let N=r.newAttributes;for(let L=0,U=N.length;L<U;L++)N[L]=0}function p(N){m(N,0)}function m(N,L){let U=r.newAttributes,C=r.enabledAttributes,V=r.attributeDivisors;U[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),V[N]!==L&&(i.vertexAttribDivisor(N,L),V[N]=L)}function S(){let N=r.newAttributes,L=r.enabledAttributes;for(let U=0,C=L.length;U<C;U++)L[U]!==N[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function P(N,L,U,C,V,Z,G){G===!0?i.vertexAttribIPointer(N,L,U,V,Z):i.vertexAttribPointer(N,L,U,C,V,Z)}function v(N,L,U,C){y();let V=C.attributes,Z=U.getAttributes(),G=L.defaultAttributeValues;for(let Q in Z){let $=Z[Q];if($.location>=0){let ot=V[Q];if(ot===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){let lt=ot.normalized,Et=ot.itemSize,ut=t.get(ot);if(ut===void 0)continue;let St=ut.buffer,D=ut.type,H=ut.bytesPerElement,M=D===i.INT||D===i.UNSIGNED_INT||ot.gpuType===cl;if(ot.isInterleavedBufferAttribute){let T=ot.data,w=T.stride,Y=ot.offset;if(T.isInstancedInterleavedBuffer){for(let W=0;W<$.locationSize;W++)m($.location+W,T.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let W=0;W<$.locationSize;W++)p($.location+W);i.bindBuffer(i.ARRAY_BUFFER,St);for(let W=0;W<$.locationSize;W++)P($.location+W,Et/$.locationSize,D,lt,w*H,(Y+Et/$.locationSize*W)*H,M)}else{if(ot.isInstancedBufferAttribute){for(let T=0;T<$.locationSize;T++)m($.location+T,ot.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let T=0;T<$.locationSize;T++)p($.location+T);i.bindBuffer(i.ARRAY_BUFFER,St);for(let T=0;T<$.locationSize;T++)P($.location+T,Et/$.locationSize,D,lt,Et*H,Et/$.locationSize*T*H,M)}}else if(G!==void 0){let lt=G[Q];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv($.location,lt);break;case 3:i.vertexAttrib3fv($.location,lt);break;case 4:i.vertexAttrib4fv($.location,lt);break;default:i.vertexAttrib1fv($.location,lt)}}}}S()}function R(){E();for(let N in n){let L=n[N];for(let U in L){let C=L[U];for(let V in C){let Z=C[V];for(let G in Z)h(Z[G].object),delete Z[G];delete C[V]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let U in L){let C=L[U];for(let V in C){let Z=C[V];for(let G in Z)h(Z[G].object),delete Z[G];delete C[V]}}delete n[N.id]}function B(N){for(let L in n){let U=n[L];for(let C in U){let V=U[C];if(V[N.id]===void 0)continue;let Z=V[N.id];for(let G in Z)h(Z[G].object),delete Z[G];delete V[N.id]}}}function g(N){for(let L in n){let U=n[L],C=N.isInstancedMesh===!0?N.id:0,V=U[C];if(V!==void 0){for(let Z in V){let G=V[Z];for(let Q in G)h(G[Q].object),delete G[Q];delete V[Z]}delete U[C],Object.keys(U).length===0&&delete n[L]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let B=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(B){return!(B!==Vn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){let g=B===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Rn&&B!==Gn&&!g&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:v,maxSamples:R,samples:A}}function qx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,P=S*4,v=m.clippingState||null;l.value=v,v=h(x,u,P,f);for(let R=0;R!==P;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let m=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let P=0,v=f;P!==y;++P,v+=4)o.copy(d[P]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var xr=4,Yx=6,Zx=20,Jx=256,Io=new ur,jd=new ee,Uh=null,Fh=0,Bh=0,Oh=!1,$x=new O,Ts=new O,$l=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=$x}=r;Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Fh,Bh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Fn,format:Vn,colorSpace:Xr,depthBuffer:!1},s=tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kx(r)),this._blurMaterial=jx(r,t,e),this._ggxMaterial=Qx(r,t,e)}return s}_compileMaterial(t){let e=new ht(new fe,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(jd),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new $t,new ye({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(jd),m=!0);for(let P=0;P<6;P++){let v=P%3;v===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):v===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let R=this._cubeSize;gr(s,v*R,P>2?R:0,R,R),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:x}=this,y=this._sizeLods[n],p=3*y*(n>x-xr?n-x+xr:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=x-e,gr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,Io),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,gr(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,Io)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-xr?s-this._lodMax+xr:0),u=4*(this._cubeSize-h);gr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Io)}};function Kx(i){let t=[],e=[],n=i,s=i-xr+1+Yx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,x=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,P=m>2?0:-1,v=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(v,f*u*m);for(let R=0;R<u;R++){let A=h[R*2]*2-1,B=h[R*2+1]*2-1;m===0?Ts.set(1,B,A):m===1?Ts.set(-A,1,-B):m===2?Ts.set(-A,B,1):m===3?Ts.set(-1,B,-A):m===4?Ts.set(-A,-1,B):Ts.set(A,B,-1),Ts.toArray(y,(m*u+R)*f)}}let p=new fe;p.setAttribute("position",new Be(x,f)),p.setAttribute("outputDirection",new Be(y,f)),e.push(new ht(p,null)),n>xr&&n--}return{lodMeshes:e,sizeLods:t}}function tf(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qx(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jx(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ef(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nf(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jl(){return`

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
			`},s=new $t(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Mi});r.uniforms.tEquirect.value=e;let o=new ht(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=cn),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function t_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ol||f===al)if(t.has(u)){let x=t.get(u).texture;return a(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Kl(x.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,x=f===ol||f===al,y=f===ss||f===Ss;if(x||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new $l(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return x&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new $l(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ol?u.mapping=ss:f===al&&(u.mapping=Ss),u}function l(u){let f=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function e_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function n_(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,x=d.attributes.position,y=0;if(x===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let P=0,v=S.length;P<v;P+=3){let R=S[P+0],A=S[P+1],B=S[P+2];u.push(R,A,A,B,B,R)}}else{let S=x.array;y=x.version;for(let P=0,v=S.length/3-1;P<v;P+=3){let R=P+0,A=P+1,B=P+2;u.push(R,A,A,B,B,R)}}let p=new(x.count>=65535?jr:Qr)(u,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function i_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function s_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function r_(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],P=0;f===!0&&(P=1),x===!0&&(P=2),y===!0&&(P=3);let v=a.attributes.position.count*P,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*R*4*d),B=new Jr(A,v,R,d);B.type=Gn,B.needsUpdate=!0;let g=P*4;for(let I=0;I<d;I++){let N=p[I],L=m[I],U=S[I],C=v*R*4*I;for(let V=0;V<N.count;V++){let Z=V*g;f===!0&&(s.fromBufferAttribute(N,V),A[C+Z+0]=s.x,A[C+Z+1]=s.y,A[C+Z+2]=s.z,A[C+Z+3]=0),x===!0&&(s.fromBufferAttribute(L,V),A[C+Z+4]=s.x,A[C+Z+5]=s.y,A[C+Z+6]=s.z,A[C+Z+7]=0),y===!0&&(s.fromBufferAttribute(U,V),A[C+Z+8]=s.x,A[C+Z+9]=s.y,A[C+Z+10]=s.z,A[C+Z+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:B,size:new yt(v,R)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function o_(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var a_={[hh]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function l_(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ht(c,h),u=new ur(-1,1,1,-1,0,1),f=null,x=null,y=!1,p,m=null,S=[],P=!1;this.setSize=function(v,R){o.setSize(v,R),a!==null&&a.setSize(v,R),l!==null&&l.setSize(v,R);for(let A=0;A<S.length;A++){let B=S[A];B.setSize&&B.setSize(v,R)}},this.setEffects=function(v){S=v,P=S.length>0&&S[0].isRenderPass===!0;let R=o.width,A=o.height;S.length>0&&a===null&&(a=new _n(R,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(R,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<S.length;B++){let g=S[B];g.setSize&&g.setSize(R,A)}},this.begin=function(v,R){if(y||v.toneMapping===ai&&S.length===0)return!1;if(m=R,R!==null){let A=R.width,B=R.height;(o.width!==A||o.height!==B)&&this.setSize(A,B)}return P===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=ai,!0},this.hasRenderPass=function(){return P},this.end=function(v,R){v.toneMapping=p,y=!0;let A=o,B=a;for(let g=0;g<S.length;g++){let E=S[g];E.enabled!==!1&&(E.render(v,B,A,R),E.needsSwap!==!1&&(A=B,B=B===a?l:a))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,h.defines={},ue.getTransfer(f)===Ee&&(h.defines.SRGB_TRANSFER="");let g=a_[x];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(m),v.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sf=new Sn,kh=new $i(1,1),bf=new Jr,Tf=new Ua,wf=new so,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tc(i,t){let e=rf[t];e===void 0&&(e=new Int32Array(t),rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function f_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),je(e,n)}}function p_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;af.set(n),i.uniformMatrix3fv(this.addr,!1,af),je(e,n)}}function m_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Qe(e,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),je(e,n)}}function g_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kh.compareFunction=e.isReversedDepthBuffer()?Yl:ql,r=kh):r=Sf,e.setTexture2D(t||r,s)}function T_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tf,s)}function w_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wf,s)}function A_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bf,s)}function R_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return M_;case 36295:return E_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return A_}}function C_(i,t){i.uniform1fv(this.addr,t)}function P_(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function I_(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function L_(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function D_(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N_(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function U_(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function F_(i,t){i.uniform1iv(this.addr,t)}function B_(i,t){i.uniform2iv(this.addr,t)}function O_(i,t){i.uniform3iv(this.addr,t)}function H_(i,t){i.uniform4iv(this.addr,t)}function z_(i,t){i.uniform1uiv(this.addr,t)}function k_(i,t){i.uniform2uiv(this.addr,t)}function G_(i,t){i.uniform3uiv(this.addr,t)}function V_(i,t){i.uniform4uiv(this.addr,t)}function W_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=kh:o=Sf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function X_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tf,r[o])}function q_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wf,r[o])}function Y_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bf,r[o])}function Z_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return O_;case 35669:case 35673:return H_;case 5125:return z_;case 36294:return k_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}var Gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R_(e.type)}},Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z_(e.type)}},Wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function J_(i,t,e){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cf(e,c===void 0?new Gh(a,i,t):new Vh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Wh(a),cf(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);J_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $_=37297,K_=0;function Q_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var uf=new ne;function j_(i){ue._getMatrix(uf,ue.workingColorSpace,i);let t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(t),a)}else return r}function ty(i,t){let e=j_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ey={[hh]:"Linear",[uh]:"Reinhard",[dh]:"Cineon",[Mo]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function ny(i,t){let e=ey[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jl=new O;function iy(){ue.getLuminanceCoefficients(Jl);let i=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function ry(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Do(i){return i!==""}function ff(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(ay,cy)}var ly=new Map;function cy(i,t){let e=oe[t];if(e===void 0){let n=ly.get(t);if(n!==void 0)e=oe[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xh(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(hy,uy)}function uy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var dy={[Ms]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function fy(i){return dy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var py={[ss]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function my(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":py[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gy={[Ss]:"ENVMAP_MODE_REFRACTION"};function xy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _y={[vo]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function yy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_y[i.combine]||"ENVMAP_BLENDING_NONE"}function vy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function My(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fy(e),c=my(e),h=xy(e),d=yy(e),u=vy(e),f=sy(e),x=ry(r),y=s.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Do).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Do).join(`
`),m.length>0&&(m+=`
`)):(p=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),m=[gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?oe.tonemapping_pars_fragment:"",e.toneMapping!==ai?ny("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ty("linearToOutputTexel",e.outputColorSpace),iy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=Xh(o),o=ff(o,e),o=pf(o,e),a=Xh(a),a=ff(a,e),a=pf(a,e),o=mf(o),a=mf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let P=S+p+o,v=S+m+a,R=hf(s,s.VERTEX_SHADER,P),A=hf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,R),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function B(N){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(R)||"",C=s.getShaderInfoLog(A)||"",V=L.trim(),Z=U.trim(),G=C.trim(),Q=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,A);else{let ot=df(s,R,"vertex"),lt=df(s,A,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+ot+`
`+lt)}else V!==""?jt("WebGLProgram: Program Info Log:",V):(Z===""||G==="")&&($=!1);$&&(N.diagnostics={runnable:Q,programLog:V,vertexShader:{log:Z,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(R),s.deleteShader(A),g=new _r(s,y),E=oy(s,y)}let g;this.getUniforms=function(){return g===void 0&&B(this),g};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,$_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=A,this}var Ey=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yh(t),e.set(t,n)),n}},Yh=class{constructor(t){this.id=Ey++,this.code=t,this.usedTimes=0}};function Sy(i){return i===as||i===Ro||i===Co}function by(i,t,e,n,s,r){let o=new $r,a=new qh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,E,I,N,L,U){let C=N.fog,V=L.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Q=t.get(g.envMap||Z,G),$=Q&&Q.mapping===Eo?Q.image.height:null,ot=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&jt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Et=lt!==void 0?lt.length:0,ut=0;V.morphAttributes.position!==void 0&&(ut=1),V.morphAttributes.normal!==void 0&&(ut=2),V.morphAttributes.color!==void 0&&(ut=3);let St,D,H,M;if(ot){let Ie=Si[ot];St=Ie.vertexShader,D=Ie.fragmentShader}else{St=g.vertexShader,D=g.fragmentShader;let Ie=a.getVertexShaderStage(g),ve=a.getFragmentShaderStage(g);a.update(g,Ie,ve),H=Ie.id,M=ve.id}let T=i.getRenderTarget(),w=i.state.buffers.depth.getReversed(),Y=L.isInstancedMesh===!0,W=L.isBatchedMesh===!0,J=!!g.map,k=!!g.matcap,z=!!Q,X=!!g.aoMap,j=!!g.lightMap,nt=!!g.bumpMap&&g.wireframe===!1,at=!!g.normalMap,xt=!!g.displacementMap,Mt=!!g.emissiveMap,Tt=!!g.metalnessMap,Ot=!!g.roughnessMap,q=g.anisotropy>0,de=g.clearcoat>0,ie=g.dispersion>0,F=g.retroreflectivity>0,_=g.iridescence>0,et=g.sheen>0,it=g.transmission>0,dt=q&&!!g.anisotropyMap,bt=de&&!!g.clearcoatMap,wt=de&&!!g.clearcoatNormalMap,pt=de&&!!g.clearcoatRoughnessMap,gt=_&&!!g.iridescenceMap,At=_&&!!g.iridescenceThicknessMap,qt=et&&!!g.sheenColorMap,It=et&&!!g.sheenRoughnessMap,Rt=!!g.specularMap,Yt=!!g.specularColorMap,Kt=!!g.specularIntensityMap,se=it&&!!g.transmissionMap,tt=it&&!!g.thicknessMap,Ct=!!g.gradientMap,mt=!!g.alphaMap,Pt=g.alphaTest>0,Ft=!!g.alphaHash,_t=!!g.extensions,Zt=ai;g.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Vt={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:St,fragmentShader:D,defines:g.defines,customVertexShaderID:H,customFragmentShaderID:M,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:W,batchingColor:W&&L._colorsTexture!==null,instancing:Y,instancingColor:Y&&L.instanceColor!==null,instancingMorph:Y&&L.morphTexture!==null,outputColorSpace:T===null?i.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:J,matcap:k,envMap:z,envMapMode:z&&Q.mapping,envMapCubeUVHeight:$,aoMap:X,lightMap:j,bumpMap:nt,normalMap:at,displacementMap:xt,emissiveMap:Mt,normalMapObjectSpace:at&&g.normalMapType===Ld,normalMapTangentSpace:at&&g.normalMapType===Po,packedNormalMap:at&&g.normalMapType===Po&&Sy(g.normalMap.format),metalnessMap:Tt,roughnessMap:Ot,anisotropy:q,anisotropyMap:dt,clearcoat:de,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:pt,dispersion:ie,retroreflection:F,iridescence:_,iridescenceMap:gt,iridescenceThicknessMap:At,sheen:et,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:Yt,specularIntensityMap:Kt,transmission:it,transmissionMap:se,thicknessMap:tt,gradientMap:Ct,opaque:g.transparent===!1&&g.blending===fr&&g.alphaToCoverage===!1,alphaMap:mt,alphaTest:Pt,alphaHash:Ft,combine:g.combine,mapUv:J&&x(g.map.channel),aoMapUv:X&&x(g.aoMap.channel),lightMapUv:j&&x(g.lightMap.channel),bumpMapUv:nt&&x(g.bumpMap.channel),normalMapUv:at&&x(g.normalMap.channel),displacementMapUv:xt&&x(g.displacementMap.channel),emissiveMapUv:Mt&&x(g.emissiveMap.channel),metalnessMapUv:Tt&&x(g.metalnessMap.channel),roughnessMapUv:Ot&&x(g.roughnessMap.channel),anisotropyMapUv:dt&&x(g.anisotropyMap.channel),clearcoatMapUv:bt&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(g.sheenRoughnessMap.channel),specularMapUv:Rt&&x(g.specularMap.channel),specularColorMapUv:Yt&&x(g.specularColorMap.channel),specularIntensityMapUv:Kt&&x(g.specularIntensityMap.channel),transmissionMapUv:se&&x(g.transmissionMap.channel),thicknessMapUv:tt&&x(g.thicknessMap.channel),alphaMapUv:mt&&x(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(at||q),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(J||mt),fog:!!C,useFog:g.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&at===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:w,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:ut,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:J&&g.map.isVideoTexture===!0&&ue.getTransfer(g.map.colorSpace)===Ee,decodeVideoTextureEmissive:Mt&&g.emissiveMap.isVideoTexture===!0&&ue.getTransfer(g.emissiveMap.colorSpace)===Ee,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Pe,flipSided:g.side===Ke,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:_t&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&g.extensions.multiDraw===!0||W)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(g){let E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(let I in g.defines)E.push(I),E.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(m(E,g),S(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function m(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function S(g,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function P(g){let E=f[g.type],I;if(E){let N=Si[E];I=$d.clone(N.uniforms)}else I=g.uniforms;return I}function v(g,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new My(i,E,g,s),c.push(I),h.set(E,I)),I}function R(g){if(--g.usedTimes===0){let E=c.indexOf(g);c[E]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){a.remove(g)}function B(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:P,acquireProgram:v,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:B}}function Ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,x,y,p,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=x,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=p,S.group=m),t++,S}function l(u,f,x,y,p,m,S){S.reversedDepth===!0&&(p=-p);let P=a(u,f,x,y,p,m);x.transmission>0?n.push(P):x.transparent===!0?s.push(P):e.push(P)}function c(u,f,x,y,p,m){let S=a(u,f,x,y,p,m);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||wy),n.length>1&&n.sort(f||xf),s.length>1&&s.sort(f||xf)}function d(){for(let u=t,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ay(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ee};break;case"SpotLight":e={position:new O,direction:new O,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Py=0;function Iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ly(i){let t=new Ry,e=Cy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,x=0,y=0,p=0,m=0,S=0,P=0,v=0,R=0,A=0,B=0,g=0,E=0,I=0;c.sort(Iy);for(let L=0,U=c.length;L<U;L++){let C=c[L],V=C.color,Z=C.intensity,G=C.distance,Q=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===as?Q=C.shadow.map.texture:Q=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=V.r*Z,d+=V.g*Z,u+=V.b*Z;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],Z);I++}else if(C.isSunLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[x]=lt,n.sunShadowMap[x]=Q;let Et=ot.getViewportCount();for(let ut=0;ut<Et;ut++)n.sunShadowMatrix[y+ut]=ot.getMatrix(ut),n.sunShadowCascade[y+ut]=ot._cascadeData[ut];y+=Et,x++}n.sun[f]=$,f++}else if(C.isDirectionalLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,n.directionalShadow[p]=lt,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=C.shadow.matrix,R++}n.directional[p]=$,p++}else if(C.isSpotLight){let $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(V).multiplyScalar(Z),$.distance=G,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[S]=$;let ot=C.shadow;if(C.map&&(n.spotLightMap[g]=C.map,g++,ot.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[S]=ot.matrix,C.castShadow){let lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,n.spotShadow[S]=lt,n.spotShadowMap[S]=Q,B++}S++}else if(C.isRectAreaLight){let $=t.get(C);$.color.copy(V).multiplyScalar(Z),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[P]=$,P++}else if(C.isPointLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){let ot=C.shadow,lt=e.get(C);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,lt.shadowCameraNear=ot.camera.near,lt.shadowCameraFar=ot.camera.far,n.pointShadow[m]=lt,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=C.shadow.matrix,A++}n.point[m]=$,m++}else if(C.isHemisphereLight){let $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(Z),$.groundColor.copy(C.groundColor).multiplyScalar(Z),n.hemi[v]=$,v++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==P||N.hemiLength!==v||N.numSunShadows!==x||N.numDirectionalShadows!==R||N.numPointShadows!==A||N.numSpotShadows!==B||N.numSpotMaps!==g||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=P,n.point.length=m,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=B,n.spotShadowMap.length=B,n.spotLightMatrix.length=B+g-E,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=P,N.hemiLength=v,N.numSunShadows=x,N.numDirectionalShadows=R,N.numPointShadows=A,N.numSpotShadows=B,N.numSpotMaps=g,N.numLightProbes=I,n.version=Py++)}function l(c,h){let d=0,u=0,f=0,x=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,P=c.length;S<P;S++){let v=c[S];if(v.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),u++}else if(v.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),x++}else if(v.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let R=n.hemi[p];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function yf(i){let t=new Ly(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Dy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yf(i),t.set(s,[a])):r>=o.length?(a=new yf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`,Fy=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],By=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],vf=new ae,Lo=new O,zh=new O;function Oy(i,t,e){let n=new ar,s=new yt,r=new yt,o=new Se,a=new Xa,l=new qa,c={},h=e.maxTextureSize,d={[is]:Ke,[Ke]:is,[Pe]:Pe},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new fe;x.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ht(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let m=this.type;this.render=function(A,B,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===cd&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Mi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&B.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(V=>V.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,V=A.length;C<V;C++){let Z=A[C],G=Z.shadow;if(G===void 0){jt("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let Q=G.getFrameExtents();s.multiply(Q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===dr){if(Z.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new _n(s.x,s.y,{format:as,type:Fn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new $i(s.x,s.y,Gn),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=_i,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn}else Z.isPointLight?(G.map=new Kl(s.x),G.map.depthTexture=new Oa(s.x,li)):(G.map=new _n(s.x,s.y),G.map.depthTexture=new $i(s.x,s.y,li)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=_i,this.type===Ms?(G.map.depthTexture.compareFunction=$?Yl:ql,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let ot=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,g);for(let lt=0;lt<ot;lt++){let Et=G.getCamera(lt);if(Z.isPointLight){let ut=G.camera,St=G.matrix,D=Z.distance||ut.far;D!==ut.far&&(ut.far=D,ut.updateProjectionMatrix()),Lo.setFromMatrixPosition(Z.matrixWorld),ut.position.copy(Lo),zh.copy(ut.position),zh.add(Fy[lt]),ut.up.copy(By[lt]),ut.lookAt(zh),ut.updateMatrixWorld(),St.makeTranslation(-Lo.x,-Lo.y,-Lo.z),vf.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vf,ut.coordinateSystem,ut.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(G.map),i.clear());let ut=G.getViewport(lt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),L.viewport(o)}n=G.getFrustum(lt),v(B,g,Et,Z,this.type)}G.isPointLightShadow!==!0&&this.type===dr&&S(G,g),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,I,N)};function S(A,B){let g=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new _n(s.x,s.y,{format:as,type:Fn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(B,null,g,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(B,null,g,f,y,null)}function P(A,B,g,E){let I=null,N=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)I=N;else if(I=g.isPointLight===!0?l:a,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){let L=I.uuid,U=B.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let V=C[U];V===void 0&&(V=I.clone(),C[U]=V,B.addEventListener("dispose",R)),I=V}if(I.visible=B.visible,I.wireframe=B.wireframe,E===dr?I.side=B.shadowSide!==null?B.shadowSide:B.side:I.side=B.shadowSide!==null?B.shadowSide:d[B.side],I.alphaMap=B.alphaMap,I.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,I.map=B.map,I.clipShadows=B.clipShadows,I.clippingPlanes=B.clippingPlanes,I.clipIntersection=B.clipIntersection,I.displacementMap=B.displacementMap,I.displacementScale=B.displacementScale,I.displacementBias=B.displacementBias,I.wireframeLinewidth=B.wireframeLinewidth,I.linewidth=B.linewidth,g.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=i.properties.get(I);L.light=g}return I}function v(A,B,g,E,I){if(A.visible===!1)return;if(A.layers.test(B.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===dr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let U=t.update(A),C=A.material;if(Array.isArray(C)){let V=U.groups;for(let Z=0,G=V.length;Z<G;Z++){let Q=V[Z],$=C[Q.materialIndex];if($&&$.visible){let ot=P(A,$,E,I);A.onBeforeShadow(i,A,B,g,U,ot,Q),i.renderBufferDirect(g,null,U,ot,A,Q),A.onAfterShadow(i,A,B,g,U,ot,Q)}}}else if(C.visible){let V=P(A,C,E,I);A.onBeforeShadow(i,A,B,g,U,V,null),i.renderBufferDirect(g,null,U,V,A,null),A.onAfterShadow(i,A,B,g,U,V,null)}}let L=A.children;for(let U=0,C=L.length;U<C;U++)v(L[U],B,g,E,I)}function R(A){A.target.removeEventListener("dispose",R);for(let g in c){let E=c[g],I=A.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function Hy(i,t){function e(){let tt=!1,Ct=new Se,mt=null,Pt=new Se(0,0,0,0);return{setMask:function(Ft){mt!==Ft&&!tt&&(i.colorMask(Ft,Ft,Ft,Ft),mt=Ft)},setLocked:function(Ft){tt=Ft},setClear:function(Ft,_t,Zt,Vt,Ie){Ie===!0&&(Ft*=Vt,_t*=Vt,Zt*=Vt),Ct.set(Ft,_t,Zt,Vt),Pt.equals(Ct)===!1&&(i.clearColor(Ft,_t,Zt,Vt),Pt.copy(Ct))},reset:function(){tt=!1,mt=null,Pt.set(-1,0,0,0)}}}function n(){let tt=!1,Ct=!1,mt=null,Pt=null,Ft=null;return{setReversed:function(_t){if(Ct!==_t){let Zt=t.get("EXT_clip_control");_t?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=_t;let Vt=Ft;Ft=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(_t){_t?T(i.DEPTH_TEST):w(i.DEPTH_TEST)},setMask:function(_t){mt!==_t&&!tt&&(i.depthMask(_t),mt=_t)},setFunc:function(_t){if(Ct&&(_t=Vd[_t]),Pt!==_t){switch(_t){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=_t}},setLocked:function(_t){tt=_t},setClear:function(_t){Ft!==_t&&(Ft=_t,Ct&&(_t=1-_t),i.clearDepth(_t))},reset:function(){tt=!1,mt=null,Pt=null,Ft=null,Ct=!1}}}function s(){let tt=!1,Ct=null,mt=null,Pt=null,Ft=null,_t=null,Zt=null,Vt=null,Ie=null;return{setTest:function(ve){tt||(ve?T(i.STENCIL_TEST):w(i.STENCIL_TEST))},setMask:function(ve){Ct!==ve&&!tt&&(i.stencilMask(ve),Ct=ve)},setFunc:function(ve,Kn,di){(mt!==ve||Pt!==Kn||Ft!==di)&&(i.stencilFunc(ve,Kn,di),mt=ve,Pt=Kn,Ft=di)},setOp:function(ve,Kn,di){(_t!==ve||Zt!==Kn||Vt!==di)&&(i.stencilOp(ve,Kn,di),_t=ve,Zt=Kn,Vt=di)},setLocked:function(ve){tt=ve},setClear:function(ve){Ie!==ve&&(i.clearStencil(ve),Ie=ve)},reset:function(){tt=!1,Ct=null,mt=null,Pt=null,Ft=null,_t=null,Zt=null,Vt=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],y=null,p=!1,m=null,S=null,P=null,v=null,R=null,A=null,B=null,g=new ee(0,0,0),E=0,I=!1,N=null,L=null,U=null,C=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Q>=2);let ot=null,lt={},Et=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),St=new Se().fromArray(Et),D=new Se().fromArray(ut);function H(tt,Ct,mt,Pt){let Ft=new Uint8Array(4),_t=i.createTexture();i.bindTexture(tt,_t),i.texParameteri(tt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(tt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<mt;Zt++)tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Ct+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return _t}let M={};M[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),M[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),M[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),T(i.DEPTH_TEST),o.setFunc(nr),nt(!1),at(rh),T(i.CULL_FACE),X(Mi);function T(tt){h[tt]!==!0&&(i.enable(tt),h[tt]=!0)}function w(tt){h[tt]!==!1&&(i.disable(tt),h[tt]=!1)}function Y(tt,Ct){return u[tt]!==Ct?(i.bindFramebuffer(tt,Ct),u[tt]=Ct,tt===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),tt===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function W(tt,Ct){let mt=x,Pt=!1;if(tt){mt=f.get(Ct),mt===void 0&&(mt=[],f.set(Ct,mt));let Ft=tt.textures;if(mt.length!==Ft.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Zt=Ft.length;_t<Zt;_t++)mt[_t]=i.COLOR_ATTACHMENT0+_t;mt.length=Ft.length,Pt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(mt)}function J(tt){return y!==tt?(i.useProgram(tt),y=tt,!0):!1}let k={[Es]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};k[fd]=i.MIN,k[pd]=i.MAX;let z={[md]:i.ZERO,[gd]:i.ONE,[xd]:i.SRC_COLOR,[lh]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function X(tt,Ct,mt,Pt,Ft,_t,Zt,Vt,Ie,ve){if(tt===Mi){p===!0&&(w(i.BLEND),p=!1);return}if(p===!1&&(T(i.BLEND),p=!0),tt!==hd){if(tt!==m||ve!==I){if((S!==Es||R!==Es)&&(i.blendEquation(i.FUNC_ADD),S=Es,R=Es),ve)switch(tt){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",tt);break}else switch(tt){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",tt);break}P=null,v=null,A=null,B=null,g.set(0,0,0),E=0,m=tt,I=ve}return}Ft=Ft||Ct,_t=_t||mt,Zt=Zt||Pt,(Ct!==S||Ft!==R)&&(i.blendEquationSeparate(k[Ct],k[Ft]),S=Ct,R=Ft),(mt!==P||Pt!==v||_t!==A||Zt!==B)&&(i.blendFuncSeparate(z[mt],z[Pt],z[_t],z[Zt]),P=mt,v=Pt,A=_t,B=Zt),(Vt.equals(g)===!1||Ie!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ie),g.copy(Vt),E=Ie),m=tt,I=!1}function j(tt,Ct){tt.side===Pe?w(i.CULL_FACE):T(i.CULL_FACE);let mt=tt.side===Ke;Ct&&(mt=!mt),nt(mt),tt.blending===fr&&tt.transparent===!1?X(Mi):X(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),o.setFunc(tt.depthFunc),o.setTest(tt.depthTest),o.setMask(tt.depthWrite),r.setMask(tt.colorWrite);let Pt=tt.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(tt.stencilWriteMask),a.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),a.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),Mt(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?T(i.SAMPLE_ALPHA_TO_COVERAGE):w(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(tt){N!==tt&&(tt?i.frontFace(i.CW):i.frontFace(i.CCW),N=tt)}function at(tt){tt!==ad?(T(i.CULL_FACE),tt!==L&&(tt===rh?i.cullFace(i.BACK):tt===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):w(i.CULL_FACE),L=tt}function xt(tt){tt!==U&&(G&&i.lineWidth(tt),U=tt)}function Mt(tt,Ct,mt){tt?(T(i.POLYGON_OFFSET_FILL),(C!==Ct||V!==mt)&&(C=Ct,V=mt,o.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,mt))):w(i.POLYGON_OFFSET_FILL)}function Tt(tt){tt?T(i.SCISSOR_TEST):w(i.SCISSOR_TEST)}function Ot(tt){tt===void 0&&(tt=i.TEXTURE0+Z-1),ot!==tt&&(i.activeTexture(tt),ot=tt)}function q(tt,Ct,mt){mt===void 0&&(ot===null?mt=i.TEXTURE0+Z-1:mt=ot);let Pt=lt[mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},lt[mt]=Pt),(Pt.type!==tt||Pt.texture!==Ct)&&(ot!==mt&&(i.activeTexture(mt),ot=mt),i.bindTexture(tt,Ct||M[tt]),Pt.type=tt,Pt.texture=Ct)}function de(){let tt=lt[ot];tt!==void 0&&tt.type!==void 0&&(i.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function _(){try{i.texSubImage2D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function et(){try{i.texSubImage3D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function bt(){try{i.texStorage2D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function wt(){try{i.texStorage3D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function pt(){try{i.texImage2D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function gt(){try{i.texImage3D(...arguments)}catch(tt){Qt("WebGLState:",tt)}}function At(tt){return d[tt]!==void 0?d[tt]:i.getParameter(tt)}function qt(tt,Ct){d[tt]!==Ct&&(i.pixelStorei(tt,Ct),d[tt]=Ct)}function It(tt){St.equals(tt)===!1&&(i.scissor(tt.x,tt.y,tt.z,tt.w),St.copy(tt))}function Rt(tt){D.equals(tt)===!1&&(i.viewport(tt.x,tt.y,tt.z,tt.w),D.copy(tt))}function Yt(tt,Ct){let mt=c.get(Ct);mt===void 0&&(mt=new WeakMap,c.set(Ct,mt));let Pt=mt.get(tt);Pt===void 0&&(Pt=i.getUniformBlockIndex(Ct,tt.name),mt.set(tt,Pt))}function Kt(tt,Ct){let Pt=c.get(Ct).get(tt);l.get(Ct)!==Pt&&(i.uniformBlockBinding(Ct,Pt,tt.__bindingPointIndex),l.set(Ct,Pt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,lt={},u={},f=new WeakMap,x=[],y=null,p=!1,m=null,S=null,P=null,v=null,R=null,A=null,B=null,g=new ee(0,0,0),E=0,I=!1,N=null,L=null,U=null,C=null,V=null,St.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:T,disable:w,bindFramebuffer:Y,drawBuffers:W,useProgram:J,setBlending:X,setMaterial:j,setFlipSided:nt,setCullFace:at,setLineWidth:xt,setPolygonOffset:Mt,setScissorTest:Tt,activeTexture:Ot,bindTexture:q,unbindTexture:de,compressedTexImage2D:ie,compressedTexImage3D:F,texImage2D:pt,texImage3D:gt,pixelStorei:qt,getParameter:At,updateUBOMapping:Yt,uniformBlockBinding:Kt,texStorage2D:bt,texStorage3D:wt,texSubImage2D:_,texSubImage3D:et,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:It,viewport:Rt,reset:se}}function zy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,d=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,_){return x?new OffscreenCanvas(F,_):Yr("canvas")}function p(F,_,et){let it=1,dt=ie(F);if((dt.width>et||dt.height>et)&&(it=et/Math.max(dt.width,dt.height)),it<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let bt=Math.floor(it*dt.width),wt=Math.floor(it*dt.height);u===void 0&&(u=y(bt,wt));let pt=_?y(bt,wt):u;return pt.width=bt,pt.height=wt,pt.getContext("2d").drawImage(F,0,0,bt,wt),jt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+bt+"x"+wt+")."),pt}else return"data"in F&&jt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),F;return F}function m(F){return F.generateMipmaps}function S(F){i.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(F,_,et,it,dt,bt=!1){if(F!==null){if(i[F]!==void 0)return i[F];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let wt;it&&(wt=t.get("EXT_texture_norm16"),wt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=_;if(_===i.RED&&(et===i.FLOAT&&(pt=i.R32F),et===i.HALF_FLOAT&&(pt=i.R16F),et===i.UNSIGNED_BYTE&&(pt=i.R8),et===i.UNSIGNED_SHORT&&wt&&(pt=wt.R16_EXT),et===i.SHORT&&wt&&(pt=wt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.R8UI),et===i.UNSIGNED_SHORT&&(pt=i.R16UI),et===i.UNSIGNED_INT&&(pt=i.R32UI),et===i.BYTE&&(pt=i.R8I),et===i.SHORT&&(pt=i.R16I),et===i.INT&&(pt=i.R32I)),_===i.RG&&(et===i.FLOAT&&(pt=i.RG32F),et===i.HALF_FLOAT&&(pt=i.RG16F),et===i.UNSIGNED_BYTE&&(pt=i.RG8),et===i.UNSIGNED_SHORT&&wt&&(pt=wt.RG16_EXT),et===i.SHORT&&wt&&(pt=wt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RG8UI),et===i.UNSIGNED_SHORT&&(pt=i.RG16UI),et===i.UNSIGNED_INT&&(pt=i.RG32UI),et===i.BYTE&&(pt=i.RG8I),et===i.SHORT&&(pt=i.RG16I),et===i.INT&&(pt=i.RG32I)),_===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),et===i.UNSIGNED_INT&&(pt=i.RGB32UI),et===i.BYTE&&(pt=i.RGB8I),et===i.SHORT&&(pt=i.RGB16I),et===i.INT&&(pt=i.RGB32I)),_===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),et===i.UNSIGNED_INT&&(pt=i.RGBA32UI),et===i.BYTE&&(pt=i.RGBA8I),et===i.SHORT&&(pt=i.RGBA16I),et===i.INT&&(pt=i.RGBA32I)),_===i.RGB&&(et===i.UNSIGNED_SHORT&&wt&&(pt=wt.RGB16_EXT),et===i.SHORT&&wt&&(pt=wt.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),_===i.RGBA){let gt=bt?qr:ue.getTransfer(dt);et===i.FLOAT&&(pt=i.RGBA32F),et===i.HALF_FLOAT&&(pt=i.RGBA16F),et===i.UNSIGNED_BYTE&&(pt=gt===Ee?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&wt&&(pt=wt.RGBA16_EXT),et===i.SHORT&&wt&&(pt=wt.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function R(F,_){let et;return F?_===null||_===li||_===mr?et=i.DEPTH24_STENCIL8:_===Gn?et=i.DEPTH32F_STENCIL8:_===pr&&(et=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===mr?et=i.DEPTH_COMPONENT24:_===Gn?et=i.DEPTH_COMPONENT32F:_===pr&&(et=i.DEPTH_COMPONENT16),et}function A(F,_){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==rn&&F.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?_.mipmaps.length:1}function B(F){let _=F.target;_.removeEventListener("dispose",B),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function g(F){let _=F.target;_.removeEventListener("dispose",g),N(_)}function E(F){let _=n.get(F);if(_.__webglInit===void 0)return;let et=F.source,it=f.get(et);if(it){let dt=it[_.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&I(F),Object.keys(it).length===0&&f.delete(et)}n.remove(F)}function I(F){let _=n.get(F);i.deleteTexture(_.__webglTexture);let et=F.source,it=f.get(et);delete it[_.__cacheKey],o.memory.textures--}function N(F){let _=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(_.__webglFramebuffer[it]))for(let dt=0;dt<_.__webglFramebuffer[it].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[it][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[it]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[it])}else{if(Array.isArray(_.__webglFramebuffer))for(let it=0;it<_.__webglFramebuffer.length;it++)i.deleteFramebuffer(_.__webglFramebuffer[it]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let it=0;it<_.__webglColorRenderbuffer.length;it++)_.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[it]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let et=F.textures;for(let it=0,dt=et.length;it<dt;it++){let bt=n.get(et[it]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(et[it])}n.remove(F)}let L=0;function U(){L=0}function C(){return L}function V(F){L=F}function Z(){let F=L;return F>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,F}function G(F){let _=[];return _.push(F.wrapS),_.push(F.wrapT),_.push(F.wrapR||0),_.push(F.magFilter),_.push(F.minFilter),_.push(F.anisotropy),_.push(F.internalFormat),_.push(F.format),_.push(F.type),_.push(F.generateMipmaps),_.push(F.premultiplyAlpha),_.push(F.flipY),_.push(F.unpackAlignment),_.push(F.colorSpace),_.join()}function Q(F,_){let et=n.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&et.__version!==F.version){let it=F.image;if(it===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{w(et,F,_);return}}else F.isExternalTexture&&(et.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+_)}function $(F,_){let et=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&et.__version!==F.version){w(et,F,_);return}else F.isExternalTexture&&(et.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+_)}function ot(F,_){let et=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&et.__version!==F.version){w(et,F,_);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+_)}function lt(F,_){let et=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&et.__version!==F.version){Y(et,F,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+_)}let Et={[ni]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},ut={[rn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},St={[Nd]:i.NEVER,[Hd]:i.ALWAYS,[Ud]:i.LESS,[ql]:i.LEQUAL,[Fd]:i.EQUAL,[Yl]:i.GEQUAL,[Bd]:i.GREATER,[Od]:i.NOTEQUAL};function D(F,_){if(_.type===Gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===ll||_.magFilter===So||_.magFilter===rs||_.minFilter===cn||_.minFilter===ll||_.minFilter===So||_.minFilter===rs)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Et[_.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Et[_.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Et[_.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==So&&_.minFilter!==rs||_.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function H(F,_){let et=!1;F.__webglInit===void 0&&(F.__webglInit=!0,_.addEventListener("dispose",B));let it=_.source,dt=f.get(it);dt===void 0&&(dt={},f.set(it,dt));let bt=G(_);if(bt!==F.__cacheKey){dt[bt]===void 0&&(dt[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),dt[bt].usedTimes++;let wt=dt[F.__cacheKey];wt!==void 0&&(dt[F.__cacheKey].usedTimes--,wt.usedTimes===0&&I(_)),F.__cacheKey=bt,F.__webglTexture=dt[bt].texture}return et}function M(F,_,et){return Math.floor(Math.floor(F/et)/_)}function T(F,_,et,it){let bt=F.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,et,it,_.data);else{bt.sort((qt,It)=>qt.start-It.start);let wt=0;for(let qt=1;qt<bt.length;qt++){let It=bt[wt],Rt=bt[qt],Yt=It.start+It.count,Kt=M(Rt.start,_.width,4),se=M(It.start,_.width,4);Rt.start<=Yt+1&&Kt===se&&M(Rt.start+Rt.count-1,_.width,4)===Kt?It.count=Math.max(It.count,Rt.start+Rt.count-It.start):(++wt,bt[wt]=Rt)}bt.length=wt+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let qt=0,It=bt.length;qt<It;qt++){let Rt=bt[qt],Yt=Math.floor(Rt.start/4),Kt=Math.ceil(Rt.count/4),se=Yt%_.width,tt=Math.floor(Yt/_.width),Ct=Kt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,tt),e.texSubImage2D(i.TEXTURE_2D,0,se,tt,Ct,mt,et,it,_.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function w(F,_,et){let it=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(it=i.TEXTURE_3D);let dt=H(F,_),bt=_.source;e.bindTexture(it,F.__webglTexture,i.TEXTURE0+et);let wt=n.get(bt);if(bt.version!==wt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let mt=ue.getPrimaries(ue.workingColorSpace),Pt=_.colorSpace===Oi?null:ue.getPrimaries(_.colorSpace),Ft=_.colorSpace===Oi||mt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let gt=p(_.image,!1,s.maxTextureSize);gt=de(_,gt);let At=r.convert(_.format,_.colorSpace),qt=r.convert(_.type),It=v(_.internalFormat,At,qt,_.normalized,_.colorSpace,_.isVideoTexture);D(it,_);let Rt,Yt=_.mipmaps,Kt=_.isVideoTexture!==!0,se=wt.__version===void 0||dt===!0,tt=bt.dataReady,Ct=A(_,gt);if(_.isDepthTexture)It=R(_.format===os,_.type),se&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,At,qt,null));else if(_.isDataTexture)if(Yt.length>0){Kt&&se&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Yt[0].width,Yt[0].height);for(let mt=0,Pt=Yt.length;mt<Pt;mt++)Rt=Yt[mt],Kt?tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,At,qt,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Rt.width,Rt.height,0,At,qt,Rt.data);_.generateMipmaps=!1}else Kt?(se&&e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height),tt&&T(_,gt,At,qt)):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,At,qt,gt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,Yt[0].width,Yt[0].height,gt.depth);for(let mt=0,Pt=Yt.length;mt<Pt;mt++)if(Rt=Yt[mt],_.format!==Vn)if(At!==null)if(Kt){if(tt)if(_.layerUpdates.size>0){let Ft=Ch(Rt.width,Rt.height,_.format,_.type);for(let _t of _.layerUpdates){let Zt=Rt.data.subarray(_t*Ft/Rt.data.BYTES_PER_ELEMENT,(_t+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,_t,Rt.width,Rt.height,1,At,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,gt.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,It,Rt.width,Rt.height,gt.depth,0,Rt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?tt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,gt.depth,At,qt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,It,Rt.width,Rt.height,gt.depth,0,At,qt,Rt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Kt&&se&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Yt[0].width,Yt[0].height);for(let mt=0,Pt=Yt.length;mt<Pt;mt++)Rt=Yt[mt],_.format!==Vn?At!==null?Kt?tt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,It,Rt.width,Rt.height,0,Rt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,At,qt,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Rt.width,Rt.height,0,At,qt,Rt.data)}else if(_.isDataArrayTexture)if(Kt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,gt.width,gt.height,gt.depth),tt)if(_.layerUpdates.size>0){let mt=Ch(gt.width,gt.height,_.format,_.type);for(let Pt of _.layerUpdates){let Ft=gt.data.subarray(Pt*mt/gt.data.BYTES_PER_ELEMENT,(Pt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,gt.width,gt.height,1,At,qt,Ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,At,qt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,At,qt,gt.data);else if(_.isData3DTexture)Kt?(se&&e.texStorage3D(i.TEXTURE_3D,Ct,It,gt.width,gt.height,gt.depth),tt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,At,qt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,At,qt,gt.data);else if(_.isFramebufferTexture){if(se)if(Kt)e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height);else{let mt=gt.width,Pt=gt.height;for(let Ft=0;Ft<Ct;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,It,mt,Pt,0,At,qt,null),mt>>=1,Pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),gt.parentNode!==mt){mt.appendChild(gt),d.add(_),mt.onpaint=Pt=>{let Ft=Pt.changedElements;for(let _t of d)Ft.includes(_t.image)&&(_t.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{let Ft=i.RGBA,_t=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,_t,Zt,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Kt&&se){let mt=ie(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}for(let mt=0,Pt=Yt.length;mt<Pt;mt++)Rt=Yt[mt],Kt?tt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,At,qt,Rt):e.texImage2D(i.TEXTURE_2D,mt,It,At,qt,Rt);_.generateMipmaps=!1}else if(Kt){if(se){let mt=ie(gt);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}tt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,qt,gt)}else e.texImage2D(i.TEXTURE_2D,0,It,At,qt,gt);m(_)&&S(it),wt.__version=bt.version,_.onUpdate&&_.onUpdate(_)}F.__version=_.version}function Y(F,_,et){if(_.image.length!==6)return;let it=H(F,_),dt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+et);let bt=n.get(dt);if(dt.version!==bt.__version||it===!0){e.activeTexture(i.TEXTURE0+et);let wt=ue.getPrimaries(ue.workingColorSpace),pt=_.colorSpace===Oi?null:ue.getPrimaries(_.colorSpace),gt=_.colorSpace===Oi||wt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let At=_.isCompressedTexture||_.image[0].isCompressedTexture,qt=_.image[0]&&_.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!At&&!qt?It[_t]=p(_.image[_t],!0,s.maxCubemapSize):It[_t]=qt?_.image[_t].image:_.image[_t],It[_t]=de(_,It[_t]);let Rt=It[0],Yt=r.convert(_.format,_.colorSpace),Kt=r.convert(_.type),se=v(_.internalFormat,Yt,Kt,_.normalized,_.colorSpace),tt=_.isVideoTexture!==!0,Ct=bt.__version===void 0||it===!0,mt=dt.dataReady,Pt=A(_,Rt);D(i.TEXTURE_CUBE_MAP,_);let Ft;if(At){tt&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,Rt.width,Rt.height);for(let _t=0;_t<6;_t++){Ft=It[_t].mipmaps;for(let Zt=0;Zt<Ft.length;Zt++){let Vt=Ft[Zt];_.format!==Vn?Yt!==null?tt?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,se,Vt.width,Vt.height,0,Vt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,Vt.width,Vt.height,Yt,Kt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,se,Vt.width,Vt.height,0,Yt,Kt,Vt.data)}}}else{if(Ft=_.mipmaps,tt&&Ct){Ft.length>0&&Pt++;let _t=ie(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(qt){tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,Yt,Kt,It[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,It[_t].width,It[_t].height,0,Yt,Kt,It[_t].data);for(let Zt=0;Zt<Ft.length;Zt++){let Ie=Ft[Zt].image[_t].image;tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Ie.width,Ie.height,Yt,Kt,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,se,Ie.width,Ie.height,0,Yt,Kt,Ie.data)}}else{tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Kt,It[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Yt,Kt,It[_t]);for(let Zt=0;Zt<Ft.length;Zt++){let Vt=Ft[Zt];tt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Yt,Kt,Vt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,se,Yt,Kt,Vt.image[_t])}}}m(_)&&S(i.TEXTURE_CUBE_MAP),bt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}F.__version=_.version}function W(F,_,et,it,dt,bt){let wt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),gt=v(et.internalFormat,wt,pt,et.normalized,et.colorSpace),At=n.get(_),qt=n.get(et);if(qt.__renderTarget=_,!At.__hasExternalTextures){let It=Math.max(1,_.width>>bt),Rt=Math.max(1,_.height>>bt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,bt,gt,It,Rt,_.depth,0,wt,pt,null):e.texImage2D(dt,bt,gt,It,Rt,0,wt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,dt,qt.__webglTexture,0,Tt(_)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,dt,qt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(F,_,et){if(i.bindRenderbuffer(i.RENDERBUFFER,F),_.depthBuffer){let it=_.depthTexture,dt=it&&it.isDepthTexture?it.type:null,bt=R(_.stencilBuffer,dt),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(_),bt,_.width,_.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(_),bt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,bt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,F)}else{let it=_.textures;for(let dt=0;dt<it.length;dt++){let bt=it[dt],wt=r.convert(bt.format,bt.colorSpace),pt=r.convert(bt.type),gt=v(bt.internalFormat,wt,pt,bt.normalized,bt.colorSpace);Ot(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(_),gt,_.width,_.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(_),gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(F,_,et){let it=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(_.depthTexture);if(dt.__renderTarget=_,(!dt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),it){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,_.depthTexture.addEventListener("dispose",B)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),D(i.TEXTURE_CUBE_MAP,_.depthTexture);let At=r.convert(_.depthTexture.format),qt=r.convert(_.depthTexture.type),It;_.depthTexture.format===_i?It=i.DEPTH_COMPONENT24:_.depthTexture.format===os&&(It=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,It,_.width,_.height,0,At,qt,null)}}else Q(_.depthTexture,0);let bt=dt.__webglTexture,wt=Tt(_),pt=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,gt=_.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===_i)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,pt,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,pt,bt,0);else if(_.depthTexture.format===os)Ot(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,pt,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,pt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(F){let _=n.get(F),et=F.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==F.depthTexture){let it=F.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),it){let dt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,it.removeEventListener("dispose",dt)};it.addEventListener("dispose",dt),_.__depthDisposeCallback=dt}_.__boundDepthTexture=it}if(F.depthTexture&&!_.__autoAllocateDepthBuffer)if(et)for(let it=0;it<6;it++)k(_.__webglFramebuffer[it],F,it);else{let it=F.texture.mipmaps;it&&it.length>0?k(_.__webglFramebuffer[0],F,0):k(_.__webglFramebuffer,F,0)}else if(et){_.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[it]),_.__webglDepthbuffer[it]===void 0)_.__webglDepthbuffer[it]=i.createRenderbuffer(),J(_.__webglDepthbuffer[it],F,!1);else{let dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}else{let it=F.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),J(_.__webglDepthbuffer,F,!1);else{let dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(F,_,et){let it=n.get(F);_!==void 0&&W(it.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&z(F)}function j(F){let _=F.texture,et=n.get(F),it=n.get(_);F.addEventListener("dispose",g);let dt=F.textures,bt=F.isWebGLCubeRenderTarget===!0,wt=dt.length>1;if(wt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=_.version,o.memory.textures++),bt){et.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){et.__webglFramebuffer[pt]=[];for(let gt=0;gt<_.mipmaps.length;gt++)et.__webglFramebuffer[pt][gt]=i.createFramebuffer()}else et.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){et.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)et.__webglFramebuffer[pt]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(wt)for(let pt=0,gt=dt.length;pt<gt;pt++){let At=n.get(dt[pt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ot(F)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){let gt=dt[pt];et.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[pt]);let At=r.convert(gt.format,gt.colorSpace),qt=r.convert(gt.type),It=v(gt.internalFormat,At,qt,gt.normalized,gt.colorSpace,F.isXRRenderTarget===!0),Rt=Tt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,It,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,et.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),J(et.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),D(i.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)W(et.__webglFramebuffer[pt][gt],F,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,gt);else W(et.__webglFramebuffer[pt],F,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let pt=0,gt=dt.length;pt<gt;pt++){let At=dt[pt],qt=n.get(At),It=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(It=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,qt.__webglTexture),D(It,At),W(et.__webglFramebuffer,F,At,i.COLOR_ATTACHMENT0+pt,It,0),m(At)&&S(It)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),D(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)W(et.__webglFramebuffer[gt],F,_,i.COLOR_ATTACHMENT0,pt,gt);else W(et.__webglFramebuffer,F,_,i.COLOR_ATTACHMENT0,pt,0);m(_)&&S(pt),e.unbindTexture()}F.depthBuffer&&z(F)}function nt(F){let _=F.textures;for(let et=0,it=_.length;et<it;et++){let dt=_[et];if(m(dt)){let bt=P(F),wt=n.get(dt).__webglTexture;e.bindTexture(bt,wt),S(bt),e.unbindTexture()}}}let at=[],xt=[];function Mt(F){if(F.samples>0){if(Ot(F)===!1){let _=F.textures,et=F.width,it=F.height,dt=i.COLOR_BUFFER_BIT,bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(F),pt=_.length>1;if(pt)for(let At=0;At<_.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let gt=F.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<_.length;At++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let qt=n.get(_[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,et,it,0,0,et,it,dt,i.NEAREST),l===!0&&(at.length=0,xt.length=0,at.push(i.COLOR_ATTACHMENT0+At),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(at.push(bt),xt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<_.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let qt=n.get(_[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let _=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Tt(F){return Math.min(s.maxSamples,F.samples)}function Ot(F){let _=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(F){let _=o.render.frame;h.get(F)!==_&&(h.set(F,_),F.update())}function de(F,_){let et=F.colorSpace,it=F.format,dt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||et!==Xr&&et!==Oi&&(ue.getTransfer(et)===Ee?(it!==Vn||dt!==Rn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",et)),_}function ie(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=ot,this.setTextureCube=lt,this.rebindTextures=X,this.setupRenderTarget=j,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ky(i,t){function e(n,s=Oi){let r,o=ue.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===Vn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===bo||n===To||n===wo||n===Ao)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===_l||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===Ml||n===El||n===Sl||n===bl||n===Ro||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===Ml)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sl)return r.COMPRESSED_R11_EAC;if(n===bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Bl||n===Ol||n===Hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===kl||n===Gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Wl||n===Co||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:Gy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,y=typeof XRWebGLBinding<"u",p=new Zh,m={},S=e.getContextAttributes(),P=null,v=null,R=[],A=[],B=new yt,g=null,E=null,I=new Je;I.viewport=new Se;let N=new Je;N.viewport=new Se;let L=[I,N],U=new sl,C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let T=R[M];return T===void 0&&(T=new or,R[M]=T),T.getTargetRaySpace()},this.getControllerGrip=function(M){let T=R[M];return T===void 0&&(T=new or,R[M]=T),T.getGripSpace()},this.getHand=function(M){let T=R[M];return T===void 0&&(T=new or,R[M]=T),T.getHandSpace()};function Z(M){let T=A.indexOf(M.inputSource);if(T===-1)return;let w=R[T];w!==void 0&&(w.update(M.inputSource,M.frame,c||o),w.dispatchEvent({type:M.type,data:M.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let M=0;M<R.length;M++){let T=A[M];T!==null&&(A[M]=null,R[M].disconnect(T))}C=null,V=null,p.reset();for(let M in m)delete m[M];if(t.setRenderTarget(P),f=null,u=null,d=null,s=null,v=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(B.width,B.height,!1),E!==null){let M=E.camera;M.fov=E.fov,M.zoom=E.zoom,M.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(B),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let w=null,Y=null,W=null;S.depth&&(W=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,w=S.stencil?os:_i,Y=S.stencil?mr:li);let J={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(J),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new _n(u.textureWidth,u.textureHeight,{format:Vn,type:Rn,depthTexture:new $i(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let w={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,w),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _n(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(M){for(let T=0;T<M.removed.length;T++){let w=M.removed[T],Y=A.indexOf(w);Y>=0&&(A[Y]=null,R[Y].disconnect(w))}for(let T=0;T<M.added.length;T++){let w=M.added[T],Y=A.indexOf(w);if(Y===-1){for(let J=0;J<R.length;J++)if(J>=A.length){A.push(w),Y=J;break}else if(A[J]===null){A[J]=w,Y=J;break}if(Y===-1)break}let W=R[Y];W&&W.connect(w)}}let $=new O,ot=new O;function lt(M,T,w){$.setFromMatrixPosition(T.matrixWorld),ot.setFromMatrixPosition(w.matrixWorld);let Y=$.distanceTo(ot),W=T.projectionMatrix.elements,J=w.projectionMatrix.elements,k=W[14]/(W[10]-1),z=W[14]/(W[10]+1),X=(W[9]+1)/W[5],j=(W[9]-1)/W[5],nt=(W[8]-1)/W[0],at=(J[8]+1)/J[0],xt=k*nt,Mt=k*at,Tt=Y/(-nt+at),Ot=Tt*-nt;if(T.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(Ot),M.translateZ(Tt),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),W[10]===-1)M.projectionMatrix.copy(T.projectionMatrix),M.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let q=k+Tt,de=z+Tt,ie=xt-Ot,F=Mt+(Y-Ot),_=X*z/de*q,et=j*z/de*q;M.projectionMatrix.makePerspective(ie,F,_,et,q,de),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function Et(M,T){T===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(T.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let T=M.near,w=M.far;p.texture!==null&&(p.depthNear>0&&(T=p.depthNear),p.depthFar>0&&(w=p.depthFar)),U.near=N.near=I.near=T,U.far=N.far=I.far=w,(C!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,V=U.far),U.layers.mask=M.layers.mask|6,I.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Y=M.parent,W=U.cameras;Et(U,Y);for(let J=0;J<W.length;J++)Et(W[J],Y);W.length===2?lt(U,I,N):U.projectionMatrix.copy(I.projectionMatrix),E===null&&M.isPerspectiveCamera&&(E={camera:M,fov:M.fov,zoom:M.zoom}),ut(M,U,Y)};function ut(M,T,w){w===null?M.matrix.copy(T.matrixWorld):(M.matrix.copy(w.matrixWorld),M.matrix.invert(),M.matrix.multiply(T.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(T.projectionMatrix),M.projectionMatrixInverse.copy(T.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=La*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(M){l=M,u!==null&&(u.fixedFoveation=M),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=M)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(M){return m[M]};let St=null;function D(M,T){if(h=T.getViewerPose(c||o),x=T,h!==null){let w=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Y=!1;w.length!==U.cameras.length&&(U.cameras.length=0,Y=!0);for(let z=0;z<w.length;z++){let X=w[z],j=null;if(f!==null)j=f.getViewport(X);else{let at=d.getViewSubImage(u,X);j=at.viewport,z===0&&(t.setRenderTargetTextures(v,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(v))}let nt=L[z];nt===void 0&&(nt=new Je,nt.layers.enable(z),nt.viewport=new Se,L[z]=nt),nt.matrix.fromArray(X.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(X.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(j.x,j.y,j.width,j.height),z===0&&(U.matrix.copy(nt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Y===!0&&U.cameras.push(nt)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let z=d.getDepthInformation(w[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(W&&W.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let z=0;z<w.length;z++){let X=w[z].camera;if(X){let j=m[X];j||(j=new ro,m[X]=j);let nt=d.getCameraImage(X);j.sourceTexture=nt}}}}for(let w=0;w<R.length;w++){let Y=A[w],W=R[w];Y!==null&&W!==void 0&&W.update(Y,T,c||o)}St&&St(M,T),T.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:T}),x=null}let H=new Mf;H.setAnimationLoop(D),this.setAnimationLoop=function(M){St=M},this.dispose=function(){}}},Wy=new ae,Af=new ne;Af.set(-1,0,0,0,1,0,0,0,1);function Xy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,P,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,P):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),P=S.envMap,v=S.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(v)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Af),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,P){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=P*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,R){let A=R.program;n.uniformBlockBinding(v,A)}function c(v,R){let A=s[v.id];A===void 0&&(p(v),A=h(v),s[v.id]=A,v.addEventListener("dispose",S));let B=R.program;n.updateUBOMapping(v,B);let g=t.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function h(v){let R=d();v.__bindingPointIndex=R;let A=i.createBuffer(),B=v.__size,g=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,B,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,A),A}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let R=s[v.id],A=v.uniforms,B=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let g=0,E=A.length;g<E;g++){let I=A[g];if(Array.isArray(I))for(let N=0,L=I.length;N<L;N++)f(I[N],g,N,B);else f(I,g,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,R,A,B){if(y(v,R,A,B)===!0){let g=v.__offset,E=v.value;if(Array.isArray(E)){let I=0;for(let N=0;N<E.length;N++){let L=E[N],U=m(L);x(L,v.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,v.__data)}}function x(v,R,A){typeof v=="number"||typeof v=="boolean"?R[0]=v:v.isMatrix3?(R[0]=v.elements[0],R[1]=v.elements[1],R[2]=v.elements[2],R[3]=0,R[4]=v.elements[3],R[5]=v.elements[4],R[6]=v.elements[5],R[7]=0,R[8]=v.elements[6],R[9]=v.elements[7],R[10]=v.elements[8],R[11]=0):ArrayBuffer.isView(v)?R.set(new v.constructor(v.buffer,v.byteOffset,R.length)):v.toArray(R,A)}function y(v,R,A,B){let g=v.value,E=R+"_"+A;if(B[E]===void 0)return typeof g=="number"||typeof g=="boolean"?B[E]=g:ArrayBuffer.isView(g)?B[E]=g.slice():B[E]=g.clone(),!0;{let I=B[E];if(typeof g=="number"||typeof g=="boolean"){if(I!==g)return B[E]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(I.equals(g)===!1)return I.copy(g),!0}}return!1}function p(v){let R=v.uniforms,A=0,B=16;for(let E=0,I=R.length;E<I;E++){let N=Array.isArray(R[E])?R[E]:[R[E]];for(let L=0,U=N.length;L<U;L++){let C=N[L],V=Array.isArray(C.value)?C.value:[C.value];for(let Z=0,G=V.length;Z<G;Z++){let Q=V[Z],$=m(Q),ot=A%B,lt=ot%$.boundary,Et=ot+lt;A+=lt,Et!==0&&B-Et<$.storage&&(A+=B-Et),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=$.storage}}}let g=A%B;return g>0&&(A+=B-g),v.__size=A,v.__cache={},this}function m(v){let R={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(R.boundary=4,R.storage=4):v.isVector2?(R.boundary=8,R.storage=8):v.isVector3||v.isColor?(R.boundary=16,R.storage=12):v.isVector4?(R.boundary=16,R.storage=16):v.isMatrix3?(R.boundary=48,R.storage=48):v.isMatrix4?(R.boundary=64,R.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(R.boundary=16,R.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),R}function S(v){let R=v.target;R.removeEventListener("dispose",S);let A=o.indexOf(R.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function P(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:P}}var Yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Zy(){return Ei===null&&(Ei=new no(Yy,16,16,as,Fn),Ei.name="DFG_LUT",Ei.minFilter=cn,Ei.magFilter=cn,Ei.wrapS=gi,Ei.wrapT=gi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Ql=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let y=f,p=new Set([ml,pl,fl]),m=new Set([Rn,li,pr,mr,hl,ul]),S=new Uint32Array(4),P=new Int32Array(4),v=new O,R=null,A=null,B=[],g=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,L=null,U=null,C=null,V=null;this._outputColorSpace=ln;let Z=0,G=0,Q=null,$=-1,ot=null,lt=new Se,Et=new Se,ut=null,St=new ee(0),D=0,H=e.width,M=e.height,T=1,w=null,Y=null,W=new Se(0,0,H,M),J=new Se(0,0,H,M),k=!1,z=new ar,X=!1,j=!1,nt=new ae,at=new O,xt=new Se,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Ot(){return Q===null?T:1}let q=n;function de(b,K){return e.getContext(b,K)}let ie,F,_,et,it,dt,bt,wt,pt,gt,At,qt,It,Rt,Yt,Kt,se,tt,Ct,mt,Pt,Ft,_t;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),q===null){let K="webgl2";if(q=de(K,b),q===null)throw de(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(b){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),Qt("WebGLRenderer: "+b.message),b}function Zt(){ie=new e_(q),ie.init(),Pt=new ky(q,ie),F=new Xx(q,ie,t,Pt),_=new Hy(q,ie),F.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),U=q.createFramebuffer(),C=q.createFramebuffer(),V=q.createFramebuffer(),et=new s_(q),it=new Ty,dt=new zy(q,ie,_,it,F,Pt,et),bt=new t_(I),wt=new o0(q),Ft=new Vx(q,wt),pt=new n_(q,wt,et,Ft),gt=new o_(q,pt,wt,Ft,et),tt=new r_(q,F,dt),Yt=new qx(it),At=new by(I,bt,ie,F,Ft,Yt),qt=new Xy(I,it),It=new Ay,Rt=new Dy(ie),se=new Gx(I,bt,_,gt,x,l),Kt=new Oy(I,gt,F),_t=new qy(q,et,F,_),Ct=new Wx(q,ie,et),mt=new i_(q,ie,et),et.programs=At.programs,I.capabilities=F,I.extensions=ie,I.properties=it,I.renderLists=It,I.shadowMap=Kt,I.state=_,I.info=et}y!==Rn&&(E=new l_(y,e.width,e.height,a,s,r));let Vt=new Jh(I,q);this.xr=Vt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let b=ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(b){b!==void 0&&(T=b,this.setSize(H,M,!1))},this.getSize=function(b){return b.set(H,M)},this.setSize=function(b,K,ct=!0){if(Vt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,M=K,e.width=Math.floor(b*T),e.height=Math.floor(K*T),ct===!0&&(e.style.width=b+"px",e.style.height=K+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(H*T,M*T).floor()},this.setDrawingBufferSize=function(b,K,ct){H=b,M=K,T=ct,e.width=Math.floor(b*ct),e.height=Math.floor(K*ct),this.setViewport(0,0,b,K)},this.setEffects=function(b){if(y===Rn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let K=0;K<b.length;K++)if(b[K].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(lt)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,K,ct,st){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,K,ct,st),_.viewport(lt.copy(W).multiplyScalar(T).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,K,ct,st){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,K,ct,st),_.scissor(Et.copy(J).multiplyScalar(T).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(b){_.setScissorTest(k=b)},this.setOpaqueSort=function(b){w=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,K=!0,ct=!0){let st=0;if(b){let rt=!1;if(Q!==null){let Nt=Q.texture.format;rt=p.has(Nt)}if(rt){let Nt=Q.texture.type,zt=m.has(Nt),Dt=se.getClearColor(),kt=se.getClearAlpha(),Xt=Dt.r,re=Dt.g,he=Dt.b;zt?(S[0]=Xt,S[1]=re,S[2]=he,S[3]=kt,q.clearBufferuiv(q.COLOR,0,S)):(P[0]=Xt,P[1]=re,P[2]=he,P[3]=kt,q.clearBufferiv(q.COLOR,0,P))}else st|=q.COLOR_BUFFER_BIT}K&&(st|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(st|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&q.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),se.dispose(),It.dispose(),Rt.dispose(),it.dispose(),bt.dispose(),gt.dispose(),Ft.dispose(),_t.dispose(),At.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",yu),Vt.removeEventListener("sessionend",vu),us.stop()};function Ie(b){b.preventDefault(),Zr("WebGLRenderer: Context Lost."),N=!0}function ve(){Zr("WebGLRenderer: Context Restored."),N=!1;let b=et.autoReset,K=Kt.enabled,ct=Kt.autoUpdate,st=Kt.needsUpdate,rt=Kt.type;Zt(),et.autoReset=b,Kt.enabled=K,Kt.autoUpdate=ct,Kt.needsUpdate=st,Kt.type=rt}function Kn(b){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){let K=b.target;K.removeEventListener("dispose",di),Vp(K)}function Vp(b){Wp(b),it.remove(b)}function Wp(b){let K=it.get(b).programs;K!==void 0&&(K.forEach(function(ct){At.releaseProgram(ct)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ct,st,rt,Nt){K===null&&(K=Mt);let zt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Dt=Yp(b,K,ct,st,rt);_.setMaterial(st,zt);let kt=ct.index,Xt=1;if(st.wireframe===!0){if(kt=pt.getWireframeAttribute(ct),kt===void 0)return;Xt=2}let re=ct.drawRange,he=ct.attributes.position,Gt=re.start*Xt,Me=(re.start+re.count)*Xt;Nt!==null&&(Gt=Math.max(Gt,Nt.start*Xt),Me=Math.min(Me,(Nt.start+Nt.count)*Xt)),kt!==null?(Gt=Math.max(Gt,0),Me=Math.min(Me,kt.count)):he!=null&&(Gt=Math.max(Gt,0),Me=Math.min(Me,he.count));let Xe=Me-Gt;if(Xe<0||Xe===1/0)return;Ft.setup(rt,st,Dt,ct,kt);let De,Ce=Ct;if(kt!==null&&(De=wt.get(kt),Ce=mt,Ce.setIndex(De)),rt.isMesh)st.wireframe===!0?(_.setLineWidth(st.wireframeLinewidth*Ot()),Ce.setMode(q.LINES)):Ce.setMode(q.TRIANGLES);else if(rt.isLine){let pn=st.linewidth;pn===void 0&&(pn=1),_.setLineWidth(pn*Ot()),rt.isLineSegments?Ce.setMode(q.LINES):rt.isLineLoop?Ce.setMode(q.LINE_LOOP):Ce.setMode(q.LINE_STRIP)}else rt.isPoints?Ce.setMode(q.POINTS):rt.isSprite&&Ce.setMode(q.TRIANGLES);if(rt.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Ce.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let pn=rt._multiDrawStarts,Ht=rt._multiDrawCounts,Mn=rt._multiDrawCount,me=kt?wt.get(kt).bytesPerElement:1,Hn=it.get(st).currentProgram.getUniforms();for(let fi=0;fi<Mn;fi++)Hn.setValue(q,"_gl_DrawID",fi),Ce.render(pn[fi]/me,Ht[fi])}else if(rt.isInstancedMesh)Ce.renderInstances(Gt,Xe,rt.count);else if(ct.isInstancedBufferGeometry){let pn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ht=Math.min(ct.instanceCount,pn);Ce.renderInstances(Gt,Xe,Ht)}else Ce.render(Gt,Xe)};function _u(b,K,ct,st){L!==null&&b.isNodeMaterial&&L.setObject(st,b),X===!0&&Yt.setState(b,ct,!1),b.transparent===!0&&b.side===Pe&&b.forceSinglePass===!1?(b.side=Ke,b.needsUpdate=!0,Yo(b,K,st),b.side=is,b.needsUpdate=!0,Yo(b,K,st),b.side=Pe):Yo(b,K,st)}this.compile=function(b,K,ct=null){ct===null&&(ct=b),L!==null&&L.renderStart(b,K,ct),A=Rt.get(ct),A.init(K),g.push(A),ct.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(A.pushLight(rt),rt.castShadow&&A.pushShadow(rt))}),b!==ct&&b.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(A.pushLight(rt),rt.castShadow&&A.pushShadow(rt))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),j=this.localClippingEnabled,X=Yt.init(this.clippingPlanes,j),X===!0&&Yt.setGlobalState(this.clippingPlanes,K),L!==null&&Kt.render(A.state.shadowsArray,ct,K);let st=new Set;return b.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Nt=rt.material;if(Nt)if(Array.isArray(Nt))for(let zt=0;zt<Nt.length;zt++){let Dt=Nt[zt];_u(Dt,ct,K,rt),st.add(Dt)}else _u(Nt,ct,K,rt),st.add(Nt)}),A=g.pop(),L!==null&&L.renderEnd(),st},this.compileAsync=function(b,K,ct=null){let st=this.compile(b,K,ct);return new Promise(rt=>{function Nt(){if(st.forEach(function(zt){let kt=it.get(zt).currentProgram;(kt===void 0||kt.isReady())&&st.delete(zt)}),st.size===0){rt(b);return}setTimeout(Nt,10)}ie.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let _c=null;function Xp(b){_c&&_c(b)}function yu(){us.stop()}function vu(){us.start()}let us=new Mf;us.setAnimationLoop(Xp),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(b){_c=b,Vt.setAnimationLoop(b),b===null?us.stop():us.start()},Vt.addEventListener("sessionstart",yu),Vt.addEventListener("sessionend",vu),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(b,K);let ct=Vt.enabled===!0&&Vt.isPresenting===!0,st=E!==null&&(Q===null||ct)&&E.begin(I,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(K),K=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,K,Q),A=Rt.get(b,g.length),A.init(K),A.state.textureUnits=dt.getTextureUnits(),g.push(A),nt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z.setFromProjectionMatrix(nt,ei,K.reversedDepth),j=this.localClippingEnabled,X=Yt.init(this.clippingPlanes,j),R=It.get(b,B.length),R.init(),B.push(R),Vt.enabled===!0&&Vt.isPresenting===!0){let zt=I.xr.getDepthSensingMesh();zt!==null&&yc(zt,K,-1/0,I.sortObjects)}yc(b,K,0,I.sortObjects),R.finish(),L!==null&&L.updateLights(A.state.lightsArray),I.sortObjects===!0&&R.sort(w,Y),Tt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Tt&&se.addToRenderList(R,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),X===!0&&Yt.beginShadows();let rt=A.state.shadowsArray;if(Kt.render(rt,b,K),X===!0&&Yt.endShadows(),(st&&E.hasRenderPass())===!1){let zt=R.opaque,Dt=R.transmissive;if(A.setupLights(),K.isArrayCamera){let kt=K.cameras;if(Dt.length>0)for(let Xt=0,re=kt.length;Xt<re;Xt++){let he=kt[Xt];Eu(zt,Dt,b,he)}Tt&&se.render(b);for(let Xt=0,re=kt.length;Xt<re;Xt++){let he=kt[Xt];Mu(R,b,he,he.viewport)}}else Dt.length>0&&Eu(zt,Dt,b,K),Tt&&se.render(b),Mu(R,b,K)}Q!==null&&G===0&&(dt.updateMultisampleRenderTarget(Q),dt.updateRenderTargetMipmap(Q)),st&&E.end(I),b.isScene===!0&&b.onAfterRender(I,b,K),Ft.resetDefaultState(),$=-1,ot=null,g.pop(),g.length>0?(A=g[g.length-1],dt.setTextureUnits(A.state.textureUnits),X===!0&&Yt.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,B.pop(),B.length>0?R=B[B.length-1]:R=null,L!==null&&L.renderEnd()};function yc(b,K,ct,st){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ct=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(z)){st&&xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);let zt=gt.update(b),Dt=b.material;Dt.visible&&R.push(b,zt,Dt,ct,xt.z,null,K)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(z))){let zt=gt.update(b),Dt=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xt.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),xt.copy(zt.boundingSphere.center)),xt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(Dt)){let kt=zt.groups;for(let Xt=0,re=kt.length;Xt<re;Xt++){let he=kt[Xt],Gt=Dt[he.materialIndex];Gt&&Gt.visible&&R.push(b,zt,Gt,ct,xt.z,he,K)}}else Dt.visible&&R.push(b,zt,Dt,ct,xt.z,null,K)}}let Nt=b.children;for(let zt=0,Dt=Nt.length;zt<Dt;zt++)yc(Nt[zt],K,ct,st)}function Mu(b,K,ct,st){let{opaque:rt,transmissive:Nt,transparent:zt}=b;A.setupLightsView(ct),X===!0&&Yt.setGlobalState(I.clippingPlanes,ct),st&&_.viewport(lt.copy(st)),rt.length>0&&qo(rt,K,ct),Nt.length>0&&qo(Nt,K,ct),zt.length>0&&qo(zt,K,ct),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Eu(b,K,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[st.id]===void 0){let Gt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[st.id]=new _n(1,1,{generateMipmaps:!0,type:Gt?Fn:Rn,minFilter:rs,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Nt=A.state.transmissionRenderTarget[st.id],zt=st.viewport||lt;Nt.setSize(zt.z*I.transmissionResolutionScale,zt.w*I.transmissionResolutionScale);let Dt=I.getRenderTarget(),kt=I.getActiveCubeFace(),Xt=I.getActiveMipmapLevel();I.setRenderTarget(Nt),I.getClearColor(St),D=I.getClearAlpha(),D<1&&I.setClearColor(16777215,.5),I.clear(),Tt&&se.render(ct);let re=I.toneMapping;I.toneMapping=ai;let he=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),A.setupLightsView(st),X===!0&&Yt.setGlobalState(I.clippingPlanes,st),qo(b,ct,st),dt.updateMultisampleRenderTarget(Nt),dt.updateRenderTargetMipmap(Nt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Me=0,Xe=K.length;Me<Xe;Me++){let De=K[Me],{object:Ce,geometry:pn,material:Ht,group:Mn}=De;if(Ht.side===Pe&&Ce.layers.test(st.layers)){let me=Ht.side;Ht.side=Ke,Ht.needsUpdate=!0,Su(Ce,ct,st,pn,Ht,Mn),Ht.side=me,Ht.needsUpdate=!0,Gt=!0}}Gt===!0&&(dt.updateMultisampleRenderTarget(Nt),dt.updateRenderTargetMipmap(Nt))}I.setRenderTarget(Dt,kt,Xt),I.setClearColor(St,D),he!==void 0&&(st.viewport=he),I.toneMapping=re}function qo(b,K,ct){let st=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,Nt=b.length;rt<Nt;rt++){let zt=b[rt],{object:Dt,geometry:kt,group:Xt}=zt,re=zt.material;re.allowOverride===!0&&st!==null&&(re=st),Dt.layers.test(ct.layers)&&Su(Dt,K,ct,kt,re,Xt)}}function Su(b,K,ct,st,rt,Nt){L!==null&&rt.isNodeMaterial&&L.setObject(b,rt),b.onBeforeRender(I,K,ct,st,rt,Nt),b.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),rt.onBeforeRender(I,K,ct,st,b,Nt),rt.transparent===!0&&rt.side===Pe&&rt.forceSinglePass===!1?(rt.side=Ke,rt.needsUpdate=!0,I.renderBufferDirect(ct,K,st,rt,b,Nt),rt.side=is,rt.needsUpdate=!0,I.renderBufferDirect(ct,K,st,rt,b,Nt),rt.side=Pe):I.renderBufferDirect(ct,K,st,rt,b,Nt),b.onAfterRender(I,K,ct,st,rt,Nt)}function Yo(b,K,ct){K.isScene!==!0&&(K=Mt);let st=it.get(b),rt=A.state.lights,Nt=A.state.shadowsArray,zt=rt.state.version,Dt=At.getParameters(b,rt.state,Nt,K,ct,A.state.lightProbeGridArray),kt=At.getProgramCacheKey(Dt),Xt=st.programs;st.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?K.environment:null,st.fog=K.fog;let re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;st.envMap=bt.get(b.envMap||st.environment,re),st.envMapRotation=st.environment!==null&&b.envMap===null?K.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",di),Xt=new Map,st.programs=Xt);let he=Xt.get(kt);if(he!==void 0){if(st.currentProgram===he&&st.lightsStateVersion===zt)return Tu(b,Dt),he}else Dt.uniforms=At.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,ct,Dt),b.onBeforeCompile(Dt,I),he=At.acquireProgram(Dt,kt),Xt.set(kt,he),st.uniforms=Dt.uniforms;let Gt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Yt.uniform),Tu(b,Dt),st.needsLights=Jp(b),st.lightsStateVersion=zt,st.needsLights&&(Gt.ambientLightColor.value=rt.state.ambient,Gt.lightProbe.value=rt.state.probe,Gt.sunLights.value=rt.state.sun,Gt.sunLightShadows.value=rt.state.sunShadow,Gt.directionalLights.value=rt.state.directional,Gt.directionalLightShadows.value=rt.state.directionalShadow,Gt.spotLights.value=rt.state.spot,Gt.spotLightShadows.value=rt.state.spotShadow,Gt.rectAreaLights.value=rt.state.rectArea,Gt.ltc_1.value=rt.state.rectAreaLTC1,Gt.ltc_2.value=rt.state.rectAreaLTC2,Gt.pointLights.value=rt.state.point,Gt.pointLightShadows.value=rt.state.pointShadow,Gt.hemisphereLights.value=rt.state.hemi,Gt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Gt.sunShadowCascade.value=rt.state.sunShadowCascade,Gt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=rt.state.spotLightMatrix,Gt.spotLightMap.value=rt.state.spotLightMap,Gt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=A.state.lightProbeGridArray.length>0,st.currentProgram=he,st.uniformsList=null,he}function bu(b){if(b.uniformsList===null){let K=b.currentProgram.getUniforms();b.uniformsList=_r.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function Tu(b,K){let ct=it.get(b);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function qp(b,K){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let ct=0,st=b.length;ct<st;ct++){let rt=b[ct];if(rt.texture!==null&&rt.boundingBox.containsPoint(v))return rt}return null}function Yp(b,K,ct,st,rt){K.isScene!==!0&&(K=Mt),dt.resetTextureUnits();let Nt=K.fog,zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?K.environment:null,Dt=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ue.workingColorSpace,kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Xt=bt.get(st.envMap||zt,kt),re=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!ct.morphAttributes.position,Me=!!ct.morphAttributes.normal,Xe=!!ct.morphAttributes.color,De=ai;st.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(De=I.toneMapping);let Ce=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,pn=Ce!==void 0?Ce.length:0,Ht=it.get(st),Mn=A.state.lights;if(X===!0&&(j===!0||b!==ot)){let Le=b===ot&&st.id===$;Yt.setState(st,b,Le)}let me=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Mn.state.version||Ht.outputColorSpace!==Dt||rt.isBatchedMesh&&Ht.batching===!1||!rt.isBatchedMesh&&Ht.batching===!0||rt.isBatchedMesh&&Ht.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ht.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ht.instancing===!1||!rt.isInstancedMesh&&Ht.instancing===!0||rt.isSkinnedMesh&&Ht.skinning===!1||!rt.isSkinnedMesh&&Ht.skinning===!0||rt.isInstancedMesh&&Ht.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ht.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ht.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ht.instancingMorph===!1&&rt.morphTexture!==null||Ht.envMap!==Xt||st.fog===!0&&Ht.fog!==Nt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Yt.numPlanes||Ht.numIntersection!==Yt.numIntersection)||Ht.vertexAlphas!==re||Ht.vertexTangents!==he||Ht.morphTargets!==Gt||Ht.morphNormals!==Me||Ht.morphColors!==Xe||Ht.toneMapping!==De||Ht.morphTargetsCount!==pn||!!Ht.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ht.__version=st.version);let Hn=Ht.currentProgram;me===!0&&(Hn=Yo(st,K,rt),L&&st.isNodeMaterial&&L.onUpdateProgram(st,Hn,Ht));let fi=!1,ki=!1,Us=!1,Te=Hn.getUniforms(),Ve=Ht.uniforms;if(_.useProgram(Hn.program)&&(fi=!0,ki=!0,Us=!0),st.id!==$&&($=st.id,ki=!0),Ht.needsLights){let Le=qp(A.state.lightProbeGridArray,rt);Ht.lightProbeGrid!==Le&&(Ht.lightProbeGrid=Le,ki=!0)}if(fi||ot!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(q,"projectionMatrix",b.projectionMatrix),Te.setValue(q,"viewMatrix",b.matrixWorldInverse);let Vi=Te.map.cameraPosition;Vi!==void 0&&Vi.setValue(q,at.setFromMatrixPosition(b.matrixWorld)),F.logarithmicDepthBuffer&&Te.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Te.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),ot!==b&&(ot=b,ki=!0,Us=!0)}if(Ht.needsLights&&(Mn.state.sunShadowMap.length>0&&Te.setValue(q,"sunShadowMap",Mn.state.sunShadowMap,dt),Mn.state.directionalShadowMap.length>0&&Te.setValue(q,"directionalShadowMap",Mn.state.directionalShadowMap,dt),Mn.state.spotShadowMap.length>0&&Te.setValue(q,"spotShadowMap",Mn.state.spotShadowMap,dt),Mn.state.pointShadowMap.length>0&&Te.setValue(q,"pointShadowMap",Mn.state.pointShadowMap,dt)),rt.isSkinnedMesh){Te.setOptional(q,rt,"bindMatrix"),Te.setOptional(q,rt,"bindMatrixInverse");let Le=rt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Te.setValue(q,"boneTexture",Le.boneTexture,dt))}rt.isBatchedMesh&&(Te.setOptional(q,rt,"batchingTexture"),Te.setValue(q,"batchingTexture",rt._matricesTexture,dt),Te.setOptional(q,rt,"batchingIdTexture"),Te.setValue(q,"batchingIdTexture",rt._indirectTexture,dt),Te.setOptional(q,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Te.setValue(q,"batchingColorTexture",rt._colorsTexture,dt));let Gi=ct.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&tt.update(rt,ct,Hn),(ki||Ht.receiveShadow!==rt.receiveShadow)&&(Ht.receiveShadow=rt.receiveShadow,Te.setValue(q,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&K.environment!==null&&(Ve.envMapIntensity.value=K.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Zy()),ki){if(Te.setValue(q,"toneMappingExposure",I.toneMappingExposure),Ht.needsLights&&Zp(Ve,Us),Nt&&st.fog===!0&&qt.refreshFogUniforms(Ve,Nt),qt.refreshMaterialUniforms(Ve,st,T,M,A.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){let Le=Ht.lightProbeGrid;Ve.probesSH.value=Le.texture,Ve.probesMin.value.copy(Le.boundingBox.min),Ve.probesMax.value.copy(Le.boundingBox.max),Ve.probesResolution.value.copy(Le.resolution)}_r.upload(q,bu(Ht),Ve,dt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(_r.upload(q,bu(Ht),Ve,dt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Te.setValue(q,"center",rt.center),Te.setValue(q,"modelViewMatrix",rt.modelViewMatrix),Te.setValue(q,"normalMatrix",rt.normalMatrix),Te.setValue(q,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){let Le=st.uniformsGroups;for(let Vi=0,Fs=Le.length;Vi<Fs;Vi++){let Au=Le[Vi];_t.update(Au,Hn),_t.bind(Au,Hn)}}return Hn}function Zp(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.sunLights.needsUpdate=K,b.sunLightShadows.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function Jp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,K,ct){let st=it.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),it.get(b.texture).__webglTexture=K,it.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,K){let ct=it.get(b);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ct=0){Q=b,Z=K,G=ct;let st=null,rt=!1,Nt=!1;if(b){let Dt=it.get(b);if(Dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(q.FRAMEBUFFER,Dt.__webglFramebuffer),lt.copy(b.viewport),Et.copy(b.scissor),ut=b.scissorTest,_.viewport(lt),_.scissor(Et),_.setScissorTest(ut),$=-1;return}else if(Dt.__webglFramebuffer===void 0)dt.setupRenderTarget(b);else if(Dt.__hasExternalTextures)dt.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let re=b.depthTexture;if(Dt.__boundDepthTexture!==re){if(re!==null&&it.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(b)}}let kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);let Xt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[K])?st=Xt[K][ct]:st=Xt[K],rt=!0):b.samples>0&&dt.useMultisampledRTT(b)===!1?st=it.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?st=Xt[ct]:st=Xt,lt.copy(b.viewport),Et.copy(b.scissor),ut=b.scissorTest}else lt.copy(W).multiplyScalar(T).floor(),Et.copy(J).multiplyScalar(T).floor(),ut=k;if(ct!==0&&(st=U),_.bindFramebuffer(q.FRAMEBUFFER,st)&&_.drawBuffers(b,st),_.viewport(lt),_.scissor(Et),_.setScissorTest(ut),rt){let Dt=it.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,ct)}else if(Nt){let Dt=K;for(let kt=0;kt<b.textures.length;kt++){let Xt=it.get(b.textures[kt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+kt,Xt.__webglTexture,ct,Dt)}}else if(b!==null&&ct!==0){let Dt=it.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Dt.__webglTexture,ct)}$=-1};function wu(b){let K=it.get(b);return(K.__readFormat!==b.format||K.__readType!==b.type)&&(K.__readFormat=b.format,K.__readType=b.type,K.__formatReadable=F.textureFormatReadable(b.format),K.__typeReadable=F.textureTypeReadable(b.type)),K}this.readRenderTargetPixels=function(b,K,ct,st,rt,Nt,zt,Dt=0){if(!(b&&b.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt){_.bindFramebuffer(q.FRAMEBUFFER,kt);try{let Xt=b.textures[Dt],re=Xt.format,he=Xt.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Dt);let Gt=wu(Xt);if(Gt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-st&&ct>=0&&ct<=b.height-rt&&q.readPixels(K,ct,st,rt,Pt.convert(re),Pt.convert(he),Nt)}finally{let Xt=Q!==null?it.get(Q).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,K,ct,st,rt,Nt,zt,Dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt)if(K>=0&&K<=b.width-st&&ct>=0&&ct<=b.height-rt){_.bindFramebuffer(q.FRAMEBUFFER,kt);let Xt=b.textures[Dt],re=Xt.format,he=Xt.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Dt);let Gt=wu(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Me),q.bufferData(q.PIXEL_PACK_BUFFER,Nt.byteLength,q.STREAM_READ),q.readPixels(K,ct,st,rt,Pt.convert(re),Pt.convert(he),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Xe=Q!==null?it.get(Q).__webglFramebuffer:null;_.bindFramebuffer(q.FRAMEBUFFER,Xe);let De=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Gd(q,De,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Me),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Nt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Me),q.deleteSync(De),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,K=null,ct=0){let st=Math.pow(2,-ct),rt=Math.floor(b.image.width*st),Nt=Math.floor(b.image.height*st),zt=K!==null?K.x:0,Dt=K!==null?K.y:0;dt.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,ct,0,0,zt,Dt,rt,Nt),_.unbindTexture()},this.copyTextureToTexture=function(b,K,ct=null,st=null,rt=0,Nt=0){let zt,Dt,kt,Xt,re,he,Gt,Me,Xe,De=b.isCompressedTexture?b.mipmaps[Nt]:b.image;if(ct!==null)zt=ct.max.x-ct.min.x,Dt=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,Xt=ct.min.x,re=ct.min.y,he=ct.isBox3?ct.min.z:0;else{let Ve=Math.pow(2,-rt);zt=Math.floor(De.width*Ve),Dt=Math.floor(De.height*Ve),b.isDataArrayTexture?kt=De.depth:b.isData3DTexture?kt=Math.floor(De.depth*Ve):kt=1,Xt=0,re=0,he=0}st!==null?(Gt=st.x,Me=st.y,Xe=st.z):(Gt=0,Me=0,Xe=0);let Ce=Pt.convert(K.format),pn=Pt.convert(K.type),Ht;K.isData3DTexture?(dt.setTexture3D(K,0),Ht=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(dt.setTexture2DArray(K,0),Ht=q.TEXTURE_2D_ARRAY):(dt.setTexture2D(K,0),Ht=q.TEXTURE_2D),_.activeTexture(q.TEXTURE0),_.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),_.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),_.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);let Mn=_.getParameter(q.UNPACK_ROW_LENGTH),me=_.getParameter(q.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(q.UNPACK_SKIP_PIXELS),fi=_.getParameter(q.UNPACK_SKIP_ROWS),ki=_.getParameter(q.UNPACK_SKIP_IMAGES);_.pixelStorei(q.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(q.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(q.UNPACK_SKIP_ROWS,re),_.pixelStorei(q.UNPACK_SKIP_IMAGES,he);let Us=b.isDataArrayTexture||b.isData3DTexture,Te=K.isDataArrayTexture||K.isData3DTexture;if(b.isDepthTexture){let Ve=it.get(b),Gi=it.get(K),Le=it.get(Ve.__renderTarget),Vi=it.get(Gi.__renderTarget);_.bindFramebuffer(q.READ_FRAMEBUFFER,Le.__webglFramebuffer),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Fs=0;Fs<kt;Fs++)Us&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,it.get(b).__webglTexture,rt,he+Fs),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,it.get(K).__webglTexture,Nt,Xe+Fs)),q.blitFramebuffer(Xt,re,zt,Dt,Gt,Me,zt,Dt,q.DEPTH_BUFFER_BIT,q.NEAREST);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(rt!==0||b.isRenderTargetTexture||it.has(b)){let Ve=it.get(b),Gi=it.get(K);_.bindFramebuffer(q.READ_FRAMEBUFFER,C),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,V);for(let Le=0;Le<kt;Le++)Us?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ve.__webglTexture,rt,he+Le):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ve.__webglTexture,rt),Te?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Gi.__webglTexture,Nt,Xe+Le):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Gi.__webglTexture,Nt),rt!==0?q.blitFramebuffer(Xt,re,zt,Dt,Gt,Me,zt,Dt,q.COLOR_BUFFER_BIT,q.NEAREST):Te?q.copyTexSubImage3D(Ht,Nt,Gt,Me,Xe+Le,Xt,re,zt,Dt):q.copyTexSubImage2D(Ht,Nt,Gt,Me,Xt,re,zt,Dt);_.bindFramebuffer(q.READ_FRAMEBUFFER,null),_.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,pn,De.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,De.data):q.texSubImage3D(Ht,Nt,Gt,Me,Xe,zt,Dt,kt,Ce,pn,De):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Nt,Gt,Me,zt,Dt,Ce,pn,De.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Nt,Gt,Me,De.width,De.height,Ce,De.data):q.texSubImage2D(q.TEXTURE_2D,Nt,Gt,Me,zt,Dt,Ce,pn,De);_.pixelStorei(q.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(q.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(q.UNPACK_SKIP_ROWS,fi),_.pixelStorei(q.UNPACK_SKIP_IMAGES,ki),Nt===0&&K.generateMipmaps&&q.generateMipmap(Ht),_.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&dt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?dt.setTextureCube(b,0):b.isData3DTexture?dt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?dt.setTexture2DArray(b,0):dt.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Z=0,G=0,Q=null,_.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Rf={ArrowUp:"forward",KeyW:"forward",ArrowDown:"back",KeyS:"back",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"},No=56,vr=.14;function Cf({canvas:i,held:t,stick:e,isFree:n,onCommand:s,onDrag:r,onMoved:o,blocked:a,onKey:l,repeat:c=()=>!0}){let h=document.body,d=document.getElementById("stick"),u=document.getElementById("knob"),f=g=>g.target&&/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(g.target.tagName)&&g.target.closest("#menu"),x=()=>{for(let g in t)t[g]=!1;e.x=0,e.y=0};window.addEventListener("keydown",g=>{if(g.altKey||g.ctrlKey||g.metaKey)return;if(l(g)){g.preventDefault();return}if(f(g)||a())return;let E=Rf[g.code];E&&(g.preventDefault(),o(),n()?t[E]=!0:(!g.repeat||c())&&s(E))}),window.addEventListener("keyup",g=>{let E=Rf[g.code];E&&(t[E]=!1)}),window.addEventListener("blur",x),document.addEventListener("visibilitychange",()=>{document.hidden&&x()}),window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&h.classList.add("touch");let p=null,m=[0,0],S=null,P=0,v=g=>{let E=i.getBoundingClientRect();return g.clientX-E.left<E.width*.5&&g.clientY-E.top>E.height*.4},R=(g,E)=>{let I=i.getBoundingClientRect();d.style.left=`${g-I.left}px`,d.style.top=`${E-I.top}px`,d.hidden=!1,A(0,0)},A=(g,E)=>{u.style.transform=`translate(${g}px, ${E}px)`};i.addEventListener("pointerdown",g=>{if(!a()){if(g.pointerType==="touch"&&h.classList.add("touch"),g.pointerType==="touch"&&n()&&p===null&&v(g))p=g.pointerId,m=[g.clientX,g.clientY],R(g.clientX,g.clientY);else if(S===null)S=g.pointerId,P=g.clientX;else return;try{i.setPointerCapture(g.pointerId)}catch{}o()}}),i.addEventListener("pointermove",g=>{if(g.pointerId===p){let E=g.clientX-m[0],I=g.clientY-m[1],N=Math.hypot(E,I);N>No&&(E*=No/N,I*=No/N),A(E,I);let L=E/No,U=I/No;e.x=Math.abs(L)<vr?0:(L-Math.sign(L)*vr)/(1-vr),e.y=Math.abs(U)<vr?0:(U-Math.sign(U)*vr)/(1-vr)}else g.pointerId===S&&(n()&&r(g.clientX-P),P=g.clientX)});let B=g=>{g.pointerId===p&&(p=null,e.x=0,e.y=0,d.hidden=!0),g.pointerId===S&&(S=null)};for(let g of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(g,B);for(let g of document.querySelectorAll("#pad [data-cmd]"))g.addEventListener("pointerdown",E=>{E.preventDefault(),o(),s(g.dataset.cmd)}),g.addEventListener("keydown",E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),s(g.dataset.cmd))});return{setMovement(g){x(),p=null,d.hidden=!0,h.classList.toggle("step",g==="step"),h.classList.toggle("free",g!=="step")}}}var Jy={sound:!0,volume:.8,footsteps:.8,footTone:1,footCrisp:.6,wind:.5,lampHum:.35,music:.5,bells:.5,reverb:.5},Lf=Jy,ls=i=>440*Math.pow(2,(i-69)/12),Pf=[62,64,65,67,69,71,72,74,76,77,79,81,83,84,86],If=[[50,57,62,65,69],[46,53,58,62,65],[41,48,53,57,64],[48,55,60,64,67]];function Df(i){let t=null,e,n,s,r,o,a,l,c,h=[],d=0,u=0,f=0,x,y,p,m,S,P,v=0,R=0,A=[0,1,0],B="forest",g=i;function E(M){let T=t.createBuffer(1,Math.round(t.sampleRate*M),t.sampleRate),w=T.getChannelData(0);for(let Y=0;Y<w.length;Y++)w[Y]=Math.random()*2-1;return T}function I(M=4.2){let T=Math.round(t.sampleRate*M),w=t.createBuffer(2,T,t.sampleRate);for(let Y=0;Y<2;Y++){let W=w.getChannelData(Y);for(let J=0;J<T;J++)W[J]=(Math.random()*2-1)*Math.pow(1-J/T,2.6)}return w}function N(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.connect(t.destination),a=E(2.5),s=t.createConvolver(),s.buffer=I(),r=t.createGain(),o=t.createGain(),n=t.createGain(),n.connect(o),n.connect(s),s.connect(r),o.connect(e),r.connect(e),x=t.createGain(),y=t.createBiquadFilter(),y.type="lowpass",y.frequency.value=9e3,x.connect(y),y.connect(e),p=t.createGain(),p.gain.value=0;{let j=t.createDelay(1);j.delayTime.value=.085;let nt=t.createGain();nt.gain.value=.38;let at=t.createBiquadFilter();at.type="lowpass",at.frequency.value=1400,p.connect(j),j.connect(at),at.connect(nt),nt.connect(j),at.connect(e)}l=[{f:420,q:.6,g:.55,rate:.07},{f:1700,q:2.5,g:.12,rate:.11}].map(j=>{let nt=t.createBufferSource();nt.buffer=a,nt.loop=!0;let at=t.createBiquadFilter();at.type="bandpass",at.frequency.value=j.f,at.Q.value=j.q;let xt=t.createGain();return xt.gain.value=0,nt.connect(at),at.connect(xt),xt.connect(x),nt.start(0,Math.random()*2),{...j,filt:at,gain:xt,phase:Math.random()*10}});let M=t.createPanner();Object.assign(M,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.5,rolloffFactor:1.6,maxDistance:60}),L(M,0,3.6,0);let T=t.createGain();T.gain.value=0;let w=t.createOscillator();w.frequency.value=98;let Y=t.createOscillator();Y.frequency.value=196.6;let W=t.createGain();W.gain.value=.18;let J=t.createGain();J.gain.value=.05;let k=t.createBufferSource();k.buffer=a,k.loop=!0;let z=t.createBiquadFilter();z.type="highpass",z.frequency.value=3500;let X=t.createGain();X.gain.value=.05,w.connect(W),Y.connect(J),k.connect(z),z.connect(X);for(let j of[W,J,X])j.connect(T);T.connect(M),M.connect(e),w.start(),Y.start(),k.start(0,1),c={lampGain:T};{let j=t.createPanner();Object.assign(j,{panningModel:"HRTF",distanceModel:"inverse",refDistance:1.2,rolloffFactor:1.4,maxDistance:30}),L(j,...A);let nt=t.createGain();nt.gain.value=0;let at=t.createBufferSource();at.buffer=a,at.loop=!0;let xt=t.createBiquadFilter();xt.type="bandpass",xt.frequency.value=2200,xt.Q.value=.6;let Mt=t.createGain();Mt.gain.value=.02;let Tt=t.createBufferSource();Tt.buffer=a,Tt.loop=!0;let Ot=t.createBiquadFilter();Ot.type="lowpass",Ot.frequency.value=180;let q=t.createGain();q.gain.value=.35,at.connect(xt),xt.connect(Mt),Mt.connect(nt),Tt.connect(Ot),Ot.connect(q),q.connect(nt),nt.connect(j),j.connect(e),at.start(0,.3),Tt.start(0,1.1),m={gain:nt,pop:Mt,pan:j}}{let j=t.createGain();j.gain.value=0,j.connect(e);let nt=t.createOscillator();nt.frequency.value=.7;let at=t.createGain();at.gain.value=.3,nt.connect(at);for(let[xt,Mt]of[[ls(86),.5],[ls(90)*1.002,.35],[ls(93),.25]]){let Tt=t.createOscillator();Tt.frequency.value=xt;let Ot=t.createGain();Ot.gain.value=Mt,at.connect(Ot.gain),Tt.connect(Ot),Ot.connect(j),Tt.start()}nt.start(),S={gain:j}}{let j=(de,ie,F)=>{let _=t.createBufferSource();_.buffer=a,_.loop=!0;let et=t.createBiquadFilter();et.type=de,et.frequency.value=ie,et.Q.value=F;let it=t.createGain();return it.gain.value=0,_.connect(et),et.connect(it),it.connect(e),_.start(0,Math.random()*2),{g:it,fl:et}},nt=j("bandpass",700,.8),at=j("highpass",3800,.5),xt=j("lowpass",200,.7),Mt=t.createOscillator();Mt.frequency.value=16;let Tt=t.createGain();Tt.gain.value=0,Mt.connect(Tt),Tt.connect(nt.g.gain),Mt.start();let Ot=t.createOscillator();Ot.frequency.value=ls(38);let q=t.createGain();q.gain.value=0,Ot.connect(q),q.connect(e),Ot.start(),P={rattle:nt,hiss:at,swellN:xt,fg:Tt,dg:q}}u=t.currentTime+.5,d=t.currentTime+3,D()}function L(M,T,w,Y){M.positionX?(M.positionX.value=T,M.positionY.value=w,M.positionZ.value=Y):M.setPosition(T,w,Y)}function U(M,T){let w=t.listener;w.positionX?(w.positionX.value=M.x,w.positionY.value=M.y,w.positionZ.value=M.z,w.forwardX.value=T.x,w.forwardY.value=T.y,w.forwardZ.value=T.z,w.upX.value=0,w.upY.value=1,w.upZ.value=0):(w.setPosition(M.x,M.y,M.z),w.setOrientation(T.x,T.y,T.z,0,1,0))}function C({surface:M="snow",creak:T=!1}={}){if(!t||!g.sound||g.footsteps<=0)return;if(M==="boards"||M==="wood"||M==="hollow"){V(M),T&&Z(380,.25,.05);return}let w=M==="path",Y=t.currentTime,W=t.createBufferSource();W.buffer=a;let J=t.createBiquadFilter();J.type="bandpass";let k=(w?1200:2100)*g.footTone*(.85+Math.random()*.3);J.frequency.value=k,J.Q.value=.7;let z=t.createBiquadFilter();z.type="lowpass",z.frequency.value=k*2.6;let X=t.createGain(),j=.16+Math.random()*.07,nt=g.footsteps*(w?.5:.75)*(.8+Math.random()*.4);X.gain.setValueAtTime(0,Y),X.gain.linearRampToValueAtTime(nt,Y+.008);for(let at=.012;at<j;at+=.006+Math.random()*.01){let xt=Math.pow(1-at/j,1.6);X.gain.setValueAtTime(nt*xt*(1-g.footCrisp*Math.random()),Y+at)}X.gain.linearRampToValueAtTime(0,Y+j+.02),W.connect(J),J.connect(z),z.connect(X),X.connect(e),W.start(Y,Math.random()*2,j+.05)}function V(M,T=1){let w=t.currentTime,Y=M==="hollow",W=(Y?105:M==="boards"?150:135)*(.9+Math.random()*.2),J=t.createOscillator();J.frequency.setValueAtTime(W*1.6,w),J.frequency.exponentialRampToValueAtTime(W,w+.04);let k=t.createGain(),z=g.footsteps*.32*T*(.8+Math.random()*.4);k.gain.setValueAtTime(0,w),k.gain.linearRampToValueAtTime(z,w+.004),k.gain.exponentialRampToValueAtTime(5e-4,w+(Y?.16:.1));let X=t.createBufferSource();X.buffer=a;let j=t.createBiquadFilter();j.type="bandpass",j.frequency.value=Y?700:1300,j.Q.value=1.2;let nt=t.createGain();nt.gain.setValueAtTime(z*.5,w),nt.gain.exponentialRampToValueAtTime(5e-4,w+.05),J.connect(k),X.connect(j),j.connect(nt);for(let at of[k,nt])at.connect(e),Y&&at.connect(p);J.start(w),J.stop(w+.2),X.start(w,Math.random()*2,.07)}function Z(M,T,w,Y=!1){let W=t.currentTime,J=t.createOscillator();J.type="sawtooth",J.frequency.setValueAtTime(M,W),J.frequency.linearRampToValueAtTime(M*.78,W+T);let k=t.createBiquadFilter();k.type="bandpass",k.frequency.value=M*2.2,k.Q.value=6;let z=t.createGain();z.gain.setValueAtTime(0,W),z.gain.linearRampToValueAtTime(w,W+T*.25),z.gain.linearRampToValueAtTime(0,W+T),J.connect(k),k.connect(z),z.connect(e),Y&&z.connect(p),J.start(W),J.stop(W+T+.05)}function G(M){if(!t||!g.sound)return;let T=t.currentTime,w={wardrobe:62,"tree-door":57,arch:65,slide:69}[M]||62;[0,7,14].forEach((Y,W)=>{let J=t.createOscillator();J.frequency.value=ls(w+Y);let k=t.createGain(),z=.05/(1+W*.4);k.gain.setValueAtTime(0,T+W*.06),k.gain.linearRampToValueAtTime(z,T+W*.06+.02),k.gain.exponentialRampToValueAtTime(3e-4,T+3),J.connect(k),k.connect(n),J.start(T+W*.06),J.stop(T+3.1)})}function Q(){!t||!g.sound||(V("wood",1.4),setTimeout(()=>{t&&V("boards",.5)},140))}function $(){!t||!g.sound||V("wood",.9)}function ot(){if(!t||!g.sound)return;let M=t.currentTime,T=t.createBufferSource();T.buffer=a;let w=t.createBiquadFilter();w.type="bandpass",w.frequency.value=3200,w.Q.value=.9;let Y=t.createGain();Y.gain.setValueAtTime(0,M);for(let[W,J]of[[.01,.05],[.05,.02],[.08,.04],[.14,.015],[.22,0]])Y.gain.linearRampToValueAtTime(J,M+W);T.connect(w),w.connect(Y),Y.connect(e),T.start(M,Math.random()*2,.25)}function lt(M){if(!t)return;let T=t.currentTime,w=P;w.rattle.g.gain.setTargetAtTime(M==="wood"?.22:0,T,.08),w.fg.gain.setTargetAtTime(M==="wood"?.12:0,T,.08),w.hiss.g.gain.setTargetAtTime(M==="ice"?.14:0,T,.1),w.swellN.g.gain.setTargetAtTime(M==="blue"?.4:0,T,M==="blue"?.5:.2),w.dg.gain.setTargetAtTime(M==="blue"?.12:0,T,M==="blue"?.4:.2),M==="blue"?w.swellN.fl.frequency.setTargetAtTime(900,T,.6):w.swellN.fl.frequency.setTargetAtTime(200,T,.1)}function Et(M){B=M,t&&D()}function ut(M){let T=If[f++%If.length],w=13;for(let Y of T){let W=t.createOscillator(),J=t.createOscillator();W.type="triangle",J.type="sawtooth",W.frequency.value=ls(Y),J.frequency.value=ls(Y)*1.004;let k=t.createBiquadFilter();k.type="lowpass",k.frequency.value=650,k.Q.value=.4;let z=t.createGain();z.gain.value=.25;let X=t.createGain();X.gain.setValueAtTime(0,M),X.gain.linearRampToValueAtTime(.045,M+4.5),X.gain.setValueAtTime(.045,M+w-5),X.gain.linearRampToValueAtTime(0,M+w),W.connect(k),J.connect(z),z.connect(k),k.connect(X),X.connect(n),W.start(M),J.start(M),W.stop(M+w+.1),J.stop(M+w+.1)}}function St(M){let T=Pf[Math.floor(Math.random()*Pf.length)]+(Math.random()<.3?12:0),w=t.createStereoPanner();w.pan.value=Math.random()*1.4-.7;let Y=t.createGain();Y.connect(w),w.connect(n);let W=.06+Math.random()*.04,J=3.5+Math.random()*2;Y.gain.setValueAtTime(0,M),Y.gain.linearRampToValueAtTime(W,M+.01),Y.gain.exponentialRampToValueAtTime(5e-4,M+J);for(let[k,z]of[[1,1],[2.76,.25],[5.4,.08]]){let X=t.createOscillator();X.frequency.value=ls(T)*k;let j=t.createGain();j.gain.value=z,X.connect(j),j.connect(Y),X.start(M),X.stop(M+J+.1)}}function D(){if(!t)return;let M=t.currentTime;e.gain.setTargetAtTime(g.sound?g.volume:0,M,.08);let T=B==="library"?.4:B==="tunnel"?.7:1;n.gain.setTargetAtTime(g.music*(B==="library"?.7:B==="ride"?.6:1),M,.3),r.gain.setTargetAtTime(g.reverb*.9*T,M,.2),o.gain.setTargetAtTime(1-g.reverb*.55*T,M,.2),c.lampGain.gain.setTargetAtTime(B==="forest"?g.lampHum:0,M,.2),p.gain.setTargetAtTime(B==="tunnel"?.55:0,M,.1),m.gain.gain.setTargetAtTime(B==="library"?.5:0,M,.3),y.frequency.setTargetAtTime(B==="library"?700:9e3,M,.3)}function H({camPos:M,camFwd:T,outside:w,lane:Y=0,archNear:W=0,ride:J=null}){if(!t||t.state!=="running")return;let k=t.currentTime;U(M,T);let z=B==="forest"?1-.7*Y:B==="library"?.3:B==="ride"&&J&&J.part!=="wood"?1.3:0;B==="forest"&&y.frequency.setTargetAtTime(9e3-7600*Y,k,.3);for(let X of l){X.phase+=X.rate/60;let j=.55+.45*Math.sin(X.phase)*Math.sin(X.phase*.37+1),nt=B==="forest"?.45+.55*w:1;X.gain.gain.setTargetAtTime(g.wind*X.g*j*nt*z,k,.3),X.filt.frequency.setTargetAtTime(X.f*(.8+.4*j),k,.5)}S.gain.gain.setTargetAtTime(B==="forest"?.12*W*W*g.music*2:0,k,.25),B==="library"&&k>=R&&(m.pop.gain.setValueAtTime(.25+Math.random()*.5,k),m.pop.gain.setTargetAtTime(.02,k+.01,.02),R=k+.04+Math.random()*Math.random()*.45),B==="tunnel"&&k>=v?(v&&Z(62+Math.random()*18,1.2+Math.random()*.6,.07,!0),v=k+6+Math.random()*9):B!=="tunnel"&&(v=0),g.music>0?(k>=u-.2&&(ut(Math.max(k,u)),u+=9),g.bells>0&&k>=d&&(St(k+.05),d=k+(2+Math.random()*6)/Math.max(.15,g.bells))):(u=k+1,d=k+2)}return{start(){t||N(),t.state==="suspended"&&!document.hidden&&t.resume()},step:C,update:H,apply:D,portal:G,door:Q,hop:$,rustle:ot,ride:lt,setPlace:Et,setFirePos(M,T,w){A=[M,T,w],m&&L(m.pan,M,T,w)},pause(){t&&t.state==="running"&&t.suspend()},resume(){t&&t.state==="suspended"&&t.resume()},get running(){return!!t&&t.state==="running"},get started(){return!!t}}}var Nf=Object.freeze({skyTop:"#04060d",skyHorizon:"#1a2640",stars:.7,moonlight:.8,moonColour:"#9fb6ff",ambient:.6,exposure:1,lampColour:"#ffbf6e",lampIntensity:14,lampReach:18,halo:1.6,shadows:!0,flicker:.15,snowAmount:6e3,snowSpeed:.8,flakeSize:1,snowDrift:.5,falling:!0,snowColour:"#e6ecf6",pathColour:"#8592ab",pathWidth:1.8,bumps:.5,treeCount:260,treeSize:1,treeSpacing:2.6,treeSnow:.75,treeColour:"#2c5341",trunkColour:"#4a3527",seed:7,fogColour:"#141c2e",fogDensity:.03,distance:3.2,height:2.1,shoulder:.35,lookAhead:1.6,lookHeight:.75,fov:62,follow:7,walkSpeed:2.6,turnSpeed:150,mouseTurn:!0}),Uf=Object.freeze({skyTop:"#06121c",skyHorizon:"#1f4152",fogColour:"#10242e",fogDensity:.026,ambient:.75,hemiSky:"#9fd0d8",moonColour:"#b8e2e6",snowSpeed:.35,lampColour:"#ffd9a0"}),Ff=()=>({...Lf});function Ze(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var $y=[[.2,-5.5],[-.5,-10.5],[.5,-15.5],[1.3,-19.5],[3.6,-22.2],[7.5,-23.4],[12,-23],[16.5,-23.7],[21,-23.3],[25,-23.5]],Fo=[{id:"wardrobe",route:$y},{id:"tree-door",angle:.15,bend:-1.2},{id:"arch",angle:Math.PI/2-.2,bend:.9},{id:"slide",angle:Math.PI+.1,bend:-.8}],Ky=.82;function Qy(i,t){let e=Math.max(0,Math.min(Ky,(t-7)/23));return i.angle+e*i.bend*.55+Math.sin(e*Math.PI*1.6)*.16*i.bend}function Sr(i,{from:t=7-1.5,to:e=30,step:n=.5}={}){if(i.route)return Of(i.route,{from:t,extra:Math.max(0,e-30),step:n});let s=[];for(let r=t;r<=e+1e-9;r+=n){let o=Qy(i,r);s.push([Math.cos(o)*r,Math.sin(o)*r])}return s}var Kh=i=>Fo.find(t=>t.id===i);function Of(i,{from:t,extra:e,step:n}){let s=[...i];if(t<Math.hypot(...i[0])-.25){let[h,d]=i[0],u=Math.hypot(h,d),f=Math.max(0,t)/u;s.unshift([h*f,d*f])}let r=[],o=[s[0],...s,s[s.length-1]];for(let h=1;h<o.length-2;h++){let[d,u,f,x]=[o[h-1],o[h],o[h+1],o[h+2]];for(let y=0;y<1;y+=.05){let p=y*y,m=p*y;r.push([0,1].map(S=>.5*(2*u[S]+(-d[S]+f[S])*y+(2*d[S]-5*u[S]+4*f[S]-x[S])*p+(-d[S]+3*u[S]-3*f[S]+x[S])*m)))}}r.push(s[s.length-1]);let a=[r[0]],l=0;for(let h=1;h<r.length;h++){let[d,u]=r[h-1],[f,x]=r[h],y=Math.hypot(f-d,x-u);for(;l+y>=n;){let p=(n-l)/y;d+=(f-d)*p,u+=(x-u)*p,y=Math.hypot(f-d,x-u),a.push([d,u]),l=0}l+=y}let c=s[s.length-1];if(Math.hypot(a.at(-1)[0]-c[0],a.at(-1)[1]-c[1])>.05&&a.push(c),e>0){let[h,d]=a.at(-2),[u,f]=a.at(-1),x=Math.hypot(u-h,f-d);for(let y=n;y<=e+1e-9;y+=n)a.push([u+(u-h)/x*y,f+(f-d)/x*y])}return a}function ec(i,t,e){let n=1/0,s=null;for(let r of e){let o=r.pts;for(let a=1;a<o.length;a++){let[l,c]=o[a-1],[h,d]=o[a],u=h-l,f=d-c,x=Math.max(0,Math.min(1,((i-l)*u+(t-c)*f)/(u*u+f*f))),y=Math.hypot(i-(l+u*x),t-(c+f*x));y<n&&(n=y,s=r.id)}}return{d:n,id:s}}function jy(i){let t=Sr(Kh(i)),[e,n]=t[t.length-1],[s,r]=t[t.length-3],o=Math.hypot(e-s,n-r),a=[(e-s)/o,(n-r)/o];return{id:i,o:[e,n],d:a,r:[-a[1],a[0]]}}var te=Object.fromEntries(Fo.map(i=>[i.id,jy(i.id)]));function be(i,t,e){let n=t-i.o[0],s=e-i.o[1];return[n*i.d[0]+s*i.d[1],n*i.r[0]+s*i.r[1]]}function ge(i,t,e){return[i.o[0]+i.d[0]*t+i.r[0]*e,i.o[1]+i.d[1]*t+i.r[1]*e]}var br=(i,t)=>Math.atan2(-i,-t),dn={depth:2.6,half:1.1,height:2.45,inner:.8},Uo={opening:1.2,pillar:.45,height:3.6,glade:3.4,gladeAt:-1.6},tn={radius:2.5,at:3.2,mouth:.95,glade:3,gladeAt:-1},pe={width:10,depth:14,front:.6,door:.7,glade:3.6,gladeAt:-1.2},Hi=i=>te[i],ci=ge(Hi("tree-door"),tn.at,0),Hf=ge(Hi("slide"),pe.front+pe.depth/2,0),Mr=[{id:"arch",at:ge(Hi("arch"),Uo.gladeAt,0),r:Uo.glade},{id:"tree-door",at:ge(Hi("tree-door"),tn.gladeAt,0),r:tn.glade},{id:"slide",at:ge(Hi("slide"),pe.gladeAt,0),r:pe.glade}],tv=[{at:ge(Hi("arch"),0,0),r:7.5},{at:ci,r:9.5},{at:Hf,r:12.5},{at:ge(Hi("wardrobe"),-1.2,0),r:3.6}],ev=[{at:ge(Hi("wardrobe"),-1.5,0),r:4,fade:4},{at:ge(Hi("arch"),-.8,0),r:5,fade:4},{at:ci,r:7,fade:4},{at:Hf,r:11,fade:4}],zf=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function nv(i,t){let e=1;for(let n of ev)e=Math.min(e,zf(n.r,n.r+n.fade,Math.hypot(i-n.at[0],t-n.at[1])));return e}function nc(i,t,e){let n=Math.hypot(i,t),s=Math.sin(i*.35)*Math.cos(t*.29)+Math.sin(i*.11+t*.17)*1.6,r=Math.hypot(i-Er[0],t-Er[1]),o=r<2.6?1.1*(1-zf(.6,2.6,r)):0;return s*e*Math.min(1,Math.max(0,(n-7+1)/6))*nv(i,t)-o}function kf(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));return t}function Gf(i,t){let e=Sr(Kh(i)),n=kf(e),s=n[n.length-1];t=Math.max(0,Math.min(s,t));let r=1;for(;r<n.length-1&&n[r]<t;)r++;let o=(t-n[r-1])/(n[r]-n[r-1]||1),[a,l]=e[r-1],[c,h]=e[r],d=Math.hypot(c-a,h-l)||1;return{x:a+(c-a)*o,z:l+(h-l)*o,dx:(c-a)/d,dz:(h-l)/d,total:s}}var Vf=i=>{let t=kf(Sr(Kh(i)));return t[t.length-1]};function Wf({gap:i=.42,side:t=.95}={}){let e=Vf("wardrobe"),n=[];for(let s=e-8;s<=e-.25;s+=i){let r=Gf("wardrobe",s),o=(s-(e-8))/8;for(let a of[-1,1])n.push({x:r.x-r.dz*t*a,z:r.z+r.dx*t*a,t:o,side:a,dx:r.dx,dz:r.dz})}return n}function iv(){let i=Vf("wardrobe"),t=[],e=0;for(let n=i-8-1.5;n<=i-8*.42;n+=1.25,e++){let s=Gf("wardrobe",n);for(let r of[-1,1]){let o=2.75+(e*7+(r>0?3:0))%5*.06;t.push({x:s.x-s.dz*o*r,z:s.z+s.dx*o*r,s:.66+(e*3+(r>0?1:0))%4*.03,r:e*1.7+r,lane:!0})}}return t}function sv(){let[i,t]=te.wardrobe.o,e=Math.hypot(i,t),n=[i/e,t/e],s=[-n[1],n[0]],r=[],o=0;for(let[a,l,c,h]of[[12.5,2.3,9,0],[16,2.3,9,1.15]])for(let d=-c+h;d<=c;d+=l,o++)r.push({x:n[0]*a+s[0]*d,z:n[1]*a+s[1]*d,s:.9+o%4*.05,r:o*2.3});return r}var $h=[[15.8,-1],[18.2,1.5],[19,5.5],[17.4,9.6],[13.6,12.6],[8.6,14.2],[3.8,14.8],[.6,15.4]];function Qh(i=.5){let t=te.slide;return Of($h.map(([e,n])=>ge(t,e,n)),{from:1/0,extra:0,step:i})}var Er=(()=>{let[i,t]=$h[$h.length-1];return ge(te.slide,i,t)})();function Xf({seed:i=7,count:t=260,spacing:e=2.6,size:n=1,pathWidth:s=1.8}={}){let r=Ze(i),o=Fo.map(d=>({id:d.id,pts:Sr(d,{to:d.id==="wardrobe"?33:36})})),a=iv(),l=Qh(1);for(let d of sv())ec(d.x,d.z,o).d<s/2+2*d.s||Math.hypot(d.x,d.z)<7+1.9*d.s||a.push(d);let c=a.length,h=0;for(;a.length<t+c&&h<t*60;){h++;let d=8+Math.pow(r(),.8)*36,u=r()*Math.PI*2,f=Math.cos(u)*d,x=Math.sin(u)*d,y=n*(.7+r()*.6)*(d<11?1.12:1);d<7+1.9*y||ec(f,x,o).d<s/2+2*y||tv.some(p=>Math.hypot(f-p.at[0],x-p.at[1])<p.r+1.2*y)||Mr.some(p=>Math.hypot(f-p.at[0],x-p.at[1])<p.r+2*y)||ec(f,x,[{pts:l}]).d<1.1+1.5*y||Math.hypot(f-Er[0],x-Er[1])<2.4+1.5*y||a.some(p=>Math.hypot(p.x-f,p.z-x)<e*(p.s+y)/2)||a.push({x:f,z:x,s:y,r:r()*Math.PI*2})}return a}var rv=i=>1.7*i,ov=.35,bi=.28;function av(i,t,{trees:e,paths:n,pathWidth:s=1.8}){let r=Math.hypot(i,t);if(r<ov+bi)return!1;for(let a of e)if(Math.hypot(a.x-i,a.z-t)<rv(a.s)+bi)return!1;{let[a,l]=be(te.wardrobe,i,t);if(a>-.3&&a<3&&Math.abs(l)<3||a>-dn.depth-.1&&a<=-.3&&Math.abs(l)>dn.inner&&Math.abs(l)<dn.half+.6)return!1}{let[a,l]=be(te.arch,i,t);if(a>-.32&&a<6&&Math.abs(l)<6)return!1}if(Math.hypot(i-ci[0],t-ci[1])<tn.radius+bi)return!1;{let[a,l]=be(te.slide,i,t);if(a>pe.front-bi&&a<pe.front+pe.depth+bi&&Math.abs(l)<pe.width/2+bi)return!1}return r<=7||Mr.some(a=>Math.hypot(i-a.at[0],t-a.at[1])<=a.r)?!0:ec(i,t,n).d<=s/2+.25}function qf(i,t,e){let n=[[i[0]+t[0],i[1]+t[1]],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]];for(let s of n)if(av(s[0],s[1],e))return s;return i}function Bf(i,t){let e=te[i],[n,s]=ge(e,t,0);return{x:n,z:s,yaw:br(-e.d[0],-e.d[1])}}var As={lamppost:{x:0,z:3.2,yaw:0},wardrobe:Bf("wardrobe",-2.2),arch:Bf("arch",-.9)};function jh(i,t){{let[e,n]=be(te.wardrobe,i,t);if(e>-.5&&e<.5&&Math.abs(n)<dn.inner+.05)return{id:"wardrobe",kind:"portal"}}{let[e,n]=be(te.arch,i,t);if(e>-.5&&e<.5&&Math.abs(n)<Uo.opening-.1)return{id:"arch",kind:"portal"}}{let[e,n]=be(te["tree-door"],i,t);if(Math.hypot(i-ci[0],t-ci[1])<tn.radius+bi+.25&&Math.abs(n)<tn.mouth&&e<tn.at)return{id:"tree-door",kind:"mouth"}}{let[e,n]=be(te.slide,i,t);if(e>pe.front-bi-.25&&e<pe.front&&Math.abs(n)<pe.door)return{id:"slide",kind:"door"}}return null}function Yf(i,t){if(Math.hypot(i,t)<=7+.5)return"the clearing";{let[n,s]=be(te.wardrobe,i,t);if(n>-8+2.5&&n<.5&&Math.abs(s)<3)return"among the coats"}return Math.hypot(...[0,1].map(n=>[i,t][n]-Mr[0].at[n]))<=Mr[0].r+1.5?"the stone arch":Math.hypot(i-ci[0],t-ci[1])<=tn.radius+4.5?"the great tree":Math.hypot(...[0,1].map(n=>[i,t][n]-Mr[2].at[n]))<=Mr[2].r+1.5?"the library":"in the woods"}var Ut=i=>new ee(i);function Zf(i,t){let e=new ii,n=new Je(t.fov,1,.05,600);e.fog=new Kr(Ut(t.fogColour),t.fogDensity),i.toneMapping=Mo,i.toneMappingExposure=t.exposure,i.shadowMap.enabled=!0,i.shadowMap.type=Ms;let s=new $e({uniforms:{top:{value:Ut(t.skyTop)},horizon:{value:Ut(t.skyHorizon)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, pow(h, 0.55)), 1.0); }",side:Ke,depthWrite:!1,fog:!1}),r=new ht(new We(400,32,16),s);r.renderOrder=-2,e.add(r);let o=new fe;{let M=new Float32Array(4200),T=new Float32Array(1400),w=12345,Y=()=>(w=w*16807%2147483647)/2147483647;for(let W=0;W<1400;W++){let J=Y(),k=.08+Y()*.92,z=J*Math.PI*2,X=k,j=Math.sqrt(1-X*X);M.set([Math.cos(z)*j*380,X*380,Math.sin(z)*j*380],W*3),T[W]=.3+Y()*.7}o.setAttribute("position",new Be(M,3)),o.setAttribute("bright",new Be(T,1))}let a=new $e({uniforms:{amount:{value:t.stars},time:{value:0}},vertexShader:"attribute float bright; uniform float time; varying float vB; void main(){ vB = bright * (0.75 + 0.25 * sin(time * 1.3 + position.x)); gl_PointSize = 1.0 + bright * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float amount; varying float vB; void main(){ vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(c)); gl_FragColor = vec4(vec3(0.85,0.9,1.0), a * vB * amount); }",transparent:!0,depthWrite:!1,fog:!1}),l=new lr(o,a);l.renderOrder=-1,e.add(l);let c=new vs(9413848,2765638,t.ambient);e.add(c);let h=new yo(Ut(t.moonColour),t.moonlight);h.position.set(-30,40,-18),e.add(h);let d=(H,M)=>nc(H,M,t.bumps),u=116,f=new ze(u,u,180,180).rotateX(-Math.PI/2);{let H=f.attributes.position;for(let M=0;M<H.count;M++)H.setY(M,d(H.getX(M),H.getZ(M)));f.computeVertexNormals()}let x=Fo.map(H=>({id:H.id,pts:Sr(H)})),y=document.createElement("canvas");y.width=y.height=2048;let p=(H,M)=>[(H/u+.5)*2048,(M/u+.5)*2048];{let H=y.getContext("2d");H.fillStyle=t.snowColour,H.fillRect(0,0,2048,2048);let M=(()=>{let W=99;return()=>(W=W*16807%2147483647)/2147483647})();for(let W=0;W<900;W++){let J=M()*2048,k=M()*2048,z=10+M()*60,X=H.createRadialGradient(J,k,0,J,k,z);X.addColorStop(0,M()<.5?"rgba(255,255,255,0.10)":"rgba(120,140,180,0.07)"),X.addColorStop(1,"rgba(0,0,0,0)"),H.fillStyle=X,H.beginPath(),H.arc(J,k,z,0,Math.PI*2),H.fill()}let T=2048/u;for(let W of[{w:1.35,a:.4,blur:6},{w:.95,a:.85,blur:2}]){H.save(),H.filter=`blur(${W.blur}px)`,H.strokeStyle=t.pathColour,H.globalAlpha=W.a,H.lineWidth=t.pathWidth*T*W.w,H.lineCap="round",H.lineJoin="round";for(let z of x)H.beginPath(),z.pts.forEach(([X,j],nt)=>{let[at,xt]=p(X,j);nt?H.lineTo(at,xt):H.moveTo(at,xt)}),H.stroke();let[J,k]=p(0,0);H.lineWidth=t.pathWidth*T*W.w*.9,H.beginPath(),H.arc(J,k,3.2*T,0,Math.PI*2),H.stroke(),H.globalAlpha=W.a*.45;for(let[z,X,j]of[["arch",-1.6,2.6],["tree-door",-.8,2.4],["slide",-1,2.8]]){let[nt,at]=p(...ge(te[z],X,0));H.fillStyle=t.pathColour,H.beginPath(),H.arc(nt,at,j*T,0,Math.PI*2),H.fill()}H.restore()}let w=te.slide,Y=[];for(let W of[4.1,8.1,12.1])Y.push(ge(w,W,pe.width/2+1.4));H.save(),H.globalCompositeOperation="source-over";for(let[W,J]of Y){let[k,z]=p(W,J),X=2.6*T,j=H.createRadialGradient(k,z,0,k,z,X);j.addColorStop(0,"rgba(255,196,120,0.55)"),j.addColorStop(1,"rgba(255,196,120,0)"),H.fillStyle=j,H.beginPath(),H.arc(k,z,X,0,Math.PI*2),H.fill()}H.restore()}let m=new Ji(y);m.colorSpace=ln,m.anisotropy=4;let S=new ht(f,new Bt({map:m}));S.receiveShadow=!0,e.add(S);function P(){let H=Ut(t.treeColour),M=Ut(t.snowColour),T=Ut(t.trunkColour),w=[{geo:new Ae(.2,.3,1.2,7).translate(0,.6,0),colour:T}],Y=6;for(let W=0;W<Y;W++){let J=W/(Y-1),k=2.4-J*1.75,z=2.9-J*1,X=.45+W*1.55;w.push({geo:new Ye(k,z,9).translate(0,X+z/2,0),colour:H});let j=t.treeSnow,nt=k*(.55+.35*j),at=z*(.35+.25*j);j>0&&w.push({geo:new Ye(nt,at,9).translate(0,X+z-at/2+.06,0),colour:M})}return Tr(w)}let v=Xf({seed:t.seed,count:t.treeCount,spacing:t.treeSpacing,size:t.treeSize,pathWidth:t.pathWidth}),R=new ri(P(),new Bt({vertexColors:!0,flatShading:!0}),v.length);{let H=new ae,M=new xn,T=new O(0,1,0);v.forEach((w,Y)=>{M.setFromAxisAngle(T,w.r),H.compose(new O(w.x,d(w.x,w.z)-.1,w.z),M,new O(w.s,w.s*(.95+Y%5*.03),w.s)),R.setMatrixAt(Y,H)})}R.castShadow=!0,R.receiveShadow=!0,e.add(R);let A={trees:v,paths:x,pathWidth:t.pathWidth},B=new _e,g=new Bt({color:1776930});for(let H of[new Ae(.28,.36,.35,10).translate(0,.17,0),new Ae(.07,.1,3,10).translate(0,1.85,0),new Ae(.2,.12,.12,8).translate(0,3.33,0),new Ye(.34,.3,4).rotateY(Math.PI/4).translate(0,4.07,0),new We(.06,8,6).translate(0,4.27,0)])B.add(new ht(H,g));let E=new ye({color:Ut(t.lampColour)});B.add(new ht(new Ae(.2,.15,.55,4).rotateY(Math.PI/4).translate(0,3.66,0),E));for(let[H,M]of[[1,1],[1,-1],[-1,1],[-1,-1]])B.add(new ht(new $t(.03,.6,.03).translate(H*.17,3.66,M*.17),g));e.add(B);let I=new He(new Oe({map:fn(),color:Ut(t.lampColour),blending:Ge,depthWrite:!1,transparent:!0,fog:!1}));I.position.set(0,3.66,0),I.scale.setScalar(t.halo),e.add(I);let N=new ke(Ut(t.lampColour),t.lampIntensity,t.lampReach,1.6);N.position.set(0,3.5,0),N.shadow.mapSize.set(1024,1024),N.shadow.bias=-.002,N.shadow.radius=4,N.castShadow=t.shadows,e.add(N);let L=new _e,U=new ht(new oo(.2,.46,6,16).translate(0,.43,0),new Bt({color:16185339,emissive:2764864})),C=new ht(new We(.17,18,12).translate(0,1,0),new Bt({color:3947086})),V=new ht(new Ye(.07,.2,10).rotateX(Math.PI/2).translate(0,1,-.2),new Bt({color:15773766}));for(let H of[U,C,V])H.castShadow=!0,L.add(H);e.add(L);let Z=[36,16,36],G=te.wardrobe,Q=ge(G,-dn.depth/2,0),$=te.slide,ot=ge($,pe.front+pe.depth/2,0),lt=new $e({uniforms:{time:{value:0},speed:{value:t.snowSpeed},drift:{value:t.snowDrift},size:{value:t.flakeSize},centre:{value:new O},box:{value:new O(...Z)},scale:{value:400},fogColour:{value:Ut(t.fogColour)},fogDensity:{value:t.fogDensity},shelter:{value:new Se(Q[0],Q[1],G.d[0],G.d[1])},shelterSize:{value:new O(dn.depth/2+.05,dn.half+.05,dn.height)},shelter2:{value:new Se(ot[0],ot[1],$.d[0],$.d[1])},shelterSize2:{value:new O(pe.depth/2+.1,pe.width/2+.1,8)}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),Et=(()=>{let H=Math.max(1,Math.round(t.snowAmount)),M=new Float32Array(H*3),T=new Float32Array(H);for(let W=0;W<H;W++)M.set([(Math.random()-.5)*Z[0],Math.random()*Z[1],(Math.random()-.5)*Z[2]],W*3),T[W]=Math.random();let w=new fe;w.setAttribute("position",new Be(M,3)),w.setAttribute("seed",new Be(T,1));let Y=new lr(w,lt);return Y.frustumCulled=!1,Y.visible=t.falling,Y})();e.add(Et);let ut={skyTop:t.skyTop,skyHorizon:t.skyHorizon,fogColour:t.fogColour,fogDensity:t.fogDensity,ambient:t.ambient,hemiSky:"#8fa4d8",moonColour:t.moonColour,snowSpeed:t.snowSpeed,lampColour:t.lampColour};function St(H){s.uniforms.top.value.set(H.skyTop),s.uniforms.horizon.value.set(H.skyHorizon),e.fog.color.set(H.fogColour),e.fog.density=H.fogDensity,lt.uniforms.fogColour.value.set(H.fogColour),lt.uniforms.fogDensity.value=H.fogDensity,c.intensity=H.ambient,c.color.set(H.hemiSky),h.color.set(H.moonColour),lt.uniforms.speed.value=H.snowSpeed,E.color.set(H.lampColour),I.material.color.set(H.lampColour),N.color.set(H.lampColour)}function D(H){lt.uniforms.time.value=H,a.uniforms.time.value=H;let M=1-t.flicker*(.5+.5*Math.sin(H*7.3)*Math.sin(H*3.1+1.7))*.35;N.intensity=t.lampIntensity*M,I.material.opacity=.65+.35*M}return{scene:e,camera:n,groundAt:d,walkWorld:A,figure:L,snow:Et,snowMat:lt,halo:I,lampLight:N,setLight:St,own:ut,tick:D,groundTex:m}}function fn(i=[[0,.9],[.18,.45],[1,0]]){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[s,r]of i)n.addColorStop(s,`rgba(255,255,255,${r})`);return e.fillStyle=n,e.fillRect(0,0,128,128),new Ji(t)}function Tr(i){let t=i.map(({geo:l,colour:c})=>{let h=l.index?l.toNonIndexed():l;h.computeVertexNormals();let d=new Float32Array(h.attributes.position.count*3);for(let u=0;u<h.attributes.position.count;u++)d.set([c.r,c.g,c.b],u*3);return h.setAttribute("color",new Be(d,3)),h}),e=t.reduce((l,c)=>l+c.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),o=0;for(let l of t)n.set(l.attributes.position.array,o*3),s.set(l.attributes.normal.array,o*3),r.set(l.attributes.color.array,o*3),o+=l.attributes.position.count;let a=new fe;return a.setAttribute("position",new Be(n,3)),a.setAttribute("normal",new Be(s,3)),a.setAttribute("color",new Be(r,3)),a}var hi=bi,cv=.5,Wt={u0:pe.front+.25,u1:pe.front+pe.depth-.25,v:pe.width/2-.25,ceiling:5.4,door:.7,mezz:{u0:pe.front+.25,u1:9.5,v0:-(pe.width/2-.25),v1:-2.4,h:2.3},stairs:{u0:9.5,u1:13,v0:-(pe.width/2-.25),v1:-3.55},walk:{u0:pe.front+.25,u1:2.45,v0:-2.4,v1:pe.width/2-.25,h0:2.3,h1:3,level:.2,top:7},bench:{u0:1.1,u1:2.3,v0:4.25,v1:4.75,h:.45},littleDoor:{u:1.7,half:.13,y0:3.45,y1:3.8},tall:[4.1,8.1,12.1].map(i=>({wall:"right",at:i,w:2.4,sill:.8,h:2.6})),round:[{wall:"front",at:-3.35,y:3.9,r:.5},{wall:"front",at:3.35,y:3.9,r:.5},...[4.1,8.1,12.1].map(i=>({wall:"left",at:i,y:3.55,r:.5}))],columns:[[0,-1.3],[0,1.3],[6.1,1],[10.1,1],[6.1,-1],[10.1,-1]]};Wt.mezz.u0=Wt.u0;Wt.stairs.v0=Wt.mezz.v0;var zi=(i,t,e,n=0)=>i>e.u0-n&&i<e.u1+n&&t>e.v0-n&&t<e.v1+n,Bo=1,wr=[{id:"table1",u0:3.9,u1:6.1,v0:.65,v1:1.75},{id:"table2",u0:8.4,u1:10.6,v0:.65,v1:1.75},{id:"chairs1",u0:4.1,u1:5.9,v0:1.95,v1:2.5},{id:"chairs2",u0:8.6,u1:10.4,v0:1.95,v1:2.5},{id:"fireplace",u0:13.55,u1:14.4,v0:-1.35,v1:1.35},{id:"shelf-back-right",u0:13.85,u1:14.4,v0:1.5,v1:4.8},{id:"ladder",u0:13.4,u1:13.85,v0:2.85,v1:3.55},{id:"shelf-back-left",u0:13.85,u1:14.4,v0:-3.45,v1:-1.5},{id:"column-6",u0:5.65,u1:6.55,v0:4.3,v1:4.8},{id:"column-10",u0:9.65,u1:10.55,v0:4.3,v1:4.8},{id:"column-front-left",u0:.8,u1:1.33,v0:-1.75,v1:-.85,level:"both"},{id:"column-front-right",u0:.8,u1:1.33,v0:.85,v1:1.75,level:"both"},{id:"coat-stand",u0:.95,u1:1.6,v0:3.95,v1:4.8},{id:"walk-posts",u0:2.2,u1:2.5,v0:1.45,v1:1.75},{id:"mezz-shelves",u0:2.7,u1:9.5,v0:-4.8,v1:-4.3,level:"up"},{id:"nook-chair",u0:1.55,u1:2.35,v0:-3.85,v1:-3.05,level:"up"},{id:"nook-table",u0:.8,u1:1.4,v0:-4.8,v1:-4.2,level:"up"}];function Rs(i){let t=Wt.walk;return t.h0+(t.h1-t.h0)*Math.max(0,Math.min(1,(i-t.v0)/(t.level-t.v0)))}function sc(i,t){let e=Wt.walk;return i>e.u1?Wt.ceiling:Wt.ceiling+(e.top-Wt.ceiling)*Math.max(0,Math.min(1,(t-e.v0)/(e.v1-e.v0)))}function Jf(i,t){let{mezz:e,stairs:n,bench:s,walk:r}=Wt;return zi(i,t,e)||Math.abs(i-e.u1)<1e-9&&t>e.v0&&t<Wt.stairs.v1?[e.h]:zi(i,t,n)?[e.h*Math.max(0,Math.min(1,(n.u1-i)/(n.u1-n.u0)))]:i>r.u0&&i<r.u1&&t>=r.v0-1e-9&&t<r.v1?[0,Rs(t)+(zi(i,t,s)?s.h:0)]:[0]}function tu(i,t,e=0){let n=null;for(let s of Jf(i,t))Math.abs(s-e)<=cv+1e-9&&(n===null||Math.abs(s-e)<Math.abs(n-e))&&(n=s);return n}function hv(i,t,e=0){if(i<Wt.u0+hi||i>Wt.u1-hi||Math.abs(t)>Wt.v-hi)return!1;for(let n of wr)if((n.level==="both"||(n.level==="up"?e>Bo:e<=Bo))&&zi(i,t,n,hi*.6))return!1;return!0}function $f(i,t,e){let n=te.slide,s=(o,a)=>{let[l,c]=be(n,o,a),h=tu(l,c,e);if(h===null||!hv(l,c,h))return null;for(let[d,u]of[[.7,0],[-.7,0],[0,.7],[0,-.7]])if(tu(l+d*hi,c+u*hi,h)===null)return null;return h},r=o=>{let a=t[0]*o[0]+t[1]*o[1];return[i[0]+o[0]*a,i[1]+o[1]*a]};for(let o of[[i[0]+t[0],i[1]+t[1]],r(n.d),r(n.r)]){let a=s(o[0],o[1]);if(a!==null)return[o[0],o[1],a]}return null}var rc=(i,t,e)=>{let[n,s]=be(te.slide,i,t);if(e===void 0)return Math.max(...Jf(n,s));let r=tu(n,s,e);return r===null?e:r};function Kf(i,t,e,n,s=0){let r=te.slide,[o,a]=be(r,i,t),[l,c]=be(r,e,n);if(s<.1&&l<Wt.u0+hi+.06&&Math.abs(a)<Wt.door-.1)return{id:"out",kind:"door-out"};let h=Wt.littleDoor;return Math.abs(s-(Wt.walk.h1+Wt.bench.h))<.02&&c>Wt.v-hi-.03&&Math.abs(o-h.u)<.4?{id:"slide",kind:"little-door"}:null}function eu(i,t,e=0){let[n,s]=be(te.slide,i,t);return Math.abs(e-(Wt.walk.h1+Wt.bench.h))<.02?"on the bench":e>Bo&&zi(n,s,Wt.walk)?"over the entrance":e>=Wt.mezz.h-.01?n<3.2?"the reading nook":"up on the mezzanine":e>.1&&zi(n,s,Wt.stairs)?"on the stairs":n>12.6&&Math.abs(s)<2?"by the fire":"the library"}var Qf=(i,t,e,n)=>{let s=te.slide,[r,o]=ge(s,i,t),a=s.d[0]*e+s.r[0]*n,l=s.d[1]*e+s.r[1]*n;return{x:r,z:o,yaw:br(a,l)}},jf=Qf(Wt.u0+2.4,0,1,0),tp=Qf(-1.6,0,-1,0);function ep(i,t,e=0){let n=te.slide,[s,r]=be(n,i.x,i.z),[o,a]=be(n,t.x,t.z);s=Math.max(Wt.u0+.2,Math.min(Wt.u1-.2,s)),r=Math.max(-Wt.v+.2,Math.min(Wt.v-.2,r));let l=i.y;e<Wt.mezz.h-.5&&zi(s,r,Wt.mezz,.15)&&l<Wt.mezz.h+.2&&(r=Math.max(r,Wt.mezz.v1+.2)),e>Bo&&(l=Math.max(l,e+.9));let c=wr.filter(f=>uv.includes(f.id)),h=(f,x)=>c.some(y=>zi(f,x,y,.18));if(h(s,r))for(let f=19;f>=1;f--){let x=f/20,y=o+(s-o)*x,p=a+(r-a)*x;if(!h(y,p)){s=y,r=p;break}}if(l=Math.min(l,sc(s,r)-.25),e<=Bo&&zi(s,r,Wt.walk,.15)){let f=Rs(r)-.16-.2;l>f&&(o>Wt.walk.u1?s=Math.max(s,Wt.walk.u1+.25):l=f)}let[d,u]=ge(n,s,r);return{x:d,y:l,z:u}}var uv=["shelf-back-right","shelf-back-left","ladder","fireplace","column-6","column-10","column-front-left","column-front-right","coat-stand"],Xn={length:12,curve:16,half:.95,height:2.35,door:6.6},Wn=te["tree-door"],ic=ge(Wn,tn.at-tn.radius-.62,0),Oo=nc(ic[0],ic[1],0);function ui(i){let t=i/Xn.curve,e=Xn.curve*Math.sin(t),n=Xn.curve*(1-Math.cos(t)),s=ic[0]+Wn.d[0]*e+Wn.r[0]*n,r=ic[1]+Wn.d[1]*e+Wn.r[1]*n,o=Wn.d[0]*Math.cos(t)+Wn.r[0]*Math.sin(t),a=Wn.d[1]*Math.cos(t)+Wn.r[1]*Math.sin(t);return{x:s,z:r,dx:o,dz:a,rx:-a,rz:o}}function Cs(i,t){let e={s:0,w:0,d:1/0};for(let n=-1.5;n<=Xn.length;n+=.1){let s=ui(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}for(let n=e.s-.1;n<=e.s+.1;n+=.005){let s=ui(n),r=Math.hypot(i-s.x,t-s.z);r<e.d&&(e={s:n,w:(i-s.x)*s.rx+(t-s.z)*s.rz,d:r})}return e}function dv(i,t){let{s:e,w:n}=Cs(i,t);return e>.05&&e<Xn.door-hi-.12&&Math.abs(n)<Xn.half-hi-.12}function np(i,t){let e=ui(Cs(i[0],i[1]).s),n=t[0]*e.dx+t[1]*e.dz;for(let s of[[i[0]+t[0],i[1]+t[1]],[i[0]+e.dx*n,i[1]+e.dz*n],[i[0]+t[0],i[1]],[i[0],i[1]+t[1]]])if(dv(s[0],s[1]))return s;return i}function ip(i,t,e,n){let s=Cs(e,n);return s.s<.25?{id:"out",kind:"mouth-out"}:s.s>Xn.door-hi-.2&&Math.abs(s.w)<Xn.half?{id:"tree-door",kind:"portal"}:null}var sp=(i,t)=>{let e=ui(i);return{x:e.x,z:e.z,yaw:t?br(-e.dx,-e.dz):br(e.dx,e.dz)}},rp=sp(1.7,!1),op=sp(Xn.door-1.9,!0),ap=(()=>{let[i,t]=ge(Wn,tn.at-tn.radius-2.1,0);return{x:i,z:t,yaw:br(-Wn.d[0],-Wn.d[1])}})();function lp(i,t,e){let n=Cs(t.x,t.z),s=e?Math.max(.1,n.s-1.7):Math.min(Xn.door-.25,n.s+1.7),r=Math.max(-.45,Math.min(.45,n.w*.5+.2)),o=ui(s);return{x:o.x+o.rx*r,y:Math.min(i.y,Oo+1.75),z:o.z+o.rz*r}}function Bn(i,t,e,{repeat:n=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new Ji(r);return s&&(o.colorSpace=ln),n&&(o.wrapS=o.wrapT=ni,o.repeat.set(...n)),o.anisotropy=4,o}var an=(i="#5a3a24",t="rgba(30,16,8,0.35)",e=4)=>Bn(256,256,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=Ze(5);for(let a=0;a<120;a++){n.strokeStyle=t,n.lineWidth=.6+o()*1.4,n.beginPath();let l=o()*s;n.moveTo(l,0),n.bezierCurveTo(l+o()*8-4,r/3,l+o()*8-4,2*r/3,l+o()*6-3,r),n.stroke()}n.fillStyle="rgba(15,8,4,0.6)";for(let a=1;a<e;a++)n.fillRect(a*s/e-1,0,2,r)}),cs=()=>Bn(256,512,(i,t,e)=>{i.fillStyle="#4b3a2e",i.fillRect(0,0,t,e);let n=Ze(11);for(let s=0;s<90;s++){let r=n()*t,o=3+n()*9;i.fillStyle=n()<.5?"rgba(20,14,10,0.55)":"rgba(120,100,82,0.25)",i.beginPath(),i.moveTo(r,0);for(let a=0;a<=e;a+=32)i.lineTo(r+Math.sin(a*.03+s)*6,a);for(let a=e;a>=0;a-=32)i.lineTo(r+o+Math.sin(a*.03+s)*6,a);i.fill()}},{repeat:[3,2]}),oc=(i=3)=>Bn(256,256,(t,e,n)=>{t.fillStyle="#d2ccc0",t.fillRect(0,0,e,n);let s=Ze(i);for(let r=0;r<1600;r++){let o=150+s()*80;t.fillStyle=`rgba(${o},${o-4},${o-12},0.35)`,t.fillRect(s()*e,s()*n,2+s()*6,2+s()*6)}}),cp=()=>Bn(512,512,(i,t,e)=>{i.fillStyle="#3d3a36",i.fillRect(0,0,t,e);let n=Ze(21);for(let s=0,r=0;r<e+40;s++){let o=34+n()*14;for(let a=s%2*-20;a<t+40;){let l=42+n()*26,c=105+n()*60,h=n()*18;i.fillStyle=`rgb(${c+h},${c+h*.6},${c-8})`,i.beginPath(),i.ellipse(a+l/2,r+o/2,l/2-3,o/2-3,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.08)",i.beginPath(),i.ellipse(a+l/2-4,r+o/2-5,l/3,o/5,0,0,Math.PI*2),i.fill(),a+=l}r+=o}},{repeat:[2.5,1.2]}),hp=()=>Bn(256,256,(i,t,e)=>{i.fillStyle="#e8eef7",i.fillRect(0,0,t,e);let n=Ze(31);for(let r=0;r<140;r++){let o=e*(.45+n()*.6),a=n()*t,l=6+n()*22;i.fillStyle=n()<.6?"rgba(62,92,52,0.85)":"rgba(92,118,66,0.8)",i.beginPath(),i.ellipse(a,o,l,l*.6,0,0,Math.PI*2),i.fill()}let s=i.createLinearGradient(0,e*.85,0,e);s.addColorStop(0,"rgba(232,238,247,0)"),s.addColorStop(1,"rgba(232,238,247,0.95)"),i.fillStyle=s,i.fillRect(0,0,t,e)}),nu=()=>Bn(128,160,(i,t,e)=>{let n=i.createRadialGradient(t/2,e*.55,6,t/2,e*.55,e*.75);n.addColorStop(0,"#ffd9a0"),n.addColorStop(.6,"#e99a4c"),n.addColorStop(1,"#a8582a"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(90,45,20,0.35)";for(let r=0;r<4;r++)i.fillRect(8,30+r*30,t*.35,6);i.fillStyle="rgba(255,240,200,0.5)",i.beginPath(),i.arc(t*.72,e*.5,9,0,Math.PI*2),i.fill();let s=Ze(41);for(let r=0;r<260;r++){let o=s()<.5,a=o?s()<.5?s()*22:t-s()*22:s()*t,l=o?s()*e:s()<.5?s()*22:e-s()*22;i.fillStyle=`rgba(235,242,255,${.12+s()*.3})`,i.beginPath(),i.arc(a,l,1+s()*4,0,Math.PI*2),i.fill()}}),up=()=>Bn(256,256,(i,t,e)=>{i.fillStyle="#6b4a30",i.fillRect(0,0,t,e);let n=Ze(51);for(let s=0;s<8;s++)i.fillStyle=`rgba(${110+n()*30},${74+n()*18},${44+n()*12},0.55)`,i.fillRect(s*t/8,0,t/8-3,e),i.fillStyle="rgba(25,14,6,0.65)",i.fillRect((s+1)*t/8-3,0,3,e);for(let s=0;s<160;s++){i.strokeStyle="rgba(40,22,10,0.18)",i.lineWidth=.6+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.lineTo(r+n()*4-2,e),i.stroke()}},{repeat:[1,1]}),dp=()=>Bn(128,160,(i,t,e)=>{i.fillStyle="#efe6d2",i.fillRect(0,0,t,e);let n=Ze(61);i.fillStyle="rgba(70,55,40,0.45)";for(let s=18;s<e-14;s+=7){let r=12;for(;r<t-14;){let o=4+n()*16;i.fillRect(r,s,Math.min(o,t-14-r),2),r+=o+3}}}),iu=(i=!1)=>Bn(128,128,(t,e,n)=>{t.clearRect(0,0,e,n);let s=Ze(i?73:71);t.fillStyle="rgba(170,195,230,0.10)",t.fillRect(0,0,e,n);for(let r=0;r<700;r++){let o=Math.pow(s(),2.2)*.22,a=Math.floor(s()*4),l=s(),[c,h]=i?[e/2+Math.cos(l*6.283)*(.5-o)*e,n/2+Math.sin(l*6.283)*(.5-o)*n]:a===0?[l*e,o*n]:a===1?[l*e,n-o*n]:a===2?[o*e,l*n]:[e-o*e,l*n];t.fillStyle=`rgba(230,240,255,${.15+s()*.35})`,t.beginPath(),t.arc(c,h,.8+s()*3,0,Math.PI*2),t.fill()}}),su=()=>Bn(256,512,(i,t,e)=>{i.fillStyle="#7a5434",i.fillRect(0,0,t,e);let n=Ze(81);for(let s=0;s<26;s++){let r=n()*e,o=6+n()*18;i.strokeStyle=n()<.5?"rgba(60,34,16,0.45)":"rgba(160,118,78,0.3)",i.lineWidth=1.5+n()*4,i.beginPath();for(let a=0;a<=t;a+=8)i.lineTo(a,r+Math.sin(a*.02+s)*o);i.stroke()}for(let s=0;s<300;s++){i.strokeStyle="rgba(40,22,10,0.2)",i.lineWidth=.5+n(),i.beginPath();let r=n()*t;i.moveTo(r,0),i.bezierCurveTo(r+n()*10-5,e/3,r+n()*10-5,2*e/3,r,e),i.stroke()}},{repeat:[2,3]});var vt=(i,t,e)=>new O(-e,t,i);function Ar(i){let t=te[i],e=new _e,n=new O(t.d[0],0,t.d[1]),s=new O(t.r[0],0,t.r[1]);return e.quaternion.setFromRotationMatrix(new ae().makeBasis(s.clone().negate(),new O(0,1,0),n)),e.position.set(t.o[0],0,t.o[1]),e}function fp({scene:i,renderer:t,sceneParts:e,look:n,other:s}){let r={},o={value:0};{let a=Ar("wardrobe"),l=te.wardrobe,c=(ut,St)=>{let D=ut-l.o[0],H=St-l.o[1];return[D*l.d[0]+H*l.d[1],D*l.r[0]+H*l.r[1]]},h=Wf(),d=Ze(17),u=Ut(n.treeColour),f=Ut(n.snowColour),x=Tr([{geo:new Ye(.36,1.1,7).rotateZ(Math.PI/2).scale(1,.38,1).translate(-.55,0,0),colour:u},{geo:new Ye(.26,.95,7).rotateZ(Math.PI/2).scale(1,.16,.7).translate(-.5,.09,0),colour:f}]),y=[[0,-1],[.27,-.98],[.29,-.8],[.25,-.45],[.22,-.15],[.24,-.06],[.2,0],[.06,.04],[0,.04]].map(([ut,St])=>new yt(ut,St)),p=new Ki(y,12).scale(1,1,.5);{let ut=p.attributes.position,St=Ze(23);for(let D=0;D<ut.count;D++){let H=1+(St()-.5)*.12;ut.setX(D,ut.getX(D)*H),ut.setZ(D,ut.getZ(D)*H)}p.computeVertexNormals()}let m=Tr([{geo:new $t(.44,.025,.025).translate(0,.02,0),colour:Ut("#6b4a2c")},{geo:new An(.05,.008,4,10,Math.PI*1.4).translate(0,.1,0),colour:Ut("#9a9aa2")}]),S=["#7a5a40","#5c4a3e","#8a6a4c","#4e4a52","#9a7552","#6a4a52","#7c6a58","#3e3632","#a08a72"].map(Ut),P=[],v=[],R=[];for(let ut of h){let[St,D]=c(ut.x,ut.z),M=.3+d()*.32,T=ut.t>=.6,w=ut.t<.66,Y=ut.t>=M,W=T?1.62:1.5+d()*.35;w&&P.push({u:St,v:D+ut.side*.75,y:W+.08,side:ut.side,droop:.15+d()*.2,tw:d()}),Y&&(v.push({u:St,v:D,y:W-.04,side:ut.side,c:S[Math.floor(d()*S.length)],sway:d()*6}),T&&R.push({u:St,v:D,y:W}))}let A=new ri(x,new Bt({vertexColors:!0,flatShading:!0}),P.length),B=new ae,g=new xn;P.forEach((ut,St)=>{g.setFromEuler(new hn(0,ut.side>0?Math.PI:0,ut.droop)),B.compose(vt(ut.u,ut.y,ut.v),g,new O(1,1,.9+ut.tw*.3)),A.setMatrixAt(St,B)}),A.castShadow=!0,a.add(A);let E=new ri(p,new Bt({color:16777215,emissive:1380621}),v.length);v.forEach((ut,St)=>{g.setFromEuler(new hn(0,Math.PI/2,0)),B.compose(vt(ut.u,ut.y,ut.v),g,new O(1,1,1)),E.setMatrixAt(St,B),E.setColorAt(St,ut.c)}),E.castShadow=!0,E.receiveShadow=!0,a.add(E);let I=new ri(m,new Bt({vertexColors:!0}),Math.max(1,R.length));R.forEach((ut,St)=>{g.setFromEuler(new hn(0,Math.PI/2,0)),B.compose(vt(ut.u,ut.y,ut.v),g,new O(1,1,1)),I.setMatrixAt(St,B)}),I.count=R.length,a.add(I);let N=new Bt({map:an("#6b4a2c","rgba(30,16,8,0.3)",1)});for(let ut of[-1,1]){let St=h.filter(M=>M.side===ut&&M.t>=.56).map(M=>{let[T,w]=c(M.x,M.z);return vt(T,1.66,w)});St.push(vt(-.05,1.66,ut*.95));let D=new wn(St),H=new ht(new oi(D,40,.035,6,!1),N);a.add(H)}{let St=h.filter(J=>J.side===1&&J.t>=.48).map(J=>c(J.x,J.z)).map(([J,k])=>[J,k-.95]);St.push([0,0]);let D=[],H=[],M=[],T=St.length-1;St.forEach(([J,k],z)=>{let X=z<T?St[z+1]:St[z],j=z>0?St[z-1]:St[z],nt=X[0]-j[0],at=X[1]-j[1],xt=Math.hypot(nt,at)||1;nt/=xt,at/=xt;for(let Mt of[-1,1]){let Ot=vt(J-at*1.05*Mt*0,.02,k+Mt*1.05);D.push(Ot.x,Ot.y,Ot.z),H.push(Mt<0?0:1,z/T)}if(z<T){let Mt=z*2;M.push(Mt,Mt+1,Mt+2,Mt+1,Mt+3,Mt+2)}});let w=new fe;w.setAttribute("position",new Jt(D,3)),w.setAttribute("uv",new Jt(H,2)),w.setIndex(M),w.computeVertexNormals();let Y=Bn(128,512,(J,k,z)=>{J.fillStyle="#6a4a30",J.fillRect(0,0,k,z);let X=Ze(9);for(let nt=0;nt<6;nt++)J.fillStyle=`rgba(${90+X()*30},${60+X()*20},${36+X()*10},0.6)`,J.fillRect(nt*k/6,0,k/6-2,z),J.fillStyle="rgba(20,10,4,0.7)",J.fillRect((nt+1)*k/6-2,0,2,z);for(let nt=0;nt<1800;nt++){let at=Math.pow(X(),1.8)*z*.75,xt=1-at/(z*.75);J.fillStyle=`rgba(232,238,246,${.5*xt+.1})`,J.beginPath(),J.arc(X()*k,at,1+X()*4*xt,0,Math.PI*2),J.fill()}let j=J.createLinearGradient(0,0,0,z*.28);j.addColorStop(0,"rgba(0,0,0,1)"),j.addColorStop(1,"rgba(0,0,0,0)"),J.globalCompositeOperation="destination-out",J.fillStyle=j,J.fillRect(0,0,k,z*.28)}),W=new ht(w,new Bt({map:Y,transparent:!0,depthWrite:!1}));W.receiveShadow=!0,W.renderOrder=1,a.add(W)}let L=new Bt({map:an("#4e321f"),side:Pe}),U=dn;for(let ut of[-1,1])a.add(new ht(new $t(.08,U.height,U.depth).translate(...vt(-U.depth/2,U.height/2,ut*(U.half+.04)).toArray()),L));a.add(new ht(new $t(2*U.half+.24,.1,U.depth+.1).translate(...vt(-U.depth/2,U.height+.05,0).toArray()),L)),a.add(new ht(new $t(2*U.half+.4,.14,U.depth+.25).translate(...vt(-U.depth/2,U.height+.17,0).toArray()),L)),a.add(new ht(new $t(2*U.half+.3,.1,U.depth+.1).translate(...vt(-U.depth/2,U.height+.28,0).toArray()),new Bt({color:Ut(n.snowColour)}))),a.add(new ht(new $t(2*U.half+.2,.1,.12).translate(...vt(.02,U.height-.05,0).toArray()),L)),a.add(new ht(new $t(2*U.half+.2,.12,.12).translate(...vt(.02,.06,0).toArray()),L));let C=new Bt({map:an("#5d3c24","rgba(30,16,8,0.3)",2)}),V=new Bt({color:11569738,emissive:1708038}),Z=[];for(let ut of[-1,1]){let St=new _e;St.position.copy(vt(.04,0,ut*U.half));let D=new ht(new $t(U.half-.01,U.height-.2,.05),C);D.position.set(ut*(U.half/2),(U.height-.2)/2+.1,0),D.castShadow=!0,St.add(D);let H=new ht(new We(.045,10,8),V);H.position.set(ut*(U.half-.12),1.12,-.05),St.add(H);for(let M of[.75,1.65]){let T=new ht(new $t(U.half-.3,.6,.02),new Bt({map:an("#553620","rgba(30,16,8,0.25)",1)}));T.position.set(ut*(U.half/2),M,-.035),St.add(T)}a.add(St),Z.push({hinge:St,s:ut})}let G=new ye({color:Ut("#ffd28a"),transparent:!0,opacity:0,fog:!1}),Q=new ht(new ze(.035,U.height-.3).translate(0,(U.height-.3)/2+.15,0),G);Q.position.copy(vt(-.01,0,0)),Q.rotation.y=Math.PI,a.add(Q);let $=new He(new Oe({map:fn([[0,.8],[.3,.25],[1,0]]),color:Ut("#ffcc80"),blending:Ge,depthWrite:!1,transparent:!0,opacity:0}));$.position.copy(vt(-.1,1.15,0)),$.scale.set(.9,2.4,1),a.add($);let ot=new ke(Ut("#ffc98a"),1.2,7,1.4);ot.position.copy(vt(-.35,1.6,0)),a.add(ot);let lt=new ye({color:16777215,transparent:!0,opacity:0,fog:!1,side:Pe}),Et=new ht(new ze(2*U.half+.6,U.height+.4),lt);Et.position.copy(vt(.45,U.height/2,0)),a.add(Et),i.add(a),r.wardrobe={group:a,doors:Z,lineMat:G,lineGlow:$,beyondMat:lt,inside:ot,setOpen(ut){for(let St of Z)St.hinge.rotation.y=-St.s*ut*1.75},setGlow(ut){G.opacity=ut,$.material.opacity=ut*.55,ot.intensity=1.2+ut*3.2},setBeyond(ut){lt.opacity=ut}}}{let a=Ar("tree-door"),l=tn.at,c=tn.radius,h=new Bt({map:cs(),color:12563110}),d=[[c+.55,0],[c+.2,.5],[c,1.3],[c-.25,4],[c-.6,8],[c-1,13],[c-1.6,20],[.4,28],[0,28.2]].map(([L,U])=>new yt(L,U)),u=new ht(new Ki(d,22),h);u.position.copy(vt(l,0,0)),u.castShadow=!0,u.receiveShadow=!0,a.add(u);let f=Ze(13);for(let L=0;L<8;L++){let U=L/8*Math.PI*2+f()*.4;if(Math.abs(Math.atan2(Math.sin(U-Math.PI),Math.cos(U-Math.PI)))<.55)continue;let C=2.2+f()*1.6,V=[];for(let G=0;G<=5;G++){let Q=G/5,$=c-.2+Q*C;V.push(new O(Math.sin(U+Q*(f()-.5)*.4)*$,.55*(1-Q)-.1*Q,Math.cos(U+Q*(f()-.5)*.4)*$))}let Z=new ht(new oi(new wn(V),16,.32,7,!1),h);Z.position.copy(vt(l,0,0)),Z.scale.set(1,1,1),a.add(Z)}let x=Ut(n.treeColour).multiplyScalar(.9),y=Ut(n.snowColour),p=[];for(let L=0;L<7;L++){let U=L/6,C=6.2-U*4.6,V=4.4-U*1.6,Z=8.5+L*2.7;p.push({geo:new Ye(C,V,12).translate(0,Z+V/2,0),colour:x}),p.push({geo:new Ye(C*.8,V*.5,12).translate(0,Z+V-V*.25+.08,0),colour:y})}let m=new ht(Tr(p),new Bt({vertexColors:!0,flatShading:!0}));m.position.copy(vt(l,0,0)),m.castShadow=!0,a.add(m);let S=tn.mouth,P=2.35,v=new un;v.moveTo(-S,0),v.lineTo(-S,P-S),v.absarc(0,P-S,S,Math.PI,0,!0),v.lineTo(S,0),v.lineTo(-S,0);let R=Bn(128,128,(L,U,C)=>{let V=L.createRadialGradient(U/2,C*.62,2,U/2,C*.62,U*.62);V.addColorStop(0,"#a5642c"),V.addColorStop(.18,"#4a2a14"),V.addColorStop(.55,"#140b06"),V.addColorStop(1,"#050302"),L.fillStyle=V,L.fillRect(0,0,U,C)}),A=new Qi(v,16);{let L=A.attributes.position,U=A.attributes.uv;for(let C=0;C<L.count;C++)U.setXY(C,(L.getX(C)+S)/(2*S),L.getY(C)/P)}let B=new ht(A,new ye({map:R}));B.rotation.y=Math.PI,B.position.copy(vt(l-c-.62,.02,0)),a.add(B);let g=new un,E=S+.22,I=P+.22;g.moveTo(-E,0),g.lineTo(-E,I-E),g.absarc(0,I-E,E,Math.PI,0,!0),g.lineTo(E,0),g.lineTo(S,0),g.lineTo(S,P-S),g.absarc(0,P-S,S,0,Math.PI,!1),g.lineTo(-S,0),g.lineTo(-E,0);let N=new ht(new kn(g,{depth:.5,bevelEnabled:!1,curveSegments:16}),new Bt({map:an("#8a6440","rgba(60,36,18,0.3)",1)}));N.rotation.y=Math.PI,N.position.copy(vt(l-c-.66,0,0)),a.add(N),i.add(a),r.trunk={group:a}}{let a=Ar("arch"),l=Uo,c=new Bt({map:oc(),vertexColors:!0,flatShading:!0}),h=[],d=Ze(19),u=()=>Ut("#c4beb2").multiplyScalar(.85+d()*.25),f=Ut("#5f7a46");for(let C of[-1,1]){let V=0;for(let Z=0;Z<4;Z++){let G=.55+d()*.12,Q=2*l.pillar+.1+d()*.12,$=Z===0?u().lerp(f,.45):d()<.3?u().lerp(f,.3):u();h.push({geo:new $t(Q,G-.03,.95+d()*.1).translate(...vt(d()*.04,V+G/2,C*(l.opening+l.pillar)+(d()-.5)*.06).toArray()),colour:$}),V+=G}h.push({geo:new $t(2*l.pillar+.35,.18,1.15).translate(...vt(0,V+.09,C*(l.opening+l.pillar)).toArray()),colour:u()})}let x=l.height-l.opening,y=l.opening,p=l.opening+2*l.pillar,m=9;for(let C=0;C<m;C++){let V=Math.PI-C/m*Math.PI,Z=Math.PI-(C+1)/m*Math.PI,G=C===Math.floor(m/2),Q=new un,$=G?p+.18:p,ot=.012;Q.moveTo(Math.cos(V-ot)*y,Math.sin(V-ot)*y),Q.lineTo(Math.cos(V-ot)*$,Math.sin(V-ot)*$),Q.lineTo(Math.cos(Z+ot)*$,Math.sin(Z+ot)*$),Q.lineTo(Math.cos(Z+ot)*y,Math.sin(Z+ot)*y);let lt=new kn(Q,{depth:G?1.05:.95,bevelEnabled:!1}).translate(0,0,G?-.525:-.475);lt.translate(0,x,0),h.push({geo:lt,colour:d()<.25?u().lerp(f,.25):u()})}let S=[];for(let C=0;C<12;C++){let V=Math.PI*.18+C/12*Math.PI*.64,Z=Math.PI*.18+(C+1)/12*Math.PI*.64,G=new un;G.moveTo(Math.cos(V)*p,Math.sin(V)*p),G.lineTo(Math.cos(V)*(p+.12),Math.sin(V)*(p+.12)),G.lineTo(Math.cos(Z)*(p+.12),Math.sin(Z)*(p+.12)),G.lineTo(Math.cos(Z)*p,Math.sin(Z)*p),S.push({geo:new kn(G,{depth:.9,bevelEnabled:!1}).translate(0,x,-.45),colour:Ut(n.snowColour)})}for(let C of[-1,1])S.push({geo:new $t(2*l.pillar+.3,.1,1.05).translate(...vt(0,2.42,C*(l.opening+l.pillar)).toArray()),colour:Ut(n.snowColour)});let P=new ht(Tr(h.concat(S)),c);P.castShadow=!0,P.receiveShadow=!0,a.add(P);let v=new un;v.moveTo(-y,0),v.lineTo(-y,x),v.absarc(0,x,y,Math.PI,0,!0),v.lineTo(y,0),v.lineTo(-y,0);let R=new Qi(v,24);{let C=R.attributes.position,V=R.attributes.uv;for(let Z=0;Z<C.count;Z++)V.setXY(Z,(C.getX(Z)+y)/(2*y),C.getY(Z)/l.height)}let A=new _n(16,16,{type:Fn}),B=new $e({uniforms:{view:{value:A.texture},res:{value:new yt(1,1)},time:o,open:{value:0},ripple:{value:1},boost:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
        }`,transparent:!0,depthWrite:!1,toneMapped:!0}),g=new ht(R,B);g.rotation.y=Math.PI,g.position.copy(vt(-.02,0,0)),a.add(g),i.add(a);let E=new Je,I=new ae,N=new ae,L=new ae;{let C=te.arch,V=new O(C.d[0],0,C.d[1]),Z=new O(C.r[0],0,C.r[1]);I.makeBasis(Z.clone().negate(),new O(0,1,0),V).setPosition(C.o[0],0,C.o[1]);let G=new O(0,0,-1),Q=new O(1,0,0);N.makeBasis(Q.clone().negate(),new O(0,1,0),G).setPosition(0,0,5.2),L.copy(N).multiply(I.clone().invert())}let U=new Ln(new O(0,0,-1),5.2);r.arch={group:a,faceMat:B,faceMesh:g,target:A,vcam:E,draw(C,V,Z){let G=C.getDrawingBufferSize(new yt),Q=Math.max(16,Math.round(G.x*.5)),$=Math.max(16,Math.round(G.y*.5));(A.width!==Q||A.height!==$)&&A.setSize(Q,$),B.uniforms.res.value.set(G.x,G.y),V.updateMatrixWorld(),E.copy(V,!1),E.matrixWorld.copy(L).multiply(V.matrixWorld),E.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(V.projectionMatrix);let ot=U.clone().applyMatrix4(E.matrixWorldInverse),lt=new Se(ot.normal.x,ot.normal.y,ot.normal.z,ot.constant),Et=E.projectionMatrix.elements,ut=new Se((Math.sign(lt.x)+Et[8])/Et[0],(Math.sign(lt.y)+Et[9])/Et[5],-1,(1+Et[10])/Et[14]);lt.multiplyScalar(2/lt.dot(ut)),Et[2]=lt.x,Et[6]=lt.y,Et[10]=lt.z+1,Et[14]=lt.w,E.projectionMatrixInverse.copy(E.projectionMatrix).invert();let{setLight:St,own:D,snowMat:H,figure:M}=Z,T=H.uniforms.centre.value.clone();St(s),H.uniforms.centre.value.copy(E.position);let w=C.shadowMap.autoUpdate;C.shadowMap.autoUpdate=!1,g.visible=!1;let Y=M.visible;M.visible=!1,C.setRenderTarget(A),C.clear(),C.render(i,E),C.setRenderTarget(null),g.visible=!0,M.visible=Y,C.shadowMap.autoUpdate=w,H.uniforms.centre.value.copy(T),St(D)}}}{let a=Ar("slide"),l=pe,c=4.2,h=3.2,d=l.front,u=d+l.depth,f=l.width/2,x=cp(),y=new Bt({map:x}),p=(N,L,U,C,V,Z)=>{let G=Math.hypot(U-N,C-L),Q=new ht(new $t(G,V,.5),y),$=vt((N+U)/2,V/2,(L+C)/2);return Q.position.copy($),Q.rotation.y=Math.atan2(-(U-N),-(C-L)),Q.castShadow=!0,Q.receiveShadow=!0,a.add(Q),Q};p(d,-f,d,f,c),p(u,-f,u,f,c),p(d,-f,u,-f,c),p(d,f,u,f,c);for(let N of[d,u]){let L=new un;L.moveTo(-f-.25,0),L.lineTo(f+.25,0),L.lineTo(0,h),L.lineTo(-f-.25,0);let U=new ht(new kn(L,{depth:.5,bevelEnabled:!1}),y);U.position.copy(vt(N-.25,c,0)),a.add(U)}let m=hp();m.wrapS=ni,m.repeat.set(3,1);let S=new Bt({map:m,side:Pe});for(let N of[-1,1]){let L=d-.5,U=u+.5,C=c+h,V=N*(f+.6),Z=c-.2,G=new fe;G.setAttribute("position",new Jt([0,C,L,V,Z,L,V,Z,U,0,C,U],3)),G.setAttribute("uv",new Jt([0,1,0,0,1,0,1,1],2)),G.setIndex([0,1,2,0,2,3]),G.computeVertexNormals();let Q=new ht(G,S);Q.castShadow=!0,Q.receiveShadow=!0,a.add(Q);let $=new ht(new $t(.16,.14,U-L),new Bt({color:Ut(n.snowColour)}));$.position.set(V,Z+.02,(L+U)/2),a.add($)}let P=new Bt({map:cs(),color:12036506}),v=[[d,-f],[d,f],[u,-f],[u,f],[d,-1.3],[d,1.3],...[6.1,10.1].flatMap(N=>[[N,-f],[N,f]])];for(let[N,L]of v){let U=new ht(new Ae(.34,.42,c+.5,9),P);U.position.copy(vt(N,(c+.5)/2-.1,L)),U.castShadow=!0,a.add(U)}let R=new ye({map:nu()}),A=new Bt({color:3023127}),B=fn([[0,.5],[.4,.18],[1,0]]),g=(N,L,U,C,V,Z)=>{let G=new _e;G.position.copy(vt(N,V,L)),G.rotation.y=Z;let Q=new ht(new ze(U,C).translate(0,C/2,0),R);G.add(Q);for(let[ot,lt,Et,ut]of[[U+.2,.14,0,0],[U+.2,.14,0,C],[.12,C,-U/2,C/2],[.12,C,U/2,C/2],[.07,C,0,C/2],[U,.07,0,C*.55]]){let St=new ht(new $t(ot,lt,.1),A);St.position.set(Et,ut,.03),G.add(St)}let $=new He(new Oe({map:B,color:Ut("#ffb870"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.6}));$.position.set(0,C/2,.6),$.scale.set(U*2.2,C*1.8,1),G.add($),a.add(G)};for(let N of Wt.tall)N.wall==="front"?g(d-.27,N.at,N.w,N.h,N.sill,Math.PI):g(N.at,f+.27,N.w,N.h,N.sill,-Math.PI/2);let E=new ye({map:nu()});for(let N of Wt.round){let L=new _e;N.wall==="front"?(L.position.copy(vt(d-.27,N.y,N.at)),L.rotation.y=Math.PI):(L.position.copy(vt(N.at,N.y,-f-.27)),L.rotation.y=Math.PI/2),L.add(new ht(new Dn(N.r,24),E));let U=new ht(new An(N.r+.04,.07,6,24),A);U.position.z=.03,L.add(U);for(let V of[0,Math.PI/2]){let Z=new ht(new $t(2*N.r,.05,.06),A);Z.rotation.z=V,Z.position.z=.03,L.add(Z)}let C=new He(new Oe({map:B,color:Ut("#ffb870"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.45}));C.position.set(0,0,.5),C.scale.setScalar(N.r*4),L.add(C),a.add(L)}{let U=new un;U.moveTo(-.75,0),U.lineTo(-.75,2.4-.75),U.absarc(0,2.4-.75,.75,Math.PI,0,!0),U.lineTo(.75,0),U.lineTo(-.75,0);let C=new ht(new kn(U,{depth:.12,bevelEnabled:!1,curveSegments:14}),new Bt({map:an("#5a3a22","rgba(30,16,8,0.35)",4)}));C.geometry.computeBoundingBox();{let Z=C.geometry.attributes.position,G=C.geometry.attributes.uv;for(let Q=0;Q<Z.count;Q++)G.setXY(Q,(Z.getX(Q)+.75)/(2*.75),Z.getY(Q)/2.4)}C.rotation.y=Math.PI,C.position.copy(vt(d-.2,0,0)),a.add(C);let V=new Bt({color:1776930});for(let Z of[-1.15,1.15]){let G=new He(new Oe({map:fn(),color:Ut("#ffc276"),blending:Ge,depthWrite:!1,transparent:!0}));G.position.copy(vt(d-.45,2.3,Z)),G.scale.setScalar(.9),a.add(G);let Q=new ht(new $t(.16,.24,.16),new ye({color:Ut("#ffd59a")}));Q.position.copy(vt(d-.4,2.3,Z)),a.add(Q);let $=new ht(new Ye(.14,.12,4).rotateY(Math.PI/4),V);$.position.copy(vt(d-.4,2.48,Z)),a.add($);let ot=new ht(new $t(.03,.03,.3),V);ot.position.copy(vt(d-.2,2.55,Z)),a.add(ot);let lt=new ke(Ut("#ffc276"),2.4,4.2,1.4);lt.position.copy(vt(d-.75,2.2,Z*.85)),a.add(lt)}}let I=new ht(new $t(1.1,3.2,1.1),y);I.position.copy(vt(u-.55,c+h-.2,0)),a.add(I),i.add(a),r.library={group:a}}return{parts:r,shimmerTime:o,setLook(a,l){let c=l==="open";a==="wardrobe"&&r.wardrobe.setGlow(c?1:0),a==="arch"&&(r.arch.faceMat.uniforms.open.value=c?1:0)}}}var ce=(i,t,e,n,s,r,o)=>{let a=new ht(new $t(Math.abs(n-e),Math.abs(r-s),Math.abs(t-i)),o);return a.position.copy(vt((i+t)/2,(s+r)/2,(e+n)/2)),a},Ti=i=>wr.find(t=>t.id===i);function pp(){let i=new ii,t=Ar("slide");i.add(t);let{u0:e,u1:n,v:s,ceiling:r}=Wt,o=Wt.walk.top,a=Wt.walk,l=Ze(91),c=up();c.wrapS=c.wrapT=ni;let h=new Bt({map:c,side:Pe}),d=new Bt({map:an("#3e2716","rgba(20,10,4,0.4)",1)}),u=new Bt({map:an("#6a4428","rgba(30,16,8,0.3)",1)}),f=an("#5b3b22","rgba(25,12,5,0.35)",6);f.wrapS=f.wrapT=ni,f.repeat.set(3,5);let x=new Bt({map:f}),y=new Bt({map:cs(),color:12036506}),p=new Bt({map:oc(7),color:10130570}),m=new Bt({color:2369068}),S=new Bt({color:11569738,emissive:1708038});{let D=new ht(new ze(2*s,n-e).rotateX(-Math.PI/2),x);D.position.copy(vt((e+n)/2,.01,0)),t.add(D);let H=new ht(new ze(2*s,n-a.u1).rotateX(Math.PI/2),d);H.position.copy(vt((a.u1+n)/2,r,0)),t.add(H);for(let W=a.u1+1;W<n;W+=2.2)t.add(ce(W-.12,W+.12,-s,s,r-.26,r,d));let M=[],T=[],w=[],Y=[];for(let W=-s;W<=s+1e-9;W+=.25)Y.push(W);Y.forEach((W,J)=>{let k=sc(e+.01,W);for(let z of[e,a.u1]){let X=vt(z,k,W);M.push(X.x,X.y,X.z)}for(let z of[r,k]){let X=vt(a.u1,z,W);w.push(X.x,X.y,X.z)}if(J){let z=(J-1)*2;T.push(z,z+1,z+2,z+1,z+3,z+2)}});for(let[W,J]of[[M,d],[w,h]]){let k=new fe;k.setAttribute("position",new Jt(W,3)),k.setIndex(T);let z=[];for(let X=0;X<W.length/3;X++)z.push(X%2*.8,Math.floor(X/2)*.125);k.setAttribute("uv",new Jt(z,2)),k.computeVertexNormals(),t.add(new ht(k,new Bt({map:J.map,side:Pe})))}for(let W=-1.5;W<s;W+=2){let J=sc(e+.01,W);t.add(ce(e,a.u1,W-.12,W+.12,J-.24,J,d))}}function P(D,H){let M=D==="front"||D==="back"?[-s,s]:[e,n],T=new Set([M[0],M[1]]),w=new Set([0,o]);for(let J of H)T.add(J.a0),T.add(J.a1),w.add(J.y0),w.add(J.y1);let Y=[...T].sort((J,k)=>J-k),W=[...w].sort((J,k)=>J-k);for(let J=0;J<Y.length-1;J++)for(let k=0;k<W.length-1;k++){let z=(Y[J]+Y[J+1])/2,X=(W[k]+W[k+1])/2;if(H.some(Mt=>z>Mt.a0&&z<Mt.a1&&X>Mt.y0&&X<Mt.y1))continue;let j=Y[J+1]-Y[J],nt=W[k+1]-W[k],at=new ze(j,nt);{let Mt=at.attributes.uv;for(let Tt=0;Tt<Mt.count;Tt++)Mt.setXY(Tt,(Y[J]+Mt.getX(Tt)*j)/2,(W[k]+Mt.getY(Tt)*nt)/2)}let xt=new ht(at,h);D==="front"?xt.position.copy(vt(e,X,z)):D==="back"?(xt.position.copy(vt(n,X,z)),xt.rotation.y=Math.PI):D==="left"?(xt.position.copy(vt(z,X,-s)),xt.rotation.y=-Math.PI/2):(xt.position.copy(vt(z,X,s)),xt.rotation.y=Math.PI/2),t.add(xt)}}let v={front:[],back:[],left:[],right:[]};for(let D of Wt.tall)v[D.wall].push({a0:D.at-D.w/2,a1:D.at+D.w/2,y0:D.sill,y1:D.sill+D.h});for(let D of Wt.round)v[D.wall].push({a0:D.at-D.r-.02,a1:D.at+D.r+.02,y0:D.y-D.r-.02,y1:D.y+D.r+.02});for(let D of Object.keys(v))P(D,v[D]);let R=new ye({map:iu(!1),transparent:!0,depthWrite:!1,side:Pe}),A=new ye({map:iu(!0),transparent:!0,depthWrite:!1,side:Pe}),B=new Bt({color:3811352}),g=(D,H,M,T)=>{D==="front"?T.position.copy(vt(e,M,H)):D==="left"?(T.position.copy(vt(H,M,-s)),T.rotation.y=-Math.PI/2):(T.position.copy(vt(H,M,s)),T.rotation.y=Math.PI/2),t.add(T)};for(let D of Wt.tall){let H=new _e,M=new ht(new ze(D.w,D.h),R);M.renderOrder=2,H.add(M);for(let[w,Y,W,J]of[[D.w+.16,.12,0,-D.h/2],[D.w+.16,.12,0,D.h/2],[.12,D.h,-D.w/2,0],[.12,D.h,D.w/2,0],[.06,D.h,0,0],[D.w,.06,0,D.h*.05]]){let k=new ht(new $t(w,Y,.12),B);k.position.set(W,J,.02),H.add(k)}let T=new ht(new $t(D.w+.3,.06,.3),u);T.position.set(0,-D.h/2-.03,.15),H.add(T),g(D.wall,D.at,D.sill+D.h/2,H)}for(let D of Wt.round){let H=new _e,M=new un,T=D.r+.02;M.moveTo(-T,-T),M.lineTo(T,-T),M.lineTo(T,T),M.lineTo(-T,T),M.lineTo(-T,-T);let w=new xs;w.absarc(0,0,D.r,0,Math.PI*2,!0),M.holes.push(w),H.add(new ht(new Qi(M,24),h));let Y=new ht(new Dn(D.r,24),A);Y.renderOrder=2,H.add(Y);let W=new ht(new An(D.r,.06,6,28),B);W.position.z=.02,H.add(W);for(let J of[0,Math.PI/2]){let k=new ht(new $t(2*D.r,.04,.05),B);k.rotation.z=J,k.position.z=.02,H.add(k)}g(D.wall,D.at,D.y,H)}{let D=Wt.door,H=2.4,M=new un;M.moveTo(-D,0),M.lineTo(-D,H-D),M.absarc(0,H-D,D,Math.PI,0,!0),M.lineTo(D,0),M.lineTo(-D,0);let T=new kn(M,{depth:.08,bevelEnabled:!1,curveSegments:14});{let W=T.attributes.position,J=T.attributes.uv;for(let k=0;k<W.count;k++)J.setXY(k,(W.getX(k)+D)/(2*D),W.getY(k)/H)}let w=new ht(T,new Bt({map:an("#5a3a22","rgba(30,16,8,0.35)",4)}));w.position.copy(vt(e+.01,0,0)),t.add(w);let Y=new ht(new $t(.2,.05,.05),m);Y.position.copy(vt(e+.12,1.1,.45)),t.add(Y)}for(let[D,H]of Wt.columns){let M=D===0?o:r,T=new Ae(.42,.48,M,10,1,!0,0,Math.PI),w=new ht(T,y);D===0?(w.position.copy(vt(e,M/2,H)),w.rotation.y=-Math.PI/2):(w.position.copy(vt(D,M/2,H*s)),w.rotation.y=H>0?0:Math.PI),t.add(w)}for(let[D,H]of[[e,-s],[e,s],[n,-s],[n,s]]){let M=D===e?o:r,T=new ht(new Ae(.42,.48,M,10),y);T.position.copy(vt(D,M/2,H)),t.add(T)}let E=[],I=["#6b1f1f","#2f4a2c","#3a2c1e","#1f3550","#7a5a1e","#4a1f3a","#5a4632","#2c3a3f","#8a3a24","#3d4a1f","#a08050","#232a3a"].map(Ut);function N({axis:D,a0:H,a1:M,at:T,back:w,y0:Y=0,height:W,levels:J,depth:k=.42,twoSided:z=!1}){let X=new _e,j=(at,xt,Mt,Tt)=>D==="u"?ce(at,xt,T-k/2,T+k/2,Mt,Tt,d):ce(T-k/2,T+k/2,at,xt,Mt,Tt,d);X.add(j(H,H+.06,Y,Y+W)),X.add(j(M-.06,M,Y,Y+W));let nt=W/J;for(let at=0;at<=J;at++)X.add(j(H,M,Y+at*nt,Y+at*nt+.04));if(!z){let at=D==="u"?ce(H,M,T+w*(k/2-.02),T+w*(k/2),Y,Y+W,d):ce(T+w*(k/2-.02),T+w*(k/2),H,M,Y,Y+W,d);X.add(at)}t.add(X);for(let at=0;at<J;at++){let xt=Y+at*nt+.04,Mt=nt-.08;for(let Tt of z?[-1,1]:[-w]){let Ot=H+.08;for(;Ot<M-.12;){let q=.04+l()*.06,de=Math.min(Mt,Mt*(.62+l()*.34)),ie=k*(.5+l()*.25)/(z?2:1);if(l()<.06){Ot+=.1+l()*.15;continue}let F=l()<.05?l()<.5?.25:-.25:0,_=z?Tt*(ie/2+.02):Tt*(k/2-ie/2-.04);E.push({axis:D,a:Ot+q/2,at:T+_,y:xt+de/2,w:q,h:de,d:ie,lean:F,c:I[Math.floor(l()*I.length)].clone().multiplyScalar(.8+l()*.4)}),Ot+=q+.004}}}}let{mezz:L,stairs:U}=Wt;for(let D of[2.3,4.1,5.9,7.7])N({axis:"v",a0:L.v0+.45,a1:L.v1-.2,at:D,back:1,height:L.h-.12,levels:5,depth:.5,twoSided:!0});N({axis:"u",a0:e+.5,a1:L.u1-.1,at:L.v0+.21,back:-1,height:L.h-.12,levels:5});{let D=Ti("mezz-shelves");N({axis:"u",a0:D.u0,a1:D.u1,at:L.v0+.22,back:-1,y0:L.h,height:.78,levels:2})}{let D=Ti("shelf-back-right");N({axis:"v",a0:D.v0,a1:s-.1,at:n-.24,back:1,height:r-.3,levels:8})}{let D=Ti("shelf-back-left");N({axis:"v",a0:D.v0,a1:D.v1,at:n-.24,back:1,height:2.4,levels:5})}for(let D of Wt.tall.filter(H=>H.wall==="right"))N({axis:"u",a0:D.at-D.w/2+.05,a1:D.at+D.w/2-.05,at:s-.17,back:1,height:D.sill-.08,levels:2,depth:.3});{let D=new $t(1,1,1),H=new ri(D,new Bt({color:16777215}),E.length),M=new ae,T=new xn;E.forEach((w,Y)=>{let W=w.axis==="u"?vt(w.a,w.y,w.at):vt(w.at,w.y,w.a),J=w.axis==="u"?new O(w.d,w.h,w.w):new O(w.w,w.h,w.d);T.setFromEuler(w.axis==="u"?new hn(w.lean,0,0):new hn(0,0,w.lean)),M.compose(W,T,J),H.setMatrixAt(Y,M),H.setColorAt(Y,w.c)}),t.add(H)}t.add(ce(L.u0,L.u1,L.v0,L.v1,L.h-.16,L.h,u)),t.add(ce(L.u0,L.u1,L.v1-.1,L.v1+.02,L.h-.36,L.h,d));for(let D of[3.2,6.8,L.u1-.1])t.add(ce(D-.09,D+.09,L.v1-.18,L.v1,0,L.h-.16,d));let C=(D,H,M,T)=>{let w=vt(D[0],M,D[1]),Y=vt(H[0],T,H[1]),W=w.distanceTo(Y),J=w.clone().add(Y).multiplyScalar(.5),k=new ht(new $t(.07,.06,W),d);k.position.copy(J).add(new O(0,.9,0)),k.lookAt(Y.clone().add(new O(0,.9,0))),t.add(k);let z=Math.max(2,Math.round(W/.32));for(let X=0;X<=z;X++){let j=w.clone().lerp(Y,X/z),nt=new ht(new $t(.035,.9,.035),d);nt.position.copy(j).add(new O(0,.45,0)),t.add(nt)}};C([a.u1,L.v1-.05],[L.u1,L.v1-.05],L.h,L.h);{let H=(U.u1-U.u0)/10;for(let M=0;M<10;M++){let T=L.h*(M+1)/10;t.add(ce(U.u1-(M+1)*H,U.u1-M*H,U.v0,U.v1,0,T,M%2?u:d))}C([U.u1,U.v1+.02],[U.u0,U.v1+.02],.05,L.h)}let V={};{let D=Ti("fireplace");t.add(ce(D.u0+.25,n,D.v0,D.v0+.4,0,1.6,p)),t.add(ce(D.u0+.25,n,D.v1-.4,D.v1,0,1.6,p)),t.add(ce(D.u0+.25,n,D.v0,D.v1,1.25,1.6,p)),t.add(ce(D.u0+.05,n,D.v0-.15,D.v1+.15,1.6,1.72,d)),t.add(ce(n-.08,n,D.v0+.4,D.v1-.4,0,1.25,new Bt({color:1708556}))),t.add(ce(D.u0-.1,n,D.v0-.1,D.v1+.1,0,.06,p)),t.add(ce(n-.05,n,-.55,.55,1.72,r,p));for(let[T,w]of[[-.15,.25],[.15,-.3],[0,0]]){let Y=new ht(new Ae(.08,.09,.75,7).rotateZ(Math.PI/2),y);Y.position.copy(vt(D.u0+.45,.14+(T===0?.13:0),T)),Y.rotation.y=w,t.add(Y)}let H=new Oe({map:fn([[0,1],[.25,.6],[1,0]]),color:Ut("#ff9a3c"),blending:Ge,depthWrite:!1,transparent:!0});V.flames=[-.18,.02,.2].map((T,w)=>{let Y=new He(H.clone());return Y.position.copy(vt(D.u0+.45,.42,T)),Y.scale.set(.35,.6,1),Y.userData.k=w,t.add(Y),Y});let M=new He(new Oe({map:fn(),color:Ut("#ff8a2c"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.55}));M.position.copy(vt(D.u0+.3,.5,0)),M.scale.set(2.2,1.4,1),t.add(M),V.glow=M,V.light=new ke(Ut("#ff9a4a"),12,14,1.3),V.light.position.copy(vt(D.u0-.2,.7,0)),t.add(V.light)}let Z=[];function G(D,H,M){let T=new _e;T.add(ce(D-.08,D+.08,H-.08,H+.08,M,M+.03,S)),T.add(ce(D-.015,D+.015,H-.015,H+.015,M,M+.36,S));let w=new ht(new Ae(.1,.17,.14,14,1,!0),new ye({color:Ut("#ffcf8a"),side:Pe}));w.position.copy(vt(D,M+.36,H)),T.add(w);let Y=new He(new Oe({map:fn(),color:Ut("#ffc27a"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.8}));Y.position.copy(vt(D,M+.33,H)),Y.scale.setScalar(.8),T.add(Y);let W=new ke(Ut("#ffbf78"),7,9,1.4);W.position.copy(vt(D,M+.3,H)),T.add(W),t.add(T),Z.push(W)}for(let D of["table1","table2"]){let H=Ti(D),M=.76;t.add(ce(H.u0,H.u1,H.v0,H.v1,M-.06,M,u));for(let[w,Y]of[[H.u0+.12,H.v0+.12],[H.u1-.12,H.v0+.12],[H.u0+.12,H.v1-.12],[H.u1-.12,H.v1-.12]])t.add(ce(w-.05,w+.05,Y-.05,Y+.05,0,M-.06,d));G(H.u1-.35,H.v1-.3,M);let T=Ti(D==="table1"?"chairs1":"chairs2");for(let w of[T.u0+.3,T.u1-.3]){t.add(ce(w-.24,w+.24,T.v0,T.v0+.45,.44,.49,u)),t.add(ce(w-.24,w+.24,T.v0+.42,T.v0+.47,.49,1.05,u));for(let[Y,W]of[[-.2,.04],[.2,.04],[-.2,.42],[.2,.42]])t.add(ce(w+Y-.03,w+Y+.03,T.v0+W-.03,T.v0+W+.03,0,.44,d))}}let Q={};{let D=Ti("table1"),H=.76,M=new Bt({map:dp(),side:Pe});for(let[k,z,X]of[[D.u0+.55,D.v0+.45,.3],[D.u0+1.15,D.v0+.55,-.5]]){let j=new _e;for(let nt of[-1,1]){let at=new ht(new $t(.2,.012,.28),new Bt({color:(nt<0,7020319)}));at.position.set(nt*.1,.006,0),at.rotation.z=nt*-.06,j.add(at);let xt=new ht(new ze(.19,.26).rotateX(-Math.PI/2),M);xt.position.set(nt*.1,.03,0),xt.rotation.z=nt*-.08,j.add(xt)}j.position.copy(vt(k,H,z)),j.rotation.y=X,t.add(j)}let T=new ht(new Ae(.045,.038,.09,12),new Bt({color:15262422}));T.position.copy(vt(D.u0+1.55,H+.045,D.v0+.3)),t.add(T);let w=new ht(new An(.025,.007,6,10),T.material);w.position.copy(vt(D.u0+1.55,H+.05,D.v0+.36)),w.rotation.y=Math.PI/2,t.add(w);let Y=vt(D.u0+.9,H,D.v0+.2),W=new ht(new Ae(.06,.07,.02,12),S);W.position.copy(Y).add(new O(0,.01,0)),t.add(W);let J=new ht(new Ae(.022,.024,.16,10),new Bt({color:15919832,emissive:2760720}));J.position.copy(Y).add(new O(0,.1,0)),t.add(J),Q.flame=new He(new Oe({map:fn([[0,1],[.3,.55],[1,0]]),color:Ut("#ffcf7a"),blending:Ge,depthWrite:!1,transparent:!0})),Q.flame.position.copy(Y).add(new O(0,.22,0)),Q.flame.scale.set(.07,.13,1),t.add(Q.flame),Q.light=new ke(Ut("#ffc070"),1.2,2.5,1.6),Q.light.position.copy(Y).add(new O(0,.26,0)),t.add(Q.light)}{let D=Ti("nook-chair"),H=L.h,M=new Bt({color:8010282});t.add(ce(D.u0,D.u1,D.v0,D.v1,H,H+.42,M)),t.add(ce(D.u0-.05,D.u0+.12,D.v0,D.v1,H,H+1,M));for(let w of[D.v0,D.v1-.14])t.add(ce(D.u0,D.u1,w,w+.14,H,H+.62,M));let T=Ti("nook-table");t.add(ce(T.u0,T.u1,T.v0,T.v1,H+.55,H+.6,u)),t.add(ce((T.u0+T.u1)/2-.04,(T.u0+T.u1)/2+.04,(T.v0+T.v1)/2-.04,(T.v0+T.v1)/2+.04,H,H+.55,d)),G((T.u0+T.u1)/2,(T.v0+T.v1)/2,H+.6),t.add(ce(D.u0+.3,D.u0+.52,D.v1-.13,D.v1-.01,H+.62,H+.66,new Bt({color:2045264})))}{let D=Ti("ladder"),H=(D.v0+D.v1)/2,M=new ht(new Ae(.02,.02,Wt.v-1.5,8).rotateX(Math.PI/2),S);M.position.copy(vt(n-.5,r-.45,(1.5+Wt.v)/2)),M.rotation.y=Math.PI/2,t.add(M);for(let T of[-1,1]){let w=vt(D.u0+.05,0,H+T*.22),Y=vt(n-.5,r-.45,H+T*.22),W=w.distanceTo(Y),J=new ht(new $t(.05,.05,W),u);J.position.copy(w.clone().add(Y).multiplyScalar(.5)),J.lookAt(Y),t.add(J);let k=new ht(new Ae(.04,.04,.03,10).rotateX(Math.PI/2),S);k.position.copy(w).add(new O(0,.04,0)),t.add(k)}for(let T=1;T<11;T++){let w=T/11,Y=vt(D.u0+.05,0,H),W=vt(n-.5,r-.45,H),J=Y.clone().lerp(W,w),k=new ht(new Ae(.018,.018,.44,6).rotateZ(Math.PI/2),u);k.position.copy(J),t.add(k)}}let $={};{let D=Wt.bench,H=a.h1;t.add(ce(D.u0,D.u1,D.v0,D.v1,H+D.h-.06,H+D.h,u));for(let xt of[D.u0+.1,D.u1-.1])t.add(ce(xt-.04,xt+.04,D.v0+.05,D.v1-.03,H,H+D.h-.06,d));let M=Wt.littleDoor,T=M.half,w=M.y1-M.y0,Y=new ht(new ze(2*T,w),new ye({color:1707270}));Y.position.copy(vt(M.u,M.y0+w/2,s-.005)),Y.rotation.y=Math.PI/2,t.add(Y),t.add(ce(M.u-T-.03,M.u+T+.03,s-.04,s,M.y1,M.y1+.03,d));for(let xt of[-1,1])t.add(ce(M.u+xt*(T+.015)-.015,M.u+xt*(T+.015)+.015,s-.04,s,M.y0,M.y1,d));let W=new un;W.moveTo(-T,0),W.lineTo(-T,w-T),W.absarc(0,w-T,T,Math.PI,0,!0),W.lineTo(T,0),W.lineTo(-T,0);let J=new kn(W,{depth:.02,bevelEnabled:!1,curveSegments:10}).translate(T,0,0);{let xt=J.attributes.position,Mt=J.attributes.uv;for(let Tt=0;Tt<xt.count;Tt++)Mt.setXY(Tt,xt.getX(Tt)/(2*T),xt.getY(Tt)/w)}let k=new _e;k.position.copy(vt(M.u+T,M.y0,s-.03)),k.rotation.y=Math.PI/2;let z=new ht(J,new Bt({map:an("#7a5030","rgba(30,16,8,0.4)",3)}));k.add(z);let X=new ht(new We(.012,8,6),S);X.position.set(2*T-.04,w*.45,.025),k.add(X);let j=new _e,nt=new ht(new Dn(.009,10),new ye({color:328450}));nt.position.set(2*T-.04,w*.3,.021);let at=new ht(new ze(.007,.02),nt.material);at.position.set(2*T-.04,w*.3-.012,.021),j.add(nt,at),k.add(j),t.add(k),$.hinge=k,$.keyhole=j,$.glow=new He(new Oe({map:fn(),color:Ut("#ffb060"),blending:Ge,depthWrite:!1,transparent:!0,opacity:0})),$.glow.position.copy(vt(M.u,M.y0+w*.45,s-.08)),$.glow.scale.setScalar(.35),t.add($.glow)}{let D=(M,T)=>{let w=Rs(M),Y=Rs(T),W=Math.hypot(T-M,Y-w),J=new ht(new $t(W,.16,a.u1-a.u0),u);J.position.copy(vt((a.u0+a.u1)/2,(w+Y)/2-.08,(M+T)/2)),J.rotation.z=-Math.atan2(Y-w,T-M),t.add(J);let k=new ht(new $t(W,.3,.1),d);k.position.copy(vt(a.u1-.05,(w+Y)/2-.15,(M+T)/2)),k.rotation.z=J.rotation.z,t.add(k)};D(a.v0,a.level),D(a.level,a.v1);let H=wr.find(M=>M.id==="walk-posts");t.add(ce(H.u0,H.u1,H.v0,H.v1,0,a.h1-.16,d));for(let M of[-.6,3]){let T=Rs(M)+1.55;t.add(ce(e,e+.22,M-.02,M+.02,T+.1,T+.14,m));let w=new ht(new $t(.11,.17,.11),new ye({color:Ut("#ffd59a")}));w.position.copy(vt(e+.22,T,M)),t.add(w);let Y=new ht(new Ye(.1,.08,4).rotateY(Math.PI/4),m);Y.position.copy(vt(e+.22,T+.12,M)),t.add(Y);let W=new He(new Oe({map:fn(),color:Ut("#ffc27a"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.7}));W.position.copy(vt(e+.24,T,M)),W.scale.setScalar(.7),t.add(W);let J=new ke(Ut("#ffbf78"),4.5,7,1.4);J.position.copy(vt(e+.45,T,M)),t.add(J)}C([a.u1-.03,a.v0],[a.u1-.03,a.level],a.h0,a.h1),C([a.u1-.03,a.level],[a.u1-.03,a.v1],a.h1,a.h1)}{let D=wr.find(k=>k.id==="coat-stand"),H=(D.u0+D.u1)/2,M=(D.v0+D.v1)/2+.1,T=new ht(new Ae(.035,.045,1.85,8),d);T.position.copy(vt(H,.925,M)),t.add(T);for(let k of[0,2.1,4.2]){let z=new ht(new $t(.04,.04,.32),d);z.position.copy(vt(H,.03,M)),z.rotation.y=k,z.translateZ(.12),t.add(z)}for(let k of[.4,2.5,4.6]){let z=new ht(new Ae(.012,.012,.18,6).rotateX(Math.PI/3),S);z.position.copy(vt(H,1.78,M)),z.rotation.y=k,z.translateZ(.06),t.add(z)}let w=[[0,-1.35],[.25,-1.33],[.27,-1.1],[.23,-.6],[.2,-.2],[.22,-.08],[.17,0],[.05,.04],[0,.04]].map(([k,z])=>new yt(k,z)),Y=new ht(new Ki(w,12).scale(1,1,.55),new Bt({color:3814466}));Y.position.copy(vt(H-.18,1.8,M-.02)),Y.rotation.y=.5,t.add(Y);let W=new Bt({color:9054756});for(let[k,z]of[[.06,.62],[.12,.5]]){let X=new ht(new $t(.1,z,.03),W);X.position.copy(vt(H+k,1.78-z/2,M+.1)),X.rotation.x=.1,t.add(X)}let J=new Bt({color:2759700});for(let k of[-.08,.08])t.add(ce(H+.18,H+.3,M+k-.05,M+k+.05,0,.28,J)),t.add(ce(H+.18,H+.42,M+k-.05,M+k+.05,0,.08,J))}let ot={};{let D={u:a.u1-.03,v:2.1},H=Rs(D.v)+.93,M=new ji({color:1381916,specular:4872826,shininess:40}),T=new Bt({color:2763312}),w=new _e;w.position.copy(vt(D.u,H,D.v)),w.rotation.y=Math.PI;let Y=new ht(new We(.1,12,9).scale(.85,.9,1.35),M);Y.position.set(0,.12,0),Y.rotation.x=-.35,w.add(Y);let W=new ht(new Ye(.06,.2,4).scale(1,1,.3),M);W.position.set(0,.08,-.15),W.rotation.x=-2,w.add(W);let J=[-1,1].map(j=>{let nt=new ht(new We(.07,8,6).scale(.35,.8,1.6),M);return nt.position.set(j*.075,.13,-.02),nt.rotation.x=-.4,w.add(nt),nt}),k=new _e;k.position.set(0,.25,.08),w.add(k),k.add(new ht(new We(.065,12,9),M));let z=new ht(new Ye(.022,.09,6).rotateX(Math.PI/2),T);z.position.set(0,-.01,.09),k.add(z);let X=[-1,1].map(j=>{let nt=new _e;nt.position.set(j*.042,.015,.035),nt.add(new ht(new We(.013,8,6),new ye({color:657932})));let at=new ht(new We(.004,6,4),new ye({color:16777215}));return at.position.set(j*.004,.005,.011),nt.add(at),k.add(nt),nt});for(let j of[-1,1]){let nt=new ht(new Ae(.006,.006,.07,5),T);nt.position.set(j*.03,.035,.01),w.add(nt)}t.add(w),Object.assign(ot,{bird:w,head:k,eyes:X,wings:J,at:D,base:w.position.clone(),hop:null,home:!0,nextHop:6,nextLook:3,nextBlink:2,look:0,lookTo:0,blink:0})}i.add(new Bi(Ut("#7d8db5"),.55)),i.add(new vs(Ut("#93a4d0"),Ut("#4a3424"),.45));let lt=new ke(Ut("#ffb070"),3.5,18,1.2);lt.position.copy(vt((e+n)/2,r-.6,.5)),t.add(lt);let Et=!1,ut=()=>{};function St(D,H,M,T){let w=ot;if(w.hop){w.hop.t+=H;let W=Math.min(1,w.hop.t/.32),J=w.hop.from,k=w.hop.to,z=J+(k-J)*W;w.bird.position.copy(w.base).add(vt(0,0,z).sub(vt(0,0,0))),w.bird.position.y=w.base.y+Math.sin(W*Math.PI)*.07;for(let[X,j]of w.wings.entries())j.rotation.z=(X?-1:1)*Math.sin(W*Math.PI)*.9;if(W>=1){w.hop=null,w.bird.position.y=w.base.y;for(let X of w.wings)X.rotation.z=0}}else!T&&D>w.nextHop&&(w.hop={t:0,from:w.home?0:.18,to:w.home?.18:0},w.home=!w.home,w.nextHop=D+(w.home?5+Math.random()*5:1.2+Math.random()*1.8),ut());let Y=!1;if(M&&M.level>1){let[W,J]=be(te.slide,M.x,M.z),k=W-w.at.u,z=J-(w.at.v+(w.home?0:.18));Math.hypot(k,z)<5&&(Y=!0,w.lookTo=Math.max(-1.6,Math.min(1.6,Math.atan2(z,-k))))}!Y&&D>w.nextLook&&(w.lookTo=w.lookTo!==0?0:(Math.random()<.5?-1:1)*(.3+Math.random()*.25),w.nextLook=D+(w.lookTo?1.2+Math.random()*1.5:3+Math.random()*5)),w.look+=(w.lookTo-w.look)*Math.min(1,H*(Y?6:9)),w.head.rotation.y=w.look,D>w.nextBlink&&(w.blink=.14,w.nextBlink=D+2+Math.random()*4),w.blink=Math.max(0,w.blink-H);for(let W of w.eyes)W.scale.y=w.blink>0?.12:1}return{scene:i,group:t,setLook(D){Et=D==="open",$.keyhole.visible=!Et},setLittleDoor(D){$.hinge.rotation.y=Math.PI/2+D*1.7},set onHop(D){ut=D},crow:ot,tick(D,{fig:H=null,dt:M=1/60,reduce:T=!1}={}){St(D,M,H,T);let w=(J,k)=>.5+.5*Math.sin(D*J+k),Y=.75+.25*w(8.3,0)*w(5.1,1.3)+.1*w(17,2);V.light.intensity=12*Y,V.glow.material.opacity=.4+.25*Y;for(let J of V.flames){let k=J.userData.k;J.scale.set(.3+.08*w(6+k,k),.5+.2*w(9+k*2,k*1.7),1)}let W=.85+.15*w(11,.4)*w(7,2);Q.light.intensity=1.2*W,Q.flame.scale.set(.07,.12+.03*W,1),$.glow.material.opacity=Et?.25+.1*w(2,0):0}}}var Ps=(i,t,e)=>{let n=ui(i);return new O(n.x+n.rx*t,Oo+e,n.z+n.rz*t)};function mp(){let i=new ii,{half:t,height:e,door:n}=Xn,s=e-t,r=su(),o=new Bt({map:r,side:Pe});{let G=[];for(let k=0;k<=4;k++)G.push([-t,k/4*s]);for(let k=1;k<16;k++){let z=Math.PI-k/16*Math.PI;G.push([Math.cos(z)*t,s+Math.sin(z)*t])}for(let k=4;k>=0;k--)G.push([t,k/4*s]);let Q=[0];for(let k=1;k<G.length;k++)Q.push(Q[k-1]+Math.hypot(G[k][0]-G[k-1][0],G[k][1]-G[k-1][1]));let $=[],ot=n+1.2;for(let k=0;k<=ot+1e-9;k+=.25)$.push(k);let lt=[],Et=[],ut=[];$.forEach((k,z)=>G.forEach(([X,j],nt)=>{let at=Ps(k,X,j);lt.push(at.x,at.y,at.z),Et.push(Q[nt]/2.4,k/3)}));let St=G.length;for(let k=0;k<$.length-1;k++)for(let z=0;z<St-1;z++){let X=k*St+z;ut.push(X,X+St,X+1,X+1,X+St,X+St+1)}let D=new fe;D.setAttribute("position",new Jt(lt,3)),D.setAttribute("uv",new Jt(Et,2)),D.setIndex(ut),D.computeVertexNormals(),i.add(new ht(D,o));let H=su();H.repeat.set(1,4);let M=[],T=[],w=[];$.forEach((k,z)=>{for(let X of[-t,t]){let j=Ps(k,X,.005);M.push(j.x,j.y,j.z),T.push((X+t)/2,k/3)}if(z){let X=(z-1)*2;w.push(X,X+2,X+1,X+1,X+2,X+3)}});let Y=new fe;Y.setAttribute("position",new Jt(M,3)),Y.setAttribute("uv",new Jt(T,2)),Y.setIndex(w),Y.computeVertexNormals(),i.add(new ht(Y,new Bt({map:H,color:10127994,side:Pe})));let W=new Bt({color:15265527,transparent:!0,opacity:.55,depthWrite:!1});for(let k=0;k<9;k++){let z=.1+Math.pow(k/9,1.4)*1.8,X=Math.sin(k*2.1)*.55,j=.18+k%3*.08,nt=new ht(new Dn(j*(1-z/2.4),10).rotateX(-Math.PI/2),W);nt.position.copy(Ps(z,X,.012)),i.add(nt)}let J=new ht(new oi(new wn(G.map(([k,z])=>Ps(.02,k*1.02,z+.01))),40,.06,6,!1),new Bt({map:an("#9a7248","rgba(60,36,18,0.3)",1)}));i.add(J)}let a=new Bt({color:1513500}),l=ui(n),c=new _e;c.position.copy(Ps(n,0,0)),c.rotation.y=Math.atan2(-l.dx,-l.dz),i.add(c);let h=2*t-.06,d=e-.04,u=new _e;u.position.set(h/2,0,0),c.add(u);let f=new Bt({map:an("#5a3a22","rgba(25,12,5,0.4)",1)}),x=G=>{let Q=t-.03,$=Math.abs(G);return $<Q?s+Math.sqrt(Q*Q-$*$)-.02:s},y=[],p=5,m=h/p;for(let G=0;G<p;G++){let Q=-h/2+G*m+.012,$=Q+m-.024,ot=(Q+$)/2,lt=Math.min(x(Q),x($)),Et=new ht(new $t($-Q,lt,.09),f);Et.position.set(-ot-h/2,lt/2,0),u.add(Et),G&&y.push(-(Q-.012)-h/2)}let S=new ye({color:Ut("#ffc27a"),transparent:!0,opacity:0,depthWrite:!1});for(let G of y){let Q=new ht(new ze(.02,s+.4),S);Q.position.set(G,(s+.4)/2+.05,-.06),u.add(Q)}for(let G of[.35,1.15,1.9]){let Q=h*.78,$=new ht(new $t(Q,.07,.02),a);$.position.set(-Q/2-.08,G,.056),u.add($);let ot=new ht(new An(.07,.016,6,16,Math.PI*1.5),a);ot.position.set(-Q-.08,G+.07,.06),ot.rotation.z=Math.PI*.25,u.add(ot);let lt=ot.clone();lt.scale.setScalar(.6),lt.position.set(-Q*.55,G-.07,.06),lt.rotation.z=Math.PI*1.25,u.add(lt);for(let Et=0;Et<5;Et++){let ut=new ht(new We(.025,8,6),a);ut.position.set(-.15-Et*(Q/5),G,.07),u.add(ut)}}let P=new ht(new An(.08,.014,6,16),a);P.position.set(-h+.25,1.05,.08),u.add(P);let v=new ht(new $t(h+.3,.11,.08),a);c.add(v);for(let G of[-h/2-.05,h/2+.05]){let Q=new ht(new $t(.1,.2,.16),a);Q.position.set(G,1.15,.1),c.add(Q)}let R=G=>{v.position.set(-h/2*G*1.1+(1-G)*0,1.15+G*.05,.16+G*.06),v.rotation.z=G*(Math.PI/2-.12),G>.99&&v.position.set(-t+.12,(h+.3)/2,.25)},A=new ye({color:Ut("#ffb45a"),transparent:!0,opacity:0,fog:!1,depthWrite:!1}),B=new ht(new ze(2*t+.4,e+.3),A);B.position.set(0,e/2,-.7),c.add(B);let g=new ke(Ut("#ffb45a"),0,6,1.4);g.position.set(0,1.4,-.4),c.add(g);let E=(G,Q,$,ot)=>(G.position.set(Q,$,ot),G),I=new _e;I.position.copy(Ps(n-.45,-t+.2,1.55)),i.add(I),I.add(E(new ht(new $t(.03,.03,.22),a),0,.24,0));for(let[G,Q]of[[1,1],[1,-1],[-1,1],[-1,-1]])I.add(E(new ht(new $t(.02,.24,.02),a),G*.07,0,Q*.07));I.add(E(new ht(new Ye(.11,.1,4).rotateY(Math.PI/4),a),0,.17,0));let N=new ht(new $t(.12,.2,.12),new ye({color:Ut("#ffcf86")}));I.add(N);let L=new He(new Oe({map:fn(),color:Ut("#ffbf70"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.8}));L.scale.setScalar(.9),I.add(L);let U=new ke(Ut("#ffb86a"),4,7,1.4);I.add(U);let C=new ke(Ut("#9fb6ff"),1.6,4.5,1.5);C.position.copy(Ps(.4,0,1.5)),i.add(C),i.add(new Bi(Ut("#6a5a50"),.35));let V="dormant",Z={scene:i,setLook(G){V=G==="open"?"open":"dormant",R(V==="open"?1:0),S.opacity=V==="open"?.85:0},setDoor(G){u.rotation.y=-G*1.6},setBeyond(G){A.opacity=G,g.intensity=6*G},tick(G){let Q=.85+.15*Math.sin(G*7.1)*Math.sin(G*3.3+1);U.intensity=4*Q,L.material.opacity=.65+.2*Q,V==="open"&&(S.opacity=.7+.2*Math.sin(G*1.7))}};return Z.setLook("dormant"),Z}var qn={wood:3,ice:3.6,blue:1.5},ru="#4260b0";function gp(i,t,e,n=.12){let s=i.computeFrenetFrames(t,!1),r=[],o=[],a=[],l=14,c=new O(0,1,0);for(let d=0;d<=t;d++){let u=i.getPointAt(d/t),f=s.tangents[d],x=new O().crossVectors(f,c).normalize(),y=new O().crossVectors(f,x).normalize();y.y>0&&y.negate();for(let p=0;p<=l;p++){let m=-n+p/l*(Math.PI+2*n),S=u.clone().addScaledVector(x,Math.cos(m)*e).addScaledVector(y,Math.sin(m)*e);r.push(S.x,S.y,S.z),o.push(p/l,d/6)}if(d)for(let p=0;p<l;p++){let m=(d-1)*(l+1)+p;a.push(m,m+l+1,m+1,m+1,m+l+1,m+l+2)}}let h=new fe;return h.setAttribute("position",new Jt(r,3)),h.setAttribute("uv",new Jt(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function xp({forest:i,groundAt:t}){let e=new ii;e.background=Ut("#080503");let n=3.2,s=1.1,r=7.5,o=new wn(Array.from({length:80},(g,E)=>{let I=E/79,N=I*n*Math.PI*2;return new O(Math.cos(N)*s,-I*r,Math.sin(N)*s)})),a=new ji({map:an("#8a5a30","rgba(40,20,8,0.3)",1),shininess:70,specular:5583650,emissive:2757640,side:Pe});e.add(new ht(gp(o,360,.16),a));let l=cs();l.repeat.set(4,3);let c=new ht(new Ae(2.1,2.1,r+3,24,1,!0),new Bt({map:l,color:9071188,side:Ke}));c.position.y=-r/2+.5,e.add(c);let h=new Bt({map:cs(),color:6967360});for(let g=0;g<16;g++){let E=-2.5-g/16*(r-2),I=g*2.4,N=[new O(Math.cos(I)*2.2,E+.4,Math.sin(I)*2.2),new O(Math.cos(I+.5)*1.5,E,Math.sin(I+.5)*1.5),new O(Math.cos(I+1.1)*2.2,E-.5,Math.sin(I+1.1)*2.2)];e.add(new ht(new oi(new wn(N),12,.05+g%3*.03,6,!1),h))}let d=new Oe({map:fn(),color:Ut("#ffb860"),blending:Ge,depthWrite:!1,transparent:!0});for(let g=0;g<18;g++){let E=(g+.5)/18,I=o.getPointAt(E),N=new O(I.x,0,I.z).normalize(),L=new He(d);L.position.copy(I).addScaledVector(N,.55).add(new O(0,.3,0)),L.scale.setScalar(.45),e.add(L);let U=new ht(new We(.035,8,6),new ye({color:Ut("#ffd59a")}));U.position.copy(L.position),e.add(U)}let u=new ke(Ut("#ffbe78"),4,4,1.4);e.add(u);for(let g=0;g<4;g++){let E=new ke(Ut("#ffaa60"),5,5,1.3);E.position.set(0,-.6-g*2.1,0),e.add(E)}e.add(new Bi(Ut("#6a4a34"),.9));let f=Qh(.5).map(([g,E],I,N)=>{let L=I/(N.length-1),U=Math.max(0,(L-.86)/.14);return new O(g,t(g,E)+.22+(1-L)*.25-U*U*1.6,E)}),x=new wn(f),y=new _e,p=new ji({color:Ut("#a8dcf0"),emissive:Ut("#24506a"),specular:16777215,shininess:110,transparent:!0,opacity:.82,side:Pe,depthWrite:!1}),m=new ht(gp(x,420,.24,.25),p);m.renderOrder=1,y.add(m);let S=new Bt({color:Ut("#e6ecf6")});for(let g of[-1,1]){let E=[];for(let N=0;N<=80;N++){let L=N/80*.86,U=x.getPointAt(L),C=x.getTangentAt(L),V=new O(-C.z,0,C.x).normalize(),Z=U.clone().addScaledVector(V,g*.4);Z.y=t(Z.x,Z.z)+.06,E.push(Z)}let I=new ht(new oi(new wn(E),200,.2,7,!1),S);I.scale.y=1,y.add(I)}{let g=x.getPointAt(0),E=new ht(new We(1.2,14,8).scale(1.3,.6,1.3),S);E.position.set(g.x,t(g.x,g.z),g.z),y.add(E);let I=new ht(new Dn(.26,14),new ye({color:656900})),N=x.getTangentAt(.01);I.position.copy(x.getPointAt(.004)),I.lookAt(I.position.clone().add(N)),y.add(I)}let[P,v]=Er,R=new O(P,t(P,v)-1.2,v);{let g=new ht(new An(2.3,.45,8,28).rotateX(Math.PI/2).scale(1,.5,1),S);g.position.set(P,t(P+2.7,v)+.05,v),y.add(g);let E=new ht(new Dn(1.5,24).rotateX(-Math.PI/2),new ye({color:Ut("#8aa0e0")}));E.position.set(P,t(P,v)-.02,v),y.add(E);let I=new He(new Oe({map:fn(),color:Ut("#6f8ce0"),blending:Ge,depthWrite:!1,transparent:!0,opacity:.85}));I.position.set(P,t(P,v)+.6,v),I.scale.set(4.5,2.6,1),y.add(I);let N=new ke(Ut("#6f8ce0"),5,9,1.5);N.position.set(P,t(P,v)+.8,v),y.add(N)}i.add(y);let A=qn.wood+qn.ice+qn.blue;function B(g){if(g<qn.wood){let U=g/qn.wood,C=U*U*(3-2*U)*.25+U*.75,V=o.getPointAt(Math.min(1,C)),Z=o.getPointAt(Math.min(1,C+.03)),G=o.getPointAt(Math.max(0,C-.025));return u.position.copy(Z).add(new O(0,.25,0)),{part:"wood",scene:"ride",rider:Z.clone().add(new O(0,-.1,0)),cam:G.clone().add(new O(0,.12,0)),look:o.getPointAt(Math.min(1,C+.07)),k:U}}if(g<qn.wood+qn.ice){let U=(g-qn.wood)/qn.ice,C=Math.min(.9,U*.9),V=x.getPointAt(C+.012),Z=x.getPointAt(Math.max(0,C-.004));return{part:"ice",scene:"forest",rider:V.clone().add(new O(0,-.12,0)),cam:Z.clone().add(new O(0,.16,0)),look:x.getPointAt(Math.min(1,C+.05)).add(new O(0,.05,0)),k:U}}let E=Math.min(1,(g-qn.wood-qn.ice)/qn.blue),I=.9+E*.1,N=x.getPointAt(Math.min(1,I)),L=x.getPointAt(Math.max(0,I-.01));return{part:"blue",scene:"forest",rider:N.clone(),cam:L.clone().add(new O(0,.25-E*.2,0)),look:R.clone().lerp(N,.3*(1-E)),k:E}}return{scene:e,woodCurve:o,iceCurve:x,iceGroup:y,blueAt:R,rideAt:B,total:A}}var Ho={v:1,tile:"winter-forest",place:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.place/winter-forest",entry:"ways-only",exits:[{id:"wardrobe",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.wardrobe",fallback:"https://thunderbird.cafe/way/winter-forest/wardrobe"},{id:"tree-door",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.tree-door",fallback:"https://thunderbird.cafe/way/winter-forest/tree-door"},{id:"arch",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.arch",fallback:"https://thunderbird.cafe/way/winter-forest/arch"},{id:"slide",signpost:"at://did:plc:6vxjigxrqizmbo56gojxico3/cafe.thunderbird.way.signpost/winter-forest.slide",fallback:"https://thunderbird.cafe/way/winter-forest/slide"}],entrances:[{id:"lamppost"},{id:"wardrobe"},{id:"tree-door"},{id:"arch"}]};var pv="tiles-protocol-up-way-payload",mv="tiles-protocol-down-way-payload",_p=1,gv=1e3,xv=["n","ne","e","se","s","sw","w","nw"];function _v(i){let t=(-i/(Math.PI*2)%1+1)%1;return xv[Math.round(t*8)%8]}function yp({ways:i=Ho,win:t=window,onStatus:e=()=>{},onArrive:n=()=>{},timers:s={setTimeout:(r,o)=>setTimeout(r,o)}}={}){let r=t.parent&&t.parent!==t,o=f=>i.exits.find(x=>x.id===f)||null,a=f=>i.entrances.some(x=>x.id===f),l="waiting",c=new Map,h=f=>{r&&t.parent.postMessage({action:pv,payload:{v:_p,...f}},"*")};t.addEventListener("message",f=>{if(!r||f.source!==t.parent)return;let x=f.data;if(!x||x.action!==mv||!x.payload||x.payload.v!==_p)return;let y=x.payload;if(y.kind==="status"){if(!y.exits||typeof y.exits!="object")return;l="host";for(let p of i.exits)c.set(p.id,y.exits[p.id]==="open"?"open":"dormant");e()}else if(y.kind==="arrive"){if(typeof y.entrance!="string"||!a(y.entrance))return;l="host",n(y.entrance)}});let d=()=>h({kind:"hello",tile:i.tile,ways:"/ways.json"});r&&(d(),s.setTimeout(()=>{l==="waiting"&&d()},500));let u=()=>{l==="waiting"&&(l="plain",e())};return s.setTimeout(u,r?gv:0),{state(f){return l==="host"?c.get(f)||"dormant":l},leave(f,x=0){return l!=="host"||!o(f)?!1:(h({kind:"leave",exit:f,facing:_v(x)}),!0)},get host(){return l==="host"},get mode(){return l}}}var ac=0,ou=0;function au({inFrame:i=!0}={}){let t=document.getElementById("postcard"),e=document.getElementById("pcsnow"),n=document.getElementById("pcline");if(!t)return;t.hidden=!1,n.classList.remove("show"),clearTimeout(ou),ou=setTimeout(()=>n.classList.add("show"),i?1400:600);let s=e.getContext("2d"),r=[],o=0,a=0,l=performance.now(),c=()=>{let u=Math.min(2,window.devicePixelRatio||1);o=t.clientWidth,a=t.clientHeight,e.width=Math.max(1,Math.round(o*u)),e.height=Math.max(1,Math.round(a*u)),s.setTransform(u,0,0,u,0,0);let f=Math.round(o*a/2600);for(;r.length<f;)r.push({x:Math.random()*o,y:Math.random()*a,r:.6+Math.random()*1.8,s:12+Math.random()*26,p:Math.random()*6.28});r.length=f};c(),window.addEventListener("resize",c);let h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=u=>{let f=Math.min(.1,(u-l)/1e3);l=u,s.clearRect(0,0,o,a);for(let x of r)h||(x.y+=x.s*f,x.x+=Math.sin(u/1400+x.p)*6*f),x.y>a+4&&(x.y=-4,x.x=Math.random()*o),s.globalAlpha=.45+x.r*.2,s.fillStyle="#f2f6ff",s.beginPath(),s.arc(x.x,x.y,x.r,0,Math.PI*2),s.fill();ac=requestAnimationFrame(d)};cancelAnimationFrame(ac),ac=requestAnimationFrame(d)}function lu(){let i=document.getElementById("postcard");i&&(i.hidden=!0),cancelAnimationFrame(ac),clearTimeout(ou)}var Yn=Nf,$n=i=>document.getElementById(i),Cr=$n("stage"),wp="winter-forest",pu=(()=>{try{return JSON.parse(localStorage.getItem(wp)||"{}")}catch{return{}}})(),Ap=()=>{try{localStorage.setItem(wp,JSON.stringify({sound:Pr.sound,reduce:mc?Jn:void 0}))}catch{}},Pr={...Ff(),sound:pu.sound!==!1},hu=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},mc=typeof pu.reduce=="boolean",Jn=mc?pu.reduce:!!hu.matches,nn=new Ql({antialias:!0,preserveDrawingBuffer:!1});nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1));Cr.appendChild(nn.domElement);var Ls=Zf(nn,Yn),{scene:Xo,camera:en,groundAt:mu,walkWorld:yv,figure:Ai}=Ls,Cn=fp({scene:Xo,renderer:nn,sceneParts:Ls,look:Yn,other:Uf}),Ns=pp(),On=mp(),Go=xp({forest:Xo,groundAt:mu}),vn=Df(Pr),Rp={forest:Xo,library:Ns.scene,tunnel:On.scene,ride:Go.scene};{let[i,t]=ge(te.slide,Wt.u1-.5,0);vn.setFirePos(i,.6,t)}Ns.onHop=()=>{xe==="library"&&vn.rustle()};var gu={lamppost:{...As.lamppost,place:"forest"},wardrobe:{...As.wardrobe,place:"forest"},"tree-door":{...op,place:"tunnel"},arch:{...As.arch,place:"forest"}},ft={x:As.lamppost.x,z:As.lamppost.z,yaw:As.lamppost.yaw,y:0,level:0,bob:0,steps:0,size:1},xe="forest",Tn="postcard",Ds=!1,Re=null,Vo=null,Cp=0,Rr=null,uu="",Ue={pos:new O,look:new O,ready:!1,override:null},Zn={forward:!1,back:!1,left:!1,right:!1},dc={x:0,y:0},hc=0,vv=$n("where"),cu=$n("note"),lc=$n("fade"),Pp=$n("fadetext"),Ip=$n("hint"),fc=$n("soundbtn"),Ir=$n("gearbtn"),Is=$n("menu"),du=$n("reduce"),vp=0;function Lp(i,t=2600){cu.textContent=i,cu.classList.add("show"),clearTimeout(vp),vp=setTimeout(()=>cu.classList.remove("show"),t)}function Wo(i){i!==uu&&(uu=i,vv.textContent=`Winter Forest · ${i}`)}var Mv=["#2a1a0c","#0b1020","#05070c","#1c1209",ru];function bn(i,t,e=0,n=""){lc.style.transition=e?`opacity ${e}ms ease`:"none",i&&(lc.style.background=i),lc.style.opacity=String(t),Pp.textContent=n,i&&lc.classList.toggle("dark",Mv.includes(i))}function Dp(){fc.textContent=Pr.sound?"Sound on":"Sound off",fc.setAttribute("aria-pressed",String(Pr.sound))}fc.addEventListener("click",()=>{Pr.sound=!Pr.sound,Ap(),vn.start(),vn.apply(),Dp(),fc.blur()});Dp();var Np=()=>{Ds&&vn.start()};addEventListener("keydown",Np,{capture:!0});addEventListener("pointerdown",Np,{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden?vn.pause():Ds&&vn.resume()});Ir.addEventListener("click",()=>{let i=Is.hidden;Is.hidden=!i,Ir.setAttribute("aria-expanded",String(i)),i&&Up()});$n("menuclose").addEventListener("click",()=>{Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),Ir.focus()});$n("tolamp").addEventListener("click",()=>{Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),Tn==="walking"&&xu("lamppost",{quick:!0})});du.addEventListener("change",()=>{Jn=du.checked,mc=!0,Ap()});function Up(){du.checked=Jn}hu.addEventListener&&hu.addEventListener("change",i=>{mc||(Jn=i.matches),Up()});var Ev=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches;Ip.textContent=Ev?"Left thumb down in the lower left to walk · drag on the right to turn":"Hold ↑ or W to walk · ← → or A D to turn · or drag across the view";var Mp=!1,Sv=()=>{!Mp&&Ds&&(Mp=!0,Ip.classList.add("gone"))};Cf({canvas:nn.domElement,held:Zn,stick:dc,isFree:()=>!0,onCommand:()=>{},onDrag:i=>{hc+=i},onMoved:Sv,blocked:()=>Tn!=="walking"||!Is.hidden,onKey:i=>i.code==="Escape"&&!Is.hidden?(Is.hidden=!0,Ir.setAttribute("aria-expanded","false"),!0):!1}).setMovement("free");var hs=yp({onStatus:()=>{for(let i of Ho.exits)Cn.setLook(i.id,hs.state(i.id));On.setLook(hs.state("tree-door")),Ns.setLook(hs.state("slide"))},onArrive:i=>bv(i)});au({inFrame:window.parent!==window});function pc(i){xe=i;let t=Rp[i]||Xo;Ai.parent!==t&&t.add(Ai),Cn.parts.library.group.visible=i!=="library",Cn.parts.trunk.group.visible=i!=="tunnel",vn.setPlace(i),Ue.ready=!1}function Fp(i){Object.assign(ft,{x:i.x,z:i.z,yaw:i.yaw}),ft.level=xe==="library"?rc(ft.x,ft.z):0,ft.y=ko(ft.x,ft.z)}function ko(i,t){return xe==="library"?rc(i,t,ft.level):xe==="tunnel"?Oo:mu(i,t)}var Ep={lamppost:"#0b1020",wardrobe:"#ffffff","tree-door":"#c98a3e",arch:"#cfe2ee"};function bv(i){if(gu[i]){Ds||(Ds=!0,lu(),Cr.hidden=!1,xc(),requestAnimationFrame(Gp),vn.start()),Vo=null;for(let t in Zn)Zn[t]=!1;xu(i,{quick:!1})}}function Tv(){Cn.parts.wardrobe.setOpen(0),Cn.parts.wardrobe.setBeyond(0),Cn.parts.arch.faceMat.uniforms.boost.value=0,On.setDoor(0),On.setBeyond(0),Ns.setLittleDoor(0),ft.size=1,Ai.scale.setScalar(1),Ai.visible=!0}function xu(i,{quick:t}){let e=gu[i];Tv(),pc(e.place),Fp(e),Ue.ready=!1,Ue.override=null,Rr=null,t||Jn?(bn(Ep[i],1,0),requestAnimationFrame(()=>bn(null,0,450)),Tn="walking",Re=null):(bn(Ep[i],1,0),Tn="arriving",Re={kind:`arrive-${i}`,t:0},i==="wardrobe"&&Cn.parts.wardrobe.setOpen(1),i==="tree-door"&&(On.setDoor(1),On.setBeyond(1)),requestAnimationFrame(()=>bn(null,0,i==="lamppost"?1400:900))),Wo(gc())}function cc(i,t){Tn="passing";for(let e in Zn)Zn[e]=!1;Re={kind:"pass",t:0,to:i,spot:t,swapped:!1},bn("#05070c",1,Jn?200:330),vn.door()}var wv="This doesn't lead anywhere yet.";function Av(i){if(i.kind==="mouth"){cc("tunnel",rp);return}if(i.kind==="door"&&i.id==="slide"){cc("library",jf);return}if(i.kind==="door-out"){cc("forest",tp);return}if(i.kind==="mouth-out"){cc("forest",ap);return}let t=i.id;if(hs.state(t)!=="open"){Lp(wv);return}Cv(t)}var Rv={wardrobe:"#ffffff",arch:"#cfe2ee","tree-door":"#c98a3e",slide:"#1c1209"};function Cv(i){Tn="going";for(let t in Zn)Zn[t]=!1;if(vn.portal(i),Jn){Re={kind:"fade-out",t:0,id:i},bn(Rv[i],1,500);return}Re={kind:i==="slide"?"shrink":`through-${i}`,t:0,id:i,from:{x:ft.x,z:ft.z}}}function zo(i){if(Tn="leaving",Vo=i,Cp=performance.now(),Re=null,vn.ride(null),!hs.leave(i,ft.yaw)){Bp();return}Pp.textContent="On your way…"}function Bp(){let i=Vo;Vo=null,xu(gu[i]?i:"lamppost",{quick:!0}),setTimeout(()=>Lp("The way is blocked."),300)}var Pv=8e3,wi=i=>{let t=Math.min(1,Math.max(0,i));return t*t*(3-2*t)};function Iv(i){if(!Re)return;Re.t+=i;let t=Re,e=t.t,n=Cn.parts.wardrobe,s=Cn.parts.arch;if(t.kind==="pass"){!t.swapped&&e>(Jn?.22:.36)&&(t.swapped=!0,pc(t.to),Fp(t.spot),Rr=null,Ue.ready=!1,Wo(gc()),bn(null,0,Jn?200:360)),e>(Jn?.45:.75)&&(Re=null,Tn="walking");return}if(t.kind==="fade-out"){e>.55&&zo(t.id);return}if(t.kind==="through-wardrobe"){let r=te.wardrobe;n.setOpen(wi(e/1)),n.setBeyond(Math.min(1,e/.9));let o=Math.min(1,Math.max(0,(e-.5)/1.1)),[a,l]=ge(r,-.5+o*1.2,be(r,t.from.x,t.from.z)[1]*(1-o));ft.x=a,ft.z=l,ft.bob+=i*9*(o>0&&o<1?1:0);let[c,h]=ge(r,-2.2+wi(o)*2.3,0),[d,u]=ge(r,2,0);Ue.override={pos:new O(c,1.45,h),look:new O(d,1.2,u)},e>.9&&!t.faded&&(t.faded=!0,bn("#ffffff",1,700)),e>1.7&&zo("wardrobe");return}if(t.kind==="through-arch"){let r=te.arch,o=Math.min(1,e/1.5),[a,l]=ge(r,-.6+o*.7,be(r,t.from.x,t.from.z)[1]*(1-o));ft.x=a,ft.z=l,ft.bob+=i*7,o>.55&&(Ai.visible=!1);let[c,h]=ge(r,-3+wi(o)*2.95,0),[d,u]=ge(r,3,0);Ue.override={pos:new O(c,1.55-o*.2,h),look:new O(d,1.45,u)},s.faceMat.uniforms.boost.value=Math.min(1,e/1.4),e>1.2&&!t.faded&&(t.faded=!0,bn("#cfe2ee",1,700)),e>2&&zo("arch");return}if(t.kind==="through-tree-door"){On.setDoor(wi(e/1.1)),On.setBeyond(Math.min(1,e/1));let r=Cs(t.from.x,t.from.z),o=Math.min(1,Math.max(0,(e-.6)/1)),a=ui(r.s+o*1.4),l=r.w*(1-wi(o));ft.x=a.x+a.rx*l,ft.z=a.z+a.rz*l,ft.bob+=i*8*(o>0&&o<1?1:0),e>.9&&!t.faded&&(t.faded=!0,bn("#c98a3e",1,700)),e>1.8&&zo("tree-door");return}if(t.kind==="shrink"){let r=wi(e/1);if(ft.size=1-r*.82,Ai.scale.setScalar(ft.size),e>1&&Ns.setLittleDoor(wi((e-1)/.45)),e>1.35){let[o,a]=be(te.slide,ft.x,ft.z),l=Math.min(1,(e-1.35)/.5),[c,h]=ge(te.slide,o+(Wt.littleDoor.u-o)*l,a+(Wt.v+.15-a)*l);ft.x=c,ft.z=h,ft.bob+=i*10}e>1.85&&!t.faded&&(t.faded=!0,bn("#1c1209",1,160)),e>2.05&&(Re={kind:"ride",t:0,id:"slide",part:null},ft.size=.18);return}if(t.kind==="ride"){let r=Go.rideAt(e);r.part!==t.part&&(t.part=r.part,r.scene!==xe&&pc(r.scene),Wo("down the slide"),vn.ride(r.part),r.part==="wood"&&bn(null,0,220),r.part==="ice"&&(bn("#e8f0ff",.85,0),requestAnimationFrame(()=>bn(null,0,260)))),ft.x=r.rider.x,ft.z=r.rider.z,ft.y=r.rider.y;let o=r.look.clone().sub(r.rider);ft.yaw=Math.atan2(-o.x,-o.z),Ue.override={pos:r.cam,look:r.look},r.part==="blue"&&r.k>.35&&!t.faded&&(t.faded=!0,bn(ru,1,700)),e>Go.total+.1&&zo("slide");return}if(t.kind==="arrive-wardrobe"){e>.35&&n.setOpen(1-wi((e-.35)/.9)),e>1.3&&(n.setOpen(0),Re=null,Tn="walking");return}if(t.kind==="arrive-tree-door"){e>.3&&(On.setDoor(1-wi((e-.3)/.9)),On.setBeyond(1-wi((e-.3)/.8))),e>1.3&&(On.setDoor(0),On.setBeyond(0),Re=null,Tn="walking");return}if(t.kind==="arrive-arch"){s.faceMat.uniforms.boost.value=Math.max(0,1-e/1.2),e>1.2&&(s.faceMat.uniforms.boost.value=0,Re=null,Tn="walking");return}t.kind.startsWith("arrive-")&&e>.9&&(Re=null,Tn="walking")}function gc(){return xe==="library"?eu(ft.x,ft.z,ft.level):xe==="tunnel"?"inside the great tree":xe==="ride"||Re&&Re.kind==="ride"?"down the slide":Yf(ft.x,ft.z)}function Lv(){if(xe==="tunnel")return"hollow";if(xe==="library")return"wood";let[i,t]=be(te.wardrobe,ft.x,ft.z);if(i>-8*.52&&i<.3&&Math.abs(t)<1.3)return"boards";let e=Math.hypot(ft.x,ft.z);return e>7-.3||Math.abs(e-3.2)<.6?"path":"snow"}function Dv(i){if(Tn!=="walking")return;let t=(Zn.right?1:0)-(Zn.left?1:0)+dc.x;ft.yaw-=Math.max(-1,Math.min(1,t))*Yn.turnSpeed*Math.PI/180*i+(Yn.mouseTurn?hc*.006:0),hc=0;let e=Math.max(-1,Math.min(1,(Zn.forward?1:0)-(Zn.back?1:0)-dc.y)),n=[-Math.sin(ft.yaw),-Math.cos(ft.yaw)];if(e){let s=[ft.x+n[0]*e*Yn.walkSpeed*i,ft.z+n[1]*e*Yn.walkSpeed*i],r=[s[0]-ft.x,s[1]-ft.z],o=ft.level;if(xe==="library"){let c=$f([ft.x,ft.z],r,ft.level);c&&([ft.x,ft.z,ft.level]=c)}else{let[c,h]=xe==="tunnel"?np([ft.x,ft.z],r):qf([ft.x,ft.z],r,yv);ft.x=c,ft.z=h}ft.bob+=i*9*Math.abs(e);let a=Math.floor(ft.bob/Math.PI);if(a!==ft.steps){ft.steps=a;let c=xe==="library"&&eu(ft.x,ft.z,ft.level)==="on the stairs";vn.step({surface:Lv(),creak:c&&Math.random()<.35})}let l=null;e>0&&(xe==="library"?l=Kf(ft.x,ft.z,s[0],s[1],ft.level):xe==="tunnel"?l=ip(ft.x,ft.z,s[0],s[1]):l=jh(s[0],s[1])||jh(ft.x,ft.z)),l&&Rr!==l.id+l.kind?(Rr=l.id+l.kind,Av(l)):l||(Rr=null),xe==="library"&&ft.level-o>.3&&vn.hop()}hc=0,Wo(gc())}function Op(i){if(!(Re&&Re.kind==="ride")){let e=ko(ft.x,ft.z);ft.y+=(e-ft.y)*Math.min(1,i*14),Math.abs(e-ft.y)<.002&&(ft.y=e)}let t=xe==="library"&&Math.abs(ko(ft.x,ft.z)-ft.y)>.05?Math.sin(Math.min(1,Math.abs(ko(ft.x,ft.z)-ft.y)/.45)*Math.PI)*.12:0;Ai.position.set(ft.x,ft.y+t+Math.abs(Math.sin(ft.bob))*.04*ft.size,ft.z),Ai.rotation.y=ft.yaw}function Sp(i,t){let[e,n]=be(te.slide,i,t);return e>pe.front-.4&&e<pe.front+pe.depth+.4&&Math.abs(n)<pe.width/2+.4?!0:Math.hypot(i-ci[0],t-ci[1])<tn.radius+.75}function Hp(i){let t,e;if(Ue.override)t=Ue.override.pos,e=Ue.override.look;else{let s=ft.size,r=new O(-Math.sin(ft.yaw),0,-Math.cos(ft.yaw)),o=new O(-r.z,0,r.x),a=new O(ft.x,ft.y,ft.z);if(t=a.clone().addScaledVector(r,-Yn.distance*s).addScaledVector(o,Yn.shoulder*s),t.y=a.y+Yn.height*s,xe==="forest"){t.y=Math.max(t.y,mu(t.x,t.z)+.4);let[l,c]=be(te.wardrobe,t.x,t.z),[h]=be(te.wardrobe,ft.x,ft.z);if(h>-8&&l>-.35&&Math.abs(c)<3){l=-.35,c=Math.max(-dn.inner,Math.min(dn.inner,c));let[d,u]=ge(te.wardrobe,l,c);t.x=d,t.z=u}if(l>-dn.depth-.4&&l<.2&&Math.abs(c)<dn.half+.4&&(t.y=Math.min(t.y,dn.height-.3)),Sp(t.x,t.z))for(let d=19;d>=1;d--){let u=d/20,f=ft.x+(t.x-ft.x)*u,x=ft.z+(t.z-ft.z)*u;if(!Sp(f,x)){t.x=f,t.z=x;break}}}else if(xe==="library"&&s>.9){let l=ep(t,ft,ft.level);t.set(l.x,l.y,l.z)}else if(xe==="tunnel"){let l=ui(Cs(ft.x,ft.z).s),c=r.x*l.dx+r.z*l.dz>0,h=lp(t,ft,c);t.set(h.x,h.y,h.z)}e=a.clone().addScaledVector(r,Yn.lookAhead*s),e.y=a.y+Yn.lookHeight*s}let n=Ue.ready?1-Math.exp(-(Ue.override?Re&&Re.kind==="ride"?30:5:Yn.follow)*i):1;Ue.pos.lerp(t,n),Ue.look.lerp(e,n),Ue.ready=!0,en.position.copy(Ue.pos),en.lookAt(Ue.look),en.near=ft.size<.5?.01:.05,en.updateProjectionMatrix(),Ls.snowMat.uniforms.centre.value.copy(Ue.pos)}var bp=performance.now(),fu=!1,zp=1/60,Nv=new O(...(()=>{let[i,t]=ge(te.arch,0,0);return[i,1.8,t]})());function kp(i){let t=i/1e3;if(Ls.tick(t),On.tick(t),Ns.tick(t,{fig:xe==="library"?{x:ft.x,z:ft.z,level:ft.level}:null,dt:zp,reduce:Jn}),Cn.shimmerTime.value=t,xe==="ride"){nn.render(Go.scene,en);return}let e=Cn.parts.arch;if(xe==="forest"&&e.faceMat.uniforms.open.value>.5){let n=Nv.clone().sub(en.position),s=new O;en.getWorldDirection(s);let[r]=be(te.arch,en.position.x,en.position.z);n.length()<34&&n.normalize().dot(s)>.2&&r<.2&&e.draw(nn,en,Ls)}nn.render(Xo,en),(xe==="library"||xe==="tunnel")&&(nn.autoClear=!1,nn.clearDepth(),nn.render(Rp[xe],en),nn.autoClear=!0)}function Gp(i){let t=Math.min(.1,(i-bp)/1e3)*(window.__forest.timeScale||1);if(bp=i,zp=t,!fu){Dv(t),Iv(t),Op(t),Hp(t),Tn==="leaving"&&i-Cp>Pv&&Bp();let e=Math.hypot(ft.x,ft.z),[n,s]=be(te.wardrobe,ft.x,ft.z),r=xe==="forest"&&n>-9&&n<.5&&Math.abs(s)<3?Math.min(1,(n+8+1)/4):0,[o,a]=be(te.arch,ft.x,ft.z),l=xe==="forest"&&hs.state("arch")==="open"?Math.max(0,1-Math.hypot(o,a)/9):0;vn.update({camPos:Ue.pos,camFwd:new O().subVectors(Ue.look,Ue.pos).normalize(),outside:xe==="forest"?Math.min(1,Math.max(0,(e-7+1)/5)):0,lane:r,archNear:Math.max(l,Cn.parts.arch.faceMat.uniforms.boost.value),ride:Re&&Re.kind==="ride"?Go.rideAt(Re.t):null}),kp(i)}requestAnimationFrame(Gp)}function xc(){let i=Cr.clientWidth||innerWidth,t=Cr.clientHeight||innerHeight;nn.setSize(i,t),en.aspect=i/t,en.updateProjectionMatrix(),Ls.snowMat.uniforms.scale.value=t*nn.getPixelRatio()}addEventListener("resize",xc);xc();window.__forest={state:()=>({phase:Tn,place:xe,entered:Ds,crowLook:Ns.crow.look,x:ft.x,z:ft.z,y:ft.y,level:ft.level,yaw:ft.yaw,size:ft.size,area:uu,ways:hs.mode,exits:Object.fromEntries(Ho.exits.map(i=>[i.id,hs.state(i.id)])),anim:Re&&Re.kind,part:Re&&Re.part,leftBy:Vo,reduceMotion:Jn,archOpen:Cn.parts.arch.faceMat.uniforms.open.value,wardrobeGlow:Cn.parts.wardrobe.lineMat.opacity,cam:[en.position.x,en.position.z,en.position.y]}),jump(i,t,e,n,s){n&&n!==xe&&pc(n),Object.assign(ft,{x:i,z:t,yaw:e}),ft.level=xe==="library"?s??rc(i,t):0,ft.y=ko(i,t),Ue.ready=!1,Rr=null,Wo(gc())},held:Zn,stick:dc,timeScale:1,snapshot(i,t,e){fu=!0,lu(),Cr.hidden=!1;let n=nn.getPixelRatio();nn.setPixelRatio(1),nn.setSize(i,t,!1),en.aspect=i/t,en.updateProjectionMatrix(),Ls.snowMat.uniforms.scale.value=t,Ai.visible=!!e.figure,Object.assign(ft,{x:e.x,z:e.z,yaw:e.yaw}),Op(1),Ue.override=e.camera?{pos:new O(...e.camera),look:new O(...e.look)}:null,Ue.ready=!1,Hp(1),kp(performance.now());let s=nn.domElement.toDataURL("image/png");return Ai.visible=!0,Ue.override=null,nn.setPixelRatio(n),xc(),fu=!1,Ds||(Cr.hidden=!0,au({inFrame:window.parent!==window})),s}};})();
