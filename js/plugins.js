// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// ----------------------------------------------------------------------------
// Vegas – Fullscreen Backgrounds and Slideshows with jQuery.
// v1.3.3 - released 2013-09-03 13:27
// Licensed under the MIT license.
// http://vegas.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2010-2013 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------

(function(e){function t(a,n){var r={align:"center",valign:"center"};if(e.extend(r,n),0===a.height())return a.load(function(){t(e(this),n)}),void 0;var i,s,g,d=o(),l=d.width,u=d.height,v=a.width(),c=a.height(),p=u/l,f=c/v;p>f?(i=u/f,s=u):(i=l,s=l*f),g={width:i+"px",height:s+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"},isNaN(parseInt(r.valign,10))?"top"==r.valign?g.top=0:"bottom"==r.valign?g.bottom=0:g.top=(u-s)/2:g.top=0-(s-u)/100*parseInt(r.valign,10)+"px",isNaN(parseInt(r.align,10))?"left"==r.align?g.left=0:"right"==r.align?g.right=0:g.left=(l-i)/2:g.left=0-(i-l)/100*parseInt(r.align,10)+"px",a.css(g)}function a(){d.prependTo("body").fadeIn()}function n(){d.fadeOut("fast",function(){e(this).remove()})}function r(){return e("body").css("backgroundImage")?e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1"):void 0}function o(){var e=window,t="inner";return"innerWidth"in window||(e=document.documentElement||document.body,t="client"),{width:e[t+"Width"],height:e[t+"Height"]}}var i,s=e("<img />").addClass("vegas-background"),g=e("<div />").addClass("vegas-overlay"),d=e("<div />").addClass("vegas-loading"),l=e(),u=null,v=[],c=0,p=5e3,f=function(){},h={init:function(o){var i={src:r(),align:"center",valign:"center",fade:0,loading:!0,load:function(){},complete:function(){}};e.extend(i,e.vegas.defaults.background,o),i.loading&&a();var g=s.clone();return g.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){g!=l&&(e(window).bind("load resize.vegas",function(){t(g,i)}),l.is("img")?(l.stop(),g.hide().insertAfter(l).fadeIn(i.fade,function(){e(".vegas-background").not(this).remove(),e("body").trigger("vegascomplete",[this,c-1]),i.complete.apply(g,[c-1])})):g.hide().prependTo("body").fadeIn(i.fade,function(){e("body").trigger("vegascomplete",[this,c-1]),i.complete.apply(this,[c-1])}),l=g,t(l,i),i.loading&&n(),e("body").trigger("vegasload",[l.get(0),c-1]),i.load.apply(l.get(0),[c-1]),c&&(e("body").trigger("vegaswalk",[l.get(0),c-1]),i.walk.apply(l.get(0),[c-1])))}).attr("src",i.src),e.vegas},destroy:function(t){return t&&"background"!=t||(e(".vegas-background, .vegas-loading").remove(),e(window).unbind("*.vegas"),l=e()),t&&"overlay"!=t||e(".vegas-overlay").remove(),clearInterval(i),e.vegas},overlay:function(t){var a={src:null,opacity:null};return e.extend(a,e.vegas.defaults.overlay,t),g.remove(),g.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),a.src&&g.css("backgroundImage","url("+a.src+")"),a.opacity&&g.css("opacity",a.opacity),g.prependTo("body"),e.vegas},slideshow:function(t,a){var n={step:c,delay:p,preload:!1,backgrounds:v,walk:f};if(e.extend(n,e.vegas.defaults.slideshow,t),n.backgrounds!=v&&(t.step||(n.step=0),t.walk||(n.walk=function(){}),n.preload&&e.vegas("preload",n.backgrounds)),v=n.backgrounds,p=n.delay,c=n.step,f=n.walk,clearInterval(i),!v.length)return e.vegas;var r=function(){0>c&&(c=v.length-1),(c>=v.length||!v[c-1])&&(c=0);var t=v[c++];t.walk=n.walk,t.fade===void 0&&(t.fade=n.fade),t.fade>n.delay&&(t.fade=n.delay),e.vegas(t)};return r(),a||(u=!1,e("body").trigger("vegasstart",[l.get(0),c-1])),u||(i=setInterval(r,n.delay)),e.vegas},next:function(){var t=c;return c&&(e.vegas("slideshow",{step:c},!0),e("body").trigger("vegasnext",[l.get(0),c-1,t-1])),e.vegas},previous:function(){var t=c;return c&&(e.vegas("slideshow",{step:c-2},!0),e("body").trigger("vegasprevious",[l.get(0),c-1,t-1])),e.vegas},jump:function(t){var a=c;return c&&(e.vegas("slideshow",{step:t},!0),e("body").trigger("vegasjump",[l.get(0),c-1,a-1])),e.vegas},stop:function(){var t=c;return c=0,u=null,clearInterval(i),e("body").trigger("vegasstop",[l.get(0),t-1]),e.vegas},pause:function(){return u=!0,clearInterval(i),e("body").trigger("vegaspause",[l.get(0),c-1]),e.vegas},get:function(e){return null===e||"background"==e?l.get(0):"overlay"==e?g.get(0):"step"==e?c-1:"paused"==e?u:void 0},preload:function(t){var a=[];for(var n in t)if(t[n].src){var r=document.createElement("img");r.src=t[n].src,a.push(r)}return e.vegas}};e.vegas=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist"),void 0):h.init.apply(this,arguments)},e.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery);

/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

