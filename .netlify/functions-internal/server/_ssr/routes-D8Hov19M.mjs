import { r as __toESM } from "../_runtime.mjs";
import { a as heroImage, c as logoImage, d as whatsappUrl, i as generalWhatsapp, l as mapsUrl, n as cakes, o as heroImageAlt, r as categories, s as logoAlt, t as cakeWhatsapp, u as shop } from "./shop-DX_742Ti.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as Mail, d as CalendarClock, f as Cake, i as Phone, l as Leaf, m as ArrowRight, n as Truck, o as Menu, p as Bike, r as Sparkles, s as MapPin, t as X, u as CalendarDays } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D8Hov19M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Cakes",
		href: "#cakes"
	},
	{
		label: "Custom Cakes",
		href: "#custom-cakes"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "border-b border-border bg-ivory/90 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Main",
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					"aria-label": shop.name,
					className: "flex items-center py-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoImage,
						alt: logoAlt,
						width: 1908,
						height: 654,
						className: "h-11 w-auto object-contain sm:h-14"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "relative text-sm font-medium text-cocoa transition-colors hover:text-charcoal after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: generalWhatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Order on WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-charcoal lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border bg-ivory px-5 pb-6 pt-2 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block border-b border-border/70 py-4 text-base font-medium text-charcoal",
					children: l.label
				}) }, l.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://api.whatsapp.com/send/?phone=917058581436&text=Hello+Shivnandan+Doodh+Dairy+%26+Cake+Shop%2C%0AI+would+like+to+place+a+cake+order.%0A%0APlease+share+the+available+cake+designs%2C+sizes%2C+prices+and+delivery+details.%0A%0AThank+you.&type=phone_number&app_absent=0",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-5 flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "size-5",
					"aria-hidden": "true"
				}), "Order on WhatsApp"]
			})]
		})]
	});
}
/**
* Renders the ORIGINAL cake photograph. If the photo file has not been added
* yet, an elegant ivory placeholder is shown — we never substitute another
* cake image.
*/
function CakeImage({ src, alt, className = "", eager, sizes }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const imgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = imgRef.current;
		if (el && el.complete && el.naturalWidth === 0) setFailed(true);
	}, [src]);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col items-center justify-center gap-2 bg-[image:var(--gradient-champagne)] text-center ${className}`,
		role: "img",
		"aria-label": `${alt} — photograph coming soon`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, {
			className: "size-7 text-gold",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow px-4 text-[0.62rem] leading-relaxed",
			children: "Photo coming soon"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref: imgRef,
		src,
		alt,
		sizes,
		loading: eager ? "eager" : "lazy",
		decoding: eager ? "sync" : "async",
		fetchPriority: eager ? "high" : "auto",
		onError: () => setFailed(true),
		className
	});
}
var trust = [
	{
		icon: Leaf,
		label: "100% Pure Veg"
	},
	{
		icon: CalendarClock,
		label: "Order 1 Day in Advance"
	},
	{
		icon: Bike,
		label: `Home Delivery ${shop.deliveryCharge}`
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden bg-[image:var(--gradient-warm)] pb-20 pt-28 sm:pb-28 sm:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-champagne/45 blur-[90px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-beige/50 blur-[80px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-1/2 top-10 hidden w-[42rem] -translate-x-1/2 text-gold/25 lg:block",
				viewBox: "0 0 600 120",
				fill: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 90C120 20 240 20 300 60s180 40 300-30",
					stroke: "currentColor",
					strokeWidth: "1"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-in text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow font-semibold",
							children: shop.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-[2.4rem] leading-[1.04] text-charcoal sm:text-6xl lg:text-[4.15rem]",
							children: [
								"Sweet Moments Deserve a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative italic text-cocoa",
									children: ["Beautiful Cake", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										"aria-hidden": "true",
										className: "absolute -bottom-2 left-0 w-full text-gold/60",
										viewBox: "0 0 200 8",
										fill: "none",
										preserveAspectRatio: "none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M1 6C50 1 150 1 199 5",
											stroke: "currentColor",
											strokeWidth: "1.5"
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-7 max-w-xl text-base leading-relaxed text-cocoa sm:text-lg lg:mx-0",
							children: "Freshly prepared 100% pure veg cakes for birthdays, anniversaries and every special celebration."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold-soft bg-card px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-veg uppercase shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
								className: "size-3.5",
								"aria-hidden": "true"
							}), "100% Pure Veg"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-11 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroActions, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start",
							children: trust.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 text-sm font-medium text-cocoa",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 text-gold",
									"aria-hidden": "true"
								}), label]
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroActions, {})]
				})]
			})
		]
	});
}
function HeroActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "#cakes",
			className: "group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-base font-semibold text-ivory shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa",
			children: ["Explore Our Cakes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: generalWhatsapp,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "inline-flex items-center justify-center gap-2 rounded-full border border-gold-soft bg-card px-7 py-4 text-base font-semibold text-charcoal shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "size-4 text-veg",
				"aria-hidden": "true"
			}), "Order on WhatsApp"]
		})]
	});
}
function HeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hero-visual relative mx-auto max-w-md lg:max-w-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-8 -bottom-5 h-24 rounded-full bg-champagne/70 blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "hero-float absolute -left-4 top-10 size-16 rounded-full border border-gold/30 sm:-left-6 sm:size-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "hero-float absolute -right-3 bottom-16 size-10 rounded-full bg-[image:var(--gradient-champagne)] shadow-[var(--shadow-soft)] [animation-delay:1.4s]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-t-[14rem] rounded-b-[3rem] border border-gold-soft/70 bg-card p-3 shadow-[var(--shadow-lift)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeImage, {
					src: heroImage,
					alt: heroImageAlt,
					eager: true,
					sizes: "(min-width: 1024px) 45vw, 90vw",
					className: "aspect-4/5 w-full rounded-t-[13rem] rounded-b-[2.4rem] object-cover"
				})
			})
		]
	});
}
function CakeCard({ cake, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group surface-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpen(cake),
			"aria-label": `View ${cake.name} larger`,
			className: "relative block overflow-hidden bg-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeImage, {
				src: cake.image,
				alt: `${cake.name} — 100% pure veg ${cake.category.toLowerCase()}`,
				sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
				className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-transparent px-3 pb-3 pt-8 text-left text-sm font-semibold text-ivory sm:px-4 sm:pb-4 sm:text-base",
				children: cake.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: cake.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-base leading-snug text-charcoal sm:text-lg",
					children: cake.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium text-cocoa",
					children: cake.price === null ? "Price on WhatsApp" : `₹${cake.price}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: cakeWhatsapp(cake.name, cake.image),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-cocoa",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Order Now"]
				})
			]
		})]
	});
}
function CakeLightbox({ cake, onClose }) {
	(0, import_react.useEffect)(() => {
		if (!cake) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [cake, onClose]);
	if (!cake) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": cake.name,
		onClick: onClose,
		className: "fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/45 p-0 backdrop-blur-sm sm:items-center sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-4xl overflow-hidden rounded-t-[1.75rem] border border-border bg-card shadow-[var(--shadow-lift)] sm:rounded-[1.75rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close",
				className: "absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/90 text-charcoal backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid max-h-[88vh] overflow-y-auto sm:grid-cols-[1.2fr_1fr] sm:overflow-visible",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeImage, {
					src: cake.image,
					alt: `${cake.name} — 100% pure veg ${cake.category.toLowerCase()}`,
					eager: true,
					className: "aspect-square w-full bg-cream object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center gap-3 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: cake.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-charcoal sm:text-3xl",
							children: cake.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-cocoa",
							children: cake.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-charcoal",
							children: cake.price === null ? "Price on WhatsApp" : `₹${cake.price}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: cakeWhatsapp(cake.name, cake.image),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-cocoa",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Order Now"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "100% pure veg · Please order at least 1 day in advance · Home delivery ₹100"
						})
					]
				})]
			})]
		})
	});
}
/** Reveals an element once it scrolls into view. */
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || shown) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setShown(true);
				io.disconnect();
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .05
		});
		io.observe(el);
		return () => io.disconnect();
	}, [shown]);
	return {
		ref,
		className: shown ? "" : "reveal"
	};
}
function CakeGallery() {
	const [active, setActive] = (0, import_react.useState)("All Cakes");
	const [open, setOpen] = (0, import_react.useState)(null);
	const reveal = useReveal();
	const shown = (0, import_react.useMemo)(() => active === "All Cakes" ? cakes : cakes.filter((c) => c.category === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cakes",
		className: "bg-ivory py-16 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our Collection"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl text-charcoal sm:text-5xl",
							children: "Our Cakes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-cocoa",
							children: "Choose from our collection of freshly prepared 100% pure veg cakes."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Cake categories",
					className: "mt-9 flex flex-wrap justify-center gap-2 sm:gap-3",
					children: categories.map((c) => {
						const isActive = active === c;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							role: "tab",
							"aria-selected": isActive,
							type: "button",
							onClick: () => setActive(c),
							className: `rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all sm:px-5 ${isActive ? "border-charcoal bg-charcoal text-ivory shadow-[var(--shadow-soft)]" : "border-border bg-card text-cocoa hover:border-gold-soft hover:bg-cream"}`,
							children: c
						}, c);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: reveal.ref,
					className: `mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 ${reveal.className}`,
					children: shown.map((cake) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeCard, {
						cake,
						onOpen: setOpen
					}, cake.id))
				}),
				shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-sm text-cocoa",
					children: "No cakes in this category yet — message us on WhatsApp and we'll help."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeLightbox, {
			cake: open,
			onClose: () => setOpen(null)
		})]
	});
}
function SectionHead({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl text-charcoal sm:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-cocoa",
				children: subtitle
			})
		]
	});
}
function OrderInformation() {
	const reveal = useReveal();
	const items = [
		{
			icon: CalendarDays,
			title: "Order 1 Day in Advance",
			text: "Please place your cake order at least one day before your required date."
		},
		{
			icon: Truck,
			title: "Home Delivery Available",
			text: `Home delivery is available for ${shop.deliveryCharge}.`
		},
		{
			icon: Leaf,
			title: "100% Pure Veg",
			text: "All our cakes are pure vegetarian."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[image:var(--gradient-warm)] py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: reveal.ref,
			className: `mx-auto grid max-w-6xl gap-4 px-5 sm:gap-5 md:grid-cols-3 lg:px-8 ${reveal.className}`,
			children: items.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-11 items-center justify-center rounded-full bg-champagne/70 text-cocoa",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-xl text-charcoal",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-cocoa",
						children: text
					})
				]
			}, title))
		})
	});
}
function CustomCakeSection() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "custom-cakes",
		className: "bg-ivory py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: reveal.ref,
			className: `mx-auto max-w-5xl px-5 lg:px-8 ${reveal.className}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-[2rem] border border-gold-soft/70 bg-[image:var(--gradient-champagne)] px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-14 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-12 items-center justify-center rounded-full bg-card text-cocoa shadow-[var(--shadow-soft)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-3xl text-charcoal sm:text-4xl",
						children: "Have Your Own Cake Idea?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cocoa",
						children: "Have a special design in mind? Send us your reference or tell us what you are looking for and we'll discuss your requirements."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl(`Hello ${shop.name}, I have my own cake design idea. I would like to discuss my requirements.`),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-base font-semibold text-ivory shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Discuss Your Cake on WhatsApp"]
					})
				]
			})
		})
	});
}
function WhyChooseUs() {
	const reveal = useReveal();
	const items = [
		{
			icon: Leaf,
			title: "100% Pure Veg",
			text: "Every cake we prepare is pure vegetarian."
		},
		{
			icon: Cake,
			title: "Freshly Prepared",
			text: "Cakes are made fresh for your date and occasion."
		},
		{
			icon: Sparkles,
			title: "Beautiful Designs",
			text: "From simple cream cakes to detailed designer work."
		},
		{
			icon: MessageCircle,
			title: "Easy WhatsApp Ordering",
			text: "Send us a message and we'll take it from there."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-cream/60 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "About Us",
				title: "Why Choose Shivnandan?",
				subtitle: "A neighbourhood dairy and cake shop in Hiwarkheda, preparing pure veg cakes for every celebration."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: reveal.ref,
				className: `mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 ${reveal.className}`,
				children: items.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-11 items-center justify-center rounded-full bg-champagne/70 text-cocoa",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg text-charcoal",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-cocoa",
							children: text
						})
					]
				}, title))
			})]
		})
	});
}
function HowToOrder() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ivory py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Simple Process",
					title: "How to Order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: reveal.ref,
					className: `mt-10 grid gap-4 sm:gap-6 md:grid-cols-3 ${reveal.className}`,
					children: [
						[
							"01",
							"Browse Our Cakes",
							"Look through our collection of pure veg cakes."
						],
						[
							"02",
							"Choose Your Favourite",
							"Open a cake to see it in detail."
						],
						[
							"03",
							"Order on WhatsApp",
							"Tap Order Now and share your date and size."
						]
					].map(([n, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl text-gold",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl text-charcoal",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-cocoa",
								children: text
							})
						]
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm font-semibold text-cocoa",
					children: "Please order at least 1 day in advance."
				})
			]
		})
	});
}
function ContactSection() {
	const reveal = useReveal();
	const rows = [
		{
			icon: Phone,
			label: "Phone",
			value: shop.phone,
			href: `tel:+91${shop.phone}`
		},
		{
			icon: Mail,
			label: "Email",
			value: shop.email,
			href: `mailto:${shop.email}`
		},
		{
			icon: MapPin,
			label: "Address",
			value: shop.address,
			href: mapsUrl
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-cream/60 py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: reveal.ref,
			className: `mx-auto max-w-5xl px-5 lg:px-8 ${reveal.className}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Get in Touch",
				title: "Contact Us",
				subtitle: "Call or message us and we'll help you choose the right cake."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 surface-card p-6 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-charcoal",
						children: shop.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-cocoa",
						children: shop.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-7 grid gap-5 sm:grid-cols-3",
						children: rows.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "eyebrow flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-3.5",
								"aria-hidden": "true"
							}), label]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm leading-relaxed text-charcoal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: label === "Address" ? "_blank" : void 0,
								rel: "noopener noreferrer",
								className: "hover:text-cocoa hover:underline",
								children: value
							})
						})] }, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${shop.phone}`,
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-cocoa",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), " Call Now"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: generalWhatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4",
									"aria-hidden": "true"
								}), " WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${shop.email}`,
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": "true"
								}), " Email"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-4",
									"aria-hidden": "true"
								}), " Get Directions"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-xs text-muted-foreground",
						children: [
							"100% pure veg · Order at least 1 day in advance · Home delivery",
							" ",
							shop.deliveryCharge
						]
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-ivory pb-28 pt-14 sm:pb-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoImage,
						alt: logoAlt,
						className: "h-14 w-auto object-contain",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-cocoa",
						children: shop.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-cocoa",
						children: shop.address
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-cocoa",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:+91${shop.phone}`,
							className: "hover:text-charcoal",
							children: shop.phone
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${shop.email}`,
							className: "hover:text-charcoal",
							children: shop.email
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm font-medium text-charcoal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "100% Pure Veg" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Order 1 Day in Advance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Home Delivery ", shop.deliveryCharge] })
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Explore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-cocoa",
						children: [
							["Home", "#home"],
							["Cakes", "#cakes"],
							["Custom Cakes", "#custom-cakes"],
							["About", "#about"],
							["Contact", "#contact"]
						].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							className: "hover:text-charcoal",
							children: label
						}) }, href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: generalWhatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-cocoa",
						children: ["Order on WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				shop.name,
				". All rights reserved."
			]
		})]
	});
}
function MobileOrderBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-ivory/95 p-3 backdrop-blur-md sm:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: generalWhatsapp,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "size-5",
				"aria-hidden": "true"
			}), "Order on WhatsApp"]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderInformation, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CakeGallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCakeSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToOrder, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileOrderBar, {})
		]
	});
}
//#endregion
export { HomePage as component };
