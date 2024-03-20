export interface AxeRule {
    ruleId: string,
    description: string,
    impact: "Critical" | "Serious" | "Minor" | "Moderate"
    tags: string,
    issueType: string,
    actRules?: string
}


const axeRulesData: AxeRule[] = [
    {
        "ruleId": "area-alt",
        description: "Ensures &lt;area&gt; elements of image maps have alternate text",
        impact: "Critical",
        tags: "cat.text-alternatives, wcag2a, wcag244, wcag412, section508,section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "c487ae"
    },
    {
        "ruleId": "aria-allowed-attr",
        description: "Ensures an element&apos;s role supports its ARIA attributes",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "5c01ea"
    },
    {
        "ruleId": "aria-braille-equivalent",
        description: "Ensure aria-braillelabel and aria-brailleroledescription have anon-braille equivalent",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "needs&nbsp;review"
    },
    {
        "ruleId": "aria-command-name",
        description: "Ensures every ARIA button, link and menuitem has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "97a4e1"
    },
    {
        "ruleId": "aria-conditional-attr",
        description: "Ensures ARIA attributes are used as described in the specification ofthe element&apos;s role",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure",
        actRules: "5c01ea"
    },
    {
        "ruleId": "aria-deprecated-role",
        description: "Ensures elements do not use deprecated roles",
        impact: "Minor",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure",
        actRules: "674b10"
    },
    {
        "ruleId": "aria-hidden-body",
        description: "Ensures aria-hidden=&quot;true&quot; is not present on the documentbody.",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure"
    },
    {
        "ruleId": "aria-hidden-focus",
        description: "Ensures aria-hidden elements are not focusable nor contain focusableelements",
        impact: "Serious",
        tags: "cat.name-role-value, wcag2a, wcag412, TTv5, TT6.a, EN-301-549,EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "6cfa84"
    },
    {
        "ruleId": "aria-input-field-name",
        description: "Ensures every ARIA input field has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "e086e5"
    },
    {
        "ruleId": "aria-meter-name",
        description: "Ensures every ARIA meter node has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1",
        issueType: "failure, needs&nbsp;review"
    },
    {
        "ruleId": "aria-progressbar-name",
        description: "Ensures every ARIA progressbar node has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag111, EN-301-549, EN-9.1.1.1",
        issueType: "failure, needs&nbsp;review"
    },
    {
        "ruleId": "aria-prohibited-attr",
        description: "Ensures ARIA attributes are not prohibited for an element&apos;s role",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "5c01ea"
    },
    {
        "ruleId": "aria-required-attr",
        description: "Ensures elements with ARIA roles have all required ARIA attributes",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure",
        actRules: "4e8ab6"
    },
    {
        "ruleId": "aria-required-children",
        description: "Ensures elements with an ARIA role that require child roles containthem",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure, needs&nbsp;review",
        actRules: "bc4a75,ff89c9"
    },
    {
        "ruleId": "aria-required-parent",
        description: "Ensures elements with an ARIA role that require parent roles arecontained by them",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure",
        actRules: "ff89c9"
    },
    {
        "ruleId": "aria-roles",
        description: "Ensures all elements with a role attribute use a valid value",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure",
        actRules: "674b10"
    },
    {
        "ruleId": "aria-toggle-field-name",
        description: "Ensures every ARIA toggle field has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "e086e5"
    },
    {
        "ruleId": "aria-tooltip-name",
        description: "Ensures every ARIA tooltip node has an accessible name",
        impact: "Serious",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review"
    },
    {
        "ruleId": "aria-valid-attr-value",
        description: "Ensures all ARIA attributes have valid values",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "6a7281"
    },
    {
        "ruleId": "aria-valid-attr",
        description: "Ensures attributes that begin with aria- are valid ARIA attributes",
        impact: "Critical",
        tags: "cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "failure",
        actRules: "5f99a7"
    },
    {
        "ruleId": "blink",
        description: "Ensures &lt;blink&gt; elements are not used",
        impact: "Serious",
        tags: "cat.time-and-media, wcag2a, wcag222, section508, section508.22.j,TTv5, TT2.b, EN-301-549, EN-9.2.2.2",
        issueType: "failure"
    },
    {
        "ruleId": "button-name",
        description: "Ensures buttons have discernible text",
        impact: "Critical",
        tags: "cat.name-role-value, wcag2a, wcag412, section508, section508.22.a,TTv5, TT6.a, EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "97a4e1,m6b1q3"
    },
    {
        "ruleId": "bypass",
        description: "Ensures each page has at least one mechanism for a user to bypassnavigation and jump straight to the content",
        impact: "Serious",
        tags: "cat.keyboard, wcag2a, wcag241, section508, section508.22.o, TTv5,TT9.a, EN-301-549, EN-9.2.4.1",
        issueType: "needs&nbsp;review",
        actRules: "cf77f2,047fe0,b40fd1,3e12e1,ye5d6e"
    },
    {
        "ruleId": "color-contrast",
        description: "Ensures the contrast between foreground and background colors meetsWCAG 2 AA minimum contrast ratio thresholds",
        impact: "Serious",
        tags: "cat.color, wcag2aa, wcag143, TTv5, TT13.c, EN-301-549, EN-9.1.4.3, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "afw4f7,09o5cg"
    },
    {
        "ruleId": "definition-list",
        description: "Ensures &lt;dl&gt; elements are structured correctly",
        impact: "Serious",
        tags: "cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure"
    },
    {
        "ruleId": "dlitem",
        description: "Ensures &lt;dt&gt; and &lt;dd&gt; elements are contained by a&lt;dl&gt;",
        impact: "Serious",
        tags: "cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure"
    },
    {
        "ruleId": "document-title",
        description: "Ensures each HTML document contains a non-empty &lt;title&gt; element",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag242, TTv5, TT12.a, EN-301-549,EN-9.2.4.2, ACT",
        issueType: "failure",
        actRules: "2779a5"
    },
    {
        "ruleId": "duplicate-id-aria",
        description: "Ensures every id attribute value used in ARIA and in labels is unique",
        impact: "Critical",
        tags: "cat.parsing, wcag2a, wcag412, EN-301-549, EN-9.4.1.2",
        issueType: "needs&nbsp;review",
        actRules: "3ea0c8"
    },
    {
        "ruleId": "form-field-multiple-labels",
        description: "Ensures form field does not have multiple label elements",
        impact: "Moderate",
        tags: "cat.forms, wcag2a, wcag332, TTv5, TT5.c, EN-301-549, EN-9.3.3.2",
        issueType: "needs&nbsp;review"
    },
    {
        "ruleId": "frame-focusable-content",
        description: "Ensures &lt;frame&gt; and &lt;iframe&gt; elements with focusablecontent do not have tabindex=-1",
        impact: "Serious",
        tags: "cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1",
        issueType: "failure, needs&nbsp;review",
        actRules: "akn7bn"
    },
    {
        "ruleId": "frame-title-unique",
        description: "Ensures &lt;iframe&gt; and &lt;frame&gt; elements contain a uniquetitle attribute",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag412, TTv5, TT12.d, EN-301-549,EN-9.4.1.2",
        issueType: "needs&nbsp;review",
        actRules: "4b1c6c"
    },
    {
        "ruleId": "frame-title",
        description: "Ensures &lt;iframe&gt; and &lt;frame&gt; elements have an accessiblename",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag412, section508, section508.22.i,TTv5, TT12.d, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "cae760"
    },
    {
        "ruleId": "html-has-lang",
        description: "Ensures every HTML document has a lang attribute",
        impact: "Serious",
        tags: "cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1,ACT",
        issueType: "failure",
        actRules: "b5c3f8"
    },
    {
        "ruleId": "html-lang-valid",
        description: "Ensures the lang attribute of the &lt;html&gt; element has a validvalue",
        impact: "Serious",
        tags: "cat.language, wcag2a, wcag311, TTv5, TT11.a, EN-301-549, EN-9.3.1.1,ACT",
        issueType: "failure",
        actRules: "bf051a"
    },
    {
        "ruleId": "html-xml-lang-mismatch",
        description: "Ensure that HTML elements with both valid lang and xml:lang attributesagree on the base language of the page",
        impact: "Moderate",
        tags: "cat.language, wcag2a, wcag311, EN-301-549, EN-9.3.1.1, ACT",
        issueType: "failure",
        actRules: "5b7ae0"
    },
    {
        "ruleId": "image-alt",
        description: "Ensures &lt;img&gt; elements have alternate text or a role of none orpresentation",
        impact: "Critical",
        tags: "cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a,TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "23a2a8"
    },
    {
        "ruleId": "input-button-name",
        description: "Ensures input buttons have discernible text",
        impact: "Critical",
        tags: "cat.name-role-value, wcag2a, wcag412, section508, section508.22.a,TTv5, TT5.c, EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "97a4e1"
    },
    {
        "ruleId": "input-image-alt",
        description: "Ensures &lt;input type=&quot;image&quot;&gt; elements have alternatetext",
        impact: "Critical",
        tags: "cat.text-alternatives, wcag2a, wcag111, wcag412, section508,section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "59796f"
    },
    {
        "ruleId": "label",
        description: "Ensures every form element has a label",
        impact: "Critical",
        tags: "cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c,EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "e086e5"
    },
    {
        "ruleId": "link-in-text-block",
        description: "Ensure links are distinguished from surrounding text in a way thatdoes not rely on color",
        impact: "Serious",
        tags: "cat.color, wcag2a, wcag141, TTv5, TT13.a, EN-301-549, EN-9.1.4.1",
        issueType: "failure, needs&nbsp;review"
    },
    {
        "ruleId": "link-name",
        description: "Ensures links have discernible text",
        impact: "Serious",
        tags: "cat.name-role-value, wcag2a, wcag244, wcag412, section508,section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "c487ae"
    },
    {
        "ruleId": "list",
        description: "Ensures that lists are structured correctly",
        impact: "Serious",
        tags: "cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure"
    },
    {
        "ruleId": "listitem",
        description: "Ensures &lt;li&gt; elements are used semantically",
        impact: "Serious",
        tags: "cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1",
        issueType: "failure"
    },
    {
        "ruleId": "marquee",
        description: "Ensures &lt;marquee&gt; elements are not used",
        impact: "Serious",
        tags: "cat.parsing, wcag2a, wcag222, TTv5, TT2.b, EN-301-549, EN-9.2.2.2",
        issueType: "failure"
    },
    {
        "ruleId": "meta-refresh",
        description: "Ensures &lt;meta http-equiv=&quot;refresh&quot;&gt; is not used fordelayed refresh",
        impact: "Critical",
        tags: "cat.time-and-media, wcag2a, wcag221, TTv5, TT8.a, EN-301-549,EN-9.2.2.1",
        issueType: "failure",
        actRules: "bc659a,bisz58"
    },
    {
        "ruleId": "meta-viewport",
        description: "Ensures &lt;meta name=&quot;viewport&quot;&gt; does not disable textscaling and zooming",
        impact: "Critical",
        tags: "cat.sensory-and-visual-cues, wcag2aa, wcag144, EN-301-549, EN-9.1.4.4,ACT",
        issueType: "failure",
        actRules: "b4f0c3"
    },
    {
        "ruleId": "nested-interactive",
        description: "Ensures interactive controls are not nested as they are not alwaysannounced by screen readers or can cause focus problems for assistivetechnologies",
        impact: "Serious",
        tags: "cat.keyboard, wcag2a, wcag412, TTv5, TT6.a, EN-301-549, EN-9.4.1.2",
        issueType: "failure, needs&nbsp;review",
        actRules: "307n5z"
    },
    {
        "ruleId": "no-autoplay-audio",
        description: "Ensures &lt;video&gt; or &lt;audio&gt; elements do not autoplay audiofor more than 3 seconds without a control mechanism to stop or mutethe audio",
        impact: "Moderate",
        tags: "cat.time-and-media, wcag2a, wcag142, TTv5, TT2.a, EN-301-549,EN-9.1.4.2, ACT",
        issueType: "needs&nbsp;review",
        actRules: "80f0bf"
    },
    {
        "ruleId": "object-alt",
        description: "Ensures &lt;object&gt; elements have alternate text",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a,EN-301-549, EN-9.1.1.1",
        issueType: "failure, needs&nbsp;review",
        actRules: "8fc3b6"
    },
    {
        "ruleId": "role-img-alt",
        description: "Ensures [role=&quot;img&quot;] elements have alternate text",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a,TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "23a2a8"
    },
    {
        "ruleId": "scrollable-region-focusable",
        description: "Ensure elements that have scrollable content are accessible bykeyboard",
        impact: "Serious",
        tags: "cat.keyboard, wcag2a, wcag211, TTv5, TT4.a, EN-301-549, EN-9.2.1.1",
        issueType: "failure",
        actRules: "0ssw9k"
    },
    {
        "ruleId": "select-name",
        description: "Ensures select element has an accessible name",
        impact: "Critical",
        tags: "cat.forms, wcag2a, wcag412, section508, section508.22.n, TTv5, TT5.c,EN-301-549, EN-9.4.1.2, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "e086e5"
    },
    {
        "ruleId": "server-side-image-map",
        description: "Ensures that server-side image maps are not used",
        impact: "Minor",
        tags: "cat.text-alternatives, wcag2a, wcag211, section508, section508.22.f,TTv5, TT4.a, EN-301-549, EN-9.2.1.1",
        issueType: "needs&nbsp;review"
    },
    {
        "ruleId": "svg-img-alt",
        description: "Ensures &lt;svg&gt; elements with an img, graphics-document orgraphics-symbol role have an accessible text",
        impact: "Serious",
        tags: "cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a,TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT",
        issueType: "failure, needs&nbsp;review",
        actRules: "7d6734"
    },
    {
        "ruleId": "td-headers-attr",
        description: "Ensure that each cell in a table that uses the headers attributerefers only to other cells in that table",
        impact: "Serious",
        tags: "cat.tables, wcag2a, wcag131, section508, section508.22.g, TTv5,TT14.b, EN-301-549, EN-9.1.3.1",
        issueType: "failure, needs&nbsp;review",
        actRules: "a25f45"
    },
    {
        "ruleId": "th-has-data-cells",
        description: "Ensure that &lt;th&gt; elements and elements withrole=columnheader/rowheader have data cells they describe",
        impact: "Serious",
        tags: "cat.tables, wcag2a, wcag131, section508, section508.22.g, TTv5,TT14.b, EN-301-549, EN-9.1.3.1",
        issueType: "failure, needs&nbsp;review",
        actRules: "d0f69e"
    },
    {
        "ruleId": "valid-lang",
        description: "Ensures lang attributes have valid values",
        impact: "Serious",
        tags: "cat.language, wcag2aa, wcag312, TTv5, TT11.b, EN-301-549, EN-9.3.1.2,ACT",
        issueType: "failure",
        actRules: "de46e4"
    },
    {
        "ruleId": "video-caption",
        description: "Ensures &lt;video&gt; elements have captions",
        impact: "Critical",
        tags: "cat.text-alternatives, wcag2a, wcag122, section508, section508.22.a,TTv5, TT17.a, EN-301-549, EN-9.1.2.2",
        issueType: "needs&nbsp;review",
        actRules: "eac66b"
    }
]

export {axeRulesData};