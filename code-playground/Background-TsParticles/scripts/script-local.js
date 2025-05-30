/*! tsParticles v2.1.4 by Matteo Bruni */
/*! Original Link - https://cdn.jsdelivr.net/npm/tsparticles@2.1.4/tsparticles.bundle.min.js */
! function(t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else { var i = e(); for (var o in i)("object" == typeof exports ? exports : t)[o] = i[o] }
}(this, (() => (() => {
	"use strict";
	var t = {
			939: () => {
				! function() {
					try {
						if ("undefined" == typeof window) return;
						"SVGPathSeg" in window || (window.SVGPathSeg = function(t, e, i) { this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = i }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function() { this._owningPathSegList && this._owningPathSegList.segmentChanged(this) }, window.SVGPathSegClosePath = function(t) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t) }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]" }, window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter }, window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(void 0) }, window.SVGPathSegMovetoAbs = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = i }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]" }, window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegMovetoRel = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = i }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]" }, window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoAbs = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = i }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]" }, window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoRel = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = i }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]" }, window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoCubicAbs = function(t, e, i, o, n, s, a) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n, this._x2 = s, this._y2 = a }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]" }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2) }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1 }, set: function(t) { this._x1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1 }, set: function(t) { this._y1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2 }, set: function(t) { this._x2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2 }, set: function(t) { this._y2 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoCubicRel = function(t, e, i, o, n, s, a) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n, this._x2 = s, this._y2 = a }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]" }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2) }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1 }, set: function(t) { this._x1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1 }, set: function(t) { this._y1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2 }, set: function(t) { this._x2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2 }, set: function(t) { this._y2 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticAbs = function(t, e, i, o, n) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]" }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1) }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1 }, set: function(t) { this._x1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1 }, set: function(t) { this._y1 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticRel = function(t, e, i, o, n) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = i, this._x1 = o, this._y1 = n }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]" }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1) }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1 }, set: function(t) { this._x1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1 }, set: function(t) { this._y1 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegArcAbs = function(t, e, i, o, n, s, a, r) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = i, this._r1 = o, this._r2 = n, this._angle = s, this._largeArcFlag = a, this._sweepFlag = r }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]" }, window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y }, window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag) }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1 }, set: function(t) { this._r1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2 }, set: function(t) { this._r2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle }, set: function(t) { this._angle = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag }, set: function(t) { this._largeArcFlag = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag }, set: function(t) { this._sweepFlag = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegArcRel = function(t, e, i, o, n, s, a, r) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = i, this._r1 = o, this._r2 = n, this._angle = s, this._largeArcFlag = a, this._sweepFlag = r }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]" }, window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y }, window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag) }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1 }, set: function(t) { this._r1 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2 }, set: function(t) { this._r2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle }, set: function(t) { this._angle = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag }, set: function(t) { this._largeArcFlag = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag }, set: function(t) { this._sweepFlag = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalAbs = function(t, e) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]" }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x) }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoHorizontalRel = function(t, e) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]" }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x) }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoVerticalAbs = function(t, e) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]" }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y) }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegLinetoVerticalRel = function(t, e) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]" }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(void 0, this._y) }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothAbs = function(t, e, i, o, n) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = i, this._x2 = o, this._y2 = n }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]" }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2) }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2 }, set: function(t) { this._x2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2 }, set: function(t) { this._y2 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoCubicSmoothRel = function(t, e, i, o, n) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = i, this._x2 = o, this._y2 = n }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]" }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2) }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2 }, set: function(t) { this._x2 = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2 }, set: function(t) { this._y2 = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = i }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]" }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathSegCurvetoQuadraticSmoothRel = function(t, e, i) { window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = i }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]" }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y) }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x }, set: function(t) { this._x = t, this._segmentChanged() }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y }, set: function(t) { this._y = t, this._segmentChanged() }, enumerable: !0 }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(void 0) }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(t, e) { return new window.SVGPathSegMovetoAbs(void 0, t, e) }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(t, e) { return new window.SVGPathSegMovetoRel(void 0, t, e) }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(t, e) { return new window.SVGPathSegLinetoAbs(void 0, t, e) }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(t, e) { return new window.SVGPathSegLinetoRel(void 0, t, e) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(t, e, i, o, n, s) { return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, i, o, n, s) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(t, e, i, o, n, s) { return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, i, o, n, s) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(t, e, i, o) { return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, i, o) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(t, e, i, o) { return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, i, o) }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(t, e, i, o, n, s, a) { return new window.SVGPathSegArcAbs(void 0, t, e, i, o, n, s, a) }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function(t, e, i, o, n, s, a) { return new window.SVGPathSegArcRel(void 0, t, e, i, o, n, s, a) }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(t) { return new window.SVGPathSegLinetoHorizontalAbs(void 0, t) }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(t) { return new window.SVGPathSegLinetoHorizontalRel(void 0, t) }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(t) { return new window.SVGPathSegLinetoVerticalAbs(void 0, t) }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(t) { return new window.SVGPathSegLinetoVerticalRel(void 0, t) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(t, e, i, o) { return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, i, o) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(t, e, i, o) { return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, i, o) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(t, e) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e) }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(t, e) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e) }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function(t) {
							if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
							const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
							e.setAttribute("d", this.getAttribute("d"));
							let i = e.pathSegList.numberOfItems - 1;
							if (i <= 0) return 0;
							do {
								if (e.pathSegList.removeItem(i), t > e.getTotalLength()) break;
								i--
							} while (i > 0);
							return i
						})), "SVGPathSegList" in window && "appendItem" in window.SVGPathSegList.prototype || (window.SVGPathSegList = function(t) { this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = { attributes: !0, attributeFilter: ["d"] }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig) }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", { get: function() { return this._checkPathSynchronizedToList(), this._list.length }, enumerable: !0 }), Object.defineProperty(window.SVGPathSegList.prototype, "length", { get: function() { return this._checkPathSynchronizedToList(), this._list.length }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", { get: function() { return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList }, enumerable: !0 }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList }, enumerable: !0 }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() { this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords()) }, window.SVGPathSegList.prototype._updateListFromPathMutations = function(t) {
							if (!this._pathElement) return;
							let e = !1;
							t.forEach((function(t) { "d" == t.attributeName && (e = !0) })), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
						}, window.SVGPathSegList.prototype._writeListToPath = function() { this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig) }, window.SVGPathSegList.prototype.segmentChanged = function(t) { this._writeListToPath() }, window.SVGPathSegList.prototype.clear = function() { this._checkPathSynchronizedToList(), this._list.forEach((function(t) { t._owningPathSegList = null })), this._list = [], this._writeListToPath() }, window.SVGPathSegList.prototype.initialize = function(t) { return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t }, window.SVGPathSegList.prototype._checkValidIndex = function(t) { if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR" }, window.SVGPathSegList.prototype.getItem = function(t) { return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t] }, window.SVGPathSegList.prototype.insertItemBefore = function(t, e) { return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t }, window.SVGPathSegList.prototype.replaceItem = function(t, e) { return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t }, window.SVGPathSegList.prototype.removeItem = function(t) { this._checkPathSynchronizedToList(), this._checkValidIndex(t); const e = this._list[t]; return this._list.splice(t, 1), this._writeListToPath(), e }, window.SVGPathSegList.prototype.appendItem = function(t) { return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t }, window.SVGPathSegList._pathSegArrayAsString = function(t) {
							let e = "",
								i = !0;
							return t.forEach((function(t) { i ? (i = !1, e += t._asPathString()) : e += " " + t._asPathString() })), e
						}, window.SVGPathSegList.prototype._parsePath = function(t) {
							if (!t || 0 == t.length) return [];
							const e = this,
								i = function() { this.pathSegList = [] };
							i.prototype.appendSegment = function(t) { this.pathSegList.push(t) };
							const o = function(t) { this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces() };
							o.prototype._isCurrentSpace = function() { const t = this._string[this._currentIndex]; return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t) }, o.prototype._skipOptionalSpaces = function() { for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++; return this._currentIndex < this._endIndex }, o.prototype._skipOptionalSpacesOrDelimiter = function() { return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex) }, o.prototype.hasMoreData = function() { return this._currentIndex < this._endIndex }, o.prototype.peekSegmentType = function() { const t = this._string[this._currentIndex]; return this._pathSegTypeFromChar(t) }, o.prototype._pathSegTypeFromChar = function(t) {
								switch (t) {
									case "Z":
									case "z":
										return window.SVGPathSeg.PATHSEG_CLOSEPATH;
									case "M":
										return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
									case "m":
										return window.SVGPathSeg.PATHSEG_MOVETO_REL;
									case "L":
										return window.SVGPathSeg.PATHSEG_LINETO_ABS;
									case "l":
										return window.SVGPathSeg.PATHSEG_LINETO_REL;
									case "C":
										return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
									case "c":
										return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
									case "Q":
										return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
									case "q":
										return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
									case "A":
										return window.SVGPathSeg.PATHSEG_ARC_ABS;
									case "a":
										return window.SVGPathSeg.PATHSEG_ARC_REL;
									case "H":
										return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
									case "h":
										return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
									case "V":
										return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
									case "v":
										return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
									case "S":
										return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
									case "s":
										return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
									case "T":
										return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
									case "t":
										return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
									default:
										return window.SVGPathSeg.PATHSEG_UNKNOWN
								}
							}, o.prototype._nextCommandHelper = function(t, e) { return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN }, o.prototype.initialCommandIsMoveTo = function() { if (!this.hasMoreData()) return !0; const t = this.peekSegmentType(); return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL }, o.prototype._parseNumber = function() {
								let t = 0,
									e = 0,
									i = 1,
									o = 0,
									n = 1,
									s = 1;
								const a = this._currentIndex;
								if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, n = -1), this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex)) return;
								const r = this._currentIndex;
								for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
								if (this._currentIndex != r) {
									let t = this._currentIndex - 1,
										i = 1;
									for (; t >= r;) e += i * (this._string.charAt(t--) - "0"), i *= 10
								}
								if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) { if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return; for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) i *= 10, o += (this._string.charAt(this._currentIndex) - "0") / i, this._currentIndex += 1 }
								if (this._currentIndex != a && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) { if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, s = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return; for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++ }
								let l = e + o;
								return l *= n, t && (l *= Math.pow(10, s * t)), a != this._currentIndex ? (this._skipOptionalSpacesOrDelimiter(), l) : void 0
							}, o.prototype._parseArcFlag = function() {
								if (this._currentIndex >= this._endIndex) return;
								let t = !1;
								const e = this._string.charAt(this._currentIndex++);
								if ("0" == e) t = !1;
								else {
									if ("1" != e) return;
									t = !0
								}
								return this._skipOptionalSpacesOrDelimiter(), t
							}, o.prototype.parseSegment = function() {
								const t = this._string[this._currentIndex];
								let i, o = this._pathSegTypeFromChar(t);
								if (o == window.SVGPathSeg.PATHSEG_UNKNOWN) { if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null; if (o = this._nextCommandHelper(t, this._previousCommand), o == window.SVGPathSeg.PATHSEG_UNKNOWN) return null } else this._currentIndex++;
								switch (this._previousCommand = o, o) {
									case window.SVGPathSeg.PATHSEG_MOVETO_REL:
										return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
										return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_REL:
										return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_ABS:
										return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
										return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
										return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
										return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());
									case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
										return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());
									case window.SVGPathSeg.PATHSEG_CLOSEPATH:
										return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);
									case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicRel(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);
									case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicAbs(e, i.x, i.y, i.x1, i.y1, i.x2, i.y2);
									case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
										return i = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicSmoothRel(e, i.x, i.y, i.x2, i.y2);
									case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
										return i = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoCubicSmoothAbs(e, i.x, i.y, i.x2, i.y2);
									case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoQuadraticRel(e, i.x, i.y, i.x1, i.y1);
									case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegCurvetoQuadraticAbs(e, i.x, i.y, i.x1, i.y1);
									case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
										return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
										return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());
									case window.SVGPathSeg.PATHSEG_ARC_REL:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegArcRel(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);
									case window.SVGPathSeg.PATHSEG_ARC_ABS:
										return i = { x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber() }, new window.SVGPathSegArcAbs(e, i.x, i.y, i.x1, i.y1, i.arcAngle, i.arcLarge, i.arcSweep);
									default:
										throw "Unknown path seg type."
								}
							};
							const n = new i,
								s = new o(t);
							if (!s.initialCommandIsMoveTo()) return [];
							for (; s.hasMoreData();) {
								const t = s.parseSegment();
								if (!t) return [];
								n.appendSegment(t)
							}
							return n.pathSegList
						})
					} catch (t) { console.warn("An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles", t) }
				}()
			}
		},
		e = {};

	function i(o) { var n = e[o]; if (void 0 !== n) return n.exports; var s = e[o] = { exports: {} }; return t[o](s, s.exports, i), s.exports } i.d = (t, e) => { for (var o in e) i.o(e, o) && !i.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] }) }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) };
	var o = {};
	return (() => {
		i.r(o), i.d(o, { AnimatableColor: () => Ne, AnimatableGradient: () => Ze, AnimatableGradientColor: () => We, AnimationOptions: () => gi, Attract: () => pe, Background: () => ne, BackgroundMask: () => ae, BackgroundMaskCover: () => se, Bounce: () => ve, Bubble: () => we, BubbleBase: () => ye, BubbleDiv: () => fe, Canvas: () => Kt, Circle: () => no, CircleWarp: () => ao, ClickEvent: () => le, Collisions: () => ei, CollisionsOverlap: () => Xe, ColorAnimation: () => Fe, Connect: () => me, ConnectLinks: () => ge, Container: () => bo, Destroy: () => si, DivEvent: () => ce, Engine: () => zo, EventListeners: () => ee, Events: () => ue, ExternalInteractorBase: () => Lo, FrameManager: () => ie, FullScreen: () => re, Grab: () => Se, GrabLinks: () => be, GradientAngle: () => $e, GradientAngleAnimation: () => Qe, GradientColorOpacity: () => Ue, GradientColorOpacityAnimation: () => qe, HoverEvent: () => de, HslAnimation: () => Be, InteractionManager: () => Zi, Interactivity: () => Re, Light: () => Ce, LightArea: () => _e, LightGradient: () => Pe, LightShadow: () => xe, Links: () => li, LinksShadow: () => ai, LinksTriangle: () => ri, Loader: () => Co, Main: () => zo, ManualParticle: () => ze, Modes: () => Me, Motion: () => Ie, MotionReduce: () => Le, Move: () => wi, MoveAngle: () => ci, MoveAttract: () => hi, MoveGravity: () => di, MovePath: () => pi, MovePathDelay: () => ui, MoveTrail: () => vi, Opacity: () => bi, OpacityAnimation: () => mi, Options: () => Ui, OptionsColor: () => oe, OutModes: () => yi, Parallax: () => he, Particle: () => eo, Particles: () => uo, ParticlesBounce: () => ti, ParticlesBounceFactor: () => Ke, ParticlesDensity: () => Si, ParticlesInteractorBase: () => Io, ParticlesNumber: () => Pi, ParticlesOptions: () => Li, ParticlesRepulse: () => _i, Plugins: () => Vo, Point: () => io, Push: () => Ae, QuadTree: () => ro, Range: () => oo, Rectangle: () => so, Remove: () => Ee, Repulse: () => Ge, RepulseBase: () => Ve, RepulseDiv: () => Te, Responsive: () => He, Retina: () => po, Rotate: () => Ci, RotateAnimation: () => xi, Shadow: () => Ai, Shape: () => Ei, Size: () => Ti, SizeAnimation: () => Vi, Slow: () => Oe, Spin: () => fi, Split: () => ni, SplitFactor: () => ii, SplitRate: () => oi, Stroke: () => Gi, Theme: () => je, ThemeDefault: () => De, Trail: () => ke, ValueWithRandom: () => Je, Vector: () => a, Vector3d: () => Xi, ZIndex: () => Oi, alterHsl: () => $t, animate: () => T, areBoundsInside: () => L, arrayRandomIndex: () => M, calcEasing: () => b, calcExactPositionOrRandomFromSize: () => x, calcExactPositionOrRandomFromSizeRanged: () => C, calcPositionFromSize: () => S, calcPositionOrRandomFromSize: () => P, calcPositionOrRandomFromSizeRanged: () => _, calculateBounds: () => I, cancelAnimation: () => G, circleBounce: () => q, circleBounceDataFromParticle: () => N, clamp: () => r, clear: () => jt, collisionVelocity: () => m, colorMix: () => Ot, colorToHsl: () => ut, colorToRgb: () => dt, deepExtend: () => H, divMode: () => B, divModeExecute: () => j, drawEllipse: () => Qt, drawLine: () => It, drawParticle: () => Bt, drawParticlePlugin: () => Wt, drawPlugin: () => Ut, drawShape: () => Nt, drawShapeAfterEffect: () => qt, drawTriangle: () => Ht, generatedAttribute: () => W, getDistance: () => f, getDistances: () => y, getHslAnimationFromHsl: () => zt, getHslFromAnimation: () => Rt, getLinkColor: () => kt, getLinkRandomColor: () => Mt, getParticleBaseVelocity: () => g, getParticleDirectionAngle: () => w, getRandomRgbColor: () => Et, getRangeMax: () => u, getRangeMin: () => d, getRangeValue: () => h, getStyleFromHsl: () => Tt, getStyleFromHsv: () => Gt, getStyleFromRgb: () => Vt, getValue: () => v, gradient: () => Ft, hslToHsv: () => mt, hslToRgb: () => wt, hslaToHsva: () => bt, hslaToRgba: () => gt, hsvToHsl: () => St, hsvToRgb: () => _t, hsvaToHsla: () => Pt, hsvaToRgba: () => xt, isDivModeEnabled: () => D, isInArray: () => O, isPointInside: () => z, isSsr: () => V, itemFromArray: () => R, loadFont: () => k, loadFull: () => Ks, loadOptions: () => Ii, loadParticlesOptions: () => Hi, loadSlim: () => Ns, midColorValue: () => $, mix: () => l, mouseDownEvent: () => X, mouseLeaveEvent: () => et, mouseMoveEvent: () => J, mouseOutEvent: () => it, mouseUpEvent: () => Y, noPolygonDataLoaded: () => at, noPolygonFound: () => rt, paintBase: () => Dt, randomColorValue: () => Q, randomInRange: () => c, rangeColorToHsl: () => pt, rangeColorToRgb: () => ht, rectBounce: () => U, resizeEvent: () => nt, rgbToHsl: () => vt, rgbToHsv: () => Ct, rgbaToHsva: () => At, setRangeValue: () => p, singleDivModeExecute: () => F, stringToAlpha: () => yt, stringToRgb: () => ft, touchCancelEvent: () => ot, touchEndEvent: () => Z, touchMoveEvent: () => tt, touchStartEvent: () => K, tsParticles: () => Ho, visibilityChangeEvent: () => st });
		var t, e = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			n = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class s {
			constructor() { t.set(this, void 0), e(this, t, new Map, "f") } addEventListener(e, i) {
				var o;
				this.removeEventListener(e, i), n(this, t, "f").get(e) || n(this, t, "f").set(e, []), null === (o = n(this, t, "f").get(e)) || void 0 === o || o.push(i)
			}
			dispatchEvent(e, i) {
				var o;
				null === (o = n(this, t, "f").get(e)) || void 0 === o || o.forEach((t => t(i)))
			}
			hasEventListener(e) { return !!n(this, t, "f").get(e) } removeAllEventListeners(i) { i ? n(this, t, "f").delete(i) : e(this, t, new Map, "f") } removeEventListener(e, i) {
				const o = n(this, t, "f").get(e);
				if (!o) return;
				const s = o.length,
					a = o.indexOf(i);
				a < 0 || (1 === s ? n(this, t, "f").delete(e) : o.splice(a, 1))
			}
		}
		t = new WeakMap;
		class a {
			constructor(t, e) {
				if ("number" != typeof t && t) this.x = t.x, this.y = t.y;
				else {
					if (void 0 === t || void 0 === e) throw new Error("tsParticles - Vector not initialized correctly");
					this.x = t, this.y = e
				}
			}
			static get origin() { return a.create(0, 0) } get angle() { return Math.atan2(this.y, this.x) } set angle(t) { this.updateFromAngle(t, this.length) } get length() { return Math.sqrt(this.getLengthSq()) } set length(t) { this.updateFromAngle(this.angle, t) } static clone(t) { return a.create(t.x, t.y) } static create(t, e) { return new a(t, e) } add(t) { return a.create(this.x + t.x, this.y + t.y) } addTo(t) { this.x += t.x, this.y += t.y } copy() { return a.clone(this) } distanceTo(t) { return this.sub(t).length } distanceToSq(t) { return this.sub(t).getLengthSq() } div(t) { return a.create(this.x / t, this.y / t) } divTo(t) { this.x /= t, this.y /= t } getLengthSq() { return this.x ** 2 + this.y ** 2 } manhattanDistanceTo(t) { return Math.abs(t.x - this.x) + Math.abs(t.y - this.y) } mult(t) { return a.create(this.x * t, this.y * t) } multTo(t) { this.x *= t, this.y *= t } rotate(t) { return a.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t)) } setTo(t) { this.x = t.x, this.y = t.y } sub(t) { return a.create(this.x - t.x, this.y - t.y) } subFrom(t) { this.x -= t.x, this.y -= t.y } updateFromAngle(t, e) { this.x = Math.cos(t) * e, this.y = Math.sin(t) * e }
		}

		function r(t, e, i) { return Math.min(Math.max(t, e), i) }

		function l(t, e, i, o) { return Math.floor((t * i + e * o) / (i + o)) }

		function c(t) { const e = u(t); let i = d(t); return e === i && (i = 0), Math.random() * (e - i) + i }

		function h(t) { return "number" == typeof t ? t : c(t) }

		function d(t) { return "number" == typeof t ? t : t.min }

		function u(t) { return "number" == typeof t ? t : t.max }

		function p(t, e) {
			if (t === e || void 0 === e && "number" == typeof t) return t;
			const i = d(t),
				o = u(t);
			return void 0 !== e ? { min: Math.min(i, e), max: Math.max(o, e) } : p(i, o)
		}

		function v(t) {
			const e = t.random,
				{ enable: i, minimumValue: o } = "boolean" == typeof e ? { enable: e, minimumValue: 0 } : e;
			return h(i ? p(t.value, o) : t.value)
		}

		function y(t, e) {
			const i = t.x - e.x,
				o = t.y - e.y;
			return { dx: i, dy: o, distance: Math.sqrt(i * i + o * o) }
		}

		function f(t, e) { return y(t, e).distance }

		function w(t, e, i) {
			if ("number" == typeof t) return t * Math.PI / 180;
			switch (t) {
				case "top":
					return -Math.PI / 2;
				case "top-right":
					return -Math.PI / 4;
				case "right":
					return 0;
				case "bottom-right":
					return Math.PI / 4;
				case "bottom":
					return Math.PI / 2;
				case "bottom-left":
					return 3 * Math.PI / 4;
				case "left":
					return Math.PI;
				case "top-left":
					return -3 * Math.PI / 4;
				case "inside":
					return Math.atan2(i.y - e.y, i.x - e.x);
				case "outside":
					return Math.atan2(e.y - i.y, e.x - i.x);
				default:
					return Math.random() * Math.PI * 2
			}
		}

		function g(t) { const e = a.origin; return e.length = 1, e.angle = t, e }

		function m(t, e, i, o) { return a.create(t.x * (i - o) / (i + o) + 2 * e.x * o / (i + o), t.y) }

		function b(t, e) {
			switch (e) {
				case "ease-out-quad":
					return 1 - (1 - t) ** 2;
				case "ease-out-cubic":
					return 1 - (1 - t) ** 3;
				case "ease-out-quart":
					return 1 - (1 - t) ** 4;
				case "ease-out-quint":
					return 1 - (1 - t) ** 5;
				case "ease-out-expo":
					return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
				case "ease-out-sine":
					return Math.sin(t * Math.PI / 2);
				case "ease-out-back": { const e = 1.70158; return 1 + (e + 1) * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2) }
				case "ease-out-circ":
					return Math.sqrt(1 - Math.pow(t - 1, 2));
				default:
					return t
			}
		}

		function S(t) { var e, i; return void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y) ? { x: t.position.x * t.size.width / 100, y: t.position.y * t.size.height / 100 } : void 0 }

		function P(t) { var e, i, o, n; return { x: (null !== (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : 100 * Math.random()) * t.size.width / 100, y: (null !== (n = null === (o = t.position) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : 100 * Math.random()) * t.size.height / 100 } }

		function _(t) { var e, i; const o = { x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? h(t.position.x) : void 0, y: void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y) ? h(t.position.y) : void 0 }; return P({ size: t.size, position: o }) }

		function x(t) { var e, i, o, n; return { x: null !== (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : Math.random() * t.size.width, y: null !== (n = null === (o = t.position) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : Math.random() * t.size.height } }

		function C(t) { var e, i; const o = { x: void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.x) ? h(t.position.x) : void 0, y: void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.y) ? h(t.position.y) : void 0 }; return x({ size: t.size, position: o }) }

		function A(t, e, i, o, n, s) { const a = { bounced: !1 }; return e.min < o.min || e.min > o.max || e.max < o.min || e.max > o.max || (t.max >= i.min && t.max <= (i.max + i.min) / 2 && n > 0 || t.min <= i.max && t.min > (i.max + i.min) / 2 && n < 0) && (a.velocity = n * -s, a.bounced = !0), a }

		function E(t, e) {
			if (!(e instanceof Array)) return t.matches(e);
			for (const i of e)
				if (t.matches(i)) return !0;
			return !1
		}

		function V() { return "undefined" == typeof window || !window || void 0 === window.document || !window.document }

		function T() { return V() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t) }

		function G() { return V() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t) }

		function O(t, e) { return t === e || e instanceof Array && e.indexOf(t) > -1 } async function k(t, e) { try { await document.fonts.load(`${null!=e?e:"400"} 36px '${null!=t?t:"Verdana"}'`) } catch (t) {} }

		function M(t) { return Math.floor(Math.random() * t.length) }

		function R(t, e, i = !0) { return t[void 0 !== e && i ? e % t.length : M(t)] }

		function z(t, e, i, o, n) { return L(I(t, null != o ? o : 0), e, i, n) }

		function L(t, e, i, o) { let n = !0; return o && "bottom" !== o || (n = t.top < e.height + i.x), !n || o && "left" !== o || (n = t.right > i.x), !n || o && "right" !== o || (n = t.left < e.width + i.y), !n || o && "top" !== o || (n = t.bottom > i.y), n }

		function I(t, e) { return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e } }

		function H(t, ...e) {
			for (const i of e) {
				if (null == i) continue;
				if ("object" != typeof i) { t = i; continue }
				const e = Array.isArray(i);
				!e || "object" == typeof t && t && Array.isArray(t) ? e || "object" == typeof t && t && !Array.isArray(t) || (t = {}) : t = [];
				for (const e in i) {
					if ("__proto__" === e) continue;
					const o = i[e],
						n = "object" == typeof o,
						s = t;
					s[e] = n && Array.isArray(o) ? o.map((t => H(s[e], t))) : H(s[e], o)
				}
			}
			return t
		}

		function D(t, e) { return e instanceof Array ? !!e.find((e => e.enable && O(t, e.mode))) : O(t, e.mode) }

		function j(t, e, i) {
			if (e instanceof Array)
				for (const o of e) {
					const e = o.mode;
					o.enable && O(t, e) && F(o, i)
				} else {
					const o = e.mode;
					e.enable && O(t, o) && F(e, i)
				}
		}

		function F(t, e) {
			const i = t.selectors;
			if (i instanceof Array)
				for (const o of i) e(o, t);
			else e(i, t)
		}

		function B(t, e) { if (e && t) return t instanceof Array ? t.find((t => E(e, t.selectors))) : E(e, t.selectors) ? t : void 0 }

		function N(t) { return { position: t.getPosition(), radius: t.getRadius(), mass: t.getMass(), velocity: t.velocity, factor: a.create(v(t.options.bounce.horizontal), v(t.options.bounce.vertical)) } }

		function q(t, e) {
			const { x: i, y: o } = t.velocity.sub(e.velocity), [n, s] = [t.position, e.position], { dx: a, dy: r } = y(s, n);
			if (i * a + o * r < 0) return;
			const l = -Math.atan2(r, a),
				c = t.mass,
				h = e.mass,
				d = t.velocity.rotate(l),
				u = e.velocity.rotate(l),
				p = m(d, u, c, h),
				v = m(u, d, c, h),
				f = p.rotate(-l),
				w = v.rotate(-l);
			t.velocity.x = f.x * t.factor.x, t.velocity.y = f.y * t.factor.y, e.velocity.x = w.x * e.factor.x, e.velocity.y = w.y * e.factor.y
		}

		function U(t, e) {
			const i = I(t.getPosition(), t.getRadius()),
				o = A({ min: i.left, max: i.right }, { min: i.top, max: i.bottom }, { min: e.left, max: e.right }, { min: e.top, max: e.bottom }, t.velocity.x, v(t.options.bounce.horizontal));
			o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
			const n = A({ min: i.top, max: i.bottom }, { min: i.left, max: i.right }, { min: e.top, max: e.bottom }, { min: e.left, max: e.right }, t.velocity.y, v(t.options.bounce.vertical));
			n.bounced && (void 0 !== n.velocity && (t.velocity.y = n.velocity), void 0 !== n.position && (t.position.y = n.position))
		}
		const W = "generated",
			Q = "random",
			$ = "mid",
			Z = "touchend",
			X = "mousedown",
			Y = "mouseup",
			J = "mousemove",
			K = "touchstart",
			tt = "touchmove",
			et = "mouseleave",
			it = "mouseout",
			ot = "touchcancel",
			nt = "resize",
			st = "visibilitychange",
			at = "No polygon data loaded.",
			rt = "No polygon found, you need to specify SVG url in config.";

		function lt(t, e, i) { return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t }

		function ct(t) {
			if (t.startsWith("rgb")) { const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t); return e ? { a: e.length > 4 ? parseFloat(e[5]) : 1, b: parseInt(e[3], 10), g: parseInt(e[2], 10), r: parseInt(e[1], 10) } : void 0 }
			if (t.startsWith("hsl")) { const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t); return e ? gt({ a: e.length > 4 ? parseFloat(e[5]) : 1, h: parseInt(e[1], 10), l: parseInt(e[3], 10), s: parseInt(e[2], 10) }) : void 0 }
			if (t.startsWith("hsv")) { const e = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t); return e ? xt({ a: e.length > 4 ? parseFloat(e[5]) : 1, h: parseInt(e[1], 10), s: parseInt(e[2], 10), v: parseInt(e[3], 10) }) : void 0 } {
				const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
					i = t.replace(e, ((t, e, i, o, n) => e + e + i + i + o + o + (void 0 !== n ? n + n : ""))),
					o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
				return o ? { a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1, b: parseInt(o[3], 16), g: parseInt(o[2], 16), r: parseInt(o[1], 16) } : void 0
			}
		}

		function ht(t, e, i = !0) {
			var o, n, s;
			if (void 0 === t) return;
			const a = "string" == typeof t ? { value: t } : t;
			if ("string" == typeof a.value) return dt(a.value, e, i);
			if (a.value instanceof Array) return ht({ value: R(a.value, e, i) });
			const r = a.value,
				l = null !== (o = r.rgb) && void 0 !== o ? o : a.value;
			if (void 0 !== l.r) return { r: h(l.r), g: h(l.g), b: h(l.b) };
			const c = null !== (n = r.hsl) && void 0 !== n ? n : a.value;
			if (void 0 !== c.h && void 0 !== c.l) return wt({ h: h(c.h), l: h(c.l), s: h(c.s) });
			const d = null !== (s = r.hsv) && void 0 !== s ? s : a.value;
			if (void 0 !== d.h && void 0 !== d.v) { return _t({ h: h(d.h), s: h(d.s), v: h(d.v) }) }
		}

		function dt(t, e, i = !0) {
			var o, n, s;
			if (void 0 === t) return;
			const a = "string" == typeof t ? { value: t } : t;
			if ("string" == typeof a.value) return a.value === Q ? Et() : ft(a.value);
			if (a.value instanceof Array) return dt({ value: R(a.value, e, i) });
			const r = a.value,
				l = null !== (o = r.rgb) && void 0 !== o ? o : a.value;
			if (void 0 !== l.r) return l;
			const c = null !== (n = r.hsl) && void 0 !== n ? n : a.value;
			if (void 0 !== c.h && void 0 !== c.l) return wt(c);
			const h = null !== (s = r.hsv) && void 0 !== s ? s : a.value;
			return void 0 !== h.h && void 0 !== h.v ? _t(h) : void 0
		}

		function ut(t, e, i = !0) { const o = dt(t, e, i); return void 0 !== o ? vt(o) : void 0 }

		function pt(t, e, i = !0) { const o = ht(t, e, i); return void 0 !== o ? vt(o) : void 0 }

		function vt(t) {
			const e = t.r / 255,
				i = t.g / 255,
				o = t.b / 255,
				n = Math.max(e, i, o),
				s = Math.min(e, i, o),
				a = { h: 0, l: (n + s) / 2, s: 0 };
			return n !== s && (a.s = a.l < .5 ? (n - s) / (n + s) : (n - s) / (2 - n - s), a.h = e === n ? (i - o) / (n - s) : a.h = i === n ? 2 + (o - e) / (n - s) : 4 + (e - i) / (n - s)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a.h >= 360 && (a.h -= 360), a
		}

		function yt(t) { var e; return null === (e = ct(t)) || void 0 === e ? void 0 : e.a }

		function ft(t) { return ct(t) }

		function wt(t) {
			const e = { b: 0, g: 0, r: 0 },
				i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
			if (i.s) {
				const t = i.l < .5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
					o = 2 * i.l - t;
				e.r = lt(o, t, i.h + 1 / 3), e.g = lt(o, t, i.h), e.b = lt(o, t, i.h - 1 / 3)
			} else e.b = i.l, e.g = i.l, e.r = i.l;
			return e.r = Math.floor(255 * e.r), e.g = Math.floor(255 * e.g), e.b = Math.floor(255 * e.b), e
		}

		function gt(t) { const e = wt(t); return { a: t.a, b: e.b, g: e.g, r: e.r } }

		function mt(t) {
			const e = t.l / 100,
				i = e + t.s / 100 * Math.min(e, 1 - e),
				o = i ? 2 * (1 - e / i) : 0;
			return { h: t.h, s: 100 * o, v: 100 * i }
		}

		function bt(t) { return Object.assign({ a: t.a }, mt(t)) }

		function St(t) {
			const e = t.v / 100,
				i = e * (1 - t.s / 100 / 2),
				o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i);
			return { h: t.h, l: 100 * i, s: 100 * o }
		}

		function Pt(t) { return Object.assign({ a: t.a }, St(t)) }

		function _t(t) {
			const e = { b: 0, g: 0, r: 0 },
				i = t.h / 60,
				o = t.s / 100,
				n = t.v / 100,
				s = n * o,
				a = s * (1 - Math.abs(i % 2 - 1));
			let r;
			if (i >= 0 && i <= 1 ? r = { r: s, g: a, b: 0 } : i > 1 && i <= 2 ? r = { r: a, g: s, b: 0 } : i > 2 && i <= 3 ? r = { r: 0, g: s, b: a } : i > 3 && i <= 4 ? r = { r: 0, g: a, b: s } : i > 4 && i <= 5 ? r = { r: a, g: 0, b: s } : i > 5 && i <= 6 && (r = { r: s, g: 0, b: a }), r) {
				const t = n - s;
				e.r = Math.floor(255 * (r.r + t)), e.g = Math.floor(255 * (r.g + t)), e.b = Math.floor(255 * (r.b + t))
			}
			return e
		}

		function xt(t) { return Object.assign({ a: t.a }, _t(t)) }

		function Ct(t) {
			const e = { r: t.r / 255, g: t.g / 255, b: t.b / 255 },
				i = Math.max(e.r, e.g, e.b),
				o = i - Math.min(e.r, e.g, e.b);
			let n = 0;
			i === e.r ? n = (e.g - e.b) / o * 60 : i === e.g ? n = 60 * (2 + (e.b - e.r) / o) : i === e.b && (n = 60 * (4 + (e.r - e.g) / o));
			return { h: n, s: 100 * (i ? o / i : 0), v: 100 * i }
		}

		function At(t) { return Object.assign({ a: t.a }, Ct(t)) }

		function Et(t) { const e = null != t ? t : 0; return { b: Math.floor(c(p(e, 256))), g: Math.floor(c(p(e, 256))), r: Math.floor(c(p(e, 256))) } }

		function Vt(t, e) { return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!=e?e:1})` }

		function Tt(t, e) { return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!=e?e:1})` }

		function Gt(t, e) { return Tt(St(t), e) }

		function Ot(t, e, i, o) {
			let n = t,
				s = e;
			return void 0 === n.r && (n = wt(t)), void 0 === s.r && (s = wt(e)), { b: l(n.b, s.b, i, o), g: l(n.g, s.g, i, o), r: l(n.r, s.r, i, o) }
		}

		function kt(t, e, i) {
			var o, n;
			if (i === Q) return Et();
			if ("mid" !== i) return i; {
				const i = null !== (o = t.getFillColor()) && void 0 !== o ? o : t.getStrokeColor(),
					s = null !== (n = null == e ? void 0 : e.getFillColor()) && void 0 !== n ? n : null == e ? void 0 : e.getStrokeColor();
				if (i && s && e) return Ot(i, s, t.getRadius(), e.getRadius()); { const t = null != i ? i : s; if (t) return wt(t) }
			}
		}

		function Mt(t, e, i) { const o = "string" == typeof t ? t : t.value; return o === Q ? i ? ht({ value: o }) : e ? Q : $ : ht({ value: o }) }

		function Rt(t) { return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0 }

		function zt(t, e, i) { const o = { h: { enable: !1, value: t.h }, s: { enable: !1, value: t.s }, l: { enable: !1, value: t.l } }; return e && (Lt(o.h, e.h, i), Lt(o.s, e.s, i), Lt(o.l, e.l, i)), o }

		function Lt(t, e, i) { t.enable = e.enable, t.enable ? (t.velocity = h(e.speed) / 100 * i, t.decay = 1 - h(e.decay), t.status = 0, e.sync || (t.velocity *= Math.random(), t.value *= Math.random())) : t.velocity = 0 }

		function It(t, e, i) { t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath() }

		function Ht(t, e, i, o) { t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(o.x, o.y), t.closePath() }

		function Dt(t, e, i) { t.save(), t.fillStyle = null != i ? i : "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height), t.restore() }

		function jt(t, e) { t.clearRect(0, 0, e.width, e.height) }

		function Ft(t, e, i, o) {
			const n = Math.floor(i.getRadius() / e.getRadius()),
				s = e.getFillColor(),
				a = i.getFillColor();
			if (!s || !a) return;
			const r = e.getPosition(),
				l = i.getPosition(),
				c = Ot(s, a, e.getRadius(), i.getRadius()),
				h = t.createLinearGradient(r.x, r.y, l.x, l.y);
			return h.addColorStop(0, Tt(s, o)), h.addColorStop(n > 1 ? 1 : n, Vt(c, o)), h.addColorStop(1, Tt(a, o)), h
		}

		function Bt(t, e, i, o, n, s, a, r, l, c, h) {
			var d, u, p, v, y, f, w, g, m, b, S, P;
			const _ = i.getPosition();
			e.save(), void 0 !== h.a || void 0 !== h.b || void 0 !== h.c || void 0 !== h.d ? e.setTransform(null !== (d = h.a) && void 0 !== d ? d : 1, null !== (u = h.b) && void 0 !== u ? u : 0, null !== (p = h.c) && void 0 !== p ? p : 0, null !== (v = h.d) && void 0 !== v ? v : 1, _.x, _.y) : e.translate(_.x, _.y), e.beginPath();
			const x = (null !== (f = null === (y = i.rotate) || void 0 === y ? void 0 : y.value) && void 0 !== f ? f : 0) + (i.options.rotate.path ? i.velocity.angle : 0);
			0 !== x && e.rotate(x), s && (e.globalCompositeOperation = a);
			const C = i.shadowColor;
			c.enable && C && (e.shadowBlur = c.blur, e.shadowColor = Vt(C), e.shadowOffsetX = c.offset.x, e.shadowOffsetY = c.offset.y), n.fill && (e.fillStyle = n.fill);
			const A = i.stroke;
			e.lineWidth = null !== (w = i.strokeWidth) && void 0 !== w ? w : 0, n.stroke && (e.strokeStyle = n.stroke), Nt(t, e, i, r, l, o), (null !== (g = null == A ? void 0 : A.width) && void 0 !== g ? g : 0) > 0 && e.stroke(), i.close && e.closePath(), i.fill && e.fill(), e.restore(), e.save(), void 0 !== h.a || void 0 !== h.b || void 0 !== h.c || void 0 !== h.d ? e.setTransform(null !== (m = h.a) && void 0 !== m ? m : 1, null !== (b = h.b) && void 0 !== b ? b : 0, null !== (S = h.c) && void 0 !== S ? S : 0, null !== (P = h.d) && void 0 !== P ? P : 1, _.x, _.y) : e.translate(_.x, _.y), 0 !== x && e.rotate(x), s && (e.globalCompositeOperation = a), qt(t, e, i, r, l, o), e.restore()
		}

		function Nt(t, e, i, o, n, s) {
			if (!i.shape) return;
			const a = t.drawers.get(i.shape);
			a && a.draw(e, i, o, n, s, t.retina.pixelRatio)
		}

		function qt(t, e, i, o, n, s) {
			if (!i.shape) return;
			const a = t.drawers.get(i.shape);
			(null == a ? void 0 : a.afterEffect) && a.afterEffect(e, i, o, n, s, t.retina.pixelRatio)
		}

		function Ut(t, e, i) { e.draw && (t.save(), e.draw(t, i), t.restore()) }

		function Wt(t, e, i, o) { e.drawParticle && (t.save(), e.drawParticle(t, i, o), t.restore()) }

		function Qt(t, e, i, o, n, s, a, r, l) {
			if (s <= 0) return;
			const c = e.getPosition();
			i && (t.strokeStyle = Tt(i, n)), t.lineWidth = s;
			const h = a * Math.PI / 180;
			t.beginPath(), t.ellipse(c.x, c.y, o / 2, 2 * o, h, r, l), t.stroke()
		}

		function $t(t, e, i) { return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i } }
		var Zt, Xt = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			Yt = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };

		function Jt(t, e, i) {
			var o;
			const n = e[i];
			void 0 !== n && (t[i] = (null !== (o = t[i]) && void 0 !== o ? o : 1) * n)
		}
		class Kt {
			constructor(t) { this.container = t, Zt.set(this, void 0), this.size = { height: 0, width: 0 }, Xt(this, Zt, null, "f"), this.generatedCanvas = !1 } clear() {
				const t = this.container.actualOptions,
					e = t.particles.move.trail;
				t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && this.trailFillColor ? this.paintBase(Vt(this.trailFillColor, 1 / e.length)) : this.draw((t => { jt(t, this.size) }))
			}
			destroy() {
				var t;
				this.generatedCanvas ? null === (t = this.element) || void 0 === t || t.remove() : this.resetOriginalStyle(), this.draw((t => { jt(t, this.size) }))
			}
			draw(t) { if (Yt(this, Zt, "f")) return t(Yt(this, Zt, "f")) } drawParticle(t, e) {
				var i, o, n, s, a, r;
				if (t.spawning || t.destroyed) return;
				const l = t.getRadius();
				if (l <= 0) return;
				const c = t.getFillColor(),
					h = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : c;
				if (!c && !h) return;
				let [d, u] = this.getPluginParticleColors(t);
				d && u || (d || (d = c || void 0), u || (u = h || void 0));
				const p = this.container.actualOptions,
					v = t.options.zIndex,
					y = (1 - t.zIndexFactor) ** v.opacityRate,
					f = null !== (s = null !== (o = t.bubble.opacity) && void 0 !== o ? o : null === (n = t.opacity) || void 0 === n ? void 0 : n.value) && void 0 !== s ? s : 1,
					w = null !== (r = null === (a = t.stroke) || void 0 === a ? void 0 : a.opacity) && void 0 !== r ? r : f,
					g = f * y,
					m = w * y,
					b = { fill: d ? Tt(d, g) : void 0 };
				b.stroke = u ? Tt(u, m) : b.fill, this.draw((i => {
					const o = {},
						n = (1 - t.zIndexFactor) ** v.sizeRate,
						s = this.container;
					for (const e of s.particles.updaters) {
						if (e.beforeDraw && e.beforeDraw(t), e.getColorStyles) {
							const { fill: o, stroke: n } = e.getColorStyles(t, i, l, g);
							o && (b.fill = o), n && (b.stroke = n)
						}
						if (e.getTransformValues) { const i = e.getTransformValues(t); for (const t in i) Jt(o, i, t) }
					}
					Bt(s, i, t, e, b, p.backgroundMask.enable, p.backgroundMask.composite, l * n, g, t.options.shadow, o);
					for (const e of s.particles.updaters) e.afterDraw && e.afterDraw(t)
				}))
			}
			drawParticlePlugin(t, e, i) { this.draw((o => { Wt(o, t, e, i) })) } drawPlugin(t, e) { this.draw((i => { Ut(i, t, e) })) } init() { this.resize(), this.initStyle(), this.initCover(), this.initTrail(), this.initBackground(), this.paint() } initBackground() {
				const t = this.container.actualOptions.background,
					e = this.element,
					i = null == e ? void 0 : e.style;
				if (i) {
					if (t.color) {
						const e = ht(t.color);
						i.backgroundColor = e ? Vt(e, t.opacity) : ""
					} else i.backgroundColor = "";
					i.backgroundImage = t.image || "", i.backgroundPosition = t.position || "", i.backgroundRepeat = t.repeat || "", i.backgroundSize = t.size || ""
				}
			}
			loadCanvas(t) {
				var e;
				this.generatedCanvas && (null === (e = this.element) || void 0 === e || e.remove()), this.generatedCanvas = t.dataset && W in t.dataset ? "true" === t.dataset[W] : this.generatedCanvas, this.element = t, this.originalStyle = H({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, Xt(this, Zt, this.element.getContext("2d"), "f"), this.container.retina.init(), this.initBackground()
			}
			paint() {
				const t = this.container.actualOptions;
				this.draw((e => { t.backgroundMask.enable && t.backgroundMask.cover ? (jt(e, this.size), this.paintBase(this.coverColorStyle)) : this.paintBase() }))
			}
			resize() {
				if (!this.element) return;
				const t = this.container,
					e = t.retina.pixelRatio,
					i = t.canvas.size,
					o = this.element.offsetWidth * e,
					n = this.element.offsetHeight * e;
				if (n === i.height && o === i.width && n === this.element.height && o === this.element.width) return;
				const s = Object.assign({}, i);
				this.element.width = i.width = this.element.offsetWidth * e, this.element.height = i.height = this.element.offsetHeight * e, this.container.started && (this.resizeFactor = { width: i.width / s.width, height: i.height / s.height })
			}
			async windowResize() {
				if (!this.element) return;
				this.resize();
				const t = this.container,
					e = t.updateActualOptions();
				t.particles.setDensity();
				for (const [, e] of t.plugins) void 0 !== e.resize && e.resize();
				e && await t.refresh()
			}
			getPluginParticleColors(t) {
				let e, i;
				for (const [, o] of this.container.plugins)
					if (!e && o.particleFillColor && (e = pt(o.particleFillColor(t))), !i && o.particleStrokeColor && (i = pt(o.particleStrokeColor(t))), e && i) break;
				return [e, i]
			}
			initCover() {
				const t = this.container.actualOptions.backgroundMask.cover,
					e = ht(t.color);
				if (e) {
					const i = { r: e.r, g: e.g, b: e.b, a: t.opacity };
					this.coverColorStyle = Vt(i, i.a)
				}
			}
			initStyle() {
				const t = this.element,
					e = this.container.actualOptions;
				if (t) {
					e.fullScreen.enable ? (this.originalStyle = H({}, t.style), t.style.setProperty("position", "fixed", "important"), t.style.setProperty("z-index", e.fullScreen.zIndex.toString(10), "important"), t.style.setProperty("top", "0", "important"), t.style.setProperty("left", "0", "important"), t.style.setProperty("width", "100%", "important"), t.style.setProperty("height", "100%", "important")) : this.resetOriginalStyle();
					for (const i in e.style) {
						if (!i || !e.style) continue;
						const o = e.style[i];
						o && t.style.setProperty(i, o, "important")
					}
				}
			}
			initTrail() {
				const t = this.container.actualOptions,
					e = ht(t.particles.move.trail.fillColor);
				if (e) {
					const i = t.particles.move.trail;
					this.trailFillColor = { r: e.r, g: e.g, b: e.b, a: 1 / i.length }
				}
			}
			paintBase(t) { this.draw((e => { Dt(e, this.size, t) })) } resetOriginalStyle() {
				const t = this.element,
					e = this.originalStyle;
				t && e && (t.style.position = e.position, t.style.zIndex = e.zIndex, t.style.top = e.top, t.style.left = e.left, t.style.width = e.width, t.style.height = e.height)
			}
		}

		function te(t, e, i, o, n) {
			if (o) { let o = { passive: !0 }; "boolean" == typeof n ? o.capture = n : void 0 !== n && (o = n), t.addEventListener(e, i, o) } else {
				const o = n;
				t.removeEventListener(e, i, o)
			}
		}
		Zt = new WeakMap;
		class ee {
			constructor(t) { this.container = t, this.canPush = !0, this.mouseMoveHandler = t => this.mouseTouchMove(t), this.touchStartHandler = t => this.mouseTouchMove(t), this.touchMoveHandler = t => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = t => this.mouseTouchClick(t), this.mouseUpHandler = t => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = t => this.handleThemeChange(t), this.oldThemeChangeHandler = t => this.handleThemeChange(t), this.resizeHandler = () => this.handleWindowResize() } addListeners() { this.manageListeners(!0) } removeListeners() { this.manageListeners(!1) } doMouseTouchClick(t) {
				const e = this.container,
					i = e.actualOptions;
				if (this.canPush) {
					const t = e.interactivity.mouse.position;
					if (!t) return;
					e.interactivity.mouse.clickPosition = { x: t.x, y: t.y }, e.interactivity.mouse.clickTime = (new Date).getTime();
					const o = i.interactivity.events.onClick;
					if (o.mode instanceof Array)
						for (const t of o.mode) this.handleClickMode(t);
					else this.handleClickMode(o.mode)
				}
				"touchend" === t.type && setTimeout((() => this.mouseTouchFinish()), 500)
			}
			handleClickMode(t) { this.container.handleClickMode(t) } handleThemeChange(t) {
				const e = t.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
					i = this.container.options.themes.find((t => t.name === e));
				i && i.default.auto && this.container.loadTheme(e)
			}
			handleVisibilityChange() {
				const t = this.container,
					e = t.actualOptions;
				this.mouseTouchFinish(), e.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
			}
			handleWindowResize() { this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout((async () => { var t; return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize() }), 500) } manageListeners(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = o.interactivity.detectsOn;
				let s = et;
				if ("window" === n) i.interactivity.element = window, s = it;
				else if ("parent" === n && i.canvas.element) {
					const t = i.canvas.element;
					i.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode
				} else i.interactivity.element = i.canvas.element;
				const a = !V() && "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)");
				a && (void 0 !== a.addEventListener ? te(a, "change", this.themeChangeHandler, t) : void 0 !== a.addListener && (t ? a.addListener(this.oldThemeChangeHandler) : a.removeListener(this.oldThemeChangeHandler)));
				const r = i.interactivity.element;
				if (!r) return;
				const l = r;
				(o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (te(r, J, this.mouseMoveHandler, t), te(r, K, this.touchStartHandler, t), te(r, tt, this.touchMoveHandler, t), o.interactivity.events.onClick.enable ? (te(r, Z, this.touchEndClickHandler, t), te(r, Y, this.mouseUpHandler, t), te(r, X, this.mouseDownHandler, t)) : te(r, Z, this.touchEndHandler, t), te(r, s, this.mouseLeaveHandler, t), te(r, ot, this.touchCancelHandler, t)), i.canvas.element && (i.canvas.element.style.pointerEvents = l === i.canvas.element ? "initial" : "none"), o.interactivity.events.resize && ("undefined" != typeof ResizeObserver ? this.resizeObserver && !t ? (i.canvas.element && this.resizeObserver.unobserve(i.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && i.canvas.element && (this.resizeObserver = new ResizeObserver((t => { t.find((t => t.target === i.canvas.element)) && this.handleWindowResize() })), this.resizeObserver.observe(i.canvas.element)) : te(window, nt, this.resizeHandler, t)), document && te(document, st, this.visibilityChangeHandler, t, !1)
			}
			mouseDown() {
				const t = this.container.interactivity;
				if (t) {
					const e = t.mouse;
					e.clicking = !0, e.downPosition = e.position
				}
			}
			mouseTouchClick(t) {
				const e = this.container,
					i = e.actualOptions,
					o = e.interactivity.mouse;
				o.inside = !0;
				let n = !1;
				const s = o.position;
				if (s && i.interactivity.events.onClick.enable) {
					for (const [, t] of e.plugins)
						if (t.clickPositionValid && (n = t.clickPositionValid(s), n)) break;
					n || this.doMouseTouchClick(t), o.clicking = !1
				}
			}
			mouseTouchFinish() {
				const t = this.container.interactivity;
				if (!t) return;
				const e = t.mouse;
				delete e.position, delete e.clickPosition, delete e.downPosition, t.status = et, e.inside = !1, e.clicking = !1
			}
			mouseTouchMove(t) {
				var e, i, o, n, s, a, r;
				const l = this.container,
					c = l.actualOptions;
				if (!(null === (e = l.interactivity) || void 0 === e ? void 0 : e.element)) return;
				let h;
				l.interactivity.mouse.inside = !0;
				const d = l.canvas.element;
				if (t.type.startsWith("mouse")) {
					this.canPush = !0;
					const e = t;
					if (l.interactivity.element === window) {
						if (d) {
							const t = d.getBoundingClientRect();
							h = { x: e.clientX - t.left, y: e.clientY - t.top }
						}
					} else if ("parent" === c.interactivity.detectsOn) {
						const t = e.target,
							n = e.currentTarget,
							s = l.canvas.element;
						if (t && n && s) {
							const i = t.getBoundingClientRect(),
								o = n.getBoundingClientRect(),
								a = s.getBoundingClientRect();
							h = { x: e.offsetX + 2 * i.left - (o.left + a.left), y: e.offsetY + 2 * i.top - (o.top + a.top) }
						} else h = { x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX, y: null !== (o = e.offsetY) && void 0 !== o ? o : e.clientY }
					} else e.target === l.canvas.element && (h = { x: null !== (n = e.offsetX) && void 0 !== n ? n : e.clientX, y: null !== (s = e.offsetY) && void 0 !== s ? s : e.clientY })
				} else {
					this.canPush = "touchmove" !== t.type;
					const e = t,
						i = e.touches[e.touches.length - 1],
						o = null == d ? void 0 : d.getBoundingClientRect();
					h = { x: i.clientX - (null !== (a = null == o ? void 0 : o.left) && void 0 !== a ? a : 0), y: i.clientY - (null !== (r = null == o ? void 0 : o.top) && void 0 !== r ? r : 0) }
				}
				const u = l.retina.pixelRatio;
				h && (h.x *= u, h.y *= u), l.interactivity.mouse.position = h, l.interactivity.status = J
			}
		}
		class ie {
			constructor(t) { this.container = t } async nextFrame(t) {
				var e;
				try {
					const i = this.container;
					if (void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) return void i.draw(!1);
					null !== (e = i.lastFrameTime) && void 0 !== e || (i.lastFrameTime = t);
					const o = t - i.lastFrameTime,
						n = { value: o, factor: 60 * o / 1e3 };
					if (i.lifeTime += n.value, i.lastFrameTime = t, o > 1e3) return void i.draw(!1);
					if (await i.particles.draw(n), i.duration > 0 && i.lifeTime > i.duration) return void i.destroy();
					i.getAnimationStatus() && i.draw(!1)
				} catch (t) { console.error("tsParticles error in animation loop", t) }
			}
		}
		class oe { constructor() { this.value = "" } static create(t, e) { const i = new oe; return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({ value: e }) : i.load(e)), i } load(t) { void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value) } } class ne { constructor() { this.color = new oe, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1 } load(t) { t && (void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity)) } } class se { constructor() { this.color = new oe, this.color.value = "#fff", this.opacity = 1 } load(t) { t && (void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity)) } } class ae {
			constructor() { this.composite = "destination-out", this.cover = new se, this.enable = !1 } load(t) {
				if (t) {
					if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
						const e = t.cover,
							i = "string" == typeof t.cover ? { color: t.cover } : t.cover;
						this.cover.load(void 0 !== e.color ? e : { color: i })
					}
					void 0 !== t.enable && (this.enable = t.enable)
				}
			}
		}
		class re { constructor() { this.enable = !0, this.zIndex = 0 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex)) } } class le { constructor() { this.enable = !1, this.mode = [] } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode)) } } class ce {
			constructor() { this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle" } get el() { return this.elementId } set el(t) { this.elementId = t } get elementId() { return this.ids } set elementId(t) { this.ids = t } get ids() { return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "") } set ids(t) { this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}` } load(t) {
				var e, i;
				if (!t) return;
				const o = null !== (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== i ? i : t.el;
				void 0 !== o && (this.ids = o), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
			}
		}
		class he { constructor() { this.enable = !1, this.force = 2, this.smooth = 10 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth)) } } class de { constructor() { this.enable = !1, this.mode = [], this.parallax = new he } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax)) } } class ue {
			constructor() { this.onClick = new le, this.onDiv = new ce, this.onHover = new de, this.resize = !0 } get onclick() { return this.onClick } set onclick(t) { this.onClick = t } get ondiv() { return this.onDiv } set ondiv(t) { this.onDiv = t } get onhover() { return this.onHover } set onhover(t) { this.onHover = t } load(t) {
				var e, i, o;
				if (!t) return;
				this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
				const n = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
				void 0 !== n && (n instanceof Array ? this.onDiv = n.map((t => { const e = new ce; return e.load(t), e })) : (this.onDiv = new ce, this.onDiv.load(n))), this.onHover.load(null !== (o = t.onHover) && void 0 !== o ? o : t.onhover), void 0 !== t.resize && (this.resize = t.resize)
			}
		}
		class pe { constructor() { this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1 } load(t) { t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed)) } } class ve { constructor() { this.distance = 200 } load(t) { t && void 0 !== t.distance && (this.distance = t.distance) } } class ye { constructor() { this.distance = 200, this.duration = .4, this.mix = !1 } load(t) { t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.mix && (this.mix = t.mix), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color && (t.color instanceof Array ? this.color = t.color.map((t => oe.create(void 0, t))) : (this.color instanceof Array && (this.color = new oe), this.color = oe.create(this.color, t.color))), void 0 !== t.size && (this.size = t.size)) } } class fe extends ye { constructor() { super(), this.selectors = [] } get ids() { return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "") } set ids(t) { this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}` } load(t) { super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors)) } } class we extends ye { load(t) { super.load(t), t && (t.divs instanceof Array ? this.divs = t.divs.map((t => { const e = new fe; return e.load(t), e })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new fe), this.divs.load(t.divs))) } } class ge { constructor() { this.opacity = .5 } load(t) { t && void 0 !== t.opacity && (this.opacity = t.opacity) } } class me {
			constructor() { this.distance = 80, this.links = new ge, this.radius = 60 } get lineLinked() { return this.links } set lineLinked(t) { this.links = t } get line_linked() { return this.links } set line_linked(t) { this.links = t } load(t) {
				var e, i;
				t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
			}
		}
		class be { constructor() { this.blink = !1, this.consent = !1, this.opacity = 1 } load(t) { t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity)) } } class Se {
			constructor() { this.distance = 100, this.links = new be } get lineLinked() { return this.links } set lineLinked(t) { this.links = t } get line_linked() { return this.links } set line_linked(t) { this.links = t } load(t) {
				var e, i;
				t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked))
			}
		}
		class Pe { constructor() { this.start = new oe, this.stop = new oe, this.start.value = "#ffffff", this.stop.value = "#000000" } load(t) { t && (this.start = oe.create(this.start, t.start), this.stop = oe.create(this.stop, t.stop)) } } class _e { constructor() { this.gradient = new Pe, this.radius = 1e3 } load(t) { t && (this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius)) } } class xe { constructor() { this.color = new oe, this.color.value = "#000000", this.length = 2e3 } load(t) { t && (this.color = oe.create(this.color, t.color), void 0 !== t.length && (this.length = t.length)) } } class Ce { constructor() { this.area = new _e, this.shadow = new xe } load(t) { t && (this.area.load(t.area), this.shadow.load(t.shadow)) } } class Ae {
			constructor() { this.default = !0, this.groups = [], this.quantity = 4 } get particles_nb() { return this.quantity } set particles_nb(t) { this.quantity = t } load(t) {
				var e;
				if (!t) return;
				void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map((t => t))), this.groups.length || (this.default = !0);
				const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
				void 0 !== i && (this.quantity = i)
			}
		}
		class Ee {
			constructor() { this.quantity = 2 } get particles_nb() { return this.quantity } set particles_nb(t) { this.quantity = t } load(t) {
				var e;
				if (!t) return;
				const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
				void 0 !== i && (this.quantity = i)
			}
		}
		class Ve { constructor() { this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad" } load(t) { t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed)) } } class Te extends Ve { constructor() { super(), this.selectors = [] } get ids() { return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "") } set ids(t) { this.selectors = t instanceof Array ? t.map((() => `#${t}`)) : `#${t}` } load(t) { super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors)) } } class Ge extends Ve { load(t) { super.load(t), t && (t.divs instanceof Array ? this.divs = t.divs.map((t => { const e = new Te; return e.load(t), e })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new Te), this.divs.load(t.divs))) } } class Oe { constructor() { this.factor = 3, this.radius = 200 } get active() { return !1 } set active(t) {} load(t) { t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius)) } } class ke { constructor() { this.delay = 1, this.pauseOnStop = !1, this.quantity = 1 } load(t) { t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = H({}, t.particles)), void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop)) } } class Me { constructor() { this.attract = new pe, this.bounce = new ve, this.bubble = new we, this.connect = new me, this.grab = new Se, this.light = new Ce, this.push = new Ae, this.remove = new Ee, this.repulse = new Ge, this.slow = new Oe, this.trail = new ke } load(t) { t && (this.attract.load(t.attract), this.bubble.load(t.bubble), this.connect.load(t.connect), this.grab.load(t.grab), this.light.load(t.light), this.push.load(t.push), this.remove.load(t.remove), this.repulse.load(t.repulse), this.slow.load(t.slow), this.trail.load(t.trail)) } } class Re {
			constructor() { this.detectsOn = "window", this.events = new ue, this.modes = new Me } get detect_on() { return this.detectsOn } set detect_on(t) { this.detectsOn = t } load(t) {
				var e, i, o;
				if (!t) return;
				const n = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
				void 0 !== n && (this.detectsOn = n), this.events.load(t.events), this.modes.load(t.modes), !0 === (null === (o = null === (i = t.modes) || void 0 === i ? void 0 : i.slow) || void 0 === o ? void 0 : o.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf("slow") < 0 && this.events.onHover.mode.push("slow") : "slow" !== this.events.onHover.mode && (this.events.onHover.mode = [this.events.onHover.mode, "slow"]))
			}
		}
		class ze {
			load(t) {
				var e, i;
				t && (void 0 !== t.position && (this.position = { x: null !== (e = t.position.x) && void 0 !== e ? e : 50, y: null !== (i = t.position.y) && void 0 !== i ? i : 50 }), void 0 !== t.options && (this.options = H({}, t.options)))
			}
		}
		class Le { constructor() { this.factor = 4, this.value = !0 } load(t) { t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value)) } } class Ie { constructor() { this.disable = !1, this.reduce = new Le } load(t) { t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce)) } } class He { constructor() { this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas" } load(t) { t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && ("screen" === t.mode ? this.mode = "screen" : this.mode = "canvas"), void 0 !== t.options && (this.options = H({}, t.options))) } } class De { constructor() { this.auto = !1, this.mode = "any", this.value = !1 } load(t) { t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value)) } } class je { constructor() { this.name = "", this.default = new De } load(t) { t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = H({}, t.options))) } } class Fe { constructor() { this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.decay = 0, this.sync = !0 } load(t) { t && (void 0 !== t.count && (this.count = p(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = p(t.offset)), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.decay && (this.decay = p(t.decay)), void 0 !== t.sync && (this.sync = t.sync)) } } class Be { constructor() { this.h = new Fe, this.s = new Fe, this.l = new Fe } load(t) { t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l)) } } class Ne extends oe {
			constructor() { super(), this.animation = new Be } static create(t, e) { const i = new Ne; return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({ value: e }) : i.load(e)), i } load(t) {
				if (super.load(t), !t) return;
				const e = t.animation;
				void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation))
			}
		}
		class qe { constructor() { this.count = 0, this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1, this.startValue = "random" } load(t) { t && (void 0 !== t.count && (this.count = p(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.sync && (this.sync = t.sync), void 0 !== t.startValue && (this.startValue = t.startValue)) } } class Ue { constructor() { this.value = 0, this.animation = new qe } load(t) { t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = p(t.value))) } } class We { constructor() { this.stop = 0, this.value = new Ne } load(t) { t && (void 0 !== t.stop && (this.stop = t.stop), this.value = Ne.create(this.value, t.value), void 0 !== t.opacity && (this.opacity = new Ue, "number" == typeof t.opacity ? this.opacity.value = t.opacity : this.opacity.load(t.opacity))) } } class Qe { constructor() { this.count = 0, this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1 } load(t) { t && (void 0 !== t.count && (this.count = p(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.decay && (this.decay = p(t.decay)), void 0 !== t.sync && (this.sync = t.sync)) } } class $e { constructor() { this.value = 0, this.animation = new Qe, this.direction = "clockwise" } load(t) { t && (this.animation.load(t.animation), void 0 !== t.value && (this.value = t.value), void 0 !== t.direction && (this.direction = t.direction)) } } class Ze { constructor() { this.angle = new $e, this.colors = [], this.type = "random" } load(t) { t && (this.angle.load(t.angle), void 0 !== t.colors && (this.colors = t.colors.map((t => { const e = new We; return e.load(t), e }))), void 0 !== t.type && (this.type = t.type)) } } class Xe { constructor() { this.enable = !0, this.retries = 0 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries)) } } class Ye { constructor() { this.enable = !1, this.minimumValue = 0 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue)) } } class Je { constructor() { this.random = new Ye, this.value = 0 } load(t) { t && ("boolean" == typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = p(t.value, this.random.enable ? this.random.minimumValue : void 0))) } } class Ke extends Je { constructor() { super(), this.random.minimumValue = .1, this.value = 1 } } class ti { constructor() { this.horizontal = new Ke, this.vertical = new Ke } load(t) { t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical)) } } class ei { constructor() { this.bounce = new ti, this.enable = !1, this.mode = "bounce", this.overlap = new Xe } load(t) { t && (this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap)) } } class ii extends Je { constructor() { super(), this.value = 3 } } class oi extends Je { constructor() { super(), this.value = { min: 4, max: 9 } } } class ni { constructor() { this.count = 1, this.factor = new ii, this.rate = new oi, this.sizeOffset = !0 } load(t) { t && (void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), void 0 !== t.particles && (t.particles instanceof Array ? this.particles = t.particles.map((t => H({}, t))) : this.particles = H({}, t.particles)), void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset)) } } class si { constructor() { this.mode = "none", this.split = new ni } load(t) { t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split)) } } class ai { constructor() { this.blur = 5, this.color = new oe, this.color.value = "#000", this.enable = !1 } load(t) { t && (void 0 !== t.blur && (this.blur = t.blur), this.color = oe.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable)) } } class ri { constructor() { this.enable = !1, this.frequency = 1 } load(t) { t && (void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity)) } } class li { constructor() { this.blink = !1, this.color = new oe, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new ai, this.triangles = new ri, this.width = 1, this.warp = !1 } load(t) { t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = oe.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp)) } } class ci { constructor() { this.offset = 0, this.value = 90 } load(t) { t && (void 0 !== t.offset && (this.offset = p(t.offset)), void 0 !== t.value && (this.value = p(t.value))) } } class hi {
			constructor() { this.distance = 200, this.enable = !1, this.rotate = { x: 3e3, y: 3e3 } } get rotateX() { return this.rotate.x } set rotateX(t) { this.rotate.x = t } get rotateY() { return this.rotate.y } set rotateY(t) { this.rotate.y = t } load(t) {
				var e, i, o, n;
				if (!t) return;
				void 0 !== t.distance && (this.distance = p(t.distance)), void 0 !== t.enable && (this.enable = t.enable);
				const s = null !== (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : t.rotateX;
				void 0 !== s && (this.rotate.x = s);
				const a = null !== (n = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : t.rotateY;
				void 0 !== a && (this.rotate.y = a)
			}
		}
		class di { constructor() { this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50 } load(t) { t && (void 0 !== t.acceleration && (this.acceleration = p(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = p(t.maxSpeed))) } } class ui extends Je { constructor() { super() } } class pi { constructor() { this.clamp = !0, this.delay = new ui, this.enable = !1, this.options = {} } load(t) { t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = H(this.options, t.options))) } } class vi { constructor() { this.enable = !1, this.length = 10, this.fillColor = new oe, this.fillColor.value = "#000000" } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), this.fillColor = oe.create(this.fillColor, t.fillColor), void 0 !== t.length && (this.length = t.length)) } } class yi {
			constructor() { this.default = "out" } load(t) {
				var e, i, o, n;
				t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default, this.left = null !== (i = t.left) && void 0 !== i ? i : t.default, this.right = null !== (o = t.right) && void 0 !== o ? o : t.default, this.top = null !== (n = t.top) && void 0 !== n ? n : t.default)
			}
		}
		class fi { constructor() { this.acceleration = 0, this.enable = !1 } load(t) { t && (void 0 !== t.acceleration && (this.acceleration = p(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), this.position = t.position ? H({}, t.position) : void 0) } } class wi {
			constructor() { this.angle = new ci, this.attract = new hi, this.center = { x: 50, y: 50, radius: 0 }, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new di, this.path = new pi, this.outModes = new yi, this.random = !1, this.size = !1, this.speed = 2, this.spin = new fi, this.straight = !1, this.trail = new vi, this.vibrate = !1, this.warp = !1 } get bounce() { return this.collisions } set bounce(t) { this.collisions = t } get collisions() { return !1 } set collisions(t) {} get noise() { return this.path } set noise(t) { this.path = t } get outMode() { return this.outModes.default } set outMode(t) { this.outModes.default = t } get out_mode() { return this.outMode } set out_mode(t) { this.outMode = t } load(t) {
				var e, i, o;
				if (!t) return;
				void 0 !== t.angle && ("number" == typeof t.angle ? this.angle.value = t.angle : this.angle.load(t.angle)), this.attract.load(t.attract), this.center = H(this.center, t.center), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = "number" == typeof t.distance ? { horizontal: t.distance, vertical: t.distance } : H({}, t.distance)), void 0 !== t.drift && (this.drift = p(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
				const n = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
				void 0 === t.outModes && void 0 === n || ("string" == typeof t.outModes || void 0 === t.outModes && void 0 !== n ? this.outModes.load({ default: null !== (i = t.outModes) && void 0 !== i ? i : n }) : this.outModes.load(t.outModes)), this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = p(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
			}
		}
		class gi { constructor() { this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.sync = !1 } load(t) { t && (void 0 !== t.count && (this.count = p(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.decay && (this.decay = p(t.decay)), void 0 !== t.sync && (this.sync = t.sync)) } } class mi extends gi {
			constructor() { super(), this.destroy = "none", this.enable = !1, this.speed = 2, this.startValue = "random", this.sync = !1 } get opacity_min() { return this.minimumValue } set opacity_min(t) { this.minimumValue = t } load(t) {
				var e;
				t && (super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
			}
		}
		class bi extends Je {
			constructor() { super(), this.animation = new mi, this.random.minimumValue = .1, this.value = 1 } get anim() { return this.animation } set anim(t) { this.animation = t } load(t) {
				var e;
				if (!t) return;
				super.load(t);
				const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
				void 0 !== i && (this.animation.load(i), this.value = p(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
			}
		}
		class Si {
			constructor() { this.enable = !1, this.area = 800, this.factor = 1e3 } get value_area() { return this.area } set value_area(t) { this.area = t } load(t) {
				var e;
				if (!t) return;
				void 0 !== t.enable && (this.enable = t.enable);
				const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
				void 0 !== i && (this.area = i), void 0 !== t.factor && (this.factor = t.factor)
			}
		}
		class Pi {
			constructor() { this.density = new Si, this.limit = 0, this.value = 100 } get max() { return this.limit } set max(t) { this.limit = t } load(t) {
				var e;
				if (!t) return;
				this.density.load(t.density);
				const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
				void 0 !== i && (this.limit = i), void 0 !== t.value && (this.value = t.value)
			}
		}
		class _i extends Je { constructor() { super(), this.enabled = !1, this.distance = 1, this.duration = 1, this.factor = 1, this.speed = 1 } load(t) { super.load(t), t && (void 0 !== t.enabled && (this.enabled = t.enabled), void 0 !== t.distance && (this.distance = p(t.distance)), void 0 !== t.duration && (this.duration = p(t.duration)), void 0 !== t.factor && (this.factor = p(t.factor)), void 0 !== t.speed && (this.speed = p(t.speed))) } } class xi { constructor() { this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.decay && (this.decay = p(t.decay)), void 0 !== t.sync && (this.sync = t.sync)) } } class Ci extends Je { constructor() { super(), this.animation = new xi, this.direction = "clockwise", this.path = !1, this.value = 0 } load(t) { t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path)) } } class Ai { constructor() { this.blur = 0, this.color = new oe, this.enable = !1, this.offset = { x: 0, y: 0 }, this.color.value = "#000" } load(t) { t && (void 0 !== t.blur && (this.blur = t.blur), this.color = oe.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y))) } } class Ei {
			constructor() { this.options = {}, this.type = "circle" } get character() { var t; return null !== (t = this.options.character) && void 0 !== t ? t : this.options.char } set character(t) { this.options.character = t, this.options.char = t } get custom() { return this.options } set custom(t) { this.options = t } get image() { var t; return null !== (t = this.options.image) && void 0 !== t ? t : this.options.images } set image(t) { this.options.image = t, this.options.images = t } get images() { return this.image } set images(t) { this.image = t } get polygon() { var t; return null !== (t = this.options.polygon) && void 0 !== t ? t : this.options.star } set polygon(t) { this.options.polygon = t, this.options.star = t } get stroke() { return [] } set stroke(t) {} load(t) {
				var e, i, o;
				if (!t) return;
				const n = null !== (e = t.options) && void 0 !== e ? e : t.custom;
				if (void 0 !== n)
					for (const t in n) {
						const e = n[t];
						e && (this.options[t] = H(null !== (i = this.options[t]) && void 0 !== i ? i : {}, e))
					}
				this.loadShape(t.character, "character", "char", !0), this.loadShape(t.polygon, "polygon", "star", !1), this.loadShape(null !== (o = t.image) && void 0 !== o ? o : t.images, "image", "images", !0), void 0 !== t.type && (this.type = t.type)
			}
			loadShape(t, e, i, o) {
				var n, s, a, r;
				void 0 !== t && (t instanceof Array ? (this.options[e] instanceof Array || (this.options[e] = [], this.options[i] && !o || (this.options[i] = [])), this.options[e] = H(null !== (n = this.options[e]) && void 0 !== n ? n : [], t), this.options[i] && !o || (this.options[i] = H(null !== (s = this.options[i]) && void 0 !== s ? s : [], t))) : (this.options[e] instanceof Array && (this.options[e] = {}, this.options[i] && !o || (this.options[i] = {})), this.options[e] = H(null !== (a = this.options[e]) && void 0 !== a ? a : {}, t), this.options[i] && !o || (this.options[i] = H(null !== (r = this.options[i]) && void 0 !== r ? r : {}, t))))
			}
		}
		class Vi extends gi {
			constructor() { super(), this.destroy = "none", this.enable = !1, this.speed = 5, this.startValue = "random", this.sync = !1 } get size_min() { return this.minimumValue } set size_min(t) { this.minimumValue = t } load(t) {
				var e;
				super.load(t), t && (void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
			}
		}
		class Ti extends Je {
			constructor() { super(), this.animation = new Vi, this.random.minimumValue = 1, this.value = 3 } get anim() { return this.animation } set anim(t) { this.animation = t } load(t) {
				var e;
				if (super.load(t), !t) return;
				const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
				void 0 !== i && (this.animation.load(i), this.value = p(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
			}
		}
		class Gi { constructor() { this.width = 0 } load(t) { t && (void 0 !== t.color && (this.color = Ne.create(this.color, t.color)), void 0 !== t.width && (this.width = t.width), void 0 !== t.opacity && (this.opacity = t.opacity)) } } class Oi extends Je { constructor() { super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1 } load(t) { super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate)) } }
		var ki, Mi, Ri = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			zi = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class Li {
			constructor(t, e) { ki.set(this, void 0), Mi.set(this, void 0), Ri(this, Mi, t, "f"), Ri(this, ki, e, "f"), this.bounce = new ti, this.collisions = new ei, this.color = new Ne, this.color.value = "#fff", this.destroy = new si, this.gradient = [], this.groups = {}, this.links = new li, this.move = new wi, this.number = new Pi, this.opacity = new bi, this.reduceDuplicates = !1, this.repulse = new _i, this.rotate = new Ci, this.shadow = new Ai, this.shape = new Ei, this.size = new Ti, this.stroke = new Gi, this.zIndex = new Oi } get lineLinked() { return this.links } set lineLinked(t) { this.links = t } get line_linked() { return this.links } set line_linked(t) { this.links = t } load(t) {
				var e, i, o, n, s, a, r, l;
				if (!t) return;
				this.bounce.load(t.bounce), this.color.load(Ne.create(this.color, t.color)), this.destroy.load(t.destroy);
				const c = null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked;
				if (void 0 !== c && this.links.load(c), void 0 !== t.groups)
					for (const e in t.groups) {
						const i = t.groups[e];
						void 0 !== i && (this.groups[e] = H(null !== (o = this.groups[e]) && void 0 !== o ? o : {}, i))
					}
				this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.repulse.load(t.repulse), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex);
				const h = null !== (s = null === (n = t.move) || void 0 === n ? void 0 : n.collisions) && void 0 !== s ? s : null === (a = t.move) || void 0 === a ? void 0 : a.bounce;
				void 0 !== h && (this.collisions.enable = h), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = H({}, t.interactivity));
				const d = null !== (r = t.stroke) && void 0 !== r ? r : null === (l = t.shape) || void 0 === l ? void 0 : l.stroke;
				d && (d instanceof Array ? this.stroke = d.map((t => { const e = new Gi; return e.load(t), e })) : (this.stroke instanceof Array && (this.stroke = new Gi), this.stroke.load(d)));
				const u = t.gradient;
				if (u && (u instanceof Array ? this.gradient = u.map((t => { const e = new Ze; return e.load(t), e })) : (this.gradient instanceof Array && (this.gradient = new Ze), this.gradient.load(u))), zi(this, ki, "f")) {
					const e = zi(this, Mi, "f").plugins.updaters.get(zi(this, ki, "f"));
					if (e)
						for (const i of e) i.loadOptions && i.loadOptions(this, t)
				}
			}
		}

		function Ii(t, ...e) { for (const i of e) t.load(i) }

		function Hi(t, e, ...i) { const o = new Li(t, e); return Ii(o, ...i), o } ki = new WeakMap, Mi = new WeakMap;
		var Di, ji, Fi, Bi, Ni = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			qi = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class Ui {
			constructor(t, e) { Di.add(this), ji.set(this, void 0), Fi.set(this, void 0), Ni(this, Fi, t, "f"), Ni(this, ji, e, "f"), this.autoPlay = !0, this.background = new ne, this.backgroundMask = new ae, this.fullScreen = new re, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new Re, this.manualParticles = [], this.motion = new Ie, this.particles = Hi(qi(this, Fi, "f"), qi(this, ji, "f")), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.style = {}, this.themes = [], this.zLayers = 100 } get backgroundMode() { return this.fullScreen } set backgroundMode(t) { this.fullScreen.load(t) } get fps_limit() { return this.fpsLimit } set fps_limit(t) { this.fpsLimit = t } get retina_detect() { return this.detectRetina } set retina_detect(t) { this.detectRetina = t } load(t) {
				var e, i, o, n, s;
				if (!t) return;
				if (void 0 !== t.preset)
					if (t.preset instanceof Array)
						for (const e of t.preset) this.importPreset(e);
					else this.importPreset(t.preset);
				void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
				const a = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
				void 0 !== a && (this.detectRetina = a), void 0 !== t.duration && (this.duration = t.duration);
				const r = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
				void 0 !== r && (this.fpsLimit = r), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
				const l = null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode;
				if ("boolean" == typeof l ? this.fullScreen.enable = l : this.fullScreen.load(l), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map((t => { const e = new ze; return e.load(t), e }))), this.motion.load(t.motion), this.particles.load(t.particles), this.style = H(this.style, t.style), qi(this, Fi, "f").plugins.loadOptions(this, t), void 0 !== t.responsive)
					for (const e of t.responsive) {
						const t = new He;
						t.load(e), this.responsive.push(t)
					}
				if (this.responsive.sort(((t, e) => t.maxWidth - e.maxWidth)), void 0 !== t.themes)
					for (const e of t.themes) {
						const t = new je;
						t.load(e), this.themes.push(t)
					}
				this.defaultDarkTheme = null === (n = qi(this, Di, "m", Bi).call(this, "dark")) || void 0 === n ? void 0 : n.name, this.defaultLightTheme = null === (s = qi(this, Di, "m", Bi).call(this, "light")) || void 0 === s ? void 0 : s.name
			}
			setResponsive(t, e, i) { this.load(i); const o = this.responsive.find((i => "screen" === i.mode && screen ? i.maxWidth * e > screen.availWidth : i.maxWidth * e > t)); return this.load(null == o ? void 0 : o.options), null == o ? void 0 : o.maxWidth } setTheme(t) {
				if (t) {
					const e = this.themes.find((e => e.name === t));
					e && this.load(e.options)
				} else {
					const t = "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)"),
						e = t && t.matches,
						i = qi(this, Di, "m", Bi).call(this, e ? "dark" : "light");
					i && this.load(i.options)
				}
			}
			importPreset(t) { this.load(qi(this, Fi, "f").plugins.getPreset(t)) }
		}
		ji = new WeakMap, Fi = new WeakMap, Di = new WeakSet, Bi = function(t) { var e; return null !== (e = this.themes.find((e => e.default.value && e.default.mode === t))) && void 0 !== e ? e : this.themes.find((t => t.default.value && "any" === t.default.mode)) };
		var Wi, Qi = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			$i = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class Zi {
			constructor(t, e) { this.container = e, Wi.set(this, void 0), Qi(this, Wi, t, "f"), this.externalInteractors = [], this.particleInteractors = [] } async externalInteract(t) { for (const e of this.externalInteractors) e.isEnabled() && await e.interact(t) } handleClickMode(t) { for (const e of this.externalInteractors) e.handleClickMode && e.handleClickMode(t) } init() {
				const t = $i(this, Wi, "f").plugins.getInteractors(this.container, !0);
				this.externalInteractors = [], this.particleInteractors = [];
				for (const e of t) {
					switch (e.type) {
						case 0:
							this.externalInteractors.push(e);
							break;
						case 1:
							this.particleInteractors.push(e)
					}
					e.init()
				}
			}
			async particlesInteract(t, e) { for (const e of this.externalInteractors) e.clear(t); for (const i of this.particleInteractors) i.isEnabled(t) && await i.interact(t, e) } async reset(t) { for (const e of this.externalInteractors) e.isEnabled() && await e.reset(t); for (const e of this.particleInteractors) e.isEnabled(t) && await e.reset(t) }
		}
		Wi = new WeakMap;
		class Xi extends a {
			constructor(t, e, i) {
				if (super(t, e), "number" != typeof t && t) this.z = t.z;
				else {
					if (void 0 === i) throw new Error("tsParticles - Vector not initialized correctly");
					this.z = i
				}
			}
			static get origin() { return Xi.create(0, 0, 0) } static clone(t) { return Xi.create(t.x, t.y, t.z) } static create(t, e, i) { return new Xi(t, e, i) } add(t) { return t instanceof Xi ? Xi.create(this.x + t.x, this.y + t.y, this.z + t.z) : super.add(t) } addTo(t) { super.addTo(t), t instanceof Xi && (this.z += t.z) } copy() { return Xi.clone(this) } div(t) { return Xi.create(this.x / t, this.y / t, this.z / t) } divTo(t) { super.divTo(t), this.z /= t } mult(t) { return Xi.create(this.x * t, this.y * t, this.z * t) } multTo(t) { super.multTo(t), this.z *= t } setTo(t) {
				super.setTo(t);
				const e = t;
				void 0 !== e.z && (this.z = e.z)
			}
			sub(t) { return t instanceof Xi ? Xi.create(this.x - t.x, this.y - t.y, this.z - t.z) : super.sub(t) } subFrom(t) { super.subFrom(t), t instanceof Xi && (this.z -= t.z) }
		}
		var Yi, Ji = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			Ki = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		const to = t => {
			(O(t.outMode, t.checkModes) || O(t.outMode, t.checkModes)) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius))
		};
		class eo {
			constructor(t, e, i, o, n, s) {
				var l, p, y, f, g, m;
				this.id = e, this.container = i, this.group = s, Yi.set(this, void 0), Ji(this, Yi, t, "f"), this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.retina = { maxDistance: {} }, this.outType = "normal", this.ignoresResizeRatio = !0;
				const b = i.retina.pixelRatio,
					S = i.actualOptions,
					P = Hi(Ki(this, Yi, "f"), i, S.particles),
					_ = P.shape.type,
					x = P.reduceDuplicates;
				if (this.shape = _ instanceof Array ? R(_, this.id, x) : _, null == n ? void 0 : n.shape) {
					if (n.shape.type) {
						const t = n.shape.type;
						this.shape = t instanceof Array ? R(t, this.id, x) : t
					}
					const t = new Ei;
					t.load(n.shape), this.shape && (this.shapeData = this.loadShapeData(t, x))
				} else this.shapeData = this.loadShapeData(P.shape, x);
				P.load(n), P.load(null === (l = this.shapeData) || void 0 === l ? void 0 : l.particles), this.interactivity = new Re, this.interactivity.load(i.actualOptions.interactivity), this.interactivity.load(P.interactivity), this.fill = null !== (y = null === (p = this.shapeData) || void 0 === p ? void 0 : p.fill) && void 0 !== y ? y : this.fill, this.close = null !== (g = null === (f = this.shapeData) || void 0 === f ? void 0 : f.close) && void 0 !== g ? g : this.close, this.options = P, this.pathDelay = 1e3 * v(this.options.move.path.delay);
				const C = h(this.options.zIndex.value);
				i.retina.initParticle(this);
				const A = this.options.size,
					E = A.value,
					V = A.animation;
				if (this.size = { enable: A.animation.enable, value: h(A.value) * i.retina.pixelRatio, max: u(E) * b, min: d(E) * b, loops: 0, maxLoops: h(A.animation.count) }, V.enable) {
					switch (this.size.status = 0, this.size.decay = 1 - h(V.decay), V.startValue) {
						case "min":
							this.size.value = this.size.min, this.size.status = 0;
							break;
						case "random":
							this.size.value = c(this.size) * b, this.size.status = Math.random() >= .5 ? 0 : 1;
							break;
						default:
							this.size.value = this.size.max, this.size.status = 1
					}
					this.size.velocity = (null !== (m = this.retina.sizeAnimationSpeed) && void 0 !== m ? m : i.retina.sizeAnimationSpeed) / 100 * i.retina.reduceFactor, V.sync || (this.size.velocity *= Math.random())
				}
				this.bubble = { inRange: !1 }, this.position = this.calcPosition(i, o, r(C, 0, i.zLayers)), this.initialPosition = this.position.copy();
				const T = i.canvas.size,
					G = this.options.move.center;
				switch (this.moveCenter = { x: T.width * G.x / 100, y: T.height * G.y / 100, radius: this.options.move.center.radius }, this.direction = w(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
					case "inside":
						this.outType = "inside";
						break;
					case "outside":
						this.outType = "outside"
				}
				this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - h(this.options.move.decay), this.offset = a.origin;
				const O = i.particles;
				O.needsSort = O.needsSort || O.lastZIndex < this.position.z, O.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / i.zLayers, this.sides = 24;
				let k = i.drawers.get(this.shape);
				k || (k = Ki(this, Yi, "f").plugins.getShapeDrawer(this.shape), k && i.drawers.set(this.shape, k)), (null == k ? void 0 : k.loadShape) && (null == k || k.loadShape(this));
				const M = null == k ? void 0 : k.getSidesCount;
				M && (this.sides = M(this)), this.spawning = !1, this.shadowColor = ht(this.options.shadow.color);
				for (const t of i.particles.updaters) t.init && t.init(this);
				for (const t of i.particles.movers) t.init && t.init(this);
				k && k.particleInit && k.particleInit(i, this);
				for (const [, t] of i.plugins) t.particleCreated && t.particleCreated(this)
			}
			destroy(t) {
				if (this.unbreakable || this.destroyed) return;
				this.destroyed = !0, this.bubble.inRange = !1;
				for (const [, e] of this.container.plugins) e.particleDestroyed && e.particleDestroyed(this, t);
				if (t) return;
				"split" === this.options.destroy.mode && this.split()
			}
			draw(t) {
				const e = this.container;
				for (const [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
				e.canvas.drawParticle(this, t)
			}
			getFillColor() {
				var t, e;
				const i = null !== (t = this.bubble.color) && void 0 !== t ? t : Rt(this.color);
				if (i && this.roll && (this.backColor || this.roll.alter)) {
					const t = this.roll.horizontal && this.roll.vertical ? 2 : 1,
						o = this.roll.horizontal ? Math.PI / 2 : 0;
					if (Math.floor(((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + o) / (Math.PI / t)) % 2) { if (this.backColor) return this.backColor; if (this.roll.alter) return $t(i, this.roll.alter.type, this.roll.alter.value) }
				}
				return i
			}
			getMass() { return this.getRadius() ** 2 * Math.PI / 2 } getPosition() { return { x: this.position.x + this.offset.x, y: this.position.y + this.offset.y, z: this.position.z } } getRadius() { var t; return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value } getStrokeColor() { var t, e; return null !== (e = null !== (t = this.bubble.color) && void 0 !== t ? t : Rt(this.strokeColor)) && void 0 !== e ? e : this.getFillColor() } isInsideCanvas() {
				const t = this.getRadius(),
					e = this.container.canvas.size;
				return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
			}
			isVisible() { return !this.destroyed && !this.spawning && this.isInsideCanvas() } reset() { this.opacity && (this.opacity.loops = 0), this.size.loops = 0 } calcPosition(t, e, i, o = 0) {
				var n, s, a, r;
				for (const [, o] of t.plugins) { const t = void 0 !== o.particlePosition ? o.particlePosition(e, this) : void 0; if (void 0 !== t) return Xi.create(t.x, t.y, i) }
				const l = x({ size: t.canvas.size, position: e }),
					c = Xi.create(l.x, l.y, i),
					h = this.getRadius(),
					d = this.options.move.outModes,
					u = e => { to({ outMode: e, checkModes: ["bounce", "bounce-horizontal"], coord: c.x, maxCoord: t.canvas.size.width, setCb: t => c.x += t, radius: h }) },
					p = e => { to({ outMode: e, checkModes: ["bounce", "bounce-vertical"], coord: c.y, maxCoord: t.canvas.size.height, setCb: t => c.y += t, radius: h }) };
				return u(null !== (n = d.left) && void 0 !== n ? n : d.default), u(null !== (s = d.right) && void 0 !== s ? s : d.default), p(null !== (a = d.top) && void 0 !== a ? a : d.default), p(null !== (r = d.bottom) && void 0 !== r ? r : d.default), this.checkOverlap(c, o) ? this.calcPosition(t, void 0, i, o + 1) : c
			}
			calculateVelocity() {
				const t = g(this.direction).copy(),
					e = this.options.move;
				if ("inside" === e.direction || "outside" === e.direction) return t;
				const i = Math.PI / 180 * h(e.angle.value),
					o = Math.PI / 180 * h(e.angle.offset),
					n = { left: o - i / 2, right: o + i / 2 };
				return e.straight || (t.angle += c(p(n.left, n.right))), e.random && "number" == typeof e.speed && (t.length *= Math.random()), t
			}
			checkOverlap(t, e = 0) {
				const i = this.options.collisions,
					o = this.getRadius();
				if (!i.enable) return !1;
				const n = i.overlap;
				if (n.enable) return !1;
				const s = n.retries;
				if (s >= 0 && e > s) throw new Error("Particle is overlapping and can't be placed");
				let a = !1;
				for (const e of this.container.particles.array)
					if (f(t, e.position) < o + e.getRadius()) { a = !0; break } return a
			}
			loadShapeData(t, e) { const i = t.options[this.shape]; if (i) return H({}, i instanceof Array ? R(i, this.id, e) : i) } split() {
				const t = this.options.destroy.split;
				if (t.count >= 0 && this.splitCount++ > t.count) return;
				const e = v(t.rate),
					i = t.particles instanceof Array ? R(t.particles) : t.particles;
				for (let t = 0; t < e; t++) this.container.particles.addSplitParticle(this, i)
			}
		}
		Yi = new WeakMap;
		class io { constructor(t, e) { this.position = t, this.particle = e } } class oo { constructor(t, e) { this.position = { x: t, y: e } } } class no extends oo {
			constructor(t, e, i) { super(t, e), this.radius = i } contains(t) { return f(t, this.position) <= this.radius } intersects(t) {
				const e = t,
					i = t,
					o = this.position,
					n = t.position,
					s = Math.abs(n.x - o.x),
					a = Math.abs(n.y - o.y),
					r = this.radius;
				if (void 0 !== i.radius) { return r + i.radius > Math.sqrt(s * s + a + a) }
				if (void 0 !== e.size) {
					const t = e.size.width,
						i = e.size.height,
						o = Math.pow(s - t, 2) + Math.pow(a - i, 2);
					return !(s > r + t || a > r + i) && (s <= t || a <= i || o <= r * r)
				}
				return !1
			}
		}
		class so extends oo {
			constructor(t, e, i, o) { super(t, e), this.size = { height: o, width: i } } contains(t) {
				const e = this.size.width,
					i = this.size.height,
					o = this.position;
				return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i
			}
			intersects(t) {
				const e = t,
					i = t,
					o = this.size.width,
					n = this.size.height,
					s = this.position,
					a = t.position;
				if (void 0 !== i.radius) return i.intersects(this);
				if (!e.size) return !1;
				const r = e.size,
					l = r.width,
					c = r.height;
				return a.x < s.x + o && a.x + l > s.x && a.y < s.y + n && a.y + c > s.y
			}
		}
		class ao extends no {
			constructor(t, e, i, o) { super(t, e, i), this.canvasSize = o, this.canvasSize = Object.assign({}, o) } contains(t) { if (super.contains(t)) return !0; const e = { x: t.x - this.canvasSize.width, y: t.y }; if (super.contains(e)) return !0; const i = { x: t.x - this.canvasSize.width, y: t.y - this.canvasSize.height }; if (super.contains(i)) return !0; const o = { x: t.x, y: t.y - this.canvasSize.height }; return super.contains(o) } intersects(t) {
				if (super.intersects(t)) return !0;
				const e = t,
					i = t,
					o = { x: t.position.x - this.canvasSize.width, y: t.position.y - this.canvasSize.height };
				if (void 0 !== i.radius) { const t = new no(o.x, o.y, 2 * i.radius); return super.intersects(t) }
				if (void 0 !== e.size) { const t = new so(o.x, o.y, 2 * e.size.width, 2 * e.size.height); return super.intersects(t) }
				return !1
			}
		}
		class ro {
			constructor(t, e) { this.rectangle = t, this.capacity = e, this.points = [], this.divided = !1 } insert(t) { var e, i, o, n, s; return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (s = (null === (e = this.northEast) || void 0 === e ? void 0 : e.insert(t)) || (null === (i = this.northWest) || void 0 === i ? void 0 : i.insert(t)) || (null === (o = this.southEast) || void 0 === o ? void 0 : o.insert(t)) || (null === (n = this.southWest) || void 0 === n ? void 0 : n.insert(t))) && void 0 !== s && s)) } query(t, e, i) { var o, n, s, a; const r = null != i ? i : []; if (!t.intersects(this.rectangle)) return []; for (const i of this.points) !t.contains(i.position) && f(t.position, i.position) > i.particle.getRadius() && (!e || e(i.particle)) || r.push(i.particle); return this.divided && (null === (o = this.northEast) || void 0 === o || o.query(t, e, r), null === (n = this.northWest) || void 0 === n || n.query(t, e, r), null === (s = this.southEast) || void 0 === s || s.query(t, e, r), null === (a = this.southWest) || void 0 === a || a.query(t, e, r)), r } queryCircle(t, e, i) { return this.query(new no(t.x, t.y, e), i) } queryCircleWarp(t, e, i, o) {
				const n = i,
					s = i;
				return this.query(new ao(t.x, t.y, e, void 0 !== n.canvas ? n.canvas.size : s), o)
			}
			queryRectangle(t, e, i) { return this.query(new so(t.x, t.y, e.width, e.height), i) } subdivide() {
				const t = this.rectangle.position.x,
					e = this.rectangle.position.y,
					i = this.rectangle.size.width,
					o = this.rectangle.size.height,
					n = this.capacity;
				this.northEast = new ro(new so(t, e, i / 2, o / 2), n), this.northWest = new ro(new so(t + i / 2, e, i / 2, o / 2), n), this.southEast = new ro(new so(t, e + o / 2, i / 2, o / 2), n), this.southWest = new ro(new so(t + i / 2, e + o / 2, i / 2, o / 2), n), this.divided = !0
			}
		}
		var lo, co = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			ho = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class uo {
			constructor(t, e) {
				this.container = e, lo.set(this, void 0), co(this, lo, t, "f"), this.nextId = 0, this.array = [], this.zArray = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = { links: new Map, triangles: new Map }, this.interactionManager = new Zi(ho(this, lo, "f"), e);
				const i = this.container.canvas.size;
				this.quadTree = new ro(new so(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), this.movers = ho(this, lo, "f").plugins.getMovers(e, !0), this.updaters = ho(this, lo, "f").plugins.getUpdaters(e, !0)
			}
			get count() { return this.array.length } addManualParticles() {
				const t = this.container,
					e = t.actualOptions;
				for (const i of e.manualParticles) this.addParticle(S({ size: t.canvas.size, position: i.position }), i.options)
			}
			addParticle(t, e, i) {
				const o = this.container,
					n = o.actualOptions.particles.number.limit * o.density;
				if (n > 0) {
					const t = this.count + 1 - n;
					t > 0 && this.removeQuantity(t)
				}
				return this.pushParticle(t, e, i)
			}
			addSplitParticle(t, e) {
				const i = t.options.destroy.split,
					o = Hi(ho(this, lo, "f"), this.container, t.options),
					n = v(i.factor);
				o.color.load({ value: { hsl: t.getFillColor() } }), "number" == typeof o.size.value ? o.size.value /= n : (o.size.value.min /= n, o.size.value.max /= n), o.load(e);
				const s = i.sizeOffset ? p(-t.size.value, t.size.value) : 0,
					a = { x: t.position.x + c(s), y: t.position.y + c(s) };
				return this.pushParticle(a, o, t.group, (e => !(e.size.value < .5) && (e.velocity.length = c(p(t.velocity.length, e.velocity.length)), e.splitCount = t.splitCount + 1, e.unbreakable = !0, setTimeout((() => { e.unbreakable = !1 }), 500), !0)))
			}
			clear() { this.array = [], this.zArray = [] } destroy() { this.array = [], this.zArray = [], this.movers = [], this.updaters = [] } async draw(t) {
				const e = this.container,
					i = this.container.canvas.size;
				this.quadTree = new ro(new so(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), e.canvas.clear(), await this.update(t), this.needsSort && (this.zArray.sort(((t, e) => e.position.z - t.position.z || t.id - e.id)), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
				for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
				for (const e of this.zArray) e.draw(t)
			}
			getLinkFrequency(t, e) {
				const i = p(t.id, e.id),
					o = `${d(i)}_${u(i)}`;
				let n = this.freqs.links.get(o);
				return void 0 === n && (n = Math.random(), this.freqs.links.set(o, n)), n
			}
			getTriangleFrequency(t, e, i) {
				let [o, n, s] = [t.id, e.id, i.id];
				o > n && ([n, o] = [o, n]), n > s && ([s, n] = [n, s]), o > s && ([s, o] = [o, s]);
				const a = `${o}_${n}_${s}`;
				let r = this.freqs.triangles.get(a);
				return void 0 === r && (r = Math.random(), this.freqs.triangles.set(a, r)), r
			}
			handleClickMode(t) { this.interactionManager.handleClickMode(t) } init() {
				var t;
				const e = this.container,
					i = e.actualOptions;
				this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
				let o = !1;
				this.updaters = ho(this, lo, "f").plugins.getUpdaters(e, !0), this.interactionManager.init();
				for (const [, t] of e.plugins)
					if (void 0 !== t.particlesInitialization && (o = t.particlesInitialization()), o) break;
				if (this.addManualParticles(), !o) { for (const e in i.particles.groups) { const o = i.particles.groups[e]; for (let n = this.count, s = 0; s < (null === (t = o.number) || void 0 === t ? void 0 : t.value) && n < i.particles.number.value; n++, s++) this.addParticle(void 0, o, e) } for (let t = this.count; t < i.particles.number.value; t++) this.addParticle() } this.interactionManager.init(), e.pathGenerator.init(e)
			}
			push(t, e, i, o) {
				this.pushing = !0;
				for (let n = 0; n < t; n++) this.addParticle(null == e ? void 0 : e.position, i, o);
				this.pushing = !1
			}
			async redraw() { this.clear(), this.init(), await this.draw({ value: 0, factor: 0 }) } remove(t, e, i) { this.removeAt(this.array.indexOf(t), void 0, e, i) } removeAt(t, e = 1, i, o) {
				if (!(t >= 0 && t <= this.count)) return;
				let n = 0;
				for (let s = t; n < e && s < this.count; s++) {
					const t = this.array[s];
					if (!t || t.group !== i) continue;
					t.destroy(o), this.array.splice(s--, 1);
					const e = this.zArray.indexOf(t);
					this.zArray.splice(e, 1), n++, ho(this, lo, "f").dispatchEvent("particleRemoved", { container: this.container, data: { particle: t } })
				}
			}
			removeQuantity(t, e) { this.removeAt(0, t, e) } setDensity() {
				const t = this.container.actualOptions;
				for (const e in t.particles.groups) this.applyDensity(t.particles.groups[e], 0, e);
				this.applyDensity(t.particles, t.manualParticles.length)
			}
			async update(t) {
				const e = this.container,
					i = [];
				e.pathGenerator.update();
				for (const [, i] of e.plugins) i.update && i.update(t);
				for (const o of this.array) {
					const n = e.canvas.resizeFactor;
					n && !o.ignoresResizeRatio && (o.position.x *= n.width, o.position.y *= n.height), o.ignoresResizeRatio = !1, await this.interactionManager.reset(o);
					for (const [, e] of this.container.plugins) {
						if (o.destroyed) break;
						e.particleUpdate && e.particleUpdate(o, t)
					}
					for (const e of this.movers) e.isEnabled(o) && e.move(o, t);
					o.destroyed ? i.push(o) : this.quadTree.insert(new io(o.getPosition(), o))
				}
				for (const t of i) this.remove(t);
				await this.interactionManager.externalInteract(t);
				for (const i of e.particles.array) {
					for (const e of this.updaters) e.update(i, t);
					i.destroyed || i.spawning || await this.interactionManager.particlesInteract(i, t)
				}
				delete e.canvas.resizeFactor
			}
			applyDensity(t, e, i) {
				var o;
				if (!(null === (o = t.number.density) || void 0 === o ? void 0 : o.enable)) return;
				const n = t.number,
					s = this.initDensityFactor(n.density),
					a = n.value,
					r = n.limit > 0 ? n.limit : a,
					l = Math.min(a, r) * s + e,
					c = Math.min(this.count, this.array.filter((t => t.group === i)).length);
				this.limit = n.limit * s, c < l ? this.push(Math.abs(l - c), void 0, t, i) : c > l && this.removeQuantity(c - l, i)
			}
			initDensityFactor(t) {
				const e = this.container;
				if (!e.canvas.element || !t.enable) return 1;
				const i = e.canvas.element,
					o = e.retina.pixelRatio;
				return i.width * i.height / (t.factor * o ** 2 * t.area)
			}
			pushParticle(t, e, i, o) { try { const n = new eo(ho(this, lo, "f"), this.nextId, this.container, t, e, i); let s = !0; if (o && (s = o(n)), !s) return; return this.array.push(n), this.zArray.push(n), this.nextId++, ho(this, lo, "f").dispatchEvent("particleAdded", { container: this.container, data: { particle: n } }), n } catch (t) { return void console.warn(`error adding particle: ${t}`) } }
		}
		lo = new WeakMap;
		class po {
			constructor(t) { this.container = t } init() {
				const t = this.container,
					e = t.actualOptions;
				this.pixelRatio = !e.detectRetina || V() ? 1 : window.devicePixelRatio;
				const i = this.container.actualOptions.motion;
				if (i && (i.disable || i.reduce.value))
					if (V() || "undefined" == typeof matchMedia || !matchMedia) this.reduceFactor = 1;
					else {
						const e = matchMedia("(prefers-reduced-motion: reduce)");
						if (e) {
							this.handleMotionChange(e);
							const i = () => { this.handleMotionChange(e), t.refresh().catch((() => {})) };
							void 0 !== e.addEventListener ? e.addEventListener("change", i) : void 0 !== e.addListener && e.addListener(i)
						}
					}
				else this.reduceFactor = 1;
				const o = this.pixelRatio;
				if (t.canvas.element) {
					const e = t.canvas.element;
					t.canvas.size.width = e.offsetWidth * o, t.canvas.size.height = e.offsetHeight * o
				}
				const n = e.particles;
				this.attractDistance = h(n.move.attract.distance) * o, this.linksDistance = n.links.distance * o, this.linksWidth = n.links.width * o, this.sizeAnimationSpeed = h(n.size.animation.speed) * o, this.maxSpeed = h(n.move.gravity.maxSpeed) * o;
				const s = e.interactivity.modes;
				this.connectModeDistance = s.connect.distance * o, this.connectModeRadius = s.connect.radius * o, this.grabModeDistance = s.grab.distance * o, this.repulseModeDistance = s.repulse.distance * o, this.bounceModeDistance = s.bounce.distance * o, this.attractModeDistance = s.attract.distance * o, this.slowModeRadius = s.slow.radius * o, this.bubbleModeDistance = s.bubble.distance * o, s.bubble.size && (this.bubbleModeSize = s.bubble.size * o)
			}
			initParticle(t) {
				const e = t.options,
					i = this.pixelRatio,
					o = e.move.distance,
					n = t.retina;
				n.attractDistance = h(e.move.attract.distance) * i, n.linksDistance = e.links.distance * i, n.linksWidth = e.links.width * i, n.moveDrift = h(e.move.drift) * i, n.moveSpeed = h(e.move.speed) * i, n.sizeAnimationSpeed = h(e.size.animation.speed) * i;
				const s = n.maxDistance;
				s.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0, s.vertical = void 0 !== o.vertical ? o.vertical * i : void 0, n.maxSpeed = h(e.move.gravity.maxSpeed) * i
			}
			handleMotionChange(t) {
				const e = this.container.actualOptions;
				if (t.matches) {
					const t = e.motion;
					this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1
				} else this.reduceFactor = 1
			}
		}
		var vo, yo, fo = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			wo = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };

		function go(t) { return !t.destroyed }

		function mo(t, e, ...i) { const o = new Ui(t, e); return Ii(o, ...i), o } class bo {
			constructor(t, e, i) { this.id = e, vo.set(this, void 0), yo.set(this, void 0), fo(this, vo, t, "f"), this.fpsLimit = 120, this.duration = 0, this.lifeTime = 0, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new po(this), this.canvas = new Kt(this), this.particles = new uo(wo(this, vo, "f"), this), this.drawer = new ie(this), this.pathGenerator = { generate: t => { const e = t.velocity.copy(); return e.angle += e.length * Math.PI / 180, e }, init: () => {}, update: () => {} }, this.interactivity = { mouse: { clicking: !1, inside: !1 } }, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = mo(wo(this, vo, "f"), this), this.actualOptions = mo(wo(this, vo, "f"), this), fo(this, yo, new ee(this), "f"), "undefined" != typeof IntersectionObserver && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((t => this.intersectionManager(t)))), wo(this, vo, "f").dispatchEvent("containerBuilt", { container: this }) } get options() { return this._options } get sourceOptions() { return this._sourceOptions } addClickHandler(t) {
				if (!go(this)) return;
				const e = this.interactivity.element;
				if (!e) return;
				const i = (e, i, o) => {
					if (!go(this)) return;
					const n = this.retina.pixelRatio,
						s = { x: i.x * n, y: i.y * n },
						a = this.particles.quadTree.queryCircle(s, o * n);
					t(e, a)
				};
				let o = !1,
					n = !1;
				e.addEventListener("click", (t => {
					if (!go(this)) return;
					const e = t,
						o = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
					i(t, o, 1)
				})), e.addEventListener("touchstart", (() => { go(this) && (o = !0, n = !1) })), e.addEventListener("touchmove", (() => { go(this) && (n = !0) })), e.addEventListener("touchend", (t => {
					var e, s, a;
					if (go(this)) {
						if (o && !n) {
							const o = t;
							let n = o.touches[o.touches.length - 1];
							if (!n && (n = o.changedTouches[o.changedTouches.length - 1], !n)) return;
							const r = null === (e = this.canvas.element) || void 0 === e ? void 0 : e.getBoundingClientRect(),
								l = { x: n.clientX - (null !== (s = null == r ? void 0 : r.left) && void 0 !== s ? s : 0), y: n.clientY - (null !== (a = null == r ? void 0 : r.top) && void 0 !== a ? a : 0) };
							i(t, l, Math.max(n.radiusX, n.radiusY))
						}
						o = !1, n = !1
					}
				})), e.addEventListener("touchcancel", (() => { go(this) && (o = !1, n = !1) }))
			}
			destroy() {
				if (!go(this)) return;
				this.stop(), this.particles.destroy(), this.canvas.destroy();
				for (const [, t] of this.drawers) t.destroy && t.destroy(this);
				for (const t of this.drawers.keys()) this.drawers.delete(t);
				this.destroyed = !0;
				const t = wo(this, vo, "f").dom(),
					e = t.findIndex((t => t === this));
				e >= 0 && t.splice(e, 1), wo(this, vo, "f").dispatchEvent("containerDestroyed", { container: this })
			}
			draw(t) {
				if (!go(this)) return;
				let e = t;
				this.drawAnimationFrame = T()((async t => { e && (this.lastFrameTime = void 0, e = !1), await this.drawer.nextFrame(t) }))
			}
			exportConfiguration() { return JSON.stringify(this.actualOptions, void 0, 2) } exportImage(t, e, i) { var o; return null === (o = this.canvas.element) || void 0 === o ? void 0 : o.toBlob(t, null != e ? e : "image/png", i) } exportImg(t) { this.exportImage(t) } getAnimationStatus() { return !this.paused && !this.pageHidden && go(this) } handleClickMode(t) { if (go(this)) { this.particles.handleClickMode(t); for (const [, e] of this.plugins) e.handleClickMode && e.handleClickMode(t) } } async init() {
				if (!go(this)) return;
				const t = wo(this, vo, "f").plugins.getSupportedShapes();
				for (const e of t) {
					const t = wo(this, vo, "f").plugins.getShapeDrawer(e);
					t && this.drawers.set(e, t)
				}
				this._options = mo(wo(this, vo, "f"), this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = mo(wo(this, vo, "f"), this, this._options), this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = h(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
				const e = wo(this, vo, "f").plugins.getAvailablePlugins(this);
				for (const [t, i] of e) this.plugins.set(t, i);
				for (const [, t] of this.drawers) t.init && await t.init(this);
				for (const [, t] of this.plugins) t.init ? t.init(this.actualOptions) : void 0 !== t.initAsync && await t.initAsync(this.actualOptions);
				const i = this.actualOptions.particles.move.path;
				i.generator && this.setPath(wo(this, vo, "f").plugins.getPathGenerator(i.generator)), wo(this, vo, "f").dispatchEvent("containerInit", { container: this }), this.particles.init(), this.particles.setDensity();
				for (const [, t] of this.plugins) void 0 !== t.particlesSetup && t.particlesSetup();
				wo(this, vo, "f").dispatchEvent("particlesSetup", { container: this })
			}
			async loadTheme(t) { go(this) && (this.currentTheme = t, await this.refresh()) } pause() {
				if (go(this) && (void 0 !== this.drawAnimationFrame && (G()(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused)) {
					for (const [, t] of this.plugins) t.pause && t.pause();
					this.pageHidden || (this.paused = !0), wo(this, vo, "f").dispatchEvent("containerPaused", { container: this })
				}
			}
			play(t) {
				if (!go(this)) return;
				const e = this.paused || t;
				if (!this.firstStart || this.actualOptions.autoPlay) {
					if (this.paused && (this.paused = !1), e)
						for (const [, t] of this.plugins) t.play && t.play();
					wo(this, vo, "f").dispatchEvent("containerPlay", { container: this }), this.draw(e || !1)
				} else this.firstStart = !1
			}
			async refresh() { if (go(this)) return this.stop(), this.start() } async reset() { if (go(this)) return this._options = mo(wo(this, vo, "f"), this), this.refresh() } setNoise(t, e, i) { go(this) && this.setPath(t, e, i) } setPath(t, e, i) {
				var o, n, s;
				if (t && go(this))
					if ("function" == typeof t) this.pathGenerator.generate = t, e && (this.pathGenerator.init = e), i && (this.pathGenerator.update = i);
					else {
						const e = this.pathGenerator;
						this.pathGenerator = t, (o = this.pathGenerator).generate || (o.generate = e.generate), (n = this.pathGenerator).init || (n.init = e.init), (s = this.pathGenerator).update || (s.update = e.update)
					}
			}
			async start() {
				if (!this.started && go(this)) {
					await this.init(), this.started = !0, wo(this, yo, "f").addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
					for (const [, t] of this.plugins) void 0 !== t.startAsync ? await t.startAsync() : void 0 !== t.start && t.start();
					wo(this, vo, "f").dispatchEvent("containerStarted", { container: this }), this.play()
				}
			}
			stop() {
				if (this.started && go(this)) {
					this.firstStart = !0, this.started = !1, wo(this, yo, "f").removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.unobserve(this.interactivity.element);
					for (const [, t] of this.plugins) t.stop && t.stop();
					for (const t of this.plugins.keys()) this.plugins.delete(t);
					wo(this, vo, "f").plugins.destroy(this), delete this.particles.grabLineColor, this._sourceOptions = this._options, wo(this, vo, "f").dispatchEvent("containerStopped", { container: this })
				}
			}
			updateActualOptions() { this.actualOptions.responsive = []; const t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options); return this.actualOptions.setTheme(this.currentTheme), this.responsiveMaxWidth != t && (this.responsiveMaxWidth = t, !0) } intersectionManager(t) {
				if (this.actualOptions.pauseOnOutsideViewport)
					for (const e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause())
			}
		}
		vo = new WeakMap, yo = new WeakMap;
		var So, Po = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			_o = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		async function xo(t, e) { const i = t instanceof Array ? R(t, e) : t; if (!i) return; const o = await fetch(i); return o.ok ? o.json() : (n = o.status, console.error(`Error tsParticles - fetch status: ${n}`), void console.error("Error tsParticles - File config not found")); var n } class Co {
			constructor(t) { So.set(this, void 0), Po(this, So, t, "f") } load(t, e, i) { const o = { index: i, remote: !1 }; return "string" == typeof t ? o.tagId = t : o.options = t, "number" == typeof e ? o.index = e : o.options = null != e ? e : o.options, this.loadOptions(o) } async loadJSON(t, e, i) { let o, n; return "number" == typeof e || void 0 === e ? o = t : (n = t, o = e), this.loadRemoteOptions({ tagId: n, url: o, index: i, remote: !0 }) } async loadOptions(t) {
				var e, i, o;
				const n = null !== (e = t.tagId) && void 0 !== e ? e : `tsparticles${Math.floor(1e4*Math.random())}`,
					{ index: s, url: a, remote: r } = t,
					l = r ? await xo(a, s) : t.options;
				let c = null !== (i = t.element) && void 0 !== i ? i : document.getElementById(n);
				c || (c = document.createElement("div"), c.id = n, null === (o = document.querySelector("body")) || void 0 === o || o.append(c));
				const h = l instanceof Array ? R(l, s) : l,
					d = _o(this, So, "f").dom(),
					u = d.findIndex((t => t.id === n));
				if (u >= 0) {
					const t = _o(this, So, "f").domItem(u);
					t && !t.destroyed && (t.destroy(), d.splice(u, 1))
				}
				let p;
				if ("canvas" === c.tagName.toLowerCase()) p = c, p.dataset[W] = "false";
				else {
					const t = c.getElementsByTagName("canvas");
					t.length ? (p = t[0], p.dataset[W] = "false") : (p = document.createElement("canvas"), p.dataset[W] = "true", c.appendChild(p))
				}
				p.style.width || (p.style.width = "100%"), p.style.height || (p.style.height = "100%");
				const v = new bo(_o(this, So, "f"), n, h);
				return u >= 0 ? d.splice(u, 0, v) : d.push(v), v.canvas.loadCanvas(p), await v.start(), v
			}
			async loadRemoteOptions(t) { return this.loadOptions(t) } async set(t, e, i, o) { const n = { index: o, remote: !1 }; return "string" == typeof t ? n.tagId = t : n.element = t, e instanceof HTMLElement ? n.element = e : n.options = e, "number" == typeof i ? n.index = i : n.options = null != i ? i : n.options, this.loadOptions(n) } async setJSON(t, e, i, o) { let n, s, a, r; return t instanceof HTMLElement ? (r = t, n = e, a = i) : (s = t, r = e, n = i, a = o), this.loadRemoteOptions({ tagId: s, url: n, index: a, element: r, remote: !0 }) }
		}
		So = new WeakMap;
		var Ao, Eo = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i };
		class Vo {
			constructor(t) { Ao.set(this, void 0), Eo(this, Ao, t, "f"), this.plugins = [], this.interactorsInitializers = new Map, this.moversInitializers = new Map, this.updatersInitializers = new Map, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map } addInteractor(t, e) { this.interactorsInitializers.set(t, e) } addParticleMover(t, e) { this.moversInitializers.set(t, e) } addParticleUpdater(t, e) { this.updatersInitializers.set(t, e) } addPathGenerator(t, e) { this.getPathGenerator(t) || this.pathGenerators.set(t, e) } addPlugin(t) { this.getPlugin(t.id) || this.plugins.push(t) } addPreset(t, e, i = !1) {!i && this.getPreset(t) || this.presets.set(t, e) } addShapeDrawer(t, e) { this.getShapeDrawer(t) || this.drawers.set(t, e) } destroy(t) { this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t) } getAvailablePlugins(t) { const e = new Map; for (const i of this.plugins) i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t)); return e } getInteractors(t, e = !1) { let i = this.interactors.get(t); return i && !e || (i = [...this.interactorsInitializers.values()].map((e => e(t))), this.interactors.set(t, i)), i } getMovers(t, e = !1) { let i = this.movers.get(t); return i && !e || (i = [...this.moversInitializers.values()].map((e => e(t))), this.movers.set(t, i)), i } getPathGenerator(t) { return this.pathGenerators.get(t) } getPlugin(t) { return this.plugins.find((e => e.id === t)) } getPreset(t) { return this.presets.get(t) } getShapeDrawer(t) { return this.drawers.get(t) } getSupportedShapes() { return this.drawers.keys() } getUpdaters(t, e = !1) { let i = this.updaters.get(t); return i && !e || (i = [...this.updatersInitializers.values()].map((e => e(t))), this.updaters.set(t, i)), i } loadOptions(t, e) { for (const i of this.plugins) i.loadOptions(t, e) } loadParticlesOptions(t, e, ...i) {
				const o = this.updaters.get(t);
				if (o)
					for (const t of o) t.loadOptions && t.loadOptions(e, ...i)
			}
		}
		Ao = new WeakMap;
		var To, Go, Oo, ko, Mo = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			Ro = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class zo {
			constructor() { To.set(this, void 0), Go.set(this, void 0), Oo.set(this, void 0), ko.set(this, void 0), Mo(this, To, [], "f"), Mo(this, Go, new s, "f"), Mo(this, Oo, !1, "f"), Mo(this, ko, new Co(this), "f"), this.plugins = new Vo(this) } addEventListener(t, e) { Ro(this, Go, "f").addEventListener(t, e) } async addInteractor(t, e) { this.plugins.addInteractor(t, e), await this.refresh() } async addMover(t, e) { this.plugins.addParticleMover(t, e), await this.refresh() } async addParticleUpdater(t, e) { this.plugins.addParticleUpdater(t, e), await this.refresh() } async addPathGenerator(t, e) { this.plugins.addPathGenerator(t, e), await this.refresh() } async addPlugin(t) { this.plugins.addPlugin(t), await this.refresh() } async addPreset(t, e, i = !1) { this.plugins.addPreset(t, e, i), await this.refresh() } async addShape(t, e, i, o, n) {
				let s;
				s = "function" == typeof e ? { afterEffect: o, destroy: n, draw: e, init: i } : e, this.plugins.addShapeDrawer(t, s), await this.refresh()
			}
			dispatchEvent(t, e) { Ro(this, Go, "f").dispatchEvent(t, e) } dom() { return Ro(this, To, "f") } domItem(t) {
				const e = this.dom(),
					i = e[t];
				if (i && !i.destroyed) return i;
				e.splice(t, 1)
			}
			init() { Ro(this, Oo, "f") || Mo(this, Oo, !0, "f") } async load(t, e) { return Ro(this, ko, "f").load(t, e) } async loadFromArray(t, e, i) { return Ro(this, ko, "f").load(t, e, i) } async loadJSON(t, e, i) { return Ro(this, ko, "f").loadJSON(t, e, i) } async refresh() { for (const t of this.dom()) await t.refresh() } removeEventListener(t, e) { Ro(this, Go, "f").removeEventListener(t, e) } async set(t, e, i) { return Ro(this, ko, "f").set(t, e, i) } async setJSON(t, e, i, o) { return Ro(this, ko, "f").setJSON(t, e, i, o) } setOnClickHandler(t) { const e = this.dom(); if (!e.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"); for (const i of e) i.addClickHandler(t) }
		}
		To = new WeakMap, Go = new WeakMap, Oo = new WeakMap, ko = new WeakMap;
		class Lo { constructor(t) { this.container = t, this.type = 0 } } class Io { constructor(t) { this.container = t, this.type = 1 } }
		const Ho = new zo;
		Ho.init();
		class Do { constructor() { this.radius = 0, this.mass = 0 } load(t) { t && (void 0 !== t.mass && (this.mass = t.mass), void 0 !== t.radius && (this.radius = t.radius)) } } class jo extends Je { constructor() { super(), this.density = 5, this.value = 50, this.limit = new Do } load(t) { t && (super.load(t), void 0 !== t.density && (this.density = t.density), "number" == typeof t.limit ? this.limit.radius = t.limit : this.limit.load(t.limit)) } } class Fo { constructor() { this.color = new oe, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new jo } load(t) { void 0 !== t && (void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.draggable && (this.draggable = t.draggable), this.name = t.name, void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.position && (this.position = {}, void 0 !== t.position.x && (this.position.x = p(t.position.x)), void 0 !== t.position.y && (this.position.y = p(t.position.y))), void 0 !== t.size && this.size.load(t.size), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.orbits && (this.orbits = t.orbits)) } } class Bo {
			constructor(t, e, i, o) {
				var n, s, r;
				this.absorbers = t, this.container = e, this.initialPosition = o ? a.create(o.x, o.y) : void 0, i instanceof Fo ? this.options = i : (this.options = new Fo, this.options.load(i)), this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = h(this.options.size.value) * e.retina.pixelRatio, this.mass = this.size * this.options.size.density * e.retina.reduceFactor;
				const l = this.options.size.limit;
				this.limit = { radius: l.radius * e.retina.pixelRatio * e.retina.reduceFactor, mass: l.mass }, this.color = null !== (n = ht(this.options.color)) && void 0 !== n ? n : { b: 0, g: 0, r: 0 }, this.position = null !== (r = null === (s = this.initialPosition) || void 0 === s ? void 0 : s.copy()) && void 0 !== r ? r : this.calcPosition()
			}
			attract(t) {
				const e = this.container,
					i = this.options;
				if (i.draggable) {
					const t = e.interactivity.mouse;
					if (t.clicking && t.downPosition) { f(this.position, t.downPosition) <= this.size && (this.dragging = !0) } else this.dragging = !1;
					this.dragging && t.position && (this.position.x = t.position.x, this.position.y = t.position.y)
				}
				const o = t.getPosition(),
					{ dx: n, dy: s, distance: r } = y(this.position, o),
					l = a.create(n, s);
				if (l.length = this.mass / Math.pow(r, 2) * e.retina.reduceFactor, r < this.size + t.getRadius()) {
					const o = .033 * t.getRadius() * e.retina.pixelRatio;
					this.size > t.getRadius() && r < this.size - t.getRadius() || void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0 ? i.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, l)) : (i.destroy && (t.size.value -= o), this.updateParticlePosition(t, l)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += o), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += o * this.options.size.density * e.retina.reduceFactor)
				} else this.updateParticlePosition(t, l)
			}
			draw(t) { t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = Vt(this.color, this.opacity), t.fill() } resize() {
				const t = this.initialPosition;
				this.position = t && z(t, this.container.canvas.size, a.origin) ? t : this.calcPosition()
			}
			calcPosition() { const t = _({ size: this.container.canvas.size, position: this.options.position }); return a.create(t.x, t.y) } updateParticlePosition(t, e) {
				var i;
				if (t.destroyed) return;
				const o = this.container,
					n = o.canvas.size;
				if (t.needsNewPosition) {
					const e = P({ size: n });
					t.position.setTo(e), t.velocity.setTo(t.initialVelocity), t.absorberOrbit = void 0, t.needsNewPosition = !1
				}
				if (this.options.orbits) {
					if (void 0 === t.absorberOrbit && (t.absorberOrbit = a.create(0, 0), t.absorberOrbit.length = f(t.getPosition(), this.position), t.absorberOrbit.angle = Math.random() * Math.PI * 2), t.absorberOrbit.length <= this.size && !this.options.destroy) {
						const e = Math.min(n.width, n.height);
						t.absorberOrbit.length = e * (.2 * Math.random() - .1 + 1)
					}
					void 0 === t.absorberOrbitDirection && (t.absorberOrbitDirection = t.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
					const s = t.absorberOrbit.length,
						r = t.absorberOrbit.angle,
						l = t.absorberOrbitDirection;
					t.velocity.setTo(a.origin);
					const c = { x: "clockwise" === l ? Math.cos : Math.sin, y: "clockwise" === l ? Math.sin : Math.cos };
					t.position.x = this.position.x + s * c.x(r), t.position.y = this.position.y + s * c.y(r), t.absorberOrbit.length -= e.length, t.absorberOrbit.angle += (null !== (i = t.retina.moveSpeed) && void 0 !== i ? i : 0) * o.retina.pixelRatio / 100 * o.retina.reduceFactor
				} else {
					const i = a.origin;
					i.length = e.length, i.angle = e.angle, t.velocity.addTo(i)
				}
			}
		}
		class No {
			constructor(t) { this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [], t.getAbsorber = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((e => e.name === t)), t.addAbsorber = (t, e) => this.addAbsorber(t, e) } addAbsorber(t, e) { const i = new Bo(this, this.container, t, e); return this.array.push(i), i } draw(t) { for (const e of this.array) t.save(), e.draw(t), t.restore() } handleClickMode(t) {
				const e = this.absorbers,
					i = this.interactivityAbsorbers;
				if ("absorber" === t) {
					let t;
					i instanceof Array ? i.length > 0 && (t = R(i)) : t = i;
					const o = null != t ? t : e instanceof Array ? R(e) : e,
						n = this.container.interactivity.mouse.clickPosition;
					this.addAbsorber(o, n)
				}
			}
			init(t) {
				var e, i;
				if (!t) return;
				t.absorbers && (t.absorbers instanceof Array ? this.absorbers = t.absorbers.map((t => { const e = new Fo; return e.load(t), e })) : (this.absorbers instanceof Array && (this.absorbers = new Fo), this.absorbers.load(t.absorbers)));
				const o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === i ? void 0 : i.absorbers;
				if (o && (o instanceof Array ? this.interactivityAbsorbers = o.map((t => { const e = new Fo; return e.load(t), e })) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new Fo), this.interactivityAbsorbers.load(o))), this.absorbers instanceof Array)
					for (const t of this.absorbers) this.addAbsorber(t);
				else this.addAbsorber(this.absorbers)
			}
			particleUpdate(t) {
				for (const e of this.array)
					if (e.attract(t), t.destroyed) break
			}
			removeAbsorber(t) {
				const e = this.array.indexOf(t);
				e >= 0 && this.array.splice(e, 1)
			}
			resize() { for (const t of this.array) t.resize() } stop() { this.array = [] }
		}
		class qo {
			constructor() { this.id = "absorbers" } getPlugin(t) { return new No(t) } loadOptions(t, e) {
				var i, o;
				if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
				const n = t;
				if (null == e ? void 0 : e.absorbers)
					if ((null == e ? void 0 : e.absorbers) instanceof Array) n.absorbers = null == e ? void 0 : e.absorbers.map((t => { const e = new Fo; return e.load(t), e }));
					else {
						let t = n.absorbers;
						void 0 === (null == t ? void 0 : t.load) && (n.absorbers = t = new Fo), t.load(null == e ? void 0 : e.absorbers)
					} const s = null === (o = null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.absorbers;
				if (s)
					if (s instanceof Array) n.interactivity.modes.absorbers = s.map((t => { const e = new Fo; return e.load(t), e }));
					else {
						let t = n.interactivity.modes.absorbers;
						void 0 === (null == t ? void 0 : t.load) && (n.interactivity.modes.absorbers = t = new Fo), t.load(s)
					}
			}
			needsPlugin(t) { var e, i, o; if (!t) return !1; const n = t.absorbers; return n instanceof Array ? !!n.length : !!n || !(!(null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) || !O("absorber", t.interactivity.events.onClick.mode)) }
		}
		class Uo {
			randomPosition(t, e, i) {
				const [o, n] = [e.width / 2, e.height / 2], s = ((t, e) => {
					const i = Math.random() / 4,
						o = Math.atan(e / t * Math.tan(2 * Math.PI * i)),
						n = Math.random();
					return n < .25 ? o : n < .5 ? Math.PI - o : n < .75 ? Math.PI + o : -o
				})(o, n), a = (h = s, (l = o) * (c = n) / Math.sqrt((c * Math.cos(h)) ** 2 + (l * Math.sin(h)) ** 2)), r = i ? a * Math.sqrt(Math.random()) : a;
				var l, c, h;
				return { x: t.x + r * Math.cos(s), y: t.y + r * Math.sin(s) }
			}
		}
		class Wo { constructor() { this.wait = !1 } load(t) { void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.wait && (this.wait = t.wait)) } } class Qo { constructor() { this.quantity = 1, this.delay = .1 } load(t) { void 0 !== t && (void 0 !== t.quantity && (this.quantity = p(t.quantity)), void 0 !== t.delay && (this.delay = p(t.delay))) } } class $o { constructor() { this.mode = "percent", this.height = 0, this.width = 0 } load(t) { void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width)) } } class Zo { constructor() { this.autoPlay = !0, this.fill = !0, this.life = new Wo, this.rate = new Qo, this.shape = "square", this.startCount = 0 } load(t) { void 0 !== t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (void 0 === this.size && (this.size = new $o), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), this.domId = t.domId, void 0 !== t.fill && (this.fill = t.fill), this.life.load(t.life), this.name = t.name, void 0 !== t.particles && (t.particles instanceof Array ? this.particles = t.particles.map((t => H({}, t))) : this.particles = H({}, t.particles)), this.rate.load(t.rate), void 0 !== t.shape && (this.shape = t.shape), void 0 !== t.position && (this.position = {}, void 0 !== t.position.x && (this.position.x = p(t.position.x)), void 0 !== t.position.y && (this.position.y = p(t.position.y))), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new Ne), this.spawnColor.load(t.spawnColor)), void 0 !== t.startCount && (this.startCount = t.startCount)) } }
		var Xo, Yo, Jo, Ko = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			tn = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class en {
			constructor(t, e, i, o, n) {
				var s, a, r, l, c, h, d, u;
				this.emitters = e, this.container = i, Xo.set(this, void 0), Yo.set(this, void 0), Jo.set(this, void 0), Ko(this, Xo, t, "f"), this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = n, o instanceof Zo ? this.options = o : (this.options = new Zo, this.options.load(o)), this.spawnDelay = 1e3 * (null !== (s = this.options.life.delay) && void 0 !== s ? s : 0) / this.container.retina.reduceFactor, this.position = null !== (a = this.initialPosition) && void 0 !== a ? a : this.calcPosition(), this.name = this.options.name, this.shape = null === (r = tn(this, Xo, "f").emitterShapeManager) || void 0 === r ? void 0 : r.getShape(this.options.shape), this.fill = this.options.fill, Ko(this, Yo, !this.options.life.wait, "f"), Ko(this, Jo, !1, "f");
				let p = H({}, this.options.particles);
				null != p || (p = {}), null !== (l = p.move) && void 0 !== l || (p.move = {}), null !== (c = (u = p.move).direction) && void 0 !== c || (u.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = pt(this.options.spawnColor)), this.paused = !this.options.autoPlay, this.particlesOptions = p, this.size = null !== (h = this.options.size) && void 0 !== h ? h : (() => { const t = new $o; return t.load({ height: 0, mode: "percent", width: 0 }), t })(), this.lifeCount = null !== (d = this.options.life.count) && void 0 !== d ? d : -1, this.immortal = this.lifeCount <= 0, tn(this, Xo, "f").dispatchEvent("emitterCreated", { container: i, data: { emitter: this } }), this.play()
			}
			externalPause() { this.paused = !0, this.pause() } externalPlay() { this.paused = !1, this.play() } getPosition() {
				if (this.options.domId) {
					const t = this.container,
						e = document.getElementById(this.options.domId);
					if (e) { const i = e.getBoundingClientRect(); return { x: (i.x + i.width / 2) * t.retina.pixelRatio, y: (i.y + i.height / 2) * t.retina.pixelRatio } }
				}
				return this.position
			}
			getSize() { const t = this.container; if (this.options.domId) { const e = document.getElementById(this.options.domId); if (e) { const i = e.getBoundingClientRect(); return { width: i.width * t.retina.pixelRatio, height: i.height * t.retina.pixelRatio } } } return { width: "percent" === this.size.mode ? t.canvas.size.width * this.size.width / 100 : this.size.width, height: "percent" === this.size.mode ? t.canvas.size.height * this.size.height / 100 : this.size.height } } pause() { this.paused || delete this.emitDelay } play() {
				var t;
				if (!this.paused && this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.options.life.count) && (tn(this, Yo, "f") || this.currentSpawnDelay >= (null !== (t = this.spawnDelay) && void 0 !== t ? t : 0))) {
					if (void 0 === this.emitDelay) {
						const t = h(this.options.rate.delay);
						this.emitDelay = 1e3 * t / this.container.retina.reduceFactor
					}(this.lifeCount > 0 || this.immortal) && this.prepareToDie()
				}
			}
			resize() {
				const t = this.initialPosition;
				this.position = t && z(t, this.container.canvas.size, a.origin) ? t : this.calcPosition()
			}
			update(t) {
				var e, i, o;
				this.paused || (tn(this, Yo, "f") && (Ko(this, Yo, !1, "f"), this.currentSpawnDelay = null !== (e = this.spawnDelay) && void 0 !== e ? e : 0, this.currentEmitDelay = null !== (i = this.emitDelay) && void 0 !== i ? i : 0), tn(this, Jo, "f") || (Ko(this, Jo, !0, "f"), this.emitParticles(this.options.startCount)), void 0 !== this.duration && (this.currentDuration += t.value, this.currentDuration >= this.duration && (this.pause(), void 0 !== this.spawnDelay && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = 1e3 * (null !== (o = this.options.life.delay) && void 0 !== o ? o : 0) / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), void 0 !== this.spawnDelay && (this.currentSpawnDelay += t.value, this.currentSpawnDelay >= this.spawnDelay && (tn(this, Xo, "f").dispatchEvent("emitterPlay", { container: this.container }), this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), void 0 !== this.emitDelay && (this.currentEmitDelay += t.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)))
			}
			calcPosition() { return _({ size: this.container.canvas.size, position: this.options.position }) } destroy() { this.emitters.removeEmitter(this), tn(this, Xo, "f").dispatchEvent("emitterDestroyed", { container: this.container, data: { emitter: this } }) } emit() {
				if (this.paused) return;
				const t = h(this.options.rate.quantity);
				this.emitParticles(t)
			}
			emitParticles(t) {
				var e, i, o;
				const n = this.getPosition(),
					s = this.getSize(),
					a = this.particlesOptions instanceof Array ? R(this.particlesOptions) : this.particlesOptions;
				for (let r = 0; r < t; r++) {
					const t = H({}, a);
					if (this.spawnColor) {
						const i = null === (e = this.options.spawnColor) || void 0 === e ? void 0 : e.animation;
						i && (this.spawnColor.h = this.setColorAnimation(i.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(i.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(i.l, this.spawnColor.l, 100)), t.color ? t.color.value = this.spawnColor : t.color = { value: this.spawnColor }
					}
					if (!n) return;
					const r = null !== (o = null === (i = this.shape) || void 0 === i ? void 0 : i.randomPosition(n, s, this.fill)) && void 0 !== o ? o : n;
					this.container.particles.addParticle(r, t)
				}
			}
			prepareToDie() {
				var t;
				if (this.paused) return;
				const e = null === (t = this.options.life) || void 0 === t ? void 0 : t.duration;
				this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && void 0 !== e && e > 0 && (this.duration = 1e3 * e)
			}
			setColorAnimation(t, e, i) {
				var o;
				const n = this.container;
				if (!t.enable) return e;
				const s = c(t.offset),
					a = 1e3 * h(this.options.rate.delay) / n.retina.reduceFactor;
				return (e + h(null !== (o = t.speed) && void 0 !== o ? o : 0) * n.fpsLimit / a + 3.6 * s) % i
			}
		}
		Xo = new WeakMap, Yo = new WeakMap, Jo = new WeakMap;
		var on, nn = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			sn = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class an {
			constructor(t, e) {
				this.container = e, on.set(this, void 0), nn(this, on, t, "f"), this.array = [], this.emitters = [], this.interactivityEmitters = { random: { count: 1, enable: !1 }, value: [] }, e.getEmitter = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((e => e.name === t)), e.addEmitter = (t, e) => this.addEmitter(t, e), e.removeEmitter = t => {
					const i = e.getEmitter(t);
					i && this.removeEmitter(i)
				}, e.playEmitter = t => {
					const i = e.getEmitter(t);
					i && i.externalPlay()
				}, e.pauseEmitter = t => {
					const i = e.getEmitter(t);
					i && i.externalPause()
				}
			}
			addEmitter(t, e) {
				const i = new Zo;
				i.load(t);
				const o = new en(sn(this, on, "f"), this, this.container, i, e);
				return this.array.push(o), o
			}
			handleClickMode(t) {
				const e = this.emitters,
					i = this.interactivityEmitters;
				if ("emitter" === t) {
					let t;
					if (i && i.value instanceof Array)
						if (i.value.length > 0 && i.random.enable) {
							t = [];
							const e = [];
							for (let o = 0; o < i.random.count; o++) {
								const n = M(i.value);
								e.includes(n) && e.length < i.value.length ? o-- : (e.push(n), t.push(R(i.value, n)))
							}
						} else t = i.value;
					else t = null == i ? void 0 : i.value;
					const o = null != t ? t : e,
						n = this.container.interactivity.mouse.clickPosition;
					if (o instanceof Array)
						for (const t of o) this.addEmitter(t, n);
					else this.addEmitter(H({}, o), n)
				}
			}
			init(t) {
				var e, i, o, n, s, a, r, l;
				if (!t) return;
				t.emitters && (t.emitters instanceof Array ? this.emitters = t.emitters.map((t => { const e = new Zo; return e.load(t), e })) : (this.emitters instanceof Array && (this.emitters = new Zo), this.emitters.load(t.emitters)));
				const c = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === i ? void 0 : i.emitters;
				if (c)
					if (c instanceof Array) this.interactivityEmitters = { random: { count: 1, enable: !0 }, value: c.map((t => { const e = new Zo; return e.load(t), e })) };
					else {
						const t = c;
						if (void 0 !== t.value)
							if (t.value instanceof Array) this.interactivityEmitters = { random: { count: null !== (o = this.interactivityEmitters.random.count) && void 0 !== o ? o : 1, enable: null !== (n = this.interactivityEmitters.random.enable) && void 0 !== n && n }, value: t.value.map((t => { const e = new Zo; return e.load(t), e })) };
							else {
								const e = new Zo;
								e.load(t.value), this.interactivityEmitters = { random: { count: null !== (s = this.interactivityEmitters.random.count) && void 0 !== s ? s : 1, enable: null !== (a = this.interactivityEmitters.random.enable) && void 0 !== a && a }, value: e }
							}
						else {
							const t = new Zo;
							t.load(c), this.interactivityEmitters = { random: { count: null !== (r = this.interactivityEmitters.random.count) && void 0 !== r ? r : 1, enable: null !== (l = this.interactivityEmitters.random.enable) && void 0 !== l && l }, value: t }
						}
					} if (this.emitters instanceof Array)
					for (const t of this.emitters) this.addEmitter(t);
				else this.addEmitter(this.emitters)
			}
			pause() { for (const t of this.array) t.pause() } play() { for (const t of this.array) t.play() } removeEmitter(t) {
				const e = this.array.indexOf(t);
				e >= 0 && this.array.splice(e, 1)
			}
			resize() { for (const t of this.array) t.resize() } stop() { this.array = [] } update(t) { for (const e of this.array) e.update(t) }
		}
		on = new WeakMap;
		var rn, ln = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i };
		const cn = new Map;
		class hn { constructor(t) { rn.set(this, void 0), ln(this, rn, t, "f") } addShape(t, e) { this.getShape(t) || cn.set(t, e) } getShape(t) { return cn.get(t) } getSupportedShapes() { return cn.keys() } }

		function dn(t, e) { return t + e * (Math.random() - .5) } rn = new WeakMap;
		class un {
			randomPosition(t, e, i) {
				if (i) return { x: dn(t.x, e.width), y: dn(t.y, e.height) }; {
					const i = e.width / 2,
						o = e.height / 2,
						n = Math.floor(4 * Math.random()),
						s = 2 * (Math.random() - .5);
					switch (n) {
						case 0:
							return { x: t.x + s * i, y: t.y - o };
						case 1:
							return { x: t.x - i, y: t.y + s * o };
						case 2:
							return { x: t.x + s * i, y: t.y + o };
						default:
							return { x: t.x + i, y: t.y + s * o }
					}
				}
			}
		}
		var pn, vn = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			yn = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class fn {
			constructor(t) { pn.set(this, void 0), vn(this, pn, t, "f"), this.id = "emitters" } getPlugin(t) { return new an(yn(this, pn, "f"), t) } loadOptions(t, e) {
				var i, o, n, s, a, r;
				if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
				const l = t;
				if (null == e ? void 0 : e.emitters)
					if ((null == e ? void 0 : e.emitters) instanceof Array) l.emitters = null == e ? void 0 : e.emitters.map((t => { const e = new Zo; return e.load(t), e }));
					else {
						let t = l.emitters;
						void 0 === (null == t ? void 0 : t.load) && (l.emitters = t = new Zo), t.load(null == e ? void 0 : e.emitters)
					} const c = null === (o = null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.emitters;
				if (c)
					if (c instanceof Array) l.interactivity.modes.emitters = { random: { count: 1, enable: !0 }, value: c.map((t => { const e = new Zo; return e.load(t), e })) };
					else {
						const t = c;
						if (void 0 !== t.value)
							if (t.value instanceof Array) l.interactivity.modes.emitters = { random: { count: null !== (n = t.random.count) && void 0 !== n ? n : 1, enable: null !== (s = t.random.enable) && void 0 !== s && s }, value: t.value.map((t => { const e = new Zo; return e.load(t), e })) };
							else {
								const e = new Zo;
								e.load(t.value), l.interactivity.modes.emitters = { random: { count: null !== (a = t.random.count) && void 0 !== a ? a : 1, enable: null !== (r = t.random.enable) && void 0 !== r && r }, value: e }
							}
						else {
							(l.interactivity.modes.emitters = { random: { count: 1, enable: !1 }, value: new Zo }).value.load(c)
						}
					}
			}
			needsPlugin(t) { var e, i, o; if (!t) return !1; const n = t.emitters; return n instanceof Array && !!n.length || void 0 !== n || !!(null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) && O("emitter", t.interactivity.events.onClick.mode) }
		}
		pn = new WeakMap;
		class wn extends Lo {
			constructor(t) { super(t), this.delay = 0 } clear() {} init() {} async interact(t) {
				var e, i, o, n;
				if (!this.container.retina.reduceFactor) return;
				const s = this.container,
					a = s.actualOptions.interactivity.modes.trail,
					r = 1e3 * a.delay / this.container.retina.reduceFactor;
				if (this.delay < r && (this.delay += t.value), this.delay < r) return;
				let l = !0;
				a.pauseOnStop && (s.interactivity.mouse.position === this.lastPosition || (null === (e = s.interactivity.mouse.position) || void 0 === e ? void 0 : e.x) === (null === (i = this.lastPosition) || void 0 === i ? void 0 : i.x) && (null === (o = s.interactivity.mouse.position) || void 0 === o ? void 0 : o.y) === (null === (n = this.lastPosition) || void 0 === n ? void 0 : n.y)) && (l = !1), s.interactivity.mouse.position ? this.lastPosition = { x: s.interactivity.mouse.position.x, y: s.interactivity.mouse.position.y } : delete this.lastPosition, l && s.particles.push(a.quantity, s.interactivity.mouse, a.particles), this.delay -= r
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse,
					s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events;
				return n.clicking && n.inside && !!n.position && O("trail", s.onClick.mode) || n.inside && !!n.position && O("trail", s.onHover.mode)
			}
			reset() {}
		}
		i(939);
		class gn {
			constructor() { this.color = new oe, this.width = .5, this.opacity = 1 } load(t) {
				var e;
				t && (this.color = oe.create(this.color, t.color), "string" == typeof this.color.value && (this.opacity = null !== (e = yt(this.color.value)) && void 0 !== e ? e : this.opacity), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width))
			}
		}
		class mn {
			constructor() { this.enable = !1, this.stroke = new gn } get lineColor() { return this.stroke.color } set lineColor(t) { this.stroke.color = oe.create(this.stroke.color, t) } get lineWidth() { return this.stroke.width } set lineWidth(t) { this.stroke.width = t } load(t) {
				var e;
				if (!t) return;
				void 0 !== t.enable && (this.enable = t.enable);
				const i = null !== (e = t.stroke) && void 0 !== e ? e : { color: t.lineColor, width: t.lineWidth };
				this.stroke.load(i)
			}
		}
		class bn { constructor() { this.arrangement = "one-per-point" } load(t) { t && void 0 !== t.arrangement && (this.arrangement = t.arrangement) } } class Sn { constructor() { this.path = [], this.size = { height: 0, width: 0 } } load(t) { t && (void 0 !== t.path && (this.path = t.path), void 0 !== t.size && (void 0 !== t.size.width && (this.size.width = t.size.width), void 0 !== t.size.height && (this.size.height = t.size.height))) } } class Pn { constructor() { this.radius = 10, this.type = "path" } load(t) { t && (void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.type && (this.type = t.type)) } } class _n { constructor() { this.draw = new mn, this.enable = !1, this.inline = new bn, this.move = new Pn, this.scale = 1, this.type = "none" } get inlineArrangement() { return this.inline.arrangement } set inlineArrangement(t) { this.inline.arrangement = t } load(t) { t && (this.draw.load(t.draw), this.inline.load(t.inline), this.move.load(t.move), void 0 !== t.scale && (this.scale = t.scale), void 0 !== t.type && (this.type = t.type), void 0 !== t.enable ? this.enable = t.enable : this.enable = "none" !== this.type, void 0 !== t.url && (this.url = t.url), void 0 !== t.data && ("string" == typeof t.data ? this.data = t.data : (this.data = new Sn, this.data.load(t.data))), void 0 !== t.position && (this.position = H({}, t.position))) } }

		function xn(t, e, i) {
			const o = ht(i.color);
			if (o) {
				t.beginPath(), t.moveTo(e[0].x, e[0].y);
				for (const i of e) t.lineTo(i.x, i.y);
				t.closePath(), t.strokeStyle = Vt(o), t.lineWidth = i.width, t.stroke()
			}
		}

		function Cn(t, e, i, o) {
			t.translate(o.x, o.y);
			const n = ht(i.color);
			n && (t.strokeStyle = Vt(n, i.opacity), t.lineWidth = i.width, t.stroke(e))
		}

		function An(t, e, i) { const { dx: o, dy: n } = y(i, t), { dx: s, dy: a } = y(e, t), r = (o * s + n * a) / (s ** 2 + a ** 2), l = { x: t.x + s * r, y: t.x + a * r, isOnSegment: r >= 0 && r <= 1 }; return r < 0 ? (l.x = t.x, l.y = t.y) : r > 1 && (l.x = e.x, l.y = e.y), l }

		function En(t, e, i) {
			const { dx: o, dy: n } = y(t, e), s = Math.atan2(n, o), r = a.create(Math.sin(s), -Math.cos(s)), l = 2 * (i.x * r.x + i.y * r.y);
			r.multTo(l), i.subFrom(r)
		}
		var Vn, Tn = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			Gn = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class On {
			constructor(t, e) { this.container = t, Vn.set(this, void 0), Tn(this, Vn, e, "f"), this.dimension = { height: 0, width: 0 }, this.path2DSupported = !!window.Path2D, this.options = new _n, this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio } clickPositionValid(t) { const e = this.options; return e.enable && "none" !== e.type && "inline" !== e.type && this.checkInsidePolygon(t) } draw(t) {
				var e;
				if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length)) return;
				const i = this.options,
					o = i.draw;
				if (!i.enable || !o.enable) return;
				const n = this.raw;
				for (const e of this.paths) {
					const i = e.path2d,
						s = this.path2DSupported;
					t && (s && i && this.offset ? Cn(t, i, o.stroke, this.offset) : n && xn(t, n, o.stroke))
				}
			}
			async initAsync(t) {
				this.options.load(null == t ? void 0 : t.polygon);
				const e = this.options;
				this.polygonMaskMoveRadius = e.move.radius * this.container.retina.pixelRatio, e.enable && await this.initRawData()
			}
			particleBounce(t, e, i) { return this.polygonBounce(t, e, i) } particlePosition(t) { var e, i; if (this.options.enable && (null !== (i = null === (e = this.raw) || void 0 === e ? void 0 : e.length) && void 0 !== i ? i : 0) > 0) return H({}, t || this.randomPoint()) } particlesInitialization() { const t = this.options; return !(!t.enable || "inline" !== t.type || "one-per-point" !== t.inline.arrangement && "per-point" !== t.inline.arrangement) && (this.drawPoints(), !0) } resize() {
				const t = this.container,
					e = this.options;
				e.enable && "none" !== e.type && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout((async () => { await this.initRawData(!0), await t.particles.redraw() }), 250))
			}
			stop() { delete this.raw, delete this.paths } checkInsidePolygon(t) {
				var e, i;
				const o = this.container,
					n = this.options;
				if (!n.enable || "none" === n.type || "inline" === n.type) return !0;
				if (!this.raw) throw new Error(rt);
				const s = o.canvas.size,
					a = null !== (e = null == t ? void 0 : t.x) && void 0 !== e ? e : Math.random() * s.width,
					r = null !== (i = null == t ? void 0 : t.y) && void 0 !== i ? i : Math.random() * s.height;
				let l = !1;
				for (let t = 0, e = this.raw.length - 1; t < this.raw.length; e = t++) {
					const i = this.raw[t],
						o = this.raw[e];
					i.y > r != o.y > r && a < (o.x - i.x) * (r - i.y) / (o.y - i.y) + i.x && (l = !l)
				}
				return "inside" === n.type ? l : "outside" === n.type && !l
			}
			createPath2D() {
				var t, e;
				const i = this.options;
				if (this.path2DSupported && (null === (t = this.paths) || void 0 === t ? void 0 : t.length))
					for (const t of this.paths) {
						const o = null === (e = t.element) || void 0 === e ? void 0 : e.getAttribute("d");
						if (o) {
							const e = new Path2D(o),
								n = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
								s = new Path2D,
								a = n.scale(i.scale);
							s.addPath ? (s.addPath(e, a), t.path2d = s) : delete t.path2d
						} else delete t.path2d;
						!t.path2d && this.raw && (t.path2d = new Path2D, t.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach(((e, i) => {
							var o;
							i > 0 && (null === (o = t.path2d) || void 0 === o || o.lineTo(e.x, e.y))
						})), t.path2d.closePath())
					}
			}
			async downloadSvgPath(t, e) {
				const i = this.options,
					o = t || i.url,
					n = null != e && e;
				if (!o || void 0 !== this.paths && !n) return this.raw;
				const s = await fetch(o);
				if (!s.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
				return this.parseSvgPath(await s.text(), e)
			}
			drawPoints() {
				if (this.raw)
					for (const t of this.raw) this.container.particles.addParticle({ x: t.x, y: t.y })
			}
			getEquidistantPointByIndex(t) {
				var e, i, o, n, s, a, r;
				const l = this.container.actualOptions,
					c = this.options;
				if (!this.raw || !this.raw.length || !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)) throw new Error(at);
				let h, d = 0;
				const u = this.paths.reduce(((t, e) => t + e.length), 0) / l.particles.number.value;
				for (const e of this.paths) { const i = u * t - d; if (i <= e.length) { h = e.element.getPointAtLength(i); break } d += e.length }
				return { x: (null !== (i = null == h ? void 0 : h.x) && void 0 !== i ? i : 0) * c.scale + (null !== (n = null === (o = this.offset) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0), y: (null !== (s = null == h ? void 0 : h.y) && void 0 !== s ? s : 0) * c.scale + (null !== (r = null === (a = this.offset) || void 0 === a ? void 0 : a.y) && void 0 !== r ? r : 0) }
			}
			getPointByIndex(t) { if (!this.raw || !this.raw.length) throw new Error(at); const e = this.raw[t % this.raw.length]; return { x: e.x, y: e.y } } getRandomPoint() { if (!this.raw || !this.raw.length) throw new Error(at); const t = R(this.raw); return { x: t.x, y: t.y } } getRandomPointByLength() {
				var t, e, i;
				const o = this.options;
				if (!this.raw || !this.raw.length || !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)) throw new Error(at);
				const n = R(this.paths),
					s = Math.floor(Math.random() * n.length) + 1,
					a = n.element.getPointAtLength(s);
				return { x: a.x * o.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) || 0), y: a.y * o.scale + ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) || 0) }
			}
			async initRawData(t) {
				const e = this.options;
				if (e.url) this.raw = await this.downloadSvgPath(e.url, t);
				else if (e.data) {
					const i = e.data;
					let o;
					if ("string" != typeof i) {
						const t = i.path instanceof Array ? i.path.map((t => `<path d="${t}" />`)).join("") : `<path d="${i.path}" />`;
						o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${i.size.width}" height="${i.size.height}">${t}</svg>`
					} else o = i;
					this.raw = this.parseSvgPath(o, t)
				}
				this.createPath2D(), Gn(this, Vn, "f").dispatchEvent("polygonMaskLoaded", { container: this.container })
			}
			parseSvgPath(t, e) {
				var i, o, n;
				const s = null != e && e;
				if (void 0 !== this.paths && !s) return this.raw;
				const a = this.container,
					r = this.options,
					l = (new DOMParser).parseFromString(t, "image/svg+xml"),
					c = l.getElementsByTagName("svg")[0];
				let h = c.getElementsByTagName("path");
				h.length || (h = l.getElementsByTagName("path")), this.paths = [];
				for (let t = 0; t < h.length; t++) {
					const e = h.item(t);
					e && this.paths.push({ element: e, length: e.getTotalLength() })
				}
				const d = a.retina.pixelRatio,
					u = r.scale / d;
				this.dimension.width = parseFloat(null !== (i = c.getAttribute("width")) && void 0 !== i ? i : "0") * u, this.dimension.height = parseFloat(null !== (o = c.getAttribute("height")) && void 0 !== o ? o : "0") * u;
				const p = null !== (n = r.position) && void 0 !== n ? n : { x: 50, y: 50 };
				return this.offset = { x: a.canvas.size.width * p.x / (100 * d) - this.dimension.width / 2, y: a.canvas.size.height * p.y / (100 * d) - this.dimension.height / 2 },
					function(t, e, i) {
						var o;
						const n = [];
						for (const s of t) {
							const t = s.element.pathSegList,
								a = null !== (o = null == t ? void 0 : t.numberOfItems) && void 0 !== o ? o : 0,
								r = { x: 0, y: 0 };
							for (let o = 0; o < a; o++) {
								const s = null == t ? void 0 : t.getItem(o),
									a = window.SVGPathSeg;
								switch (null == s ? void 0 : s.pathSegType) {
									case a.PATHSEG_MOVETO_ABS:
									case a.PATHSEG_LINETO_ABS:
									case a.PATHSEG_CURVETO_CUBIC_ABS:
									case a.PATHSEG_CURVETO_QUADRATIC_ABS:
									case a.PATHSEG_ARC_ABS:
									case a.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
									case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
										const t = s;
										r.x = t.x, r.y = t.y;
										break
									}
									case a.PATHSEG_LINETO_HORIZONTAL_ABS:
										r.x = s.x;
										break;
									case a.PATHSEG_LINETO_VERTICAL_ABS:
										r.y = s.y;
										break;
									case a.PATHSEG_LINETO_REL:
									case a.PATHSEG_MOVETO_REL:
									case a.PATHSEG_CURVETO_CUBIC_REL:
									case a.PATHSEG_CURVETO_QUADRATIC_REL:
									case a.PATHSEG_ARC_REL:
									case a.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
									case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
										const t = s;
										r.x += t.x, r.y += t.y;
										break
									}
									case a.PATHSEG_LINETO_HORIZONTAL_REL:
										r.x += s.x;
										break;
									case a.PATHSEG_LINETO_VERTICAL_REL:
										r.y += s.y;
										break;
									case a.PATHSEG_UNKNOWN:
									case a.PATHSEG_CLOSEPATH:
										continue
								}
								n.push({ x: r.x * e + i.x, y: r.y * e + i.y })
							}
						}
						return n
					}(this.paths, u, this.offset)
			}
			polygonBounce(t, e, i) {
				const o = this.options;
				if (!this.raw || !o.enable || "top" !== i) return !1;
				if ("inside" === o.type || "outside" === o.type) {
					let e, i, o;
					const n = t.getPosition(),
						s = t.getRadius();
					for (let a = 0, r = this.raw.length - 1; a < this.raw.length; r = a++) {
						const l = this.raw[a],
							c = this.raw[r];
						e = An(l, c, n);
						const h = y(n, e);
						if ([i, o] = [h.dx, h.dy], h.distance < s) return En(l, c, t.velocity), !0
					}
					if (e && void 0 !== i && void 0 !== o && !this.checkInsidePolygon(n)) { const i = { x: 1, y: 1 }; return t.position.x >= e.x && (i.x = -1), t.position.y >= e.y && (i.y = -1), t.position.x = e.x + 2 * s * i.x, t.position.y = e.y + 2 * s * i.y, t.velocity.mult(-1), !0 }
				} else if ("inline" === o.type && t.initialPosition) { if (f(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius) return t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y, !0 }
				return !1
			}
			randomPoint() {
				const t = this.container,
					e = this.options;
				let i;
				if ("inline" === e.type) switch (e.inline.arrangement) {
					case "random-point":
						i = this.getRandomPoint();
						break;
					case "random-length":
						i = this.getRandomPointByLength();
						break;
					case "equidistant":
						i = this.getEquidistantPointByIndex(t.particles.count);
						break;
					default:
						i = this.getPointByIndex(t.particles.count)
				} else i = { x: Math.random() * t.canvas.size.width, y: Math.random() * t.canvas.size.height };
				return this.checkInsidePolygon(i) ? i : this.randomPoint()
			}
		}
		Vn = new WeakMap;
		var kn, Mn = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			Rn = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class zn {
			constructor(t) { kn.set(this, void 0), this.id = "polygonMask", Mn(this, kn, t, "f") } getPlugin(t) { return new On(t, Rn(this, kn, "f")) } loadOptions(t, e) {
				if (!this.needsPlugin(e)) return;
				const i = t;
				let o = i.polygon;
				void 0 === (null == o ? void 0 : o.load) && (i.polygon = o = new _n), o.load(null == e ? void 0 : e.polygon)
			}
			needsPlugin(t) { var e, i, o; return null !== (i = null === (e = null == t ? void 0 : t.polygon) || void 0 === e ? void 0 : e.enable) && void 0 !== i ? i : void 0 !== (null === (o = null == t ? void 0 : t.polygon) || void 0 === o ? void 0 : o.type) && "none" !== t.polygon.type }
		}
		kn = new WeakMap;
		class Ln { constructor() { this.enable = !1, this.value = 0 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = p(t.value))) } } class In { constructor() { this.darken = new Ln, this.enable = !1, this.enlighten = new Ln, this.mode = "vertical", this.speed = 25 } load(t) { t && (void 0 !== t.backColor && (this.backColor = oe.create(this.backColor, t.backColor)), this.darken.load(t.darken), void 0 !== t.enable && (this.enable = t.enable), this.enlighten.load(t.enlighten), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.speed && (this.speed = p(t.speed))) } } class Hn {
			getTransformValues(t) {
				var e;
				const i = (null === (e = t.roll) || void 0 === e ? void 0 : e.enable) && t.roll,
					o = i && i.horizontal,
					n = i && i.vertical;
				return { a: o ? Math.cos(i.angle) : void 0, d: n ? Math.sin(i.angle) : void 0 }
			}
			init(t) {
				const e = t.options.roll;
				if (null == e ? void 0 : e.enable)
					if (t.roll = { enable: e.enable, horizontal: "horizontal" === e.mode || "both" === e.mode, vertical: "vertical" === e.mode || "both" === e.mode, angle: Math.random() * Math.PI * 2, speed: h(e.speed) / 360 }, e.backColor) t.backColor = pt(e.backColor);
					else if (e.darken.enable && e.enlighten.enable) {
					const i = Math.random() >= .5 ? "darken" : "enlighten";
					t.roll.alter = { type: i, value: h("darken" === i ? e.darken.value : e.enlighten.value) }
				} else e.darken.enable ? t.roll.alter = { type: "darken", value: h(e.darken.value) } : e.enlighten.enable && (t.roll.alter = { type: "enlighten", value: h(e.enlighten.value) });
				else t.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 }
			}
			isEnabled(t) { const e = t.options.roll; return !t.destroyed && !t.spawning && !!(null == e ? void 0 : e.enable) } loadOptions(t, ...e) { for (const i of e)(null == i ? void 0 : i.roll) && (t.roll || (t.roll = new In), t.roll.load(i.roll)) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					const i = t.options.roll;
					if (!t.roll || !(null == i ? void 0 : i.enable)) return;
					const o = t.roll.speed * e.factor,
						n = 2 * Math.PI;
					t.roll.angle += o, t.roll.angle > n && (t.roll.angle -= n)
				}(t, e)
			}
		}
		class Dn {
			constructor(t) { this.container = t } init(t) {
				const e = t.options.rotate;
				t.rotate = { enable: e.animation.enable, value: h(e.value) * Math.PI / 180 };
				let i = e.direction;
				if ("random" === i) { i = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise" }
				switch (i) {
					case "counter-clockwise":
					case "counterClockwise":
						t.rotate.status = 1;
						break;
					case "clockwise":
						t.rotate.status = 0
				}
				const o = t.options.rotate.animation;
				o.enable && (t.rotate.decay = 1 - h(o.decay), t.rotate.velocity = h(o.speed) / 360 * this.container.retina.reduceFactor, o.sync || (t.rotate.velocity *= Math.random()))
			}
			isEnabled(t) {
				const e = t.options.rotate,
					i = e.animation;
				return !t.destroyed && !t.spawning && !e.path && i.enable
			}
			update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i, o;
					const n = t.rotate;
					if (!n) return;
					const s = t.options.rotate.animation,
						a = (null !== (i = n.velocity) && void 0 !== i ? i : 0) * e.factor,
						r = 2 * Math.PI,
						l = null !== (o = n.decay) && void 0 !== o ? o : 1;
					s.enable && (0 === n.status ? (n.value += a, n.value > r && (n.value -= r)) : (n.value -= a, n.value < 0 && (n.value += r)), n.velocity && 1 !== l && (n.velocity *= l))
				}(t, e)
			}
		}
		class jn {
			init(t) {
				var e;
				const i = t.container,
					o = t.options,
					n = o.move.gravity,
					s = o.move.spin;
				if (t.gravity = { enable: n.enable, acceleration: h(n.acceleration), inverse: n.inverse }, s.enable) {
					const o = null !== (e = s.position) && void 0 !== e ? e : { x: 50, y: 50 },
						n = { x: o.x / 100 * i.canvas.size.width, y: o.y / 100 * i.canvas.size.height },
						a = f(t.getPosition(), n),
						r = h(s.acceleration);
					t.retina.spinAcceleration = r * i.retina.pixelRatio, t.spin = { center: n, direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise", angle: t.velocity.angle, radius: a, acceleration: t.retina.spinAcceleration }
				}
			}
			isEnabled(t) { return !t.destroyed && t.options.move.enable } move(t, e) {
				var i, o, n, s, a;
				const l = t.options,
					c = l.move;
				if (!c.enable) return;
				const d = t.container,
					p = function(t) {
						const e = t.container,
							i = e.actualOptions;
						if (!O("slow", i.interactivity.events.onHover.mode)) return 1;
						const o = t.container.interactivity.mouse.position;
						if (!o) return 1;
						const n = f(o, t.getPosition()),
							s = e.retina.slowModeRadius;
						return n > s ? 1 : (n / s || 0) / i.interactivity.modes.slow.factor
					}(t),
					v = (null !== (i = (s = t.retina).moveSpeed) && void 0 !== i ? i : s.moveSpeed = h(c.speed) * d.retina.pixelRatio) * d.retina.reduceFactor,
					w = null !== (o = (a = t.retina).moveDrift) && void 0 !== o ? o : a.moveDrift = h(t.options.move.drift) * d.retina.pixelRatio,
					g = u(l.size.value) * d.retina.pixelRatio,
					m = v * ((c.size ? t.getRadius() / g : 1) * p * (e.factor || 1)) / 2;
				! function(t, e) {
					const i = t.options.move.path;
					if (!i.enable) return;
					const o = t.container;
					if (t.lastPathTime <= t.pathDelay) return void(t.lastPathTime += e.value);
					const n = o.pathGenerator.generate(t);
					t.velocity.addTo(n), i.clamp && (t.velocity.x = r(t.velocity.x, -1, 1), t.velocity.y = r(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
				}(t, e);
				const b = t.gravity,
					S = (null == b ? void 0 : b.enable) && b.inverse ? -1 : 1;
				(null == b ? void 0 : b.enable) && m && (t.velocity.y += S * (b.acceleration * e.factor) / (60 * m)), w && m && (t.velocity.x += w * e.factor / (60 * m));
				const P = t.moveDecay;
				1 != P && t.velocity.multTo(P);
				const _ = t.velocity.mult(m),
					x = null !== (n = t.retina.maxSpeed) && void 0 !== n ? n : d.retina.maxSpeed;
				(null == b ? void 0 : b.enable) && x > 0 && (!b.inverse && _.y >= 0 && _.y >= x || b.inverse && _.y <= 0 && _.y <= -x) && (_.y = S * x, m && (t.velocity.y = _.y / m));
				const C = t.options.zIndex,
					A = (1 - t.zIndexFactor) ** C.velocityRate;
				c.spin.enable ? function(t, e) {
						const i = t.container;
						if (!t.spin) return;
						const o = { x: "clockwise" === t.spin.direction ? Math.cos : Math.sin, y: "clockwise" === t.spin.direction ? Math.sin : Math.cos };
						t.position.x = t.spin.center.x + t.spin.radius * o.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * o.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
						const n = Math.max(i.canvas.size.width, i.canvas.size.height);
						t.spin.radius > n / 2 ? (t.spin.radius = n / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / n)
					}(t, m) : (1 != A && _.multTo(A), t.position.addTo(_), c.vibrate && (t.position.x += Math.sin(t.position.x * Math.cos(t.position.y)), t.position.y += Math.cos(t.position.y * Math.sin(t.position.x)))),
					function(t) {
						const e = t.initialPosition,
							{ dx: i, dy: o } = y(e, t.position),
							n = Math.abs(i),
							s = Math.abs(o),
							a = t.retina.maxDistance.horizontal,
							r = t.retina.maxDistance.vertical;
						if (a || r)
							if ((a && n >= a || r && s >= r) && !t.misplaced) t.misplaced = !!a && n > a || !!r && s > r, a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), r && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
							else if ((!a || n < a) && (!r || s < r) && t.misplaced) t.misplaced = !1;
						else if (t.misplaced) {
							const i = t.position,
								o = t.velocity;
							a && (i.x < e.x && o.x < 0 || i.x > e.x && o.x > 0) && (o.x *= -Math.random()), r && (i.y < e.y && o.y < 0 || i.y > e.y && o.y > 0) && (o.y *= -Math.random())
						}
					}(t)
			}
		}
		class Fn { draw(t, e, i) { t.arc(0, 0, i, 0, 2 * Math.PI, !1) } getSidesCount() { return 12 } }

		function Bn(t, e, i, o, n) {
			var s, a;
			const r = e;
			if (!r || !i.enable) return;
			const l = c(i.offset),
				h = (null !== (s = e.velocity) && void 0 !== s ? s : 0) * t.factor + 3.6 * l,
				d = null !== (a = e.decay) && void 0 !== a ? a : 1;
			n && 0 !== r.status ? (r.value -= h, r.value < 0 && (r.status = 0, r.value += r.value)) : (r.value += h, n && r.value > o && (r.status = 1, r.value -= r.value % o)), r.velocity && 1 !== d && (r.velocity *= d), r.value > o && (r.value %= o)
		}
		class Nn {
			constructor(t) { this.container = t } init(t) {
				const e = pt(t.options.color, t.id, t.options.reduceDuplicates);
				e && (t.color = zt(e, t.options.color.animation, this.container.retina.reduceFactor))
			}
			isEnabled(t) { var e, i, o; const n = t.options.color.animation; return !t.destroyed && !t.spawning && (void 0 !== (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) && n.h.enable || void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) && n.s.enable || void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.l.value) && n.l.enable) } update(t, e) {
				! function(t, e) {
					var i, o, n;
					const s = t.options.color.animation;
					void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.h) && Bn(e, t.color.h, s.h, 360, !1), void 0 !== (null === (o = t.color) || void 0 === o ? void 0 : o.s) && Bn(e, t.color.s, s.s, 100, !0), void 0 !== (null === (n = t.color) || void 0 === n ? void 0 : n.l) && Bn(e, t.color.l, s.l, 100, !0)
				}(t, e)
			}
		}
		class qn extends Lo {
			constructor(t) {
				super(t), t.attract || (t.attract = { particles: [] }), this.handleClickMode = e => {
					const i = this.container.actualOptions;
					if ("attract" === e) {
						t.attract || (t.attract = { particles: [] }), t.attract.clicking = !0, t.attract.count = 0;
						for (const e of t.attract.particles) this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
						t.attract.particles = [], t.attract.finish = !1, setTimeout((() => { t.destroyed || (t.attract || (t.attract = { particles: [] }), t.attract.clicking = !1) }), 1e3 * i.interactivity.modes.attract.duration)
					}
				}
			}
			clear() {} init() {} async interact() {
				const t = this.container,
					e = t.actualOptions,
					i = t.interactivity.status === J,
					o = e.interactivity.events,
					n = o.onHover.enable,
					s = o.onHover.mode,
					a = o.onClick.enable,
					r = o.onClick.mode;
				i && n && O("attract", s) ? this.hoverAttract() : a && O("attract", r) && this.clickAttract()
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse,
					s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events;
				if (!(n.position && s.onHover.enable || n.clickPosition && s.onClick.enable)) return !1;
				const a = s.onHover.mode,
					r = s.onClick.mode;
				return O("attract", a) || O("attract", r)
			}
			reset() {} clickAttract() {
				const t = this.container;
				if (t.attract || (t.attract = { particles: [] }), t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count === t.particles.count && (t.attract.finish = !0)), t.attract.clicking) {
					const e = t.interactivity.mouse.clickPosition;
					if (!e) return;
					const i = t.retina.attractModeDistance;
					this.processAttract(e, i, new no(e.x, e.y, i))
				} else !1 === t.attract.clicking && (t.attract.particles = [])
			}
			hoverAttract() {
				const t = this.container,
					e = t.interactivity.mouse.position;
				if (!e) return;
				const i = t.retina.attractModeDistance;
				this.processAttract(e, i, new no(e.x, e.y, i))
			}
			processAttract(t, e, i) {
				const o = this.container,
					n = o.actualOptions.interactivity.modes.attract,
					s = o.particles.quadTree.query(i, (t => this.isEnabled(t)));
				for (const i of s) {
					const { dx: o, dy: s, distance: l } = y(i.position, t), c = n.speed * n.factor, h = r(b(1 - l / e, n.easing) * c, 0, n.maxSpeed), d = a.create(0 === l ? c : o / l * h, 0 === l ? c : s / l * h);
					i.position.subFrom(d)
				}
			}
		}
		class Un extends Lo {
			constructor(t) { super(t) } clear() {} init() {} async interact() {
				const t = this.container,
					e = t.actualOptions.interactivity.events,
					i = t.interactivity.status === J,
					o = e.onHover.enable,
					n = e.onHover.mode,
					s = e.onDiv;
				i && o && O("bounce", n) ? this.processMouseBounce() : j("bounce", s, ((t, e) => this.singleSelectorBounce(t, e)))
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse,
					s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
					a = s.onDiv;
				return n.position && s.onHover.enable && O("bounce", s.onHover.mode) || D("bounce", a)
			}
			reset() {} processBounce(t, e, i) { const o = this.container.particles.quadTree.query(i, (t => this.isEnabled(t))); for (const n of o) i instanceof no ? q(N(n), { position: t, radius: e, mass: e ** 2 * Math.PI / 2, velocity: a.origin, factor: a.origin }) : i instanceof so && U(n, I(t, e)) } processMouseBounce() {
				const t = this.container,
					e = 10 * t.retina.pixelRatio,
					i = t.interactivity.mouse.position,
					o = t.retina.bounceModeDistance;
				i && this.processBounce(i, o, new no(i.x, i.y, o + e))
			}
			singleSelectorBounce(t, e) {
				const i = this.container,
					o = document.querySelectorAll(t);
				o.length && o.forEach((t => {
					const o = t,
						n = i.retina.pixelRatio,
						s = { x: (o.offsetLeft + o.offsetWidth / 2) * n, y: (o.offsetTop + o.offsetHeight / 2) * n },
						a = o.offsetWidth / 2 * n,
						r = 10 * n,
						l = "circle" === e.type ? new no(s.x, s.y, a + r) : new so(o.offsetLeft * n - r, o.offsetTop * n - r, o.offsetWidth * n + 2 * r, o.offsetHeight * n + 2 * r);
					this.processBounce(s, a, l)
				}))
			}
		}

		function Wn(t, e, i, o) { if (e >= i) { return r(t + (e - i) * o, t, e) } if (e < i) { return r(t - (i - e) * o, e, t) } } class Qn extends Lo {
			constructor(t) { super(t), t.bubble || (t.bubble = {}), this.handleClickMode = e => { "bubble" === e && (t.bubble || (t.bubble = {}), t.bubble.clicking = !0) } } clear(t, e) { t.bubble.inRange && !e || (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color) } init() {} async interact() {
				const t = this.container.actualOptions.interactivity.events,
					e = t.onHover,
					i = t.onClick,
					o = e.enable,
					n = e.mode,
					s = i.enable,
					a = i.mode,
					r = t.onDiv;
				o && O("bubble", n) ? this.hoverBubble() : s && O("bubble", a) ? this.clickBubble() : j("bubble", r, ((t, e) => this.singleSelectorHover(t, e)))
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse,
					s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
					a = D("bubble", s.onDiv);
				if (!(a || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
				const r = s.onHover.mode,
					l = s.onClick.mode;
				return O("bubble", r) || O("bubble", l) || a
			}
			reset(t) { t.bubble.inRange = !1 } clickBubble() {
				var t, e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse.clickPosition;
				if (!n) return;
				i.bubble || (i.bubble = {});
				const s = i.retina.bubbleModeDistance,
					a = i.particles.quadTree.queryCircle(n, s, (t => this.isEnabled(t)));
				for (const s of a) {
					if (!i.bubble.clicking) continue;
					s.bubble.inRange = !i.bubble.durationEnd;
					const a = f(s.getPosition(), n),
						r = ((new Date).getTime() - (i.interactivity.mouse.clickTime || 0)) / 1e3;
					r > o.interactivity.modes.bubble.duration && (i.bubble.durationEnd = !0), r > 2 * o.interactivity.modes.bubble.duration && (i.bubble.clicking = !1, i.bubble.durationEnd = !1);
					const l = { bubbleObj: { optValue: i.retina.bubbleModeSize, value: s.bubble.radius }, particlesObj: { optValue: u(s.options.size.value) * i.retina.pixelRatio, value: s.size.value }, type: "size" };
					this.process(s, a, r, l);
					const c = { bubbleObj: { optValue: o.interactivity.modes.bubble.opacity, value: s.bubble.opacity }, particlesObj: { optValue: u(s.options.opacity.value), value: null !== (e = null === (t = s.opacity) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : 1 }, type: "opacity" };
					this.process(s, a, r, c), i.bubble.durationEnd ? delete s.bubble.color : a <= i.retina.bubbleModeDistance ? this.hoverBubbleColor(s, a) : delete s.bubble.color
				}
			}
			hoverBubble() {
				const t = this.container,
					e = t.interactivity.mouse.position;
				if (void 0 === e) return;
				const i = t.retina.bubbleModeDistance,
					o = t.particles.quadTree.queryCircle(e, i, (t => this.isEnabled(t)));
				for (const n of o) {
					n.bubble.inRange = !0;
					const o = f(n.getPosition(), e),
						s = 1 - o / i;
					o <= i ? s >= 0 && t.interactivity.status === J && (this.hoverBubbleSize(n, s), this.hoverBubbleOpacity(n, s), this.hoverBubbleColor(n, s)) : this.reset(n), t.interactivity.status === et && this.reset(n)
				}
			}
			hoverBubbleColor(t, e, i) {
				const o = this.container.actualOptions,
					n = null != i ? i : o.interactivity.modes.bubble;
				if (!t.bubble.finalColor) {
					const e = n.color;
					if (!e) return;
					const i = e instanceof Array ? R(e) : e;
					t.bubble.finalColor = pt(i)
				}
				if (t.bubble.finalColor)
					if (n.mix) {
						t.bubble.color = void 0;
						const i = t.getFillColor();
						t.bubble.color = i ? vt(Ot(i, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor
					} else t.bubble.color = t.bubble.finalColor
			}
			hoverBubbleOpacity(t, e, i) {
				var o, n, s;
				const a = this.container.actualOptions,
					r = null !== (o = null == i ? void 0 : i.opacity) && void 0 !== o ? o : a.interactivity.modes.bubble.opacity;
				if (!r) return;
				const l = t.options.opacity.value,
					c = Wn(null !== (s = null === (n = t.opacity) || void 0 === n ? void 0 : n.value) && void 0 !== s ? s : 1, r, u(l), e);
				void 0 !== c && (t.bubble.opacity = c)
			}
			hoverBubbleSize(t, e, i) {
				const o = this.container,
					n = (null == i ? void 0 : i.size) ? i.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
				if (void 0 === n) return;
				const s = u(t.options.size.value) * o.retina.pixelRatio,
					a = Wn(t.size.value, n, s, e);
				void 0 !== a && (t.bubble.radius = a)
			}
			process(t, e, i, o) {
				const n = this.container,
					s = o.bubbleObj.optValue;
				if (void 0 === s) return;
				const a = n.actualOptions.interactivity.modes.bubble.duration,
					r = n.retina.bubbleModeDistance,
					l = o.particlesObj.optValue,
					c = o.bubbleObj.value,
					h = o.particlesObj.value || 0,
					d = o.type;
				if (s !== l)
					if (n.bubble || (n.bubble = {}), n.bubble.durationEnd) c && ("size" === d && delete t.bubble.radius, "opacity" === d && delete t.bubble.opacity);
					else if (e <= r) { if ((null != c ? c : h) !== s) { const e = h - i * (h - s) / a; "size" === d && (t.bubble.radius = e), "opacity" === d && (t.bubble.opacity = e) } } else "size" === d && delete t.bubble.radius, "opacity" === d && delete t.bubble.opacity
			}
			singleSelectorHover(t, e) {
				const i = this.container,
					o = document.querySelectorAll(t);
				o.length && o.forEach((t => {
					const o = t,
						n = i.retina.pixelRatio,
						s = { x: (o.offsetLeft + o.offsetWidth / 2) * n, y: (o.offsetTop + o.offsetHeight / 2) * n },
						a = o.offsetWidth / 2 * n,
						r = "circle" === e.type ? new no(s.x, s.y, a) : new so(o.offsetLeft * n, o.offsetTop * n, o.offsetWidth * n, o.offsetHeight * n),
						l = i.particles.quadTree.query(r, (t => this.isEnabled(t)));
					for (const t of l) {
						if (!r.contains(t.getPosition())) continue;
						t.bubble.inRange = !0;
						const e = B(i.actualOptions.interactivity.modes.bubble.divs, o);
						t.bubble.div && t.bubble.div === o || (this.clear(t, !0), t.bubble.div = o), this.hoverBubbleSize(t, 1, e), this.hoverBubbleOpacity(t, 1, e), this.hoverBubbleColor(t, 1, e)
					}
				}))
			}
		}

		function $n(t, e, i) {
			t.canvas.draw((o => {
				var n;
				const s = function(t, e, i, o) { return Ft(e, i, o, t.actualOptions.interactivity.modes.connect.links.opacity) }(t, o, e, i);
				if (!s) return;
				const a = e.getPosition(),
					r = i.getPosition();
				! function(t, e, i, o, n) { t.save(), It(t, o, n), t.lineWidth = e, t.strokeStyle = i, t.stroke(), t.restore() }(o, null !== (n = e.retina.linksWidth) && void 0 !== n ? n : t.retina.linksWidth, s, a, r)
			}))
		}
		class Zn extends Lo {
			constructor(t) { super(t) } clear() {} init() {} async interact() {
				const t = this.container;
				if (t.actualOptions.interactivity.events.onHover.enable && "mousemove" === t.interactivity.status) {
					const e = t.interactivity.mouse.position;
					if (!e) return;
					const i = Math.abs(t.retina.connectModeRadius),
						o = t.particles.quadTree.queryCircle(e, i, (t => this.isEnabled(t)));
					let n = 0;
					for (const e of o) {
						const i = e.getPosition();
						for (const s of o.slice(n + 1)) {
							const o = s.getPosition(),
								n = Math.abs(t.retina.connectModeDistance),
								a = Math.abs(i.x - o.x),
								r = Math.abs(i.y - o.y);
							a < n && r < n && $n(t, e, s)
						}++n
					}
				}
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.interactivity.mouse,
					n = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : i.actualOptions.interactivity).events;
				return !(!n.onHover.enable || !o.position) && O("connect", n.onHover.mode)
			}
			reset() {}
		}

		function Xn(t, e, i, o, n) { t.canvas.draw((s => { var a; const r = e.getPosition();! function(t, e, i, o, n, s) { t.save(), It(t, i, o), t.strokeStyle = Vt(n, s), t.lineWidth = e, t.stroke(), t.restore() }(s, null !== (a = e.retina.linksWidth) && void 0 !== a ? a : t.retina.linksWidth, r, n, i, o) })) } class Yn extends Lo {
			constructor(t) { super(t) } clear() {} init() {} async interact() {
				var t;
				const e = this.container,
					i = e.actualOptions,
					o = i.interactivity;
				if (!o.events.onHover.enable || e.interactivity.status !== J) return;
				const n = e.interactivity.mouse.position;
				if (!n) return;
				const s = e.retina.grabModeDistance,
					a = e.particles.quadTree.queryCircle(n, s, (t => this.isEnabled(t)));
				for (const r of a) {
					const a = f(r.getPosition(), n);
					if (a > s) continue;
					const l = o.modes.grab.links,
						c = l.opacity,
						h = c - a * c / s;
					if (h <= 0) continue;
					const d = null !== (t = l.color) && void 0 !== t ? t : r.options.links.color;
					if (!e.particles.grabLineColor) {
						const t = i.interactivity.modes.grab.links;
						e.particles.grabLineColor = Mt(d, t.blink, t.consent)
					}
					const u = kt(r, void 0, e.particles.grabLineColor);
					if (!u) return;
					Xn(e, r, u, h, n)
				}
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.interactivity.mouse,
					n = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : i.actualOptions.interactivity).events;
				return n.onHover.enable && !!o.position && O("grab", n.onHover.mode)
			}
			reset() {}
		}
		class Jn extends Lo {
			constructor(t) {
				super(t), this.handleClickMode = t => {
					if ("pause" !== t) return;
					const e = this.container;
					e.getAnimationStatus() ? e.pause() : e.play()
				}
			}
			clear() {} init() {} async interact() {} isEnabled() { return !0 } reset() {}
		}
		class Kn extends Lo {
			constructor(t) {
				super(t), this.handleClickMode = t => {
					if ("push" !== t) return;
					const e = this.container,
						i = e.actualOptions,
						o = i.interactivity.modes.push.quantity;
					if (o <= 0) return;
					const n = R([void 0, ...i.interactivity.modes.push.groups]),
						s = void 0 !== n ? e.actualOptions.particles.groups[n] : void 0;
					e.particles.push(o, e.interactivity.mouse, s, n)
				}
			}
			clear() {} init() {} async interact() {} isEnabled() { return !0 } reset() {}
		}
		class ts extends Lo {
			constructor(t) {
				super(t), this.handleClickMode = t => {
					if ("remove" !== t) return;
					const e = this.container,
						i = e.actualOptions.interactivity.modes.remove.quantity;
					e.particles.removeQuantity(i)
				}
			}
			clear() {} init() {} async interact() {} isEnabled() { return !0 } reset() {}
		}
		class es extends Lo {
			constructor(t) {
				super(t), t.repulse || (t.repulse = { particles: [] }), this.handleClickMode = e => {
					const i = this.container.actualOptions;
					if ("repulse" === e) {
						t.repulse || (t.repulse = { particles: [] }), t.repulse.clicking = !0, t.repulse.count = 0;
						for (const e of t.repulse.particles) this.isEnabled(e) && e.velocity.setTo(e.initialVelocity);
						t.repulse.particles = [], t.repulse.finish = !1, setTimeout((() => { t.destroyed || (t.repulse || (t.repulse = { particles: [] }), t.repulse.clicking = !1) }), 1e3 * i.interactivity.modes.repulse.duration)
					}
				}
			}
			clear() {} init() {} async interact() {
				const t = this.container,
					e = t.actualOptions,
					i = t.interactivity.status === J,
					o = e.interactivity.events,
					n = o.onHover.enable,
					s = o.onHover.mode,
					a = o.onClick.enable,
					r = o.onClick.mode,
					l = o.onDiv;
				i && n && O("repulse", s) ? this.hoverRepulse() : a && O("repulse", r) ? this.clickRepulse() : j("repulse", l, ((t, e) => this.singleSelectorRepulse(t, e)))
			}
			isEnabled(t) {
				var e;
				const i = this.container,
					o = i.actualOptions,
					n = i.interactivity.mouse,
					s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
					a = D("repulse", s.onDiv);
				if (!(a || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
				const r = s.onHover.mode,
					l = s.onClick.mode;
				return O("repulse", r) || O("repulse", l) || a
			}
			reset() {} clickRepulse() {
				const t = this.container;
				if (t.repulse || (t.repulse = { particles: [] }), t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count === t.particles.count && (t.repulse.finish = !0)), t.repulse.clicking) {
					const e = t.retina.repulseModeDistance,
						i = Math.pow(e / 6, 3),
						o = t.interactivity.mouse.clickPosition;
					if (void 0 === o) return;
					const n = new no(o.x, o.y, i),
						s = t.particles.quadTree.query(n, (t => this.isEnabled(t)));
					for (const e of s) {
						const { dx: n, dy: s, distance: r } = y(o, e.position), l = r ** 2, c = t.actualOptions.interactivity.modes.repulse.speed, h = -i * c / l;
						if (l <= i) {
							t.repulse.particles.push(e);
							const i = a.create(n, s);
							i.length = h, e.velocity.setTo(i)
						}
					}
				} else if (!1 === t.repulse.clicking) {
					for (const e of t.repulse.particles) e.velocity.setTo(e.initialVelocity);
					t.repulse.particles = []
				}
			}
			hoverRepulse() {
				const t = this.container,
					e = t.interactivity.mouse.position;
				if (!e) return;
				const i = t.retina.repulseModeDistance;
				this.processRepulse(e, i, new no(e.x, e.y, i))
			}
			processRepulse(t, e, i, o) {
				var n;
				const s = this.container,
					l = s.particles.quadTree.query(i, (t => this.isEnabled(t))),
					c = s.actualOptions.interactivity.modes.repulse;
				for (const i of l) {
					const { dx: s, dy: l, distance: h } = y(i.position, t), d = (null !== (n = null == o ? void 0 : o.speed) && void 0 !== n ? n : c.speed) * c.factor, u = r(b(1 - h / e, c.easing) * d, 0, c.maxSpeed), p = a.create(0 === h ? d : s / h * u, 0 === h ? d : l / h * u);
					i.position.addTo(p)
				}
			}
			singleSelectorRepulse(t, e) {
				const i = this.container,
					o = document.querySelectorAll(t);
				o.length && o.forEach((t => {
					const o = t,
						n = i.retina.pixelRatio,
						s = { x: (o.offsetLeft + o.offsetWidth / 2) * n, y: (o.offsetTop + o.offsetHeight / 2) * n },
						a = o.offsetWidth / 2 * n,
						r = "circle" === e.type ? new no(s.x, s.y, a) : new so(o.offsetLeft * n, o.offsetTop * n, o.offsetWidth * n, o.offsetHeight * n),
						l = B(i.actualOptions.interactivity.modes.repulse.divs, o);
					this.processRepulse(s, a, r, l)
				}))
			}
		}
		const is = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
		async function os(t) {
			return new Promise((e => {
				t.loading = !0;
				const i = new Image;
				i.addEventListener("load", (() => { t.element = i, t.loading = !1, e() })), i.addEventListener("error", (() => { t.error = !0, t.loading = !1, console.error(`Error tsParticles - loading image: ${t.source}`), e() })), i.src = t.source
			}))
		}
		async function ns(t) {
			if ("svg" !== t.type) return void await os(t);
			t.loading = !0;
			const e = await fetch(t.source);
			t.loading = !1, e.ok || (console.error("Error tsParticles - Image not found"), t.error = !0), t.error || (t.svgData = await e.text())
		}

		function ss(t, e, i, o) {
			var n, s, a;
			const r = function(t, e, i) { const { svgData: o } = t; if (!o) return ""; const n = Tt(e, i); if (o.includes("fill")) return o.replace(is, (() => n)); const s = o.indexOf(">"); return `${o.substring(0,s)} fill="${n}"${o.substring(s)}` }(t, i, null !== (s = null === (n = o.opacity) || void 0 === n ? void 0 : n.value) && void 0 !== s ? s : 1),
				l = new Blob([r], { type: "image/svg+xml" }),
				c = URL || window.URL || window.webkitURL || window,
				h = c.createObjectURL(l),
				d = new Image,
				u = { data: Object.assign(Object.assign({}, t), { svgData: r }), ratio: e.width / e.height, replaceColor: null !== (a = e.replaceColor) && void 0 !== a ? a : e.replace_color, source: e.src };
			return d.addEventListener("load", (() => {
				const e = o.image;
				e && (e.loaded = !0, t.element = d), c.revokeObjectURL(h)
			})), d.addEventListener("error", (() => {
				c.revokeObjectURL(h);
				const e = Object.assign(Object.assign({}, t), { error: !1, loading: !0 });
				os(e).then((() => {
					const i = o.image;
					i && (t.element = e.element, i.loaded = !0)
				}))
			})), d.src = h, u
		}
		var as, rs = function(t, e, i, o, n) { if ("m" === o) throw new TypeError("Private method is not writable"); if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter"); if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === o ? n.call(t, i) : n ? n.value = i : e.set(t, i), i },
			ls = function(t, e, i, o) { if ("a" === i && !o) throw new TypeError("Private accessor was defined without a getter"); if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t) };
		class cs {
			constructor() { as.set(this, void 0), rs(this, as, [], "f") } addImage(t, e) {
				const i = this.getImages(t);
				null == i || i.images.push(e)
			}
			destroy() { rs(this, as, [], "f") } draw(t, e, i, o) {
				var n, s;
				const a = e.image,
					r = null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.element;
				if (!r) return;
				const l = null !== (s = null == a ? void 0 : a.ratio) && void 0 !== s ? s : 1,
					c = { x: -i, y: -i };
				t.globalAlpha = o, t.drawImage(r, c.x, c.y, 2 * i, 2 * i / l), t.globalAlpha = 1
			}
			getImages(t) { const e = ls(this, as, "f").find((e => e.id === t.id)); return e || (ls(this, as, "f").push({ id: t.id, images: [] }), this.getImages(t)) } getSidesCount() { return 12 } loadShape(t) {
				var e, i, o;
				if ("image" !== t.shape && "images" !== t.shape) return;
				const n = this.getImages(t.container).images,
					s = t.shapeData,
					a = n.find((t => t.source === s.src));
				let r;
				if (!a) return void this.loadImageShape(t.container, s).then((() => { this.loadShape(t) }));
				if (a.error) return;
				const l = t.getFillColor();
				r = a.svgData && s.replaceColor && l ? ss(a, s, l, t) : { data: a, loaded: !0, ratio: s.width / s.height, replaceColor: null !== (e = s.replaceColor) && void 0 !== e ? e : s.replace_color, source: s.src }, r.ratio || (r.ratio = 1);
				const c = { image: r, fill: null !== (i = s.fill) && void 0 !== i ? i : t.fill, close: null !== (o = s.close) && void 0 !== o ? o : t.close };
				t.image = c.image, t.fill = c.fill, t.close = c.close
			}
			async loadImageShape(t, e) {
				const i = e.src;
				if (!i) throw new Error("Error tsParticles - No image.src");
				try {
					const o = { source: i, type: i.substr(i.length - 3), error: !1, loading: !0 };
					this.addImage(t, o);
					const n = e.replaceColor ? ns : os;
					await n(o)
				} catch (t) { throw new Error(`tsParticles error - ${e.src} not found`) }
			}
		}
		as = new WeakMap;
		class hs extends Je { constructor() { super(), this.sync = !1 } load(t) { t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync)) } } class ds extends Je { constructor() { super(), this.random.minimumValue = 1e-4, this.sync = !1 } load(t) { t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync)) } } class us { constructor() { this.count = 0, this.delay = new hs, this.duration = new ds } load(t) { t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration)) } } class ps {
			constructor(t) { this.container = t } init(t) {
				const e = this.container,
					i = t.options.life;
				i && (t.life = { delay: e.retina.reduceFactor ? h(i.delay.value) * (i.delay.sync ? 1 : Math.random()) / e.retina.reduceFactor * 1e3 : 0, delayTime: 0, duration: e.retina.reduceFactor ? h(i.duration.value) * (i.duration.sync ? 1 : Math.random()) / e.retina.reduceFactor * 1e3 : 0, time: 0, count: i.count }, t.life.duration <= 0 && (t.life.duration = -1), t.life.count <= 0 && (t.life.count = -1), t.life && (t.spawning = t.life.delay > 0))
			}
			isEnabled(t) { return !t.destroyed } loadOptions(t, ...e) { for (const i of e)(null == i ? void 0 : i.life) && (t.life || (t.life = new us), t.life.load(i.life)) } update(t, e) {
				if (!this.isEnabled(t) || !t.life) return;
				const i = t.life;
				let o = !1;
				if (t.spawning) {
					if (i.delayTime += e.value, !(i.delayTime >= t.life.delay)) return;
					o = !0, t.spawning = !1, i.delayTime = 0, i.time = 0
				}
				if (-1 === i.duration) return;
				if (t.spawning) return;
				if (o ? i.time = 0 : i.time += e.value, i.time < i.duration) return;
				if (i.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) return void t.destroy();
				const n = this.container.canvas.size,
					s = p(0, n.width),
					a = p(0, n.width);
				t.position.x = c(s), t.position.y = c(a), t.spawning = !0, i.delayTime = 0, i.time = 0, t.reset();
				const r = t.options.life;
				r && (i.delay = 1e3 * h(r.delay.value), i.duration = 1e3 * h(r.duration.value))
			}
		}
		class vs { draw(t, e, i) { t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0) } getSidesCount() { return 1 } } class ys {
			constructor(t) { this.container = t } init(t) {
				const e = t.options.opacity;
				t.opacity = { enable: e.animation.enable, max: u(e.value), min: d(e.value), value: h(e.value), loops: 0, maxLoops: h(e.animation.count) };
				const i = e.animation;
				if (i.enable) {
					t.opacity.decay = 1 - h(i.decay), t.opacity.status = 0;
					const o = e.value;
					switch (t.opacity.min = d(o), t.opacity.max = u(o), i.startValue) {
						case "min":
							t.opacity.value = t.opacity.min, t.opacity.status = 0;
							break;
						case "random":
							t.opacity.value = c(t.opacity), t.opacity.status = Math.random() >= .5 ? 0 : 1;
							break;
						default:
							t.opacity.value = t.opacity.max, t.opacity.status = 1
					}
					t.opacity.velocity = h(i.speed) / 100 * this.container.retina.reduceFactor, i.sync || (t.opacity.velocity *= Math.random())
				}
			}
			isEnabled(t) { var e, i, o, n; return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) < (null !== (n = t.opacity.maxLoops) && void 0 !== n ? n : 0)) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i, o, n, s, a, l;
					if (!t.opacity) return;
					const c = t.opacity.min,
						h = t.opacity.max,
						d = null !== (i = t.opacity.decay) && void 0 !== i ? i : 1;
					if (!(t.destroyed || !t.opacity.enable || (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0) > 0 && (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) > (null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0))) {
						switch (t.opacity.status) {
							case 0:
								t.opacity.value >= h ? (t.opacity.status = 1, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += (null !== (a = t.opacity.velocity) && void 0 !== a ? a : 0) * e.factor;
								break;
							case 1:
								t.opacity.value <= c ? (t.opacity.status = 0, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= (null !== (l = t.opacity.velocity) && void 0 !== l ? l : 0) * e.factor
						}
						t.opacity.velocity && 1 !== t.opacity.decay && (t.opacity.velocity *= d),
							function(t, e, i, o) {
								switch (t.options.opacity.animation.destroy) {
									case "max":
										e >= o && t.destroy();
										break;
									case "min":
										e <= i && t.destroy()
								}
							}(t, t.opacity.value, c, h), t.destroyed || (t.opacity.value = r(t.opacity.value, c, h))
					}
				}(t, e)
			}
		}
		class fs {
			constructor(t) { this.container = t, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"] } update(t, e, i, o) {
				if (!this.modes.includes(o)) return;
				const n = this.container;
				let s = !1;
				for (const [, o] of n.plugins)
					if (void 0 !== o.particleBounce && (s = o.particleBounce(t, i, e)), s) break;
				if (s) return;
				const a = t.getPosition(),
					r = t.offset,
					l = t.getRadius(),
					c = I(a, l),
					h = n.canvas.size;
				! function(t) {
					if ("bounce" !== t.outMode && "bounce-horizontal" !== t.outMode && "bounceHorizontal" !== t.outMode && "split" !== t.outMode) return;
					t.bounds.right < 0 ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
					const e = t.particle.velocity.x;
					let i = !1;
					if ("right" === t.direction && t.bounds.right >= t.canvasSize.width && e > 0 || "left" === t.direction && t.bounds.left <= 0 && e < 0) {
						const e = v(t.particle.options.bounce.horizontal);
						t.particle.velocity.x *= -e, i = !0
					}
					if (!i) return;
					const o = t.offset.x + t.size;
					t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - o : t.bounds.left <= 0 && (t.particle.position.x = o), "split" === t.outMode && t.particle.destroy()
				}({ particle: t, outMode: o, direction: e, bounds: c, canvasSize: h, offset: r, size: l }),
				function(t) {
					if ("bounce" !== t.outMode && "bounce-vertical" !== t.outMode && "bounceVertical" !== t.outMode && "split" !== t.outMode) return;
					t.bounds.bottom < 0 ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
					const e = t.particle.velocity.y;
					let i = !1;
					if ("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && e > 0 || "top" === t.direction && t.bounds.top <= 0 && e < 0) {
						const e = v(t.particle.options.bounce.vertical);
						t.particle.velocity.y *= -e, i = !0
					}
					if (!i) return;
					const o = t.offset.y + t.size;
					t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - o : t.bounds.top <= 0 && (t.particle.position.y = o), "split" === t.outMode && t.particle.destroy()
				}({ particle: t, outMode: o, direction: e, bounds: c, canvasSize: h, offset: r, size: l })
			}
		}
		class ws {
			constructor(t) { this.container = t, this.modes = ["destroy"] } update(t, e, i, o) {
				if (!this.modes.includes(o)) return;
				const n = this.container;
				switch (t.outType) {
					case "normal":
					case "outside":
						if (z(t.position, n.canvas.size, a.origin, t.getRadius(), e)) return;
						break;
					case "inside": { const { dx: e, dy: i } = y(t.position, t.moveCenter), { x: o, y: n } = t.velocity; if (o < 0 && e > t.moveCenter.radius || n < 0 && i > t.moveCenter.radius || o >= 0 && e < -t.moveCenter.radius || n >= 0 && i < -t.moveCenter.radius) return; break }
				}
				n.particles.remove(t, void 0, !0)
			}
		}
		class gs {
			constructor(t) { this.container = t, this.modes = ["none"] } update(t, e, i, o) {
				if (!this.modes.includes(o)) return;
				if (t.options.move.distance.horizontal && ("left" === e || "right" === e) || t.options.move.distance.vertical && ("top" === e || "bottom" === e)) return;
				const n = t.options.move.gravity,
					s = this.container,
					r = s.canvas.size,
					l = t.getRadius();
				if (n.enable) {
					const i = t.position;
					(!n.inverse && i.y > r.height + l && "bottom" === e || n.inverse && i.y < -l && "top" === e) && s.particles.remove(t)
				} else {
					if (t.velocity.y > 0 && t.position.y <= r.height + l || t.velocity.y < 0 && t.position.y >= -l || t.velocity.x > 0 && t.position.x <= r.width + l || t.velocity.x < 0 && t.position.x >= -l) return;
					z(t.position, s.canvas.size, a.origin, l, e) || s.particles.remove(t)
				}
			}
		}
		class ms {
			constructor(t) { this.container = t, this.modes = ["out"] } update(t, e, i, o) {
				if (!this.modes.includes(o)) return;
				const n = this.container;
				switch (t.outType) {
					case "inside": {
						const { x: e, y: i } = t.velocity, o = a.origin;
						o.length = t.moveCenter.radius, o.angle = t.velocity.angle + Math.PI, o.addTo(a.create(t.moveCenter));
						const { dx: s, dy: r } = y(t.position, o);
						if (e <= 0 && s >= 0 || i <= 0 && r >= 0 || e >= 0 && s <= 0 || i >= 0 && r <= 0) return;
						t.position.x = Math.floor(c({ min: 0, max: n.canvas.size.width })), t.position.y = Math.floor(c({ min: 0, max: n.canvas.size.height }));
						const { dx: l, dy: h } = y(t.position, t.moveCenter);
						t.direction = Math.atan2(-h, -l), t.velocity.angle = t.direction;
						break
					}
					default:
						if (z(t.position, n.canvas.size, a.origin, t.getRadius(), e)) return;
						switch (t.outType) {
							case "outside": {
								t.position.x = Math.floor(c({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.x, t.position.y = Math.floor(c({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.y;
								const { dx: e, dy: i } = y(t.position, t.moveCenter);
								t.moveCenter.radius && (t.direction = Math.atan2(i, e), t.velocity.angle = t.direction);
								break
							}
							case "normal": {
								const i = t.options.move.warp,
									o = n.canvas.size,
									s = { bottom: o.height + t.getRadius() + t.offset.y, left: -t.getRadius() - t.offset.x, right: o.width + t.getRadius() + t.offset.x, top: -t.getRadius() - t.offset.y },
									a = t.getRadius(),
									r = I(t.position, a);
								"right" === e && r.left > o.width + t.offset.x ? (t.position.x = s.left, t.initialPosition.x = t.position.x, i || (t.position.y = Math.random() * o.height, t.initialPosition.y = t.position.y)) : "left" === e && r.right < -t.offset.x && (t.position.x = s.right, t.initialPosition.x = t.position.x, i || (t.position.y = Math.random() * o.height, t.initialPosition.y = t.position.y)), "bottom" === e && r.top > o.height + t.offset.y ? (i || (t.position.x = Math.random() * o.width, t.initialPosition.x = t.position.x), t.position.y = s.top, t.initialPosition.y = t.position.y) : "top" === e && r.bottom < -t.offset.y && (i || (t.position.x = Math.random() * o.width, t.initialPosition.x = t.position.x), t.position.y = s.bottom, t.initialPosition.y = t.position.y);
								break
							}
						}
				}
			}
		}
		class bs {
			constructor(t) { this.container = t, this.updaters = [new fs(t), new ws(t), new ms(t), new gs(t)] } init() {} isEnabled(t) { return !t.destroyed && !t.spawning } update(t, e) {
				var i, o, n, s;
				const a = t.options.move.outModes;
				this.updateOutMode(t, e, null !== (i = a.bottom) && void 0 !== i ? i : a.default, "bottom"), this.updateOutMode(t, e, null !== (o = a.left) && void 0 !== o ? o : a.default, "left"), this.updateOutMode(t, e, null !== (n = a.right) && void 0 !== n ? n : a.default, "right"), this.updateOutMode(t, e, null !== (s = a.top) && void 0 !== s ? s : a.default, "top")
			}
			updateOutMode(t, e, i, o) { for (const n of this.updaters) n.update(t, o, e, i) }
		}
		class Ss {
			init() {} isEnabled(t) { return !V() && !t.destroyed && t.container.actualOptions.interactivity.events.onHover.parallax.enable } move(t) {
				const e = t.container,
					i = e.actualOptions;
				if (V() || !i.interactivity.events.onHover.parallax.enable) return;
				const o = i.interactivity.events.onHover.parallax.force,
					n = e.interactivity.mouse.position;
				if (!n) return;
				const s = e.canvas.size.width / 2,
					a = e.canvas.size.height / 2,
					r = i.interactivity.events.onHover.parallax.smooth,
					l = t.getRadius() / o,
					c = (n.x - s) * l,
					h = (n.y - a) * l;
				t.offset.x += (c - t.offset.x) / r, t.offset.y += (h - t.offset.y) / r
			}
		}
		class Ps extends Io {
			constructor(t) { super(t) } clear() {} init() {} async interact(t) {
				var e;
				const i = this.container,
					o = null !== (e = t.retina.attractDistance) && void 0 !== e ? e : i.retina.attractDistance,
					n = t.getPosition(),
					s = i.particles.quadTree.queryCircle(n, o);
				for (const e of s) {
					if (t === e || !e.options.move.attract.enable || e.destroyed || e.spawning) continue;
					const i = e.getPosition(),
						{ dx: o, dy: s } = y(n, i),
						a = t.options.move.attract.rotate,
						r = o / (1e3 * a.x),
						l = s / (1e3 * a.y),
						c = e.size.value / t.size.value,
						h = 1 / c;
					t.velocity.x -= r * c, t.velocity.y -= l * c, e.velocity.x += r * h, e.velocity.y += l * h
				}
			}
			isEnabled(t) { return t.options.move.attract.enable } reset() {}
		}

		function _s(t, e) { q(N(t), N(e)) }

		function xs(t, e, i, o) {
			switch (t.options.collisions.mode) {
				case "absorb":
					! function(t, e, i, o) {
						if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
						else if (void 0 !== t.getRadius() && void 0 === e.getRadius()) e.destroy();
						else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
							if (t.getRadius() >= e.getRadius()) {
								const n = r(t.getRadius() / e.getRadius(), 0, e.getRadius()) * i;
								t.size.value += n, e.size.value -= n, e.getRadius() <= o && (e.size.value = 0, e.destroy())
							} else {
								const n = r(e.getRadius() / t.getRadius(), 0, t.getRadius()) * i;
								t.size.value -= n, e.size.value += n, t.getRadius() <= o && (t.size.value = 0, t.destroy())
							}
					}(t, e, i, o);
					break;
				case "bounce":
					_s(t, e);
					break;
				case "destroy":
					! function(t, e) { t.unbreakable || e.unbreakable || _s(t, e), void 0 === t.getRadius() && void 0 !== e.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === e.getRadius() ? e.destroy() : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? e.destroy() : t.destroy()) }(t, e)
			}
		}
		class Cs extends Io {
			constructor(t) { super(t) } clear() {} init() {} async interact(t) {
				const e = this.container,
					i = t.getPosition(),
					o = t.getRadius(),
					n = e.particles.quadTree.queryCircle(i, 2 * o);
				for (const s of n) {
					if (t === s || !s.options.collisions.enable || t.options.collisions.mode !== s.options.collisions.mode || s.destroyed || s.spawning) continue;
					const n = s.getPosition(),
						a = s.getRadius();
					if (Math.abs(Math.round(i.z) - Math.round(n.z)) > o + a) continue;
					f(i, n) > o + a || xs(t, s, e.fpsLimit / 1e3, e.retina.pixelRatio)
				}
			}
			isEnabled(t) { return t.options.collisions.enable } reset() {}
		}

		function As(t, e, i, o, n) { let s = f(t, e); if (!n || s <= i) return s; if (s = f(t, { x: e.x - o.width, y: e.y }), s <= i) return s; if (s = f(t, { x: e.x - o.width, y: e.y - o.height }), s <= i) return s; return s = f(t, { x: e.x, y: e.y - o.height }), s } class Es extends Io {
			constructor(t) { super(t), this.linkContainer = t } clear() {} init() { this.linkContainer.particles.linksColors = new Map } async interact(t) {
				var e;
				t.links = [];
				const i = t.getPosition(),
					o = this.container,
					n = o.canvas.size;
				if (i.x < 0 || i.y < 0 || i.x > n.width || i.y > n.height) return;
				const s = t.options.links,
					a = s.opacity,
					r = null !== (e = t.retina.linksDistance) && void 0 !== e ? e : o.retina.linksDistance,
					l = s.warp,
					c = l ? new ao(i.x, i.y, r, n) : new no(i.x, i.y, r),
					h = o.particles.quadTree.query(c);
				for (const e of h) {
					const o = e.options.links;
					if (t === e || !o.enable || s.id !== o.id || e.spawning || e.destroyed || -1 !== t.links.map((t => t.destination)).indexOf(e) || -1 !== e.links.map((t => t.destination)).indexOf(t)) continue;
					const c = e.getPosition();
					if (c.x < 0 || c.y < 0 || c.x > n.width || c.y > n.height) continue;
					const h = As(i, c, r, n, l && o.warp);
					if (h > r) return;
					const d = (1 - h / r) * a;
					this.setColor(t), t.links.push({ destination: e, opacity: d })
				}
			}
			isEnabled(t) { return t.options.links.enable } reset() {} setColor(t) {
				const e = this.linkContainer,
					i = t.options.links;
				let o = void 0 === i.id ? e.particles.linksColor : e.particles.linksColors.get(i.id);
				if (!o) { o = Mt(i.color, i.blink, i.consent), void 0 === i.id ? e.particles.linksColor = o : e.particles.linksColors.set(i.id, o) }
			}
		}
		class Vs {
			constructor(t) { this.container = t } drawParticle(t, e) {
				const i = e,
					o = this.container,
					n = o.particles,
					s = e.options;
				if (i.links.length <= 0) return;
				t.save();
				const a = i.links.filter((t => o.particles.getLinkFrequency(i, t.destination) <= s.links.frequency));
				for (const t of a) {
					const e = t.destination;
					if (s.links.triangles.enable) {
						const r = a.map((t => t.destination)),
							l = e.links.filter((t => o.particles.getLinkFrequency(e, t.destination) <= e.options.links.frequency && r.indexOf(t.destination) >= 0));
						if (l.length)
							for (const o of l) {
								const a = o.destination;
								n.getTriangleFrequency(i, e, a) > s.links.triangles.frequency || this.drawLinkTriangle(i, t, o)
							}
					}
					t.opacity > 0 && o.retina.linksWidth > 0 && this.drawLinkLine(i, t)
				}
				t.restore()
			}
			particleCreated(t) { t.links = [] } particleDestroyed(t) { t.links = [] } drawLinkLine(t, e) {
				const i = this.container,
					o = i.actualOptions,
					n = e.destination,
					s = t.getPosition(),
					a = n.getPosition();
				let r = e.opacity;
				i.canvas.draw((e => {
					var l, c, d;
					let u;
					const p = null === (l = t.options.twinkle) || void 0 === l ? void 0 : l.lines;
					if (null == p ? void 0 : p.enable) {
						const t = p.frequency,
							e = ht(p.color);
						Math.random() < t && e && (u = e, r = h(p.opacity))
					}
					if (!u) {
						const e = t.options.links,
							o = void 0 !== e.id ? i.particles.linksColors.get(e.id) : i.particles.linksColor;
						u = kt(t, n, o)
					}
					if (!u) return;
					const v = null !== (c = t.retina.linksWidth) && void 0 !== c ? c : i.retina.linksWidth,
						w = null !== (d = t.retina.linksDistance) && void 0 !== d ? d : i.retina.linksDistance;
					! function(t, e, i, o, n, s, a, r, l, c, h, d) {
						let u = !1;
						if (f(i, o) <= n) It(t, i, o), u = !0;
						else if (a) {
							let e, a;
							const r = y(i, { x: o.x - s.width, y: o.y });
							if (r.distance <= n) {
								const t = i.y - r.dy / r.dx * i.x;
								e = { x: 0, y: t }, a = { x: s.width, y: t }
							} else {
								const t = y(i, { x: o.x, y: o.y - s.height });
								if (t.distance <= n) {
									const o = -(i.y - t.dy / t.dx * i.x) / (t.dy / t.dx);
									e = { x: o, y: 0 }, a = { x: o, y: s.height }
								} else {
									const t = y(i, { x: o.x - s.width, y: o.y - s.height });
									if (t.distance <= n) {
										const o = i.y - t.dy / t.dx * i.x;
										e = { x: -o / (t.dy / t.dx), y: o }, a = { x: e.x + s.width, y: e.y + s.height }
									}
								}
							}
							e && a && (It(t, i, e), It(t, o, a), u = !0)
						}
						if (u) {
							if (t.lineWidth = e, r && (t.globalCompositeOperation = l), t.strokeStyle = Vt(c, h), d.enable) {
								const e = ht(d.color);
								e && (t.shadowBlur = d.blur, t.shadowColor = Vt(e))
							}
							t.stroke()
						}
					}(e, v, s, a, w, i.canvas.size, t.options.links.warp, o.backgroundMask.enable, o.backgroundMask.composite, u, r, t.options.links.shadow)
				}))
			}
			drawLinkTriangle(t, e, i) {
				var o;
				const n = this.container,
					s = n.actualOptions,
					a = e.destination,
					r = i.destination,
					l = t.options.links.triangles,
					c = null !== (o = l.opacity) && void 0 !== o ? o : (e.opacity + i.opacity) / 2;
				c <= 0 || n.canvas.draw((e => {
					const i = t.getPosition(),
						o = a.getPosition(),
						h = r.getPosition();
					if (f(i, o) > n.retina.linksDistance || f(h, o) > n.retina.linksDistance || f(h, i) > n.retina.linksDistance) return;
					let d = ht(l.color);
					if (!d) {
						const e = t.options.links,
							i = void 0 !== e.id ? n.particles.linksColors.get(e.id) : n.particles.linksColor;
						d = kt(t, a, i)
					}
					d && function(t, e, i, o, n, s, a, r) { Ht(t, e, i, o), n && (t.globalCompositeOperation = s), t.fillStyle = Vt(a, r), t.fill() }(e, i, o, h, s.backgroundMask.enable, s.backgroundMask.composite, d, c)
				}))
			}
		}
		class Ts { constructor() { this.id = "links" } getPlugin(t) { return new Vs(t) } loadOptions() {} needsPlugin() { return !0 } } async function Gs(t) {
			await async function(t) { await t.addInteractor("particlesLinks", (t => new Es(t))) }(t), await async function(t) {
				const e = new Ts;
				await t.addPlugin(e)
			}(t)
		}
		class Os {
			draw(t, e, i) {
				const o = this.getCenter(e, i),
					n = this.getSidesData(e, i),
					s = n.count.numerator * n.count.denominator,
					a = n.count.numerator / n.count.denominator,
					r = 180 * (a - 2) / a,
					l = Math.PI - Math.PI * r / 180;
				if (t) { t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0); for (let e = 0; e < s; e++) t.lineTo(n.length, 0), t.translate(n.length, 0), t.rotate(l) }
			}
			getSidesCount(t) { var e, i; const o = t.shapeData; return null !== (i = null !== (e = null == o ? void 0 : o.sides) && void 0 !== e ? e : null == o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5 }
		}
		class ks extends Os {
			getCenter(t, e) { return { x: -e / (this.getSidesCount(t) / 3.5), y: -e / .76 } } getSidesData(t, e) {
				var i, o;
				const n = t.shapeData,
					s = null !== (o = null !== (i = null == n ? void 0 : n.sides) && void 0 !== i ? i : null == n ? void 0 : n.nb_sides) && void 0 !== o ? o : 5;
				return { count: { denominator: 1, numerator: s }, length: 2.66 * e / (s / 3) }
			}
		}
		class Ms extends Os { getCenter(t, e) { return { x: -e, y: e / 1.66 } } getSidesCount() { return 3 } getSidesData(t, e) { return { count: { denominator: 2, numerator: 3 }, length: 2 * e } } } async function Rs(t) { await async function(t) { await t.addShape("polygon", new ks) }(t), await async function(t) { await t.addShape("triangle", new Ms) }(t) } class zs {
			init() {} isEnabled(t) { var e, i, o, n; return !t.destroyed && !t.spawning && t.size.enable && ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (o = t.size.loops) && void 0 !== o ? o : 0) < (null !== (n = t.size.maxLoops) && void 0 !== n ? n : 0)) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i, o, n, s, a;
					const l = (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) * e.factor,
						c = t.size.min,
						h = t.size.max,
						d = null !== (o = t.size.decay) && void 0 !== o ? o : 1;
					if (!(t.destroyed || !t.size.enable || (null !== (n = t.size.maxLoops) && void 0 !== n ? n : 0) > 0 && (null !== (s = t.size.loops) && void 0 !== s ? s : 0) > (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0))) {
						switch (t.size.status) {
							case 0:
								t.size.value >= h ? (t.size.status = 1, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += l;
								break;
							case 1:
								t.size.value <= c ? (t.size.status = 0, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= l
						}
						t.size.velocity && 1 !== d && (t.size.velocity *= d),
							function(t, e, i, o) {
								switch (t.options.size.animation.destroy) {
									case "max":
										e >= o && t.destroy();
										break;
									case "min":
										e <= i && t.destroy()
								}
							}(t, t.size.value, c, h), t.destroyed || (t.size.value = r(t.size.value, c, h))
					}
				}(t, e)
			}
		}
		const Ls = Math.sqrt(2);
		class Is { draw(t, e, i) { t.rect(-i / Ls, -i / Ls, 2 * i / Ls, 2 * i / Ls) } getSidesCount() { return 4 } } class Hs {
			draw(t, e, i) {
				var o;
				const n = e.shapeData,
					s = this.getSidesCount(e),
					a = null !== (o = null == n ? void 0 : n.inset) && void 0 !== o ? o : 2;
				t.moveTo(0, 0 - i);
				for (let e = 0; e < s; e++) t.rotate(Math.PI / s), t.lineTo(0, 0 - i * a), t.rotate(Math.PI / s), t.lineTo(0, 0 - i)
			}
			getSidesCount(t) { var e, i; const o = t.shapeData; return null !== (i = null !== (e = null == o ? void 0 : o.sides) && void 0 !== e ? e : null == o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5 }
		}

		function Ds(t, e, i, o, n) {
			var s, a;
			const r = e;
			if (!r || !r.enable) return;
			const l = c(i.offset),
				h = (null !== (s = e.velocity) && void 0 !== s ? s : 0) * t.factor + 3.6 * l,
				d = null !== (a = e.decay) && void 0 !== a ? a : 1;
			n && 0 !== r.status ? (r.value -= h, r.value < 0 && (r.status = 0, r.value += r.value)) : (r.value += h, n && r.value > o && (r.status = 1, r.value -= r.value % o)), r.velocity && 1 !== d && (r.velocity *= d), r.value > o && (r.value %= o)
		}
		class js {
			constructor(t) { this.container = t } init(t) {
				var e, i;
				const o = this.container;
				t.stroke = t.options.stroke instanceof Array ? R(t.options.stroke, t.id, t.options.reduceDuplicates) : t.options.stroke, t.strokeWidth = t.stroke.width * o.retina.pixelRatio;
				const n = null !== (e = pt(t.stroke.color)) && void 0 !== e ? e : t.getFillColor();
				n && (t.strokeColor = zt(n, null === (i = t.stroke.color) || void 0 === i ? void 0 : i.animation, o.retina.reduceFactor))
			}
			isEnabled(t) { var e, i, o, n; const s = null === (e = t.stroke) || void 0 === e ? void 0 : e.color; return !t.destroyed && !t.spawning && !!s && (void 0 !== (null === (i = t.strokeColor) || void 0 === i ? void 0 : i.h.value) && s.animation.h.enable || void 0 !== (null === (o = t.strokeColor) || void 0 === o ? void 0 : o.s.value) && s.animation.s.enable || void 0 !== (null === (n = t.strokeColor) || void 0 === n ? void 0 : n.l.value) && s.animation.l.enable) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i, o, n, s, a, r, l, c, h, d;
					if (!(null === (i = t.stroke) || void 0 === i ? void 0 : i.color)) return;
					const u = t.stroke.color.animation,
						p = null !== (n = null === (o = t.strokeColor) || void 0 === o ? void 0 : o.h) && void 0 !== n ? n : null === (s = t.color) || void 0 === s ? void 0 : s.h;
					p && Ds(e, p, u.h, 360, !1);
					const v = null !== (r = null === (a = t.strokeColor) || void 0 === a ? void 0 : a.s) && void 0 !== r ? r : null === (l = t.color) || void 0 === l ? void 0 : l.s;
					v && Ds(e, v, u.s, 100, !0);
					const y = null !== (h = null === (c = t.strokeColor) || void 0 === c ? void 0 : c.l) && void 0 !== h ? h : null === (d = t.color) || void 0 === d ? void 0 : d.l;
					y && Ds(e, y, u.l, 100, !0)
				}(t, e)
			}
		}
		const Fs = ["text", "character", "char"];
		class Bs {
			draw(t, e, i, o) {
				var n, s, a;
				const r = e.shapeData;
				if (void 0 === r) return;
				const l = r.value;
				if (void 0 === l) return;
				const c = e;
				void 0 === c.text && (c.text = l instanceof Array ? R(l, e.randomIndexData) : l);
				const h = c.text,
					d = null !== (n = r.style) && void 0 !== n ? n : "",
					u = null !== (s = r.weight) && void 0 !== s ? s : "400",
					p = 2 * Math.round(i),
					v = null !== (a = r.font) && void 0 !== a ? a : "Verdana",
					y = e.fill,
					f = h.length * i / 2;
				t.font = `${d} ${u} ${p}px "${v}"`;
				const w = { x: -f, y: i / 2 };
				t.globalAlpha = o, y ? t.fillText(h, w.x, w.y) : t.strokeText(h, w.x, w.y), t.globalAlpha = 1
			}
			getSidesCount() { return 12 } async init(t) {
				const e = t.actualOptions;
				if (Fs.find((t => O(t, e.particles.shape.type)))) {
					const t = Fs.map((t => e.particles.shape.options[t])).find((t => !!t));
					if (t instanceof Array) {
						const e = [];
						for (const i of t) {
							const t = i;
							e.push(k(t.font, t.weight))
						}
						await Promise.allSettled(e)
					} else if (void 0 !== t) {
						const e = t;
						await k(e.font, e.weight)
					}
				}
			}
		}
		async function Ns(t) {
			await async function(t) { t.addMover("base", (() => new jn)) }(t), await async function(t) { t.addMover("parallax", (() => new Ss)) }(t), await async function(t) { await t.addInteractor("externalAttract", (t => new qn(t))) }(t), await async function(t) { await t.addInteractor("externalBounce", (t => new Un(t))) }(t), await async function(t) { await t.addInteractor("externalBubble", (t => new Qn(t))) }(t), await async function(t) { await t.addInteractor("externalConnect", (t => new Zn(t))) }(t), await async function(t) { await t.addInteractor("externalGrab", (t => new Yn(t))) }(t), await

			function(t) { t.addInteractor("externalPause", (t => new Jn(t))) }(t), await async function(t) { await t.addInteractor("externalPush", (t => new Kn(t))) }(t), await

			function(t) { t.addInteractor("externalRemove", (t => new ts(t))) }(t), await async function(t) { await t.addInteractor("externalRepulse", (t => new es(t))) }(t), await async function(t) { await t.addInteractor("particlesAttract", (t => new Ps(t))) }(t), await async function(t) { await t.addInteractor("particlesCollisions", (t => new Cs(t))) }(t), await Gs(t), await async function(t) { await t.addShape("circle", new Fn) }(t), await async function(t) {
				const e = new cs;
				await t.addShape("image", e), await t.addShape("images", e)
			}(t), await async function(t) { await t.addShape("line", new vs) }(t), await Rs(t), await async function(t) {
				const e = new Is;
				await t.addShape("edge", e), await t.addShape("square", e)
			}(t), await async function(t) { await t.addShape("star", new Hs) }(t), await async function(t) { const e = new Bs; for (const i of Fs) await t.addShape(i, e) }(t), await async function(t) { await t.addParticleUpdater("life", (t => new ps(t))) }(t), await async function(t) { await t.addParticleUpdater("opacity", (t => new ys(t))) }(t), await async function(t) { await t.addParticleUpdater("size", (() => new zs)) }(t), await async function(t) { await t.addParticleUpdater("angle", (t => new Dn(t))) }(t), await async function(t) { await t.addParticleUpdater("color", (t => new Nn(t))) }(t), await async function(t) { await t.addParticleUpdater("strokeColor", (t => new js(t))) }(t), await async function(t) { await t.addParticleUpdater("outModes", (t => new bs(t))) }(t), await (t => { const e = (e, i) => t.load(e, i); return e.load = (e, i, o) => { t.loadJSON(e, i).then((t => { t && o(t) })).catch((() => { o(void 0) })) }, e.setOnClickHandler = e => { t.setOnClickHandler(e) }, { particlesJS: e, pJSDom: t.dom() } })(t)
		}
		class qs { constructor() { this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1 } load(t) { t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = p(t.speed)), void 0 !== t.decay && (this.decay = p(t.decay)), void 0 !== t.sync && (this.sync = t.sync)) } } class Us extends Je { constructor() { super(), this.animation = new qs, this.direction = "clockwise", this.enable = !1, this.value = 0 } load(t) { super.load(t), t && (this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable)) } } class Ws {
			constructor(t) { this.container = t } getTransformValues(t) { var e; const i = (null === (e = t.tilt) || void 0 === e ? void 0 : e.enable) && t.tilt; return { b: i ? Math.cos(i.value) * i.cosDirection : void 0, c: i ? Math.sin(i.value) * i.sinDirection : void 0 } } init(t) {
				var e;
				const i = t.options.tilt;
				if (!i) return;
				t.tilt = { enable: i.enable, value: h(i.value) * Math.PI / 180, sinDirection: Math.random() >= .5 ? 1 : -1, cosDirection: Math.random() >= .5 ? 1 : -1 };
				let o = i.direction;
				if ("random" === o) { o = Math.floor(2 * Math.random()) > 0 ? "counter-clockwise" : "clockwise" }
				switch (o) {
					case "counter-clockwise":
					case "counterClockwise":
						t.tilt.status = 1;
						break;
					case "clockwise":
						t.tilt.status = 0
				}
				const n = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation;
				(null == n ? void 0 : n.enable) && (t.tilt.decay = 1 - h(n.decay), t.tilt.velocity = h(n.speed) / 360 * this.container.retina.reduceFactor, n.sync || (t.tilt.velocity *= Math.random()))
			}
			isEnabled(t) { var e; const i = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation; return !t.destroyed && !t.spawning && !!(null == i ? void 0 : i.enable) } loadOptions(t, ...e) { for (const i of e)(null == i ? void 0 : i.tilt) && (t.tilt || (t.tilt = new Us), t.tilt.load(i.tilt)) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i, o;
					if (!t.tilt || !t.options.tilt) return;
					const n = t.options.tilt.animation,
						s = (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) * e.factor,
						a = 2 * Math.PI,
						r = null !== (o = t.tilt.decay) && void 0 !== o ? o : 1;
					n.enable && (0 === t.tilt.status ? (t.tilt.value += s, t.tilt.value > a && (t.tilt.value -= a)) : (t.tilt.value -= s, t.tilt.value < 0 && (t.tilt.value += a)), t.tilt.velocity && 1 !== r && (t.tilt.velocity *= r))
				}(t, e)
			}
		}
		class Qs { constructor() { this.enable = !1, this.frequency = .05, this.opacity = 1 } load(t) { t && (void 0 !== t.color && (this.color = oe.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = p(t.opacity))) } } class $s { constructor() { this.lines = new Qs, this.particles = new Qs } load(t) { t && (this.lines.load(t.lines), this.particles.load(t.particles)) } } class Zs {
			getColorStyles(t, e, i, o) {
				const n = t.options.twinkle;
				if (!n) return {};
				const s = n.particles,
					a = s.enable && Math.random() < s.frequency,
					r = t.options.zIndex,
					l = (1 - t.zIndexFactor) ** r.opacityRate,
					c = a ? h(s.opacity) * l : o,
					d = pt(s.color),
					u = d ? Tt(d, c) : void 0,
					p = {},
					v = a && u;
				return p.fill = v ? u : void 0, p.stroke = v ? u : void 0, p
			}
			init() {} isEnabled(t) { const e = t.options.twinkle; return !!e && e.particles.enable } loadOptions(t, ...e) { for (const i of e)(null == i ? void 0 : i.twinkle) && (t.twinkle || (t.twinkle = new $s), t.twinkle.load(i.twinkle)) } update() {}
		}
		class Xs { constructor() { this.angle = 50, this.move = 10 } load(t) { t && (void 0 !== t.angle && (this.angle = p(t.angle)), void 0 !== t.move && (this.move = p(t.move))) } } class Ys {
			constructor() { this.distance = 5, this.enable = !1, this.speed = new Xs } load(t) {
				if (t && (void 0 !== t.distance && (this.distance = p(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed))
					if ("number" == typeof t.speed) this.speed.load({ angle: t.speed });
					else {
						const e = t.speed;
						void 0 !== e.min ? this.speed.load({ angle: e }) : this.speed.load(t.speed)
					}
			}
		}
		class Js {
			constructor(t) { this.container = t } init(t) {
				var e;
				const i = t.options.wobble;
				(null == i ? void 0 : i.enable) ? t.wobble = { angle: Math.random() * Math.PI * 2, angleSpeed: h(i.speed.angle) / 360, moveSpeed: h(i.speed.move) / 10 }: t.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }, t.retina.wobbleDistance = h(null !== (e = null == i ? void 0 : i.distance) && void 0 !== e ? e : 0) * this.container.retina.pixelRatio
			}
			isEnabled(t) { var e; return !t.destroyed && !t.spawning && !!(null === (e = t.options.wobble) || void 0 === e ? void 0 : e.enable) } loadOptions(t, ...e) { for (const i of e)(null == i ? void 0 : i.wobble) && (t.wobble || (t.wobble = new Ys), t.wobble.load(i.wobble)) } update(t, e) {
				this.isEnabled(t) && function(t, e) {
					var i;
					const o = t.options.wobble;
					if (!(null == o ? void 0 : o.enable) || !t.wobble) return;
					const n = t.wobble.angleSpeed * e.factor,
						s = t.wobble.moveSpeed * e.factor * ((null !== (i = t.retina.wobbleDistance) && void 0 !== i ? i : 0) * e.factor) / (1e3 / 60),
						a = 2 * Math.PI;
					t.wobble.angle += n, t.wobble.angle > a && (t.wobble.angle -= a), t.position.x += s * Math.cos(t.wobble.angle), t.position.y += s * Math.abs(Math.sin(t.wobble.angle))
				}(t, e)
			}
		}
		async function Ks(t) {
			await Ns(t), await async function(t) { await t.addParticleUpdater("roll", (() => new Hn)) }(t), await async function(t) { await t.addParticleUpdater("tilt", (t => new Ws(t))) }(t), await async function(t) { await t.addParticleUpdater("twinkle", (() => new Zs)) }(t), await async function(t) { await t.addParticleUpdater("wobble", (t => new Js(t))) }(t), await async function(t) { await t.addInteractor("externalTrail", (t => new wn(t))) }(t), await async function(t) {
				const e = new qo;
				await t.addPlugin(e)
			}(t), await async function(t) {
				t.emitterShapeManager || (t.emitterShapeManager = new hn(t)), t.addEmitterShape || (t.addEmitterShape = (e, i) => {
					var o;
					null === (o = t.emitterShapeManager) || void 0 === o || o.addShape(e, i)
				});
				const e = new fn(t);
				await t.addPlugin(e), t.addEmitterShape("circle", new Uo), t.addEmitterShape("square", new un)
			}(t), await async function(t) {
				const e = new zn(t);
				await t.addPlugin(e)
			}(t)
		}
		Ks(Ho)
	})(), o
})()));