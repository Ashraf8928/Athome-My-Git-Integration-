class CollapsibleTab extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
          (this.current_width = window.innerWidth),
        (this.description = this.querySelector(".collapsible-tab--content")),
        (this.description_wrapper = this.querySelector(
          ".collapsible-tab--content-wrapper"
        )),
        (this.toggle = this.querySelector(".collapsible-tab--toggle")),
        this.toggleListener(),
        this.transitionListener(),
        this.resizeListener();
    }
    disconnectedCallback() {
      this.toggle.off("click keydown");
    }
    toggleListener() {
      this.toggle.on("click keydown", (t) => {
        ("keydown" === t.type && "Enter" !== t.key) ||
          ((t = "true" === this.toggle.getAttribute("aria-expanded")),
          this.setTransitions(!t));
      });
    }
    setTransitions(t) {
      $('.collapsible-tab--content-wrapper').css('height',0);
      $('.collapsible-tab--toggle').attr('aria-expanded','false');
      $('.collapsible-tab--toggle').removeClass('active');
      this.toggle.setAttribute("aria-expanded", t),
        t
          ? ((this.description_wrapper.style.height =
              this.description.offsetHeight + "px"),
            this.description_wrapper.setAttribute("data-transition", "forwards"))
          : ((this.description_wrapper.style.height = "0px"),
            this.description.setAttribute("data-transition", "fade-out"));
    }
    resizeListener() {
      window.on("resize", () => {
        this.current_width !== window.innerWidth &&
          (this.setTransitions(!1), (this.current_width = window.innerWidth));
      });
    }
    transitionListener() {
      this.description_wrapper.on("transition:at_end", () => {
        this.description.setAttribute("data-transition", "fade-in");
      });
    }
  }
  customElements.define("collapsible-tab-root", CollapsibleTab);
  