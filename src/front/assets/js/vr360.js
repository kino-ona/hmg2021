/* libpannellum.js */
window.libpannellum=(function(f,g,a){function c(H){var r=g.createElement("canvas");r.style.width=r.style.height="100%";H.appendChild(r);var k,s,t,C;var L;var B;var T;var D;var p,O,z;var K,m,P,S;var M;this.init=function(Z,af,X,ag,ah,Y,ab,ar){if(af===a){af="equirectangular"}if(af!="equirectangular"&&af!="cubemap"&&af!="multires"){console.log("Error: invalid image type specified!");throw {type:"config error"}}O=af;p=Z;z=X;M=ar||{};if(k){if(t){s.detachShader(k,t);s.deleteShader(t)}if(C){s.detachShader(k,C);s.deleteShader(C)}s.bindBuffer(s.ARRAY_BUFFER,null);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,null);if(k.texture){s.deleteTexture(k.texture)}if(k.nodeCache){for(var ao=0;ao<k.nodeCache.length;ao++){s.deleteTexture(k.nodeCache[ao].texture)}}s.deleteProgram(k);k=a}D=a;var ai;if(!(O=="cubemap"&&(p[0].width&(p[0].width-1))!==0&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./)))){if(!s){s=r.getContext("experimental-webgl",{alpha:false,depth:false})}if(s&&s.getError()==1286){V()}}if(!s&&((O=="multires"&&p.hasOwnProperty("fallbackPath"))||O=="cubemap")&&("WebkitAppearance" in g.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||navigator.appVersion.indexOf("MSIE 10")!==-1)){if(B){H.removeChild(B)}B=g.createElement("div");B.className="pnlm-world";var aj;if(p.basePath){aj=p.basePath+p.fallbackPath}else{aj=p.fallbackPath}var aq=["f","r","b","l","u","d"];var an=0;var W=function(){var av=g.createElement("canvas");av.className="pnlm-face pnlm-"+aq[this.side]+"face";B.appendChild(av);var ax=av.getContext("2d");av.style.width=this.width+4+"px";av.style.height=this.height+4+"px";av.width=this.width+4;av.height=this.height+4;ax.drawImage(this,2,2);var az=ax.getImageData(0,0,av.width,av.height);var ay=az.data;var aw;var au;for(aw=2;aw<av.width-2;aw++){for(au=0;au<4;au++){ay[(aw+av.width)*4+au]=ay[(aw+av.width*2)*4+au];ay[(aw+av.width*(av.height-2))*4+au]=ay[(aw+av.width*(av.height-3))*4+au]}}for(aw=2;aw<av.height-2;aw++){for(au=0;au<4;au++){ay[(aw*av.width+1)*4+au]=ay[(aw*av.width+2)*4+au];ay[((aw+1)*av.width-2)*4+au]=ay[((aw+1)*av.width-3)*4+au]}}for(au=0;au<4;au++){ay[(av.width+1)*4+au]=ay[(av.width*2+2)*4+au];ay[(av.width*2-2)*4+au]=ay[(av.width*3-3)*4+au];ay[(av.width*(av.height-2)+1)*4+au]=ay[(av.width*(av.height-3)+2)*4+au];ay[(av.width*(av.height-1)-2)*4+au]=ay[(av.width*(av.height-2)-3)*4+au]}for(aw=1;aw<av.width-1;aw++){for(au=0;au<4;au++){ay[aw*4+au]=ay[(aw+av.width)*4+au];ay[(aw+av.width*(av.height-1))*4+au]=ay[(aw+av.width*(av.height-2))*4+au]}}for(aw=1;aw<av.height-1;aw++){for(au=0;au<4;au++){ay[(aw*av.width)*4+au]=ay[(aw*av.width+1)*4+au];ay[((aw+1)*av.width-1)*4+au]=ay[((aw+1)*av.width-2)*4+au]}}for(au=0;au<4;au++){ay[au]=ay[(av.width+1)*4+au];ay[(av.width-1)*4+au]=ay[(av.width*2-2)*4+au];ay[(av.width*(av.height-1))*4+au]=ay[(av.width*(av.height-2)+1)*4+au];ay[(av.width*av.height-1)*4+au]=ay[(av.width*(av.height-1)-2)*4+au]}ax.putImageData(az,0,0);an++;if(an==6){L=this.width;H.appendChild(B);ab()}};for(ai=0;ai<6;ai++){var al=new Image();al.crossOrigin=M.crossOrigin?M.crossOrigin:"anonymous";al.side=ai;al.onload=W;if(O=="multires"){al.src=encodeURI(aj.replace("%s",aq[ai])+"."+p.extension)}else{al.src=encodeURI(p[ai].src)}}return}else{if(!s){console.log("Error: no WebGL support detected!");throw {type:"no webgl"}}}if(p.basePath){p.fullpath=p.basePath+p.path}else{p.fullpath=p.path}p.invTileResolution=1/p.tileResolution;var ac=y();T=[];for(ai=0;ai<6;ai++){T[ai]=ac.slice(ai*12,ai*12+12);ac=y()}var ak,ap;if(O=="equirectangular"){ak=Math.max(p.width,p.height);ap=s.getParameter(s.MAX_TEXTURE_SIZE);if(ak>ap){console.log("Error: The image is too big; it's "+ak+"px wide, but this device's maximum supported width is "+ap+"px.");throw {type:"webgl size error",width:ak,maxWidth:ap}}}else{if(O=="cubemap"){ak=p[0].width;ap=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE);if(ak>ap){console.log("Error: The cube face image is too big; it's "+ak+"px wide, but this device's maximum supported width is "+ap+"px.");throw {type:"webgl size error",width:ak,maxWidth:ap}}}}if(ar!==a&&(ar.horizonPitch!==a||ar.horizonRoll!==a)){D=[ar.horizonPitch==a?0:ar.horizonPitch,ar.horizonRoll==a?0:ar.horizonRoll]}var ad=s.TEXTURE_2D;s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight);t=s.createShader(s.VERTEX_SHADER);var ae=i;if(O=="multires"){ae=e}s.shaderSource(t,ae);s.compileShader(t);C=s.createShader(s.FRAGMENT_SHADER);var at=h;if(O=="cubemap"){ad=s.TEXTURE_CUBE_MAP;at=j}else{if(O=="multires"){at=b}}s.shaderSource(C,at);s.compileShader(C);k=s.createProgram();s.attachShader(k,t);s.attachShader(k,C);s.linkProgram(k);if(!s.getShaderParameter(t,s.COMPILE_STATUS)){console.log(s.getShaderInfoLog(t))}if(!s.getShaderParameter(C,s.COMPILE_STATUS)){console.log(s.getShaderInfoLog(C))}if(!s.getProgramParameter(k,s.LINK_STATUS)){console.log(s.getProgramInfoLog(k))}s.useProgram(k);k.drawInProgress=false;k.texCoordLocation=s.getAttribLocation(k,"a_texCoord");s.enableVertexAttribArray(k.texCoordLocation);if(O!="multires"){if(!K){K=s.createBuffer()}s.bindBuffer(s.ARRAY_BUFFER,K);s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),s.STATIC_DRAW);s.vertexAttribPointer(k.texCoordLocation,2,s.FLOAT,false,0,0);k.aspectRatio=s.getUniformLocation(k,"u_aspectRatio");s.uniform1f(k.aspectRatio,s.drawingBufferWidth/s.drawingBufferHeight);k.psi=s.getUniformLocation(k,"u_psi");k.theta=s.getUniformLocation(k,"u_theta");k.f=s.getUniformLocation(k,"u_f");k.h=s.getUniformLocation(k,"u_h");k.v=s.getUniformLocation(k,"u_v");k.vo=s.getUniformLocation(k,"u_vo");k.rot=s.getUniformLocation(k,"u_rot");s.uniform1f(k.h,ag/(Math.PI*2));s.uniform1f(k.v,ah/Math.PI);s.uniform1f(k.vo,Y/Math.PI*2);if(O=="equirectangular"){k.backgroundColor=s.getUniformLocation(k,"u_backgroundColor");var am=ar.backgroundColor?ar.backgroundColor:[0,0,0];s.uniform4fv(k.backgroundColor,am.concat([1]))}k.texture=s.createTexture();s.bindTexture(ad,k.texture);if(O=="cubemap"){s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[1]);s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_X,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[3]);s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[4]);s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[5]);s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[0]);s.texImage2D(s.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p[2])}else{s.texImage2D(ad,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p)}s.texParameteri(ad,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);s.texParameteri(ad,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);s.texParameteri(ad,s.TEXTURE_MIN_FILTER,s.LINEAR);s.texParameteri(ad,s.TEXTURE_MAG_FILTER,s.LINEAR)}else{k.vertPosLocation=s.getAttribLocation(k,"a_vertCoord");s.enableVertexAttribArray(k.vertPosLocation);if(!m){m=s.createBuffer()}if(!P){P=s.createBuffer()}if(!S){S=s.createBuffer()}s.bindBuffer(s.ARRAY_BUFFER,P);s.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),s.STATIC_DRAW);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,S);s.bufferData(s.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),s.STATIC_DRAW);k.perspUniform=s.getUniformLocation(k,"u_perspMatrix");k.cubeUniform=s.getUniformLocation(k,"u_cubeMatrix");k.level=-1;k.currentNodes=[];k.nodeCache=[];k.nodeCacheTimestamp=0}var aa=s.getError();if(aa!==0){console.log("Error: Something went wrong with WebGL!",aa);throw {type:"webgl error"}}ab()};this.destroy=function(){if(H!==a){if(r!==a&&H.contains(r)){H.removeChild(r)}if(B!==a&&H.contains(B)){H.removeChild(B)}}if(s){var W=s.getExtension("WEBGL_lose_context");if(W){W.loseContext()}}};this.resize=function(){var W=f.devicePixelRatio||1;r.width=r.clientWidth*W;r.height=r.clientHeight*W;if(s){if(s.getError()==1286){V()}s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight);if(O!="multires"){s.uniform1f(k.aspectRatio,r.clientWidth/r.clientHeight)}}};this.resize();this.setPose=function(W,X){D=[W,X]};this.render=function(ak,an,ab,az){var aA,av,at,ay=0;if(az===a){az={}}if(az.roll){ay=az.roll}if(D!==a){var ac=D[0],ah=D[1];var Y=ak,Z=an,ao=Math.cos(ah)*Math.sin(ak)*Math.sin(ac)+Math.cos(ak)*(Math.cos(ac)*Math.cos(an)+Math.sin(ah)*Math.sin(ac)*Math.sin(an)),am=-Math.sin(ak)*Math.sin(ah)+Math.cos(ak)*Math.cos(ah)*Math.sin(an),aj=Math.cos(ah)*Math.cos(ac)*Math.sin(ak)+Math.cos(ak)*(-Math.cos(an)*Math.sin(ac)+Math.cos(ac)*Math.sin(ah)*Math.sin(an));ak=Math.asin(Math.max(Math.min(aj,1),-1));an=Math.atan2(am,ao);var ar=[Math.cos(Y)*(Math.sin(ah)*Math.sin(ac)*Math.cos(Z)-Math.cos(ac)*Math.sin(Z)),Math.cos(Y)*Math.cos(ah)*Math.cos(Z),Math.cos(Y)*(Math.cos(ac)*Math.sin(ah)*Math.cos(Z)+Math.sin(Z)*Math.sin(ac))],ap=[-Math.cos(ak)*Math.sin(an),Math.cos(ak)*Math.cos(an)];var ad=Math.acos(Math.max(Math.min((ar[0]*ap[0]+ar[1]*ap[1])/(Math.sqrt(ar[0]*ar[0]+ar[1]*ar[1]+ar[2]*ar[2])*Math.sqrt(ap[0]*ap[0]+ap[1]*ap[1])),1),-1));if(ar[2]<0){ad=2*Math.PI-ad}ay+=ad}if(!s&&(O=="multires"||O=="cubemap")){at=L/2;var al={f:"translate3d(-"+(at+2)+"px, -"+(at+2)+"px, -"+at+"px)",b:"translate3d("+(at+2)+"px, -"+(at+2)+"px, "+at+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(at+2)+"px, -"+at+"px, "+(at+2)+"px) rotateX(270deg)",d:"translate3d(-"+(at+2)+"px, "+at+"px, -"+(at+2)+"px) rotateX(90deg)",l:"translate3d(-"+at+"px, -"+(at+2)+"px, "+(at+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+at+"px, -"+(at+2)+"px, -"+(at+2)+"px) rotateY(270deg)"};aA=1/Math.tan(ab/2);var X=aA*s.drawingBufferWidth/2+"px";var aq="perspective("+X+") translateZ("+X+") rotateX("+ak+"rad) rotateY("+an+"rad) ";var aa=Object.keys(al);for(av=0;av<6;av++){var ai=B.querySelector(".pnlm-"+aa[av]+"face").style;ai.webkitTransform=aq+al[aa[av]];ai.transform=aq+al[aa[av]]}return}if(O!="multires"){var ag=2*Math.atan(Math.tan(ab*0.5)/(s.drawingBufferWidth/s.drawingBufferHeight));aA=1/Math.tan(ag*0.5);s.uniform1f(k.psi,an);s.uniform1f(k.theta,ak);s.uniform1f(k.rot,ay);s.uniform1f(k.f,aA);if(z===true){if(O=="equirectangular"){s.bindTexture(s.TEXTURE_2D,k.texture);s.texImage2D(s.TEXTURE_2D,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,p)}}s.drawArrays(s.TRIANGLES,0,6)}else{var W=o(ab,s.drawingBufferWidth/s.drawingBufferHeight,0.1,100);q(ab);var au=l();au=J(au,-ay,"z");au=J(au,-ak,"x");au=J(au,an,"y");au=G(au);s.uniformMatrix4fv(k.perspUniform,false,new Float32Array(u(W)));s.uniformMatrix4fv(k.cubeUniform,false,new Float32Array(u(au)));var af=Q(W,au);k.nodeCache.sort(N);if(k.nodeCache.length>200&&k.nodeCache.length>k.currentNodes.length+50){var aw=k.nodeCache.splice(200,k.nodeCache.length-200);for(var av=0;av<aw.length;av++){s.deleteTexture(aw[av].texture)}}k.currentNodes=[];var ax=["f","b","u","d","l","r"];for(at=0;at<6;at++){var ae=new n(T[at],ax[at],1,0,0,p.fullpath);A(af,ae,ak,an,ab)}k.currentNodes.sort(U);for(av=0;av<k.currentNodes.length;av++){if(!k.currentNodes[av].texture){setTimeout(w,0,k.currentNodes[av]);break}}F()}if(az.returnImage!==a){return r.toDataURL("image/png")}};this.isLoading=function(){if(s&&O=="multires"){for(var W=0;W<k.currentNodes.length;W++){if(!k.currentNodes[W].textureLoaded){return true}}}return false};this.getCanvas=function(){return r};function N(X,W){if(X.level==1&&W.level!=1){return -1}if(W.level==1&&X.level!=1){return 1}return W.timestamp-X.timestamp}function U(X,W){if(X.level!=W.level){return X.level-W.level}return X.diff-W.diff}function F(){if(!k.drawInProgress){k.drawInProgress=true;for(var W=0;W<k.currentNodes.length;W++){if(k.currentNodes[W].textureLoaded){s.bindBuffer(s.ARRAY_BUFFER,m);s.bufferData(s.ARRAY_BUFFER,new Float32Array(k.currentNodes[W].vertices),s.STATIC_DRAW);s.vertexAttribPointer(k.vertPosLocation,3,s.FLOAT,false,0,0);s.bindBuffer(s.ARRAY_BUFFER,P);s.vertexAttribPointer(k.texCoordLocation,2,s.FLOAT,false,0,0);s.bindTexture(s.TEXTURE_2D,k.currentNodes[W].texture);s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0)}}k.drawInProgress=false}}function n(X,Y,ab,W,aa,Z){this.vertices=X;this.side=Y;this.level=ab;this.x=W;this.y=aa;this.path=Z.replace("%s",Y).replace("%l",ab).replace("%x",W).replace("%y",aa)}function A(ac,au,af,ah,Y){if(v(ac,au.vertices)){var ak=au.vertices;var ai=ak[0]+ak[3]+ak[6]+ak[9];var ag=ak[1]+ak[4]+ak[7]+ak[10];var ae=ak[2]+ak[5]+ak[8]+ak[11];var al=Math.sqrt(ai*ai+ag*ag+ae*ae);var ad=Math.asin(ae/al);var W=Math.atan2(ag,ai);var Z=W-ah;Z+=(Z>Math.PI)?-2*Math.PI:(Z<-Math.PI)?2*Math.PI:0;Z=Math.abs(Z);au.diff=Math.acos(Math.sin(af)*Math.sin(ad)+Math.cos(af)*Math.cos(ad)*Math.cos(Z));var an=false;for(var aw=0;aw<k.nodeCache.length;aw++){if(k.nodeCache[aw].path==au.path){an=true;k.nodeCache[aw].timestamp=k.nodeCacheTimestamp++;k.nodeCache[aw].diff=au.diff;k.currentNodes.push(k.nodeCache[aw]);break}}if(!an){au.timestamp=k.nodeCacheTimestamp++;k.currentNodes.push(au);k.nodeCache.push(au)}if(au.level<k.level){var aB=p.cubeResolution*Math.pow(2,au.level-p.maxLevel);var aA=Math.ceil(aB*p.invTileResolution)-1;var aq=aB%p.tileResolution*2;var X=(aB*2)%p.tileResolution;if(X===0){X=p.tileResolution}if(aq===0){aq=p.tileResolution*2}var az=0.5;if(au.x==aA||au.y==aA){az=1-p.tileResolution/(p.tileResolution+X)}var ay=1-az;var aa=[];var aj,ab;var at=az,ap=az,am=az,av=ay,ar=ay,ao=ay;if(X<p.tileResolution){if(au.x==aA&&au.y!=aA){ap=0.5;ar=0.5;if(au.side=="d"||au.side=="u"){am=0.5;ao=0.5}}else{if(au.x!=aA&&au.y==aA){at=0.5;av=0.5;if(au.side=="l"||au.side=="r"){am=0.5;ao=0.5}}}}if(aq<=p.tileResolution){if(au.x==aA){at=0;av=1;if(au.side=="l"||au.side=="r"){am=0;ao=1}}if(au.y==aA){ap=0;ar=1;if(au.side=="d"||au.side=="u"){am=0;ao=1}}}aj=[ak[0],ak[1],ak[2],ak[0]*at+ak[3]*av,ak[1]*az+ak[4]*ay,ak[2]*am+ak[5]*ao,ak[0]*at+ak[6]*av,ak[1]*ap+ak[7]*ar,ak[2]*am+ak[8]*ao,ak[0]*az+ak[9]*ay,ak[1]*ap+ak[10]*ar,ak[2]*am+ak[11]*ao];ab=new n(aj,au.side,au.level+1,au.x*2,au.y*2,p.fullpath);aa.push(ab);if(!(au.x==aA&&aq<=p.tileResolution)){aj=[ak[0]*at+ak[3]*av,ak[1]*az+ak[4]*ay,ak[2]*am+ak[5]*ao,ak[3],ak[4],ak[5],ak[3]*az+ak[6]*ay,ak[4]*ap+ak[7]*ar,ak[5]*am+ak[8]*ao,ak[0]*at+ak[6]*av,ak[1]*ap+ak[7]*ar,ak[2]*am+ak[8]*ao];ab=new n(aj,au.side,au.level+1,au.x*2+1,au.y*2,p.fullpath);aa.push(ab)}if(!(au.x==aA&&aq<=p.tileResolution)&&!(au.y==aA&&aq<=p.tileResolution)){aj=[ak[0]*at+ak[6]*av,ak[1]*ap+ak[7]*ar,ak[2]*am+ak[8]*ao,ak[3]*az+ak[6]*ay,ak[4]*ap+ak[7]*ar,ak[5]*am+ak[8]*ao,ak[6],ak[7],ak[8],ak[9]*at+ak[6]*av,ak[10]*az+ak[7]*ay,ak[11]*am+ak[8]*ao];ab=new n(aj,au.side,au.level+1,au.x*2+1,au.y*2+1,p.fullpath);aa.push(ab)}if(!(au.y==aA&&aq<=p.tileResolution)){aj=[ak[0]*az+ak[9]*ay,ak[1]*ap+ak[10]*ar,ak[2]*am+ak[11]*ao,ak[0]*at+ak[6]*av,ak[1]*ap+ak[7]*ar,ak[2]*am+ak[8]*ao,ak[9]*at+ak[6]*av,ak[10]*az+ak[7]*ay,ak[11]*am+ak[8]*ao,ak[9],ak[10],ak[11]];ab=new n(aj,au.side,au.level+1,au.x*2,au.y*2+1,p.fullpath);aa.push(ab)}for(var ax=0;ax<aa.length;ax++){A(ac,aa[ax],af,ah,Y)}}}}function y(){return[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1]}function l(){return[1,0,0,0,1,0,0,0,1]}function J(W,Z,Y){var X=Math.sin(Z);var aa=Math.cos(Z);if(Y=="x"){return[W[0],aa*W[1]+X*W[2],aa*W[2]-X*W[1],W[3],aa*W[4]+X*W[5],aa*W[5]-X*W[4],W[6],aa*W[7]+X*W[8],aa*W[8]-X*W[7]]}if(Y=="y"){return[aa*W[0]-X*W[2],W[1],aa*W[2]+X*W[0],aa*W[3]-X*W[5],W[4],aa*W[5]+X*W[3],aa*W[6]-X*W[8],W[7],aa*W[8]+X*W[6]]}if(Y=="z"){return[aa*W[0]+X*W[1],aa*W[1]-X*W[0],W[2],aa*W[3]+X*W[4],aa*W[4]-X*W[3],W[5],aa*W[6]+X*W[7],aa*W[7]-X*W[6],W[8]]}}function G(W){return[W[0],W[1],W[2],0,W[3],W[4],W[5],0,W[6],W[7],W[8],0,0,0,0,1]}function u(W){return[W[0],W[4],W[8],W[12],W[1],W[5],W[9],W[13],W[2],W[6],W[10],W[14],W[3],W[7],W[11],W[15]]}function o(ab,Y,W,aa){var X=2*Math.atan(Math.tan(ab/2)*s.drawingBufferHeight/s.drawingBufferWidth);var Z=1/Math.tan(X/2);return[Z/Y,0,0,0,0,Z,0,0,0,0,(aa+W)/(W-aa),(2*aa*W)/(W-aa),0,0,-1,0]}function E(X,W){s.bindTexture(s.TEXTURE_2D,W);s.texImage2D(s.TEXTURE_2D,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,X);s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR);s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR);s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);s.bindTexture(s.TEXTURE_2D,null)}var I=(function(){var Z=4;var Y={};var ab=[];var X;function W(){var ae=this;this.texture=this.callback=null;this.image=new Image();this.image.crossOrigin=X?X:"anonymous";this.image.addEventListener("load",function(){E(ae.image,ae.texture);ae.callback(ae.texture);ad(ae)})}W.prototype.loadTexture=function(af,ae,ag){this.texture=ae;this.callback=ag;this.image.src=af};function ac(af,ae,ag){this.src=af;this.texture=ae;this.callback=ag}function ad(ae){if(ab.length){var af=ab.shift();ae.loadTexture(af.src,af.texture,af.callback)}else{Y[Z++]=ae}}for(var aa=0;aa<Z;aa++){Y[aa]=new W()}return function(ag,ah,af){X=af;var ae=s.createTexture();if(Z){Y[--Z].loadTexture(ag,ae,ah)}else{ab.push(new ac(ag,ae,ah))}return ae}})();function w(W){if(!W.textureLoad){W.textureLoad=true;I(encodeURI(W.path+"."+p.extension),function(X){W.texture=X;W.textureLoaded=true},M.crossOrigin)}}function q(X){var W=1;while(W<p.maxLevel&&s.drawingBufferWidth>p.tileResolution*Math.pow(2,W-1)*Math.tan(X/2)*0.707){W++}k.level=W}function Q(X,W){return[X[0]*W[0],X[0]*W[1],X[0]*W[2],0,X[5]*W[4],X[5]*W[5],X[5]*W[6],0,X[10]*W[8],X[10]*W[9],X[10]*W[10],X[11],-W[8],-W[9],-W[10],0]}function R(W,X){return[W[0]*X[0]+W[1]*X[1]+W[2]*X[2],W[4]*X[0]+W[5]*X[1]+W[6]*X[2],W[11]+W[8]*X[0]+W[9]*X[1]+W[10]*X[2],1/(W[12]*X[0]+W[13]*X[1]+W[14]*X[2])]}function x(W,aa){var Z=R(W,aa);var ac=Z[0]*Z[3];var Y=Z[1]*Z[3];var X=Z[2]*Z[3];var ab=[0,0,0];if(ac<-1){ab[0]=-1}if(ac>1){ab[0]=1}if(Y<-1){ab[1]=-1}if(Y>1){ab[1]=1}if(X<-1||X>1){ab[2]=1}return ab}function v(aa,ae){var Z=x(aa,ae.slice(0,3));var Y=x(aa,ae.slice(3,6));var X=x(aa,ae.slice(6,9));var W=x(aa,ae.slice(9,12));var ad=Z[0]+Y[0]+X[0]+W[0];if(ad==-4||ad==4){return false}var ac=Z[1]+Y[1]+X[1]+W[1];if(ac==-4||ac==4){return false}var ab=Z[2]+Y[2]+X[2]+W[2];return ab!=4}function V(){console.log("Reducing canvas size due to error 1286!");r.width=Math.round(r.width/2);r.height=Math.round(r.height/2)}}var i=["attribute vec2 a_texCoord;","varying vec2 v_texCoord;","void main() {","gl_Position = vec4(a_texCoord, 0.0, 1.0);","v_texCoord = a_texCoord;","}"].join("");var e=["attribute vec3 a_vertCoord;","attribute vec2 a_texCoord;","uniform mat4 u_cubeMatrix;","uniform mat4 u_perspMatrix;","varying mediump vec2 v_texCoord;","void main(void) {","gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);","v_texCoord = a_texCoord;","}"].join("");var d=["precision mediump float;","uniform float u_aspectRatio;","uniform float u_psi;","uniform float u_theta;","uniform float u_f;","uniform float u_h;","uniform float u_v;","uniform float u_vo;","uniform float u_rot;","const float PI = 3.14159265358979323846264;","uniform sampler2D u_image;","uniform samplerCube u_imageCube;","varying vec2 v_texCoord;","uniform vec4 u_backgroundColor;","void main() {","float x = v_texCoord.x * u_aspectRatio;","float y = v_texCoord.y;","float sinrot = sin(u_rot);","float cosrot = cos(u_rot);","float rot_x = x * cosrot - y * sinrot;","float rot_y = x * sinrot + y * cosrot;","float sintheta = sin(u_theta);","float costheta = cos(u_theta);","float a = u_f * costheta - rot_y * sintheta;","float root = sqrt(rot_x * rot_x + a * a);","float lambda = atan(rot_x / root, a / root) + u_psi;","float phi = atan((rot_y * costheta + u_f * sintheta) / root);",].join("\n");var j=d+["float cosphi = cos(phi);","gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));","}"].join("\n");var h=d+["lambda = mod(lambda + PI, PI * 2.0) - PI;","vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));","if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)","gl_FragColor = u_backgroundColor;","else","gl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));","}"].join("\n");var b=["varying mediump vec2 v_texCoord;","uniform sampler2D u_sampler;","void main(void) {","gl_FragColor = texture2D(u_sampler, v_texCoord);","}"].join("");return{renderer:function(l,n,k,m){return new c(l,n,k,m)}}})(window,document);

/* imagesLoaded PACKAGED v4.1.4 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/* vr360 */
var progressTimer;
var vr360ImgSrc = './assets/images/cars/';
var colors = ['Polar_White'];
var vrInfo = {
	// model: 'S1W7L6A1GDD473',
	direction: 0,
	startX: 0,
	startY: 0,
	beforeX: 0,
	beforeY: 0,
	currentColor: colors[0]
};
var pushSize = 10;

$(function(){
	vrInit();
	layoutSize();

	function vrInit() {
		var isLoaded = false;

		var $target = $('.vr-car-wrap');
		var $targetT = $target;
		var moveType = -1;
		
		var htDefaultOption = {
			moveThreshold: 6,
			slopeThreshold: 50,
		};

		var isStart = false;
		var isMove = false;
		var nVSlope = 0;
		var nHSlope = 0;
		var bSetSlope = false;
		var interval = interval ? 10 : 5;
		
		function initMoveInfo() {
			vrInfo.direction = 6;
			vrInfo.color = colors[0];
			vrInfo.startX = 0;
			vrInfo.startY = 0;
			vrInfo.beforeX = 0;
			vrInfo.beforeY = 0;
			vrInfo.currentColor = vrInfo.color;

			// pushDirection = 26 + vrInfo.direction
			// if (pushDirection > 36) {
			//     pushDirection = vrInfo.direction - 36;
			//     if (pushDirection < pushSize) vrInfo.direction;
			// }
			t = vrInfo.direction;
			if (t < 10) t = '0' + t;

			$target.find('.sequence').removeClass('on').eq(vrInfo.direction).addClass('on');
			$target.find('.sequence').eq(vrInfo.direction).append('<img src="'+ vr360ImgSrc + vrInfo.color +'/'+ vrInfo.color + '_' + t +'.png">');
		}
		
		// init
		initMoveInfo();
		
		$target.on('touchstart mousedown', function(e){
			if (isMobile) {
				if (e.type == 'mousedown') {
					return;
				}
			}

			if (!isLoaded) {
				return;
			}

			mRest();

			var htInfo = getMoveInfo(e);

			isStart = true;

			nStartX = htInfo.nX;
			nStartY = htInfo.nY;
			
			idx = vrInfo.direction +1;

			vrInfo.startX = htInfo.nX;
			vrInfo.startY = htInfo.nY;

			$target.addClass('e-start');
		});
		
		if (!isMobile) {
			$targetT = $window;
		}
		console.log(moveType)
		$targetT.on('touchmove mousemove', function(e){
			if(!isStart){
				return;
			}

			isMove = true;

			var htInfo = getMoveInfo(e);
			
			vrInfo.beforeX = htInfo.nX;
			vrInfo.beforeY = htInfo.nY;
			
			if (moveType < 0 || moveType == 3 || moveType == 4) {
				moveType = getMoveType(htInfo.nX, htInfo.nY);
			}

			if (moveType == 0) {
				if (vrInfo.beforeX - interval > vrInfo.startX) {
					idx++;
					if (idx > 36) idx = 1;
					vrInfo.startX = vrInfo.beforeX;
				} else if (vrInfo.beforeX + interval < vrInfo.startX) {
					idx--;
					if (idx < 1) idx = 36;
					vrInfo.startX = vrInfo.beforeX;
				}
				vrInfo.direction = idx -1;
				$target.find('.sequence').removeClass('on').eq(vrInfo.direction).addClass('on');
				e.preventDefault();

			} else if (moveType == 1) {
				return;
			}

			if (getMoveType.nDis < htDefaultOption.moveThreshold) {
				return; 
			}

			$target.addClass('e-start');
		});
		
		$targetT.on('touchend mouseup', function(e){
			if (isMobile) {
				if (e.type == 'mouseup') {
					return;
				}
			}
			mRest();

			$target.removeClass('e-start');
		});

		function mRest(){
			isStart = false;
			isMove = false;
			moveType = -1;
		}

		function setSlope(e) {
			if (!bSetSlope) {
				nHSlope = ((window.innerHeight/2) / window.innerWidth).toFixed(2) * 1;
				nVSlope = (window.innerHeight / (window.innerWidth/2)).toFixed(2) * 1;
				
				return {
					nHSlope : nHSlope,
					nVSlope : nVSlope
				}
			}
		}
		
		function getMoveInfo(e) {
			var x = isMobile ? e.originalEvent.touches[0].pageX : e.offsetX;
			var y = isMobile ? e.originalEvent.touches[0].pageY : e.offsetY;
			
			return {
				nX : x,
				nY : y
			}
		}

		function getMoveType(x, y) {
			var nType = moveType;

			var nX = Math.abs(nStartX - x);
			var nY = Math.abs(nStartY - y);
			var nDis = nX + nY;
			
			if (htDefaultOption.slopeThreshold <= nDis) {
				var nSlope = parseFloat((nY/nX).toFixed(2),10);

				if(nSlope <= setSlope().nHSlope){
					nType = 0;
				}else if(nSlope >= setSlope().nVSlope){
					nType = 1;
				}else{
					nType = 2;
				}   
			}
			return nType;
		}
		
		$('.btn-vr360').on('click', vr360);
		// $('.btn-left-prev, .btn-right-next').on('click', carMove);
		// $('.exterior-color-chip').on('click', '.color-select', colorSelect);

		function vr360() {
			imagesProgress(vrInfo.model, vrInfo.direction, vrInfo.currentColor, 'btn-vr360');
			$('.vr360-wrap').addClass('is-loading');
			// $(this).hide();
		}

		function carMove() {
			if (!isLoaded) {
				return;
			}

			if ($(this).hasClass('btn-prev')) {
				idx = vrInfo.direction +1;
				idx--;
				if (idx < 1) idx = 36;
				vrInfo.direction = idx -1;
			}

			if ($(this).hasClass('btn-next')) {
				idx = vrInfo.direction +1;
				idx++;
				if (idx > 36) idx = 1;
				vrInfo.direction = idx -1;
			}

			$('.vr-car-wrap').find('.sequence').removeClass('on').eq(vrInfo.direction).addClass('on');
		}

		function colorSelect() {
			var $this = $(this);
			var idx = $this.parent().index();
			var $vr360 = $('.vr-car-wrap');
			var $noVr360 = $('.vr-car-no-img');
			var $btnVr360 = $('.btn-vr360');

			
			if ($this.hasClass('no-vr360')) {
				$vr360.hide();
				$noVr360.show();
				$btnVr360.hide();
			} else {
				$vr360.show();
				$noVr360.hide();
				
				vrInfo.currentColor = colors[idx];
				imagesProgress(vrInfo.model, vrInfo.direction, colors[idx], 'btn-color');
				$this.parent().addClass('is-active').siblings().removeClass('is-active');

				if (isLoaded) {
					$('.vr360-wrap').addClass('is-loading');
				} else {
					$btnVr360.show();
				}
			}
		}
		
		function imagesProgress(m, i, c, v) {
			var $target = $('.vr360-wrap');
			var $sequence = $target.find('.sequence');
			var $progressBar = $target.find('.progress > .bar');
			var $progressText = $target.find('.progress > .count');
			
			var idx = i;
			var total = 36;
		
			initProgress();
			
			if (v == 'btn-vr360') {
				isLoaded = true;
				$target.find('.sequence').empty();
				for (var i=0; i<=total; i++) {
					t = i;
					if (t < 10) t = '0' + t;

					$target.find('.sequence[data-sequence='+ i +']').append('<img src="' + vr360ImgSrc + c +'/'+ c + '_' + t +'.png" alt="">');
				}
			}
		
			if (v == 'btn-color') {
				if (isLoaded) {
					for (var i=0; i<=total; i++) {
						t = i;
						if (t < 10) t = '0' + t;

						$target.find('.sequence[data-sequence='+ i +']').find('img').attr('src', vr360ImgSrc + c +'/'+ c + '_' + t +'.png');
					}
				} else {
					t = i;
					if (t < 10) t = '0' + t;
					
					$target.find('.sequence[data-sequence='+ i +']').find('img').attr('src', vr360ImgSrc + c +'/'+ c + '_' + t +'.png');
				}
			}
			
			if (!isLoaded) {
				return;
			}

			var $target = $('.vr360-wrap');
			var $imgLoad = imagesLoaded('.vr360-wrap'),
				imgTotal = $imgLoad.images.length,
				imgLoaded = 0,
				current = 0;

				clearInterval(progressTimer);
				progressTimer = setInterval(updateProgress, 1000 / 60);
				
				$imgLoad.on('progress', function(){
					imgLoaded++;
				});
		
			function updateProgress() {
				var target = (imgLoaded / imgTotal) * 100;
					current += (target - current) * 0.1;

				if (current >= 99.9) {
					current = 100;
				}

				if (current >= 100) {
					clearInterval(progressTimer);
					$progressBar.add($progressText).stop().animate({ opacity:0 }, 0, function(){
						$('.vr360-wrap').removeClass('is-loading');
						$('.vr360-wrap').addClass('progress-complete');
						$('.vr360-wrap').find('.vr-car-wrap').addClass('move');
					});
				}

				$progressBar.css({ width: current + '%' });
				$progressText.css('opacity', '1').text( Math.floor(current) +  '%' );
			}
		
			function initProgress() {
				$target.removeClass('progress-complete');
				$target.find('.vr-car-wrap').removeClass('move');
				$progressBar.css({'width': '0%', 'opacity': '1'});
				$progressText.css('opacity', '0').html('0%');
			}
		}
	}
});
