(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem___K8Up",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2v-RJ"}},14:function(e,t,a){e.exports={wrapperButton:"Button_wrapperButton__M5oem",Button:"Button_Button__1RgpJ"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1qGlF",Modal:"Modal_Modal__3D9Tv"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1B6wU"}},29:function(e,t,a){e.exports={wrapperLoader:"Loader_wrapperLoader__2kUgJ"}},34:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1PG6D",SearchForm:"Searchbar_SearchForm__2YeYx",SearchFormButton:"Searchbar_SearchFormButton__3Jt6B",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__mKO5M",SearchFormInput:"Searchbar_SearchFormInput__3h2GK"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=(a(34),a(4)),s=a.n(i),l=a(16),u=a(6),m=a(7),g=a(8),d=a(10),h=a(9),p=a(17),b=a(12),j=a.n(b);j.a.defaults.baseURL="https://pixabay.com/api";var f=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/?image_type=photo&orientation=horizontal&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat("15831772-a93111deddd9ec3e88224ce89","&").concat("fields=id;webformatURL;largeImageURL"));case 2:return n=e.sent,e.abrupt("return",n.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=a(5),S=a.n(v),O=a(1),x=function(e){var t=e.onFormSubmit;return Object(O.jsx)("div",{children:Object(O.jsx)("header",{className:S.a.Searchbar,children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.elements.imageName.value)},className:S.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:S.a.SearchFormButton,children:Object(O.jsx)("span",{className:S.a.SearchFormButtonLabel,children:"Search"})}),Object(O.jsx)("input",{className:S.a.SearchFormInput,type:"text",name:"imageName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},I=a(2),_=a.n(I),y=a(13),w=a.n(y),k=function(e){var t=e.imageSrc,a=e.tags,n=e.largeImageURL,r=e.onImageClick;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("li",{className:w.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:t,alt:a,className:w.a.ImageGalleryItemImage,onClick:function(e){r(n)}})})})},F=k;k.propTipes={imageSrc:_.a.string.isRequired,tags:_.a.string.isRequired,largeImageURL:_.a.string.isRequired,onImageClick:_.a.func.isRequired};var L=a(27),B=a.n(L),N=function(e){var t=e.images,a=e.onImageClick;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:B.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(O.jsx)(F,{id:t,imageSrc:n,tags:r,largeImageURL:o,onImageClick:a},t)}))})})},M=(a(57),a(28)),U=a.n(M),C=a(29),G=a.n(C);function R(){return Object(O.jsx)("div",{className:G.a.wrapperLoader,children:Object(O.jsx)(U.a,{type:"Oval",color:"#3f51b5",height:60,width:60,timeout:3e3})})}var q=a(14),D=a.n(q),J=function(e){var t=e.onLoadButton;return Object(O.jsx)("div",{className:D.a.wrapperButton,children:Object(O.jsx)("button",{type:"button",className:D.a.Button,onClick:function(e){return t(e)},children:"Load more"})})},K=a(15),T=a.n(K),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:T.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e.props.closeModal()},children:Object(O.jsx)("div",{className:T.a.Modal,children:this.props.children})})}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:null,images:[],page:1,reqStatus:"idle",openImageUrl:null},e.handleFormSubmit=function(t){e.setState({imageName:t,images:[],page:1})},e.onLoadButton=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImageClick=function(t){e.setState({openImageUrl:t})},e.closeModal=function(){e.setState({openImageUrl:null})},e}return Object(g.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,o,c,i,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.imageName,o=n.images,c=n.page,a.imageName===this.state.imageName&&a.page===this.state.page){e.next=20;break}return i=function(){return p.b.error("No results were found for your search.",{duration:3e3,position:"top-right"})},e.prev=3,this.setState({reqStatus:"loading"}),e.next=7,f(r,c);case 7:if(0!==(u=e.sent).length){e.next=11;break}return this.setState({reqStatus:"idle"}),e.abrupt("return",i());case 11:m=[].concat(Object(l.a)(o),Object(l.a)(u)),this.setState({images:m,reqStatus:"idle"}),c>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),i(),this.setState({reqStatus:"rejected"});case 20:case"end":return e.stop()}}),e,this,[[3,16]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.imageName,a=e.images,n=e.reqStatus,r=e.openImageUrl,o="idle"===n&&a.length>0,c="loading"===n;return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{onFormSubmit:this.handleFormSubmit}),Object(O.jsx)(p.a,{}),c&&Object(O.jsx)(R,{}),Object(O.jsx)(N,{images:a,onImageClick:this.onImageClick}),r&&Object(O.jsx)(E,{closeModal:this.closeModal,children:Object(O.jsx)("img",{src:r,alt:t})}),o&&Object(O.jsx)(J,{onLoadButton:this.onLoadButton})]})}}]),a}(n.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),A()}},[[76,1,2]]]);
//# sourceMappingURL=main.51380f7f.chunk.js.map