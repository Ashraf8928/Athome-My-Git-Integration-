class Blog extends HTMLElement{constructor(){super()}connectedCallback(){this.list=this.querySelector(".blog--article-list"),theme.utils.libraryLoader("masonry",theme.assets.masonry,()=>{"small"!==theme.mqs.current_window&&this.initMasonry(),this.eventListeners()})}initMasonry(){this.list.setAttribute("data-masonry-loaded",!0),this.masonry=new Masonry(this.list,{itemSelector:".article--item",percentPosition:!0,horizontalOrder:!0,columnWidth:".article--item",gutter:32})}eventListeners(){window.on("theme:mqs:updated",()=>{var t="true"===this.list.getAttribute("data-masonry-loaded");"small"!==theme.mqs.current_window&&!1==t?this.initMasonry():"small"===theme.mqs.current_window&&t&&(this.list.setAttribute("data-masonry-loaded",!1),this.masonry.destroy())})}}customElements.define("blog-root",Blog);