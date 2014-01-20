/**
 * map.js
 *
 * Local map js
 *
 * @category    design
 * @package     blueacorn
 * @copyright   Copyright (c) 2014 BlueAcorn.
 */

// Home
$j(document).ready(function(){

    $j('.header-container').tooltipster({
        content: $j('<code>class="header-container" <br/>page.xml<br/>  &lt;block type="page/html_header" name="header" as="header"&gt; </code>'),
    });

    $j('.header ul.links').tooltipster({
        content: $j('<code>.header ul.links<br/>page.xml<br/>  &lt;block type="page/template_links" name="top.links" as="topLinks"/&gt;</code>'),
    });

    $j('.header-panel ul.links').tooltipster({
        content: $j('<code>.header-panel ul.links<br/>page.xml<br/>  &lt;block type="page/template_links" name="account.links" as="accountLinks"/&gt;</code>'),
    });

    $j('#search_mini_form .form-search').tooltipster({
        content: $j('<code>#search_mini_form .form-search<br/>catalog.xml<br/>  &lt;block type="core/template" name="top.search" as="topSearch" template="catalogsearch/form.mini.phtml"/&gt;</code>'),
    });

    $j('.checkout-link').tooltipster({
        content: $j('<code>.checkout-link<br/>catalog.xml<br/>  &lt;block type="page/template_links" name="checkout.links" as="checkoutLinks"/&gt;</code>'),
    });
});

$j.fn.tooltipster('setDefaults',
{
    // Global tipster behaviors
    interactive: true,
    onlyOne: true,
    functionBefore: function(origin, continueTooltip) {
        $j(origin).addClass('highlighted');
        continueTooltip();
    },
    functionAfter: function(origin) {
        $j(origin).removeClass('highlighted');
    }
});