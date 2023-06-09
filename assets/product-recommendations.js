class ProductRecommendations extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.current_width = window.innerWidth, this.item_container = this.querySelector(".product-recommendations--body");
		var t = this.getAttribute("data-product-id"),
			e = this.getAttribute("data-max-products");
		this.request_url = theme.urls.product_recommendations + `?section_id=product-recommendations&limit=${e}&product_id=` + t, this.load()
	}
	async load() {
		const t = await fetch(this.request_url);
		if (!t.ok) throw new Error(t.statusText);
		var e = await t.text(),
			e = theme.utils.parseHtml(e, ".product-recommendations--body"),
			e = (this.item_container.innerHTML = e.innerHTML, this.item_container.querySelectorAll(".product--root").length);
		e && (this.style.display = "block", this.matchImageHeights(), this.initProductItems(), this.loadHoverImages(), this.resizeListeners())
        
   $(".product-recommendations--body").slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     adaptiveHeight: true,
     infinite: true,
     arrows: true,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
   });
	}
	matchImageHeights() {
		theme.utils.matchImageHeights(this.item_container, this.querySelectorAll(".product--root"), ".product--image-wrapper")
	}
	initProductItems() {
		theme.settings.quick_add && theme.off_canvas.reset()
	}
	loadHoverImages() {
		this.querySelectorAll(".product--hover-image").forEach(e => {
			theme.utils.imagesLoaded(e, () => {
				const t = e.closest('[data-hover-image="true"]');
				t && t.setAttribute("data-hover-image", "loaded")
			})
		})
	}
	resizeListeners() {
		window.on("resize.ProductRecommendations", theme.utils.debounce(100, () => {
			this.current_width !== window.innerWidth && (this.matchImageHeights(), this.current_width = window.innerWidth)
		}))
	}
}
customElements.define("product-recommendations-root", ProductRecommendations);