(()=>{"use strict";var t,e,r=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},i=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};t=new WeakMap,e=new WeakMap;const s=class{constructor(i,s){if(t.set(this,void 0),e.set(this,void 0),i<=0)throw new RangeError("width must be greater than zero.");if(s<=0)throw new RangeError("height must be greater than zero.");r(this,t,i,"f"),r(this,e,s,"f")}get width(){return i(this,t,"f")}get height(){return i(this,e,"f")}};var o,n=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},a=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};o=new WeakMap;const h=class{constructor(t){if(o.set(this,void 0),t<0||t>255)throw new RangeError("value must be in the range 0-255.");n(this,o,t,"f")}get value(){return a(this,o,"f")}};var f,w,c=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},l=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};f=new WeakMap,w=new WeakMap;const u=class{constructor(t,e){f.set(this,void 0),w.set(this,void 0),c(this,f,t,"f"),c(this,w,e,"f")}get x(){return l(this,f,"f")}get y(){return l(this,w,"f")}move(t){c(this,f,l(this,f,"f")+t.x,"f"),c(this,w,l(this,w,"f")+t.y,"f")}};var d,m,v,p=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},y=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};d=new WeakMap,m=new WeakMap,v=new WeakMap;const g=class{constructor(t,e,r){d.set(this,void 0),m.set(this,void 0),v.set(this,void 0),p(this,d,t,"f"),p(this,m,e,"f"),p(this,v,r,"f")}toString(){return`rgb(${y(this,d,"f").value}, ${y(this,m,"f").value}, ${y(this,v,"f").value})`}};var b,E,T=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},k=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};b=new WeakMap,E=new WeakMap;const M=class{constructor(t,e){b.set(this,void 0),E.set(this,void 0),T(this,b,t,"f"),T(this,E,e,"f")}get x(){return k(this,b,"f")}get y(){return k(this,E,"f")}bounceBackX(){T(this,b,-k(this,b,"f"),"f")}bounceBackY(){T(this,E,-k(this,E,"f"),"f")}};var W,P,x,C,j,R,S,B,A,L,z,I,D,H,U,$=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},q=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};P=new WeakMap,x=new WeakMap,C=new WeakMap,j=new WeakMap,R=new WeakMap,S=new WeakMap,W=new WeakSet,B=function(){return q(this,x,"f").y-q(this,R,"f")==0},A=function(){return q(this,x,"f").y+q(this,R,"f")===q(this,P,"f").height},L=function(){return q(this,x,"f").x-q(this,R,"f")==0},z=function(){return q(this,x,"f").x+q(this,R,"f")===q(this,P,"f").width},I=function(){return q(this,x,"f").y-q(this,R,"f")-q(this,C,"f")<=0},D=function(){return q(this,x,"f").y+q(this,R,"f")+q(this,C,"f")>=q(this,P,"f").height},H=function(){return q(this,x,"f").x-q(this,R,"f")-q(this,C,"f")<=0},U=function(){return q(this,x,"f").x+q(this,R,"f")+q(this,C,"f")>=q(this,P,"f").width};const O=class{constructor(t){W.add(this),P.set(this,void 0),x.set(this,void 0),C.set(this,20),j.set(this,{up:new M(0,-q(this,C,"f")),down:new M(0,q(this,C,"f")),left:new M(-q(this,C,"f"),0),right:new M(q(this,C,"f"),0)}),R.set(this,10),S.set(this,new g(new h(254),new h(254),new h(254))),$(this,P,t,"f"),$(this,x,new u(Math.floor(t.width/2),Math.floor(t.height/2)),"f")}get x(){return q(this,x,"f").x}get y(){return q(this,x,"f").y}get radius(){return q(this,R,"f")}get color(){return q(this,S,"f").toString()}moveToUp(){if(!q(this,W,"m",B).call(this))if(q(this,W,"m",I).call(this)){const t=-q(this,x,"f").y+this.radius;q(this,x,"f").move(new M(0,t))}else q(this,x,"f").move(q(this,j,"f").up)}moveToDown(){if(!q(this,W,"m",A).call(this))if(q(this,W,"m",D).call(this)){const t=q(this,P,"f").height-(q(this,x,"f").y+q(this,R,"f"));q(this,x,"f").move(new M(0,t))}else q(this,x,"f").move(q(this,j,"f").down)}moveToLeft(){if(!q(this,W,"m",L).call(this))if(q(this,W,"m",H).call(this)){const t=-q(this,x,"f").x+q(this,R,"f");q(this,x,"f").move(new M(t,0))}else q(this,x,"f").move(q(this,j,"f").left)}moveToRight(){if(!q(this,W,"m",z).call(this))if(q(this,W,"m",U).call(this)){const t=q(this,P,"f").width-(q(this,x,"f").x+q(this,R,"f"));q(this,x,"f").move(new M(t,0))}else q(this,x,"f").move(q(this,j,"f").right)}};var X,Y=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};X=new WeakMap;const F=class{constructor(){X.set(this,new Map)}getAll(){return[...Y(this,X,"f").values()]}add(t,e){Y(this,X,"f").set(t,e)}remove(t){if(!Y(this,X,"f").has(t))throw new RangeError("ballId must be in the keys.");Y(this,X,"f").delete(t)}length(){return Y(this,X,"f").size}};var N,G,J,K,Q,V,Z,_,tt,et=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},rt=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};G=new WeakMap,J=new WeakMap,K=new WeakMap,Q=new WeakMap,V=new WeakMap,Z=new WeakMap,N=new WeakSet,_=function(){return rt(this,J,"f").x-rt(this,Q,"f")<=0||rt(this,J,"f").x+rt(this,Q,"f")>=rt(this,G,"f").width},tt=function(){return rt(this,J,"f").y-rt(this,Q,"f")<=0||rt(this,J,"f").y+rt(this,Q,"f")>=rt(this,G,"f").height};const it=class{constructor(t,e,r,i,s,o){if(N.add(this),G.set(this,void 0),J.set(this,void 0),K.set(this,void 0),Q.set(this,void 0),V.set(this,void 0),Z.set(this,void 0),i<=0)throw new RangeError("radius must be greater than zero.");et(this,G,t,"f"),et(this,J,e,"f"),et(this,K,r,"f"),et(this,Q,i,"f"),et(this,V,s,"f"),et(this,Z,o,"f")}get x(){return rt(this,J,"f").x}get y(){return rt(this,J,"f").y}get radius(){return rt(this,Q,"f")}get color(){return rt(this,V,"f").toString()}get id(){return rt(this,Z,"f")}move(){rt(this,N,"m",_).call(this)&&rt(this,K,"f").bounceBackX(),rt(this,N,"m",tt).call(this)&&rt(this,K,"f").bounceBackY(),rt(this,J,"f").move(rt(this,K,"f"))}},st=(t,e)=>{if(t>=e)throw new RangeError("min must be less than max.");return Math.floor(Math.random()*(e-t+1))+t},ot=(t,e)=>{const{width:r,height:i}=t,[s,o]=[-7,7],n=st(10,20);return new it(t,new u(st(0+n,r-n),st(0+n,i-n)),new M(st(s,o),st(s,o)),n,(()=>{const t=new h(st(65,254)),e=new h(st(65,254)),r=new h(st(65,254));return new g(t,e,r)})(),e)};var nt,at=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},ht=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};nt=new WeakMap;const ft=class{constructor(t){nt.set(this,void 0),at(this,nt,t,"f")}render(t){ht(this,nt,"f").textContent=t.toString()}};var wt,ct,lt,ut,dt,mt,vt,pt,yt,gt,bt,Et=function(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r},Tt=function(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)};ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,dt=new WeakMap,mt=new WeakMap,wt=new WeakSet,vt=function(){Tt(this,ct,"f").fillStyle="rgba(0, 0, 0, 0.25)",Tt(this,ct,"f").fillRect(0,0,Tt(this,lt,"f").width,Tt(this,lt,"f").height)},pt=function(){Tt(this,ut,"f").getAll().forEach((t=>{Tt(this,wt,"m",yt).call(this,t)&&(Tt(this,ut,"f").remove(t.id),Tt(this,mt,"f").render(Tt(this,ut,"f").length())),Tt(this,wt,"m",gt).call(this,t),t.move()}))},yt=function(t){const e=Tt(this,dt,"f").x-t.x,r=Tt(this,dt,"f").y-t.y;return Math.sqrt(e**2+r**2)<Tt(this,dt,"f").radius+t.radius},gt=function(t){Tt(this,ct,"f").beginPath(),Tt(this,ct,"f").fillStyle=t.color,Tt(this,ct,"f").arc(t.x,t.y,t.radius,0,2*Math.PI),Tt(this,ct,"f").fill()},bt=function(){Tt(this,ct,"f").beginPath(),Tt(this,ct,"f").lineWidth=3,Tt(this,ct,"f").strokeStyle=Tt(this,dt,"f").color,Tt(this,ct,"f").arc(Tt(this,dt,"f").x,Tt(this,dt,"f").y,Tt(this,dt,"f").radius,0,2*Math.PI),Tt(this,ct,"f").stroke()};(new class{constructor(){wt.add(this),ct.set(this,void 0),lt.set(this,void 0),ut.set(this,void 0),dt.set(this,void 0),mt.set(this,void 0);const t=document.getElementById("js-billiards-table"),e=document.getElementById("js-number-of-balls-left");if(null===t||void 0===t.height)throw new TypeError("canvasBilliardsTable must be HTMLCanvasElement.");if(null===e||!(t=>void 0!==t.textContent)(e))throw new TypeError("spanNumberOfBalls must be HTMLSpanElement.");const{innerWidth:r,innerHeight:i}=window;t.width=r,t.height=i;const o=t.getContext("2d");if(null===o)throw new TypeError("ctx must be CanvasRenderingContext2D");Et(this,ct,o,"f"),Et(this,lt,new s(r,i),"f"),Et(this,ut,((t,e)=>{if(e<=0)throw new RangeError("numberOfBalls must be greater than zero.");const r=new F;for(let i=0;i<e;i+=1){const e=ot(t,i);r.add(i,e)}return r})(Tt(this,lt,"f"),25),"f"),Et(this,dt,new O(Tt(this,lt,"f")),"f"),Et(this,mt,new ft(e),"f")}start(){const t=()=>{Tt(this,wt,"m",vt).call(this),Tt(this,wt,"m",pt).call(this),Tt(this,wt,"m",bt).call(this),requestAnimationFrame(t)};window.addEventListener("keydown",(t=>{switch(t.key){case"w":case"ArrowUp":Tt(this,dt,"f").moveToUp();break;case"a":case"ArrowLeft":Tt(this,dt,"f").moveToLeft();break;case"s":case"ArrowDown":Tt(this,dt,"f").moveToDown();break;case"d":case"ArrowRight":Tt(this,dt,"f").moveToRight();break;default:return}Tt(this,wt,"m",bt).call(this)})),Tt(this,mt,"f").render(Tt(this,ut,"f").length()),t()}}).start()})();