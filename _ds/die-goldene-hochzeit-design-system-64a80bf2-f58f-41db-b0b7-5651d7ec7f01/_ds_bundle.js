/* @ds-bundle: {"format":4,"namespace":"DieGoldeneHochZeitDesignSystem_64a80b","components":[{"name":"Gingham","sourcePath":"components/brand/Gingham.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Scatter","sourcePath":"components/brand/Scatter.jsx"},{"name":"Ticket","sourcePath":"components/brand/Ticket.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Gingham.jsx":"40320efedd73","components/brand/Logo.jsx":"f982e490f85a","components/brand/Scatter.jsx":"e9fc295ae769","components/brand/Ticket.jsx":"41f759d2420b","components/core/Badge.jsx":"b066cedad4e0","components/core/Button.jsx":"f50284844488","components/core/Card.jsx":"e1147047b71c","components/forms/Checkbox.jsx":"54f57a25ee76","components/forms/Input.jsx":"ad8aa442ef2b","ui_kits/festival-site/App.jsx":"5995e100aeb6","ui_kits/festival-site/Footer.jsx":"4d71537f1ec4","ui_kits/festival-site/Hero.jsx":"c6171fab6891","ui_kits/festival-site/Nav.jsx":"056ab69f0786","ui_kits/festival-site/Programm.jsx":"2853ac236461","ui_kits/festival-site/Rsvp.jsx":"1c21a07bcb1e","ui_kits/festival-site/Tickets.jsx":"0b56b201e44e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DieGoldeneHochZeitDesignSystem_64a80b = window.DieGoldeneHochZeitDesignSystem_64a80b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Gingham.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gingham — the signature red-white Karo (picnic check) surface. Use as a
 * FLÄCHE / panel fill behind headings, ribbons, or hero blocks — never behind
 * running text. Renders its children on top of the pattern.
 */
function Gingham({
  children,
  size = 32,
  radius = "var(--radius-lg)",
  style,
  ...rest
}) {
  const s = `${size}px`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      borderRadius: radius,
      overflow: "hidden",
      backgroundColor: "#ffffff",
      backgroundImage: `
          repeating-linear-gradient(0deg,  rgba(235,57,21,0.55) 0 ${s}, transparent ${s} calc(2*${s})),
          repeating-linear-gradient(90deg, rgba(235,57,21,0.55) 0 ${s}, transparent ${s} calc(2*${s}))
        `,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Gingham });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Gingham.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — renders the HochZeit mark. Because the SVG/PNG assets live in the
 * design-system `assets/` folder, pass `src` with the correct relative path
 * for your page (consumers must copy the assets they use). Defaults assume the
 * component is used from a page one level under the assets root.
 */
function Logo({
  variant = "wordmark",
  tone = "ink",
  src,
  height = 56,
  alt = "Die Goldene HochZeit",
  style,
  ...rest
}) {
  const toneSuffix = tone === "ink" ? "" : `-${tone}`; // "", "-cream", "-gold"
  const resolved = src || `assets/logo-${variant}${toneSuffix}.svg`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Scatter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Scatter — festive background flourish: exclamation marks and diamonds/rhombi
 * strewn about, signalling "hier passiert was Aufregendes". Absolutely
 * positioned; drop inside a `position: relative` parent as a decorative layer.
 * Non-interactive (pointer-events: none).
 */
function Scatter({
  density = 10,
  color = "var(--hz-red)",
  seed = 1,
  style,
  ...rest
}) {
  // Deterministic pseudo-random so layout is stable across renders.
  const rand = n => {
    const x = Math.sin(seed * 999 + n * 7.13) * 10000;
    return x - Math.floor(x);
  };
  const glyphs = ["!", "◆", "!", "◇"];
  const items = Array.from({
    length: density
  }, (_, i) => {
    const g = glyphs[Math.floor(rand(i) * glyphs.length)];
    return {
      g,
      top: `${Math.round(rand(i + 0.1) * 92)}%`,
      left: `${Math.round(rand(i + 0.4) * 94)}%`,
      size: 14 + Math.round(rand(i + 0.7) * 26),
      rot: Math.round((rand(i + 0.9) - 0.5) * 50),
      op: 0.5 + rand(i + 0.5) * 0.5
    };
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      top: it.top,
      left: it.left,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: `${it.size}px`,
      lineHeight: 1,
      color,
      opacity: it.op,
      transform: `rotate(${it.rot}deg)`
    }
  }, it.g)));
}
Object.assign(__ds_scope, { Scatter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Scatter.jsx", error: String((e && e.message) || e) }); }

// components/brand/Ticket.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ticket — a festival ticket / RSVP stub with a perforated tear line and a
 * notched stub. Great for pricing tiers, "save the date" cards, and CTAs.
 */
function Ticket({
  eyebrow,
  title,
  price,
  meta,
  stub = "Zutritt",
  tone = "cream",
  children,
  style,
  ...rest
}) {
  const bg = tone === "red" ? "var(--hz-red)" : "var(--surface-card)";
  const fg = tone === "red" ? "var(--hz-cream)" : "var(--text-body)";
  const notch = tone === "red" ? "var(--hz-red)" : "var(--surface-base)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "stretch",
      borderRadius: "var(--radius-lg)",
      border: "var(--border-w-bold) solid var(--hz-ink)",
      background: bg,
      color: fg,
      boxShadow: "var(--shadow-sticker)",
      overflow: "hidden",
      fontFamily: "var(--font-text)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "var(--sp-5) var(--sp-6)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-black)",
      fontSize: "0.72rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: tone === "red" ? "var(--hz-pink)" : "var(--hz-red)",
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "1.5rem",
      lineHeight: 1.05
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9rem",
      opacity: 0.85,
      marginTop: 6
    }
  }, meta), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      borderLeft: "3px dashed var(--hz-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -11,
      left: -11,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: notch,
      border: "3px solid var(--hz-ink)",
      borderTop: "none",
      borderLeft: "none",
      transform: "rotate(45deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: -11,
      left: -11,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: notch,
      border: "3px solid var(--hz-ink)",
      borderBottom: "none",
      borderRight: "none",
      transform: "rotate(45deg)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      padding: "0 var(--sp-5)",
      minWidth: 96,
      background: tone === "red" ? "rgba(0,0,0,0.12)" : "var(--hz-gold)",
      color: tone === "red" ? "var(--hz-cream)" : "var(--hz-gold-shadow)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "1.6rem",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      writingMode: price ? undefined : "vertical-rl",
      fontWeight: "var(--fw-black)",
      fontSize: "0.72rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginTop: price ? 4 : 0
    }
  }, stub))));
}
Object.assign(__ds_scope, { Ticket });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Ticket.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label for status, category, or a playful call-out
 * ("Neu!", "Ausverkauft", "Jubiläum"). Comes in filled signal colors.
 */
function Badge({
  children,
  tone = "red",
  outline = false,
  ...rest
}) {
  const tones = {
    red: {
      bg: "var(--hz-red)",
      fg: "var(--hz-cream)",
      bd: "var(--hz-red)"
    },
    gold: {
      bg: "var(--hz-gold)",
      fg: "var(--hz-gold-shadow)",
      bd: "var(--hz-gold-deep)"
    },
    pink: {
      bg: "var(--hz-pink)",
      fg: "var(--hz-ink)",
      bd: "var(--hz-ink)"
    },
    ink: {
      bg: "var(--hz-ink)",
      fg: "var(--hz-cream)",
      bd: "var(--hz-ink)"
    }
  };
  const t = tones[tone] || tones.red;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-black)",
      fontSize: "0.75rem",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      color: outline ? t.bd : t.fg,
      background: outline ? "transparent" : t.bg,
      border: `2px solid ${t.bd}`,
      ...rest.style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary festival call-to-action. Chunky, pill-shaped, confident.
 * Variants: primary (red signal), gold (embossed jubilee), ghost (ink outline),
 * pink (soft). Optional hard "sticker" offset shadow.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  sticker = false,
  disabled = false,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: "0.875rem"
    },
    md: {
      padding: "12px 28px",
      fontSize: "1rem"
    },
    lg: {
      padding: "16px 40px",
      fontSize: "1.125rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--hz-red)",
      color: "var(--hz-cream)",
      border: "var(--border-w) solid var(--hz-red)"
    },
    gold: {
      background: "var(--hz-gold)",
      color: "var(--hz-gold-shadow)",
      border: "var(--border-w) solid var(--hz-gold-deep)",
      textShadow: "0 1px 0 var(--hz-gold-highlight)"
    },
    ghost: {
      background: "transparent",
      color: "var(--hz-ink)",
      border: "var(--border-w) solid var(--hz-ink)"
    },
    pink: {
      background: "var(--hz-pink)",
      color: "var(--hz-ink)",
      border: "var(--border-w) solid var(--hz-ink)"
    }
  };
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-black)",
      lineHeight: 1,
      textDecoration: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: sticker ? "var(--shadow-sticker)" : "none",
      transition: "transform var(--dur-fast) var(--ease-bounce), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = sticker ? "translate(-2px,-2px)" : "translateY(-2px)";
      if (sticker) e.currentTarget.style.boxShadow = "6px 6px 0 0 var(--hz-ink)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      if (sticker) e.currentTarget.style.boxShadow = "var(--shadow-sticker)";
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = sticker ? "translate(2px,2px)" : "translateY(1px) scale(0.98)";
      if (sticker) e.currentTarget.style.boxShadow = "0 0 0 0 var(--hz-ink)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = sticker ? "translate(-2px,-2px)" : "translateY(-2px)";
      if (sticker) e.currentTarget.style.boxShadow = "6px 6px 0 0 var(--hz-ink)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a rounded white content surface. Two looks:
 *  - "soft"    : subtle warm shadow (default, editorial)
 *  - "sticker" : chunky ink outline + hard offset shadow (playful/marketing)
 */
function Card({
  children,
  look = "soft",
  accent = false,
  ...rest
}) {
  const looks = {
    soft: {
      background: "var(--surface-card)",
      border: "2px solid var(--border-hairline)",
      boxShadow: "var(--shadow-card)"
    },
    sticker: {
      background: "var(--surface-card)",
      border: "var(--border-w-bold) solid var(--hz-ink)",
      boxShadow: "var(--shadow-sticker)"
    },
    flat: {
      background: "var(--surface-soft)",
      border: "2px solid var(--border-hairline)",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: "var(--pad-card)",
      borderTop: accent ? "6px solid var(--hz-red)" : undefined,
      ...looks[look],
      ...rest.style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — chunky rounded box with a red check. Playful spring on toggle.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-text)",
      fontSize: "1rem",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      userSelect: "none"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: "26px",
      height: "26px",
      flex: "0 0 auto",
      display: "grid",
      placeItems: "center",
      borderRadius: "8px",
      border: "2px solid var(--hz-ink)",
      background: on ? "var(--hz-red)" : "var(--surface-card)",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-bounce)",
      transform: on ? "scale(1)" : "scale(1)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      opacity: on ? 1 : 0,
      transform: on ? "scale(1)" : "scale(0.4)",
      transition: "all var(--dur-fast) var(--ease-bounce)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8.5L6.5 12.5L13.5 3.5",
    stroke: "var(--hz-cream)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — rounded text field with a bold label. Chunky border, red focus ring.
 */
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-text)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--fw-bold)",
      fontSize: "0.875rem",
      marginBottom: "6px",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: "100%",
      fontFamily: "var(--font-text)",
      fontSize: "1rem",
      color: "var(--text-body)",
      background: "var(--surface-card)",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: `2px solid ${error ? "var(--hz-red)" : focused ? "var(--hz-red)" : "var(--hz-ink)"}`,
      boxShadow: focused ? "0 0 0 4px rgba(235,57,21,0.18)" : "none",
      outline: "none",
      transition: "box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.75rem",
      marginTop: "6px",
      color: error ? "var(--hz-red)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/App.jsx
try { (() => {
/* global React */
// App — view switching + shared cart/toast state for the festival site.
function App() {
  const [view, setView] = React.useState("home");
  const [cart, setCart] = React.useState(0);
  const [toast, setToast] = React.useState("");
  const nav = v => {
    setView(v);
    window.scrollTo({
      top: 0
    });
  };
  const addToCart = title => {
    setCart(c => c + 1);
    setToast(`„${title}" im Warenkorb ◆`);
    clearTimeout(window.__hzToast);
    window.__hzToast = setTimeout(() => setToast(""), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--hz-pink)"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    cart: cart,
    onNav: nav,
    active: view
  }), view === "home" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Programm, null)), view === "programm" && /*#__PURE__*/React.createElement(Programm, null), view === "tickets" && /*#__PURE__*/React.createElement(Tickets, {
    onAdd: addToCart
  }), view === "rsvp" && /*#__PURE__*/React.createElement(Rsvp, null), /*#__PURE__*/React.createElement(Footer, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--hz-ink)",
      color: "var(--hz-cream)",
      fontWeight: 800,
      padding: "12px 22px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-lift)",
      zIndex: 100
    }
  }, toast));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Footer.jsx
try { (() => {
/* global React */
// Footer — gingham band, cream wordmark, and the essentials.
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--hz-gold-shadow)",
      padding: "48px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      gap: 32,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-gold.svg",
    alt: "Die Goldene HochZeit",
    style: {
      height: 60
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--hz-pink)",
      marginTop: 14,
      maxWidth: 360
    }
  }, "Das Jubil\xE4umsfestival. 26.\u201328. Juni 2026, auf der gro\xDFen Wiese. Kirmes trifft Trauung.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      flexWrap: "wrap"
    }
  }, [["Fest", ["Programm", "Tickets", "Anfahrt", "FAQ"]], ["Mitmachen", ["RSVP", "Trauung buchen", "Stand anmelden"]], ["Kontakt", ["hallo@goldenehochzeit.de", "Instagram", "Newsletter"]]].map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      color: "var(--hz-gold-highlight)",
      marginBottom: 10
    }
  }, head), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      color: "var(--hz-pink)",
      fontSize: 14,
      padding: "3px 0",
      cursor: "pointer"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "28px auto 0",
      paddingTop: 18,
      borderTop: "1px solid rgba(249,206,233,0.25)",
      color: "var(--hz-pink)",
      fontSize: 13,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Die Goldene HochZeit"), /*#__PURE__*/React.createElement("span", null, "Mit \u2764 und Gold gemacht"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Hero.jsx
try { (() => {
/* global React */
// Hero — the big embossed HOCHZEIT moment on a gingham band, with the
// handwritten '26 counterpoint and the primary CTA.
function Hero({
  onNav
}) {
  const {
    Button,
    Badge,
    Scatter
  } = window.DieGoldeneHochZeitDesignSystem_64a80b;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Scatter, {
    density: 16,
    seed: 7,
    color: "var(--hz-red)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 24px 56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    style: {
      marginBottom: 20
    }
  }, "Jubil\xE4umsfestival \xB7 26.\u201328. Juni 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block",
      padding: "28px 40px 40px",
      borderRadius: "var(--radius-xl)",
      border: "3px solid var(--hz-ink)",
      boxShadow: "var(--shadow-sticker)",
      backgroundColor: "#fff",
      backgroundImage: "repeating-linear-gradient(0deg,rgba(235,57,21,.5) 0 26px,transparent 26px 52px),repeating-linear-gradient(90deg,rgba(235,57,21,.5) 0 26px,transparent 26px 52px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hz-emboss",
    style: {
      fontSize: "clamp(3rem,10vw,7rem)",
      lineHeight: 0.9
    }
  }, "HOCHZEIT"), /*#__PURE__*/React.createElement("div", {
    className: "hz-script",
    style: {
      color: "var(--hz-red)",
      fontSize: "clamp(2.5rem,7vw,4.5rem)",
      marginTop: -8,
      textShadow: "0 2px 0 #fff"
    }
  }, "die goldene \xB7 seit \u201926")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620,
      margin: "28px auto 0",
      fontSize: "var(--fs-lead)",
      color: "var(--hz-ink)"
    }
  }, "Drei Tage Kirmes trifft Trauung. Trauungen im Stundentakt, goldene Lettern, rot-wei\xDFes Karo und ganz viel Herz. Feiern ohne falsche Zur\xFCckhaltung \u2014 das haben wir uns verdient."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    sticker: true,
    onClick: () => onNav("tickets")
  }, "Tickets sichern"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNav("programm")
  }, "Zum Programm"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Nav.jsx
try { (() => {
/* global React */
// Nav — sticky festival header with monogram, links, and a live cart pill.
function Nav({
  cart,
  onNav,
  active
}) {
  const {
    Button,
    Badge
  } = window.DieGoldeneHochZeitDesignSystem_64a80b;
  const links = [["home", "Start"], ["programm", "Programm"], ["tickets", "Tickets"], ["rsvp", "RSVP"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(249,206,233,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "2px solid var(--hz-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-monogram.svg",
    alt: "HochZeit",
    style: {
      height: 40,
      cursor: "pointer"
    },
    onClick: () => onNav("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      border: "none",
      background: active === id ? "var(--hz-ink)" : "transparent",
      color: active === id ? "var(--hz-cream)" : "var(--hz-ink)",
      fontFamily: "var(--font-text)",
      fontWeight: 800,
      fontSize: 15,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav("tickets")
  }, "Warenkorb"), cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -8,
      right: -8,
      minWidth: 22,
      height: 22,
      display: "grid",
      placeItems: "center",
      background: "var(--hz-red)",
      color: "var(--hz-cream)",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 800,
      border: "2px solid var(--hz-ink)"
    }
  }, cart)))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Programm.jsx
try { (() => {
/* global React */
// Programm — the festival schedule as act cards, with the "Purest enjoyment"
// illustration as a full-bleed editorial break.
function Programm() {
  const {
    Card,
    Badge
  } = window.DieGoldeneHochZeitDesignSystem_64a80b;
  const acts = [{
    day: "Freitag",
    time: "18:00",
    title: "Die große Trauung",
    where: "Hauptbühne",
    note: "Eröffnung mit Blaskapelle & Konfetti."
  }, {
    day: "Freitag",
    time: "21:00",
    title: "Kirmes-Disco",
    where: "Zelt Rot",
    note: "Schlager bis Techno, kein Urteil."
  }, {
    day: "Samstag",
    time: "14:00",
    title: "Standesamt im Stundentakt",
    where: "Pavillon Gold",
    note: "Echte Ja-Worte, jede Stunde neu."
  }, {
    day: "Samstag",
    time: "20:00",
    title: "Das Festbankett",
    where: "Lange Tafel",
    note: "Rot-weiß gedeckt, Salat mitbringen."
  }, {
    day: "Sonntag",
    time: "11:00",
    title: "Katerfrühstück",
    where: "Wiese",
    note: "Gold glänzt auch am Morgen."
  }, {
    day: "Sonntag",
    time: "16:00",
    title: "Der letzte Tanz",
    where: "Hauptbühne",
    note: "Bis die Lichter ausgehen."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hz-eyebrow",
    style: {
      textAlign: "center"
    }
  }, "Drei Tage \xB7 sechs H\xF6hepunkte"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontSize: "var(--fs-display)",
      marginBottom: 32
    }
  }, "Das Programm"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: 18
    }
  }, acts.map((a, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    look: "sticker",
    style: {
      padding: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, a.day), /*#__PURE__*/React.createElement(Badge, {
    tone: "ink",
    outline: true
  }, a.time)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 4px",
      fontSize: "1.35rem"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--hz-red)",
      fontSize: 14
    }
  }, a.where), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--text-muted)",
      fontSize: 15
    }
  }, a.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      background: "var(--hz-cream)",
      border: "3px solid var(--hz-ink)",
      borderRadius: "var(--radius-xl)",
      padding: "32px 40px",
      display: "flex",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/purest-enjoyment.svg",
    alt: "Purest enjoyment",
    style: {
      height: 220,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hz-eyebrow"
  }, "Purest enjoyment"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "2rem",
      margin: "6px 0 10px"
    }
  }, "Einfach mal loslassen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--hz-ink)",
      margin: 0
    }
  }, "Kein Dresscode, kein Sitzplan-Stress. Nur Gold, Karo und Leute, die sich freuen. Liebe wird hier nicht beworben \u2014 sie ist einfach da."))));
}
window.Programm = Programm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Programm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Rsvp.jsx
try { (() => {
/* global React */
// Rsvp — a sign-up form with validation and a celebratory success state.
function Rsvp() {
  const {
    Input,
    Checkbox,
    Button,
    Card
  } = window.DieGoldeneHochZeitDesignSystem_64a80b;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [salad, setSalad] = React.useState(true);
  const [err, setErr] = React.useState("");
  const [done, setDone] = React.useState(false);
  const submit = () => {
    if (!name.trim() || !email.includes("@")) {
      setErr(!name.trim() ? "Bitte Namen angeben" : "Gültige E-Mail bitte");
      return;
    }
    setErr("");
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      padding: "56px 24px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hz-eyebrow",
    style: {
      textAlign: "center"
    }
  }, "Sag zu"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontSize: "var(--fs-display)",
      marginBottom: 28
    }
  }, "Bist du dabei?"), /*#__PURE__*/React.createElement(Card, {
    look: "sticker",
    style: {
      padding: "var(--sp-6)"
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/heart-gold.png",
    alt: "",
    style: {
      height: 96
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.8rem",
      margin: "8px 0 6px"
    }
  }, "Ja, ", name, "! \u25C6"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Wir haben dich auf die G\xE4steliste gesetzt. Dein Ticket kommt an ", email, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setDone(false)
  }, "Noch jemanden anmelden"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Dein Name",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Wie hei\xDFt du?",
    error: err.includes("Namen") ? err : ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-Mail",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "du@fest.de",
    hint: "Dein Ticket kommt hierhin",
    error: err.includes("mail") ? err : ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ich bringe einen Salat mit",
    checked: salad,
    onChange: setSalad
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    sticker: true,
    onClick: submit,
    style: {
      width: "100%"
    }
  }, "Zusagen \u25C6"))));
}
window.Rsvp = Rsvp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Rsvp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/festival-site/Tickets.jsx
try { (() => {
/* global React */
// Tickets — pricing tiers as brand Ticket objects with a working add-to-cart.
function Tickets({
  onAdd
}) {
  const {
    Ticket,
    Button,
    Badge
  } = window.DieGoldeneHochZeitDesignSystem_64a80b;
  const tiers = [{
    eyebrow: "Tagesticket",
    title: "Ein Tag Fest",
    meta: "Freitag, Samstag oder Sonntag",
    price: "€49",
    stub: "1 Tag"
  }, {
    eyebrow: "Wochenende",
    title: "Das ganze Fest",
    meta: "Fr–So · alle Bühnen · Festbankett",
    price: "€119",
    stub: "3 Tage",
    featured: true
  }, {
    eyebrow: "Trauzeuge",
    title: "VIP am Standesamt",
    meta: "Beste Plätze · Gold-Lounge · Sekt",
    price: "€199",
    stub: "VIP"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hz-eyebrow",
    style: {
      textAlign: "center"
    }
  }, "Rei\xDF dir eins ab"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontSize: "var(--fs-display)",
      marginBottom: 32
    }
  }, "Tickets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative"
    }
  }, t.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -12,
      left: 20,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Beliebteste Wahl \u25C6")), /*#__PURE__*/React.createElement(Ticket, {
    tone: t.featured ? "red" : "cream",
    eyebrow: t.eyebrow,
    title: t.title,
    meta: t.meta,
    price: t.price,
    stub: t.stub
  }, /*#__PURE__*/React.createElement(Button, {
    variant: t.featured ? "gold" : "primary",
    size: "sm",
    onClick: () => onAdd(t.title)
  }, "In den Warenkorb"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--text-muted)",
      marginTop: 24,
      fontSize: 14
    }
  }, "Alle Preise inkl. Konfetti. Kinder bis 12 tanzen kostenlos."));
}
window.Tickets = Tickets;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/festival-site/Tickets.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Gingham = __ds_scope.Gingham;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Scatter = __ds_scope.Scatter;

__ds_ns.Ticket = __ds_scope.Ticket;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
